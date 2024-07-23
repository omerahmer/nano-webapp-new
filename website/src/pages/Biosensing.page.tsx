import React from "react";
import { Text } from '@mantine/core';
import { Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ReusableCard from "../components/ReusableCard/ReusableCard";
import classes from './BiosensingPage.module.css'

interface CardData {
    title: string;
    description: string;
    imageSrc: string;
}

function GradientText() {
    return (
        <span style={{ display: 'inline' }}>
            <Text
                className={classes.gradienttext}
                fw={900}
                variant="gradient"
                gradient={{ from: 'blue', to: 'violet', deg: 90 }}
            >Functionalization, Electrochemical Impedance Spectroscopy, CAD, Microfabrication, and COMSOL</Text>
        </span>
    )
}

const BiosensingPage: React.FC = () => {
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    const cardsData: CardData[] = [
        {
            title: "Functionalization",
            description:
                "Functionalizing Carbon Nanotubes with secondary amine groups, then quantifying and analyzing functionalized CNTs through fluorescence spectroscopy.",
            imageSrc: "/biosensing pics/Functionalization-min.png",
        },
        {
            title: "Spectroscopy Testing",
            description:
                "Conducting Electrochemical impedance spectroscopy tests for determining concentrations of tacrolimus and creatinine to detect kidney failure in patients.",
            imageSrc: "/biosensing pics/Electrical Impedance Spectroscopy2-min.JPG",
        },
        {
            title: "Fabrication",
            description:
                "Designing and fabricating microfluidic devices through CAD and microfabrication (photolithography, soft-lithography).",
            imageSrc: "/biosensing pics/Fabrication of biosensing chips-min.JPG",
        },
        {
            title: "Analysis",
            description:
                "Using COMSOL to conduct stress analysis of CNTs to examine the durability and strength, and reliability of our CNT-based biosensing structures.",
            imageSrc: "/biosensing pics/comsol_test_bio-min.png",
        },
    ];

    return (
        <animated.div style={fadeIn}>
            <Container className="mt-5">
                <div className={`${classes.info}`}>
                    <h1 style={{ fontSize: '2.5em' }}>Biosensing Solutions</h1>
                    <div style={{ fontSize: '1.45em', fontWeight: 'bold', display: 'inline-block', justifyContent: 'center' }}>
                        The biosensing team develops cutting-edge technologies for medical diagnostics with our comprehensive understanding of nanomaterials, investigating the potential of Carbon Nanotubes in biosensing applications through various techniques: <GradientText />
                    </div>
                </div>
                {cardsData.map((card, index) => (
                    <ReusableCard key={index} {...card} />
                ))}
            </Container>
        </animated.div >
    );
};

export default BiosensingPage;
