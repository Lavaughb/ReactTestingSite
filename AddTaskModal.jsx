import { Modal, TextInput, Button, Stack } from '@mantine/core';
import { useState } from 'react';

export default function AddTaskModal({ opened, onClose}) {
    const [taskTitle, setTaskTitle] = useState('');

    const handleAdd = () => {
        console.log('New Task:', taskTitle);
        setTaskTitle('');
        onClose();
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Add Task">
            <Stack>
                <TextInput 
                    placeholder='Task Title'
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
                <Button onClick={handleAdd}>Add</Button>
            </Stack>
        </Modal>
        );
}
