import type { BaseQueryFn } from './baseQueryTypes'

export const _NEVER = /* @__PURE__ */ Symbol()
export type NEVER = typeof _NEVER

/**
 * Creates a "fake" baseQuery to be used if your api *only* uses the `queryFn` definition syntax.
 * This also allows you to specify a specific error type to be shared by all your `queryFn` definitions.
 */
export function fakeBaseQuery<ErrorType>(): BaseQueryFn<
  void,
  NEVER,
  ErrorType,
  {}
> {
  return function () {
    throw new Error(
      'When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.',
    )
  }
}
