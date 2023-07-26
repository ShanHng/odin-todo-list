import mainController from "./mainController"
import projectViewController from "./projectView"

const todoCardFactory = (todo, projTitle) => {
  const FA_TRASH = '<i class="fa-solid fa-trash"> </i>'
  
  const container = document.createElement('div')
  const header = document.createElement('div')
  const footer = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const statusDisplay = document.createElement('input')
  const descDisplay = document.createElement('div')
  const dueDateDisplay = document.createElement('div')
  const priorityDisplay = document.createElement('div')
  const removeButton = document.createElement('button')

  container.className = 'todo-card-container'
  header.className = 'todo-card-header'
  footer.className = 'todo-card-footer'
  titleDisplay.className = 'todo-card-title'
  statusDisplay.className = 'todo-card-status'
  descDisplay.className = 'todo-card-desc'
  dueDateDisplay.className = 'todo-card-due-date'
  priorityDisplay.className = 'todo-card-priority'
  removeButton.className = 'todo-card-remove-btn'

  titleDisplay.textContent = todo.title
  statusDisplay.setAttribute('type', 'checkbox')
  statusDisplay.setAttribute('checked', todo.isDone)
  descDisplay.textContent = todo.desc
  dueDateDisplay.textContent = `Due date: ${todo.dueDate}`
  priorityDisplay.textContent = todo.priority
  removeButton.innerHTML = FA_TRASH

  function handleClickOnContainer () {
    descDisplay.classList.toggle('shown')
  }

  function handleClickOnRemove (event) {
    event.stopPropagation()
    mainController.deleteTodoFromProject(todo.title, projTitle)
    projectViewController.removeChildFromTodoCardContainer(container)
  }

  function handleClickOnCheckbox (event) {
    event.stopPropagation()
  }

  statusDisplay.addEventListener('click', handleClickOnCheckbox)

  container.addEventListener('click', handleClickOnContainer)

  removeButton.addEventListener('click', handleClickOnRemove)

  header.append(titleDisplay, priorityDisplay)
  footer.append(statusDisplay, dueDateDisplay, removeButton)
  container.append(header, descDisplay, footer)

  return container
}

export default todoCardFactory
