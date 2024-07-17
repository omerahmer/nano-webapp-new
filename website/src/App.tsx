import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { HeaderMegaMenu } from './components/HeaderMegaMenu/HeaderMegaMenu';
import '@mantine/carousel/styles.css';
import { FooterSimple } from './components/FooterSimple/FooterSimple';

export default function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <HeaderMegaMenu />
      <Router />
      <FooterSimple />
    </MantineProvider>
  );
}
