const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const buttonClick = event => {
  if (event.target.id === 'batWings') {
    api.inventoryPost('Bat Wings', 'Wings of a Bat', 'Flappy')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'honeyDrop') {
    api.inventoryPost('Drop of Honey', 'A single drop of honey', 'Sweet')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'eyeOfNewt') {
    api.inventoryPost('Eye of Newt', 'A single eye extracted from a newt', 'Squish')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'frogLegs') {
    api.inventoryPost('Frog Legs', 'How did you even get these?', 'Hop')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'nightshade') {
    api.inventoryPost('Nightshade', 'A few petals from a dangerous flower', 'Dark')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'snakeTongues') {
    api.inventoryPost('Snake Tongues', 'A little bundle of snake tongues', 'Charm')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  } else if (event.target.id === 'holyWater') {
    api.inventoryPost('Holy Water', 'Consecrated water, straight from church', 'Bright')
      .then((responseData) => {
        inventoryRefresh()
      }
      )
      .catch(ui.failure)
  }
}

const createNewIngredient = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.inventoryPost(data.credentials.name, data.credentials.description, data.credentials.adjective)
    .then((responseData) => {
      inventoryRefresh()
    }
    )
    .catch(ui.failure)
}

const inventoryRefresh = () => {
  api.inventoryIndex()
    .then(ui.inventoryPostSuccess)
    .catch(ui.failure)
}

const brewPotion = event => {
  store.currentPotion = ''
  api.inventoryIndex()
    .then(data => {
      store.currentInventory = data.inventories
      if (store.currentInventory.length === 0) {
        ui.failure()
      } else {
        store.currentInventory.forEach(function (item) {
          store.currentPotion = store.currentPotion + item.adjective
          api.deleteIngredient(item.id)
            .then(ui.inventoryBrewSuccess)
            .catch(ui.failure)
        }
        )
      }
    })
    .catch(ui.failure)
}

const updateLaunch = event => {
  store.updateId = $(event.target).data('id')
  $('#updateModal').modal('show')
}

const updateIngredient = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateIngredient(data.credentials.name, data.credentials.description, data.credentials.adjective)
    .then((responseData) => {
      inventoryRefresh()
    }
    )
    .catch(ui.failure)
}

const gameEvents = function () {
  $('.ingredientButton').on('click', buttonClick)
  $('#ingredientMaker').on('submit', createNewIngredient)
  $('.brewButton').on('click', brewPotion)
  $('body').on('click', '.updateLauncher', updateLaunch)
  $('#ingredientUpdater').on('submit', updateIngredient)
}

module.exports = {
  gameEvents,
  inventoryRefresh
}
