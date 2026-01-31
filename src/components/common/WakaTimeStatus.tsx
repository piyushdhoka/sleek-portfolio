'use client';

import { useEffect, useState } from 'react';
import Antigravity from '../svgs/Antigravity';

interface WakaTimeData {
    codingTime: string;
    hours: number;
    minutes: number;
    totalSeconds: number;
    editor: string;
    text?: string;
    error?: string;
    isOnline?: boolean;
}

export default function WakaTimeStatus() {
    const [data, setData] = useState<WakaTimeData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchWakaTime = async () => {
            try {
                const response = await fetch('/api/wakatime');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Failed to fetch WakaTime data:', error);
                setData({ codingTime: 'Error', hours: 0, minutes: 0, totalSeconds: 0, editor: 'Unknown', isOnline: false });
            } finally {
                setLoading(false);
            }
        };

        fetchWakaTime();

        // Refresh status every minute
        const interval = setInterval(fetchWakaTime, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="relative flex items-center">
                <div className="h-6 w-6 rounded-full bg-neutral-700 animate-pulse border-[3px] border-neutral-600"></div>
            </div>
        );
    }

    if (!data || data.error) {
        return null;
    }

    const isOnline = data.isOnline ?? false;

    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Small indicator dot - green when online, grey when offline */}
            <div className="h-6 w-6 rounded-full bg-white dark:bg-black border-[3px] border-neutral-300 dark:border-neutral-600 flex items-center justify-center cursor-pointer transition-all duration-200 shadow-sm">
                <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${isOnline ? 'bg-green-500' : 'bg-neutral-500'}`}></div>
            </div>

            {/* Expanded tooltip on hover */}
            <div
                className={`absolute left-7 top-1/2 -translate-y-1/2 z-50 transition-all duration-200 ${isHovered
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 -translate-x-2 pointer-events-none'
                    }`}
            >
                {/* Tooltip content */}
                <div className="inline-flex flex-col items-start gap-0.5 rounded-xl bg-neutral-800 px-3.5 py-2.5 text-sm text-white shadow-xl whitespace-nowrap">
                    {/* Status line */}
                    <div className="flex items-center gap-1.5">
                        <span className={`inline-block h-2 w-2 rounded-full transition-colors duration-300 ${isOnline ? 'bg-green-500' : 'bg-neutral-500'}`}></span>
                        <span className="text-neutral-300">{isOnline ? 'Online' : 'Offline'} in</span>
                        <Antigravity className="text-neutral-300" />
                        <span className="font-medium text-white">Antigravity</span>
                    </div>

                    {/* Time line */}
                    <div className="text-neutral-400">
                        Yesterday worked{' '}
                        <span className="font-semibold text-white">{data.codingTime}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
