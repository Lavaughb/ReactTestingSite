import { Stack, Text } from '@mantine/core';
import TaskCard from './TaskCard';
import { useState } from 'react';


export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Drink Water', completed: false, date: '2025-05-14'},
        { id: 2, title: 'Workout', completed: true, date: '2025-05-14'}
    ]);

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? {...task, completed: !task.completed} : task
            )
        );
    };

    return (
        <Stack>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} onToggle={() => toggleTask(task.id)} />
            ))}
        </Stack>
    );

}