const TodoList = ({ todos, deleteTask, finishTask }) => {
  return (
    <div>
      {todos.map((task, index) => (
        <div key={index}>
          <h1>{task}</h1>
          <button onClick={() => finishTask(index)}>Terminer</button>
          <button onClick={() => deleteTask(index)}>Supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList;
