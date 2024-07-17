import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Button, Paper, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: 'https://i.ibb.co/vPvxP6B/happymatty.jpg',
    title: 'Lithography and engineering',
    category: 'E-beam lithography',
  },
  {
    image: 'https://i.ibb.co/2vsDDrk/Screenshot-2024-07-07-at-3-48-05-PM.png',
    title: 'Software',
    category: 'E-beam lithography',
  },
  {
    image: 'https://i.ibb.co/WKxCrtV/cubething.png',
    title: 'Electronics',
    category: 'E-beam lithography',
  },
  {
    image: 'https://i.ibb.co/s6wTMzw/biosensing-pic-min.jpg',
    title: 'Growth of nanotubes',
    category: 'E-beam lithography',
  },
];

export function CardsCarouselEbeam() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
