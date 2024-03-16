import styles from './TodoList.module.css'
import Todo from './Todo'

function TodoList({todos, deleteTodo, changeComplete}) {

  return (
    <dl className={styles.todoList}>
      {todos.map(todo => (
        <Todo todoNumber={todos.indexOf(todo) + 1} todo={todo} deleteTodo={deleteTodo} changeComplete={changeComplete} key={todo.id} />
      ))}
    </dl>
  )
}

export default TodoList