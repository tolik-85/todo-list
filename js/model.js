const model = {
  tasks: ['foo', 'bar'],
  badWords: ['баклажан', 'помидор', 'огурец'],

  hint: '',

  addTask(task) {
    if (this.isAlreadyExists(task)) {
      this.hint = `${task} уже есть в списке`
      return
    }
    if (!this.isGoodTask(task)) {
      this.hint = `${task} - не допускается в этом ToDo листе`
      return
    }
    this.tasks.unshift(task)
  },

  removeTask(task) {
    const taskIndex = this.tasks.indexOf(task)
    this.tasks.splice(taskIndex, 1)
  },

  isAlreadyExists(task) {
    return this.tasks.includes(task)
  },

  isGoodTask(task) {
    for (const badWord of this.badWords) {
      if (task.includes(badWord)) {
        return false
      }
    }
    return true
  },
}

model.isGoodTask('добрый вечер всем!')

// модель полностью сама по себе.
// во view вызовы контроллера происходят в ответ на события
