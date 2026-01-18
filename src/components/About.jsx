import React from 'react';
import { Check } from 'lucide-react';

const services = [
    "Frontend Development",
    "UI/UX Design",
    "Performance Optimization",
    "Accessibility Audits",
    "Retro-Futurism",
    "Technical Writing"
];

const About = () => {
    return (
        <section id="about" className="py-20 border-b-4 border-black bg-neon-lime">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <div className="bg-white border-4 border-black p-8 shadow-brutal-lg">
                        <h3 className="text-4xl font-black mb-6 uppercase">My Stack</h3>
                        <div className="space-y-4">
                            <div className="border-2 border-black p-4 bg-gray-50 flex justify-between items-center">
                                <span className="font-mono font-bold text-xl">REACT / NEXT.JS</span>
                                <div className="w-24 h-4 bg-black"></div>
                            </div>
                            <div className="border-2 border-black p-4 bg-gray-50 flex justify-between items-center">
                                <span className="font-mono font-bold text-xl">TAILWIND CSS</span>
                                <div className="w-32 h-4 bg-black"></div>
                            </div>
                            <div className="border-2 border-black p-4 bg-gray-50 flex justify-between items-center">
                                <span className="font-mono font-bold text-xl">NODE.JS</span>
                                <div className="w-16 h-4 bg-black"></div>
                            </div>
                            <div className="border-2 border-black p-4 bg-gray-50 flex justify-between items-center">
                                <span className="font-mono font-bold text-xl">DESIGN</span>
                                <div className="w-full max-w-[100px] h-4 bg-black"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                            ABOUT<br />ME.
                        </h2>
                        <p className="font-mono text-xl mb-8 leading-relaxed font-bold">
                            I'm a developer who believes in the beauty of raw code and brutal simplicity.
                            I don't just write code; I construct digital architectures that stand the test of time (and heavy traffic).
                        </p>

                        <h4 className="text-2xl font-black mb-6 uppercase border-b-4 border-black inline-block">WHAT I DO</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center gap-3 font-mono font-bold text-lg">
                                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center border-2 border-black">
                                        <Check size={16} strokeWidth={4} />
                                    </div>
                                    {service.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
