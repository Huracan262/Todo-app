import {RiCheckFill, RiDeleteBin5Line, RiTodoLine} from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({todoNumber, todo, deleteTodo, changeComplete}) {
  return (
    <div className={`${styles.todoBlock} ${todo.isCompleted ? styles.isCompleted : ''}`}>
      <dt className={styles.title}>
        <RiTodoLine className={styles.iconNotepad} />

        <h3 className={styles.titleText}>Todo {todoNumber}</h3>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => changeComplete(todo.id)}><RiCheckFill className={styles.iconCheck} /></button>
          <button className={styles.button} onClick={() => deleteTodo(todo.id)}><RiDeleteBin5Line className={styles.iconDelete} /></button>
        </div>
      </dt>

      <dd>{todo.text}</dd>
    </div>
  )
}

export default Todo