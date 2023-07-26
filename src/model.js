const todoFactory = (title, desc, dueDate, priority) => {
  let isDone = false
  const creationDate = Date.now()

  return {
    get title () {
      return title
    },
    get desc () {
      return desc
    },
    get dueDate () {
      return dueDate
    },
    get priority () {
      return priority
    },
    get isDone () {
      return isDone
    },
    setIsDone: function (boolean) {
      isDone = boolean
    }
  }
}

const projectFactory = (title, isDefault) => {
  let todos = []

  return {
    get title () {
      return title
    },
    addTodo (title, desc, dueDate, priority) {
      todos.push(todoFactory(title, desc, dueDate, priority))
    },
    deleteTodo (title) {
      todos = todos.filter(todo => todo.title !== title)
    },
    getNoOfProjects () {
      return todos.length()
    },
    getAllReadOnlyTodos () {
      const result = []
      for (let todo of todos) {
        const { title, desc, dueDate, priority, isDone, creationDate } = todo
        const readOnlyTodo = {
          title,
          desc,
          dueDate,
          priority,
          isDone,
          creationDate
        }
        result.push(readOnlyTodo)
      }
      return result
    },
    isDefaultProject () {
      return isDefault
    },
    setTodoAsDone (boolean, title) {
      todos.forEach(todo => {
        if (todo.title === title) {
          console.log(todo.title)
          console.log(title)
          todo.setIsDone(boolean)
        }
      })
    }
  }
}

const projectCatalogue = (() => {
  let projects = []

  // initialize default projects
  const tasksProject = projectFactory('Tasks', true)
  const dueThisWeekProject = projectFactory('Due this week', true)
  projects.push(tasksProject, dueThisWeekProject)

  return {
    addProject (title) {
      const newProject = projectFactory(title, false)
      projects.push(newProject)
    },
    addTodoToProject (title, desc, dueDate, priority, projTitle) {
      const project = projects.filter(proj => proj.title === projTitle)[0]
      project.addTodo(title, desc, dueDate, priority)
    },
    deleteProject (title) {
      projects = projects.filter(project => project.title !== title)
    },
    deleteTodoFromProject (title, projTitle) {
      projects.forEach(proj => {
        if (proj.title === projTitle) proj.deleteTodo(title)
      })
    },
    getAllReadOnlyProject () {
      const result = []
      for (let p of projects) {
        const readOnlyProject = {
          get title () {
            return p.title
          },
          get todos () {
            return p.getAllReadOnlyTodos()
          },
          isDefaultProject: p.isDefaultProject
        }
        result.push(readOnlyProject)
      }
      return result
    },
    setTodoAsDone (boolean, title, projTitle) {
      projects.forEach(proj => {
        if (proj.title === projTitle) {
          proj.setTodoAsDone(boolean, title)
        }
      })
    },
    getReadOnlyProject (projTitle) {
      const project = projects.filter(proj => proj.title === projTitle)[0]
      return {
        get title () {
          return project.title
        },
        get todos () {
          return project.getAllReadOnlyTodos()
        },
        isDefaultProject: project.isDefaultProject
      }
    }
  }
})()

export default projectCatalogue
