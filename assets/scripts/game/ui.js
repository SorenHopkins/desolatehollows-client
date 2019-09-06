const inventoryListing = require('../templates/inventory-listing.handlebars')

const inventoryPostSuccess = (data) => {
  console.log(data)
  const showInventoryHtml = inventoryListing({ inventories: data.inventories })
  $('.inventoryBox').html(showInventoryHtml)
}

module.exports = {
  inventoryPostSuccess
}
