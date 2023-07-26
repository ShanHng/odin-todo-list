import mainController from './mainController'
import projectViewController from './projectView'

const menuItemFactory = (project, isEditable) => {
  const FA_MINUS = '<i class="fa-solid fa-minus-circle"></i>'

  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const removeButton = document.createElement('button')
  const newProjectForm = document.createElement('form')
  const titleInput = document.createElement('input')
  const hiddenSubmitElement = document.createElement('input')

  function handleClickOnRemoveBtn () {
    projectMenuController.toggleSettingsState()
  }

  function initializeEditableMenuItem () {
    // hide title display and show the input field
    titleDisplay.classList.add('hidden')
    newProjectForm.classList.remove('hidden')
  }

  function handleClickOnForm (e) {
    e.stopPropagation()
  }

  function handleSubmitNewProjectForm (event) {
    event.preventDefault()
    titleDisplay.classList.remove('hidden')
    newProjectForm.classList.add('hidden')
    if (titleInput.value) {
      titleDisplay.textContent = titleInput.value
      mainController.createNewProject(titleInput.value)
    } else {
      projectMenuController.undoAddedMenuItem()
    }
    projectMenuController.toggleAddBtnState()
  }

  container.className = 'menu-item-container'
  newProjectForm.className = 'menu-item-new-proj-form hidden'
  titleInput.className = 'menu-item-title-input'
  hiddenSubmitElement.className = 'menu-item-submit-element hidden'
  removeButton.className = 'menu-item-btn'

  removeButton.innerHTML = FA_MINUS
  titleInput.type = 'text'
  hiddenSubmitElement.type = 'submit'
  removeButton.addEventListener('click', handleClickOnRemoveBtn)
  // to prevent triggering action of selecting the menu item
  newProjectForm.addEventListener('click', handleClickOnForm)
  newProjectForm.addEventListener('submit', handleSubmitNewProjectForm)

  if (isEditable) {
    initializeEditableMenuItem()
  } else {
    titleDisplay.textContent = project.title
  }

  newProjectForm.append(titleInput, hiddenSubmitElement)
  container.append(titleDisplay, newProjectForm, removeButton)

  return {
    get title () {
      return titleDisplay.textContent
    },
    getMenuItem () {
      return container
    },
    attachClickHandler (handler) {
      container.addEventListener('click', handler)
    },
    toggleButtonVisibility () {
      removeButton.classList.toggle('shown')
    },
    toggleSelectedState () {
      container.classList.toggle('selected')
    }
  }
}

const projectMenuController = (() => {
  const FA_PLUS = '<i class="fa-solid fa-plus"></i>'
  const FA_COG = '<i class="fa-solid fa-cog"></i>'

  const icon = document.createElement('div')
  const sidebar = document.createElement('div')
  const defaultGroup = document.createElement('div')
  const defaultGroupTitle = document.createElement('div')
  const customGroup = document.createElement('div')
  const customGroupHeader = document.createElement('div')
  const addProjectButton = document.createElement('button')
  const settingsButton = document.createElement('button')

  let menuItems = []
  let selectedItem = ''
  let newMenuItem = ''

  icon.className = 'site-icon'
  sidebar.className = 'menu-container'
  defaultGroup.className = 'menu-default-group'
  defaultGroupTitle.className = 'menu-default-group-title'
  customGroup.className = 'menu-custom-group'
  customGroupHeader.className = 'menu-custom-group-header'
  settingsButton.className = 'menu-custom-group-btn'
  addProjectButton.className = 'menu-custom-group-btn'

  icon.textContent = 'Tada!'
  defaultGroupTitle.textContent = 'Default'
  customGroupHeader.textContent = 'Your projects'
  settingsButton.innerHTML = FA_COG
  settingsButton.title = 'Manage your projects'
  addProjectButton.innerHTML = FA_PLUS
  addProjectButton.title = 'Add a new project'

  function toggleSettingsState () {
    settingsButton.classList.toggle('active')
    for (let menuItem of menuItems) {
      menuItem.toggleButtonVisibility()
    }
  }

  function toggleAddBtnState () {
    addProjectButton.classList.toggle('active')
  }

  function handleClickOnSettings (e) {
    e.stopPropagation()
    toggleSettingsState()
  }

  function handleClickOnAddProject (e) {
    const isBtnActive = addProjectButton.classList.contains('active')
    if (isBtnActive && !newMenuItem.title) {
      undoAddedMenuItem()
    } else if (!isBtnActive) {
      e.stopPropagation()
      newMenuItem = menuItemFactory(null, true)
      newMenuItem.attachClickHandler(event =>
        handleClickOnContainer(event, newMenuItem)
      )
      menuItems.push(newMenuItem)
      customGroup.append(newMenuItem.getMenuItem())
    }
    toggleAddBtnState()
  }

  function undoAddedMenuItem () {
    customGroup.removeChild(newMenuItem.getMenuItem())
    menuItems.pop()
  }

  function handleClickOnContainer (event, menuItem) {
    if (
      addProjectButton.classList.contains('active') &&
      event.target === newMenuItem.getMenuItem()
    ) {
      return
    }
    selectMenuItem(menuItem)
  }

  function selectMenuItem (menuItem) {
    if (selectedItem) {
      selectedItem.toggleSelectedState()
    }
    selectedItem = menuItem
    menuItem.toggleSelectedState()

    const selectedProject = mainController.getProject(menuItem.title)
    projectViewController.displayProject(selectedProject)
  }

  settingsButton.addEventListener('click', handleClickOnSettings)
  addProjectButton.addEventListener('click', handleClickOnAddProject)

  customGroupHeader.append(settingsButton, addProjectButton)
  sidebar.append(
    icon,
    defaultGroupTitle,
    defaultGroup,
    customGroupHeader,
    customGroup
  )
  return {
    getProjectMenu () {
      return sidebar
    },
    loadMenuItems (projects) {
      menuItems = []
      for (let p of projects) {
        const menuItem = menuItemFactory(p, false)
        menuItem.attachClickHandler(event =>
          handleClickOnContainer(event, menuItem)
        )
        menuItems.push(menuItem)
        if (p.isDefaultProject()) {
          defaultGroup.append(menuItem.getMenuItem())
        } else {
          customGroup.append(menuItem.getMenuItem())
        }
      }
    },
    toggleSettingsState,
    toggleAddBtnState,
    undoAddedMenuItem
  }
})()

export default projectMenuController
