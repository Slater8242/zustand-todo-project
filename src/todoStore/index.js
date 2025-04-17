import { create } from "zustand";
import { persist } from "zustand/middleware";
import createTodoSlice from "./todoSlice";

const useTodoStore = create(
  persist(
    (set)=> ({
      ...createTodoSlice(set)
    }),
    {
      name: "todo-storage",
    }
  )
)

export default useTodoStore;