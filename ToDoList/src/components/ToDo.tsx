import { ChangeEvent, FormEvent, useState } from 'react'
import { Notepad, PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task'
import styles from './ToDo.module.css'

export interface NewTaskProps {
  id: number;
  content: string;
  isChecked: boolean;
}

export function ToDo() {

  const [tasks, setTasks] = useState<NewTaskProps[]>([])

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
    const newTaskArray = [...tasks, {id: uuidv4(), content: newTask, isChecked: false}]

    setTasks(sortByChecked(newTaskArray))
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function deleteTask(taskToDelete: number){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(sortByChecked(tasksWithoutDeletedOne))
  }

  function updateCheckedTasks(taskToCheck: number){
    const toUpdate: NewTaskProps[] = tasks.map(task => {
      if(task.id === taskToCheck)
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
          autoFocus
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
                    id={task.id}
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