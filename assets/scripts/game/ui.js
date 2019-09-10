const inventoryListing = require('../templates/inventory-listing.handlebars')
const store = require('./../store.js')

const inventoryPostSuccess = (data) => {
  console.log(data)
  const showInventoryHtml = inventoryListing({ inventories: data.inventories })
  $('.inventoryBox').html(showInventoryHtml)
}

const inventoryBrewSuccess = () => {
  $('.inventoryBox').trigger('reset')
  const upperPotion = store.currentPotion.charAt(0).toUpperCase() + store.currentPotion.substring(1)
  $('.potionArea').html('You have brewed a ' + upperPotion + ' Potion!')
}

const failure = (data) => {
  console.log('We experienced an error', data)
}

module.exports = {
  inventoryPostSuccess,
  inventoryBrewSuccess,
  failure
}
