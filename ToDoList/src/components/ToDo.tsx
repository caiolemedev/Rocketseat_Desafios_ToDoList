import { useState } from 'react'


export function ToDo() {

  const [tasks, setTasks] = useState(['task1', 'task2'])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask}>
        <textarea 
          name="newTask"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTaskChange}
        />
        
      <button type='submit'>Criar</button>
      </form>


      <div className={'taskList'}>
        <p>
          {tasks}
        </p>
      </div>

    </div>
  )
}