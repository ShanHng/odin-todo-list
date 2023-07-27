import projectCatalogue from "./model";
import projectMenuController from "./projectMenu";

const mainController = (() => {

    function createNewProject (projTitle) {
        projectCatalogue.addProject(projTitle)
    }

    function getProject (projTitle) {
        return projectCatalogue.getReadOnlyProject(projTitle)
    }

    function initialize() {
        const projects = projectCatalogue.getAllReadOnlyProject()
        projectMenuController.loadMenuItems(projects)
    } 
    
    function deleteProject(projTitle) {
        projectCatalogue.deleteProject(projTitle)
    }

    function deleteTodoFromProject(todoTitle, projTitle) {
        projectCatalogue.deleteTodoFromProject(todoTitle, projTitle)
    }

    function setTodoAsDone(boolean, todoTitle, projTitle) {
        projectCatalogue.setTodoAsDone(boolean, todoTitle, projTitle)
    }

    function addNewTodoToProject(title, desc, dueDate, priority, projTitle) {
        projectCatalogue.addTodoToProject(title, desc, dueDate, priority, projTitle)
    }
    return {
        initialize,
        createNewProject,
        getProject,
        deleteProject,
        deleteTodoFromProject,
        setTodoAsDone,
        addNewTodoToProject
    }
})();

export default mainController