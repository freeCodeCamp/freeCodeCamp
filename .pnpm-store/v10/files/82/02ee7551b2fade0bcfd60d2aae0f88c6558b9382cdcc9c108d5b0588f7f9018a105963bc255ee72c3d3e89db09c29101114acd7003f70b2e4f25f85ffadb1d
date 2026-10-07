import { http } from '../http'
import { graphql } from '../graphql'
import { ws } from '../ws'
import { getSiblingHandlers } from '../utils/internal/attachSiblingHandlers'
import { InMemoryHandlersController } from './handlers-controller'

describe('constructor', () => {
  it('places the sibling in its own kind bucket', () => {
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)

    const controller = new InMemoryHandlersController([wsHandler])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsHandler])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })

  it('interleaves the sibling at the owner position when grouping by kind', () => {
    const httpOne = http.get('/', () => {})
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)
    const httpTwo = http.get('/', () => {})

    const controller = new InMemoryHandlersController([
      httpOne,
      wsHandler,
      httpTwo,
    ])

    expect(controller.getHandlersByKind('request')).toEqual([
      httpOne,
      upgradeHandler,
      httpTwo,
    ])
    expect(controller.getHandlersByKind('websocket')).toEqual([wsHandler])
  })

  it('extracts siblings from every owner in the input list', () => {
    const wsOne = ws.link('*').addEventListener('connection', () => {})
    const wsTwo = ws.link('*').addEventListener('connection', () => {})
    const [upgradeOne] = getSiblingHandlers(wsOne)
    const [upgradeTwo] = getSiblingHandlers(wsTwo)

    const controller = new InMemoryHandlersController([wsOne, wsTwo])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsOne, wsTwo])
    expect(controller.getHandlersByKind('request')).toEqual([
      upgradeOne,
      upgradeTwo,
    ])
  })

  it('dedupes the shared upgrade sibling across multiple handlers from the same link', () => {
    const chat = ws.link('*')
    const wsOne = chat.addEventListener('connection', () => {})
    const wsTwo = chat.addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsOne)

    const controller = new InMemoryHandlersController([wsOne, wsTwo])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsOne, wsTwo])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })
})

describe(InMemoryHandlersController.prototype.use, () => {
  it('prepends a handler to an empty controller', () => {
    const controller = new InMemoryHandlersController([])
    const httpHandler = http.get('/', () => {})
    controller.use([httpHandler])

    expect(controller.currentHandlers()).toEqual([httpHandler])
    expect(controller.getHandlersByKind('request')).toEqual([httpHandler])
  })

  it('prepends a single handler', () => {
    const httpOne = http.get('/', () => {})
    const httpTwo = http.get('/', () => {})

    const controller = new InMemoryHandlersController([httpOne])
    controller.use([httpTwo])

    expect(controller.currentHandlers()).toEqual([httpTwo, httpOne])
    expect(controller.getHandlersByKind('request')).toEqual([httpTwo, httpOne])
  })

  it('prepends multiple handlers', () => {
    const httpOne = http.get('/', () => {})
    const httpTwo = http.get('/', () => {})
    const httpThree = http.get('/', () => {})

    const controller = new InMemoryHandlersController([httpOne])

    controller.use([httpTwo, httpThree])

    expect(controller.currentHandlers()).toEqual([httpTwo, httpThree, httpOne])
    expect(controller.getHandlersByKind('request')).toEqual([
      httpTwo,
      httpThree,
      httpOne,
    ])
  })

  it('preserves order of handlers', () => {
    const httpOne = http.get('/', () => {})
    const graphqlOne = graphql.query('', () => {})
    const httpTwo = http.get('/', () => {})

    const controller = new InMemoryHandlersController([httpOne])
    controller.use([graphqlOne, httpTwo])

    expect(controller.currentHandlers()).toEqual([graphqlOne, httpTwo, httpOne])
  })

  it('propagates siblings to their kind buckets at runtime', () => {
    const controller = new InMemoryHandlersController([])
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)

    controller.use([wsHandler])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsHandler])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })

  it('prepends incoming siblings before existing handlers of the same kind', () => {
    const existingHttp = http.get('/existing', () => {})
    const controller = new InMemoryHandlersController([existingHttp])
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)

    controller.use([wsHandler])

    expect(controller.getHandlersByKind('request')).toEqual([
      upgradeHandler,
      existingHttp,
    ])
  })

  it('dedupes the shared upgrade sibling when called with multiple handlers from the same link', () => {
    const chat = ws.link('*')
    const wsOne = chat.addEventListener('connection', () => {})
    const wsTwo = chat.addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsOne)

    const controller = new InMemoryHandlersController([])
    controller.use([wsOne, wsTwo])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsOne, wsTwo])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })
})

describe(InMemoryHandlersController.prototype.reset, () => {
  it('resets to the initial handlers if called with an empty list', () => {
    {
      const controller = new InMemoryHandlersController([])
      controller.reset([])
      expect(controller.currentHandlers()).toEqual([])
    }

    {
      const httpHandler = http.get('/', () => {})
      const controller = new InMemoryHandlersController([httpHandler])

      controller.reset([])
      expect(controller.currentHandlers()).toEqual([httpHandler])
    }
  })

  it('replaces the initial handlers if called with a list of handlers', () => {
    const httpOne = http.get('/', () => {})
    const httpTwo = http.get('/', () => {})
    const controller = new InMemoryHandlersController([httpOne])

    controller.reset([httpTwo])
    expect(controller.currentHandlers()).toEqual([httpTwo])
  })

  it('resets the initial handlers after runtime handlers are applied', () => {
    const httpOne = http.get('/', () => {})
    const httpTwo = http.get('/', () => {})
    const controller = new InMemoryHandlersController([])
    controller.use([httpOne])

    controller.reset([httpTwo])
    expect(controller.currentHandlers()).toEqual([httpTwo])

    controller.reset([])
    /**
     * @note There's no way to "clear" the initial state via ".reset()".
     * You can only provide the next initial state. The public-facing ".resetHandlers()"
     * spread the arguments so there's no distinction between () and ([]).
     */
    expect(controller.currentHandlers()).toEqual([httpTwo])
  })

  it('places siblings into their kind buckets when resetting to next handlers', () => {
    const controller = new InMemoryHandlersController([])
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)

    controller.reset([wsHandler])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsHandler])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })

  it('restores siblings when resetting to the initial handlers', () => {
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsHandler)
    const controller = new InMemoryHandlersController([wsHandler])

    controller.use([http.get('/runtime', () => {})])
    controller.reset([])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsHandler])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })

  it('dedupes the shared upgrade sibling when reset with multiple handlers from the same link', () => {
    const chat = ws.link('*')
    const wsOne = chat.addEventListener('connection', () => {})
    const wsTwo = chat.addEventListener('connection', () => {})
    const [upgradeHandler] = getSiblingHandlers(wsOne)

    const controller = new InMemoryHandlersController([])
    controller.reset([wsOne, wsTwo])

    expect(controller.getHandlersByKind('websocket')).toEqual([wsOne, wsTwo])
    expect(controller.getHandlersByKind('request')).toEqual([upgradeHandler])
  })
})

describe(InMemoryHandlersController.prototype.getHandlersByKind, () => {
  it('returns an empty array given an empty controller', () => {
    const controller = new InMemoryHandlersController([])
    expect(controller.getHandlersByKind('request')).toEqual([])
  })

  it('returns an empty array given no handlers by the given kind', () => {
    expect(
      new InMemoryHandlersController([
        http.get('/', () => {}),
        graphql.query('', () => {}),
      ]).getHandlersByKind('websocket'),
    ).toEqual([])

    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    expect(
      new InMemoryHandlersController([wsHandler]).getHandlersByKind('request'),
    ).toEqual(getSiblingHandlers(wsHandler))
  })

  it('returns all handlers if they all match', () => {
    const httpHandler = http.get('/', () => {})
    const graphqlHandler = graphql.query('', () => {})
    const wsHandler = ws.link('*').addEventListener('connection', () => {})

    expect(
      new InMemoryHandlersController([
        httpHandler,
        graphqlHandler,
      ]).getHandlersByKind('request'),
    ).toEqual([httpHandler, graphqlHandler])

    expect(
      new InMemoryHandlersController([wsHandler]).getHandlersByKind(
        'websocket',
      ),
    ).toEqual([wsHandler])
  })

  it('returns only the matching handlers', () => {
    const httpHandler = http.get('/', () => {})
    const graphqlHandler = graphql.query('', () => {})
    const wsHandler = ws.link('*').addEventListener('connection', () => {})
    const wsHandlerSiblings = getSiblingHandlers(wsHandler)

    expect(
      new InMemoryHandlersController([
        httpHandler,
        graphqlHandler,
        wsHandler,
      ]).getHandlersByKind('request'),
    ).toEqual([httpHandler, graphqlHandler, ...wsHandlerSiblings])

    expect(
      new InMemoryHandlersController([
        httpHandler,
        graphqlHandler,
        wsHandler,
      ]).getHandlersByKind('websocket'),
    ).toEqual([wsHandler])
  })

  it('preserves the order of returned handlers', () => {
    const httpOne = http.get('/', () => {})
    const httpTwo = http.get('/', () => {})
    const httpThree = http.get('/', () => {})

    expect(
      new InMemoryHandlersController([
        httpOne,
        httpTwo,
        httpThree,
      ]).getHandlersByKind('request'),
    ).toEqual([httpOne, httpTwo, httpThree])

    const graphqlOne = graphql.query('', () => {})
    const graphqlTwo = graphql.query('', () => {})
    const graphqlThree = graphql.query('', () => {})

    expect(
      new InMemoryHandlersController([
        graphqlOne,
        graphqlTwo,
        graphqlThree,
      ]).getHandlersByKind('request'),
    ).toEqual([graphqlOne, graphqlTwo, graphqlThree])

    const wsOne = ws.link('*').addEventListener('connection', () => {})
    const wsTwo = ws.link('*').addEventListener('connection', () => {})
    const wsThree = ws.link('*').addEventListener('connection', () => {})

    expect(
      new InMemoryHandlersController([wsOne, wsTwo, wsThree]).getHandlersByKind(
        'websocket',
      ),
    ).toEqual([wsOne, wsTwo, wsThree])
  })
})
