import React from 'react';
import { getContent } from '@/data/content';

interface ManifestoProps {
    content: ReturnType<typeof getContent>;
}

export const Manifesto: React.FC<ManifestoProps> = ({ content }) => {
    const { manifesto } = content;

    return (
        <section className="py-24 px-6">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                    {manifesto.headline}
                </h3>
                <div className="space-y-6">
                    {manifesto.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-600 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};
