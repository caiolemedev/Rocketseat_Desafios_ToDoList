import { Trash } from 'phosphor-react'
import { useState } from 'react'

interface TaskProps {
  content: string
  onDeleteTask: (content: string) => void
  checkedOrNotChecked: () => void
  taskInputStatus: (content: string, checked: boolean) => void
  checked: boolean
}

export function Task({content, onDeleteTask, checkedOrNotChecked, taskInputStatus, checked}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCountDoneTasks() {
    checkedOrNotChecked();
    checked == false ? checked=true : checked=false;
    taskInputStatus(content, checked)
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