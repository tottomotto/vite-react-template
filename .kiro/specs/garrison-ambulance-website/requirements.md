# Requirements Document

## Introduction

This document defines the requirements for transforming the existing React + Cloudflare Workers codebase into a marketing and SEO-optimized website for "Garrison" - a private ambulance company operating in Sofia, Bulgaria. The website must be bilingual (Bulgarian and English), mobile-first, and provide an extremely clear and accessible way for users to contact the company via phone.

## Glossary

- **Website**: The Garrison ambulance company marketing website
- **User**: A visitor to the website seeking ambulance services or information
- **Language_Switcher**: The UI component that allows users to toggle between Bulgarian and English languages
- **CTA_Button**: Call-to-action button, specifically the prominent phone call button
- **Hero_Section**: The main banner area at the top of the page with primary messaging and CTA
- **SEO_Metadata**: Search engine optimization data including meta tags, structured data, and Open Graph tags
- **Sticky_Header**: A navigation header that remains visible when scrolling
- **Service_Card**: A UI component displaying information about a specific ambulance service
- **Messaging_Buttons**: UI buttons that deep link to messaging apps (WhatsApp, Viber) for contacting Garrison

## Requirements

### Requirement 1: Bilingual Language Support

**User Story:** As a user, I want to view the website in either Bulgarian or English, so that I can understand the content in my preferred language.

#### Acceptance Criteria

1. WHEN a user visits the website for the first time, THE Website SHALL display content in Bulgarian as the default language
2. WHEN a user clicks the Language_Switcher, THE Website SHALL toggle between Bulgarian and English languages
3. WHEN the language is changed, THE Website SHALL update all visible text content, including navigation, headings, body text, and CTA_Button labels
4. WHEN the language is changed, THE Website SHALL persist the language preference in local storage
5. WHEN a user returns to the website, THE Website SHALL restore their previously selected language preference
6. THE Website SHALL display the Language_Switcher in a visible location on all pages

### Requirement 2: Mobile-First Responsive Design

**User Story:** As a mobile user, I want the website to be optimized for my device, so that I can easily navigate and contact the ambulance service.

#### Acceptance Criteria

1. THE Website SHALL use a mobile-first CSS approach where base styles target mobile devices
2. WHEN viewed on mobile devices (width < 768px), THE Website SHALL display a single-column layout
3. WHEN viewed on mobile devices, THE CTA_Button for phone calls SHALL occupy at least 80% of the screen width
4. WHEN viewed on mobile devices, THE Website SHALL ensure all touch targets are at least 44x44 pixels
5. WHEN viewed on tablet or desktop devices, THE Website SHALL adapt the layout using CSS media queries
6. THE Website SHALL load and render the initial content within 3 seconds on 3G mobile connections
7. WHEN scrolling on mobile devices, THE Sticky_Header SHALL remain visible with the phone CTA_Button accessible

### Requirement 3: Prominent Phone Contact CTA

**User Story:** As a user in need of ambulance services, I want to easily find and tap a phone number, so that I can quickly contact Garrison.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a prominent CTA_Button with the phone number (+359 888 123 456)
2. WHEN a user taps the CTA_Button on a mobile device, THE Website SHALL initiate a phone call using the tel: protocol
3. THE CTA_Button SHALL use high-contrast colors (e.g., red/white) to stand out from surrounding content
4. THE Sticky_Header SHALL include a smaller but visible phone CTA_Button that remains accessible while scrolling
5. THE Website SHALL display the phone number in at least three locations: Hero_Section, Sticky_Header, and footer
6. WHEN viewed on mobile devices, THE CTA_Button in the Hero_Section SHALL be the most visually prominent element

### Requirement 4: SEO Optimization for Local Search

**User Story:** As a potential customer searching for ambulance services in Sofia, I want to find Garrison easily on search engines, so that I can access their services when needed.

#### Acceptance Criteria

1. THE Website SHALL include SEO_Metadata with title, description, and keywords in both Bulgarian and English
2. THE Website SHALL include Open Graph meta tags for social media sharing
3. THE Website SHALL include structured data (JSON-LD) for LocalBusiness schema with Sofia, Bulgaria location
4. THE Website SHALL use semantic HTML elements (header, main, nav, section, article, footer)
5. THE Website SHALL include alt text for all images in both languages
6. THE Website SHALL generate a sitemap.xml file
7. THE Website SHALL include a robots.txt file allowing search engine crawling
8. WHEN the language is Bulgarian, THE SEO_Metadata SHALL contain Bulgarian keywords including "линейка София", "частна линейка", "спешна помощ"
9. WHEN the language is English, THE SEO_Metadata SHALL contain English keywords including "ambulance Sofia", "private ambulance Bulgaria", "emergency medical services"

### Requirement 5: Professional Emergency Service Appearance

**User Story:** As a user in a potential emergency, I want the website to look professional, trustworthy, and convey urgency, so that I feel confident using Garrison's ambulance services.

#### Acceptance Criteria

1. THE Website SHALL use a color scheme with white as the dominant background color
2. THE Website SHALL use fire department red (#C8102E or similar) as the primary accent color for CTAs and urgent elements
3. THE Website SHALL use police/emergency blue (#003087 or similar) as the secondary accent color for trust elements
4. THE Website SHALL display the Garrison company logo in the header
5. THE Website SHALL include a services section with Service_Card components describing available ambulance services
6. THE Website SHALL include an "About Us" section establishing credibility and trust
7. THE Website SHALL use professional, readable typography with a minimum font size of 16px for body text
8. THE Website SHALL maintain consistent spacing and visual hierarchy throughout all sections
9. THE Website SHALL convey a sense of urgency and reliability appropriate for a life-saving emergency service

### Requirement 6: Fast Loading Performance

**User Story:** As a user with limited connectivity, I want the website to load quickly, so that I can access emergency contact information without delay.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse performance score of at least 90 on mobile
2. THE Website SHALL optimize all images using modern formats (WebP) with appropriate compression
3. THE Website SHALL implement lazy loading for images below the fold
4. THE Website SHALL minimize CSS and JavaScript bundle sizes
5. THE Website SHALL leverage Cloudflare Workers for edge caching and fast response times
6. WHEN the page loads, THE CTA_Button and phone number SHALL be visible without requiring JavaScript to execute
7. THE Website SHALL utilize Cloudflare's edge network for global content delivery
8. THE Website SHALL implement proper cache headers for static assets

### Requirement 10: Analytics and Performance Monitoring

**User Story:** As a business owner, I want to track website usage and performance, so that I can understand user behavior and optimize the service.

#### Acceptance Criteria

1. THE Website SHALL integrate Cloudflare Web Analytics for privacy-friendly visitor tracking
2. THE Website SHALL track page views, unique visitors, and referral sources
3. THE Website SHALL monitor Core Web Vitals (LCP, FID, CLS) through Cloudflare
4. THE Website SHALL implement Cloudflare's performance features including Auto Minify and Brotli compression
5. THE Website SHALL use Cloudflare's image optimization features when available
6. THE Website SHALL track CTA_Button clicks for phone calls and messaging app deep links
7. WHEN performance issues are detected, THE Website SHALL log them for analysis

### Requirement 7: Accessibility Compliance

**User Story:** As a user with accessibility needs, I want the website to be accessible, so that I can use it regardless of my abilities.

#### Acceptance Criteria

1. THE Website SHALL achieve WCAG 2.1 Level AA compliance
2. THE Website SHALL support keyboard navigation for all interactive elements
3. THE Website SHALL include proper ARIA labels for the CTA_Button and Language_Switcher
4. THE Website SHALL maintain a color contrast ratio of at least 4.5:1 for text
5. THE Website SHALL include skip navigation links for screen reader users
6. WHEN using a screen reader, THE CTA_Button SHALL announce "Call Garrison Ambulance" or equivalent in the active language

### Requirement 8: Content Sections

**User Story:** As a user, I want to learn about Garrison's services and coverage area, so that I can make an informed decision to use their services.

#### Acceptance Criteria

1. THE Website SHALL include a Hero_Section with company tagline and primary CTA_Button
2. THE Website SHALL include a Services section listing available ambulance services
3. THE Website SHALL include an About section with company information
4. THE Website SHALL include a Coverage Area section mentioning Sofia, Bulgaria
5. THE Website SHALL include a Contact section with phone number, and optionally address/email
6. THE Website SHALL include a Footer with copyright, language switcher, and essential links

### Requirement 9: Messaging App Deep Links

**User Story:** As a user, I want to contact Garrison through messaging apps like WhatsApp and Viber, so that I can reach them through my preferred communication channel.

#### Acceptance Criteria

1. THE Website SHALL display WhatsApp and Viber contact buttons alongside the phone CTA_Button
2. WHEN a user taps the WhatsApp button, THE Website SHALL open WhatsApp with a pre-filled message using the wa.me deep link format
3. WHEN a user taps the Viber button, THE Website SHALL open Viber using the viber://chat deep link format
4. THE Messaging_Buttons SHALL be visible in the Hero_Section and Contact section
5. THE Messaging_Buttons SHALL use recognizable brand icons for WhatsApp and Viber
6. WHEN viewed on mobile devices, THE Messaging_Buttons SHALL be easily tappable with minimum 44x44 pixel touch targets
7. THE Website SHALL display the messaging options in a visually grouped manner with the phone number
