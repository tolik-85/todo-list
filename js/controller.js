const controller = {
  handleLoadPage() {
    const tasks = storage.restoreTasks()
    model.setTasks(tasks)
    view.renderTasks(tasks)
  },

  handleAddTask(task) {
    model.addTask(task)
    storage.saveTasks(model.tasks)
    view.renderTasks(model.tasks)
    view.renderHint(model.hint)
  },

  handleCompleteTask(name, state) {
    model.setTaskStateByName(name, state)
    storage.saveTasks(model.tasks)
    view.renderTasks(model.tasks)
    view.renderHint(model.hint)
  },

  handleDeleteTask(task, state) {
    model.removeTask(task, state)
    storage.saveTasks(model.tasks)
    view.renderTasks(model.tasks)
    view.renderHint(model.hint)
  },
}
