'use strict'

const { test } = require('tap')
const fastq = require('fastq')
const boot = require('..')
const { Plugin } = require('../lib/plugin')

test('loadedSoFar resolves a Promise, if plugin.loaded is set to true', async (t) => {
  t.plan(1)
  const app = boot({})

  const plugin = new Plugin(fastq(app, app._loadPluginNextTick, 1), function (instance, opts, done) {
    done()
  }, false, 0)

  plugin.loaded = true

  await t.resolves(plugin.loadedSoFar())
})

test('loadedSoFar resolves a Promise, if plugin was loaded by avvio', async (t) => {
  t.plan(2)
  const app = boot({})

  const plugin = new Plugin(fastq(app, app._loadPluginNextTick, 1), function (instance, opts, done) {
    done()
  }, false, 0)

  app._loadPlugin(plugin, function (err) {
    t.equal(err, undefined)
  })

  await app.ready()

  await t.resolves(plugin.loadedSoFar())
})

test('loadedSoFar resolves a Promise, if .after() has no error', async t => {
  t.plan(1)
  const app = boot()

  app.after = function (callback) {
    callback(null, () => {})
  }

  const plugin = new Plugin(fastq(app, app._loadPluginNextTick, 1), function (instance, opts, done) {
    done()
  }, false, 0)

  app._loadPlugin(plugin, function () {})

  await t.resolves(plugin.loadedSoFar())
})

test('loadedSoFar rejects a Promise, if .after() has an error', async t => {
  t.plan(1)
  const app = boot()

  app.after = function (fn) {
    fn(new Error('ArbitraryError'), () => {})
  }

  const plugin = new Plugin(fastq(app, app._loadPluginNextTick, 1), function (instance, opts, done) {
    done()
  }, false, 0)

  app._loadPlugin(plugin, function () {})

  await t.rejects(plugin.loadedSoFar(), new Error('ArbitraryError'))
})

test('loadedSoFar resolves a Promise, if Plugin is attached to avvio after it the Plugin was instantiated', async t => {
  t.plan(1)

  const plugin = new Plugin(fastq(null, null, 1), function (instance, opts, done) {
    done()
  }, false, 0)

  const promise = plugin.loadedSoFar()

  plugin.server = boot()
  plugin.emit('start')
  await t.resolves(promise)
})
