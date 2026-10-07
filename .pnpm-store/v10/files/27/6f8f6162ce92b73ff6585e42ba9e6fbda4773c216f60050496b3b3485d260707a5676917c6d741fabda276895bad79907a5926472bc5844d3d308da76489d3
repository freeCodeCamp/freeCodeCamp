#!/usr/local/bin/node

// simulate localStorage - must be done before importing tests
var { Global } = require('../src/util')
Global.localStorage = require('localStorage')

// Import and run tests
var tests = require('../tests/tests')

tests.runTests()
