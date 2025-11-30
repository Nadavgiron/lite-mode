import { en } from './en';
import { he } from './he';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';

export const translations = {
    en,
    he,
    es,
    de,
    fr
};

export type Language = keyof typeof translations;

export function getTranslation(lang: string) {
    const language = (lang as Language) || 'en';
    return translations[language] || translations.en;
}
