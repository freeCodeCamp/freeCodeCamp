'use strict'

var hasOwnProperty = require('../constant/has-own-property.js')
var chunkedSplice = require('./chunked-splice.js')
var miniflat = require('./miniflat.js')

function combineExtensions(extensions) {
  var all = {}
  var index = -1

  while (++index < extensions.length) {
    extension(all, extensions[index])
  }

  return all
}

function extension(all, extension) {
  var hook
  var left
  var right
  var code

  for (hook in extension) {
    left = hasOwnProperty.call(all, hook) ? all[hook] : (all[hook] = {})
    right = extension[hook]

    for (code in right) {
      left[code] = constructs(
        miniflat(right[code]),
        hasOwnProperty.call(left, code) ? left[code] : []
      )
    }
  }
}

function constructs(list, existing) {
  var index = -1
  var before = []

  while (++index < list.length) {
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  chunkedSplice(existing, 0, 0, before)
  return existing
}

module.exports = combineExtensions
