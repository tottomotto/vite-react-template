import type { ReactNode } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { StickyHeader } from './StickyHeader';
import { Footer } from './Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useI18n();

  return (
    <div className="layout">
      <a className="layout__skip-link" href="#main-content">
        {t('a11y.skipToContent')}
      </a>
      <StickyHeader />
      <main id="main-content" className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
