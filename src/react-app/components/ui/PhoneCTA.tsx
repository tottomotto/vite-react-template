import { useI18n } from '../../hooks/useI18n';
import { CONTACT_CONFIG } from '../../data/config';
import './PhoneCTA.css';

interface PhoneCTAProps {
  variant: 'large' | 'small';
}

const PhoneIcon = () => (
  <span className="phone-cta__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
    </svg>
  </span>
);

export function PhoneCTA({ variant }: PhoneCTAProps) {
  const { t } = useI18n();

  const label = variant === 'large' ? t('hero.callNow') : CONTACT_CONFIG.primary.display;

  return (
    <a
      href={`tel:+${CONTACT_CONFIG.primary.clean}`}
      className={`phone-cta phone-cta--${variant}`}
      aria-label={t('a11y.callGarrison')}
    >
      <PhoneIcon />
      <span className={variant === 'small' ? 'phone-cta__label-small' : ''}>{label}</span>
    </a>
  );
}
