import { useI18n } from '../../hooks/useI18n';
import './AboutSection.css';

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="about" id="about" aria-label={t('about.title')}>
      <div className="about__container">
        <h2 className="about__title">{t('about.title')}</h2>
        <p className="about__description">{t('about.description')}</p>
      </div>
    </section>
  );
}
