import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import MissionVision from '@/components/MissionVision';
import WhyChooseUs from '@/components/WhyChooseUs';
import ToppersShowcase from '@/components/ToppersShowcase';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutPreview />
      <MissionVision />
      <WhyChooseUs />
      <ToppersShowcase />
      <GalleryPreview />
      <Testimonials />
    </div>
  );
}
