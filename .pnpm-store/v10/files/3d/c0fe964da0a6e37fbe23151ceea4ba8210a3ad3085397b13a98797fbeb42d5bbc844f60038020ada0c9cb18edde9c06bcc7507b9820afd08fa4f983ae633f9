'use strict'

const t = require('tap')
const semver = require('semver')

const { isYarnPnp } = require('../helper')

if (!semver.satisfies(process.versions.node, '^13.3.0 || ^12.10.0 || >= 14.0.0') || isYarnPnp) {
  t.skip('Skip esm because not supported by Node')
} else {
  // Node v8 throw a `SyntaxError: Unexpected token import`
  // even if this branch is never touch in the code,
  // by using `eval` we can avoid this issue.
  // eslint-disable-next-line
  new Function('module', 'return import(module)')('./esm.mjs').catch((err) => {
    process.nextTick(() => {
      throw err
    })
  })
}

if (!semver.satisfies(process.versions.node, '>= 14.13.0 || ^12.20.0') || isYarnPnp) {
  t.skip('Skip named exports because not supported by Node')
} else {
  // Node v8 throw a `SyntaxError: Unexpected token import`
  // even if this branch is never touch in the code,
  // by using `eval` we can avoid this issue.
  // eslint-disable-next-line
  new Function('module', 'return import(module)')('./named-exports.mjs').catch((err) => {
    process.nextTick(() => {
      throw err
    })
  })
}
