import React from 'react';
import { Container } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import ReusableCard from '../components/ReusableCard/ReusableCard';
import classes from './BiosensingPage.module.css';

interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

const Exoskeleton: React.FC = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const cardsData: CardData[] = [
    {
      title: 'Brainwaves',
      description:
        'Classify the brain signals using AI/ML. Identify which movement the user is taking (such as arm or leg with a certain degree, speed, and force).',
      imageSrc: '/exoskeleton/eeg.png',
    },
    {
      title: 'Signal Processing',
      description:
        'Reading and detecting the brainwaves similar to an EEG. Designing an ultrasonic sensor for nerve detection and stimulation.',
      imageSrc: '/ebeam pics/IMG_4842-min.jpg',
    },
    {
      title: 'Motion Aid',
      description:
        'Designing parts for the execution of movement by the brainwaves. Using motors to move limbs and EMS circuits to stimulate the nerves, using thermal pads to aid the muscle movements, etc.',
      imageSrc: '/biosensing pics/impedancespectroscopy1-min.png',
    },
    {
      title: 'Software (Front End)',
      description:
        'Our mission is to create an intuitive and user-friendly graphical user interface (GUI) where users can effortlessly design intricate patterns. This front-end software will be seamlessly connected to the back-end system for a harmonious user experience.',
      imageSrc: '/ebeam pics/frontend2-min.png',
    },
    {
      title: 'Theoretical Simulation (COMSOL + Theory)',
      description:
        'Dive into the world of theoretical simulation as we employ COMSOL to predict the focal length and spot size of the electron beam. Our simulations are meticulously compared with theoretical predictions to ensure the utmost accuracy and reliability.',
      imageSrc: 'https://via.placeholder.com/150',
    },
    {
      title: 'Theoretical Simulation (Custom Software)',
      description:
        'Embark on a journey of innovation as we develop our own custom software to simulate the end-to-end behavior of our cutting-edge electron-beam lithography system. This software promises to provide insights and understanding like never before.',
      imageSrc: '/ebeam pics/software-min.png',
    },
  ];

  return (
    <animated.div style={fadeIn}>
      <Container className="mt-5">
        <div className={`${classes.info}`}>
          <h1 style={{ fontSize: '2.5em' }}>Exoskeleton</h1>
        </div>
        {cardsData.map((card, index) => (
          <ReusableCard key={index} {...card} />
        ))}
      </Container>
    </animated.div>
  );
};

export default Exoskeleton;
