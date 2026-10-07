'use strict'

const os = require('node:os')
const pino = require('../..')
const { join } = require('node:path')
const { test } = require('tap')
const { readFile } = require('node:fs').promises
const { watchFileCreated, file } = require('../helper')
const { promisify } = require('node:util')

const { pid } = process
const hostname = os.hostname()

test('thread-stream async flush', async ({ equal, same }) => {
  const destination = file()
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination }
  })
  const instance = pino(transport)
  instance.info('hello')

  equal(instance.flush(), undefined)

  await watchFileCreated(destination)
  const result = JSON.parse(await readFile(destination))
  delete result.time
  same(result, {
    pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})

test('thread-stream async flush should call the passed callback', async (t) => {
  const outputPath = file()
  async function getOutputLogLines () {
    return (await readFile(outputPath)).toString().trim().split('\n').map(JSON.parse)
  }
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'to-file-transport.js'),
    options: { destination: outputPath }
  })
  const instance = pino(transport)
  const flushPromise = promisify(instance.flush).bind(instance)

  instance.info('hello')
  await flushPromise()
  await watchFileCreated(outputPath)

  const [firstFlushData] = await getOutputLogLines()

  t.equal(firstFlushData.msg, 'hello')

  // should not flush this as no data accumulated that's bigger than min length
  instance.info('world')

  // Making sure data is not flushed yet
  const afterLogData = await getOutputLogLines()
  t.equal(afterLogData.length, 1)

  await flushPromise()

  // Making sure data is not flushed yet
  const afterSecondFlush = (await getOutputLogLines())[1]
  t.equal(afterSecondFlush.msg, 'world')
})
