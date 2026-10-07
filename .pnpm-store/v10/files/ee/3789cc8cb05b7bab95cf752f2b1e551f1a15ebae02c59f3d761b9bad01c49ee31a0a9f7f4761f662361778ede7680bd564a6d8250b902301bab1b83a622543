'use strict'

function noop () { }

const proto = {
  fatal: noop,
  error: noop,
  warn: noop,
  info: noop,
  debug: noop,
  trace: noop
}

Object.defineProperty(module, 'exports', {
  get () {
    return Object.create(proto)
  }
})
