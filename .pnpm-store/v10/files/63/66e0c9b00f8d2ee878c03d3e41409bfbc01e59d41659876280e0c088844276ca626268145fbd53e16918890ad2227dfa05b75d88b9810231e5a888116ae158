import { http } from '../core/http'
import { AsyncHandlersController } from './async-handlers-controller'

it('respects initial handlers in the boundary', () => {
  {
    const controller = new AsyncHandlersController([])
    controller.boundary(() => {
      expect(controller.currentHandlers()).toEqual([])
    })()
  }

  {
    const initialHandlers = [http.get('/', () => {})]
    const controller = new AsyncHandlersController(initialHandlers)
    controller.boundary(() => {
      expect(controller.currentHandlers()).toEqual(initialHandlers)
    })()
  }
})

it('provides boundary-specific overrides', () => {
  const initialHandlers = [http.get('/one', () => {})]
  const controller = new AsyncHandlersController(initialHandlers)

  controller.boundary(() => {
    const runtimeHandlers = [http.get('/two', () => {})]
    controller.use(runtimeHandlers)
    expect(controller.currentHandlers()).toEqual([
      ...runtimeHandlers,
      ...initialHandlers,
    ])
  })()

  expect(controller.currentHandlers()).toEqual(initialHandlers)
})

it('resets the handlers in the boundary', () => {
  const initialHandlers = [http.get('/one', () => {})]
  const controller = new AsyncHandlersController(initialHandlers)

  controller.boundary(() => {
    const runtimeHandlers = [http.get('/two', () => {})]
    controller.use(runtimeHandlers)
    controller.reset([])

    expect(controller.currentHandlers()).toEqual(initialHandlers)
  })()

  expect(controller.currentHandlers()).toEqual(initialHandlers)
})
