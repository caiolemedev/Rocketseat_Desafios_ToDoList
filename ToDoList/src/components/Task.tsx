import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

interface TaskProps {
  content: string
  onDeleteTask: (content: string) => void
  updateCheckedTasks: (content: string) => void
}

export function Task({content, onDeleteTask, updateCheckedTasks}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleUpdateCheckedTasks() {
    updateCheckedTasks(content);
  }

  return(
    <div className={styles.task}>
      <input type="checkbox" id={content} onClick={handleUpdateCheckedTasks} />
      <label htmlFor={content}>{content}</label>
      <button onClick={handleDeleteTask} title='Delete Task'>
        <Trash size={20} />
      </button>
    </div>
  )
}