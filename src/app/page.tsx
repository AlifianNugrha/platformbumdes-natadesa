import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ProblemsSection from '@/components/ProblemsSection';
import ModulesSection from '@/components/ModulesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ProblemsSection />
      <ModulesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
