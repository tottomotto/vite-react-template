import { createContext, useState, useCallback, useContext, type ReactNode } from 'react';
import { translations, type Language } from '../data/translations';

const STORAGE_KEY = 'garrison-language';

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'bg' || stored === 'en') {
      return stored;
    }
  } catch {
    // localStorage unavailable — fall through to default
  }
  return 'bg';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable — language still updates in-memory
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) {
        return key;
      }
      return entry[language];
    },
    [language],
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return ctx;
}

export { I18nContext };
export type { I18nContextValue };
