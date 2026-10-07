'use strict'

const tap = require('tap')
const prettifyMetadata = require('./prettify-metadata')
const context = {
  customPrettifiers: {}
}

tap.test('returns `undefined` if no metadata present', async t => {
  const str = prettifyMetadata({ log: {}, context })
  t.equal(str, undefined)
})

tap.test('works with only `name` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo' }, context })
  t.equal(str, '(foo)')
})

tap.test('works with only `pid` present', async t => {
  const str = prettifyMetadata({ log: { pid: '1234' }, context })
  t.equal(str, '(1234)')
})

tap.test('works with only `hostname` present', async t => {
  const str = prettifyMetadata({ log: { hostname: 'bar' }, context })
  t.equal(str, '(on bar)')
})

tap.test('works with only `name` & `pid` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', pid: '1234' }, context })
  t.equal(str, '(foo/1234)')
})

tap.test('works with only `name` & `hostname` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', hostname: 'bar' }, context })
  t.equal(str, '(foo on bar)')
})

tap.test('works with only `pid` & `hostname` present', async t => {
  const str = prettifyMetadata({ log: { pid: '1234', hostname: 'bar' }, context })
  t.equal(str, '(1234 on bar)')
})

tap.test('works with only `name`, `pid`, & `hostname` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', pid: '1234', hostname: 'bar' }, context })
  t.equal(str, '(foo/1234 on bar)')
})

tap.test('works with only `name` & `caller` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', caller: 'baz' }, context })
  t.equal(str, '(foo) <baz>')
})

tap.test('works with only `pid` & `caller` present', async t => {
  const str = prettifyMetadata({ log: { pid: '1234', caller: 'baz' }, context })
  t.equal(str, '(1234) <baz>')
})

tap.test('works with only `hostname` & `caller` present', async t => {
  const str = prettifyMetadata({ log: { hostname: 'bar', caller: 'baz' }, context })
  t.equal(str, '(on bar) <baz>')
})

tap.test('works with only `name`, `pid`, & `caller` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', pid: '1234', caller: 'baz' }, context })
  t.equal(str, '(foo/1234) <baz>')
})

tap.test('works with only `name`, `hostname`, & `caller` present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', hostname: 'bar', caller: 'baz' }, context })
  t.equal(str, '(foo on bar) <baz>')
})

tap.test('works with only `caller` present', async t => {
  const str = prettifyMetadata({ log: { caller: 'baz' }, context })
  t.equal(str, '<baz>')
})

tap.test('works with only `pid`, `hostname`, & `caller` present', async t => {
  const str = prettifyMetadata({ log: { pid: '1234', hostname: 'bar', caller: 'baz' }, context })
  t.equal(str, '(1234 on bar) <baz>')
})

tap.test('works with all four present', async t => {
  const str = prettifyMetadata({ log: { name: 'foo', pid: '1234', hostname: 'bar', caller: 'baz' }, context })
  t.equal(str, '(foo/1234 on bar) <baz>')
})

tap.test('uses prettifiers from passed prettifiers object', async t => {
  const prettifiers = {
    name (input) {
      return input.toUpperCase()
    },
    pid (input) {
      return input + '__'
    },
    hostname (input) {
      return input.toUpperCase()
    },
    caller (input) {
      return input.toUpperCase()
    }
  }
  const str = prettifyMetadata({
    log: { pid: '1234', hostname: 'bar', caller: 'baz', name: 'joe' },
    context: {
      customPrettifiers: prettifiers
    }
  })
  t.equal(str, '(JOE/1234__ on BAR) <BAZ>')
})
