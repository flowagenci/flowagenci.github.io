import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function CallToAction() {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        number: '',
        activeTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format WhatsApp message
        const message = `*New Application Request*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Age:* ${formData.age}\n` +
            `*Email:* ${formData.email}\n` +
            `*Number:* ${formData.number}\n` +
            `*Active Time:* ${formData.activeTime}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/918137887875?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success popup
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);

        // Reset form
        setFormData({
            name: '',
            age: '',
            email: '',
            number: '',
            activeTime: ''
        });
    };

    return (
        <section id="contact" className="py-24 text-center overflow-hidden relative border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-accent/5 pointer-events-none" />

            <Container className="relative z-10">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight leading-none">
                        Let's build something <br />
                        that <span className="text-gradient-blue">moves.</span>
                    </h2>

                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        Ready to start? Send us your details and we'll connect.
                    </p>

                    <form className="max-w-xl mx-auto space-y-4 mb-12 text-left" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    placeholder="25"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    placeholder="+91 99999 99999"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Active Time</label>
                            <input
                                type="text"
                                name="activeTime"
                                value={formData.activeTime}
                                onChange={handleChange}
                                placeholder="e.g. 9 AM - 6 PM"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent transition-colors"
                            />
                        </div>

                        <Button
                            variant="primary"
                            className="w-full justify-center py-4 mt-4"
                            type="submit"
                        >
                            Submit Application
                        </Button>
                    </form>

                    <div className="flex flex-col items-center gap-6 border-t border-white/5 pt-12">
                        <p className="text-sm text-gray-500">Or connect with us directly</p>
                        <Button
                            variant="secondary"
                            className="px-10 py-3 text-sm tracking-widest"
                            onClick={() => window.open('https://wa.me/918137887875', '_blank')}
                        >
                            Start Your Project via WhatsApp
                        </Button>

                        <a
                            href="mailto:flowagencyteam@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide border-b border-transparent hover:border-white/50 pb-0.5"
                        >
                            flowagencyteam@gmail.com
                        </a>
                    </div>
                </ScrollReveal>

                <AnimatePresence>
                    {showPopup && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none"
                        >
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                            <div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden pointer-events-auto">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent to-brand-cyan" />

                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-brand-accent" />
                                    </div>

                                    <h3 className="text-2xl font-serif text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 mb-8">
                                        Redirecting you to WhatsApp with your details...
                                    </p>

                                    <Button
                                        variant="secondary"
                                        onClick={() => setShowPopup(false)}
                                        className="w-full justify-center"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </section>
    );
}
