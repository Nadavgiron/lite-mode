'use client';

import React, { useEffect, useState } from 'react';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('litemode-language') || 'en';
        setLang(savedLang);
        document.documentElement.lang = savedLang;
        // Apply dir to body instead of html to avoid breaking root layout if not fully RTL-ready
        document.body.dir = savedLang === 'he' ? 'rtl' : 'ltr';
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'he' : 'en';
        setLang(newLang);
        localStorage.setItem('litemode-language', newLang);
        document.documentElement.lang = newLang;
        document.body.dir = newLang === 'he' ? 'rtl' : 'ltr';

        // Dispatch event to update ContentProvider
        window.dispatchEvent(new Event('language-change'));
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-all border border-gray-200"
            aria-label="Switch Language"
        >
            <div className="flex items-center gap-2 px-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-800 uppercase">{lang}</span>
            </div>
        </button>
    );
};
