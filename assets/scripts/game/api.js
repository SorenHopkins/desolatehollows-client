const config = require('../config.js')
const store = require('./../store.js')

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

module.exports = {
  inventoryPost,
  inventoryIndex
}
