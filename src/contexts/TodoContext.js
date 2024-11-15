import { createContext, useContext } from "react";

// Here we create the context, it is just a function, which takes an object.
// And within the object we pass all the things which we want to have the context of (data, fields....)
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      tod: "Todo Message",
      completed: false
    }
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo:(id) => {},
  toggleComplete:(id) => {}
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
