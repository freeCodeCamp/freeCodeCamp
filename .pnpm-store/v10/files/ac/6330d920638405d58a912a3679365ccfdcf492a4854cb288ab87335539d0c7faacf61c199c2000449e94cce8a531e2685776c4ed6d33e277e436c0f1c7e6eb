'use strict'

const assert = require('node:assert')

function SemVerStore () {
  if (!(this instanceof SemVerStore)) {
    return new SemVerStore()
  }

  this.store = new Map()
  this.maxMajor = 0
  this.maxMinors = {}
  this.maxPatches = {}
}

SemVerStore.prototype.set = function (version, store) {
  if (typeof version !== 'string') {
    throw new TypeError('Version should be a string')
  }
  let [major, minor, patch] = version.split('.', 3)

  if (isNaN(major)) {
    throw new TypeError('Major version must be a numeric value')
  }

  major = Number(major)
  minor = Number(minor) || 0
  patch = Number(patch) || 0

  if (major >= this.maxMajor) {
    this.maxMajor = major
    this.store.set('x', store)
    this.store.set('*', store)
    this.store.set('x.x', store)
    this.store.set('x.x.x', store)
  }

  if (minor >= (this.maxMinors[major] || 0)) {
    this.maxMinors[major] = minor
    this.store.set(`${major}.x`, store)
    this.store.set(`${major}.x.x`, store)
  }

  if (patch >= (this.maxPatches[`${major}.${minor}`] || 0)) {
    this.maxPatches[`${major}.${minor}`] = patch
    this.store.set(`${major}.${minor}.x`, store)
  }

  this.store.set(`${major}.${minor}.${patch}`, store)
  return this
}

SemVerStore.prototype.get = function (version) {
  return this.store.get(version)
}

module.exports = {
  name: 'version',
  mustMatchWhenDerived: true,
  storage: SemVerStore,
  validate (value) {
    assert(typeof value === 'string', 'Version should be a string')
  }
}
