import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
    {
        name: 'Basic',
        price: '₹9,999',
        priceSuffix: 'for setup',
        description: 'Essential online presence',
        features: [
            'Website setup',
            'Social Media Setup',
            '1 Promotional Video'
        ]
    },
    {
        name: 'Premium',
        price: '₹19,999',
        priceSuffix: 'for setup',
        description: 'Perfect for startups',
        features: [
            'Website setup',
            'Meta ad management',
            'Instagram handling',
            '3 Promotional anchoring videos',
            '2 influencer collaboration reels'
        ],
        popular: true
    },
    {
        name: 'Advanced',
        price: '₹29,999',
        priceSuffix: 'for setup',
        description: 'For growing businesses',
        features: [
            '5 Promotional anchoring videos',
            'Website + Ad Campaign',
            'Instagram handling',
            '4 Influencer Collaboration',
            'SEO Setup'
        ]
    }
];

export function Pricing() {
    const navigate = useNavigate();

    return (
        <section id="pricing" className="py-24 border-t border-white/5">
            <Container>
                <ScrollReveal>
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Investment</h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-light">
                            Transparent pricing packages designed to match your growth stage.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-brand-accent/50 bg-brand-accent/5' : ''}`}>
                                {plan.popular && (
                                    <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-2 py-1 rounded">
                                        Popular
                                    </span>
                                )}
                                <h3 className="text-xl font-serif text-white mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
                                {plan.priceSuffix && <div className="text-sm text-gray-400 mb-4">{plan.priceSuffix}</div>}
                                <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-8">{plan.description}</p>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-brand-accent mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? 'primary' : 'secondary'}
                                    className="w-full justify-center"
                                    onClick={() => navigate('/contact')}
                                >
                                    Get Started
                                </Button>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
