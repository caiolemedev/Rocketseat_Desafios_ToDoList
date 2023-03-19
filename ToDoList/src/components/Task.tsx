import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

export interface TaskProps {
  id: string;
  content: string;
  isChecked: boolean;
  onDeleteTask: (content: string) => void
  updateCheckedTasks: (content: string) => void
}

export function Task({content, isChecked, onDeleteTask, updateCheckedTasks}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleUpdateCheckedTasks() {
    updateCheckedTasks(content);
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