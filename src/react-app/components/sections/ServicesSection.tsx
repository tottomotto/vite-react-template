import { useI18n } from '../../hooks/useI18n';
import { ServiceCard } from '../ui/ServiceCard';
import './ServicesSection.css';

const SERVICES = [
  { icon: '🚑', titleKey: 'services.emergency.title', descriptionKey: 'services.emergency.desc' },
  { icon: '🏥', titleKey: 'services.transport.title', descriptionKey: 'services.transport.desc' },
  { icon: '🎪', titleKey: 'services.event.title', descriptionKey: 'services.event.desc' },
];

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section className="services" id="services" aria-label={t('services.title')}>
      <div className="services__container">
        <h2 className="services__title">{t('services.title')}</h2>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              titleKey={service.titleKey}
              descriptionKey={service.descriptionKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
