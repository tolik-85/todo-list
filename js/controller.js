const controller = {
  handleLoadPage() {
    storage.saveToLocalStorage(model.tasks)
    const tasks = storage.getFromLocalStorage()
    view.renderTasks(tasks)
  },

  handleAddNewTask(task) {
    model.addTask(task)
    storage.saveToLocalStorage(model.tasks)
    const tasks = storage.getFromLocalStorage()
    view.renderTasks(tasks)
    if (model.hint) {
      view.renderHint(model.hint)
    }
  },
  handleChangeCheckbox(tasks) {
    model.changeTasks(tasks)
  },
  handleDeleteTask(task) {
    model.removeTask(task)
    storage.saveToLocalStorage(model.tasks)
    const locStorage = storage.getFromLocalStorage()
    view.renderTasks(locStorage)
    console.log(model.hint)

    view.renderHint(model.hint)
  },
}
