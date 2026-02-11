import { I18nProvider } from './context/I18nContext';
import { Layout } from './components/layout/Layout';
import SEOHead from './components/seo/SEOHead';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { CoverageSection } from './components/sections/CoverageSection';
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <I18nProvider>
      <SEOHead />
      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CoverageSection />
        <ContactSection />
      </Layout>
    </I18nProvider>
  );
}

export default App;
