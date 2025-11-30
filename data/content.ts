import { getTranslation } from './translations';

// Get current language from localStorage (browser-only)
function getCurrentLanguage(): string {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('litemode-language') || 'en';
    }
    return 'en';
}

// Export content getter that returns appropriate translation
export const getContent = () => {
    const lang = getCurrentLanguage();
    return getTranslation(lang);
};

// For backwards compatibility and initial server render
export const content = getTranslation('en');
