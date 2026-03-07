import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navItems = ['Home', 'Services', 'Work', 'Pricing', 'About', 'Contact'];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-black/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Container className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold font-sans tracking-tighter relative z-[60]">
                    flow.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                to={path}
                                className="relative group text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                                <span className={`absolute -bottom-1 left-1/2 h-[2px] bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.8)] rounded-full transition-all duration-300 -translate-x-1/2 ${isActive(path) ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'}`} />
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop CTA */}
                <Button
                    variant="primary"
                    className="hidden md:inline-flex py-2 px-6 text-xs relative z-50"
                    onClick={() => navigate('/contact')}
                >
                    Start a Project
                </Button>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 relative z-[60] hover:text-brand-cyan transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: '100vh' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-md md:hidden flex justify-center pt-10 overflow-hidden"
                        >
                            <div className="flex flex-col items-center space-y-8 w-full px-6">
                                {navItems.map((item, i) => {
                                    const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                                    return (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                            className="w-full text-center"
                                        >
                                            <Link
                                                to={path}
                                                className={`text-2xl font-serif tracking-wide transition-colors ${isActive(path) ? 'text-brand-cyan' : 'text-gray-300 hover:text-white'}`}
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + navItems.length * 0.1 }}
                                    className="w-full pt-8 flex justify-center"
                                >
                                    <Button
                                        variant="primary"
                                        className="w-full max-w-xs justify-center py-4 text-base"
                                        onClick={() => navigate('/contact')}
                                    >
                                        Start a Project
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.nav>
    );
}
