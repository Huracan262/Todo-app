import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = text => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    }


    setTodos([...todos, newTodo])
  }

  const toggleTodoHandler = index => {
    setTodos(todos.map(todo => (
      todo.id === index ? {...todo, isCompleted: !todo.isCompleted} : todo
    )))
  }

  const deleteTodoHandler = index => {
    setTodos(todos.filter(todo => todo.id !== index))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  let completedTodosCount = todos.filter(todo => todo.isCompleted).length

  return (
    <div className="App">
      <h1 className="title">todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && <TodosActions resetTodos={resetTodosHandler} deleteCompletedTodos={deleteCompletedTodos} completedTodosExist={completedTodosCount} />}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} changeComplete={toggleTodoHandler} />
      {!todos.length && <h2 className="titleEmpty"> Todo list is empty</h2>}
      {!!completedTodosCount && <h2 className="titleEmpty">Completed tasks: {completedTodosCount}</h2>}
    </div>
  )
}
export default App;
