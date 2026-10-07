'use strict'
// eslint-disable-next-line
if (typeof $1 !== 'undefined') $1 = arguments.callee.caller.arguments[0]

const test = require('tape')
const fresh = require('import-fresh')
const pino = require('../browser')

const parentSerializers = {
  test: () => 'parent'
}

const childSerializers = {
  test: () => 'child'
}

test('serializers override values', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'parent')
        end()
      }
    }
  })

  parent.fatal({ test: 'test' })
})

test('without the serialize option, serializers do not override values', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      write (o) {
        is(o.test, 'test')
        end()
      }
    }
  })

  parent.fatal({ test: 'test' })
})

if (process.title !== 'browser') {
  test('if serialize option is true, standard error serializer is auto enabled', ({ end, same }) => {
    const err = Error('test')
    err.code = 'test'
    err.type = 'Error' // get that cov
    const expect = pino.stdSerializers.err(err)

    const consoleError = console.error
    console.error = function (err) {
      same(err, expect)
    }

    const logger = fresh('../browser')({
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('if serialize option is array, standard error serializer is auto enabled', ({ end, same }) => {
    const err = Error('test')
    err.code = 'test'
    const expect = pino.stdSerializers.err(err)

    const consoleError = console.error
    console.error = function (err) {
      same(err, expect)
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: [] }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('if serialize option is array containing !stdSerializers.err, standard error serializer is disabled', ({ end, is }) => {
    const err = Error('test')
    err.code = 'test'
    const expect = err

    const consoleError = console.error
    console.error = function (err) {
      is(err, expect)
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['!stdSerializers.err'] }
    })

    console.error = consoleError

    logger.fatal(err)
    end()
  })

  test('in browser, serializers apply to all objects', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (test, test2, test3, test4, test5) {
      is(test.key, 'serialized')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'serialized3')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      },
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize can be an array of selected serializers', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      },
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize filter applies to child loggers', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding, test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.child({
      aBinding: 'test'
    }, {
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      }
    }).fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('serialize filter applies to child loggers through bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding, test, test2, test3, test4, test5) {
      is(test.key, 'test')
      is(test2.key2, 'serialized2')
      is(test5.key3, 'test')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: ['key2'] }
    })

    console.error = consoleError

    logger.child({
      aBinding: 'test',
      serializers: {
        key: () => 'serialized',
        key2: () => 'serialized2',
        key3: () => 'serialized3'
      }
    }).fatal({ key: 'test' }, { key2: 'test' }, 'str should skip', [{ foo: 'array should skip' }], { key3: 'test' })
    end()
  })

  test('parent serializers apply to child bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding) {
      is(binding.key, 'serialized')
    }

    const logger = fresh('../browser', require)({
      serializers: {
        key: () => 'serialized'
      },
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.child({ key: 'test' }).fatal({ test: 'test' })
    end()
  })

  test('child serializers apply to child bindings', ({ end, is }) => {
    const consoleError = console.error
    console.error = function (binding) {
      is(binding.key, 'serialized')
    }

    const logger = fresh('../browser', require)({
      browser: { serialize: true }
    })

    console.error = consoleError

    logger.child({
      key: 'test'
    }, {
      serializers: {
        key: () => 'serialized'
      }
    }).fatal({ test: 'test' })
    end()
  })
}

test('child does not overwrite parent serializers', ({ end, is }) => {
  let c = 0
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        c++
        if (c === 1) is(o.test, 'parent')
        if (c === 2) {
          is(o.test, 'child')
          end()
        }
      }
    }
  })
  const child = parent.child({}, { serializers: childSerializers })

  parent.fatal({ test: 'test' })
  child.fatal({ test: 'test' })
})

test('children inherit parent serializers', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'parent')
      }
    }
  })

  const child = parent.child({ a: 'property' })
  child.fatal({ test: 'test' })
  end()
})

test('children serializers get called', ({ end, is }) => {
  const parent = pino({
    browser: {
      serialize: true,
      write (o) {
        is(o.test, 'child')
      }
    }
  })

  const child = parent.child({ a: 'property' }, { serializers: childSerializers })

  child.fatal({ test: 'test' })
  end()
})

test('children serializers get called when inherited from parent', ({ end, is }) => {
  const parent = pino({
    serializers: parentSerializers,
    browser: {
      serialize: true,
      write: (o) => {
        is(o.test, 'pass')
      }
    }
  })

  const child = parent.child({}, { serializers: { test: () => 'pass' } })

  child.fatal({ test: 'fail' })
  end()
})

test('non overridden serializers are available in the children', ({ end, is }) => {
  const pSerializers = {
    onlyParent: () => 'parent',
    shared: () => 'parent'
  }

  const cSerializers = {
    shared: () => 'child',
    onlyChild: () => 'child'
  }

  let c = 0

  const parent = pino({
    serializers: pSerializers,
    browser: {
      serialize: true,
      write (o) {
        c++
        if (c === 1) is(o.shared, 'child')
        if (c === 2) is(o.onlyParent, 'parent')
        if (c === 3) is(o.onlyChild, 'child')
        if (c === 4) is(o.onlyChild, 'test')
      }
    }
  })

  const child = parent.child({}, { serializers: cSerializers })

  child.fatal({ shared: 'test' })
  child.fatal({ onlyParent: 'test' })
  child.fatal({ onlyChild: 'test' })
  parent.fatal({ onlyChild: 'test' })
  end()
})
