const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const buttonClick = event => {
  console.log(event.target.id)
  if (event.target.id === 'batWings') {
    api.inventoryPost('Bat Wings', 'Wings of a Bat', 'Flappy')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'honeyDrop') {
    api.inventoryPost('Drop of Honey', 'A single drop of honey', 'Sweet')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'eyeOfNewt') {
    api.inventoryPost('Eye of Newt', 'A single eye extracted from a newt', 'Squish')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'frogLegs') {
    api.inventoryPost('Frog Legs', 'How did you even get these?', 'Hop')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'nightshade') {
    api.inventoryPost('Nightshade', 'A few petals from a dangerous flower', 'Dark')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'snakeTongues') {
    api.inventoryPost('Snake Tongues', 'A little bundle of snake tongues', 'Charm')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  } else if (event.target.id === 'holyWater') {
    api.inventoryPost('Holy Water', 'Consecrated water, straight from church', 'Bright')
      .then(
        api.inventoryIndex()
          .then(ui.inventoryPostSuccess)
          .catch(ui.failure)
      )
      .catch(ui.failure)
  }
}

const brewPotion = event => {
  store.currentPotion = ''
  api.inventoryIndex()
    .then(data => {
      store.currentInventory = data.inventories
      store.currentInventory.forEach(function (item) {
        console.log(item)
        store.currentPotion = store.currentPotion + item.adjective
        api.deleteIngredient(item.id)
          .then()
          .catch(ui.failure)
      })
      ui.inventoryBrewSuccess()
    })
    .catch(console.error)
}

const gameEvents = function () {
  $('.ingredientButton').on('click', buttonClick)
  $('.brewButton').on('click', brewPotion)
}

module.exports = {
  gameEvents
}
