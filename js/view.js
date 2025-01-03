const view = {
  onLoaded() {
    view.renderTaskForm()
    view.renderTasks()
  },
  renderTasks() {
    let elTaskList = document.querySelector('#taskList')
    elTaskList.innerHTML = ''
    const tasks = controller.handleUpdateTasks()
    tasks.forEach(el => {
      const task = generateTask(el)

      elTaskList.appendChild(task)
    })
  },
  renderParagraphMsg(msg) {
    const elH1 = document.querySelector('h1')

    const elParagraph = generateParagrphTextMsg(msg)
    elH1.after(elParagraph)
  },

  renderTaskForm() {
    let elBody = document.querySelector('body')
    elBody.innerHTML = ''
    const elTaskForm = generateTaskForm()
    elBody.appendChild(elTaskForm)
    document.querySelector('#taskInput').focus()
  },

  onEnterKeyDown() {
    const elTaskInput = document.querySelector('#taskInput')
    controller.handleAddNewTask(elTaskInput.value)
    elTaskInput.focus()
    elTaskInput.value = ''
  },
  onChangeElCheckBox(e) {
    const elDeleteBtn = e.target.parentNode.querySelector('.deleteButton')
    if (e.target.checked) {
      elDeleteBtn.style.backgroundColor = '#35dc6b'
    } else {
      elDeleteBtn.style.backgroundColor = '#dc3545'
    }
  },
  onClickDeleteTaskBtn(e) {
    const deletedTask = e.target.parentNode.querySelector('span').innerHTML
    const checkBox = e.target.parentNode.querySelector('input')
    if (checkBox.checked) {
      controller.handleDeleteTask(deletedTask)
    } else {
      view.renderTaskForm()
      view.renderTasks()
      view.renderParagraphMsg('Чекни чекбокс')
    }
  },
  onclickAddTaskBtn() {
    view.onEnterKeyDown()
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded)
