// Run this to see how colouring works

const _prettyFactory = require('../../')
const pino = require('pino')
const { Writable } = require('readable-stream')

function prettyFactory () {
  return _prettyFactory({
    colorize: true
  })
}

const pretty = prettyFactory()
const formatted = pretty('this is not json\nit\'s just regular output\n')
console.log(formatted)

const opts = {
  base: {
    hostname: 'localhost',
    pid: process.pid
  }
}
const log = pino(opts, new Writable({
  write (chunk, enc, cb) {
    const formatted = pretty(chunk.toString())
    console.log(formatted)
    cb()
  }
}))

log.info('foobar')
