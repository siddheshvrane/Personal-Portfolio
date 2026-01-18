import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-10 md:py-20 bg-off-white border-b-4 border-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 uppercase">
                    Let's <span className="bg-black text-white px-2">Work</span>
                </h2>
                <p className="font-mono text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
                    Have a project in mind? Want to discuss the merits of brutalism in 2024?
                    Send me a message.
                </p>

                <form className="bg-white border-4 border-black p-8 shadow-brutal-lg max-w-2xl mx-auto text-left">
                    <div className="mb-6">
                        <label className="block font-mono font-bold mb-2 uppercase">Your Name</label>
                        <input type="text" className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="JOHN DOE" />
                    </div>
                    <div className="mb-6">
                        <label className="block font-mono font-bold mb-2 uppercase">Email Address</label>
                        <input type="email" className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="JOHN@EXAMPLE.COM" />
                    </div>
                    <div className="mb-8">
                        <label className="block font-mono font-bold mb-2 uppercase">Message</label>
                        <textarea rows="4" className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="YOUR MESSAGE HERE..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-black text-white font-black text-xl py-4 border-2 border-black hover:bg-neon-orange hover:text-black transition-all shadow-brutal hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 flex items-center justify-center gap-2">
                        SEND MESSAGE <Send size={24} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
