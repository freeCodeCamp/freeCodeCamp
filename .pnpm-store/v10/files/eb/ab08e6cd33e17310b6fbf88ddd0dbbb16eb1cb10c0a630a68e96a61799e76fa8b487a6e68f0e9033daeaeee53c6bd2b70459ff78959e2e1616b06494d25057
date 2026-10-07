'use strict'

const FakeTimers = require('@sinonjs/fake-timers')
const fs = require('fs')
const SonicBoom = require('../')
const { file, runTests } = require('./helper')

runTests(buildTests)

function buildTests (test, sync) {
  // Reset the umask for testing
  process.umask(0o000)

  test('periodicflush_off', (t) => {
    t.plan(4)

    const clock = FakeTimers.install()
    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync, minLength: 5000 })

    t.ok(stream.write('hello world\n'))

    setTimeout(function () {
      fs.readFile(dest, 'utf8', function (err, data) {
        t.error(err)
        t.equal(data, '')

        stream.destroy()
        t.pass('file empty')
      })
    }, 2000)

    clock.tick(2000)
    clock.uninstall()
  })

  test('periodicflush_on', (t) => {
    t.plan(4)

    const clock = FakeTimers.install()
    const dest = file()
    const fd = fs.openSync(dest, 'w')
    const stream = new SonicBoom({ fd, sync, minLength: 5000, periodicFlush: 1000 })

    t.ok(stream.write('hello world\n'))

    setTimeout(function () {
      fs.readFile(dest, 'utf8', function (err, data) {
        t.error(err)
        t.equal(data, 'hello world\n')

        stream.destroy()
        t.pass('file not empty')
      })
    }, 2000)

    clock.tick(2000)
    clock.uninstall()
  })
}
