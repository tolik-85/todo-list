function generateTask(taskText) {
  const elLi = document.createElement('li')
  const elCheckbox = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButton = document.createElement('button')

  elCheckbox.setAttribute('type', 'checkbox')

  elCheckbox.classList.add('checkbox')
  elSpan.classList.add('task-text')
  elButton.classList.add('deleteButton')

  elSpan.innerHTML = taskText
  elButton.innerHTML = 'Удалить'

  elLi.appendChild(elCheckbox)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButton)

  elButton.addEventListener('click', view.onClickDeleteTaskBtn)

  elCheckbox.addEventListener('change', view.onChangeElCheckBox)
  return elLi
}
function generateTaskForm() {
  const elContainer = document.createElement('div')
  const elH1 = document.createElement('h1')
  const elDiv = document.createElement('div')
  const elTaskInput = document.createElement('input')
  const elAddTaskButton = document.createElement('button')
  const elTaskList = document.createElement('ul')

  elContainer.classList.add('container')
  elTaskInput.setAttribute('type', 'text')
  elTaskInput.setAttribute('placeholder', 'Введите задачу')
  elTaskInput.setAttribute('id', 'taskInput')
  elTaskInput.setAttribute('autofocus', '')
  elAddTaskButton.setAttribute('id', 'addTaskButton')
  elTaskList.setAttribute('id', 'taskList')

  elAddTaskButton.innerHTML = 'Добавить задачу'
  elH1.innerHTML = 'Список задач'

  elTaskInput.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      view.onEnterKeyDown()
    }
  })
  elAddTaskButton.addEventListener('click', view.onclickAddTaskBtn)

  elDiv.appendChild(elTaskInput)
  elDiv.appendChild(elAddTaskButton)

  elContainer.appendChild(elH1)
  elContainer.appendChild(elDiv)
  elContainer.appendChild(elTaskList)

  return elContainer
}
function generateParagrphTextMsg(msg) {
  const elParagraph = document.createElement('p')
  elParagraph.classList.add('text-msg')
  elParagraph.innerHTML = msg

  return elParagraph
}
