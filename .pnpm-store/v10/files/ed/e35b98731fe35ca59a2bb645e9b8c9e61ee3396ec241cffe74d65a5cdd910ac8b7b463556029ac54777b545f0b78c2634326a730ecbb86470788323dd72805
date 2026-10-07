'use strict'

const writeStream = require('flush-write-stream')
const { readFileSync } = require('node:fs')
const { join } = require('node:path')
const test = require('tap').test
const pino = require('../')
const multistream = pino.multistream
const proxyquire = require('proxyquire')
const strip = require('strip-ansi')
const { file, sink } = require('./helper')

test('sends to multiple streams using string levels', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const log = pino({
    level: 'trace'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 9)
  t.end()
})

test('sends to multiple streams using custom levels', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const log = pino({
    level: 'trace'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 9)
  t.end()
})

test('sends to multiple streams using optionally predefined levels', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const opts = {
    levels: {
      silent: Infinity,
      fatal: 60,
      error: 50,
      warn: 50,
      info: 30,
      debug: 20,
      trace: 10
    }
  }
  const streams = [
    { stream },
    { level: 'trace', stream },
    { level: 'debug', stream },
    { level: 'info', stream },
    { level: 'warn', stream },
    { level: 'error', stream },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const mstream = multistream(streams, opts)
  const log = pino({
    level: 'trace'
  }, mstream)
  log.trace('trace stream')
  log.debug('debug stream')
  log.info('info stream')
  log.warn('warn stream')
  log.error('error stream')
  log.fatal('fatal stream')
  log.silent('silent stream')
  t.equal(messageCount, 24)
  t.end()
})

test('sends to multiple streams using number levels', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 20, stream },
    { level: 60, stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 6)
  t.end()
})

test('level include higher levels', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({}, multistream([{ level: 'info', stream }]))
  log.fatal('message')
  t.equal(messageCount, 1)
  t.end()
})

test('supports multiple arguments', function (t) {
  const messages = []
  const stream = writeStream(function (data, enc, cb) {
    messages.push(JSON.parse(data))
    if (messages.length === 2) {
      const msg1 = messages[0]
      t.equal(msg1.msg, 'foo bar baz foobar')

      const msg2 = messages[1]
      t.equal(msg2.msg, 'foo bar baz foobar barfoo foofoo')

      t.end()
    }
    cb()
  })
  const log = pino({}, multistream({ stream }))
  log.info('%s %s %s %s', 'foo', 'bar', 'baz', 'foobar') // apply not invoked
  log.info('%s %s %s %s %s %s', 'foo', 'bar', 'baz', 'foobar', 'barfoo', 'foofoo') // apply invoked
})

test('supports children', function (t) {
  const stream = writeStream(function (data, enc, cb) {
    const input = JSON.parse(data)
    t.equal(input.msg, 'child stream')
    t.equal(input.child, 'one')
    t.end()
    cb()
  })
  const streams = [
    { stream }
  ]
  const log = pino({}, multistream(streams)).child({ child: 'one' })
  log.info('child stream')
})

test('supports grandchildren', function (t) {
  const messages = []
  const stream = writeStream(function (data, enc, cb) {
    messages.push(JSON.parse(data))
    if (messages.length === 3) {
      const msg1 = messages[0]
      t.equal(msg1.msg, 'grandchild stream')
      t.equal(msg1.child, 'one')
      t.equal(msg1.grandchild, 'two')

      const msg2 = messages[1]
      t.equal(msg2.msg, 'grandchild stream')
      t.equal(msg2.child, 'one')
      t.equal(msg2.grandchild, 'two')

      const msg3 = messages[2]
      t.equal(msg3.msg, 'debug grandchild')
      t.equal(msg3.child, 'one')
      t.equal(msg3.grandchild, 'two')

      t.end()
    }
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams)).child({ child: 'one' }).child({ grandchild: 'two' })
  log.info('grandchild stream')
  log.debug('debug grandchild')
})

test('supports custom levels', function (t) {
  const stream = writeStream(function (data, enc, cb) {
    t.equal(JSON.parse(data).msg, 'bar')
    t.end()
  })
  const log = pino({
    customLevels: {
      foo: 35
    }
  }, multistream([{ level: 35, stream }]))
  log.foo('bar')
})

test('supports pretty print', function (t) {
  t.plan(2)
  const stream = writeStream(function (data, enc, cb) {
    t.not(strip(data.toString()).match(/INFO.*: pretty print/), null)
    cb()
  })

  const safeBoom = proxyquire('pino-pretty/lib/utils/build-safe-sonic-boom.js', {
    'sonic-boom': function () {
      t.pass('sonic created')
      stream.flushSync = () => {}
      stream.flush = () => {}
      return stream
    }
  })
  const nested = proxyquire('pino-pretty/lib/utils/index.js', {
    './build-safe-sonic-boom.js': safeBoom
  })
  const pretty = proxyquire('pino-pretty', {
    './lib/utils/index.js': nested
  })

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream([
    { stream: pretty() }
  ]))

  log.info('pretty print')
})

test('emit propagates events to each stream', function (t) {
  t.plan(3)
  const handler = function (data) {
    t.equal(data.msg, 'world')
  }
  const streams = [sink(), sink(), sink()]
  streams.forEach(function (s) {
    s.once('hello', handler)
  })
  const stream = multistream(streams)
  stream.emit('hello', { msg: 'world' })
})

test('children support custom levels', function (t) {
  const stream = writeStream(function (data, enc, cb) {
    t.equal(JSON.parse(data).msg, 'bar')
    t.end()
  })
  const parent = pino({
    customLevels: {
      foo: 35
    }
  }, multistream([{ level: 35, stream }]))
  const child = parent.child({ child: 'yes' })
  child.foo('bar')
})

test('levelVal overrides level', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'blabla', levelVal: 15, stream },
    { level: 60, stream }
  ]
  const log = pino({
    level: 'debug'
  }, multistream(streams))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 6)
  t.end()
})

test('forwards metadata', function (t) {
  t.plan(4)
  const streams = [
    {
      stream: {
        [Symbol.for('pino.metadata')]: true,
        write (chunk) {
          t.equal(log, this.lastLogger)
          t.equal(30, this.lastLevel)
          t.same({ hello: 'world' }, this.lastObj)
          t.same('a msg', this.lastMsg)
        }
      }
    }
  ]

  const log = pino({
    level: 'debug'
  }, multistream(streams))

  log.info({ hello: 'world' }, 'a msg')
  t.end()
})

test('forward name', function (t) {
  t.plan(2)
  const streams = [
    {
      stream: {
        [Symbol.for('pino.metadata')]: true,
        write (chunk) {
          const line = JSON.parse(chunk)
          t.equal(line.name, 'helloName')
          t.equal(line.hello, 'world')
        }
      }
    }
  ]

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream(streams))

  log.info({ hello: 'world' }, 'a msg')
  t.end()
})

test('forward name with child', function (t) {
  t.plan(3)
  const streams = [
    {
      stream: {
        write (chunk) {
          const line = JSON.parse(chunk)
          t.equal(line.name, 'helloName')
          t.equal(line.hello, 'world')
          t.equal(line.component, 'aComponent')
        }
      }
    }
  ]

  const log = pino({
    level: 'debug',
    name: 'helloName'
  }, multistream(streams)).child({ component: 'aComponent' })

  log.info({ hello: 'world' }, 'a msg')
  t.end()
})

test('clone generates a new multistream with all stream at the same level', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream },
    { level: 'fatal', stream }
  ]
  const ms = multistream(streams)
  const clone = ms.clone(30)

  t.not(clone, ms)

  clone.streams.forEach((s, i) => {
    t.not(s, streams[i])
    t.equal(s.stream, streams[i].stream)
    t.equal(s.level, 30)
  })

  const log = pino({
    level: 'trace'
  }, clone)

  log.info('info stream')
  log.debug('debug message not counted')
  log.fatal('fatal stream')
  t.equal(messageCount, 8)

  t.end()
})

test('one stream', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({
    level: 'trace'
  }, multistream({ stream, level: 'fatal' }))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 1)
  t.end()
})

test('dedupe', function (t) {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount -= 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'fatal'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))
  log.info('info stream')
  log.fatal('fatal stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 1)
  t.end()
})

test('dedupe when logs have different levels', function (t) {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 2
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'error'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))

  log.info('info stream')
  log.warn('warn stream')
  log.error('error streams')
  log.fatal('fatal streams')
  t.equal(messageCount, 6)
  t.end()
})

test('dedupe when some streams has the same level', function (t) {
  let messageCount = 0
  const stream1 = writeStream(function (data, enc, cb) {
    messageCount -= 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const stream3 = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const streams = [
    {
      stream: stream1,
      level: 'info'
    },
    {
      stream: stream2,
      level: 'fatal'
    },
    {
      stream: stream3,
      level: 'fatal'
    }
  ]

  const log = pino({
    level: 'trace'
  }, multistream(streams, { dedupe: true }))
  log.info('info stream')
  log.fatal('fatal streams')
  log.fatal('fatal streams')
  t.equal(messageCount, 3)
  t.end()
})

test('no stream', function (t) {
  const log = pino({
    level: 'trace'
  }, multistream())
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.end()
})

test('one stream', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const log = pino({
    level: 'trace'
  }, multistream(stream))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 2)
  t.end()
})

test('add a stream', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })

  const log = pino({
    level: 'trace'
  }, multistream().add(stream))
  log.info('info stream')
  log.debug('debug stream')
  log.fatal('fatal stream')
  t.equal(messageCount, 2)
  t.end()
})

test('remove a stream', function (t) {
  let messageCount1 = 0
  let messageCount2 = 0
  let messageCount3 = 0

  const stream1 = writeStream(function (data, enc, cb) {
    messageCount1 += 1
    cb()
  })

  const stream2 = writeStream(function (data, enc, cb) {
    messageCount2 += 1
    cb()
  })

  const stream3 = writeStream(function (data, enc, cb) {
    messageCount3 += 1
    cb()
  })

  const multi = multistream()
  const log = pino({ level: 'trace', sync: true }, multi)

  multi.add(stream1)
  const id1 = multi.lastId

  multi.add(stream2)
  const id2 = multi.lastId

  multi.add(stream3)
  const id3 = multi.lastId

  log.info('line')
  multi.remove(id1)

  log.info('line')
  multi.remove(id2)

  log.info('line')
  multi.remove(id3)

  log.info('line')
  multi.remove(Math.floor(Math.random() * 1000)) // non-existing id

  t.equal(messageCount1, 1)
  t.equal(messageCount2, 2)
  t.equal(messageCount3, 3)
  t.end()
})

test('multistream.add throws if not a stream', function (t) {
  try {
    pino({
      level: 'trace'
    }, multistream().add({}))
  } catch (_) {
    t.end()
  }
})

test('multistream throws if not a stream', function (t) {
  try {
    pino({
      level: 'trace'
    }, multistream({}))
  } catch (_) {
    t.end()
  }
})

test('multistream.write should not throw if one stream fails', function (t) {
  let messageCount = 0
  const stream = writeStream(function (data, enc, cb) {
    messageCount += 1
    cb()
  })
  const noopStream = pino.transport({
    target: join(__dirname, 'fixtures', 'noop-transport.js')
  })
  // eslint-disable-next-line
  noopStream.on('error', function (err) {
    // something went wrong while writing to noop stream, ignoring!
  })
  const log = pino({
    level: 'trace'
  },
  multistream([
    {
      level: 'trace',
      stream
    },
    {
      level: 'debug',
      stream: noopStream
    }
  ])
  )
  log.debug('0')
  noopStream.end()
  // noop stream is ending, should emit an error but not throw
  log.debug('1')
  log.debug('2')
  t.equal(messageCount, 3)
  t.end()
})

test('flushSync', function (t) {
  const tmp = file()
  const destination = pino.destination({ dest: tmp, sync: false, minLength: 4096 })
  const stream = multistream([{ level: 'info', stream: destination }])
  const log = pino({ level: 'info' }, stream)
  destination.on('ready', () => {
    log.info('foo')
    log.info('bar')
    stream.flushSync()
    t.equal(readFileSync(tmp, { encoding: 'utf-8' }).split('\n').length - 1, 2)
    log.info('biz')
    stream.flushSync()
    t.equal(readFileSync(tmp, { encoding: 'utf-8' }).split('\n').length - 1, 3)
    t.end()
  })
})

test('ends all streams', function (t) {
  t.plan(7)
  const stream = writeStream(function (data, enc, cb) {
    t.pass('message')
    cb()
  })
  stream.flushSync = function () {
    t.pass('flushSync')
  }
  // stream2 has no flushSync
  const stream2 = writeStream(function (data, enc, cb) {
    t.pass('message2')
    cb()
  })
  const streams = [
    { stream },
    { level: 'debug', stream },
    { level: 'trace', stream: stream2 },
    { level: 'fatal', stream },
    { level: 'silent', stream }
  ]
  const multi = multistream(streams)
  const log = pino({
    level: 'trace'
  }, multi)
  log.info('info stream')
  multi.end()
})
