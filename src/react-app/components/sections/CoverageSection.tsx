import { useI18n } from '../../hooks/useI18n';
import './CoverageSection.css';

export function CoverageSection() {
  const { t } = useI18n();

  return (
    <section className="coverage" id="coverage" aria-label={t('coverage.title')}>
      <div className="coverage__container">
        <h2 className="coverage__title">{t('coverage.title')}</h2>
        <p className="coverage__description">{t('coverage.description')}</p>
        <div className="coverage__map-placeholder" aria-hidden="true">
          <span className="coverage__pin-icon">📍</span>
          <span>София / Sofia, Bulgaria</span>
        </div>
      </div>
    </section>
  );
}
