import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 1 minute for real-time status

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

        // Fetch both status and yesterday's summary in parallel
        const [statusResponse, summaryResponse] = await Promise.all([
            // Get current status (heartbeats) - checks if user is online
            fetch('https://wakatime.com/api/v1/users/current/status_bar/today', {
                headers: { Authorization: `Basic ${encodedKey}` },
                next: { revalidate: 60 }, // Cache for 1 minute for real-time feel
            }),
            // Get yesterday's summary for coding time
            fetch('https://wakatime.com/api/v1/users/current/summaries?range=yesterday', {
                headers: { Authorization: `Basic ${encodedKey}` },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }),
        ]);

        // Parse status response
        let isOnline = false;
        let currentEditor = 'Antigravity';

        if (statusResponse.ok) {
            const statusData = await statusResponse.json();
            // User is considered online if they have recent activity (within last 5 minutes)
            // The status_bar endpoint returns data about current coding session
            if (statusData.data) {
                const hasRecentActivity = statusData.data.grand_total?.total_seconds > 0;
                isOnline = hasRecentActivity;

                // Get current editor from today's activity
                if (statusData.data.categories && statusData.data.categories.length > 0) {
                    currentEditor = statusData.data.categories[0]?.name || 'Antigravity';
                }
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
                editor: currentEditor,
                isOnline,
            });
        }

        // Get the primary editor (most used)
        const primaryEditor = summary.editors?.[0]?.name || 'VS Code';

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
            editor: primaryEditor,
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
