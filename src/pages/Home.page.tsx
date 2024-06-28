import React from 'react';
import { CardsCarouselBiosensing } from '@/components/CardsCarousel/CardsCarouselBiosensing';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';
import { HeaderBioSection } from '@/components/HeaderForCarousels/HeaderBioSection';
import { HeaderEbeamSection } from '@/components/HeaderForCarousels/HeaderEbeamSection';

export function HomePage() {
  return (
    <>
      <HeroImageRight />
      <ColorSchemeToggle />
      <HeaderBioSection />
      <CardsCarouselBiosensing />
      <HeaderEbeamSection />
    </>
  );
}
