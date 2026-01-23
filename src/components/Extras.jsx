import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, PenTool, Image, BookOpen, Folder, FolderOpen, X, Play, Pause, Waves } from 'lucide-react';

// Import images
import imgSabrina from '../assets/extras/music/Sabrina.png';
import imgArijit from '../assets/extras/music/Arijit.png';
import imgLata from '../assets/extras/music/Lata.png';
import imgShreya from '../assets/extras/music/Shreya.png';
import imgWeeknd from '../assets/extras/music/Weeknd.png';
import imgPritam from '../assets/extras/music/Pritam.png';

// Import book images
import imgAtomic from '../assets/Extras/Books/Atomic habits.jpg';
import imgDeepWork from '../assets/Extras/Books/Deep Work.jpg';
import imgJaya from '../assets/Extras/Books/Jaya.jpg';
import imgRichDad from '../assets/Extras/Books/Rich dad poor dad.jpg';
import imgScion from '../assets/Extras/Books/Scion_of_Ikshvaku.jpg';

// Import Song Assets
import audioWeeknd from '../assets/Extras/Music/Songs/The Weeknd - Out of Time (Audio).mp3';
import imgWeekndCover from '../assets/Extras/Music/Songs/Out of Time.jpg';
import audioSabrina from '../assets/Extras/Music/Songs/Busy Woman.mp3';
import imgSabrinaCover from '../assets/Extras/Music/Songs/Busy Woman.jpg';
import audioLata from '../assets/Extras/Music/Songs/Ajeeb Dastaan.m4a';
import imgLataCover from '../assets/Extras/Music/Songs/Ajeeb Dastaan.jpg';
import imgMi from '../assets/Extras/Poem/Mi.jpg';


const MusicGuessGame = () => {
    const [showX, setShowX] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const getStrokeStyle = (color) => {
        let hex = color;
        if (color === "blue") hex = "#60a5fa";
        if (color === "orange") hex = "#fb923c";
        if (color === "yellow") hex = "#fde047";
        if (color === "pink") hex = "#f472b6";
        if (color === "red") hex = "#dc2626";

        return {
            filter: `drop-shadow(2px 0 0 ${hex}) drop-shadow(-2px 0 0 ${hex}) drop-shadow(0 2px 0 ${hex}) drop-shadow(0 -2px 0 ${hex})`
        };
    };

    const artists = [
        { id: 1, name: "Sabrina Carpenter", img: imgSabrina, borderColor: "blue" },
        { id: 2, name: "Arijit Singh", img: imgArijit, borderColor: "orange" },
        { id: 3, name: "Lata Mangeshkar", img: imgLata, borderColor: "yellow" },
        { id: 4, name: "Shreya Ghoshal", img: imgShreya, borderColor: "pink" },
        { id: 5, name: "The Weeknd", img: imgWeeknd, borderColor: "red" },
    ];

    const handleGuess = () => {
        setShowX(true);
        setTimeout(() => {
            setShowResult(true);
        }, 1500);
    };

    return (
        <div className="relative w-full h-64 md:h-72 flex items-center justify-center font-mono overflow-hidden">
            {/* Background Artists Layer */}
            <div className={`
                absolute inset-0 flex flex-col items-center justify-center transition-all duration-500
                ${showResult ? 'blur-sm grayscale opacity-60' : ''}
            `}>
                <h4 className="font-black uppercase mb-4 text-xl text-center">Guess My Most Played Artist</h4>
                <div className="flex flex-wrap justify-center gap-6">
                    {artists.map((artist) => (
                        <motion.div
                            key={artist.id}
                            className={`relative flex flex-col items-center cursor-pointer group
                                ${showX ? 'pointer-events-none' : ''}
                            `}
                            onClick={handleGuess}
                            whileHover={!showX ? { rotate: [-3, 3, -3], scale: 1.1, transition: { duration: 0.3 } } : {}}
                            whileTap={!showX ? { scale: 0.95 } : {}}
                        >
                            <div className="w-24 h-28 md:w-28 md:h-32 relative">
                                <img
                                    src={artist.img}
                                    alt={artist.name}
                                    className="w-full h-full object-contain transition-all duration-300"
                                    style={getStrokeStyle(artist.borderColor)}
                                />
                                {showX && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <X className="text-red-600 w-16 h-16 drop-shadow-md stroke-[4]" />
                                    </div>
                                )}
                            </div>
                            <p className="mt-2 text-xs font-bold text-center uppercase tracking-tight">
                                {artist.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Result Overlay */}
            <AnimatePresence>
                {showResult && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute z-10 w-[95%] md:w-[90%] p-3 md:p-4 bg-black/85 backdrop-blur-md text-neon-lime border-4 border-neon-lime shadow-[6px_6px_0px_0px_#ccff00]"
                    >
                        <div className="flex flex-row items-center gap-4 md:gap-6">
                            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0">
                                <img
                                    src={imgPritam}
                                    alt="Pritam"
                                    className="w-full h-full object-contain filter drop-shadow-[2px_2px_0px_#ccff00]"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <h3 className="text-2xl md:text-3xl font-black uppercase mb-1 animate-pulse leading-none">
                                    It's PRITAM!
                                </h3>
                                <p className="font-mono text-[10px] md:text-sm text-white leading-tight">
                                    I don't know how he appears each year as my top artist even though I never intentionally play his songs... <br />
                                    <span className="text-neon-lime italic mt-1 block">Maybe that's the magic his songs hold.</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PixelFolder = ({ color, title, isOpen, onClick }) => {
    // Helper to get hex from tailwind class string
    const getHexColor = (c) => {
        if (c.includes('neon-lime')) return '#ccff00';
        if (c.includes('neon-orange')) return '#ff4d00';
        if (c.includes('pink')) return '#f472b6'; // pink-400
        if (c.includes('blue')) return '#60a5fa'; // blue-400
        return '#fcfcfc';
    };

    const fillHex = getHexColor(color);

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="cursor-pointer group flex flex-col items-center"
        >
            <div className="relative w-40 h-40 md:w-52 md:h-52">
                {/* Shadow Layer (Offset pixelated) */}
                <svg
                    viewBox="0 0 16 16"
                    className="w-full h-full absolute top-2 left-2 opacity-100"
                    style={{ shapeRendering: 'crispEdges' }}
                >
                    <path d="M2 4 h6 l1 -1 h5 v9 h-12 z" fill="#000000" /> {/* Back Shadow */}
                    <path d="M2 6 h12 v7 h-12 z" fill="#000000" /> {/* Front Shadow */}
                </svg>

                {/* Main Icon Layer */}
                <svg
                    viewBox="0 0 16 16"
                    className={`w-full h-full relative z-10 transition-transform duration-200 ${isOpen ? 'translate-y-[-2px]' : 'group-hover:translate-y-[-4px]'}`}
                    style={{ shapeRendering: 'crispEdges' }}
                >
                    {/* Folder Back Tab Area */}
                    <path d="M2 5 h6 l1 -1 h5 v10 h-12 z" fill="#fcfcfc" stroke="black" strokeWidth="0.5" />
                    <path d="M2 5 h6 l1 -1 h5 v10 h-12 z" fill={fillHex} opacity="0.5" />

                    {/* Paper Sheet (visible when open) */}
                    {isOpen && (
                        <motion.rect
                            initial={{ y: 2 }}
                            animate={{ y: -2 }}
                            x="3" y="5" width="10" height="8" fill="white" stroke="black" strokeWidth="0.5"
                        />
                    )}

                    {/* Folder Front */}
                    <path
                        d={isOpen ? "M2 8 H14 L13.5 13 H2.5 L2 8 Z" : "M2 6 H14 V13 H2 Z"}
                        fill={fillHex}
                        stroke="black"
                        strokeWidth="0.5"
                    />

                    {/* Front Highlight/Detail */}
                    {!isOpen && <rect x="3" y="7" width="10" height="1" fill="black" fillOpacity="0.1" />}
                </svg>
            </div>

            <div className="mt-4 text-center">
                <h3 className="font-mono font-bold uppercase text-lg md:text-xl leading-tight group-hover:underline decoration-4 underline-offset-4 decoration-neon-lime">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
};

const Extras = ({ onPlaySong, currentSong, isPlaying }) => {
    const [activeTab, setActiveTab] = useState(null);

    const hobbies = [
        {
            id: 1,
            title: "Listening Music",
            icon: <Music size={32} />,
            color: "bg-neon-lime",
            // Content for right side provided in render
            rightContent: (
                <div className="space-y-6">
                    <p className="font-mono text-lg md:text-xl leading-relaxed">
                        Music isn't just background noise; it's my <span className="underline decoration-4 decoration-neon-lime font-bold">lifeline</span>.
                        It dictates my mood, fuels my code, and heals my soul.
                        From retro Bollywood classics to synth-pop bangers, my playlist is a chaotic beautiful mess.
                    </p>
                    <div className="p-6 border-2 border-black bg-white shadow-brutal-sm">
                        <h4 className="font-black uppercase mb-4 text-xl">Some Picks</h4>
                        <ul className="space-y-2 font-mono text-sm border-t-2 border-black pt-2">
                            <li className="flex justify-between items-center">
                                <div className="flex flex-col">
                                    <span>01. Busy Woman</span>
                                    <span className="font-bold text-xs">Sabrina Carpenter</span>
                                </div>
                                <button className={`p-2 border border-black transition-colors ${currentSong?.title === "Busy Woman" && isPlaying ? 'bg-neon-lime text-black' : 'bg-black text-white hover:bg-white hover:text-black'}`}
                                    onClick={() => onPlaySong({
                                        title: "Busy Woman",
                                        artist: "Sabrina Carpenter",
                                        cover: imgSabrinaCover,
                                        src: audioSabrina
                                    })}
                                >
                                    {currentSong?.title === "Busy Woman" && isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                                </button>
                            </li>
                            <li className="flex justify-between items-center border-t border-dashed border-gray-400 pt-2">
                                <div className="flex flex-col">
                                    <span>02. Ajeeb Dastaan Hai Ye</span>
                                    <span className="font-bold text-xs">Lata Mangeshkar</span>
                                </div>
                                <button className={`p-2 border border-black transition-colors ${currentSong?.title === "Ajeeb Dastaan Hai Ye" && isPlaying ? 'bg-neon-lime text-black' : 'bg-black text-white hover:bg-white hover:text-black'}`}
                                    onClick={() => onPlaySong({
                                        title: "Ajeeb Dastaan Hai Ye",
                                        artist: "Lata Mangeshkar",
                                        cover: imgLataCover,
                                        src: audioLata
                                    })}
                                >
                                    {currentSong?.title === "Ajeeb Dastaan Hai Ye" && isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                                </button>
                            </li>
                            <li className="flex justify-between items-center border-t border-dashed border-gray-400 pt-2">
                                <div className="flex flex-col">
                                    <span>03. Out of Time</span>
                                    <span className="font-bold text-xs">The Weeknd</span>
                                </div>
                                <button
                                    className={`p-2 border border-black transition-colors ${currentSong?.title === "Out of Time" && isPlaying ? 'bg-neon-lime text-black' : 'bg-black text-white hover:bg-white hover:text-black'}`}
                                    onClick={() => onPlaySong({
                                        title: "Out of Time",
                                        artist: "The Weeknd",
                                        cover: imgWeekndCover,
                                        src: audioWeeknd
                                    })}
                                >
                                    {currentSong?.title === "Out of Time" && isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Reading Books",
            icon: <BookOpen size={32} />,
            color: "bg-blue-400",
            content: (
                <div className="space-y-6">
                    <p className="font-mono text-lg md:text-xl leading-relaxed">
                        Reading is my portal to other worlds and perspectives.
                        It's where I find stillness in chaos and wisdom in silence.
                    </p>
                    <div className="p-6 border-2 border-black bg-white shadow-brutal-sm bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
                        <h4 className="font-black uppercase mb-4 text-xl">Some Good Reads</h4>
                        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12 pb-4">
                            {[
                                { title: "Atomic Habits", img: imgAtomic },
                                { title: "Deep Work", img: imgDeepWork },
                                { title: "Jaya", img: imgJaya },
                                { title: "Rich Dad Poor Dad", img: imgRichDad },
                                { title: "Scion of Ikshvaku", img: imgScion },
                            ].map((book, index) => (
                                <div key={index} className="flex-shrink-0 w-32 flex flex-col items-center gap-3 group/book cursor-pointer">
                                    <div className="w-full aspect-[2/3] border-2 border-black overflow-hidden relative shadow-sm bg-gray-200">
                                        <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="font-mono text-xs text-center font-bold leading-tight line-clamp-2">{book.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Writing Poems",
            icon: <PenTool size={32} />,
            color: "bg-neon-orange",
            content: (
                <div className="space-y-6">
                    <div className="font-mono text-lg md:text-xl leading-relaxed border-l-4 border-neon-orange pl-4 bg-gray-50 p-2">
                        <span className="font-black bg-black text-white px-2 py-0.5 text-sm mr-2">README.md</span>
                        Compiling abstract feelings into structured verses. Documentation for the soul—no merge conflicts allowed.
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Left: Poem Image */}
                        <div className="w-full md:w-1/2">
                            <div className="border-4 border-black p-2 bg-white shadow-brutal-sm rotate-[-2deg]">
                                <img src={imgMi} alt="Mi Poem Art" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
                            </div>
                        </div>

                        {/* Right: Poem Content */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <p className="font-mono text-lg text-center font-bold uppercase decoration-neon-orange underline underline-offset-4 mt-4">
                                मी ?
                            </p>
                            <div className="p-6 border-2 border-black bg-white shadow-brutal-sm font-bold font-mono text-lg md:text-xl leading-relaxed text-center italic">
                                <p className="mb-2">
                                    रंगी वेष मी ?
                                </p>
                                <p className="mb-2">
                                    की बाह्य अंगी रेष मी ?
                                </p>
                                <p className="mb-2">
                                    आत्म अज्ञानी माझा मी ?
                                </p>
                                <p>
                                    की दुजे बोली तोची मी ?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Appendix",
            icon: <Waves size={32} />,
            color: "bg-pink-400",
            content: (
                <div className="space-y-6">
                    <div className="relative p-6 border-2 border-black bg-white shadow-brutal-sm overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                            <svg className="w-full h-full" preserveAspectRatio="none">
                                <motion.path
                                    d="M0 50 Q 25 20, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50 T 450 50"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1, pathOffset: [0, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col gap-4">
                            <p className="font-mono text-lg leading-relaxed">
                                <span className="text-3xl mr-2"></span>
                                My mood is something like <span className="font-bold underline decoration-wavy decoration-neon-orange">Sinusoidal waves</span>.
                                Sometimes a wave of hobby erodes and fades, then some another hobby appears in a quirky cool way...
                            </p>

                            {/* Sine Wave Animation */}
                            <div className="w-full h-12 flex items-center justify-center overflow-hidden my-2">
                                <svg width="100%" height="100%" viewBox="0 0 400 60" preserveAspectRatio="none">
                                    <motion.path
                                        d="M0 30 Q 10 5, 20 30 T 40 30 T 60 30 T 80 30 T 100 30 T 120 30 T 140 30 T 160 30 T 180 30 T 200 30 T 220 30 T 240 30 T 260 30 T 280 30 T 300 30 T 320 30 T 340 30 T 360 30 T 380 30 T 400 30 T 420 30 T 440 30"
                                        fill="none"
                                        stroke="#ccff00"
                                        strokeWidth="3"
                                        animate={{ x: [-40, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                    />
                                    <motion.path
                                        d="M0 30 Q 10 55, 20 30 T 40 30 T 60 30 T 80 30 T 100 30 T 120 30 T 140 30 T 160 30 T 180 30 T 200 30 T 220 30 T 240 30 T 260 30 T 280 30 T 300 30 T 320 30 T 340 30 T 360 30 T 380 30 T 400 30 T 420 30 T 440 30"
                                        fill="none"
                                        stroke="black"
                                        strokeWidth="3"
                                        animate={{ x: [-40, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        style={{ opacity: 0.6 }}
                                    />
                                </svg>
                            </div>

                            <p className="font-mono text-sm md:text-base border-l-4 border-black pl-4 italic">
                                Still some worth mentioning hobbies...
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {["Singing", "Drawing", "Travelling", "Understanding/Exploring various forms of Art", "Building creative neural networks"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 border-2 border-black bg-gray-100 font-bold text-xs uppercase hover:bg-neon-lime transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                                <span className="px-3 py-1 bg-black text-white font-mono text-xs">etc, etc... and list never ends</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section className="py-20 bg-off-white border-b-4 border-black overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-8xl font-black mb-4 uppercase tracking-tighter">
                        Extras<span className="text-neon-orange">*</span>
                    </h2>
                    <div className="w-16 md:w-24 h-4 bg-black"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-16">
                    {hobbies.map((hobby) => (
                        <PixelFolder
                            key={hobby.id}
                            {...hobby}
                            isOpen={activeTab === hobby.id}
                            onClick={() => setActiveTab(activeTab === hobby.id ? null : hobby.id)}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {activeTab && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0, y: 20 }}
                            animate={{ height: "auto", opacity: 1, y: 0 }}
                            exit={{ height: 0, opacity: 0, y: -20 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="overflow-hidden p-3"
                        >
                            <div className="border-4 border-black bg-white shadow-brutal-lg p-6 md:p-10 relative">
                                <button
                                    onClick={() => setActiveTab(null)}
                                    className="absolute top-4 right-4 p-2 border-2 border-black hover:bg-black hover:text-white transition-colors z-50"
                                >
                                    <X size={24} />
                                </button>

                                {activeTab === 1 || activeTab === 2 || activeTab === 3 || activeTab === 4 ? (
                                    <div className="flex flex-col gap-8">
                                        <h3 className="text-3xl font-black uppercase flex items-center gap-3">
                                            {hobbies.find(h => h.id === activeTab)?.title}
                                        </h3>

                                        {activeTab === 1 && (
                                            <div className="w-full aspect-auto py-2 border-4 border-black bg-neon-lime flex items-center justify-center relative p-2 overflow-hidden">
                                                <MusicGuessGame />
                                            </div>
                                        )}

                                        <div className="w-full">
                                            {activeTab === 1
                                                ? hobbies.find(h => h.id === 1).rightContent
                                                : hobbies.find(h => h.id === activeTab)?.content}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className={`w-full md:w-1/3 aspect-square md:aspect-auto border-4 border-black ${hobbies.find(h => h.id === activeTab)?.color} flex items-center justify-center relative p-4 overflow-hidden`}>
                                            {hobbies.find(h => h.id === activeTab)?.icon}
                                        </div>
                                        <div className="w-full md:w-2/3">
                                            <h3 className="text-3xl font-black uppercase mb-6 flex items-center gap-3">
                                                {hobbies.find(h => h.id === activeTab)?.title}
                                            </h3>
                                            {hobbies.find(h => h.id === activeTab)?.content}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Extras;
