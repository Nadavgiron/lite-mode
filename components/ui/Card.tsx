import React from 'react';
import Image from 'next/image';

interface CardProps {
    logo?: string;
    productName: string;
    tag: string;
    headline: string;
    copy: string;
    buttonText: string;
    onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ logo, productName, tag, headline, copy, buttonText, onClick }) => {
    return (
        <div className="group border border-gray-200 rounded-lg p-8 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white">
            {/* Logo */}
            {logo && (
                <div className="mb-4 flex justify-center">
                    <Image
                        src={logo}
                        alt={productName}
                        width={200}
                        height={200}
                        className="h-14 w-auto object-contain"
                    />
                </div>
            )}

            <div className="mb-4">
                <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">
                    {tag}
                </span>
            </div>
            <h3 className="text-3xl font-bold mb-2 text-gray-900">
                {productName}
            </h3>
            <p className="text-xl font-semibold mb-4 text-gray-700">
                {headline}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
                {copy}
            </p>
            <button
                onClick={onClick}
                className="text-sm font-medium text-gray-900 hover:text-gray-600 underline underline-offset-4 transition-colors"
            >
                {buttonText}
            </button>
        </div>
    );
};
