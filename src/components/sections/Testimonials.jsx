import React from 'react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../ui/ScrollReveal';

const testimonials = [
    {
        quote: "flow. didn't just build a website; they transformed how we do business online. The momentum is real.",
        author: "Sinan Shihab",
        role: "Founder, Ten Sports"
    },
    {
        quote: "Minimalist, fast, and incredibly effective. Our conversion rates doubled in the first month.",
        author: "Muhammed Ansil",
        role: "Co-founder"
    },
    {
        quote: "My commitment as founder is simple: we impact your business, not just your visibility.",
        author: "Bilal Musthafa",
        role: "Founder of flowagency"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="bg-transparent p-10 border border-white/10 hover:border-white/20 transition-colors duration-500">
                                <p className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic">"{t.quote}"</p>
                                <div>
                                    <cite className="not-italic font-bold text-white block uppercase tracking-wider text-sm">{t.author}</cite>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
