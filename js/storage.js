const storage = {
  saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },

  restoreTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    return tasks ?? []
  },
}
