'use strict'

const tap = require('tap')
const { createCopier } = require('fast-copy')
const fastCopy = createCopier({})
const interpretConditionals = require('./interpret-conditionals')

const logData = {
  level: 30,
  data1: {
    data2: 'bar'
  },
  msg: 'foo'
}

tap.test('interpretConditionals translates if / else statement to found property value', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level} - {if data1.data2}{data1.data2}{end}', log), '{level} - bar')
})

tap.test('interpretConditionals translates if / else statement to found property value and leave unmatched property key untouched', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level} - {if data1.data2}{data1.data2} ({msg}){end}', log), '{level} - bar ({msg})')
})

tap.test('interpretConditionals removes non-terminated if statements', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level} - {if data1.data2}{data1.data2}', log), '{level} - {data1.data2}')
})

tap.test('interpretConditionals removes floating end statements', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level} - {data1.data2}{end}', log), '{level} - {data1.data2}')
})

tap.test('interpretConditionals removes floating end statements within translated if / end statements', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level} - {if msg}({msg}){end}{end}', log), '{level} - (foo)')
})

tap.test('interpretConditionals removes if / end blocks if existent condition key does not match existent property key', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level}{if msg}{data1.data2}{end}', log), '{level}')
})

tap.test('interpretConditionals removes if / end blocks if non-existent condition key does not match existent property key', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level}{if foo}{msg}{end}', log), '{level}')
})

tap.test('interpretConditionals removes if / end blocks if existent condition key does not match non-existent property key', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level}{if msg}{foo}{end}', log), '{level}')
})

tap.test('interpretConditionals removes if / end blocks if non-existent condition key does not match non-existent property key', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level}{if foo}{bar}{end}', log), '{level}')
})

tap.test('interpretConditionals removes if / end blocks if nested condition key does not match property key', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{level}{if data1.msg}{data1.data2}{end}', log), '{level}')
})

tap.test('interpretConditionals removes nested if / end statement blocks', async t => {
  const log = fastCopy(logData)
  t.equal(interpretConditionals('{if msg}{if data1.data2}{msg}{data1.data2}{end}{end}', log), 'foo{data1.data2}')
})
