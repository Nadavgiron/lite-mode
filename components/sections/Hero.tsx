'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { getContent } from '@/data/content';

interface HeroProps {
    content: ReturnType<typeof getContent>;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
    const { hero } = content;

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
                {/* Litemode Logo */}
                <div className="mb-8 flex justify-center">
                    <Image
                        src="/litemode-logo.svg"
                        alt="Litemode"
                        width={200}
                        height={60}
                        className="h-8 w-auto object-contain"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {hero.h1}
                </h1>
                <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-700">
                    {hero.h2}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    {hero.subtitle}
                </p>
                <Button onClick={scrollToContact}>
                    {hero.cta}
                </Button>
            </div>
        </section>
    );
};
