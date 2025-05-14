import { Card, Checkbox, Group, Text } from '@mantine/core';

export default function TaskCard({ task, onToggle }) {
  return (
    <Card withBorder shadow="sm" radius="md" padding="sm">
      <Group position="apart" noWrap>
        <Text size="sm" strikethrough={task.completed}>
          {task.title}
        </Text>
        <Checkbox
          checked={task.completed}
          onChange={onToggle}
          size="sm"
          styles={{
            root: { marginLeft: 'auto' },
            input: { cursor: 'pointer' },
          }}
        />
      </Group>
    </Card>
  );
}