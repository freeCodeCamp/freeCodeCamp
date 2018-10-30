var Linter = require('standard-engine').linter
var opts = require('./options')

module.exports = new Linter(opts)
