'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
    // if key and value are the same can leave : out
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // if key and value are the same can leave : out
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // if key and value are the same can leave : out
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // if key and value are the same can leave : out
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
