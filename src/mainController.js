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

    return {
        initialize,
        createNewProject,
        getProject,
        deleteProject
    }
})();

export default mainController