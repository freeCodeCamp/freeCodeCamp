'use strict'

const tap = require('tap')
const rimraf = require('rimraf')
const fs = require('fs')
const { join } = require('path')

const buildSafeSonicBoom = require('./build-safe-sonic-boom')

function noop () {}

const file = () => {
  const dest = join(__dirname, `${process.pid}-${process.hrtime().toString()}`)
  const fd = fs.openSync(dest, 'w')
  return { dest, fd }
}

tap.test('should not write when error emitted and code is "EPIPE"', async t => {
  t.plan(1)

  const { fd, dest } = file()
  const stream = buildSafeSonicBoom({ sync: true, fd, mkdir: true })
  t.teardown(() => rimraf(dest, noop))

  stream.emit('error', { code: 'EPIPE' })
  stream.write('will not work')

  const dataFile = fs.readFileSync(dest)
  t.equal(dataFile.length, 0)
})

tap.test('should stream.write works when error code is not "EPIPE"', async t => {
  t.plan(3)
  const { fd, dest } = file()
  const stream = buildSafeSonicBoom({ sync: true, fd, mkdir: true })

  t.teardown(() => rimraf(dest, noop))

  stream.on('error', () => t.pass('error emitted'))

  stream.emit('error', 'fake error description')

  t.ok(stream.write('will work'))

  const dataFile = fs.readFileSync(dest)
  t.equal(dataFile.toString(), 'will work')
})

tap.test('cover setupOnExit', async t => {
  t.plan(3)
  const { fd, dest } = file()
  const stream = buildSafeSonicBoom({ sync: false, fd, mkdir: true })

  t.teardown(() => rimraf(dest, noop))

  stream.on('error', () => t.pass('error emitted'))
  stream.emit('error', 'fake error description')

  t.ok(stream.write('will work'))

  await watchFileCreated(dest)

  const dataFile = fs.readFileSync(dest)
  t.equal(dataFile.toString(), 'will work')
})

function watchFileCreated (filename) {
  return new Promise((resolve, reject) => {
    const TIMEOUT = 2000
    const INTERVAL = 100
    const threshold = TIMEOUT / INTERVAL
    let counter = 0
    const interval = setInterval(() => {
      // On some CI runs file is created but not filled
      if (fs.existsSync(filename) && fs.statSync(filename).size !== 0) {
        clearInterval(interval)
        resolve()
      } else if (counter <= threshold) {
        counter++
      } else {
        clearInterval(interval)
        reject(new Error(`${filename} was not created.`))
      }
    }, INTERVAL)
  })
}
