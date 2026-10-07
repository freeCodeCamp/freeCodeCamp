const { bench, group, run } = require('mitata')
const slowRedact = require('../index.js')
const fastRedact = require('fast-redact')

// Test objects
const smallObj = {
  user: { name: 'john', password: 'secret123' },
  headers: { cookie: 'session-token', authorization: 'Bearer abc123' }
}

const largeObj = {
  users: [],
  metadata: {
    version: '1.0.0',
    secret: 'app-secret-key',
    database: {
      host: 'localhost',
      password: 'db-password'
    }
  }
}

// Populate users array with for loop instead of Array.from
for (let i = 0; i < 100; i++) {
  largeObj.users.push({
    id: i,
    name: `user${i}`,
    email: `user${i}@example.com`,
    password: `secret${i}`,
    profile: {
      age: 20 + (i % 50),
      preferences: {
        theme: 'dark',
        notifications: true,
        apiKey: `key-${i}-secret`
      }
    }
  })
}

// Redaction configurations
const basicSlowRedact = slowRedact({
  paths: ['user.password', 'headers.cookie']
})

const basicFastRedact = fastRedact({
  paths: ['user.password', 'headers.cookie']
})

const wildcardSlowRedact = slowRedact({
  paths: ['users.*.password', 'users.*.profile.preferences.apiKey']
})

const wildcardFastRedact = fastRedact({
  paths: ['users.*.password', 'users.*.profile.preferences.apiKey']
})

const deepSlowRedact = slowRedact({
  paths: ['metadata.secret', 'metadata.database.password']
})

const deepFastRedact = fastRedact({
  paths: ['metadata.secret', 'metadata.database.password']
})

group('Small Object Redaction - @pinojs/redact', () => {
  bench('basic paths', () => {
    basicSlowRedact(smallObj)
  })

  bench('serialize: false', () => {
    const redact = slowRedact({
      paths: ['user.password'],
      serialize: false
    })
    redact(smallObj)
  })

  bench('custom censor function', () => {
    const redact = slowRedact({
      paths: ['user.password'],
      censor: (value, path) => `HIDDEN:${path}`
    })
    redact(smallObj)
  })
})

group('Small Object Redaction - fast-redact', () => {
  bench('basic paths', () => {
    basicFastRedact(smallObj)
  })

  bench('serialize: false', () => {
    const redact = fastRedact({
      paths: ['user.password'],
      serialize: false
    })
    redact(smallObj)
  })

  bench('custom censor function', () => {
    const redact = fastRedact({
      paths: ['user.password'],
      censor: (value, path) => `HIDDEN:${path}`
    })
    redact(smallObj)
  })
})

group('Large Object Redaction - @pinojs/redact', () => {
  bench('wildcard patterns', () => {
    wildcardSlowRedact(largeObj)
  })

  bench('deep nested paths', () => {
    deepSlowRedact(largeObj)
  })

  bench('multiple wildcards', () => {
    const redact = slowRedact({
      paths: ['users.*.password', 'users.*.profile.preferences.*']
    })
    redact(largeObj)
  })
})

group('Large Object Redaction - fast-redact', () => {
  bench('wildcard patterns', () => {
    wildcardFastRedact(largeObj)
  })

  bench('deep nested paths', () => {
    deepFastRedact(largeObj)
  })

  bench('multiple wildcards', () => {
    const redact = fastRedact({
      paths: ['users.*.password', 'users.*.profile.preferences.*']
    })
    redact(largeObj)
  })
})

group('Direct Performance Comparison', () => {
  bench('@pinojs/redact - basic paths', () => {
    basicSlowRedact(smallObj)
  })

  bench('fast-redact - basic paths', () => {
    basicFastRedact(smallObj)
  })

  bench('@pinojs/redact - wildcards', () => {
    wildcardSlowRedact(largeObj)
  })

  bench('fast-redact - wildcards', () => {
    wildcardFastRedact(largeObj)
  })
})

group('Object Cloning Overhead', () => {
  bench('@pinojs/redact - no redaction (clone only)', () => {
    const redact = slowRedact({ paths: [] })
    redact(smallObj)
  })

  bench('fast-redact - no redaction', () => {
    const redact = fastRedact({ paths: [] })
    redact(smallObj)
  })

  bench('@pinojs/redact - large object clone', () => {
    const redact = slowRedact({ paths: [] })
    redact(largeObj)
  })

  bench('fast-redact - large object', () => {
    const redact = fastRedact({ paths: [] })
    redact(largeObj)
  })
})

run()
