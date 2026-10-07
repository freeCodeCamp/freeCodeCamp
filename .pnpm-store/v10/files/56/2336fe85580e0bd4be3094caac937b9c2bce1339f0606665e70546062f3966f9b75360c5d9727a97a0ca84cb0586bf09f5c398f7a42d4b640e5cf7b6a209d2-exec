#!/usr/bin/env node

process.env.NODE_ENV = 'test'

var path = require('path')
var test = null

try {
  var pkg = require(path.join(process.cwd(), 'package.json'))
  if (pkg.name && process.env[pkg.name.toUpperCase().replace(/-/g, '_')]) {
    process.exit(0)
  }
  test = pkg.prebuild.test
} catch (err) {
  //  do nothing
}

if (test) require(path.join(process.cwd(), test))
else require('./')()
