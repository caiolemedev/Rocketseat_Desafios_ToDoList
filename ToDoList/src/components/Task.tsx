import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Task({content, onDeleteTask, checkedOrNotChecked}) {

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCountDoneTasks() {
    checkedOrNotChecked()
  }

  return(
    <div>
      <input type="checkbox" id={content} onClick={handleCountDoneTasks} />
      <label for={content}>{content}</label>
      <button onClick={handleDeleteTask} title='Delete Task'>
        <Trash size={20} />
      </button>
    </div>
  )
}