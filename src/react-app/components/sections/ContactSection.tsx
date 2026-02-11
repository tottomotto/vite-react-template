import { useI18n } from '../../hooks/useI18n';
import { CONTACT_CONFIG } from '../../data/config';
import { PhoneCTA } from '../ui/PhoneCTA';
import { MessagingButtons } from '../ui/MessagingButtons';
import './ContactSection.css';

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section className="contact" id="contact" aria-label={t('contact.title')}>
      <div className="contact__container">
        <h2 className="contact__title">{t('contact.title')}</h2>

        <p className="contact__phone-label">{t('contact.phone')}</p>
        <div className="contact__phones">
          {CONTACT_CONFIG.phones.map((p) => (
            <a key={p.clean} href={`tel:+${p.clean}`} className="contact__phone-number">
              {p.display}
            </a>
          ))}
        </div>
        <p className="contact__available">{t('contact.available')}</p>

        <PhoneCTA variant="large" />
        <MessagingButtons />
      </div>
    </section>
  );
}
