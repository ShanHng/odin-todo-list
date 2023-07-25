import todoCardFactory from './todoCard'

const projectViewController = (() => {
  const placeholder = document.createElement('div')
  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const todoCardContainer = document.createElement('div')

  let todoCards = []

  container.className = 'proj-view-container'
  placeholder.className = 'proj-view-placeholder visible'
  titleDisplay.className = 'proj-view-title'
  todoCardContainer.className = 'proj-view-card-container'

  placeholder.textContent = "Click on a project to view its todos!"

  function setPlaceholder (isVisible) {
    placeholder.classList.toggle('hidden', !isVisible)
    titleDisplay.classList.toggle('hidden', isVisible)
    todoCardContainer.classList.toggle('hidden', isVisible)
  }

  container.append(placeholder, titleDisplay, todoCardContainer)

  return {
    getProjectView () {
      return container
    },
    displayProject (project) {
      setPlaceholder(false)
      titleDisplay.textContent = project.title
      for (let todo of project.todos) {
        const todoCard = todoCardFactory(todo)
        todoCards.push(todoCard)
        todoCardContainer.append(todoCard)
      }
    }
  }
})()

export default projectViewController
