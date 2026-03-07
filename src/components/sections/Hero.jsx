import React, { useRef } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
    const ref = useRef(null);
    const navigate = useNavigate();

    return (
        <section ref={ref} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Image Background */}
            <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
                <div className="absolute inset-0 bg-brand-black/40 z-10 pointer-events-none" />

                {/* Main background image: cover on all screens */}
                <img
                    src="/hero-bg.png"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    {/* Headline: Fade in + Upward motion (Y: 20px -> 0px), Duration: 0.8s */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-8xl font-serif font-normal tracking-tight leading-[1.05] mb-8"
                    >
                        Build momentum for<br />
                        <span className="text-gradient-blue">your digital presence</span>
                    </motion.h1>

                    {/* Subheading: Appears 150ms after headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed tracking-wide"
                    >
                        We design and develop high-performance websites and digital systems that help brands grow — without noise.
                    </motion.p>

                    {/* CTAs: Appear last with subtle scale-in (0.95 -> 1) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            variant="primary"
                            className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full shadow-lg shadow-blue-500/20"
                            onClick={() => navigate('/contact')}
                        >
                            START A PROJECT
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="secondary"
                            className="px-8 py-4 text-sm font-semibold tracking-widest uppercase rounded-full border-white/20 hover:bg-white/10 transition-colors"
                            onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                        >
                            VIEW PRICING
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
