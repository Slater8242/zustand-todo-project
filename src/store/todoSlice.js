const createTodoSlice = set=> ({
  todos: [],
  
  addTodo: (text)=>{
    const newTodo = {
      id: Date.now(),
      text, 
      completed: false,
    }
    set((state)=> ({ todos: [...state.todos, newTodo]}))
  },
  
  toggleTodo: (id)=>{
    set((state)=>({
      todos: state.todos.map((todo)=>
      todo.id === id ? {...todo, completed: !todo.completed}: todo
    ),
    }))
  },

  removeTodo: (id)=>{
    set((state)=>({
      todos: state.todos.filter((todo)=> todo.id !== id)
    }))
  },
})

export default createTodoSlice;