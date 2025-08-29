import  useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translations, type Locale } from '../i18n/translations';

export function useTranslations() {
  const { i18n } = useDocusaurusContext();
  const currentLocale = i18n.currentLocale as Locale;
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLocale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return the key if translation not found
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
  
  return { t, currentLocale };
} 