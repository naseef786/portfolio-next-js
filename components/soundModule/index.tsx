"use client";

import React, { useRef, useEffect } from "react";

export const AudioSystem = ({ children }: { children: React.ReactNode }) => {
    const hoverSound = useRef<HTMLAudioElement | null>(null);
    const clickSound = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Systematic Preloading
        hoverSound.current = new Audio("/sounds/robo.mp3"); // Short & High
        clickSound.current = new Audio("/sounds/robo.mp3"); // Solid & Lower

        hoverSound.current.volume = 0.05;
        clickSound.current.volume = 0.12;
    }, []);

    const handleInteraction = (e: React.MouseEvent) => {
        const target = (e.target as HTMLElement).closest("button, a, .swiper-btn");
        if (!target) return;

        if (e.type === "mouseenter" && hoverSound.current) {
            hoverSound.current.currentTime = 0;
            hoverSound.current.play().catch(() => { });
        }

        if (e.type === "mousedown" && clickSound.current) {
            clickSound.current.currentTime = 0;
            clickSound.current.play().catch(() => { });
        }
    };

    return (
        <div
            onMouseEnter={handleInteraction}
            onMouseDown={handleInteraction}
            className="contents"
        >
            {children}
        </div>
    );
};