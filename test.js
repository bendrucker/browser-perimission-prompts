'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('iOS', function (t) {
  var prompts = proxyquire('./', {
    'is-ios': true,
    'is-safari': true
  })
  t.notOk(prompts(), 'no result')
  t.end()
})

test('Android', function (t) {
  var prompts = proxyquire('./', {
    'is-ios': true,
    'is-chrome': function () {
      return true
    }
  })
  t.notOk(prompts(), 'no result')
  t.end()
})

test('Safari', function (t) {
  var prompts = proxyquire('./safari', {
    'view-size': function () {
      return {x: 800, y: 600}
    }
  })
  t.deepEqual(prompts(), {
    prompt: [
      {x: 190, y: 0},
      {x: 610, y: 0},
      {x: 610, y: 140},
      {x: 190, y: 140}
    ],
    confirm: {
      x: 551
    }
  }, 'dynamically calculates position')
  t.end()
})
