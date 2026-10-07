'use strict'

const { test, teardown } = require('tap')
const fs = require('fs')
const os = require('os')
const path = require('path')

const files = []
let count = 0

function file () {
  const file = path.join(os.tmpdir(), `sonic-boom-${process.pid}-${process.hrtime().toString()}-${count++}`)
  files.push(file)
  return file
}

teardown(() => {
  const rmSync = fs.rmSync || fs.rmdirSync
  files.forEach((file) => {
    try {
      if (fs.existsSync(file)) {
        fs.statSync(file).isDirectory() ? rmSync(file, { recursive: true, maxRetries: 10 }) : fs.unlinkSync(file)
      }
    } catch (e) {
      console.log(e)
    }
  })
})

function runTests (buildTests) {
  test('sync false', (t) => {
    buildTests(t.test, false)
    t.end()
  })

  test('sync true', (t) => {
    buildTests(t.test, true)
    t.end()
  })
}

module.exports = { file, runTests }
