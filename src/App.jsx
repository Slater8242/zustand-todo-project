import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from '@mui/material'
import TodoList from './components/TodoList'
import useTodoStore from './todoStore'

export default function App() {
  const [input, setInput] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom mt={4}>
        Todo App
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            label="Новая задача"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" onClick={handleAdd}>
            Добавить
          </Button>
        </Box>
        <TodoList />
      </Paper>
    </Container>
  )
}
