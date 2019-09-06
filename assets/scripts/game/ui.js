const inventoryListing = require('../templates/inventory-listing.handlebars')

const inventoryPostSuccess = (data) => {
  console.log(data)
  const showBooksHtml = inventoryListing({ inventory: data.inventory })
  $('.inventoryBox').html(showBooksHtml)
}

module.exports = {
  inventoryPostSuccess
}
