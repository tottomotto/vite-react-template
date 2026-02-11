import { useI18n } from '../../hooks/useI18n';
import './LanguageSwitcher.css';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();

  const toggle = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  return (
    <button
      type="button"
      className="language-switcher"
      onClick={toggle}
      aria-label={t('a11y.switchLanguage')}
    >
      {language === 'bg' ? 'EN' : 'BG'}
    </button>
  );
}
