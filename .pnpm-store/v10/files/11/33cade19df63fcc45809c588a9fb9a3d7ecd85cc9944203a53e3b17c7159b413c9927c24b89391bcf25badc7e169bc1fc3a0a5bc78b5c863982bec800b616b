'use strict'

const { test } = require('node:test')
const { parseBytesRange } = require('../lib/parseBytesRange')

test('parseBytesRange', async function (t) {
  t.plan(13)

  await t.test('should return empty array if all specified ranges are invalid', function (t) {
    t.plan(3)
    t.assert.deepStrictEqual(parseBytesRange(200, 'bytes=500-20'), [])
    t.assert.deepStrictEqual(parseBytesRange(200, 'bytes=500-999'), [])
    t.assert.deepStrictEqual(parseBytesRange(200, 'bytes=500-999,1000-1499'), [])
  })

  await t.test('should parse str', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=0-499')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 499, index: 0 })
  })

  await t.test('should cap end at size', function (t) {
    t.plan(2)
    const range = parseBytesRange(200, 'bytes=0-499')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 199, index: 0 })
  })

  await t.test('should parse str', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=40-80')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 40, end: 80, index: 0 })
  })

  await t.test('should parse str asking for last n bytes', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=-400')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 600, end: 999, index: 0 })
  })

  await t.test('should parse str with only start', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=400-')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 400, end: 999, index: 0 })
  })

  await t.test('should parse "bytes=0-"', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=0-')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 999, index: 0 })
  })

  await t.test('should parse str with no bytes', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=0-0')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 0, index: 0 })
  })

  await t.test('should parse str asking for last byte', function (t) {
    t.plan(2)
    const range = parseBytesRange(1000, 'bytes=-1')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 999, end: 999, index: 0 })
  })

  await t.test('should parse str with some invalid ranges', function (t) {
    t.plan(2)
    const range = parseBytesRange(200, 'bytes=0-499,1000-,500-999')
    t.assert.deepStrictEqual(range.length, 1)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 199, index: 0 })
  })

  await t.test('should combine overlapping ranges', function (t) {
    t.plan(3)
    const range = parseBytesRange(150, 'bytes=0-4,90-99,5-75,100-199,101-102')
    t.assert.deepStrictEqual(range.length, 2)
    t.assert.deepStrictEqual(range[0], { start: 0, end: 75, index: 0 })
    t.assert.deepStrictEqual(range[1], { start: 90, end: 149, index: 1 })
  })

  await t.test('should retain original order /1', function (t) {
    t.plan(3)
    const range = parseBytesRange(150, 'bytes=90-99,5-75,100-199,101-102,0-4')
    t.assert.deepStrictEqual(range.length, 2)
    t.assert.deepStrictEqual(range[0], { start: 90, end: 149, index: 0 })
    t.assert.deepStrictEqual(range[1], { start: 0, end: 75, index: 1 })
  })

  await t.test('should retain original order /2', function (t) {
    t.plan(4)
    const range = parseBytesRange(150, 'bytes=-1,20-100,0-1,101-120')
    t.assert.deepStrictEqual(range.length, 3)
    t.assert.deepStrictEqual(range[0], { start: 149, end: 149, index: 0 })
    t.assert.deepStrictEqual(range[1], { start: 20, end: 120, index: 1 })
    t.assert.deepStrictEqual(range[2], { start: 0, end: 1, index: 2 })
  })
})
