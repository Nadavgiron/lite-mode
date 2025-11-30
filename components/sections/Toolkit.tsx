'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { getContent } from '@/data/content';

interface ToolkitProps {
    content: ReturnType<typeof getContent>;
}

export const Toolkit: React.FC<ToolkitProps> = ({ content }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (id: string) => setActiveModal(id);
    const closeModal = () => setActiveModal(null);

    const renderModalContent = (tool: typeof content.toolkit[0]) => {
        if (tool.id === 'controlshift') {
            const modal = tool.modal as any;
            return (
                <>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        {modal.headline}
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">{modal.coreFeatures.title}</h3>
                        <ul className="space-y-3">
                            {modal.coreFeatures.items.map((item: string, idx: number) => (
                                <li key={idx} className="text-gray-600 leading-relaxed">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">{modal.powerAddons.title}</h3>
                        <ul className="space-y-4">
                            {modal.powerAddons.items.map((item: any, idx: number) => (
                                <li key={idx} className="flex gap-3 text-gray-600 leading-relaxed">
                                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            );
        } else {
            const modal = tool.modal as any;
            return (
                <>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        {modal.headline}
                    </h2>
                    <ul className="space-y-4">
                        {modal.details?.map((detail: string, idx: number) => (
                            <li key={idx} className="text-gray-600 leading-relaxed">
                                {detail}
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    };

    // Logo mapping
    const logoMap: Record<string, string> = {
        'controlshift': '/controlshift-logo.svg',
        'instasite': '/instasite-logo.svg',
        'reviewnet': '/reviewnet-logo.svg'
    };

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Our Toolkit:
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.toolkit.map((tool) => (
                        <Card
                            key={tool.id}
                            logo={logoMap[tool.id]}
                            productName={tool.productName}
                            tag={tool.tag}
                            headline={tool.headline}
                            copy={tool.copy}
                            buttonText={tool.buttonText}
                            onClick={() => openModal(tool.id)}
                        />
                    ))}
                </div>
            </div>

            {content.toolkit.map((tool) => (
                <Modal
                    key={tool.id}
                    isOpen={activeModal === tool.id}
                    onClose={closeModal}
                >
                    {renderModalContent(tool)}
                </Modal>
            ))}
        </section>
    );
};
