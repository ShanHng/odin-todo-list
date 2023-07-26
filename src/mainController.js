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
    
    return {
        initialize,
        createNewProject,
        getProject
    }
})();

export default mainController