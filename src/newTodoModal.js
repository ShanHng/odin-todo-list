const newTodoModal = (() => {
  const backdrop = document.createElement('div')
  const form = document.createElement('form')
  const formTitle = document.createElement('div')
  const formFieldContainer = document.createElement('div')
  const titleLabel = document.createElement('label')
  const titleInput = document.createElement('input')
  const descLabel = document.createElement('label')
  const descInput = document.createElement('textarea')
  const priorityLabel = document.createElement('label')
  const priorityInput = document.createElement('select')
  const priorityValueLow = document.createElement('option')
  const priorityValueMed = document.createElement('option')
  const priorityValueHigh = document.createElement('option')
  const dueDateLabel = document.createElement('label')
  const dueDateInput = document.createElement('input')
  const buttonContainer = document.createElement('div')
  const submitBtn = document.createElement('button')
  const cancelBtn = document.createElement('button')

  backdrop.className = 'new-todo-form-backdrop hidden'
  form.id = 'new-todo-form'
  formTitle.className = 'new-todo-form-title'
  formFieldContainer.className = 'new-todo-form-fields'
  titleLabel.className = 'new-todo-title-label'
  titleInput.className = 'new-todo-title-input'
  descLabel.className = 'new-todo-desc-label'
  descInput.className = 'new-todo-desc-input'
  priorityLabel.className = 'new-todo-priority-label'
  priorityInput.className = 'new-todo-priority-input'
  dueDateLabel.className = 'new-todo-due-date-label'
  dueDateInput.className = 'new-todo-due-date-input'
  submitBtn.className = 'new-todo-form-submit-btn'
  cancelBtn.className = 'new-todo-form-cancel-btn'
  buttonContainer.className = 'new-todo-form-btn-container'

  formTitle.textContent = 'Add a new todo'
  titleLabel.for = titleInput
  titleLabel.textContent = 'Title'
  titleInput.type = 'text'
  titleInput.required = true
  descLabel.for = descInput
  descLabel.textContent = 'Description'
  descInput.defaultValue = '(No description available)'
  descInput.required = true
  priorityLabel.for = priorityInput
  priorityLabel.textContent = 'Priority'
  priorityInput.required = true
  priorityValueHigh.value = 'HIGH'
  priorityValueHigh.label = 'HIGH'
  priorityValueMed.value = 'MED'
  priorityValueMed.label = 'MED'
  priorityValueLow.value = 'LOW'
  priorityValueLow.label = 'LOW'
  dueDateLabel.for = descInput
  dueDateLabel.textContent = 'Due date'
  dueDateInput.type = 'date'
  dueDateInput.required = true
  submitBtn.type = 'submit'
  submitBtn.textContent = 'Submit'
  cancelBtn.type = 'button'
  cancelBtn.textContent = 'Cancel'

  function handleSubmitForm (e) {
    e.preventDefault()
    backdrop.classList.toggle('hidden')
    resetFields()
  }

  function handleClickOnCancel () {
    backdrop.classList.toggle('hidden')
    resetFields()
  }

  function resetFields() {
    titleInput.value = ''
    dueDateInput.value = ''
    priorityInput.value = 'LOW'
    descInput.value = descInput.defaultValue
  }

  form.addEventListener('submit', handleSubmitForm)
  cancelBtn.addEventListener('click', handleClickOnCancel)

  priorityInput.append(priorityValueLow, priorityValueMed, priorityValueHigh)
  buttonContainer.append(cancelBtn, submitBtn)
  formFieldContainer.append(
    titleLabel,
    titleInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    priorityInput,
    descLabel,
    descInput
  )

  form.append(formTitle, formFieldContainer, buttonContainer)

  backdrop.append(form)

  return backdrop
})()

export default newTodoModal
