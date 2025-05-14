import { Container, Title, Button, Group, Stack, Card, TextInput} from '@mantine/core';
import { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskModal from '../components/AddTaskModal';


export default function Dashboard() {
    const [opened, setOpened] = useState(false);

    return (
        <Container>
            <Group position="apart" mt="md" mb="md">
                <Title order={2}>Today's Tasks</Title>
                <Button onClick={() => setOpened(true)}>Add Task</Button>
            </Group>
            <TaskList />
            <AddTaskModal opened={opened} onClose={() => setOpened(false)} />
        </Container>
    );
}