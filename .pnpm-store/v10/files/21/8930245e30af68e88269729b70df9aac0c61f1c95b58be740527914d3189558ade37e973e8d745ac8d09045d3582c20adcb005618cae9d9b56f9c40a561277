import { invariant } from 'outvariant'
import { type RequestHandler } from '../handlers/RequestHandler'
import { type WebSocketHandler } from '../handlers/WebSocketHandler'
import { devUtils } from '../utils/internal/devUtils'
import { getSiblingHandlers } from '../utils/internal/attachSiblingHandlers'

export type AnyHandler = RequestHandler | WebSocketHandler
export type HandlersMap = Partial<Record<AnyHandler['kind'], Array<AnyHandler>>>

export function groupHandlersByKind(handlers: Array<AnyHandler>): HandlersMap {
  const groups: HandlersMap = {}

  const pushUnique = (kind: AnyHandler['kind'], handler: AnyHandler) => {
    const bucket = (groups[kind] ||= [])

    if (!bucket.includes(handler)) {
      bucket.push(handler)
    }
  }

  /**
   * @note `Object.groupBy` is not implemented in Node.js v20.
   */
  for (const handler of handlers) {
    pushUnique(handler.kind, handler)

    for (const sibling of getSiblingHandlers(handler)) {
      pushUnique(sibling.kind, sibling)
    }
  }

  return groups
}

export interface HandlersControllerState {
  initialHandlers: HandlersMap
  handlers: HandlersMap
}

export abstract class HandlersController {
  protected getInitialState(
    initialHandlers: Array<AnyHandler>,
  ): HandlersControllerState {
    invariant(
      this.#validateHandlers(initialHandlers),
      devUtils.formatMessage(
        'Failed to apply given request handlers: invalid input. Did you forget to spread the request handlers Array?',
      ),
    )

    const normalizedInitialHandlers = groupHandlersByKind(initialHandlers)

    return {
      initialHandlers: normalizedInitialHandlers,
      handlers: { ...normalizedInitialHandlers },
    }
  }

  protected abstract getState(): HandlersControllerState
  protected abstract setState(nextState: Partial<HandlersControllerState>): void

  public currentHandlers(): Array<AnyHandler> {
    return Object.values(this.getState().handlers)
      .flat()
      .filter((handler) => handler != null)
  }

  public getHandlersByKind(kind: AnyHandler['kind']): Array<AnyHandler> {
    return this.getState().handlers[kind] || []
  }

  public use(nextHandlers: Array<AnyHandler>): void {
    invariant(
      this.#validateHandlers(nextHandlers),
      devUtils.formatMessage(
        '[MSW] Failed to call "use()" with the given request handlers: invalid input. Did you forget to spread the array of request handlers?',
      ),
    )

    if (nextHandlers.length === 0) {
      return
    }

    const { handlers } = this.getState()
    const overrides = groupHandlersByKind(nextHandlers)

    // Prepend overrides to their respective kind buckets so they take
    // priority over existing handlers while preserving input order.
    for (const kind in overrides) {
      const overridesForKind = overrides[kind as AnyHandler['kind']]!
      const existingForKind = handlers[kind as AnyHandler['kind']]
      handlers[kind as AnyHandler['kind']] = existingForKind
        ? [...overridesForKind, ...existingForKind]
        : overridesForKind
    }

    this.setState({ handlers })
  }

  public reset(nextHandlers: Array<AnyHandler>): void {
    invariant(
      nextHandlers.length > 0 ? this.#validateHandlers(nextHandlers) : true,
      devUtils.formatMessage(
        'Failed to replace initial handlers during reset: invalid handlers. Did you forget to spread the handlers array?',
      ),
    )

    for (const handler of this.currentHandlers()) {
      if ('reset' in handler) {
        handler['reset']()
      }
    }

    const { initialHandlers } = this.getState()

    if (nextHandlers.length === 0) {
      this.setState({
        handlers: { ...initialHandlers },
      })

      return
    }

    const normalizedNextHandlers = groupHandlersByKind(nextHandlers)

    this.setState({
      initialHandlers: normalizedNextHandlers,
      handlers: { ...normalizedNextHandlers },
    })
  }

  public restore(): void {
    for (const handler of this.currentHandlers()) {
      if ('restore' in handler) {
        handler['restore']()
      }
    }
  }

  #validateHandlers(handlers: Array<AnyHandler>): boolean {
    return handlers.every((handler) => !Array.isArray(handler))
  }
}

export class InMemoryHandlersController extends HandlersController {
  #handlers: HandlersMap
  #initialHandlers: HandlersMap

  constructor(initialHandlers: Array<AnyHandler>) {
    super()

    const initialState = this.getInitialState(initialHandlers)

    this.#initialHandlers = initialState.initialHandlers
    this.#handlers = initialState.handlers
  }

  protected getState(): HandlersControllerState {
    return {
      initialHandlers: this.#initialHandlers,
      handlers: this.#handlers,
    }
  }

  protected setState(nextState: Partial<HandlersControllerState>): void {
    if (nextState.initialHandlers) {
      this.#initialHandlers = nextState.initialHandlers
    }

    if (nextState.handlers) {
      this.#handlers = nextState.handlers
    }
  }
}
