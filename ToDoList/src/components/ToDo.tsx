import { ChangeEvent, FormEvent, useState } from 'react'

import { Task } from './Task'

export function ToDo() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  const [tasksDone, setTasksDone] = useState(0)

  const [tasksInputStatus, setTasksInputStatus] = useState([])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
    console.log("deletar")
  }

  function countDoneTasks(){
    let inputs = Array.from(document.getElementsByTagName('input'))
    setTasksDone(inputs.filter(
      input => {return input.checked==true}).length
    )
    console.log('contar')
    console.log(tasks)
    tasks.map(task => console.log(task))
  }

  function showTasksInputStatus(content: string, checked: boolean){
    const toUpdate = tasks.indexOf(content)
    const newInputStatus = tasksInputStatus
    console.log(toUpdate)
    newInputStatus[toUpdate] = checked
    setTasksInputStatus(newInputStatus)
    console.log(tasksInputStatus)
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
                taskInputStatus={showTasksInputStatus}
                checked={true}
              />
            )
          })}
      </div>

    </div>
  )
}