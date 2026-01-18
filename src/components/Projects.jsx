import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'BRAHMI-OCR',
        description: 'Reclaiming history with Deep Learning. An OCR system engineered to decipher and digitize ancient Brahmi stone inscriptions using advanced CNNs. Preserving the past, one pixel at a time.',
        tags: ['Python', 'TensorFlow', 'CUDA', 'Vue', 'Rxjs'],
        link: '#',
        github: 'https://github.com/siddheshvrane/Brahmi-OCR',
        color: 'bg-pink-400',
        live: false
    },
    {
        title: 'VEDANT',
        description: 'A modular 3D geospatial desktop framework for interactive Earth Observation (EO) data visualization. Features a decoupled architecture, dynamic layer management, and advanced flythrough tools. Built for scale.',
        tags: ['Vue 3', 'Electron', 'Cesium', 'Rxjs'],
        link: '#',
        github: 'https://github.com/siddheshvrane/Vedant',
        color: 'bg-neon-lime',
        live: false
    },
    {
        title: 'RCTI',
        description: 'The digital flagship for Rane\'s Computer Institute. A production-grade platform handling course management, student certifications, and institute operations. Real users. Real traffic.',
        tags: ['React', 'Web Dev', 'Full Stack', 'Production'],
        link: 'https://ranescomputer.in/',
        github: 'https://github.com/siddheshvrane/RCTI',
        color: 'bg-blue-400',
        live: true
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-10 md:py-20 border-b-4 border-black bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-8xl font-black mb-4 uppercase tracking-tighter">
                        The <span className="text-neon-orange">Project-iles</span>
                    </h2>
                    <div className="w-16 md:w-24 h-4 bg-black"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-white border-4 border-black p-4 md:p-6 flex flex-col justify-between shadow-brutal hover:shadow-brutal-lg transition-all hover:-translate-y-2">
                            {/* Decorative Color Block */}
                            <div className={`absolute top-0 right-0 w-16 h-16 ${project.color} border-l-4 border-b-4 border-black`}></div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 pr-12 leading-none uppercase">{project.title}</h3>
                                <p className="font-mono text-base md:text-lg mb-6 border-l-4 border-gray-200 pl-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="border-2 border-black px-2 py-1 font-mono text-sm font-bold bg-gray-100">
                                            {tag.toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                {project.live && (
                                    <a href={project.link} className="flex-1 bg-black text-white text-center py-3 font-bold border-2 border-black hover:bg-neon-lime hover:text-black transition-colors flex justify-center items-center gap-2">
                                        LIVE <ExternalLink size={18} />
                                    </a>
                                )}
                                <a href={project.github} className="px-4 py-3 border-2 border-black hover:bg-gray-200 transition-colors">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
