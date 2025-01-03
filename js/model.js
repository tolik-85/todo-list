const model = {
  tasks: ['foo', 'bar'],
  stopWords: ['баклажан', 'помидор', 'огурец'],

  getTasks() {
    return this.tasks
  },
  setNewTask(newTask) {
    this.tasks.unshift(newTask)
  },
  deleteTask(task) {
    const tasks = model.getTasks()
    const taskIndex = tasks.indexOf(task)
    tasks.splice(taskIndex, 1)
  },
  checkIncludedTask(task) {
    const tasks = model.getTasks()
    if (tasks.includes(task)) {
      return `${task} уже есть в списке`
    } else {
      return false
    }
  },
  checkStopWords(stopWord) {
    const stopWords = model.stopWords
    stopWord = stopWord.toLowerCase()
    const tasksR = stopWord.split(' ')

    for (word of stopWords) {
      if (tasksR.includes(word)) {
        return `${word} - Не допускается в этом ToDo листе`
      }
    }
  },
}
