'use strict'

// an async function fails early in Node.js versions prior to 8.
async function requiresNode8OrGreater () {}
requiresNode8OrGreater()

const { Yargs, rebase } = require('./build/lib/yargs')
const Parser = require('yargs-parser')

exports = module.exports = Yargs
exports.rebase = rebase

// allow consumers to directly use the version of yargs-parser used by yargs
exports.Parser = Parser
