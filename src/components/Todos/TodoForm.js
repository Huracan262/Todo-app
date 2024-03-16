import styles from './TodoForm.module.css'
import {useState} from 'react'

function TodoForm({addTodo}) {
  const [text, setText] = useState('')
  const onSubmitHandler = event => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <input className={styles.input} placeholder="Enter new todo" value={text} onChange={e => setText(e.target.value)} />
      <button className={styles.button} type="submit">Submit</button>
    </form>
  )
}

export default TodoForm