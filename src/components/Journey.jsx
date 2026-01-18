import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Star } from 'lucide-react';

// Importing images directly
import intech24 from '../assets/Journey/INTECH 24.jpeg';
import vidyutSakha from '../assets/Journey/Vidyut Sakha.jpeg';
import avishkar24 from '../assets/Journey/Aavishkar 24.jpeg'; // Note: Aavishkar (double 'a' in file based on search)
import selfInternship from '../assets/Journey/Self Internship.jpeg';
import isroFirstDay from '../assets/Journey/ISRO first day.jpeg';

const journeyData = [
    {
        id: 1,
        title: "INTECH 24",
        image: intech24,
        description: "Presented at INTECH 2k24 project competition by the IET- On Campus KJSIT. With @atharv_wadadekar, @sanskar_srivastava, and @parmesh_vala, showcased GrooveLearn, a comprehensive learning management system.",
        tag: "COMPETITION",
        color: "bg-neon-lime"
    },
    {
        id: 2,
        title: "Vidyut Sakha",
        image: vidyutSakha,
        description: "Developed an IoT-based system to optimize appliance usage using real-time sensor data and mobile app control, reducing energy waste and promoting sustainable energy management.",
        tag: "PROJECT",
        color: "bg-neon-orange"
    },
    {
        id: 3,
        title: "Avishkar 24",
        image: avishkar24,
        description: "I participated in the Avishkar Research Convention, with my teammates @atharv_wadadekar, @parmesh_vala, and @suyash_saraf - we presented our project, Vidhyut Sakha: A Dynamic Appliance Control System for Energy Conservation.",
        tag: "RESEARCH",
        color: "bg-pink-400"
    },
    {
        id: 4,
        title: "Self Internship",
        image: selfInternship,
        description: "Not any type of internship. Just boosting my power levels up in coding and concepts by self studing different techs like Node, Next, Express, basic Machine Learning concepts, QGIS and much more",
        tag: "GRIND",
        color: "bg-yellow-400"
    },
    {
        id: 5,
        title: "ISRO Internship",
        image: isroFirstDay,
        description: "Stepping into the SAC, ISRO was a moment where a childhood aspiration met reality. Under Sri. Nitin Mishra, I worked on system architecture design, modularising and refactoring complex codebases, and implementing clean, scalable layered architectures.",
        tag: "DREAM JOB",
        color: "bg-blue-400"
    }
];

const Journey = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % journeyData.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + journeyData.length) % journeyData.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            rotate: direction > 0 ? 5 : -5,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            rotate: 0,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            rotate: direction < 0 ? 5 : -5,
        }),
    };

    return (
        <section className="py-20 bg-off-white border-b-4 border-black overflow-hidden relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h2 className="text-4xl md:text-8xl font-black mb-4 uppercase tracking-tighter">
                            My <span className="text-neon-orange">Journey</span>
                        </h2>
                        <div className="w-16 md:w-24 h-4 bg-black"></div>
                        <p className="font-mono font-bold mt-4 text-base">The path of chaos and code.</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-3 bg-white border-4 border-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 bg-neon-lime border-4 border-black shadow-brutal hover:shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="w-full">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                rotate: { duration: 0.4 }
                            }}
                            className="w-full"
                        >
                            <div className="bg-white border-4 border-black shadow-brutal-lg overflow-hidden flex flex-col md:flex-row h-full">
                                {/* Image Section - Natural Size */}
                                <div className="w-full md:w-1/2 relative group overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black">


                                    <div className="h-64 md:h-96 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={journeyData[currentIndex].image}
                                            alt={journeyData[currentIndex].title}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-active:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="absolute top-4 left-4 z-20">
                                        <span className={`px-4 py-2 border-2 border-black font-black uppercase tracking-widest text-xs shadow-brutal-xs ${journeyData[currentIndex].color}`}>
                                            {journeyData[currentIndex].tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 p-6 md:p-8 bg-white relative flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2 text-gray-500 font-mono text-xs font-bold">
                                            <Star size={14} className="fill-black" />
                                            <span>Highlight #{journeyData[currentIndex].id}</span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-none">
                                            {journeyData[currentIndex].title}
                                        </h3>

                                        <p className="font-mono text-sm md:text-base leading-relaxed border-l-4 border-neon-lime pl-4 mb-6 line-clamp-6">
                                            {journeyData[currentIndex].description}
                                        </p>
                                    </div>

                                    <div className="flex gap-2 font-mono text-xs font-bold mt-auto">
                                        <div className="px-2 py-1 border-2 border-black bg-gray-200">
                                            {(currentIndex + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="px-2 py-1 border-2 border-black border-dashed flex-grow text-center text-gray-400">
                                            /////////////////////
                                        </div>
                                        <div className="px-2 py-1 border-2 border-black bg-gray-200">
                                            {journeyData.length.toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Journey;
