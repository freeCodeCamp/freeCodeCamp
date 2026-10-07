import { errorCodes } from '../../fastify.js'
import { test } from 'node:test'

test('errorCodes in ESM', async t => {
  // test a custom fastify error using errorCodes with ESM
  const customError = errorCodes.FST_ERR_VALIDATION('custom error message')
  t.assert.ok(typeof customError !== 'undefined')
  t.assert.ok(customError instanceof errorCodes.FST_ERR_VALIDATION)
  t.assert.strictEqual(customError.message, 'custom error message')
})
