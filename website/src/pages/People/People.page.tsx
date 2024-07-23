import { Title, Paper, TextInput, Container, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import classes from './People.module.css';
import React from 'react';
import { useNavigate } from "react-router-dom";

interface PeopleData {
    name: string;
    image: string;
    teams: string;
    blurb: string;
}

const PeoplePage: React.FC = () => {
    const [people, setPeople] = useState<PeopleData[]>([]);
    const [newPerson, setNewPerson] = useState<PeopleData>({ name: '', image: '', teams: '', blurb: '' });
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                console.log('Fetching people data...');
                const response = await fetch("https://nanotech.studentorg.berkeley.edu/api/people");
                console.log('Response status:', response.status);
                if (!response.ok) {
                    throw new Error(`Failed to fetch people data: ${response.statusText}`);
                }
                const peopleData = await response.json();
                console.log('People data received:', peopleData);
                setPeople(peopleData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }
        fetchPeople();
    }, []);

    const handleAddPerson = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }
            const response = await fetch("https://nanotech.studentorg.berkeley.edu/api/people", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
                body: JSON.stringify(newPerson)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Person added:', data);
                setPeople([...people, newPerson]);
                setNewPerson({ name: '', image: '', teams: '', blurb: '' });
            } else {
                const errorData = await response.json();
                console.error("Failed to add person:", errorData.error);
            }
        } catch (error) {
            console.error("Error adding person:", error);
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setNewPerson(prev => ({ ...prev, [name]: value }));
    }

    // Render loading state
    if (loading) {
        return <p>Loading...</p>;
    }

    const principalInvestigator = people.find((person) => person.name === 'Waqas Khalid');
    const otherResearchers = people.filter((person) => person.name !== 'Waqas Khalid');

    return (
        <div className={`${classes.textCenter} ${classes.fontLink}`}>
            <div className={classes.container}>
                <h1 className={classes.heading}>Meet the researchers of the Nanotechnology Laboratory!</h1>

                {/* Principal Investigator Row */}
                {principalInvestigator && (
                    <div className={`${classes.row} ${classes.personContainer}`}>
                        <div className={classes.col12}>
                            <div className={classes.personInfo}>
                                <div
                                    className={classes.peopleImage}
                                    dangerouslySetInnerHTML={{
                                        __html: principalInvestigator.image,
                                    }}
                                ></div>
                                <h5 className={classes.text3xl}>{principalInvestigator.name}</h5>
                                <p className={classes.fontItalic}>Principal Investigator</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Researchers - Fixed Columns */}
                <div className={classes.row}>
                    {otherResearchers.map((person, index) =>
                        person.image && person.name && person.teams ? (
                            <div key={index} className={classes.colMd4}>
                                <div className={classes.personContainer}>
                                    <div
                                        className={classes.peopleImage}
                                        dangerouslySetInnerHTML={{ __html: person.image }}
                                    ></div>
                                    <div className={classes.personInfo}>
                                        <span className={classes.text3xl}>{person.name}</span>
                                        <p className={classes.blurb}>{person.blurb}</p>
                                        <p className={classes.fontItalic}>Team(s): {person.teams}</p>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>

                <Container size={420} my={40}>
                    <Title ta="center" className={classes.title}>
                        Add your information!
                    </Title>

                    <form onSubmit={handleAddPerson}>
                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <TextInput
                                label="Full name"
                                placeholder="Name"
                                name="name"
                                value={newPerson.name}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                label="Teams"
                                placeholder="Teams (comma-separated)"
                                name="teams"
                                value={newPerson.teams}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                label="Blurb"
                                placeholder="Blurb"
                                name="blurb"
                                value={newPerson.blurb}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                label="Image link"
                                placeholder="Image link (imgbb.com HTML full linked)"
                                name="image"
                                value={newPerson.image}
                                onChange={handleInputChange}
                                required
                            />
                            <Button fullWidth mt="xl" type='submit'>
                                Submit
                            </Button>
                        </Paper>
                    </form>
                </Container>
            </div>
        </div>
    )
};

export default PeoplePage;