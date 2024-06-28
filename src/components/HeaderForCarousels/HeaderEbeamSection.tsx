import { Title, Text, Container } from '@mantine/core';
import classes from './HeaderForCarousels.module.css';

export function HeaderEbeamSection() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Electron-beam Lithography
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Our state-of-the-art electron-beam lithography tool empowers researchers and engineers to
        achieve unprecedented precision in nanoscale fabrication on silicon wafers.
      </Text>
    </Container>
  );
}
