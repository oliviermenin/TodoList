import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState([])

  const addTask = (todos) => {
    setTodo([...todo, todos])
  }

  const deleteTask = (index) => {
    const newTodo = [...todo]
    newTodo.splice(index, 1)
    setTodo(newTodo)
  }

  const finishTask = (index) => {
    const newTodo = [...todo]
    newTodo[index] = newTodo[index] + " tache terminée"
    setTodo(newTodo)
  }

  return (
    <div>
      <TodoForm addTask={addTask} />
      <TodoList todos={todo} deleteTask={deleteTask} finishTask={finishTask} />
    </div>
  )
}

export default App;
