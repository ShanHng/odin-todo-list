import './style.css'
import todoCardFactory from './todoCard.js'

const body = document.querySelector('body')

const date = Date.now()
const todos = [
  {
    title: 'Testing testing',
    desc: 'Hi semua this is just a testing',
    dueDate: date,
    priority: 'HIGH',
    isDone: true,
    creationDate: date
  },
  {
    title: 'Testing testing, Testing testing, Testing testing',
    desc: 'Hi semua this is just a testing',
    dueDate: date,
    priority: 'HIGH',
    isDone: true,
    creationDate: date
  },
  {
    title: 'Testing testing',
    desc: 'Hi semua this is just a testing',
    dueDate: date,
    priority: 'HIGH',
    isDone: true,
    creationDate: date
  }
]

body.append(todoCardFactory(todos[0]))
body.append(todoCardFactory(todos[1]))
body.append(todoCardFactory(todos[2]))
