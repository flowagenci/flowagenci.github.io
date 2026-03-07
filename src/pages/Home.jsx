import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyFlow } from '../components/sections/WhyFlow';
import { SelectedWork } from '../components/sections/SelectedWork';
import { Pricing } from '../components/sections/Pricing';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { CallToAction } from '../components/sections/CallToAction';

export function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <WhyFlow />
            <SelectedWork />
            <Pricing />
            <Process />
            <Testimonials />
            <CallToAction />
        </main>
    );
}
