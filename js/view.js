const view = {
  onLoaded() {
    const storage = view.getFromLocalStorage()

    if (storage) {
      view.renderTasks(storage)
      view.addEventListeners()
    } else {
      controller.handleLoadPage()
      view.addEventListeners()
    }
  },

  saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },

  getFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    return tasks
  },

  renderTasks(tasks) {
    let elTaskList = document.querySelector('#taskList')
    elTaskList.innerHTML = ''

    tasks.forEach(task => {
      const elTask = generateTask(task)
      elTaskList.appendChild(elTask)
    })
  },

  renderHint(msg) {
    const elDiv = document.querySelector('h1+div')
    const elHint = generateHint(msg)
    elDiv.appendChild(elHint)
  },

  onEnterKeyDown() {
    let elPar = document.querySelectorAll('.text-msg')
    elPar.forEach(el => {
      el.remove()
    })
    const elTaskInput = document.querySelector('#taskInput')
    controller.handleAddNewTask(elTaskInput.value)
    elTaskInput.value = ''

    elTaskInput.focus()
  },

  onChangeElCheckBox(e) {
    const elTaskName = e.target.parentNode.querySelector('span').innerHTML
    const elCheckbox = e.target.parentNode.querySelector('.checkbox')
    const elli = e.target.parentNode
    const tasks = view.getFromLocalStorage()

    tasks.forEach(task => {
      if (task.name === elTaskName) {
        task.checked = elCheckbox.checked
      }
    })

    if (elli.classList.contains('completed')) {
      elli.classList.remove('completed')
    } else {
      elli.classList.add('completed')
    }
    controller.handleChangeCheckbox(tasks)
    view.saveToLocalStorage(tasks)
  },

  onClickDeleteTaskBtn(e) {
    const checkBox = e.target.parentNode.querySelector('input')
    const task = e.target.parentNode.querySelector('.task-text').innerHTML
    let elPar = document.querySelectorAll('.text-msg')
    if (checkBox.checked) {
      controller.handleDeleteTask(task)
    } else {
      elPar.forEach(el => {
        el.remove()
      })
      view.renderHint('Чекни чекбокс')
    }
  },

  onclickAddTaskBtn() {
    view.onEnterKeyDown()
  },

  addEventListeners() {
    const elTaskInput = document.querySelector('#taskInput')

    const elAddTaskBtn = document.querySelector('#addTaskButton')
    elTaskInput.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') {
        view.onEnterKeyDown()
      }
    })
    elAddTaskBtn.addEventListener('click', view.onclickAddTaskBtn)
  },
}
document.addEventListener('DOMContentLoaded', view.onLoaded)
