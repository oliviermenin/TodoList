import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("")

  const handleClick = (e) => setInputValue(e.target.value)

  const newTask = (e) => {
    e.preventDefault()
    addTask(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={newTask}>
      <input value={inputValue} onChange={handleClick} />
      <button>Ajouter la tâche</button>
    </form>
  )
}

export default TodoForm;
