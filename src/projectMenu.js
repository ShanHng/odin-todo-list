import projectViewController from './projectView'

const menuItemFactory = project => {
  const FA_MINUS = '<i class="fa-solid fa-minus-circle"></i>'

  const container = document.createElement('div')
  const titleDisplay = document.createElement('div')
  const removeButton = document.createElement('button')

  container.className = 'menu-item-container'
  titleDisplay.className = 'menu-item-title'
  removeButton.className = 'menu-item-btn'

  titleDisplay.textContent = project.title
  removeButton.innerHTML = FA_MINUS

  function handleClickOnRemoveBtn () {
    projectMenuController.toggleSettingsState()
  }
  removeButton.addEventListener('click', handleClickOnRemoveBtn)

  container.append(titleDisplay, removeButton)

  return {
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

  function handleClickOnSettings (e) {
    e.stopPropagation()
    toggleSettingsState()
  }

  function selectMenuItem (menuItem, projectToDisplay) {
    if (selectedItem) {
      selectedItem.toggleSelectedState()
    }
    selectedItem = menuItem
    menuItem.toggleSelectedState()
    projectViewController.displayProject(projectToDisplay)
  }

  settingsButton.addEventListener('click', handleClickOnSettings)

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
        const menuItem = menuItemFactory(p)
        menuItem.attachClickHandler(() => selectMenuItem(menuItem, p))
        menuItems.push(menuItem)
        if (p.isDefaultProject()) {
          defaultGroup.append(menuItem.getMenuItem())
        } else {
          customGroup.append(menuItem.getMenuItem())
        }
      }
    },
    toggleSettingsState
  }
})()

export default projectMenuController
