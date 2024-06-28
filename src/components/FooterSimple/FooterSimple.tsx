import { Container, Group, Anchor } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterSimple.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: 'https://engineering.berkeley.edu', label: 'Berkeley Engineering' },
  { link: 'https://www.berkeley.edu', label: 'UC Berkeley' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'> c="dimmed" target="_blank" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p className="">© 2024 UC Berkeley</p>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
