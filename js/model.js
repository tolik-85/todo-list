const model = {
  tasks: [],

  tasksCounter: 0,

  badWords: ['баклажан', 'помидор', 'огурец'],

  hint: '',

  calc(a, b) {
    return a + b
  },

  setTasks(tasks) {
    this.tasks = tasks
    this.calcTasksCounter()
  },

  calcTasksCounter() {
    this.tasksCounter = this.tasks.length
  },

  getHint() {
    return this.hint
  },

  setTaskStateByName(name, state) {
    this.tasks.forEach(task => {
      if (task.name === name) {
        task.checked = state
      }
    })
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
      this.hint = 'Не допускается пустой ввод, а также множество пробелов'
      return
    } else {
      const obj = { name: task, checked: false }
      this.tasks.unshift(obj)
      this.hint = ''
    }
    this.calcTasksCounter()
  },

  removeTask(taskName, state) {
    console.log('removeTask', taskName, state)

    if (this.isCompleteTask(state)) {
      this.tasks = this.tasks.filter(task => task.name !== taskName)
      this.hint = ''
      this.calcTasksCounter()
    }
  },
  isCompleteTask(state) {
    if (state) {
      return true
    } else {
      this.hint = 'Чекни чекбокс'
    }
  },
  isAlreadyExists(taskName) {
    for (const task of this.tasks) {
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
