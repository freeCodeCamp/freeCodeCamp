import * as os from 'node:os'
import { join } from 'node:path'
import fs from 'node:fs'
import { watchFileCreated } from '../helper'
import { test } from 'tap'
import pino from '../../'
import * as url from 'node:url'

const readFile = fs.promises.readFile

const { pid } = process
const hostname = os.hostname()

// A subset of the test from core.test.js, we don't need all of them to check for compatibility
function runTests(esVersion: string): void {
  test(`(ts -> ${esVersion}) pino.transport with file`, async ({ same, teardown }) => {
    const destination = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
      options: { destination }
    })
    teardown(transport.end.bind(transport))
    const instance = pino(transport)
    instance.info('hello')
    await watchFileCreated(destination)
    const result = JSON.parse(await readFile(destination, { encoding: 'utf8' }))
    delete result.time
    same(result, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })

  test(`(ts -> ${esVersion}) pino.transport with file URL`, async ({ same, teardown }) => {
    const destination = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      target: url.pathToFileURL(join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`)).href,
      options: { destination }
    })
    teardown(transport.end.bind(transport))
    const instance = pino(transport)
    instance.info('hello')
    await watchFileCreated(destination)
    const result = JSON.parse(await readFile(destination, { encoding: 'utf8' }))
    delete result.time
    same(result, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })

  test(`(ts -> ${esVersion}) pino.transport with two files`, async ({ same, teardown }) => {
    const dest1 = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const dest2 = join(
      os.tmpdir(),
      '_' + Math.random().toString(36).substr(2, 9)
    )
    const transport = pino.transport({
      targets: [{
        level: 'info',
        target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
        options: { destination: dest1 }
      }, {
        level: 'info',
        target: join(__dirname, '..', 'fixtures', 'ts', `to-file-transport.${esVersion}.cjs`),
        options: { destination: dest2 }
      }]
    })

    teardown(transport.end.bind(transport))

    const instance = pino(transport)
    instance.info('hello')

    await Promise.all([watchFileCreated(dest1), watchFileCreated(dest2)])

    const result1 = JSON.parse(await readFile(dest1, { encoding: 'utf8' }))
    delete result1.time
    same(result1, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
    const result2 = JSON.parse(await readFile(dest2, { encoding: 'utf8' }))
    delete result2.time
    same(result2, {
      pid,
      hostname,
      level: 30,
      msg: 'hello'
    })
  })
}

runTests('es5')
runTests('es6')
runTests('es2017')
runTests('esnext')
