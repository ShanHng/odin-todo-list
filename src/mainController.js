import projectCatalogue from './model'
import newTodoModal from './newTodoModal'
import projectMenuController from './projectMenu'
import projectViewController from './projectView'

const mainController = (() => {
  function createNewProject (projTitle) {
    projectCatalogue.addProject(projTitle)
  }

  function getProject (projTitle) {
    return projectCatalogue.getReadOnlyProject(projTitle)
  }

  function initialize () {
    const projects = projectCatalogue.getAllReadOnlyProject()
    projectMenuController.loadMenuItems(projects)
  }

  function run () {
    const body = document.querySelector('body')

    body.append(
      projectMenuController.getProjectMenu(),
      projectViewController.getProjectView(),
      newTodoModal
    )
    projectCatalogue.setUpDefault()
    initialize()
  }

  function deleteProject (projTitle) {
    projectCatalogue.deleteProject(projTitle)
  }

  function deleteTodoFromProject (todoTitle, projTitle) {
    projectCatalogue.deleteTodoFromProject(todoTitle, projTitle)
  }

  function setTodoAsDone (boolean, todoTitle, projTitle) {
    projectCatalogue.setTodoAsDone(boolean, todoTitle, projTitle)
  }

  function addNewTodoToProject (title, desc, dueDate, priority, projTitle) {
    projectCatalogue.addTodoToProject(title, desc, dueDate, priority, projTitle)
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
