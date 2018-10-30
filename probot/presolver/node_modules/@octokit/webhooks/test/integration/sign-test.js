const test = require('tap').test

const sign = require('../../sign')

const eventPayload = {
  foo: 'bar'
}
const secret = 'mysecret'

test('sign() without options throws', (t) => {
  t.throws(sign)
  t.end()
})

test('sign(undefined, eventPayload) without secret throws', (t) => {
  t.throws(sign.bind(null, undefined, eventPayload))
  t.end()
})

test('sign(secret) without eventPayload throws', (t) => {
  t.throws(sign.bind(null, secret))
  t.end()
})

test('sign(secret, eventPayload) with eventPayload as object returns expected signature', (t) => {
  const signature = sign(secret, eventPayload)
  t.is(signature, 'sha1=d03207e4b030cf234e3447bac4d93add4c6643d8')

  t.end()
})

test('sign(secret, eventPayload) with eventPayload as string returns expected signature', (t) => {
  const signature = sign(secret, JSON.stringify(eventPayload))
  t.is(signature, 'sha1=d03207e4b030cf234e3447bac4d93add4c6643d8')

  t.end()
})
