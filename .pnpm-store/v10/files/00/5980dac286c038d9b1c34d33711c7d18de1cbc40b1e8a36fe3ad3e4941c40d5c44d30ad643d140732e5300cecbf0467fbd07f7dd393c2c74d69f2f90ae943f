import { AsyncLocalStorage } from 'node:async_hooks'
import {
  HandlersController,
  type AnyHandler,
  type HandlersMap,
  type HandlersControllerState,
} from '#core/experimental/handlers-controller'

export interface AsyncHandlersControllerContext {
  initialHandlers: HandlersMap
  handlers: HandlersMap
}

export class AsyncHandlersController extends HandlersController {
  #asyncContext: AsyncLocalStorage<AsyncHandlersControllerContext>
  #fallbackContext: AsyncHandlersControllerContext

  constructor(initialHandlers: Array<AnyHandler>) {
    super()

    const initialState = this.getInitialState(initialHandlers)

    this.#asyncContext = new AsyncLocalStorage()
    this.#fallbackContext = {
      initialHandlers: initialState.initialHandlers,
      handlers: initialState.handlers,
    }
  }

  protected getState() {
    const { initialHandlers, handlers } = this.#getContext()

    return {
      initialHandlers,
      handlers,
    }
  }

  protected setState(nextState: HandlersControllerState): void {
    const context = this.#getContext()

    if (nextState.initialHandlers) {
      context.initialHandlers = nextState.initialHandlers
    }

    if (nextState.handlers) {
      context.handlers = nextState.handlers
    }
  }

  public boundary<Args extends Array<any>, R>(callback: (...args: Args) => R) {
    return (...args: Args) => {
      const initialHandlers = { ...this.getState().handlers }

      return this.#asyncContext.run(
        {
          initialHandlers,
          handlers: { ...initialHandlers },
        },
        callback,
        ...args,
      )
    }
  }

  #getContext() {
    return this.#asyncContext.getStore() || this.#fallbackContext
  }
}
