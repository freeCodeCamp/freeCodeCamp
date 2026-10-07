'use strict'

const seen = Symbol('circular-ref-tag')
const rawSymbol = Symbol('pino-raw-err-ref')

const pinoErrProto = Object.create({}, {
  type: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  message: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  stack: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  aggregateErrors: {
    enumerable: true,
    writable: true,
    value: undefined
  },
  raw: {
    enumerable: false,
    get: function () {
      return this[rawSymbol]
    },
    set: function (val) {
      this[rawSymbol] = val
    }
  }
})
Object.defineProperty(pinoErrProto, rawSymbol, {
  writable: true,
  value: {}
})

module.exports = {
  pinoErrProto,
  pinoErrorSymbols: {
    seen,
    rawSymbol
  }
}
