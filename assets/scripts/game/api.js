const config = require('../config.js')
const store = require('./../store.js')
const ui = require('./ui.js')

const inventoryPost = function (name, description, adjective) {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      inventory: {
        name: name,
        description: description,
        adjective: adjective
      }
    }
    // inventoryIndex()
    // if key and value are the same can leave : out
  })
}

const inventoryIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showIngredient = function (currentIngredient) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + currentIngredient,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteIngredient = function (currentIngredient) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + currentIngredient,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const brewNewPotion = function () {
  // store.currentPotion = ''
  // inventoryIndex()
  //   .then(data => {
  //     store.currentInventory = data.inventories
  //     store.currentInventory.forEach(function (item) {
  //       console.log(item)
  //       store.currentPotion = store.currentPotion + item.adjective
  //       api.deleteIngredient(item.id)
  //       .then()
  //       .catch(ui.failure)
  //     })
  //     ui.inventoryBrewSuccess()
  //   })
  //   .catch(console.error)
  // store.currentInventory = []
  // store.currentPotion = ''
  // store.currentInventoryArray = JSON.parse(store.currentInventory)
  // console.log(store.currentInventoryArray)
  // Array.from(store.currentInventory).each(function (item) {
  //   console.log(item)
  //   store.currentPotion = store.currentPotion + item.adjective
  //   deleteIngredient(item.id)
  // })
  // for (let i = 0; i < store.currentInventory.length; i++) {
  //   store.getIngredient = showIngredient(i)
  //   store.currentPotion = store.currentPotion + store.getIngredient.adjective
  //   deleteIngredient(store.currentInventory[i].id)
  // }
  // loop over inventoryIndex
  // return $.ajax({
  //   url: config.apiUrl + '/inventories',
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Token token=' + store.user.token
  //   }
  // })
}

module.exports = {
  inventoryPost,
  inventoryIndex,
  brewNewPotion,
  showIngredient,
  deleteIngredient
}
