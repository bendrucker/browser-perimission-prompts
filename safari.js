'use strict'

var view = require('view-size')
var safari = require('./safari.json')

module.exports = safariPromptLocation

function safariPromptLocation () {
  var size = view()

  var left = size.x / 2 - safari.size.x / 2
  var right = size.x / 2 + safari.size.x / 2

  return {
    prompt: [
      {
        x: left,
        y: 0
      },
      {
        x: right,
        y: 0
      },
      {
        x: right,
        y: safari.size.y
      },
      {
        x: left,
        y: safari.size.y
      }
    ],
    confirm: {
      x: left + safari.confirm.x
    }
  }
}
