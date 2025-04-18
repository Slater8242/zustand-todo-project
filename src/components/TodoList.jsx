import { List, Typography } from "@mui/material";
import useStore from "../store"
import TodoItem from "./TodoItem";
import { useTranslation } from "react-i18next";

const TodoList = () => {
  const todos = useStore(state=> state.todos);
  const {t} = useTranslation();

  if(todos.length ===0){
    return <Typography mt={2}>{t("noTasks")}</Typography>
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