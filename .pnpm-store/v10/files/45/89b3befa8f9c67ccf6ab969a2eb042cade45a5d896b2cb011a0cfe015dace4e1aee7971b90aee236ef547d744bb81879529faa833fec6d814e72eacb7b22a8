'use strict'

const { readFileSync } = require('node:fs')
const vm = require('vm')
const { join } = require('node:path')
const code = readFileSync(
  join(__dirname, '..', '..', 'node_modules', 'loglevel', 'lib', 'loglevel.js')
)
const { Console } = require('console')

function build (dest) {
  const sandbox = {
    module: {},
    console: new Console(dest, dest)
  }
  const context = vm.createContext(sandbox)

  const script = new vm.Script(code)
  script.runInContext(context)

  const loglevel = sandbox.log

  const originalFactory = loglevel.methodFactory
  loglevel.methodFactory = function (methodName, logLevel, loggerName) {
    const rawMethod = originalFactory(methodName, logLevel, loggerName)

    return function () {
      const time = new Date()
      let array
      if (typeof arguments[0] === 'string') {
        arguments[0] = '[' + time.toISOString() + '] ' + arguments[0]
        rawMethod.apply(null, arguments)
      } else {
        array = new Array(arguments.length + 1)
        array[0] = '[' + time.toISOString() + ']'
        for (var i = 0; i < arguments.length; i++) {
          array[i + 1] = arguments[i]
        }
        rawMethod.apply(null, array)
      }
    }
  }

  loglevel.setLevel(loglevel.levels.INFO)
  return loglevel
}

module.exports = build

if (require.main === module) {
  const loglevel = build(process.stdout)
  loglevel.info('hello')
  loglevel.info({ hello: 'world' })
  loglevel.info('hello %j', { hello: 'world' })
}
