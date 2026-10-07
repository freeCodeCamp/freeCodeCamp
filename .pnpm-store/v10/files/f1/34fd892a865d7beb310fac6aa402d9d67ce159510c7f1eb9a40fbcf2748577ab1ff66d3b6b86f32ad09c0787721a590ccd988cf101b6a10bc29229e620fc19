// This must remain here so that the `mangleErrors.cjs` build script
// does not have to import this into each source file it rewrites.
import { formatProdErrorMessage } from '@reduxjs/toolkit'

import { buildCreateApi, coreModule } from './rtkqImports'
import { reactHooksModule, reactHooksModuleName } from './module'

export * from '@reduxjs/toolkit/query'
export { ApiProvider } from './ApiProvider'

const createApi = /* @__PURE__ */ buildCreateApi(
  coreModule(),
  reactHooksModule(),
)

export type {
  TypedUseMutationResult,
  TypedUseQueryHookResult,
  TypedUseQueryStateResult,
  TypedUseQuerySubscriptionResult,
  TypedLazyQueryTrigger,
  TypedUseLazyQuery,
  TypedUseMutation,
  TypedMutationTrigger,
  TypedQueryStateSelector,
  TypedUseQueryState,
  TypedUseQuery,
  TypedUseQuerySubscription,
  TypedUseLazyQuerySubscription,
  TypedUseQueryStateOptions,
  TypedUseLazyQueryStateResult,
  TypedUseInfiniteQuery,
  TypedUseInfiniteQueryHookResult,
  TypedUseInfiniteQueryStateResult,
  TypedUseInfiniteQuerySubscriptionResult,
  TypedUseInfiniteQueryStateOptions,
  TypedInfiniteQueryStateSelector,
  TypedUseInfiniteQuerySubscription,
  TypedUseInfiniteQueryState,
  TypedLazyInfiniteQueryTrigger,
} from './buildHooks'
export { UNINITIALIZED_VALUE } from './constants'
export { createApi, reactHooksModule, reactHooksModuleName }
