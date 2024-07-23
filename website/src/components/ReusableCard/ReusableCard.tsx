import React from 'react';
import cx from 'clsx';
import { MantineProvider, Container, Title, Text, Image, createTheme } from '@mantine/core';
import classes from './ReusableCard.module.css';

const theme = createTheme({
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
            }),
        }),
    },
});

interface ReusableCardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const ReusableCard: React.FC<ReusableCardProps> = ({ title, description, imageSrc }) => {
    return (
        <MantineProvider theme={theme}>
            <Container size="responsive" className={classes.customContainer}>
                <div className={classes.textContainer}>
                    <Title order={2}>{title}</Title>
                    <Text className={classes.description}>{description}</Text>
                </div>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={400}
                    className={classes.image}
                />
            </Container>
        </MantineProvider>
    );
};

export default ReusableCard;
