'use strict'

const { test } = require('tap')
const boot = require('..')

test('to json', (t) => {
  t.plan(4)

  const app = boot()
  app
    .use(one)
    .use(two)
    .use(three)

  const outJson = {
    id: 'root',
    label: 'root',
    start: /\d+/,
    nodes: []
  }

  app.on('preReady', function show () {
    const json = app.toJSON()
    outJson.stop = /\d*/
    outJson.diff = /\d*/
    t.match(json, outJson)
  })

  function one (s, opts, done) {
    const json = app.toJSON()
    outJson.nodes.push({
      id: /.+/,
      parent: outJson.label,
      label: 'one',
      start: /\d+/
    })
    t.match(json, outJson)
    done()
  }
  function two (s, opts, done) {
    const json = app.toJSON()
    outJson.nodes.push({
      id: /.+/,
      parent: outJson.label,
      label: 'two',
      start: /\d+/
    })
    t.match(json, outJson)
    done()
  }
  function three (s, opts, done) {
    const json = app.toJSON()
    outJson.nodes.push({
      id: /.+/,
      parent: outJson.label,
      label: 'three',
      start: /\d+/
    })
    t.match(json, outJson)
    done()
  }
})

test('to json multi-level hierarchy', (t) => {
  t.plan(4)

  const server = { name: 'asd', count: 0 }
  const app = boot(server)

  const outJson = {
    id: 'root',
    label: 'root',
    start: /\d+/,
    nodes: [
      {
        id: /.+/,
        parent: 'root',
        start: /\d+/,
        label: 'first',
        nodes: [
          {
            id: /.+/,
            parent: 'first',
            start: /\d+/,
            label: 'second',
            nodes: [],
            stop: /\d+/,
            diff: /\d+/
          },
          {
            id: /.+/,
            parent: 'first',
            start: /\d+/,
            label: 'third',
            nodes: [
              {
                id: /.+/,
                parent: 'third',
                start: /\d+/,
                label: 'fourth',
                nodes: [],
                stop: /\d+/,
                diff: /\d+/
              }
            ],
            stop: /\d+/,
            diff: /\d+/
          }
        ],
        stop: /\d+/,
        diff: /\d+/
      }
    ],
    stop: /\d+/,
    diff: /\d+/
  }

  app.on('preReady', function show () {
    const json = app.toJSON()
    t.match(json, outJson)
  })

  app.override = function (s) {
    const res = Object.create(s)
    res.count = res.count + 1
    res.name = 'qwe'
    return res
  }

  app.use(function first (s1, opts, cb) {
    s1.use(second)
    s1.use(third)
    cb()

    function second (s2, opts, cb) {
      t.equal(s2.count, 2)
      cb()
    }

    function third (s3, opts, cb) {
      s3.use(fourth)
      t.equal(s3.count, 2)
      cb()
    }

    function fourth (s4, opts, cb) {
      t.equal(s4.count, 3)
      cb()
    }
  })
})
