import { create } from "zustand";
import { persist } from "zustand/middleware";
import createTodoSlice from "./todoSlice";
import createThemeSlice from "./themeSlice";

const useStore = create(
  persist(
    (set, get)=> ({
      ...createTodoSlice(set),
      ...createThemeSlice(set, get),
    }),
    {
      name: "todo-storage",
      partialize: (state=> ({
        todos: state.todos,
        mode: state.mode
      }))
    }
  )
)

export default useStore;