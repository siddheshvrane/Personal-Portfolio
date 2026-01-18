import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-brutal-black text-off-white border-t-4 border-black pt-10 md:pt-16 pb-6 md:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                            LET'S BUILD<br />
                            <span className="text-neon-lime">SOMETHING</span><br />
                            COOL.
                        </h2>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                        <div className="flex space-x-6 mb-8">
                            <SocialLink href="https://github.com/siddheshvrane" icon={<Github />} />
                            <SocialLink href="https://x.com/sidvrane12" icon={<XIcon />} />
                            <SocialLink href="https://www.linkedin.com/in/siddhesh-rane-3872a425a/" icon={<Linkedin />} />
                            <SocialLink href="mailto:siddheshvrane12@gmail.com" icon={<Mail />} />
                        </div>
                        <p className="font-mono text-gray-400">
                            © {new Date().getFullYear()} Siddhesh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 border-2 border-white bg-black hover:bg-neon-orange hover:border-black hover:text-black transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
    >
        {icon}
    </a>
);

export default Footer;
