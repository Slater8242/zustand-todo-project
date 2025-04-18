import { useState } from 'react'
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  IconButton,
} from '@mui/material'
import TodoList from './components/TodoList'
import useStore from './store'
import { Brightness4, Brightness7 } from '@mui/icons-material'

export default function App() {
  const [input, setInput] = useState('')
  const addTodo = useStore((state) => state.addTodo)
  const mode = useStore(state=>state.mode)
  const toggleTheme = useStore(state=>state.toggleTheme)

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <Container maxWidth="sm">
      <IconButton onClick={toggleTheme} color='inherit'>
        {mode === 'dark' ? <Brightness7 /> : <Brightness4/> }
      </IconButton>
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
