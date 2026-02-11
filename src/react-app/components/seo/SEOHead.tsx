import { useEffect } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { CONTACT_CONFIG } from '../../data/config';

const SEO_KEYWORDS: Record<string, string[]> = {
  bg: ['линейка София', 'частна линейка', 'спешна помощ', 'медицински транспорт', 'Garrison'],
  en: ['ambulance Sofia', 'private ambulance Bulgaria', 'emergency medical services', 'medical transport', 'Garrison'],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://garrison.bg',
  name: 'Garrison',
  description: 'Private ambulance service in Sofia, Bulgaria',
  url: 'https://garrison.bg',
  telephone: CONTACT_CONFIG.primary.display,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sofia',
    addressCountry: 'BG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.6977,
    longitude: 23.3219,
  },
  areaServed: {
    '@type': 'City',
    name: 'Sofia',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '$',
  image: 'https://garrison.bg/og-image.jpg',
};

function setMetaTag(name: string, content: string, attribute = 'name') {
  let el = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function SEOHead() {
  const { t, language } = useI18n();

  useEffect(() => {
    const title = t('seo.title');
    const description = t('seo.description');
    const keywords = SEO_KEYWORDS[language] ?? SEO_KEYWORDS.en;

    document.title = title;
    document.documentElement.lang = language === 'bg' ? 'bg' : 'en';

    setMetaTag('description', description);
    setMetaTag('keywords', keywords.join(', '));

    // Open Graph
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', 'website', 'property');
    setMetaTag('og:url', 'https://garrison.bg', 'property');
    setMetaTag('og:image', 'https://garrison.bg/og-image.jpg', 'property');
    setMetaTag('og:locale', language === 'bg' ? 'bg_BG' : 'en_US', 'property');
  }, [t, language]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
