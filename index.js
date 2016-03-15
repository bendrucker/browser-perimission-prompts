'use strict'

var isChrome = require('is-chrome')()
var isSafari = require('is-safari')
var isFirefox = require('is-firefox')
var isAndroid = require('is-android')
var isIos = require('is-ios')
var isWindows = require('is-windows-browser')

var chrome = require('./chrome.json')
var chromeWindows = require('./chrome-windows.json')
var firefox = require('./firefox.json')
var safari = require('./safari')

module.exports = promptLocation

function promptLocation () {
  if (isIos || isAndroid) return

  if (isChrome) {
    return isWindows ? chromeWindows : chrome
  }

  if (isFirefox) return firefox
  if (isSafari) return safari()
}
