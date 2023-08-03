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
          todo.setIsDone(boolean)
        }
      })
    }
  }
}

const projectCatalogue = (() => {
  let projects = []

  return {
    addProject (title, isDefault) {
      const newProject = projectFactory(title, isDefault)
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
          get isDefaultProject () {
            return p.isDefaultProject()
          }
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
    setUpDefault () {
      projectCatalogue.addProject('Tasks', true)
      projectCatalogue.addProject('Due this week', true)
      projectCatalogue.addProject('Example Project', false)

      const projects = projectCatalogue.getAllReadOnlyProject()
      const project = projects[0]

      projectCatalogue.addTodoToProject(
        'Example 1',
        'Bla bla bla',
        '2023/09/13',
        'HIGH',
        project.title
      )
      projectCatalogue.addTodoToProject(
        'Example 2',
        'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
        '16/10/2023',
        'MED',
        project.title
      ),
        projectCatalogue.addTodoToProject(
          'Example 3',
          'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
          '16/10/2024',
          'LOW',
          project.title
        )
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
    },
    toJSON() {
      return this.getAllReadOnlyProject()
    },
    load (arrayData) {
      for (let obj of arrayData) {
        const projTitle = obj['title']
        const projIsDefault = obj['isDefaultProject']
        this.addProject(projTitle, projIsDefault)
        const todos = obj['todos']
        for (let todo of todos) {
          const { title, desc, dueDate, priority, isDone } = todo
          this.addTodoToProject(title, desc, dueDate, priority, projTitle)
          if (isDone) {
            this.setTodoAsDone(true, title, projTitle)
          }
        }
      }
    }
  }
})()

export default projectCatalogue
