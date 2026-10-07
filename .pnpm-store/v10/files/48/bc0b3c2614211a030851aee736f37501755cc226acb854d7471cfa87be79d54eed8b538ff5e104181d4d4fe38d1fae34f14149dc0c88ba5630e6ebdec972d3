'use strict'

const pino = require('../..')
const { join } = require('node:path')
const { readFileSync } = require('node:fs')
const { test } = require('tap')
const { file } = require('../helper')

test('thread-stream sync true should log synchronously', async (t) => {
  const outputPath = file()

  function getOutputLogLines () {
    return (readFileSync(outputPath)).toString().trim().split('\n').map(JSON.parse)
  }

  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination: outputPath, flush: true },
    sync: true
  })
  const instance = pino(transport)

  var value = { message: 'sync' }
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  instance.info(value)
  let interrupt = false
  let flushData
  let loopCounter = 0

  // Start a synchronous loop
  while (!interrupt && loopCounter < (process.env.MAX_TEST_LOOP_ITERATION || 20000)) {
    try {
      loopCounter++
      const data = getOutputLogLines()
      flushData = data
      if (data) {
        interrupt = true
        break
      }
    } catch (error) {
      // File may not exist yet
      // Wait till MAX_TEST_LOOP_ITERATION iterations
    }
  }

  if (!interrupt) {
    throw new Error('Sync loop did not get interrupt')
  }

  t.equal(flushData.length, 6)
})
