'use strict'

// Node.js test comparing @pinojs/redact vs fast-redact for multiple wildcard patterns
// This test validates that @pinojs/redact correctly handles 3+ consecutive wildcards
// matching the behavior of fast-redact

const { test } = require('node:test')
const { strict: assert } = require('node:assert')
const fastRedact = require('fast-redact')
const slowRedact = require('../index.js')

// Helper function to test redaction and track which values were censored
function testRedactDirect (library, pattern, testData = {}) {
  const matches = []
  const redactor = library === '@pinojs/redact' ? slowRedact : fastRedact

  try {
    const redact = redactor({
      paths: [pattern],
      censor: (value, path) => {
        if (
          value !== undefined &&
          value !== null &&
          typeof value === 'string' &&
          value.includes('secret')
        ) {
          matches.push({
            value,
            path: path ? path.join('.') : 'unknown'
          })
        }
        return '[REDACTED]'
      }
    })

    redact(JSON.parse(JSON.stringify(testData)))

    return {
      library,
      pattern,
      matches,
      success: true,
      testData
    }
  } catch (error) {
    return {
      library,
      pattern,
      matches: [],
      success: false,
      error: error.message,
      testData
    }
  }
}

function testSlowRedactDirect (pattern, testData) {
  return testRedactDirect('@pinojs/redact', pattern, testData)
}

function testFastRedactDirect (pattern, testData) {
  return testRedactDirect('fast-redact', pattern, testData)
}

test('@pinojs/redact: *.password (2 levels)', () => {
  const result = testSlowRedactDirect('*.password', {
    simple: { password: 'secret-2-levels' }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-2-levels')
})

test('@pinojs/redact: *.*.password (3 levels)', () => {
  const result = testSlowRedactDirect('*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-3-levels')
})

test('@pinojs/redact: *.*.*.password (4 levels)', () => {
  const result = testSlowRedactDirect('*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-4-levels')
})

test('@pinojs/redact: *.*.*.*.password (5 levels)', () => {
  const result = testSlowRedactDirect('*.*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: {
      user: { auth: { settings: { password: 'secret-5-levels' } } }
    }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-5-levels')
})

test('@pinojs/redact: *.*.*.*.*.password (6 levels)', () => {
  const result = testSlowRedactDirect('*.*.*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: {
      user: { auth: { settings: { password: 'secret-5-levels' } } }
    },
    data: {
      reqConfig: {
        data: {
          credentials: {
            settings: {
              password: 'real-secret-6-levels'
            }
          }
        }
      }
    }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'real-secret-6-levels')
})

test('fast-redact: *.password (2 levels)', () => {
  const result = testFastRedactDirect('*.password', {
    simple: { password: 'secret-2-levels' }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-2-levels')
})

test('fast-redact: *.*.password (3 levels)', () => {
  const result = testFastRedactDirect('*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-3-levels')
})

test('fast-redact: *.*.*.password (4 levels)', () => {
  const result = testFastRedactDirect('*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-4-levels')
})

test('fast-redact: *.*.*.*.password (5 levels)', () => {
  const result = testFastRedactDirect('*.*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: {
      user: { auth: { settings: { password: 'secret-5-levels' } } }
    }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'secret-5-levels')
})

test('fast-redact: *.*.*.*.*.password (6 levels)', () => {
  const result = testFastRedactDirect('*.*.*.*.*.password', {
    simple: { password: 'secret-2-levels' },
    user: { auth: { password: 'secret-3-levels' } },
    nested: { deep: { auth: { password: 'secret-4-levels' } } },
    config: {
      user: { auth: { settings: { password: 'secret-5-levels' } } }
    },
    data: {
      reqConfig: {
        data: {
          credentials: {
            settings: {
              password: 'real-secret-6-levels'
            }
          }
        }
      }
    }
  })

  assert.strictEqual(result.success, true)
  assert.strictEqual(result.matches.length, 1)
  assert.strictEqual(result.matches[0].value, 'real-secret-6-levels')
})
