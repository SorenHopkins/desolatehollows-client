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

const updateIngredient = function (name, description, adjective) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + store.updateId,
    method: 'PATCH',
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

module.exports = {
  inventoryPost,
  inventoryIndex,
  showIngredient,
  deleteIngredient,
  updateIngredient
}
