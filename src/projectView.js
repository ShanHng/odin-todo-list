import todoCardFactory from './todoCard'

const projectViewController = (() => {
  const PLACEHOLDER_MESSAGE_EMPTY = 'No todos to see here'
  const PLACEHOLDER_MESSAGE_PROMPT_ACTION =
    'Click on a project to view its todos!'
  const FA_PLUS_CIRCLE = '<i class="fa-solid fa-plus-circle"></i>'

  const placeholder = document.createElement('div')
  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const todoCardContainer = document.createElement('div')
  const addTodoButton = document.createElement('button')

  let todoCards = []

  container.className = 'proj-view-container'
  placeholder.className = 'proj-view-placeholder visible'
  titleDisplay.className = 'proj-view-title'
  todoCardContainer.className = 'proj-view-card-container'
  addTodoButton.className = 'proj-view-add-todo-btn'

  placeholder.textContent = PLACEHOLDER_MESSAGE_PROMPT_ACTION
  addTodoButton.innerHTML = FA_PLUS_CIRCLE;

  function displayPlaceholder (isVisible) {
    if (isVisible) {
      todoCardContainer.innerHTML = ''
    }
    placeholder.classList.toggle('hidden', !isVisible)
    titleDisplay.classList.toggle('hidden', isVisible)
    todoCardContainer.classList.toggle('hidden', isVisible)
  }

  container.append(placeholder, titleDisplay, todoCardContainer, addTodoButton)

  return {
    getProjectView () {
      return container
    },
    displayProject (project) {
      // cannot use !project.todos as a check because an empty array in javascript is truthy!
      if (project.todos.length === 0) {
        displayPlaceholder(true)

        placeholder.textContent = PLACEHOLDER_MESSAGE_EMPTY
        return
      }

      displayPlaceholder(false)
      titleDisplay.textContent = project.title
      for (let todo of project.todos) {
        const todoCard = todoCardFactory(todo, project.title)
        todoCards.push(todoCard)
        todoCardContainer.append(todoCard)
      }
    },
    removeChildFromTodoCardContainer (childNode) {
      todoCardContainer.removeChild(childNode)
    }
  }
})()

export default projectViewController
