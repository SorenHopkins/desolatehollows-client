const inventoryListing = require('../templates/inventory-listing.handlebars')
const store = require('./../store.js')
// const fs = require('fs')

const inventoryPostSuccess = (data) => {
  console.log(data)
  const showInventoryHtml = inventoryListing({ inventories: data.inventories })
  $('.inventoryBox').html(showInventoryHtml)
}

const inventoryBrewSuccess = () => {
  $('.inventoryBox').trigger('reset')
  const upperPotion = store.currentPotion.charAt(0).toUpperCase() + store.currentPotion.substring(1)
  $('.potionArea').html('You have brewed a ' + upperPotion + ' Potion!')
  const randColorIndex = Math.floor(Math.random() * potionColors.length)
  const randEffectsIndex = Math.floor(Math.random() * potionEffects.length)
  $('.potionDescriptionArea').html(potionColors[randColorIndex] + ' ' + potionEffects[randEffectsIndex])
}

const failure = (data) => {
  console.log('We experienced an error', data)
}

const potionColors = ['A clear potion with silvery bubbles.',
  'A dark potion; shadowy shapes move inside.',
  'A red potion that sparkles in the light.',
  'A cerulean potion that glows in the dark.',
  'An amber potion that\'s very viscous.',
  'A silver potion that bubbles violently.',
  'A white potion with little black flecks.',
  'A dark green potion that hisses when opened.',
  'A light green potion that makes a humming noise.',
  'A dark blue potion that shudders when moved.',
  'A purple potion with a small bright halo',
  'A violet potion that smells absolutely terrible.',
  'A light blue potion that smells like flowers.',
  'A black potion with little flowers inside.',
  'A blood orange potion that has little stripes.',
  'A light grey potion that floats in the air.',
  'A tan potion that continuously vibrates.',
  'A daffodil-yellow potion with ramen noodles inside.'
]

const potionEffects = ['It summons Unicorns.',
  'It causes mushrooms to grow on your head.',
  'It creates the sound of distant laughter.',
  'It heals your soul.',
  'It tastes like chicken soup.',
  'It turns you into a frog. You get better.',
  'It turns you into a really cool bat, with sunglasses. You get better.',
  'It clarifies your complexion.',
  'It de-clarifies your complexion.',
  'It makes you hiccup for a solid hour.',
  'It cures diseases.',
  'It attracts cats.',
  'It attracts dogs.',
  'It attracts bears. Run!',
  'It inspires creativity.',
  'It tastes like caffeine. In fact, it is caffeine.',
  'It makes your hair stand on it\'s ends.',
  'It causes your whole body to vibrate.',
  'It makes you float in the air.',
  'It makes you feel very tired.']

module.exports = {
  inventoryPostSuccess,
  inventoryBrewSuccess,
  failure
}
