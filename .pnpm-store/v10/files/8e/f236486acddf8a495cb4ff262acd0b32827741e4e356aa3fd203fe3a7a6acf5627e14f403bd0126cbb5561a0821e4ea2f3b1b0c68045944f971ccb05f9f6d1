'use strict'
const test = require('tape')
const fresh = require('import-fresh')
const pinoStdSerializers = require('pino-std-serializers')
const pino = require('../browser')

levelTest('fatal')
levelTest('error')
levelTest('warn')
levelTest('info')
levelTest('debug')
levelTest('trace')

test('silent level', ({ end, fail, pass }) => {
  const instance = pino({
    level: 'silent',
    browser: { write: fail }
  })
  instance.info('test')
  const child = instance.child({ test: 'test' })
  child.info('msg-test')
  // use setTimeout because setImmediate isn't supported in most browsers
  setTimeout(() => {
    pass()
    end()
  }, 0)
})

test('enabled false', ({ end, fail, pass }) => {
  const instance = pino({
    enabled: false,
    browser: { write: fail }
  })
  instance.info('test')
  const child = instance.child({ test: 'test' })
  child.info('msg-test')
  // use setTimeout because setImmediate isn't supported in most browsers
  setTimeout(() => {
    pass()
    end()
  }, 0)
})

test('throw if creating child without bindings', ({ end, throws }) => {
  const instance = pino()
  throws(() => instance.child())
  end()
})

test('stubs write, flush and ee methods on instance', ({ end, ok, is }) => {
  const instance = pino()

  ok(isFunc(instance.setMaxListeners))
  ok(isFunc(instance.getMaxListeners))
  ok(isFunc(instance.emit))
  ok(isFunc(instance.addListener))
  ok(isFunc(instance.on))
  ok(isFunc(instance.prependListener))
  ok(isFunc(instance.once))
  ok(isFunc(instance.prependOnceListener))
  ok(isFunc(instance.removeListener))
  ok(isFunc(instance.removeAllListeners))
  ok(isFunc(instance.listeners))
  ok(isFunc(instance.listenerCount))
  ok(isFunc(instance.eventNames))
  ok(isFunc(instance.write))
  ok(isFunc(instance.flush))

  is(instance.on(), undefined)

  end()
})

test('exposes levels object', ({ end, same }) => {
  same(pino.levels, {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: 'trace',
      20: 'debug',
      30: 'info',
      40: 'warn',
      50: 'error',
      60: 'fatal'
    }
  })

  end()
})

test('exposes faux stdSerializers', ({ end, ok, same }) => {
  ok(pino.stdSerializers)
  // make sure faux stdSerializers match pino-std-serializers
  for (const serializer in pinoStdSerializers) {
    ok(pino.stdSerializers[serializer], `pino.stdSerializers.${serializer}`)
  }
  // confirm faux methods return empty objects
  same(pino.stdSerializers.req(), {})
  same(pino.stdSerializers.mapHttpRequest(), {})
  same(pino.stdSerializers.mapHttpResponse(), {})
  same(pino.stdSerializers.res(), {})
  // confirm wrapping function is a passthrough
  const noChange = { foo: 'bar', fuz: 42 }
  same(pino.stdSerializers.wrapRequestSerializer(noChange), noChange)
  same(pino.stdSerializers.wrapResponseSerializer(noChange), noChange)
  end()
})

test('exposes err stdSerializer', ({ end, ok }) => {
  ok(pino.stdSerializers.err)
  ok(pino.stdSerializers.err(Error()))
  end()
})

consoleMethodTest('error')
consoleMethodTest('fatal', 'error')
consoleMethodTest('warn')
consoleMethodTest('info')
consoleMethodTest('debug')
consoleMethodTest('trace')
absentConsoleMethodTest('error', 'log')
absentConsoleMethodTest('warn', 'error')
absentConsoleMethodTest('info', 'log')
absentConsoleMethodTest('debug', 'log')
absentConsoleMethodTest('trace', 'log')

// do not run this with airtap
if (process.title !== 'browser') {
  test('in absence of console, log methods become noops', ({ end, ok }) => {
    const console = global.console
    delete global.console
    const instance = fresh('../browser')()
    global.console = console
    ok(fnName(instance.log).match(/noop/))
    ok(fnName(instance.fatal).match(/noop/))
    ok(fnName(instance.error).match(/noop/))
    ok(fnName(instance.warn).match(/noop/))
    ok(fnName(instance.info).match(/noop/))
    ok(fnName(instance.debug).match(/noop/))
    ok(fnName(instance.trace).match(/noop/))
    end()
  })
}

test('opts.browser.asObject logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      asObject: true
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.asObject uses opts.messageKey in logs', ({ end, ok, is }) => {
  const messageKey = 'message'
  const instance = require('../browser')({
    messageKey,
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o[messageKey], 'test')
        ok(o.time)
      }
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.asObjectBindingsOnly passes the bindings but keep the message unformatted', ({ end, ok, is, deepEqual }) => {
  const messageKey = 'message'
  const instance = require('../browser')({
    messageKey,
    browser: {
      asObjectBindingsOnly: true,
      write: function (o, msg, ...args) {
        is(o.level, 30)
        ok(o.time)
        is(msg, 'test %s')
        deepEqual(args, ['foo'])
      }
    }
  })

  instance.info('test %s', 'foo')
  end()
})

test('opts.browser.formatters (level) logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.label, 'info')
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      formatters: {
        level (label, number) {
          return { label, level: number }
        }
      }
    }
  })

  instance.info('test')
  end()
})

test('opts.browser.formatters (log) logs pino-like object to console', ({ end, ok, is }) => {
  const info = console.info
  console.info = function (o) {
    is(o.level, 30)
    is(o.msg, 'test')
    is(o.hello, 'world')
    is(o.newField, 'test')
    ok(o.time, `Logged at ${o.time}`)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      formatters: {
        log (o) {
          return { ...o, newField: 'test', time: `Logged at ${o.time}` }
        }
      }
    }
  })

  instance.info({ hello: 'world' }, 'test')
  end()
})

test('opts.browser.serialize and opts.browser.transmit only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      transmit: {
        level: 'info',
        send (level, o) {
          is(o.messages[0].extras.serializedExtras, 'world')
        }
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.serialize and opts.asObject only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      asObject: true,
      write: function (o) {
        is(o.extras.serializedExtras, 'world')
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.serialize, opts.asObject and opts.browser.transmit only serializes log data once', ({ end, ok, is }) => {
  const instance = require('../browser')({
    serializers: {
      extras (data) {
        return { serializedExtras: data }
      }
    },
    browser: {
      serialize: ['extras'],
      asObject: true,
      transmit: {
        send (level, o) {
          is(o.messages[0].extras.serializedExtras, 'world')
        }
      }
    }
  })

  instance.info({ extras: 'world' }, 'test')
  end()
})

test('opts.browser.write func log single string', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test')
        ok(o.time)
      }
    }
  })
  instance.info('test')

  end()
})

test('opts.browser.write func string joining', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test test2 test3')
        ok(o.time)
      }
    }
  })
  instance.info('test %s %s', 'test2', 'test3')

  end()
})

test('opts.browser.write func string joining when asObject is true', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test test2 test3')
        ok(o.time)
      }
    }
  })
  instance.info('test %s %s', 'test2', 'test3')

  end()
})

test('opts.browser.write func string object joining', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test {"test":"test2"} {"test":"test3"}')
        ok(o.time)
      }
    }
  })
  instance.info('test %j %j', { test: 'test2' }, { test: 'test3' })

  end()
})

test('opts.browser.write func string object joining when asObject is true', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      asObject: true,
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test {"test":"test2"} {"test":"test3"}')
        ok(o.time)
      }
    }
  })
  instance.info('test %j %j', { test: 'test2' }, { test: 'test3' })

  end()
})

test('opts.browser.write func string interpolation', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 'test2 test ({"test":"test3"})')
        ok(o.time)
      }
    }
  })
  instance.info('%s test (%j)', 'test2', { test: 'test3' })

  end()
})

test('opts.browser.write func number', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.msg, 1)
        ok(o.time)
      }
    }
  })
  instance.info(1)

  end()
})

test('opts.browser.write func log single object', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: function (o) {
        is(o.level, 30)
        is(o.test, 'test')
        ok(o.time)
      }
    }
  })
  instance.info({ test: 'test' })

  end()
})

test('opts.browser.write obj writes to methods corresponding to level', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write: {
        error: function (o) {
          is(o.level, 50)
          is(o.test, 'test')
          ok(o.time)
        }
      }
    }
  })
  instance.error({ test: 'test' })

  end()
})

test('opts.browser.asObject/write supports child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject/write supports child child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.foo, 'bar')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' }).child({ foo: 'bar' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject/write supports child child child loggers', ({ end, ok, is }) => {
  const instance = pino({
    browser: {
      write (o) {
        is(o.level, 30)
        is(o.test, 'test')
        is(o.foo, 'bar')
        is(o.baz, 'bop')
        is(o.msg, 'msg-test')
        ok(o.time)
      }
    }
  })
  const child = instance.child({ test: 'test' }).child({ foo: 'bar' }).child({ baz: 'bop' })
  child.info('msg-test')

  end()
})

test('opts.browser.asObject defensively mitigates naughty numbers', ({ end, pass }) => {
  const instance = pino({
    browser: { asObject: true, write: () => {} }
  })
  const child = instance.child({ test: 'test' })
  child._childLevel = -10
  child.info('test')
  pass() // if we reached here, there was no infinite loop, so, .. pass.

  end()
})

test('opts.browser.write obj falls back to console where a method is not supplied', ({ end, ok, is }) => {
  const info = console.info
  console.info = (o) => {
    is(o.level, 30)
    is(o.msg, 'test')
    ok(o.time)
    console.info = info
  }
  const instance = require('../browser')({
    browser: {
      write: {
        error (o) {
          is(o.level, 50)
          is(o.test, 'test')
          ok(o.time)
        }
      }
    }
  })
  instance.error({ test: 'test' })
  instance.info('test')

  end()
})

function levelTest (name) {
  test(name + ' logs', ({ end, is }) => {
    const msg = 'hello world'
    sink(name, (args) => {
      is(args[0], msg)
      end()
    })
    pino({ level: name })[name](msg)
  })

  test('passing objects at level ' + name, ({ end, is }) => {
    const msg = { hello: 'world' }
    sink(name, (args) => {
      is(args[0], msg)
      end()
    })
    pino({ level: name })[name](msg)
  })

  test('passing an object and a string at level ' + name, ({ end, is }) => {
    const a = { hello: 'world' }
    const b = 'a string'
    sink(name, (args) => {
      is(args[0], a)
      is(args[1], b)
      end()
    })
    pino({ level: name })[name](a, b)
  })

  test('formatting logs as ' + name, ({ end, is }) => {
    sink(name, (args) => {
      is(args[0], 'hello %d')
      is(args[1], 42)
      end()
    })
    pino({ level: name })[name]('hello %d', 42)
  })

  test('passing error at level ' + name, ({ end, is }) => {
    const err = new Error('myerror')
    sink(name, (args) => {
      is(args[0], err)
      end()
    })
    pino({ level: name })[name](err)
  })

  test('passing error with a serializer at level ' + name, ({ end, is }) => {
    // in browser - should have no effect (should not crash)
    const err = new Error('myerror')
    sink(name, (args) => {
      is(args[0].err, err)
      end()
    })
    const instance = pino({
      level: name,
      serializers: {
        err: pino.stdSerializers.err
      }
    })
    instance[name]({ err })
  })

  test('child logger for level ' + name, ({ end, is }) => {
    const msg = 'hello world'
    const parent = { hello: 'world' }
    sink(name, (args) => {
      is(args[0], parent)
      is(args[1], msg)
      end()
    })
    const instance = pino({ level: name })
    const child = instance.child(parent)
    child[name](msg)
  })

  test('child-child logger for level ' + name, ({ end, is }) => {
    const msg = 'hello world'
    const grandParent = { hello: 'world' }
    const parent = { hello: 'you' }
    sink(name, (args) => {
      is(args[0], grandParent)
      is(args[1], parent)
      is(args[2], msg)
      end()
    })
    const instance = pino({ level: name })
    const child = instance.child(grandParent).child(parent)
    child[name](msg)
  })
}

function consoleMethodTest (level, method) {
  if (!method) method = level
  test('pino().' + level + ' uses console.' + method, ({ end, is }) => {
    sink(method, (args) => {
      is(args[0], 'test')
      end()
    })
    const instance = require('../browser')({ level })
    instance[level]('test')
  })
}

function absentConsoleMethodTest (method, fallback) {
  test('in absence of console.' + method + ', console.' + fallback + ' is used', ({ end, is }) => {
    const fn = console[method]
    console[method] = undefined
    sink(fallback, function (args) {
      is(args[0], 'test')
      end()
      console[method] = fn
    })
    const instance = require('../browser')({ level: method })
    instance[method]('test')
  })
}

function isFunc (fn) { return typeof fn === 'function' }
function fnName (fn) {
  const rx = /^\s*function\s*([^(]*)/i
  const match = rx.exec(fn)
  return match && match[1]
}
function sink (method, fn) {
  if (method === 'fatal') method = 'error'
  const orig = console[method]
  console[method] = function () {
    console[method] = orig
    fn(Array.prototype.slice.call(arguments))
  }
}
