'use strict'

const { once } = require('events')
const { join } = require('path')
const ThreadStream = require('thread-stream')
const { MessageChannel } = require('worker_threads')
const { test } = require('tap')

workerTest('transport-on-data.js')
workerTest('transport-async-iteration.js', ' when using async iteration')

function workerTest (filename, description = '') {
  test(`does not wait for pino to send config by default${description}`, function ({ same, plan }) {
    plan(4)
    const { port1, port2 } = new MessageChannel()
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', filename),
      workerData: { port: port1 },
      workerOpts: {
        transferList: [port1]
      }
    })

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

    const emptyPinoConfig = {
      levels: undefined,
      messageKey: undefined,
      errorKey: undefined
    }

    port2.on('message', function (message) {
      same(expected.shift(), message.data)
      same(emptyPinoConfig, message.pinoConfig)
    })

    const lines = expected.map(JSON.stringify).join('\n')
    stream.write(lines)
    stream.end()
  })

  test(`does not wait for pino to send config if transport is not expecting it${description}`, function ({ same, plan }) {
    plan(4)
    const { port1, port2 } = new MessageChannel()
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', filename),
      workerData: {
        port: port1,
        pinoWillSendConfig: true
      },
      workerOpts: {
        transferList: [port1]
      }
    })

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

    const emptyPinoConfig = {
      levels: undefined,
      messageKey: undefined,
      errorKey: undefined
    }

    const pinoConfig = {
      levels: {
        labels: { 30: 'info' },
        values: { info: 30 }
      },
      messageKey: 'msg',
      errorKey: 'err'
    }

    stream.emit('message', { code: 'PINO_CONFIG', config: pinoConfig })

    port2.on('message', function (message) {
      same(expected.shift(), message.data)
      same(emptyPinoConfig, message.pinoConfig)
    })

    const lines = expected.map(JSON.stringify).join('\n')
    stream.write(lines)
    stream.end()
  })

  test(`waits for the pino config when pino intends to send it and the transport requests it${description}`, function ({ same, plan }) {
    plan(4)
    const { port1, port2 } = new MessageChannel()
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', filename),
      workerData: {
        port: port1,
        pinoWillSendConfig: true,
        opts: {
          expectPinoConfig: true
        }
      },
      workerOpts: {
        transferList: [port1]
      }
    })

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

    const pinoConfig = {
      levels: {
        labels: { 30: 'info' },
        values: { info: 30 }
      },
      messageKey: 'msg',
      errorKey: 'err'
    }

    port2.on('message', function (message) {
      same(expected.shift(), message.data)
      same(pinoConfig, message.pinoConfig)
    })

    const lines = expected.map(JSON.stringify).join('\n')
    stream.emit('message', { code: 'PINO_CONFIG', config: pinoConfig })
    stream.write(lines)
    stream.end()
  })

  test(`continues to listen if it receives a message that is not PINO_CONFIG${description}`, function ({ same, plan }) {
    plan(4)
    const { port1, port2 } = new MessageChannel()
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', 'transport-on-data.js'),
      workerData: {
        port: port1,
        pinoWillSendConfig: true,
        opts: {
          expectPinoConfig: true
        }
      },
      workerOpts: {
        transferList: [port1]
      }
    })

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

    const pinoConfig = {
      levels: {
        labels: { 30: 'info' },
        values: { info: 30 }
      },
      messageKey: 'msg',
      errorKey: 'err'
    }

    port2.on('message', function (message) {
      same(expected.shift(), message.data)
      same(pinoConfig, message.pinoConfig)
    })

    const lines = expected.map(JSON.stringify).join('\n')
    stream.emit('message', 'not a PINO_CONFIG')
    stream.emit('message', { code: 'NOT_PINO_CONFIG', config: { levels: 'foo', messageKey: 'bar', errorKey: 'baz' } })
    stream.emit('message', { code: 'PINO_CONFIG', config: pinoConfig })
    stream.write(lines)
    stream.end()
  })

  test(`waits for the pino config even if it is sent after write${description}`, function ({ same, plan }) {
    plan(4)
    const { port1, port2 } = new MessageChannel()
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', filename),
      workerData: {
        port: port1,
        pinoWillSendConfig: true,
        opts: {
          expectPinoConfig: true
        }
      },
      workerOpts: {
        transferList: [port1]
      }
    })

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

    const pinoConfig = {
      levels: {
        labels: { 30: 'info' },
        values: { info: 30 }
      },
      messageKey: 'msg',
      errorKey: 'err'
    }

    port2.on('message', function (message) {
      same(expected.shift(), message.data)
      same(pinoConfig, message.pinoConfig)
    })

    const lines = expected.map(JSON.stringify).join('\n')
    stream.write(lines)
    stream.emit('message', { code: 'PINO_CONFIG', config: pinoConfig })
    stream.end()
  })

  test(`emits an error if the transport expects pino to send the config, but pino is not going to${description}`, async function ({ plan, same, ok }) {
    plan(2)
    const stream = new ThreadStream({
      filename: join(__dirname, 'fixtures', filename),
      workerData: {
        opts: {
          expectPinoConfig: true
        }
      }
    })
    const [err] = await once(stream, 'error')
    same(err.message, 'This transport is not compatible with the current version of pino. Please upgrade pino to the latest version.')
    ok(stream.destroyed)
  })
}

test('waits for the pino config when pipelining', function ({ same, plan }) {
  plan(2)
  const { port1, port2 } = new MessageChannel()
  const stream = new ThreadStream({
    filename: join(__dirname, 'fixtures', 'worker-pipeline.js'),
    workerData: {
      pinoWillSendConfig: true,
      targets: [{
        target: './transport-transform.js',
        options: {
          opts: { expectPinoConfig: true }
        }
      }, {
        target: './transport-on-data.js',
        options: {
          port: port1
        }
      }]
    },
    workerOpts: {
      transferList: [port1]
    }
  })

  const expected = [{
    level: 'info(30)',
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'HELLO WORLD',
    service: 'from transform'
  }, {
    level: 'info(30)',
    time: 1617955768092,
    pid: 2942,
    hostname: 'MacBook-Pro.local',
    msg: 'ANOTHER MESSAGE',
    prop: 42,
    service: 'from transform'
  }]

  const lines = [{
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
  }].map(JSON.stringify).join('\n')

  const pinoConfig = {
    levels: {
      labels: { 30: 'info' },
      values: { info: 30 }
    },
    messageKey: 'msg',
    errorKey: 'err'
  }

  port2.on('message', function (message) {
    same(expected.shift(), message.data)
  })

  stream.emit('message', { code: 'PINO_CONFIG', config: pinoConfig })
  stream.write(lines)
  stream.end()
})
