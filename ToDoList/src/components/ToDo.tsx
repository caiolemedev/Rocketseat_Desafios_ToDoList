import { ChangeEvent, FormEvent, useState } from 'react'
import { Plus, PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import styles from './ToDo.module.css'

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

  return (
    <div>
      <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
        <textarea 
          name="newTask"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTaskChange}
        />
        
      <button type='submit'>Criar <PlusCircle size={20} /> </button>
      </form>


      <div className={styles.taskList}>
        <div className={styles.taskInfo}>
          <p className={styles.taskCount}>
            <span>Tarefas criadas</span>
            <span>{tasks.length}</span>
          </p>
          <p className={styles.taskDone}>
            <span>Tarefas concluídas</span>
            <span>{tasksDone.length}</span>
          </p>
        </div>
          {tasks.map(task => {
            return (
              <Task
                key={task.id}
                content={task.content}
                isChecked={task.checked}
                onDeleteTask={deleteTask}
                updateCheckedTasks={updateCheckedTasks}
              />
            )
          })}
      </div>

    </div>
  )
}