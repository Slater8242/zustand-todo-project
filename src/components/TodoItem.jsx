import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import useStore from "../store";

const TodoItem = ({todo})=>{
  const toggleTodo = useStore(state=>state.toggleTodo);
  const removeTodo = useStore(state=>state.removeTodo);
  
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