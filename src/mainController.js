import projectCatalogue from './model'
import newTodoModal from './newTodoModal'
import projectMenuController from './projectMenu'
import projectViewController from './projectView'
import storage from './storage'

const mainController = (() => {
  function createNewProject (projTitle) {
    projectCatalogue.addProject(projTitle, false)
    saveState()
  }

  function getProject (projTitle) {
    return projectCatalogue.getReadOnlyProject(projTitle)
  }

  function run () {
    const body = document.querySelector('body')

    body.append(
      projectMenuController.getProjectMenu(),
      projectViewController.getProjectView(),
      newTodoModal
    )
    loadState()
    const projects = projectCatalogue.getAllReadOnlyProject()
    projectMenuController.loadMenuItems(projects)
  }

  function deleteProject (projTitle) {
    projectCatalogue.deleteProject(projTitle)
    saveState()
  }

  function deleteTodoFromProject (todoTitle, projTitle) {
    projectCatalogue.deleteTodoFromProject(todoTitle, projTitle)
    saveState()
  }

  function setTodoAsDone (boolean, todoTitle, projTitle) {
    projectCatalogue.setTodoAsDone(boolean, todoTitle, projTitle)
    saveState()
  }

  function addNewTodoToProject (title, desc, dueDate, priority, projTitle) {
    projectCatalogue.addTodoToProject(title, desc, dueDate, priority, projTitle)
    saveState()
  }

  function saveState () {
    console.log(JSON.stringify(projectCatalogue))
    storage.saveData(projectCatalogue)
  }

  function loadState () {
    if (!storage.isPageVisited()) {
      projectCatalogue.setUpDefault()
    } else {
      projectCatalogue.load(storage.getData())
    }
  }

  return {
    run,
    createNewProject,
    getProject,
    deleteProject,
    deleteTodoFromProject,
    setTodoAsDone,
    addNewTodoToProject
  }
})()

export default mainController
