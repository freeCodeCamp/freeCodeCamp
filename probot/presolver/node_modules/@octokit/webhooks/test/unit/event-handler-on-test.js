const simple = require('simple-mock')
const test = require('tap').test

const receiverOn = require('../../event-handler/on')

function noop () {}

const state = {
  hooks: []
}

test('receiver.on with invalid event name', t => {
  simple.mock(console, 'warn').callFn(function () {})
  receiverOn(state, 'foo', noop)
  t.equals(console.warn.callCount, 1)
  t.equals(console.warn.lastCall.arg, '"foo" is not a known webhook name (https://developer.github.com/v3/activity/events/types/)')

  simple.restore()
  t.end()
})
