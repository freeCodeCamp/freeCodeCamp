import t from 'tap'
import pino from '../../pino.js'
import helper from '../helper.js'

const { sink, check, once } = helper

t.test('esm support', async ({ equal }) => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('hello world')
  check(equal, await once(stream, 'data'), 30, 'hello world')
})
