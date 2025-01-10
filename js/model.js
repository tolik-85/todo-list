const model = {
  tasks: [
    {
      name: 'bar',
      checked: true,
    },
    {
      name: 'foo',
      checked: false,
    },
  ],

  badWords: ['баклажан', 'помидор', 'огурец'],

  hint: '',

  getHint() {
    return model.hint
  },

  changeTasks(tasks) {
    model.tasks = tasks
  },

  addTask(task) {
    if (this.isAlreadyExists(task)) {
      this.hint = `${task} уже есть в списке`
      return
    }
    if (!this.isGoodTask(task)) {
      this.hint = `${task} - не допускается в этом ToDo листе`
      return
    }
    if (this.isOnlySpace(task)) {
      model.hint = 'Не допускается пустой ввод, а также множество пробелов'
      return
    } else {
      const obj = { name: task, checked: false }
      this.tasks.unshift(obj)
      model.hint = ''
    }
    console.log(model.tasks)
  },

  removeTask(taskName) {
    model.tasks = model.tasks.filter(task => task.name !== taskName)

    model.hint = ''
  },

  isAlreadyExists(taskName) {
    for (const task of model.tasks) {
      if (task.name === taskName) {
        return true
      }
    }
  },

  isGoodTask(task) {
    for (const badWord of this.badWords) {
      if (task.includes(badWord)) {
        return false
      }
    }
    return true
  },
  isOnlySpace(task) {
    task = task.trim()
    if (task === '') {
      // model.hint = 'Не допускается пустой ввод, а также множество пробелов'
      return true
    }
  },
}

// model.isGoodTask('добрый вечер всем!')

// модель полностью сама по себе.
// во view вызовы контроллера происходят в ответ на события
