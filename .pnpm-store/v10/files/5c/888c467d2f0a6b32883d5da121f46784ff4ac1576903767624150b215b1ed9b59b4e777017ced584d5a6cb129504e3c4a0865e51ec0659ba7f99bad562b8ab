'use strict'

process.env.TZ = 'UTC'

const tap = require('tap')
const formatTime = require('./format-time')

const dateStr = '2019-04-06T13:30:00.000-04:00'
const epoch = new Date(dateStr)
const epochMS = epoch.getTime()

tap.test('passes through epoch if `translateTime` is `false`', async t => {
  const formattedTime = formatTime(epochMS)
  t.equal(formattedTime, epochMS)
})

tap.test('passes through epoch if date is invalid', async t => {
  const input = 'this is not a date'
  const formattedTime = formatTime(input, true)
  t.equal(formattedTime, input)
})

tap.test('translates epoch milliseconds if `translateTime` is `true`', async t => {
  const formattedTime = formatTime(epochMS, true)
  t.equal(formattedTime, '17:30:00.000')
})

tap.test('translates epoch milliseconds to UTC string given format', async t => {
  const formattedTime = formatTime(epochMS, 'd mmm yyyy H:MM')
  t.equal(formattedTime, '6 Apr 2019 17:30')
})

tap.test('translates epoch milliseconds to SYS:STANDARD', async t => {
  const formattedTime = formatTime(epochMS, 'SYS:STANDARD')
  t.match(formattedTime, /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} [-+]?\d{4}/)
})

tap.test('translates epoch milliseconds to SYS:<FORMAT>', async t => {
  const formattedTime = formatTime(epochMS, 'SYS:d mmm yyyy H:MM')
  t.match(formattedTime, /\d{1} \w{3} \d{4} \d{1,2}:\d{2}/)
})

tap.test('passes through date string if `translateTime` is `false`', async t => {
  const formattedTime = formatTime(dateStr)
  t.equal(formattedTime, dateStr)
})

tap.test('translates date string if `translateTime` is `true`', async t => {
  const formattedTime = formatTime(dateStr, true)
  t.equal(formattedTime, '17:30:00.000')
})

tap.test('translates date string to UTC string given format', async t => {
  const formattedTime = formatTime(dateStr, 'd mmm yyyy H:MM')
  t.equal(formattedTime, '6 Apr 2019 17:30')
})

tap.test('translates date string to SYS:STANDARD', async t => {
  const formattedTime = formatTime(dateStr, 'SYS:STANDARD')
  t.match(formattedTime, /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} [-+]?\d{4}/)
})

tap.test('translates date string to UTC:<FORMAT>', async t => {
  const formattedTime = formatTime(dateStr, 'UTC:d mmm yyyy H:MM')
  t.equal(formattedTime, '6 Apr 2019 17:30')
})

tap.test('translates date string to SYS:<FORMAT>', async t => {
  const formattedTime = formatTime(dateStr, 'SYS:d mmm yyyy H:MM')
  t.match(formattedTime, /\d{1} \w{3} \d{4} \d{1,2}:\d{2}/)
})
