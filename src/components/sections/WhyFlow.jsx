import React from 'react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        title: 'Strategy before design',
        description: 'We prioritize business goals and user needs over aesthetics alone.'
    },
    {
        title: 'Performance over hype',
        description: 'Fast-loading, optimized sites that perform real-world tasks.'
    },
    {
        title: 'Clean, scalable code',
        description: 'Built for the future, easy to maintain, and ready to scale.'
    },
    {
        title: 'Clear communication',
        description: 'No jargon. Just transparent updates and honest feedback.'
    },
    {
        title: 'On-time delivery',
        description: "We respect timelines and deliver quality work when promised."
    },
    {
        title: 'Meta Ads',
        description: 'Data-driven advertising campaigns that maximize ROI and conversion rates.'
    }
];

export function WhyFlow() {
    return (
        <section className="py-24 overflow-hidden border-t border-white/5">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                                Why <span className="text-gradient-blue">flow.</span>?
                            </h2>
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                                In a digital world full of noise, we provide clarity. We strip away the non-essentials to focus on what truly moves the needle for your business.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <ScrollReveal key={index} delay={index * 0.1} className="flex flex-col gap-4">
                                <CheckCircle2 className="w-6 h-6 text-white stroke-[1.5]" />
                                <div>
                                    <h3 className="text-lg font-serif mb-2 text-white">{reason.title}</h3>
                                    <p className="text-gray-400 text-sm font-light">{reason.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
