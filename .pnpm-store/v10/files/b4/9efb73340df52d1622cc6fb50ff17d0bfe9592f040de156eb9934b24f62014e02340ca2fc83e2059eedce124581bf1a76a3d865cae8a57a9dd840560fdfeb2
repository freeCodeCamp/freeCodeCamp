'use strict'

const { test } = require('tap')

test('should import', async (t) => {
  t.plan(2)
  const mockRealRequire = (target) => {
    return {
      default: {
        default: () => {
          t.equal(target, 'pino-pretty')
          return Promise.resolve()
        }
      }
    }
  }
  const mockRealImport = async () => { await Promise.resolve(); throw Object.assign(new Error(), { code: 'ERR_MODULE_NOT_FOUND' }) }

  /** @type {typeof import('../lib/transport-stream.js')} */
  const loadTransportStreamBuilder = t.mock('../lib/transport-stream.js', { 'real-require': { realRequire: mockRealRequire, realImport: mockRealImport } })

  const fn = await loadTransportStreamBuilder('pino-pretty')

  t.resolves(fn())
  t.end()
})
