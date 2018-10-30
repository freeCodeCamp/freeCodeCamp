const test = require('tap').test

const EventHandler = require('../../event-handler')
const pushEventPayload = require('../fixtures/push-payload')
const installationCreatedPayload = require('../fixtures/installation-created-payload')

test('events', t => {
  t.plan(5)

  const eventHandler = new EventHandler()

  const hooksCalled = []
  function hook1 () {
    return Promise.resolve()

      .then(() => {
        hooksCalled.push('hook1')
      })
  }
  function hook2 () {
    hooksCalled.push('hook2')
  }
  function hook3 () {
    hooksCalled.push('hook3')
  }
  function hook4 () {
    hooksCalled.push('hook4')
  }
  function hook5 () {
    hooksCalled.push('installation')
  }
  function hook6 () {
    hooksCalled.push('installation.created')
  }
  function hook7 (event) {
    hooksCalled.push(`* (${event.name})`)
  }

  eventHandler.on('push', hook1)
  eventHandler.on('push', hook2)
  eventHandler.on('push', hook3)
  eventHandler.on(['push'], hook4)
  eventHandler.on('installation', hook5)
  eventHandler.on('installation.created', hook6)
  eventHandler.on('*', hook7)

  eventHandler.removeListener('push', hook3)
  eventHandler.removeListener(['push'], hook4)
  eventHandler.removeListener('unknown', () => {})

  eventHandler.receive({
    id: '123',
    name: 'push',
    payload: pushEventPayload
  })

    .then(() => {
      return eventHandler.receive({
        id: '456',
        name: 'installation',
        payload: installationCreatedPayload
      })
    })

    .then(() => {
      t.deepEqual(hooksCalled, ['hook2', '* (push)', 'hook1', 'installation.created', 'installation', '* (installation)'])

      eventHandler.on('error', (error) => {
        t.pass('error event triggered')
        t.is(error.message, 'oops')
      })

      eventHandler.on('push', () => {
        throw new Error('oops')
      })

      return eventHandler.receive({
        id: '123',
        name: 'push',
        payload: pushEventPayload
      })
    })

    .catch(error => {
      t.is(error.errors.length, 1)
      t.is(error.errors[0].message, 'oops')
    })

    .catch(t.error)
})

test('options.transform', t => {
  t.plan(2)

  const eventHandler = EventHandler({
    transform: (event) => {
      t.is(event.id, '123')
      return 'funky'
    }
  })

  eventHandler.on('push', (event) => {
    t.is(event, 'funky')
  })

  eventHandler.receive({
    id: '123',
    name: 'push',
    payload: pushEventPayload
  })
})

test('async options.transform', t => {
  const eventHandler = EventHandler({
    transform: (event) => {
      return Promise.resolve('funky')
    }
  })

  eventHandler.on('push', (event) => {
    t.is(event, 'funky')
    t.end()
  })

  eventHandler.receive({
    id: '123',
    name: 'push',
    payload: pushEventPayload
  })
})
