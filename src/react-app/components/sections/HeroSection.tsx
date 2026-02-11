import { useI18n } from '../../hooks/useI18n';
import { CONTACT_CONFIG } from '../../data/config';
import { PhoneCTA } from '../ui/PhoneCTA';
import { MessagingButtons } from '../ui/MessagingButtons';
import './HeroSection.css';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="hero" id="hero" aria-label={t('hero.tagline')}>
      <div className="hero__content">
        <h1 className="hero__tagline">{t('hero.tagline')}</h1>
        <p className="hero__subtitle">{t('hero.subtitle')}</p>
        <PhoneCTA variant="large" />
        <div className="hero__phone-text">
          {CONTACT_CONFIG.phones.map((p) => (
            <a key={p.clean} href={`tel:+${p.clean}`}>{p.display}</a>
          ))}
        </div>
        <MessagingButtons />
      </div>
    </section>
  );
}
