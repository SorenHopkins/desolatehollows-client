const api = require('./api.js')
const ui = require('./ui.js')

const buttonClick = event => {
  console.log(event.target.id)
  if (event.target.id === 'batWings') {
    api.inventoryPost('Bat Wings', 'Wings of a Bat', 'Flappy')

    api.inventoryIndex()
      .then(ui.inventoryPostSuccess)
      .catch(ui.failure)
  }
}

const gameEvents = function () {
  $('.ingredientButton').on('click', buttonClick)
}

module.exports = {
  gameEvents
}
