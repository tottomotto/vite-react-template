import { useState } from 'react';
import { useI18n } from '../../hooks/useI18n';
import { Logo } from '../ui/Logo';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { PhoneCTA } from '../ui/PhoneCTA';
import './StickyHeader.css';

const NAV_ITEMS = [
  { key: 'nav.services', href: '#services' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.coverage', href: '#coverage' },
  { key: 'nav.contact', href: '#contact' },
] as const;

export function StickyHeader() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky-header">
      <div className="sticky-header__container">
        <Logo />

        {/* Desktop navigation */}
        <nav className="sticky-header__nav" aria-label={t('nav.services')}>
          <ul className="sticky-header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a className="sticky-header__nav-link" href={item.href}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right-side actions */}
        <div className="sticky-header__actions">
          <LanguageSwitcher />
          <PhoneCTA variant="small" />

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`sticky-header__hamburger${menuOpen ? ' sticky-header__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sticky-header__hamburger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <nav
        id="mobile-menu"
        className={`sticky-header__mobile-menu${menuOpen ? ' sticky-header__mobile-menu--open' : ''}`}
        aria-label={t('nav.services')}
      >
        <ul className="sticky-header__mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <a
                className="sticky-header__mobile-nav-link"
                href={item.href}
                onClick={closeMenu}
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
