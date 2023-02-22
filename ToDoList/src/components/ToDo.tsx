import { useState } from 'react'

import { Task } from './Task'

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

  function deleteTask(){

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
          <span>Tarefas criadas 1</span>
          <span>Tarefas concluídas 0</span>
        </p>
        <p>
          {tasks.map(task => {
            return (
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
              />
            )
          })}
        </p>
      </div>

    </div>
  )
}