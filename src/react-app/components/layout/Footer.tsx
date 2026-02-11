import { useI18n } from '../../hooks/useI18n';
import { CONTACT_CONFIG } from '../../data/config';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import './Footer.css';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">{t('footer.copyright')}</p>
        <div className="footer__phones">
          {CONTACT_CONFIG.phones.map((p) => (
            <a
              key={p.clean}
              className="footer__phone-link"
              href={`tel:+${p.clean}`}
              aria-label={t('a11y.callGarrison')}
            >
              {p.display}
            </a>
          ))}
        </div>
        <LanguageSwitcher />
      </div>
    </footer>
  );
}
