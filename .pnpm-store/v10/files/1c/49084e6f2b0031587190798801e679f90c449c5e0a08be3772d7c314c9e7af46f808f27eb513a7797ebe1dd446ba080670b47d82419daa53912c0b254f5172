import type { Interceptor } from '@mswjs/interceptors'
import { FetchInterceptor } from '@mswjs/interceptors/fetch'
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest'
import type { AnyHandler } from '#core/experimental/handlers-controller'
import {
  defineNetwork,
  type DefineNetworkOptions,
} from '#core/experimental/define-network'
import { InterceptorSource } from '#core/experimental/sources/interceptor-source'
import { type SetupServerCommon } from '../node/glossary'
import { defineSetupServerApi } from '../node/setup-server-common'

const defaultInterceptors: Array<Interceptor<any>> = [
  new FetchInterceptor(),
  new XMLHttpRequestInterceptor(),
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
 * Sets up a requests interception in React Native with the given request handlers.
 * @param {Array<AnyHandler>} handlers List of request handlers.
 *
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer()` API reference}
 */
export function setupServer(...handlers: Array<AnyHandler>): SetupServerCommon {
  const network = defineNetwork({
    ...defaultNetworkOptions,
    handlers,
  })

  return defineSetupServerApi(network)
}
