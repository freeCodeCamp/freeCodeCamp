'use strict'
var EventEmitter = require('events').EventEmitter
var util = require('util')

var trackerId = 0
var TrackerBase = module.exports = function (name) {
  EventEmitter.call(this)
  this.id = ++trackerId
  this.name = name
}
util.inherits(TrackerBase, EventEmitter)
