import {
    TextInput,
    Paper,
    Title,
    Container,
    Button,
} from '@mantine/core';
import classes from '../AuthenticationTitle.module.css';
import { useState } from 'react';
// import { PeopleData, addPerson, initialPeople } from './People.page';

function PeopleForm() {
    const [name, setName] = useState('');
    const [teams, setTeams] = useState('');
    const [blurb, setBlurb] = useState('');
    const [image, setImage] = useState('');
    // const [people, setPeople] = useState(initialPeople);

    /*const handleSubmit = () => {
        const newPerson: PeopleData = { name, image, teams, blurb };
        addPerson(newPerson);
        setName('');
        setTeams('');
        setBlurb('');
        setImage('');
    }*/

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Add your information!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput
                    label="Full name"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required />
                <TextInput
                    label="Teams"
                    placeholder="Teams (comma-separated)"
                    value={teams}
                    onChange={(event) => setTeams(event.target.value)}
                    required />
                <TextInput
                    label="Blurb"
                    placeholder="Blurb"
                    value={blurb}
                    onChange={(event) => setBlurb(event.target.value)}
                    required />
                <TextInput
                    label="Image link"
                    placeholder="Image link (imgbb.com HTML full linked)"
                    value={image}
                    onChange={(event) => setImage(event.target.value)}
                    required />
                {/*<Button fullWidth mt="xl" onClick={() => { setPeople([...initialPeople, { name: name, image: image, teams: teams, blurb: blurb }]) }}>
    
                    Submit
    </Button>*/}
            </Paper>
        </Container>
    );
}

export default PeopleForm;