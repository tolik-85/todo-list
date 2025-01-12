const view = {
  renderTasks(tasks) {
    const elTaskList = document.querySelector('#taskList')
    elTaskList.innerHTML = ''
    tasks.forEach(task => {
      const elTask = generateTask(task)
      elTaskList.appendChild(elTask)
    })
  },

  renderHint(hint) {
    const elHintMsg = document.querySelector('.text-msg')
    if (elHintMsg) {
      elHintMsg.remove()
    }

    const elInput = document.querySelector('#taskInput')
    const elHint = generateHint(hint)
    elInput.after(elHint)
  },

  onLoaded() {
    view.addEventListeners()
    controller.handleLoadPage()
  },

  onEnterKeyDown() {
    const elTaskInput = document.querySelector('#taskInput')
    controller.handleAddTask(elTaskInput.value)
    elTaskInput.value = ''
    elTaskInput.focus()
  },

  onChangeCheckbox(e) {
    const elLi = e.target.parentNode
    const isChecked = elLi.querySelector('.checkbox').checked
    const taskName = elLi.querySelector('span').textContent
    controller.handleCompleteTask(taskName, isChecked)
  },

  onClickDeleteTaskBtn(e) {
    const checkBox = e.target.parentNode.querySelector('input')
    const state = checkBox.checked
    const task = e.target.parentNode.querySelector('.task-text').innerHTML
    controller.handleDeleteTask(task, state)
  },

  onClickAddTaskBtn() {
    view.onEnterKeyDown()
  },

  onKeyUpInputTask(e) {
    if (e.key === 'Enter') {
      view.onEnterKeyDown()
    }
  },

  addEventListeners() {
    const elTaskInput = document.querySelector('#taskInput')
    const elAddTaskBtn = document.querySelector('#addTaskButton')

    elTaskInput.addEventListener('keyup', this.onKeyUpInputTask)
    elAddTaskBtn.addEventListener('click', this.onClickAddTaskBtn)
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded)
