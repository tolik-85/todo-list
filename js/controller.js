const controller = {
  handleLoadPage() {
    view.saveToLocalStorage(model.tasks)
    const tasks = view.getFromLocalStorage()
    view.renderTasks(tasks)
  },

  handleAddNewTask(task) {
    console.log('handleAddNewTask(task)', task)

    model.addTask(task)
    view.saveToLocalStorage(model.tasks)
    const tasks = view.getFromLocalStorage()
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
    view.saveToLocalStorage(model.tasks)
    const storage = view.getFromLocalStorage()
    view.renderTasks(storage)
  },
}
