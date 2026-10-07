import createSagaMiddleware, { SagaIterator } from 'redux-saga'
import { StrictEffect } from 'redux-saga/effects'
import { applyMiddleware } from 'redux'

function testApplyMiddleware() {
  const middleware = createSagaMiddleware()

  const enhancer = applyMiddleware(middleware)
}

declare const effect: StrictEffect
declare const promise: Promise<any>

function testRun() {
  const middleware = createSagaMiddleware()

  middleware.run(function* saga(): SagaIterator {})

  // TODO: https://github.com/Microsoft/TypeScript/issues/28803
  {
    // // $ExpectError
    // middleware.run(function* saga(a: 'a'): SagaIterator {})
  }

  // $ExpectError
  middleware.run(function* saga(a: 'a'): SagaIterator {}, 1)

  middleware.run(function* saga(a: 'a'): SagaIterator {}, 'a')

  // TODO: https://github.com/Microsoft/TypeScript/issues/28803
  {
    // // $ExpectError
    // middleware.run(function* saga(a: 'a', b: 'b'): SagaIterator {}, 'a')
  }

  // $ExpectError
  middleware.run(function* saga(a: 'a', b: 'b'): SagaIterator {}, 'a', 1)

  // $ExpectError
  middleware.run(function* saga(a: 'a', b: 'b'): SagaIterator {}, 1, 'b')

  middleware.run(function* saga(a: 'a', b: 'b'): SagaIterator {}, 'a', 'b')

  // test with any iterator i.e. when generator doesn't always yield Effects.
  middleware.run(function* saga() {
    yield promise
  })
}

function testOptions() {
  const emptyOptions = createSagaMiddleware({})

  const withOptions = createSagaMiddleware({
    onError(error) {
      console.error(error)
    },

    sagaMonitor: {
      effectTriggered() {},
    },

    effectMiddlewares: [
      next => effect => {
        setTimeout(() => {
          next(effect)
        }, 10)
      },
      next => effect => {
        setTimeout(() => {
          next(effect)
        }, 10)
      },
    ],
  })

  const withMonitor = createSagaMiddleware({
    sagaMonitor: {
      effectTriggered() {},
      effectResolved() {},
      effectRejected() {},
      effectCancelled() {},
      actionDispatched() {},
    },
  })
}

function testContext() {
  interface Context {
    a: string
    b: number
  }

  // $ExpectError
  createSagaMiddleware<Context>({ context: { c: 42 } })

  // $ExpectError
  createSagaMiddleware({ context: 42 })

  const middleware = createSagaMiddleware<Context>({
    context: { a: '', b: 42 },
  })

  // $ExpectError
  middleware.setContext({ c: 42 })

  middleware.setContext({ b: 42 })

  const task = middleware.run(function*() {
    yield effect
  })
  task.setContext({ b: 42 })

  task.setContext<Context>({ a: '' })
  // $ExpectError
  task.setContext<Context>({ c: '' })
}
