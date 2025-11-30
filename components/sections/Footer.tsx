import React from 'react';
import Image from 'next/image';
import { getContent } from '@/data/content';

interface FooterProps {
    content: ReturnType<typeof getContent>;
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
    const { footer } = content;

    return (
        <footer className="py-12 px-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/litemode-logo.svg"
                        alt="Litemode"
                        width={200}
                        height={60}
                        className="h-6 w-auto object-contain opacity-90"
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                    {footer.links.map((link, index) => (
                        <React.Fragment key={link.text}>
                            <a
                                href={link.href}
                                className="hover:text-gray-900 transition-colors"
                            >
                                {link.text}
                            </a>
                            {index < footer.links.length - 1 && (
                                <span className="text-gray-300">|</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </footer>
    );
};
