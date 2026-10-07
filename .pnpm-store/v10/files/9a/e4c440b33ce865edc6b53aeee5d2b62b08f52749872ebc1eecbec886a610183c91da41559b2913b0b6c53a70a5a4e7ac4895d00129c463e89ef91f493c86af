'use strict'

const Type = require('../type')

const YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])' + // [1] year
  '-([0-9][0-9])' + // [2] month
  '-([0-9][0-9])$')                   // [3] day

const YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])' + // [1] year
  '-([0-9][0-9]?)' + // [2] month
  '-([0-9][0-9]?)' + // [3] day
  '(?:[Tt]|[ \\t]+)' + // ...
  '([0-9][0-9]?)' + // [4] hour
  ':([0-9][0-9])' + // [5] minute
  ':([0-9][0-9])' + // [6] second
  '(?:\\.([0-9]*))?' + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tzHour
  '(?::([0-9][0-9]))?))?$')           // [11] tzMinute

function resolveYamlTimestamp (data) {
  if (data === null) return false
  if (YAML_DATE_REGEXP.exec(data) !== null) return true
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true
  return false
}

function constructYamlTimestamp (data) {
  let fraction = 0
  let delta = null

  let match = YAML_DATE_REGEXP.exec(data)
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data)

  if (match === null) throw new Error('Date resolve error')

  // match: [1] year [2] month [3] day

  const year = +(match[1])
  const month = +(match[2]) - 1 // JS month starts with 0
  const day = +(match[3])

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day))
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  const hour = +(match[4])
  const minute = +(match[5])
  const second = +(match[6])

  if (match[7]) {
    fraction = match[7].slice(0, 3)
    while (fraction.length < 3) { // milli-seconds
      fraction += '0'
    }
    fraction = +fraction
  }

  // match: [8] tz [9] tz_sign [10] tzHour [11] tzMinute

  if (match[9]) {
    const tzHour = +(match[10])
    const tzMinute = +(match[11] || 0)
    delta = (tzHour * 60 + tzMinute) * 60000 // delta in mili-seconds
    if (match[9] === '-') delta = -delta
  }

  const date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction))

  if (delta) date.setTime(date.getTime() - delta)

  return date
}

function representYamlTimestamp (object /*, style */) {
  return object.toISOString()
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
})
