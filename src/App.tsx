import { AnimatePresence } from 'framer-motion';
import { useContact } from './context/ContactContext';
import ContactPage from './sections/ContactPage';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';

const App = () => {
  const { isOpen } = useContact();
  return (
    <>
      <main className="overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </main>
      <AnimatePresence>
        {isOpen && <ContactPage key="contact" />}
      </AnimatePresence>
    </>
  );
};

export default App;
