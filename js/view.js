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
    const elDiv = document.querySelector('h1+div')
    const elHint = generateHint(hint)
    elDiv.appendChild(elHint)
  },

  onLoaded() {
    view.addEventListeners()
    controller.handleLoadPage()
  },

  onEnterKeyDown() {
    // const listParagraphs = document.querySelectorAll('.text-msg')
    // listParagraphs.forEach(elParagraph => {
    //   elParagraph.remove()
    // })
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
    const task = e.target.parentNode.querySelector('.task-text').innerHTML
    // let elPar = document.querySelectorAll('.text-msg')
    // if (checkBox.checked) {
    controller.handleDeleteTask(task)
    //   elPar.forEach(el => {
    //     el.remove()
    //   })
    // } else {
    //   elPar.forEach(el => {
    //     el.remove()
    //   })
    //   view.renderHint('Чекни чекбокс')
    // }
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
