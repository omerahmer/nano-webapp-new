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
            <a href='/Biosensing'>
                <Button variant="white" color="dark">
                    Read article
                </Button>
            </a>
        </Paper>
    );
}

const data = [
    {
        image: 'https://i.ibb.co/KsY1sZw/Functionalization-min.png',
        title: 'Functionalization of carbon nanotubes',
        category: 'biosensing',
    },
    {
        image: 'https://i.ibb.co/tzWjqLS/Fabrication-of-biosensing-chips-min.jpg',
        title: 'Microfluidic device fabrication',
        category: 'biosensing',
    },
    {
        image: 'https://i.ibb.co/gw726HH/Electrical-Impedance-Spectroscopy2.jpg',
        title: 'Spectroscopy testing',
        category: 'biosensing',
    },
    {
        image: 'https://i.ibb.co/s6wTMzw/biosensing-pic-min.jpg',
        title: 'Growth of nanotubes',
        category: 'biosensing',
    },
];

export function CardsCarouselBiosensing() {
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
