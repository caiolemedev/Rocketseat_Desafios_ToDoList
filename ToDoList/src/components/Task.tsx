import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

export interface TaskProps {
  id: number;
  content: string;
  isChecked: boolean;
  onDeleteTask: (id: number) => void
  updateCheckedTasks: (id: number) => void
}

export function Task({id, content, isChecked, onDeleteTask, updateCheckedTasks}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleUpdateCheckedTasks() {
    updateCheckedTasks(id);
  }

  return(
    <div className={styles.task}>
      <button 
        className={isChecked ? styles.checkboxChecked : styles.checkbox}
        onClick={handleUpdateCheckedTasks}
        title='Checkbox'
      >
        {isChecked ? <Check size={24} /> : null}
      </button>
      <p
        className={isChecked ? styles.taskTextChecked : styles.taskText}
      >
          {content}
      </p>
      <button
        className={styles.delete}
        onClick={handleDeleteTask} title='Delete Task'
      >
        <Trash size={20} />
      </button>
    </div>
  )
}