import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, Rocket, Play, Pause, MapPin } from 'lucide-react';
import myselfPixel from '../assets/myself_pixel.png';
import songBanner from '../assets/Song_banner.jpg';
import vinylDisc from '../assets/vinyl_disc.png';
import apeImg from '../assets/ape.png';
import compImg from '../assets/computer.png';
import baymax from '../assets/baymax.png';
import humanImg from '../assets/humanity.png';


const Hero = ({ isPlaying, onToggle }) => {
    return (
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-20 border-b-4 border-black bg-off-white relative overflow-hidden">
            {/* Background Grid Pattern (Optional CSS based) */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 inline-block border-2 border-black bg-neon-lime px-4 py-2 font-mono font-bold shadow-brutal rotate-[-2deg]"
                        >
                            👋 HELLO, WORLD!
                        </motion.div>

                        <h1 className="text-5xl md:text-9xl font-black leading-none mb-6 tracking-tighter">
                            Siddhesh <br />
                            <span className="text-neon-orange">
                                Rane here
                            </span>
                        </h1>

                        <div className="flex items-center gap-3 mb-6 inline-flex bg-white border-2 border-black px-4 py-2 shadow-brutal transform hover:translate-x-1 hover:translate-y-1 transition-all">
                            <span className="text-lg md:text-2xl font-black italic text-black font-mono">WHERE?</span>
                            <MapPin size={24} className="text-neon-orange" />
                            <span className="font-bold text-black text-lg md:text-3xl" style={{ fontFamily: "'Khand', sans-serif" }}>मुंबई, भारत</span>
                        </div>

                        <p className="text-lg md:text-2xl font-mono mb-10 max-w-2xl leading-relaxed">
                            Fourth-year KJSIT engineer crafting <span className="bg-black text-white px-1">digital chaos</span> with code, web dev, and having <span className="bg-neon-lime px-1 text-black border border-black">AI optimism</span> for brunch.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="bg-black text-white text-xl font-bold px-8 py-4 border-2 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center">
                                SEE MY WORK
                            </a>
                            <a href="#contact" className="bg-white text-black text-xl font-bold px-8 py-4 border-2 border-black shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all hover:bg-neon-orange text-center">
                                HIRE ME
                            </a>
                        </div>
                    </div>

                    {/* Decorative Brutalist Element */}
                    {/* Rotating Wheel Showcase */}
                    <div className="flex justify-center flex-1 relative h-[350px] md:h-[500px] items-center mt-12 md:mt-0 scale-75 md:scale-100 origin-center">
                        <RotatingWheel isPlaying={isPlaying} onToggle={onToggle} />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <ArrowDown size={48} className="text-black" />
            </motion.div>
        </section>
    );
};

const RotatingWheel = ({ isPlaying, onToggle }) => {
    // Placeholder images - User can replace these URLS
    const items = [
        { id: 1, src: myselfPixel, alt: "My Pixel Self" },
        { id: 2, src: apeImg, alt: "Ape" },
        { id: 3, src: compImg, alt: "Computer" },
        { id: 4, src: baymax, alt: "Baymax" },
        { id: 5, src: humanImg, alt: "Humanity" }
    ];

    // Use a monotonically increasing index to prevent backtracking
    const [rotationIndex, setRotationIndex] = useState(0);
    const radius = 160; // Radius of the wheel

    useEffect(() => {
        const interval = setInterval(() => {
            setRotationIndex((prev) => prev + 1);
        }, 3000); // Slower rotation for better visibility
        return () => clearInterval(interval);
    }, []);

    const angleStep = 360 / items.length;
    // Calculate the current active item index (0 to length-1) for highlighting
    const activeItemIndex = rotationIndex % items.length;

    return (
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            {/* Central Vinyl Player */}
            <div
                className="absolute z-30 w-64 h-64 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform group"
                onClick={onToggle}
            >

                {/* Rotating Container (Vinyl Disc + Banner) */}
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                        animation: `spin 3s linear infinite`,
                        animationPlayState: isPlaying ? 'running' : 'paused'
                    }}
                >
                    {/* Vinyl Disc Background */}
                    <img
                        src={vinylDisc}
                        alt="Vinyl Record"
                        className="absolute w-full h-full object-contain drop-shadow-2xl"
                    />

                    {/* Center Banner Image */}
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-off-white z-10">
                        <img
                            src={songBanner}
                            alt="Album Art"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Play/Pause Overlay Indicator (Static on top) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    {!isPlaying && (
                        <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                            <Play size={32} className="text-white fill-current translate-x-1" />
                        </div>
                    )}
                    {isPlaying && (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-2 backdrop-blur-sm">
                            <Pause size={32} className="text-white fill-current" />
                        </div>
                    )}
                </div>
            </div>

            {/* The Rotating Container (Outer Wheel - Independent) */}
            <motion.div
                className="relative w-full h-full rounded-full border-2 border-black/20 border-dashed"
                animate={{ rotate: -rotationIndex * angleStep }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                {items.map((item, index) => {
                    const angle = index * angleStep;
                    const thetaRad = (angle - 90) * (Math.PI / 180);
                    const x = radius * Math.cos(thetaRad);
                    const y = radius * Math.sin(thetaRad);
                    const isActive = index === activeItemIndex;

                    return (
                        <motion.div
                            key={item.id}
                            className={`absolute w-32 flex items-center justify-center z-10 ${isActive ? 'z-20 drop-shadow-neon scale-125 transition-transform duration-500' : 'opacity-80'}`}
                            style={{
                                left: "50%",
                                top: "50%",
                                x: x - 64,
                                y: y - 64,
                                rotate: angle,
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-auto object-contain drop-shadow-md select-none"
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Global Styles for custom spin if not in tailwind config */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Hero;
