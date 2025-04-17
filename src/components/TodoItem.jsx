import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useTodoStore from "../todoStore";

const TodoItem = ({todo})=>{
  const toggleTodo = useTodoStore(state=>state.toggleTodo);
  const removeTodo = useTodoStore(state=>state.removeTodo);
  
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => removeTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <ListItemText
        primary={todo.text}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      />
    </ListItem>
  )
}

export default TodoItem;