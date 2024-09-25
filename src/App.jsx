import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')


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

  const handleEditTodo = (index) => {
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
