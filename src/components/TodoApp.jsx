import { useState } from 'react';
import { Box, Input, Button, List, ListItem, IconButton } from '@chakra-ui/react';
import { FaTrash, FaCheck } from 'react-icons/fa';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const removeTask = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleCompletion = index => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Box p={4}>
      <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={addTask} colorScheme="blue" ml={2}>Add Task</Button>
      <List spacing={3} mt={4}>
        {tasks.map((task, index) => (
          <ListItem key={index} textDecoration={task.completed ? 'line-through' : 'none'}>
            {task.text}
            <IconButton icon={<FaCheck />} onClick={() => toggleCompletion(index)} colorScheme="green" ml={2} />
            <IconButton icon={<FaTrash />} onClick={() => removeTask(index)} colorScheme="red" ml={2} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TodoApp;