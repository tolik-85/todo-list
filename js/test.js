const tasks = ['foo', 'bar']
const stopWords = ['баклажан', 'помидор', 'огурец', 'foo', 'bar']

function check() {
  for (word of stopWords) {
    if (tasks.includes(word)) {
      return console.log(word)
    }
  }
}
// check()
