import React from 'react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import tenSportsImg from '../../assets/tensports.png';
import badmintonImg from '../../assets/badminton.png';
import zendraImg from '../../assets/zendra.png';

const projects = [
    {
        title: 'Ten Sports',
        category: 'E-commerce',
        description: 'Jersey related store.',
        link: 'https://tensports.store',
        color: 'bg-red-500', // Conceptual color, though primarily using grayscale/overlay in UI
        image: tenSportsImg
    },
    {
        title: 'Badminton Mania',
        category: 'E-commerce',
        description: 'Badminton selling store.',
        link: 'https://www.badmintonmania.store/',
        color: 'bg-blue-500',
        image: badmintonImg
    },
    {
        title: 'Zendra',
        category: 'Ecommerce',
        description: 'Premium chappals and bag selling store.',
        link: 'https://zendracollective.in/',
        color: 'bg-purple-500',
        image: zendraImg
    }
];

export function SelectedWork() {
    return (
        <section id="work" className="py-32 border-t border-white/5">
            <Container>
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif">Selected Work</h2>
                        <Link to="/work" className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider">
                            View All Projects <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <motion.a
                                href={project.link}
                                target={project.link !== '#' ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="group block cursor-pointer"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative aspect-video w-full overflow-hidden mb-8">
                                    {project.image && (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className={`absolute inset-0 bg-brand-gray/50 group-hover:bg-transparent transition-colors duration-500 ${project.image ? 'bg-black/40' : ''}`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-6xl font-serif text-white/10 group-hover:opacity-0 transition-opacity duration-500">{project.title}</h3>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start border-t border-white/10 pt-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-3xl font-serif group-hover:italic transition-all duration-300">{project.title}</h3>
                                            {project.link !== '#' && <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />}
                                        </div>
                                        <p className="text-gray-400 text-lg font-light">{project.description}</p>
                                    </div>
                                    <div className="text-xs font-medium uppercase tracking-widest text-gray-500 border border-white/10 px-4 py-2 rounded-full">
                                        {project.category}
                                    </div>
                                </div>
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal className="mt-16 md:hidden text-center">
                    <Link to="/work" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </ScrollReveal>
            </Container>
        </section>
    );
}
