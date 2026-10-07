import type {
  Api,
  BaseQueryFn,
  EndpointDefinitions,
  InfiniteQueryDefinition,
  Module,
  MutationDefinition,
  PrefetchOptions,
  QueryArgFrom,
  QueryDefinition,
  QueryKeys,
} from '@reduxjs/toolkit/query'
import {
  batch as rrBatch,
  useDispatch as rrUseDispatch,
  useSelector as rrUseSelector,
  useStore as rrUseStore,
} from 'react-redux'
import type { CreateSelectorFunction } from 'reselect'
import { createSelector as _createSelector } from 'reselect'
import {
  isInfiniteQueryDefinition,
  isMutationDefinition,
  isQueryDefinition,
} from '../endpointDefinitions'
import { safeAssign } from '../tsHelpers'
import { capitalize, countObjectKeys } from '../utils'
import type {
  InfiniteQueryHooks,
  MutationHooks,
  QueryHooks,
} from './buildHooks'
import { buildHooks } from './buildHooks'
import type { HooksWithUniqueNames } from './namedHooks'

export const reactHooksModuleName = /* @__PURE__ */ Symbol()
export type ReactHooksModule = typeof reactHooksModuleName

declare module '@reduxjs/toolkit/query' {
  export interface ApiModules<
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BaseQuery extends BaseQueryFn,
    Definitions extends EndpointDefinitions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ReducerPath extends string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TagTypes extends string,
  > {
    [reactHooksModuleName]: {
      /**
       *  Endpoints based on the input endpoints provided to `createApi`, containing `select`, `hooks` and `action matchers`.
       */
      endpoints: {
        [K in keyof Definitions]: Definitions[K] extends QueryDefinition<
          any,
          any,
          any,
          any,
          any
        >
          ? QueryHooks<Definitions[K]>
          : Definitions[K] extends MutationDefinition<any, any, any, any, any>
            ? MutationHooks<Definitions[K]>
            : Definitions[K] extends InfiniteQueryDefinition<
                  any,
                  any,
                  any,
                  any,
                  any
                >
              ? InfiniteQueryHooks<Definitions[K]>
              : never
      }
      /**
       * A hook that accepts a string endpoint name, and provides a callback that when called, pre-fetches the data for that endpoint.
       */
      usePrefetch<EndpointName extends QueryKeys<Definitions>>(
        endpointName: EndpointName,
        options?: PrefetchOptions,
      ): (
        arg: QueryArgFrom<Definitions[EndpointName]>,
        options?: PrefetchOptions,
      ) => void
    } & HooksWithUniqueNames<Definitions>
  }
}

type RR = typeof import('react-redux')

export interface ReactHooksModuleOptions {
  /**
   * The hooks from React Redux to be used
   */
  hooks?: {
    /**
     * The version of the `useDispatch` hook to be used
     */
    useDispatch: RR['useDispatch']
    /**
     * The version of the `useSelector` hook to be used
     */
    useSelector: RR['useSelector']
    /**
     * The version of the `useStore` hook to be used
     */
    useStore: RR['useStore']
  }
  /**
   * The version of the `batchedUpdates` function to be used
   */
  batch?: RR['batch']
  /**
   * Enables performing asynchronous tasks immediately within a render.
   *
   * @example
   *
   * ```ts
   * import {
   *   buildCreateApi,
   *   coreModule,
   *   reactHooksModule
   * } from '@reduxjs/toolkit/query/react'
   *
   * const createApi = buildCreateApi(
   *   coreModule(),
   *   reactHooksModule({ unstable__sideEffectsInRender: true })
   * )
   * ```
   */
  unstable__sideEffectsInRender?: boolean
  /**
   * A selector creator (usually from `reselect`, or matching the same signature)
   */
  createSelector?: CreateSelectorFunction<any, any, any>
}

/**
 * Creates a module that generates react hooks from endpoints, for use with `buildCreateApi`.
 *
 *  @example
 * ```ts
 * const MyContext = React.createContext<ReactReduxContextValue | null>(null);
 * const customCreateApi = buildCreateApi(
 *   coreModule(),
 *   reactHooksModule({
 *     hooks: {
 *       useDispatch: createDispatchHook(MyContext),
 *       useSelector: createSelectorHook(MyContext),
 *       useStore: createStoreHook(MyContext)
 *     }
 *   })
 * );
 * ```
 *
 * @returns A module for use with `buildCreateApi`
 */
export const reactHooksModule = ({
  batch = rrBatch,
  hooks = {
    useDispatch: rrUseDispatch,
    useSelector: rrUseSelector,
    useStore: rrUseStore,
  },
  createSelector = _createSelector,
  unstable__sideEffectsInRender = false,
  ...rest
}: ReactHooksModuleOptions = {}): Module<ReactHooksModule> => {
  if (process.env.NODE_ENV !== 'production') {
    const hookNames = ['useDispatch', 'useSelector', 'useStore'] as const
    let warned = false
    for (const hookName of hookNames) {
      // warn for old hook options
      if (countObjectKeys(rest) > 0) {
        if ((rest as Partial<typeof hooks>)[hookName]) {
          if (!warned) {
            console.warn(
              'As of RTK 2.0, the hooks now need to be specified as one object, provided under a `hooks` key:' +
                '\n`reactHooksModule({ hooks: { useDispatch, useSelector, useStore } })`',
            )
            warned = true
          }
        }
        // migrate
        // @ts-ignore
        hooks[hookName] = rest[hookName]
      }
      // then make sure we have them all
      if (typeof hooks[hookName] !== 'function') {
        throw new Error(
          `When using custom hooks for context, all ${
            hookNames.length
          } hooks need to be provided: ${hookNames.join(
            ', ',
          )}.\nHook ${hookName} was either not provided or not a function.`,
        )
      }
    }
  }

  return {
    name: reactHooksModuleName,
    init(api, { serializeQueryArgs }, context) {
      const anyApi = api as any as Api<
        any,
        Record<string, any>,
        any,
        any,
        ReactHooksModule
      >
      const {
        buildQueryHooks,
        buildInfiniteQueryHooks,
        buildMutationHook,
        usePrefetch,
      } = buildHooks({
        api,
        moduleOptions: {
          batch,
          hooks,
          unstable__sideEffectsInRender,
          createSelector,
        },
        serializeQueryArgs,
        context,
      })
      safeAssign(anyApi, { usePrefetch })
      safeAssign(context, { batch })

      return {
        injectEndpoint(endpointName, definition) {
          if (isQueryDefinition(definition)) {
            const {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription,
            } = buildQueryHooks(endpointName)
            safeAssign(anyApi.endpoints[endpointName], {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription,
            })
            ;(api as any)[`use${capitalize(endpointName)}Query`] = useQuery
            ;(api as any)[`useLazy${capitalize(endpointName)}Query`] =
              useLazyQuery
          }
          if (isMutationDefinition(definition)) {
            const useMutation = buildMutationHook(endpointName)
            safeAssign(anyApi.endpoints[endpointName], {
              useMutation,
            })
            ;(api as any)[`use${capitalize(endpointName)}Mutation`] =
              useMutation
          } else if (isInfiniteQueryDefinition(definition)) {
            const {
              useInfiniteQuery,
              useInfiniteQuerySubscription,
              useInfiniteQueryState,
            } = buildInfiniteQueryHooks(endpointName)
            safeAssign(anyApi.endpoints[endpointName], {
              useInfiniteQuery,
              useInfiniteQuerySubscription,
              useInfiniteQueryState,
            })
            ;(api as any)[`use${capitalize(endpointName)}InfiniteQuery`] =
              useInfiniteQuery
          }
        },
      }
    },
  }
}
