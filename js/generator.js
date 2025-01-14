function generateTask(task) {
  const elLi = document.createElement('li')
  const elCheckbox = document.createElement('input')
  const elSpan = document.createElement('span')
  const elButton = document.createElement('button')

  elCheckbox.setAttribute('type', 'checkbox')

  elCheckbox.classList.add('checkbox')
  elSpan.classList.add('task-text')
  elButton.classList.add('deleteButton')
  elSpan.innerHTML = task.name
  elButton.innerHTML = 'Удалить'

  if (task.checked) {
    elCheckbox.setAttribute('checked', '')
    elLi.classList.add('completed')
  }

  elLi.appendChild(elCheckbox)
  elLi.appendChild(elSpan)
  elLi.appendChild(elButton)

  elButton.addEventListener('click', view.onClickDeleteTaskBtn)
  elCheckbox.addEventListener('change', view.onChangeCheckbox)

  return elLi
}
