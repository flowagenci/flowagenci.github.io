import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Code, Palette, Zap, BarChart3, Target } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'Web Development',
        description: 'High-speed, responsive websites built for performance, SEO, and scalability.'
    },
    {
        icon: Palette,
        title: 'UI / UX Design',
        description: 'Clean, conversion-focused interfaces that feel effortless to use.'
    },
    {
        icon: Zap,
        title: 'Branding & Identity',
        description: 'Logos and visual systems that create clarity and recognition.'
    },
    {
        icon: BarChart3,
        title: 'Digital Growth',
        description: 'Landing pages and optimizations focused on real business results.'
    },
    {
        icon: Target,
        title: 'Meta Ads',
        description: 'Data-driven advertising campaigns that maximize ROI and conversion rates.'
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-brand-charcoal/30">
            <Container>
                <ScrollReveal>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Expertise</h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-light">
                            We don't just build websites. We build digital assets that drive real business results.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <Card className="group hover:bg-brand-gray/50 h-full">
                                <div className="mb-6 w-12 h-12 flex items-center justify-center transition-colors">
                                    <service.icon className="w-8 h-8 text-brand-accent stroke-[1.5]" />
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
