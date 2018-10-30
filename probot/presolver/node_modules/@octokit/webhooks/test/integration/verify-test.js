const test = require('tap').test

const verify = require('../../verify')

const eventPayload = {
  foo: 'bar'
}
const secret = 'mysecret'
const signature = 'sha1=d03207e4b030cf234e3447bac4d93add4c6643d8'

test('verify() without options throws', (t) => {
  t.throws(verify)
  t.end()
})

test('verify(undefined, eventPayload) without secret throws', (t) => {
  t.throws(verify.bind(null, undefined, eventPayload))
  t.end()
})

test('verify(secret) without eventPayload throws', (t) => {
  t.throws(verify.bind(null, secret))
  t.end()
})

test('verify(secret, eventPayload) without options.signature throws', (t) => {
  t.throws(verify.bind(null, secret, eventPayload))
  t.end()
})

test('verify(secret, eventPayload, signature) returns true for correct signature', (t) => {
  const signatureMatches = verify(secret, eventPayload, signature)
  t.is(signatureMatches, true)

  t.end()
})

test('verify(secret, eventPayload, signature) returns false for incorrect signature', (t) => {
  const signatureMatches = verify(secret, eventPayload, 'foo')
  t.is(signatureMatches, false)

  t.end()
})

test('verify(secret, eventPayload, signature) returns false for correct secret', (t) => {
  const signatureMatches = verify('foo', eventPayload, signature)
  t.is(signatureMatches, false)

  t.end()
})
