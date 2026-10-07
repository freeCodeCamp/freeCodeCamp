'use strict'

// Pino's primary usage writes ndjson to `stdout`:
const pino = require('..')()

// However, if "human readable" output is desired,
// `pino-pretty` can be provided as the destination
// stream by uncommenting the following line in place
// of the previous declaration:
// const pino = require('..')(require('pino-pretty')())

pino.info('hello world')
pino.error('this is at error level')
pino.info('the answer is %d', 42)
pino.info({ obj: 42 }, 'hello world')
pino.info({ obj: 42, b: 2 }, 'hello world')
pino.info({ nested: { obj: 42 } }, 'nested')
setImmediate(() => {
  pino.info('after setImmediate')
})
pino.error(new Error('an error'))

const child = pino.child({ a: 'property' })
child.info('hello child!')

const childsChild = child.child({ another: 'property' })
childsChild.info('hello baby..')

pino.debug('this should be mute')

pino.level = 'trace'

pino.debug('this is a debug statement')

pino.child({ another: 'property' }).debug('this is a debug statement via child')
pino.trace('this is a trace statement')

pino.debug('this is a "debug" statement with "')

pino.info(new Error('kaboom'))
pino.info(null)

pino.info(new Error('kaboom'), 'with', 'a', 'message')
