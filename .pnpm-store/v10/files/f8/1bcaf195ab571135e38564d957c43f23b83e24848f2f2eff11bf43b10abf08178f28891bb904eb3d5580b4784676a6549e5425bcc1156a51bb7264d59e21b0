import type { PartialDeep } from 'type-fest'
import type { Interceptor } from '@mswjs/interceptors'
import {
  NetworkReadyState,
  defineNetwork,
  type NetworkApi,
} from '#core/experimental/define-network'
import type { AnyHandler } from '#core/experimental/handlers-controller'
import type { HandlersController } from '#core/experimental/handlers-controller'
import { InterceptorSource } from '#core/experimental/sources/interceptor-source'
import { fromLegacyOnUnhandledRequest } from '#core/experimental/compat'
import type { ListenOptions, SetupServerCommon } from './glossary'

/**
 * Define the common `setupServer` API around the given network.
 * This is used by both `msw/node` and `msw/native` to implement the same
 * baseline setup methods, like `.use()`, `.resetHandlers()`, `.close()`, etc.
 */
export function defineSetupServerApi(
  network: NetworkApi<any>,
): SetupServerCommon {
  return {
    events: network.events,
    listen(options) {
      network.configure({
        onUnhandledFrame: fromLegacyOnUnhandledRequest(() => {
          return options?.onUnhandledRequest || 'warn'
        }),
      })

      network.enable()
    },
    use: network.use.bind(network),
    resetHandlers: network.resetHandlers.bind(network),
    restoreHandlers: network.restoreHandlers.bind(network),
    listHandlers: network.listHandlers.bind(network),
    close() {
      /**
       * @note Ignore closing after closed for backwards compatibility.
       */
      if (network.readyState === NetworkReadyState.DISABLED) {
        return
      }

      network.disable()
    },
  }
}

/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
export class SetupServerCommonApi implements SetupServerCommon {
  protected network: NetworkApi<[InterceptorSource]>

  constructor(
    interceptors: Array<Interceptor<any>>,
    handlers: Array<AnyHandler> | HandlersController,
  ) {
    this.network = defineNetwork({
      sources: [new InterceptorSource({ interceptors })],
      handlers,
    })
  }

  get events() {
    return this.network.events
  }

  public listen(options?: PartialDeep<ListenOptions>): void {
    this.network.configure({
      onUnhandledFrame: fromLegacyOnUnhandledRequest(() => {
        return options?.onUnhandledRequest || 'warn'
      }),
    })

    this.network.enable()
  }

  public use(...handlers: Array<AnyHandler>): void {
    this.network.use(...handlers)
  }

  public resetHandlers(...nextHandlers: Array<AnyHandler>): void {
    return this.network.resetHandlers(...nextHandlers)
  }

  public restoreHandlers(): void {
    return this.network.restoreHandlers()
  }

  public listHandlers(): ReadonlyArray<AnyHandler> {
    return this.network.listHandlers()
  }

  public close(): void {
    this.network.disable()
  }
}
