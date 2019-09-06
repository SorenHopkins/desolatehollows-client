'use strict'

const store = require('./../store.js')

const signUpSuccess = function () {
  $('.loginAlert').hide()
  $('#signUpSuccessAlert').show()
  $('.reset').trigger('reset')
}

const passwordChangeSuccess = function () {
  $('form').trigger('reset')
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  // handle storing user token, if extantS
  $('.loginAlert').hide()
  $('.reset').trigger('reset')
  $('#loginModal').modal('hide')
}

const signOutSuccess = function () {
}

const signUpFailure = function () {
  $('.loginAlert').hide()
  $('#signUpFailure').show()
  $('.reset').trigger('reset')
}

const signInFailure = function () {
  $('.loginAlert').hide()
  $('#signInFailure').show()
  $('.reset').trigger('reset')
}

const failure = function () {
  $('.reset').trigger('reset')
}

const changePasswordFailure = function () {
  $('.reset').trigger('reset')
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
