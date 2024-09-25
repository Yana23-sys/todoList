import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistTodos(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistTodos(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((toDo, i) => {
      return i !== index
    })
    persistTodos(newTodoList)
    setTodos(newTodoList)
  }

  const handleEditTodo = (index) => {
    const valueToEdit = todos[index]
    setTodoValue(valueToEdit)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  } , [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App
