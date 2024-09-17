import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((toDo, i) => {
      return i !== index
    })
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App
