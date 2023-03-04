import { ChangeEvent, FormEvent, useState } from 'react'

import { Task } from './Task'

export function ToDo() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, {id: newTask, content: newTask, checked: false}])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
    console.log("deletar")
  }

  function updateCheckedTasks(content: string){
    const toUpdate = tasks.map(task => {
      if(task.content === content)
        {task.checked = !task.checked}
      return task;
      })
    setTasks(toUpdate)
  }

  const tasksDone = tasks.filter(task => {return task.checked !== false})
  console.log(tasksDone.length)

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
                key={task.id}
                content={task.content}
                onDeleteTask={deleteTask}
                updateCheckedTasks={updateCheckedTasks}
              />
            )
          })}
      </div>

    </div>
  )
}