import { Title, Text, Container } from '@mantine/core';
import classes from './HeaderForCarousels.module.css';

export function HeaderBioSection() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Biosensing
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        The biosensing team develops cutting-edge technologies for medical diagnostics with our
        comprehensive understanding of nanomaterials.
      </Text>
    </Container>
  );
}
