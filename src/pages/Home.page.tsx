import { CardsCarousel } from '@/components/CardsCarousel/CardsCarousel';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';

export function HomePage() {
  return (
    <>
      <HeroImageRight />
      <ColorSchemeToggle />
      <CardsCarousel />
    </>
  );
}
