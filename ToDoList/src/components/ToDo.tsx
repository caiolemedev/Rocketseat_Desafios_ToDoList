import { useState } from 'react'

import { Task } from './Task'

export function ToDo() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const [tasksDone, setTasksDone] = useState(0)

  function handleCreateNewTask() {
    event.preventDefault()
    setTasks([...tasks, newTask])
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function countDoneTasks(){
    let inputs = document.getElementsByTagName('input')
    const doneTasks = Array.from(inputs).filter(
      task => {return task.checked==true})
    setTasksDone(doneTasks.length)
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
          <span>Tarefas criadas {tasks.length}</span>
          <span>Tarefas concluídas {tasksDone}</span>
        </p>
          {tasks.map(task => {
            return (
              <Task
                key={task}
                content={task}
                onDeleteTask={deleteTask}
                checkedOrNotChecked={countDoneTasks}
              />
            )
          })}
      </div>

    </div>
  )
}