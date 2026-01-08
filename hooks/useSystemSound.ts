"use client";
import { useRef, useEffect } from 'react';

export const useSystemSound = (url: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  console.log("yessss");

  useEffect(() => {
    audioRef.current = new Audio(url);
    audioRef.current.volume = 0.1; // Professional low volume
    audioRef.current.preload = "auto";
  }, [url]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start for rapid clicks
      audioRef.current.play().catch(() => { }); // Avoid console errors
    }
  };

  return play;
};