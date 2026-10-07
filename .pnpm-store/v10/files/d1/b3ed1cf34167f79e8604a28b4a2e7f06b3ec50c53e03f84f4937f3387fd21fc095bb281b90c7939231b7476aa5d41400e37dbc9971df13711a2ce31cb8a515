import { hostname } from 'node:os'
import t from 'tap'
import { sink, check, once, watchFileCreated, file } from '../helper.js'
import { pino, destination } from '../../pino.js'
import { readFileSync } from 'node:fs'

t.test('named exports support', async ({ equal }) => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('hello world')
  check(equal, await once(stream, 'data'), 30, 'hello world')
})

t.test('destination', async ({ same }) => {
  const tmp = file()
  const instance = pino(destination(tmp))
  instance.info('hello')
  await watchFileCreated(tmp)
  const result = JSON.parse(readFileSync(tmp).toString())
  delete result.time
  same(result, {
    pid: process.pid,
    hostname,
    level: 30,
    msg: 'hello'
  })
})
