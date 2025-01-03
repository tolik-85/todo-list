const controller = {
  handleUpdateTasks() {
    const tasks = model.getTasks()

    return tasks
  },
  handleAddNewTask(task) {
    const tasks = model.getTasks()

    const isIncludedTask = model.checkIncludedTask(task)
    const stopWordCheck = model.checkStopWords(task)

    if (!isIncludedTask && !stopWordCheck) {
      model.setNewTask(task)
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
    model.deleteTask(task)
    view.renderTaskForm()
    view.renderTasks()
  },
}
