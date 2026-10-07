import { type DefaultEventMap, Emitter } from 'rettime'
import { type LifeCycleEventEmitter } from '../sharedOptions'
import type { HandlersController } from './handlers-controller'
import {
  InMemoryHandlersController,
  type AnyHandler,
} from './handlers-controller'
import { Disposable } from '../utils/internal/Disposable'
import { toReadonlyArray } from '../utils/internal/toReadonlyArray'

/**
 * Generic class for the mock API setup.
 * Preserved only for backward compatibility.
 * @deprecated
 */
export abstract class SetupApi<
  EventMap extends DefaultEventMap,
> extends Disposable {
  protected handlersController: HandlersController
  protected emitter: Emitter<EventMap>
  protected publicEmitter: Emitter<EventMap>

  public readonly events: LifeCycleEventEmitter<EventMap>

  constructor(...initialHandlers: Array<AnyHandler>) {
    super()

    this.handlersController = new InMemoryHandlersController(initialHandlers)

    this.emitter = new Emitter()
    this.publicEmitter = new Emitter()
    this.events = this.emitter

    this.subscriptions.push(() => {
      this.emitter.removeAllListeners()
      this.publicEmitter.removeAllListeners()
    })
  }

  public use(...runtimeHandlers: Array<AnyHandler>): void {
    this.handlersController.use(runtimeHandlers)
  }

  public restoreHandlers(): void {
    this.handlersController.restore()
  }

  public resetHandlers(...nextHandlers: Array<AnyHandler>): void {
    this.handlersController.reset(nextHandlers)
  }

  public listHandlers(): ReadonlyArray<AnyHandler> {
    return toReadonlyArray(this.handlersController.currentHandlers())
  }
}
