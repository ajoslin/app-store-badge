'use strict'

var test = require('tape')
var badge = require('./')

test(function (t) {
  t.equal(badge.ios().tagName, 'svg')
  t.equal(badge.android().tagName, 'svg')
  t.end()
})
