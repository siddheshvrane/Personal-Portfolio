import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, X, Volume2 } from 'lucide-react';
import songBanner from '../assets/Song_banner.jpg';

const StickyMusicPlayer = ({ isPlaying, onToggle, currentTime, duration, onSeek }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomOffset, setBottomOffset] = useState(24);

    useEffect(() => {
        let ticking = false;
        const contactSection = document.getElementById('contact');
        const footerSection = document.getElementById('footer');

        // Intersection Observer for Contact Section (Mobile only check)
        const observerCallback = (entries) => {
            const [entry] = entries;
            // If contact section is visible (intersecting) and we are on mobile
            if (entry.isIntersecting && window.innerWidth < 768) {
                setIsVisible(false);
            } else {
                // Re-evaluate visibility based on scroll position if not intersecting contact
                checkScrollVisibility();
            }
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1 // Trigger when 10% of contact is visible
        });

        if (contactSection) {
            observer.observe(contactSection);
        }

        const checkScrollVisibility = () => {
            const scrollY = window.scrollY;
            // Basic visibility check (past Hero)
            if (scrollY > 600) {
                // Double check mobile contact overlap if needed, but observer handles most
                // Just set true here, observer callback will override if contact is view
                // checking overlap manually for robustness if observer didn't fire recently
                if (contactSection && window.innerWidth < 768) {
                    const rect = contactSection.getBoundingClientRect();
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        setIsVisible(false);
                        return;
                    }
                }
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const updatePosition = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Check visibility based on scroll depth
            checkScrollVisibility();

            // Footer Collision Logic
            if (footerSection) {
                const footerRect = footerSection.getBoundingClientRect();
                const visibleFooterHeight = Math.max(0, windowHeight - footerRect.top);
                setBottomOffset(24 + visibleFooterHeight);
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updatePosition);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', updatePosition);
        // Trigger once on mount
        updatePosition();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updatePosition);
            if (contactSection) observer.unobserve(contactSection);
        };
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
                    className="fixed left-0 right-0 md:left-auto md:right-6 z-50 w-full max-w-sm mx-auto md:mx-0 px-4 md:px-0"
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
