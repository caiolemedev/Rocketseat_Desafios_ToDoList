import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function Task({content, onDeleteTask, checkedOrNotChecked}) {

  function handleDeleteTask() {
    console.log('deletar')
    onDeleteTask(content)
  }

  function handleCountDoneTasks() {
    console.log('contar')
    checkedOrNotChecked()
  }

  console.log(document.getElementsByTagName('input'))


  return(
    <div>
      <input type="checkbox" id={content} />
      <label for={content}>{content}</label>
      <button onClick={handleDeleteTask} title='Delete Task'>
        <Trash size={20} />
      </button>
    </div>
  )
}