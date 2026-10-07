'use strict'

var vfile = require('./core')
var sync = require('./sync')
var async = require('./async')

module.exports = vfile

vfile.read = async.read
vfile.readSync = sync.read
vfile.write = async.write
vfile.writeSync = sync.write
