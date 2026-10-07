import type { Interceptor } from '@mswjs/interceptors'
import { ClientRequestInterceptor } from '@mswjs/interceptors/ClientRequest'
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest'
import { FetchInterceptor } from '@mswjs/interceptors/fetch'
import { WebSocketInterceptor } from '@mswjs/interceptors/WebSocket'
import {
  defineNetwork,
  type DefineNetworkOptions,
} from '#core/experimental/define-network'
import type { AnyHandler } from '#core/experimental/handlers-controller'
import { InterceptorSource } from '#core/experimental/sources/interceptor-source'
import type { SetupServer } from './glossary'
import { AsyncHandlersController } from './async-handlers-controller'
import {
  defineSetupServerApi,
  SetupServerCommonApi,
} from './setup-server-common'

const defaultInterceptors: Array<Interceptor<any>> = [
  new ClientRequestInterceptor(),
  new XMLHttpRequestInterceptor(),
  new FetchInterceptor(),
  /**
   * @fixme WebSocketInterceptor is in a browser-only export of Interceptors
   * while the Interceptor class imported from the root module points to `lib/node`.
   * An absolute madness to solve as it requires to duplicate the build config we have
   * in MSW: shared core, CJS/ESM patching, .d.ts patching...
   */
  new WebSocketInterceptor() as any,
]

export const defaultNetworkOptions: DefineNetworkOptions<[InterceptorSource]> =
  {
    sources: [
      new InterceptorSource({
        interceptors: defaultInterceptors,
      }),
    ],
    onUnhandledFrame: 'warn',
    context: {
      quiet: true,
    },
  }

/**
 * Enables request interception in Node.js with the given request handlers.
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer()` API reference}
 */
export function setupServer(...handlers: Array<AnyHandler>): SetupServer {
  const handlersController = new AsyncHandlersController(handlers)
  const network = defineNetwork({
    ...defaultNetworkOptions,
    handlers: handlersController,
  })

  const commonApi = defineSetupServerApi(network)

  return {
    ...commonApi,
    boundary: handlersController.boundary.bind(handlersController),
  }
}

/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
export class SetupServerApi
  extends SetupServerCommonApi
  implements SetupServer
{
  #handlersController: AsyncHandlersController

  public boundary: AsyncHandlersController['boundary']

  constructor(
    handlers: Array<AnyHandler>,
    interceptors: Array<Interceptor<any>>,
  ) {
    const controller = new AsyncHandlersController(handlers)
    super(interceptors, controller)

    const { sources: _, ...networkOptions } = defaultNetworkOptions
    this.network.configure(networkOptions)

    this.#handlersController = controller
    this.boundary = this.#handlersController.boundary.bind(
      this.#handlersController,
    )
  }
}
