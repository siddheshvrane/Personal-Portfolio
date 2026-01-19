import React, { useRef, useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY - You need to get these from EmailJS dashboard
        // 1. Go to https://www.emailjs.com/
        // 2. Sign up and create a service (e.g., Gmail) -> Get SERVICE_ID
        // 3. Create a template -> Get TEMPLATE_ID
        // 4. Go to Account > API Keys -> Get PUBLIC_KEY

        const YOUR_SERVICE_ID = 'service_agfxi2p';
        const YOUR_TEMPLATE_ID = 'template_43ans52';
        const YOUR_PUBLIC_KEY = '6sRyTcan8jPKaf1ZP';

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                setLoading(false);
                setStatus('success');
                form.current.reset();
                // Clear success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            }, (error) => {
                setLoading(false);
                setStatus('error');
                console.error('FAILED...', error.text);
            });
    };

    return (
        <section id="contact" className="py-10 md:py-20 bg-off-white border-b-4 border-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 uppercase">
                    Let's <span className="bg-black text-white px-2">Work</span>
                </h2>
                <p className="font-mono text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
                    Got a vision that needs a digital architect? Or want to cook something that stands out in the menu of templates? Let's make it happen.
                </p>

                <form ref={form} onSubmit={sendEmail} className="bg-white border-4 border-black p-8 shadow-brutal-lg max-w-2xl mx-auto text-left">
                    <div className="mb-6">
                        <label className="block font-mono font-bold mb-2 uppercase">Your Name</label>
                        <input name="user_name" type="text" required className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="Alfredo Linguini" />
                    </div>
                    <div className="mb-6">
                        <label className="block font-mono font-bold mb-2 uppercase">Email Address</label>
                        <input name="user_email" type="email" required className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="alfredo_linguini@domain.com" />
                    </div>
                    <div className="mb-8">
                        <label className="block font-mono font-bold mb-2 uppercase">Message</label>
                        <textarea name="message" required rows="4" className="w-full bg-gray-100 border-2 border-black p-4 font-mono focus:outline-none focus:bg-neon-lime focus:border-black transition-colors" placeholder="Tell me your wildest ideas..."></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-black text-xl py-4 border-2 border-black shadow-brutal hover:shadow-none translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-neon-orange hover:text-black'}`}
                    >
                        {loading ? 'SENDING...' : 'SEND MESSAGE'}
                        {!loading && <Send size={24} />}
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="mt-4 p-4 bg-neon-lime border-2 border-black font-bold font-mono text-center animate-pulse">
                            MESSAGE SENT SUCCESSFULLY! I'LL GET BACK TO YOU SOON.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mt-4 p-4 bg-red-500 text-white border-2 border-black font-bold font-mono text-center">
                            OOPS! SOMETHING WENT WRONG. PLEASE TRY AGAIN OR EMAIL ME DIRECTLY.
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
