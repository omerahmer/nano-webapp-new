import { Title, Button, Text, Container } from '@mantine/core';
import classes from './HeaderForCarousels.module.css';

export function HeaderFieldSection() {
    return (
        <Container size="lg" py="xl">
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Field Emissions
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                The biosensing team develops cutting-edge technologies for medical diagnostics with our
                comprehensive understanding of nanomaterials.
            </Text>
            <div className={classes.buttonContainer}>
                <a href="/FieldEmissions">
                    <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                        Read More
                    </Button>
                </a>
            </div>
        </Container>
    );
}
