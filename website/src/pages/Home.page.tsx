import { CardsCarouselBiosensing } from '@/components/CardsCarousel/CardsCarouselBiosensing';
import { CardsCarouselEbeam } from '@/components/CardsCarousel/CardsCarouselEbeam';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';
import { HeaderBioSection } from '@/components/HeaderForCarousels/HeaderBioSection';
import { HeaderEbeamSection } from '@/components/HeaderForCarousels/HeaderEbeamSection';
import { HeaderFieldSection } from '@/components/HeaderForCarousels/HeaderFieldSection';

export function HomePage() {
  return (
    <>
      <HeroImageRight />
      <ColorSchemeToggle />
      <HeaderBioSection />
      <CardsCarouselBiosensing />
      <HeaderEbeamSection />
      <CardsCarouselEbeam />
      <HeaderFieldSection />
    </>
  );
}
