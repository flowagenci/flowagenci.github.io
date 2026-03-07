import React from 'react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

const steps = [
    {
        number: '01',
        title: 'Discover',
        description: 'Understand goals, users, and direction'
    },
    {
        number: '02',
        title: 'Design',
        description: 'Wireframes, UI, and motion'
    },
    {
        number: '03',
        title: 'Build',
        description: 'Clean, scalable, performance-focused code'
    },
    {
        number: '04',
        title: 'Launch & Improve',
        description: 'Testing and optimization'
    }
];

export function Process() {
    return (
        <section id="process" className="py-32 bg-brand-black border-t border-white/5">
            <Container>
                <ScrollReveal>
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">The Process</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                            Simple, transparent, and focused on results.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="relative p-6 pt-12 border-t border-white/10 hover:border-white transition-colors duration-500 group">
                                <span className="absolute top-0 left-0 -translate-y-1/2 bg-brand-black px-2 text-sm font-serif italic text-gray-500 group-hover:text-white transition-colors">
                                    {step.number}
                                </span>
                                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm font-light">
                                    {step.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
