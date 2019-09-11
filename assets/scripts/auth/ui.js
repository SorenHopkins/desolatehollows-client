'use strict'

const store = require('./../store.js')
const gameEvents = require('./../game/events.js')

const signUpSuccess = function () {
  loginAlert('dark', 'Successfully signed up!', 2000)
  $('.reset').trigger('reset')
}

const passwordChangeSuccess = function () {
  newAlert('light', 'Your password has been changed!', 2000)
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  // handle storing user token, if extantS
  $('#loginModal').modal('hide')
  gameEvents.inventoryRefresh()
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#loginModal').modal('show')
}

const signUpFailure = function () {
  loginAlert('dark', 'Sign up failed', 2000)
  $('.reset').trigger('reset')
}

const signInFailure = function () {
  loginAlert('dark', 'Sign in failed', 2000)
  $('.reset').trigger('reset')
}

const failure = function () {
  newAlert('light', 'Sign out failed', 2000)
  $('.reset').trigger('reset')
}

const changePasswordFailure = function () {
  newAlert('light', 'Change Password Failed', 2000)
  $('.reset').trigger('reset')
}

const newAlert = (type, message, delay) => {
  $('.alertArea').append(`<div class='alert alert-${type} no-select ml-2' role="alert">${message}</div>`)
  $('.alert').delay(delay).fadeOut(2000)
}

const loginAlert = (type, message, delay) => {
  $('.loginAlert').append(`<div class='alert alert-${type} no-select ml-2' role="alert">${message}</div>`)
  $('.alert').delay(delay).fadeOut(2000)
}

module.exports = {
  signUpSuccess,
  failure,
  signInSuccess,
  passwordChangeSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure
}
