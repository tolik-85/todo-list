const controller = {
  handleUpdateTasks() {
    const tasks = model.getTasks()
    view.renderTasks(tasks)
  },

  handleAddNewTask(task) {
    const tasks = model.getTasks()

    const isIncludedTask = model.isAlreadyExists(task)
    const stopWordCheck = model.isGoodTask(task)

    if (!isIncludedTask && !stopWordCheck) {
      model.addTask(task)
      view.renderTaskForm()
      view.renderTasks()
    } else if (isIncludedTask) {
      view.renderTaskForm()
      view.renderTasks()
      view.renderParagraphMsg(isIncludedTask)
    } else if (stopWordCheck) {
      view.renderTaskForm()
      view.renderTasks()
      view.renderParagraphMsg(stopWordCheck)
    }
  },
  handleDeleteTask(task) {
    model.removeTask(task)
    view.renderTaskForm()
    view.renderTasks()
  },
}
