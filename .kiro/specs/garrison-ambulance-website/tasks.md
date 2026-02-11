# Implementation Plan: Garrison Ambulance Website

## Overview

Transform the existing React + Cloudflare Workers codebase into a bilingual, mobile-first marketing website for Garrison ambulance service. Implementation follows a component-first approach, building the i18n foundation first, then UI components, and finally wiring everything together.

## Tasks

- [x] 1. Set up project foundation and i18n system
  - [x] 1.1 Create CSS variables and design tokens
    - Create `src/react-app/styles/variables.css` with color palette (white, fire red #C8102E, police blue #003087)
    - Define spacing, typography, and touch target variables
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 1.2 Create translation data and configuration
    - Create `src/react-app/data/translations.ts` with all Bulgarian and English text
    - Create `src/react-app/data/config.ts` with contact info (phone, WhatsApp, Viber URLs)
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.3 Implement I18nContext and provider
    - Create `src/react-app/context/I18nContext.tsx` with language state, localStorage persistence, and t() function
    - Default language: Bulgarian
    - _Requirements: 1.1, 1.4, 1.5_

  - [ ]* 1.4 Write property tests for i18n system
    - **Property 1: Language Preference Round-Trip**
    - **Property 2: Translation Function Correctness**
    - **Property 3: Default Language Initialization**
    - **Property 4: Language Toggle Behavior**
    - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

- [x] 2. Implement core UI components
  - [x] 2.1 Create PhoneCTA component
    - Create `src/react-app/components/ui/PhoneCTA.tsx` with large and small variants
    - Implement tel: link with proper formatting
    - Style with fire red background, white text, pulse animation
    - Include proper ARIA labels
    - _Requirements: 3.1, 3.2, 3.3, 7.3_

  - [ ]* 2.2 Write property tests for PhoneCTA
    - **Property 5: Phone Tel URL Formatting**
    - **Validates: Requirements 3.2**

  - [x] 2.3 Create MessagingButtons component
    - Create `src/react-app/components/ui/MessagingButtons.tsx`
    - Implement WhatsApp button with wa.me deep link
    - Implement Viber button with viber://chat deep link
    - Use brand colors and icons
    - _Requirements: 9.1, 9.2, 9.3, 9.5, 9.6_

  - [ ]* 2.4 Write property tests for MessagingButtons
    - **Property 6: WhatsApp Deep Link Formatting**
    - **Property 7: Viber Deep Link Formatting**
    - **Validates: Requirements 9.2, 9.3**

  - [x] 2.5 Create LanguageSwitcher component
    - Create `src/react-app/components/ui/LanguageSwitcher.tsx`
    - Toggle between BG/EN with flag icons or text
    - Keyboard accessible (Enter/Space)
    - ARIA labels in current language
    - _Requirements: 1.2, 1.6, 7.2, 7.3_

  - [x] 2.6 Create Logo component
    - Create `src/react-app/components/ui/Logo.tsx`
    - SVG logo placeholder for Garrison
    - _Requirements: 5.4_

  - [x] 2.7 Create ServiceCard component
    - Create `src/react-app/components/ui/ServiceCard.tsx`
    - Display icon, title, description from translation keys
    - _Requirements: 5.5_

- [x] 3. Checkpoint - Verify core components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement layout components
  - [x] 4.1 Create StickyHeader component
    - Create `src/react-app/components/layout/StickyHeader.tsx`
    - Fixed position with Logo, nav links, LanguageSwitcher, small PhoneCTA
    - Mobile hamburger menu (optional)
    - _Requirements: 2.7, 3.4, 3.5_

  - [x] 4.2 Create Footer component
    - Create `src/react-app/components/layout/Footer.tsx`
    - Copyright, LanguageSwitcher, phone number
    - _Requirements: 3.5, 8.6_

  - [x] 4.3 Create Layout wrapper component
    - Create `src/react-app/components/layout/Layout.tsx`
    - Wraps StickyHeader, main content, Footer
    - Skip navigation link for accessibility
    - _Requirements: 7.5_

- [x] 5. Implement page sections
  - [x] 5.1 Create HeroSection component
    - Create `src/react-app/components/sections/HeroSection.tsx`
    - Full viewport height on mobile
    - Tagline, large PhoneCTA, MessagingButtons
    - Phone number as text and button
    - _Requirements: 3.1, 3.6, 8.1, 9.4_

  - [x] 5.2 Create ServicesSection component
    - Create `src/react-app/components/sections/ServicesSection.tsx`
    - Grid of ServiceCard components (Emergency, Transport, Events)
    - Responsive: 1 column mobile, 2-3 columns desktop
    - _Requirements: 5.5, 8.2_

  - [x] 5.3 Create AboutSection component
    - Create `src/react-app/components/sections/AboutSection.tsx`
    - Company description, trust-building content
    - _Requirements: 5.6, 8.3_

  - [x] 5.4 Create CoverageSection component
    - Create `src/react-app/components/sections/CoverageSection.tsx`
    - Sofia coverage area mention
    - Optional map placeholder
    - _Requirements: 8.4_

  - [x] 5.5 Create ContactSection component
    - Create `src/react-app/components/sections/ContactSection.tsx`
    - Phone number, PhoneCTA, MessagingButtons
    - _Requirements: 3.5, 8.5, 9.4_

- [x] 6. Implement SEO and metadata
  - [x] 6.1 Create SEOHead component
    - Create `src/react-app/components/seo/SEOHead.tsx`
    - Dynamic title, description, keywords based on language
    - Open Graph meta tags
    - JSON-LD structured data for LocalBusiness
    - _Requirements: 4.1, 4.2, 4.3, 4.8, 4.9_

  - [ ]* 6.2 Write property tests for SEO
    - **Property 8: SEO Metadata Completeness**
    - **Property 9: Structured Data Validity**
    - **Validates: Requirements 4.1, 4.3**

  - [x] 6.3 Create static SEO files
    - Create `public/robots.txt` allowing crawling
    - Create `public/sitemap.xml` with site URLs
    - _Requirements: 4.6, 4.7_

  - [x] 6.4 Update index.html with SEO enhancements
    - Add semantic HTML structure
    - Add Cloudflare Web Analytics script placeholder
    - Add preconnect hints for external resources
    - _Requirements: 4.4, 10.1_

- [x] 7. Checkpoint - Verify sections and SEO
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Wire everything together and style
  - [x] 8.1 Update App.tsx with full page structure
    - Wrap with I18nProvider
    - Include Layout with all sections
    - Include SEOHead
    - _Requirements: 1.1, 8.1-8.6_

  - [x] 8.2 Create global styles
    - Create `src/react-app/styles/globals.css` with base mobile-first styles
    - Import variables.css
    - Set up responsive breakpoints
    - _Requirements: 2.1, 2.2, 2.5_

  - [x] 8.3 Style components for mobile-first
    - Ensure CTA buttons are 80%+ width on mobile
    - Ensure 44x44px minimum touch targets
    - Apply emergency service color scheme
    - _Requirements: 2.3, 2.4, 5.1, 5.2, 5.3_

  - [ ]* 8.4 Write property tests for accessibility
    - **Property 11: ARIA Label Language Correctness**
    - **Property 12: Color Contrast Compliance**
    - **Validates: Requirements 7.3, 7.4**

  - [ ]* 8.5 Write property tests for image alt text
    - **Property 10: Image Alt Text Bilingual Coverage**
    - **Validates: Requirements 4.5**

- [x] 9. Performance optimization
  - [x] 9.1 Optimize assets
    - Add WebP images with fallbacks
    - Implement lazy loading for below-fold images
    - _Requirements: 6.2, 6.3_

  - [x] 9.2 Update Cloudflare Worker for caching
    - Configure cache headers for static assets
    - Ensure edge caching is enabled
    - _Requirements: 6.5, 6.7, 6.8_

- [x] 10. Final checkpoint - Full integration test
  - Ensure all tests pass, ask the user if questions arise.
  - Verify mobile responsiveness
  - Verify language switching works end-to-end
  - Verify all CTAs (phone, WhatsApp, Viber) work correctly

## Notes

- Tasks marked with `*` are optional property-based tests that can be skipped for faster MVP
- The existing Vite + React + Cloudflare Workers setup is preserved
- Phone number placeholder: +359 888 123 456
- Default language: Bulgarian
- Property tests use fast-check library for TypeScript
- Each property test references its design document property number
