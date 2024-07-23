import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import { useState, useEffect, FormEvent } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'Login';
    }, []);

    async function loginUser(event: FormEvent) {
        event.preventDefault();
        const response = await fetch('https://nanotech.studentorg.berkeley.edu/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.user) {
            localStorage.setItem('token', data.user)
            window.location.href = '/Biosensor'
        } else {
            alert('Please check your username and password')
        }
        console.log(data);
    }
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor size="sm" component="button">
                    <a href="/Register">Register</a>
                </Anchor>
            </Text>


            <form onSubmit={loginUser}>
                <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                    <TextInput
                        label="Username"
                        placeholder="Your username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        required
                        mt="md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Group justify="space-between" mt="lg">
                        <Checkbox label="Remember me" />
                    </Group>
                    <Button
                        fullWidth
                        mt="xl"
                        type="submit"
                        value="login"
                    >
                        Sign in
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}

export default Login;