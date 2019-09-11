'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#loginModal').modal({backdrop: 'static', keyboard: false})
  authEvents.authEvents()
  gameEvents.gameEvents()
})
