import {RiLoopLeftFill, RiDeleteBin5Line} from 'react-icons/ri'
import styles from './TodosActions.module.css'
import Button from '../UI/Button'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
  return (
    <div className={styles.buttons}>
      <Button onClick={resetTodos} title="Reset todos"><RiLoopLeftFill /></Button>
      <Button onClick={deleteCompletedTodos} title="Cleate completed todos" disabled={!completedTodosExist}><RiDeleteBin5Line /></Button>
    </div>
  )
}

export default TodosActions