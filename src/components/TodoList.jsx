import { List, Typography } from "@mui/material";
import useTodoStore from "../todoStore"
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore(state=> state.todos);

  if(todos.length ===0){
    return <Typography mt={2}>Нет Задач</Typography>
  }

  return (
    <List>
      {todos.map(todo=>(
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </List>
  )
}

export default TodoList