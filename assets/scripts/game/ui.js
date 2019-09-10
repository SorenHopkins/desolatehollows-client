const inventoryListing = require('../templates/inventory-listing.handlebars')
const store = require('./../store.js')

const inventoryPostSuccess = (data) => {
  console.log(data)
  const showInventoryHtml = inventoryListing({ inventories: data.inventories })
  $('.inventoryBox').html(showInventoryHtml)
}

const inventoryBrewSuccess = () => {
  $('.inventoryBox').trigger('reset')
  $('.potionArea').html("You have brewed a " + store.currentPotion + " Potion!")
}

const failure = (data) => {
  console.log(data)
}

module.exports = {
  inventoryPostSuccess,
  inventoryBrewSuccess,
  failure
}
