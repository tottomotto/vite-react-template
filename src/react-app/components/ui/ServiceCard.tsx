import { useI18n } from '../../hooks/useI18n';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export function ServiceCard({ icon, titleKey, descriptionKey }: ServiceCardProps) {
  const { t } = useI18n();

  return (
    <article className="service-card">
      <div className="service-card__icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="service-card__title">{t(titleKey)}</h3>
      <p className="service-card__description">{t(descriptionKey)}</p>
    </article>
  );
}
