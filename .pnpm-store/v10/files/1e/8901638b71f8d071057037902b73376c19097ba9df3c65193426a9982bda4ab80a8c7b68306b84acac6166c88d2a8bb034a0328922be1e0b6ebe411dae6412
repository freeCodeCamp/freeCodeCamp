'use strict'

const statuses = require('../lib/statuses')
const supported = require('../lib/supported')
const browsers = require('./browsers').browsers
const versions = require('./browserVersions').browserVersions
const versionGroups = require('./versionGroups.js').versionGroups

const MATH2LOG = Math.log(2)

const groupCache = {}

function expandKey(key) {
  let cached = groupCache[key]
  if (cached === undefined) {
    cached = groupCache[key] = expandGroups(versionGroups[key], [])
  }
  return cached
}

function expandGroups(value, out) {
  let start = 0
  for (let i = 0, len = value.length; i <= len; i++) {
    if (i === len || value.charCodeAt(i) === 32) {
      if (i > start) {
        if (value.charCodeAt(start) === 95) {
          let group = expandKey(value.slice(start + 1, i))
          for (let j = 0; j < group.length; j++) out.push(group[j])
        } else {
          out.push(value.slice(start, i))
        }
      }
      start = i + 1
    }
  }
  return out
}

function unpackSupport(cipher) {
  // bit flags
  let stats = Object.keys(supported).reduce((list, support) => {
    if (cipher & supported[support]) list.push(support)
    return list
  }, [])

  // notes
  let notes = cipher >> 7
  let notesArray = []
  while (notes) {
    let note = Math.floor(Math.log(notes) / MATH2LOG) + 1
    notesArray.unshift(`#${note}`)
    notes -= Math.pow(2, note - 1)
  }

  return stats.concat(notesArray).join(' ')
}

function unpackFeature(packed) {
  let unpacked = {
    status: statuses[packed.B],
    title: packed.C,
    shown: packed.D
  }
  unpacked.stats = Object.keys(packed.A).reduce((browserStats, key) => {
    let browser = packed.A[key]
    browserStats[browsers[key]] = Object.keys(browser).reduce(
      (stats, support) => {
        let packedVersions = expandGroups(browser[support], [])
        let unpacked2 = unpackSupport(support)
        packedVersions.forEach(v => (stats[versions[v]] = unpacked2))
        return stats
      },
      {}
    )
    return browserStats
  }, {})
  return unpacked
}

module.exports = unpackFeature
module.exports.default = unpackFeature
