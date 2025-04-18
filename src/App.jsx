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
import { useTranslation } from 'react-i18next'
import LangSwitcher from './components/LangSwitcher'

export default function App() {
  const [input, setInput] = useState('')
  const addTodo = useStore((state) => state.addTodo)
  const mode = useStore(state=>state.mode)
  const toggleTheme = useStore(state=>state.toggleTheme)
  const { t } = useTranslation()

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="right">
        <LangSwitcher />
        <IconButton onClick={toggleTheme} color='inherit'>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4/> }
        </IconButton>
      </Box>
      <Typography variant="h4" align="center" gutterBottom mt={4}>
        {t("title")}
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            label={t("newTask")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" onClick={handleAdd}>
            {t("add")}
          </Button>
        </Box>
        <TodoList />
      </Paper>
    </Container>
  )
}
