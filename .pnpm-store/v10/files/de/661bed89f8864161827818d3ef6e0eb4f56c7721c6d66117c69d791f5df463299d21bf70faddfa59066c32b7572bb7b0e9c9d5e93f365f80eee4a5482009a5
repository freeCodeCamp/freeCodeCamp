'use strict'

const { once } = require('events')
const { Transform, pipeline } = require('stream')

const { test } = require('tap')
const build = require('../')

test('parse newlined delimited JSON', ({ same, plan }) => {
  plan(2)
  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      same(expected.shift(), line)
    })
  })

  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('parse newlined delimited JSON', ({ same, plan }) => {
  plan(2)
  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      same(expected.shift(), line)
    })
  }, { parse: 'json' })

  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('null support', ({ same, plan }) => {
  plan(1)
  const stream = build(function (source) {
    source.on('unknown', function (line) {
      same('null', line)
    })
  })

  stream.write('null\n')
  stream.end()
})

test('broken json', ({ same, plan }) => {
  plan(2)
  const expected = '{ "truncated'
  const stream = build(function (source) {
    source.on('unknown', function (line, error) {
      same(expected, line)
      same(error.message, 'Unexpected end of JSON input')
    })
  })

  stream.write(expected + '\n')
  stream.end()
})

test('pure values', ({ same, ok, plan }) => {
  plan(3)
  const stream = build(function (source) {
    source.on('data', function (line) {
      same(line.data, 42)
      ok(line.time)
      same(new Date(line.time).getTime(), line.time)
    })
  })

  stream.write('42\n')
  stream.end()
})

test('support async iteration', ({ same, plan }) => {
  plan(2)
  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(async function (source) {
    for await (const line of source) {
      same(expected.shift(), line)
    }
  })

  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('rejecting errors the stream', async ({ same, plan }) => {
  const stream = build(async function (source) {
    throw new Error('kaboom')
  })

  const [err] = await once(stream, 'error')
  same(err.message, 'kaboom')
})

test('set metadata', ({ same, plan, equal }) => {
  plan(9)

  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      const obj = expected.shift()
      same(this.lastLevel, obj.level)
      same(this.lastTime, obj.time)
      same(this.lastObj, obj)
      same(obj, line)
    })
  }, { metadata: true })

  equal(stream[Symbol.for('pino.metadata')], true)
  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('parse lines', ({ same, plan, equal }) => {
  plan(9)

  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      const obj = expected.shift()
      same(this.lastLevel, obj.level)
      same(this.lastTime, obj.time)
      same(this.lastObj, obj)
      same(JSON.stringify(obj), line)
    })
  }, { metadata: true, parse: 'lines' })

  equal(stream[Symbol.for('pino.metadata')], true)
  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('custom parse line function', ({ same, plan, equal }) => {
  plan(11)

  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]
  let num = 0

  function parseLine (str) {
    const obj = JSON.parse(str)
    same(expected[num], obj)
    return obj
  }

  const stream = build(function (source) {
    source.on('data', function (line) {
      const obj = expected[num]
      same(this.lastLevel, obj.level)
      same(this.lastTime, obj.time)
      same(this.lastObj, obj)
      same(obj, line)
      num++
    })
  }, { metadata: true, parseLine })

  equal(stream[Symbol.for('pino.metadata')], true)
  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('set metadata (default)', ({ same, plan, equal }) => {
  plan(9)

  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      const obj = expected.shift()
      same(this.lastLevel, obj.level)
      same(this.lastTime, obj.time)
      same(this.lastObj, obj)
      same(obj, line)
    })
  })

  equal(stream[Symbol.for('pino.metadata')], true)
  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('do not set metadata', ({ same, plan, equal }) => {
  plan(9)

  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      const obj = expected.shift()
      same(this.lastLevel, undefined)
      same(this.lastTime, undefined)
      same(this.lastObj, undefined)
      same(obj, line)
    })
  }, { metadata: false })

  equal(stream[Symbol.for('pino.metadata')], undefined)
  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('close logic', ({ same, plan, pass }) => {
  plan(3)
  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      same(expected.shift(), line)
    })
  }, {
    close (err, cb) {
      pass('close called')
      process.nextTick(cb, err)
    }
  })

  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('close with promises', ({ same, plan, pass }) => {
  plan(3)
  const expected = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const stream = build(function (source) {
    source.on('data', function (line) {
      same(expected.shift(), line)
    })
  }, {
    async close () {
      pass('close called')
    }
  })

  const lines = expected.map(JSON.stringify).join('\n')
  stream.write(lines)
  stream.end()
})

test('support Transform streams', ({ same, plan, error }) => {
  plan(7)

  const expected1 = [{
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'hello world'
  }, {
    level: 30,
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'another message',
    prop: 42
  }]

  const expected2 = []

  const stream1 = build(function (source) {
    const transform = new Transform({
      objectMode: true,
      autoDestroy: true,
      transform (chunk, enc, cb) {
        same(expected1.shift(), chunk)
        chunk.service = 'from transform'
        expected2.push(chunk)
        cb(null, JSON.stringify(chunk) + '\n')
      }
    })

    pipeline(source, transform, () => {})

    return transform
  }, { enablePipelining: true })

  const stream2 = build(function (source) {
    source.on('data', function (line) {
      same(expected2.shift(), line)
    })
  })

  pipeline(stream1, stream2, function (err) {
    error(err)
    same(expected1, [])
    same(expected2, [])
  })

  const lines = expected1.map(JSON.stringify).join('\n')
  stream1.write(lines)
  stream1.end()
})
