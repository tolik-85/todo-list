const storage = {
  saveToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },

  getFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    return tasks
  },
}
