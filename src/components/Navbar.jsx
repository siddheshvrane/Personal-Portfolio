import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const links = [
        { name: 'WORK', href: '#projects' },
        { name: 'ABOUT', href: '#about' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-off-white border-b-4 border-black z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-3xl font-black tracking-tighter hover:text-neon-orange transition-colors">
                            SIDDHESH<span className="text-neon-lime">.</span>DEV
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-lg font-bold border-2 border-transparent hover:border-black hover:bg-neon-lime px-4 py-2 transition-all shadow-none hover:shadow-brutal"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 border-2 border-black hover:bg-neon-lime transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t-2 border-black bg-off-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-4 text-xl font-mono font-bold hover:bg-neon-lime border-2 border-transparent hover:border-black transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
