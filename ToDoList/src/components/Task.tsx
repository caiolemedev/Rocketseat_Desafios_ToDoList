

export function Task({content, onDeleteTask}) {

  function handleDeleteTask(){
    console.log('deletar')
    onDeleteTask(content)
  }

  return(
    <div>
      <p>{content}</p>
      <button onClick={handleDeleteTask} title='Delete Task'>
        delete
      </button>
    </div>
  )
}