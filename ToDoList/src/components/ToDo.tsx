import { ChangeEvent, FormEvent, useState } from 'react'
import { Notepad, PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import styles from './ToDo.module.css'

export interface NewTaskProps {
  id: string;
  content: string;
  isChecked: boolean;
}

export function ToDo() {

  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  function sortByChecked(tasksToSort: NewTaskProps[]) {
    const tasksSorted: NewTaskProps[] = tasksToSort.sort((a, b) => {
      if (a.isChecked === false) return -1;
      if (a.isChecked === true) return 1;
      return 0;
    });
    return tasksSorted;
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    var newTaskArray: NewTaskProps[] = []
    if (tasks.length == 0) {
      newTaskArray = [...tasks, {id: newTask, content: newTask, isChecked: false}]
      setTasks(sortByChecked(newTaskArray))
    } else {
      {tasks.map(task => {
        if (newTask == task.id) {
          window.alert('Duplicado!')
        } else {
          newTaskArray = [...tasks, {id: newTask, content: newTask, isChecked: false}]
          setTasks(sortByChecked(newTaskArray))
        }
      })}
    }
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

    setTasks(sortByChecked(tasksWithoutDeletedOne))
  }

  function updateCheckedTasks(content: string){
    const toUpdate: NewTaskProps[] = tasks.map(task => {
      if(task.content === content)
        {task.isChecked = !task.isChecked}
      return task;
      })
    setTasks(sortByChecked(toUpdate))
  }

  const tasksDone = tasks.filter(task => {return task.isChecked !== false})
  const isNewTaskEmpty = newTask.length == 0
  const isTaskListEmpty = tasks.length == 0

  return (
    <div className={styles.wrapper}>
      <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
        <textarea 
          name="newTask"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTaskChange}
        />
        
      <button
        type='submit'
        disabled={isNewTaskEmpty}
      >
        Criar <PlusCircle size={20} />
      </button>
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
          {isTaskListEmpty ? (
            <div className={styles.blankTaskList}>
              <Notepad size={70}/>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            <div>
              {tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    content={task.content}
                    isChecked={task.isChecked}
                    onDeleteTask={deleteTask}
                    updateCheckedTasks={updateCheckedTasks}
                  />
                )
              })}
            </div>
          )}
      </div>
    </div>
  )
}