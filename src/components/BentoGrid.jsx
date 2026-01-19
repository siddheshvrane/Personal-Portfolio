import React from 'react';
import {
    Coffee,
    Rocket,
    GraduationCap,
    Brain,
    Code,
    Terminal,
    Mail,
    Github,
    Linkedin,
    Twitter,
    Zap,
    Layout,
    Shield,
    Layers,
    Scaling,
    Star,
    Lightbulb
} from 'lucide-react';

const BentoGrid = () => {
    return (
        <section id="about" className="py-10 md:py-20 bg-off-white border-b-4 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-8xl font-black mb-8 md:mb-12 uppercase tracking-tighter">
                    The Bento for your <span className="text-neon-orange">Hunger</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Row 1: Experience & Education (Left Column) */}
                    <div className="lg:col-span-4 flex flex-col gap-8">

                        {/* Experience */}
                        <div className="bg-white border-4 border-black p-4 md:p-6 shadow-brutal hover:shadow-brutal-lg transition-all flex flex-col justify-between flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl md:text-3xl font-black uppercase">Experience</h3>
                                <Coffee size={24} md:size={32} strokeWidth={2} className="w-6 h-6 md:w-8 md:h-8" />
                            </div>

                            <div className="space-y-4">
                                <div className="bg-neon-lime border-2 border-black p-3 md:p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Terminal size={20} md:size={24} className="w-5 h-5 md:w-6 md:h-6" />
                                        <h4 className="font-bold text-base md:text-lg uppercase">Intern</h4>
                                    </div>
                                    <p className="font-mono text-xs md:text-sm font-bold">Space Application Center, ISRO</p>
                                    <p className="font-mono text-xs md:text-sm">June 2025 - Aug 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="bg-white border-4 border-black p-4 md:p-6 shadow-brutal hover:shadow-brutal-lg transition-all flex-grow">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl md:text-3xl font-black uppercase">Education</h3>
                                <GraduationCap size={24} md:size={32} className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="space-y-4">
                                <div className="border-b-2 border-black pb-2">
                                    <h4 className="font-bold text-base md:text-lg">B.TECH IT</h4>
                                    <p className="font-mono text-xs md:text-sm text-gray-600">KJSIT, Mumbai University</p>
                                    <p className="text-2xl md:text-3xl font-black mt-2">8.63</p>
                                    <p className="font-mono text-xs uppercase">CGPA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 1: About Me (Right Column) */}
                    <div className="lg:col-span-8 bg-white border-4 border-black p-4 md:p-8 shadow-brutal hover:shadow-brutal-lg transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl md:text-4xl font-black uppercase">About Me</h3>
                            <Rocket size={32} md:size={48} strokeWidth={2} className="w-8 h-8 md:w-12 md:h-12" />
                        </div>
                        <div className="font-mono text-base md:text-xl leading-relaxed space-y-4 md:space-y-6">
                            <p>
                                I am a <span className="bg-neon-lime border border-black px-1 font-bold">fourth-year engineering student</span> at K. J. Somaiya Institute of Technology, driven by a profound passion for technology.
                            </p>
                            <p>
                                My focus lies in mastering <span className="underline decoration-wavy decoration-neon-orange">programming</span>, <span className="bg-black text-white px-1">web development</span>, and staying abreast of the latest industry trends.
                            </p>
                            <p>
                                I hold a strong optimism regarding the potential of emerging technologies such as <span className="bg-neon-lime border-2 border-black px-1 font-bold shadow-brutal-xs">AI & ML</span> to effect positive change on a global scale.
                            </p>
                            <div className="p-4 border-2 border-black border-dashed mt-4 bg-gray-50 font-bold">
                                "Let's connect and navigate this exciting journey together!"
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Skills & What I Deliver */}
                    <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Skills */}
                        <div className="lg:col-span-4 bg-white border-4 border-black p-4 md:p-6 shadow-brutal hover:shadow-brutal-lg transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl md:text-3xl font-black uppercase">Skills</h3>
                                <Brain size={24} md:size={32} className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'Vue', 'Mongo', 'Next', 'Express', 'Mongodb', 'SQL', 'HTML', 'CSS', 'Javascript', 'Java', 'Python'].map(skill => (
                                    <span key={skill} className="border-2 border-black px-2 py-1 bg-neon-lime font-mono text-xs font-bold">
                                        {skill.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* What I Deliver */}
                        <div className="lg:col-span-8 bg-white border-4 border-black p-4 md:p-6 shadow-brutal hover:shadow-brutal-lg transition-all flex flex-col justify-center items-center text-center bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
                            <h3 className="text-2xl md:text-3xl font-black uppercase mb-6">What this Bento Serves</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                                {[
                                    { label: 'CREATIVITY', icon: Lightbulb },
                                    { label: 'CONSISTENCY', icon: Layout },
                                    { label: 'RELIABILITY', icon: Shield },
                                    { label: 'MODULARITY', icon: Layers },
                                    { label: 'SCALABILITY', icon: Scaling },
                                    { label: 'QUALITY', icon: Star }
                                ].map((item, index) => (
                                    <div key={index} className="border-2 border-black p-2 bg-off-white hover:bg-neon-orange transition-colors flex flex-col items-center gap-2">
                                        <item.icon size={20} />
                                        <span className="font-black text-sm">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>


    );
};

const SocialButton = ({ icon, label, href }) => (
    <a
        href={href}
        className="flex items-center gap-2 bg-white text-black px-6 py-3 border-2 border-white hover:bg-neon-lime hover:border-neon-lime transition-colors font-bold uppercase font-mono"
    >
        {icon}
        <span className="hidden md:inline">{label}</span>
    </a>
)

export default BentoGrid;
