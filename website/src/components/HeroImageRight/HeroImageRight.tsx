import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export function HeroImageRight() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to the{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'purple', to: 'blue' }}
              >
                Nanotechnology Lab
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              Our carbon nanotube sensors, developed in collaboration with institutions including
              NASA Ames, Stanford, UCSF, LBNL, and UC Davis Medical Center, revolutionize biosensing
              with unparalleled sensitivity, enabling in-situ detection of multiple biomarkers.
              <br />
              <br />
              Beyond biosensing, these nanotubes achieve remarkable energy density in the form of a
              supercapacitor, setting a new standard for energy storage capabilities. Join us in
              exploring the transformative potential of nanotechnology in reshaping the future of
              biosensing and sustainable energy solutions.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'purple', to: 'blue' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Scroll for more
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
