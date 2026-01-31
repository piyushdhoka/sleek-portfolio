import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 1 minute

interface WakaTimeSummary {
    grand_total: {
        hours: number;
        minutes: number;
        text: string;
        total_seconds: number;
    };
    editors: Array<{
        name: string;
        total_seconds: number;
        percent: number;
    }>;
}

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: 'WakaTime API key not configured' },
            { status: 500 }
        );
    }

    try {
        const encodedKey = Buffer.from(apiKey).toString('base64');

        // Fetch heartbeats and yesterday's summary in parallel
        const [heartbeatsResponse, summaryResponse] = await Promise.all([
            // Get recent heartbeats to check if user is currently coding
            fetch('https://wakatime.com/api/v1/users/current/heartbeats?date=' + new Date().toISOString().split('T')[0], {
                headers: { Authorization: `Basic ${encodedKey}` },
                next: { revalidate: 60 }, // Cache for 1 minute
            }),
            // Get yesterday's summary for coding time
            fetch('https://wakatime.com/api/v1/users/current/summaries?range=yesterday', {
                headers: { Authorization: `Basic ${encodedKey}` },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }),
        ]);

        // Check if user is currently online by looking at recent heartbeats
        let isOnline = false;

        if (heartbeatsResponse.ok) {
            const heartbeatsData = await heartbeatsResponse.json();
            const heartbeats = heartbeatsData.data || [];

            if (heartbeats.length > 0) {
                // Get the most recent heartbeat
                const lastHeartbeat = heartbeats[heartbeats.length - 1];
                const lastHeartbeatTime = new Date(lastHeartbeat.time * 1000); // Convert Unix timestamp
                const now = new Date();
                const diffMinutes = (now.getTime() - lastHeartbeatTime.getTime()) / (1000 * 60);

                // User is online if they had activity within the last 5 minutes
                isOnline = diffMinutes <= 5;
            }
        }

        // Parse summary response
        if (!summaryResponse.ok) {
            console.error('WakaTime API error:', summaryResponse.status, summaryResponse.statusText);
            return NextResponse.json(
                { error: 'Failed to fetch WakaTime data' },
                { status: summaryResponse.status }
            );
        }

        const summaryData = await summaryResponse.json();
        const summary: WakaTimeSummary = summaryData.data?.[0] || null;

        if (!summary) {
            return NextResponse.json({
                codingTime: 'No data',
                hours: 0,
                minutes: 0,
                totalSeconds: 0,
                editor: 'Antigravity', // Always show Antigravity
                isOnline,
            });
        }

        // Format the time display
        const hours = summary.grand_total?.hours || 0;
        const minutes = summary.grand_total?.minutes || 0;
        const totalSeconds = summary.grand_total?.total_seconds || 0;

        let codingTime = '';
        if (hours > 0) {
            codingTime = `${hours}h ${minutes}m`;
        } else if (minutes > 0) {
            codingTime = `${minutes}m`;
        } else {
            codingTime = 'No coding';
        }

        return NextResponse.json({
            codingTime,
            hours,
            minutes,
            totalSeconds,
            editor: 'Antigravity', // Always show Antigravity
            text: summary.grand_total?.text || codingTime,
            isOnline,
        });
    } catch (error) {
        console.error('Error fetching WakaTime data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch WakaTime data' },
            { status: 500 }
        );
    }
}
