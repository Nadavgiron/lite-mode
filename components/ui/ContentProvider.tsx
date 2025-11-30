'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTranslation, Translation } from '@/data/translations';

const ContentContext = createContext<Translation | null>(null);

export const ContentProvider: React.FC<{ children: (content: Translation) => React.ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<Translation>(getTranslation('en'));
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('litemode-language') || 'en';
        setContent(getTranslation(savedLang));

        const handleStorageChange = () => {
            const newLang = localStorage.getItem('litemode-language') || 'en';
            setContent(getTranslation(newLang));
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('language-change', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('language-change', handleStorageChange);
        };
    }, []);

    if (!mounted) {
        return <>{children(getTranslation('en'))}</>;
    }

    return <ContentContext.Provider value={content}>{children(content)}</ContentContext.Provider>;
};

export const useContent = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
