import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, X, Volume2 } from 'lucide-react';
import songBanner from '../assets/Song_banner.jpg';

const StickyMusicPlayer = ({ isPlaying, onToggle, currentTime, duration, onSeek }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(24);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const distToBottom = documentHeight - (scrollY + windowHeight);

            // Toggle Visibility based on Hero section (approx 600px)
            let shouldShow = scrollY > 600;

            // Check if on mobile and overlapping with Contact section
            if (shouldShow && window.innerWidth < 768) {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    const rect = contactSection.getBoundingClientRect();
                    // If contact section top is within viewport (meaning it's visible)
                    if (rect.top < windowHeight) {
                        shouldShow = false;
                    }
                }
            }

            setIsVisible(shouldShow);

            // Footer Collision Logic
            const footerHeight = 450;
            if (distToBottom < footerHeight) {
                setBottomOffset(24 + (footerHeight - distToBottom));
            } else {
                setBottomOffset(24);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on mount
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 200, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    style={{ bottom: `${bottomOffset}px` }}
                    className="fixed left-0 right-0 md:left-auto md:right-6 z-50 w-full max-w-sm mx-auto md:mx-0 transition-all duration-75 px-4 md:px-0"
                >
                    <div className="bg-neon-lime border-4 border-black shadow-brutal p-4 relative">
                        <div className="flex items-center gap-4">
                            {/* Album Art (Static) */}
                            <div className="w-16 h-16 border-2 border-black overflow-hidden flex-shrink-0 relative">
                                <img src={songBanner} alt="Album Art" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/10 rounded-full w-2 h-2 m-auto"></div>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="overflow-hidden">
                                        <h3 className="font-black text-black truncate uppercase text-sm">Sunflower</h3>
                                        <p className="text-xs font-bold text-black/70 truncate">Post Malone, Swae Lee</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={onToggle}
                                            className="w-10 h-10 bg-black text-white flex items-center justify-center border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                                        >
                                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="space-y-1">
                                    <input
                                        type="range"
                                        min={0}
                                        max={duration || 100}
                                        value={currentTime}
                                        onChange={(e) => onSeek(Number(e.target.value))}
                                        className="w-full h-2 bg-black/10 rounded-none appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-black"
                                    />
                                    <div className="flex justify-between text-[10px] font-mono font-bold">
                                        <span>{formatTime(currentTime)}</span>
                                        <span>{formatTime(duration)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Tag */}
                        <div className="absolute -top-3 -right-3 bg-black text-white text-[10px] font-bold px-2 py-1 rotate-3">
                            NOW PLAYING
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyMusicPlayer;
