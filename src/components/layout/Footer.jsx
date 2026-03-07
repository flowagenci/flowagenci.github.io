import React from 'react';
import { Container } from '../ui/Container';
import { Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold tracking-tighter">flow.</div>
                        <a
                            href="https://www.instagram.com/flow.agenci/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>

                    <div className="text-center md:text-right">
                        <div className="text-sm font-medium text-white mb-2">Digital Agency</div>
                        <div className="text-xs text-gray-600">
                            &copy; 2026 flow. All rights reserved.
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
