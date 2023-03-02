import { Trash } from 'phosphor-react'
import { useState } from 'react'

interface TaskProps {
  content: string
  onDeleteTask: (content: string) => void
  checkedOrNotChecked: () => void
}

export function Task({content, onDeleteTask, checkedOrNotChecked}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCountDoneTasks() {
    checkedOrNotChecked()
  }


  return(
    <div>
      <input type="checkbox" id={content} onClick={handleCountDoneTasks} />
      <label htmlFor={content}>{content}</label>
      <button onClick={handleDeleteTask} title='Delete Task'>
        <Trash size={20} />
      </button>
    </div>
  )
}