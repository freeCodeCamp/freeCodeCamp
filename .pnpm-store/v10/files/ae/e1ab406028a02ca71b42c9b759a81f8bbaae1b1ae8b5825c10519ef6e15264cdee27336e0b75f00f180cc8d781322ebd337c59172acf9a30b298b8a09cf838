import type { UseQueryStateOptions } from '@internal/query/react/buildHooks'
import type { SerializedError } from '@reduxjs/toolkit'
import type {
  FetchBaseQueryError,
  QueryDefinition,
  TypedUseMutationResult,
  TypedUseQueryHookResult,
  TypedUseQueryState,
  TypedUseQueryStateResult,
  TypedUseQuerySubscriptionResult,
  TypedLazyQueryTrigger,
  TypedUseLazyQueryStateResult,
  TypedUseLazyQuery,
  TypedUseLazyQuerySubscription,
  TypedUseMutation,
  TypedMutationTrigger,
  TypedUseQuerySubscription,
  TypedUseQuery,
  TypedUseQueryStateOptions,
} from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery()

const api = createApi({
  baseQuery,
  endpoints: (build) => ({
    getTest: build.query<string, void>({ query: () => '' }),
    mutation: build.mutation<string, void>({ query: () => '' }),
  }),
})

describe('union types', () => {
  test('query selector union', () => {
    const result = api.endpoints.getTest.select()({} as any)

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })

  test('useQuery union', () => {
    const result = api.endpoints.getTest.useQuery()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isFetching) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toBeBoolean()

      expectTypeOf(result.isSuccess).toBeBoolean()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result.currentData).toEqualTypeOf<string | undefined>()

    if (result.isSuccess) {
      if (!result.isFetching) {
        expectTypeOf(result.currentData).toBeString()
      } else {
        expectTypeOf(result.currentData).toEqualTypeOf<string | undefined>()
      }
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })
  test('useQuery TS4.1 union', () => {
    const result = api.useGetTestQuery()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isFetching) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toBeBoolean()

      expectTypeOf(result.isSuccess).toBeBoolean()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })

  test('useLazyQuery union', () => {
    const [_trigger, result] = api.endpoints.getTest.useLazyQuery()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isFetching) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toBeBoolean()

      expectTypeOf(result.isSuccess).toBeBoolean()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })

  test('useLazyQuery TS4.1 union', () => {
    const [_trigger, result] = api.useLazyGetTestQuery()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isFetching).toBeBoolean()
    }

    if (result.isFetching) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toBeBoolean()

      expectTypeOf(result.isSuccess).toBeBoolean()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })

  test('queryHookResult (without selector) union', async () => {
    const useQueryStateResult = api.endpoints.getTest.useQueryState()

    const useQueryResult = api.endpoints.getTest.useQuery()

    const useQueryStateWithSelectFromResult =
      api.endpoints.getTest.useQueryState(undefined, {
        selectFromResult: () => ({ x: true }),
      })

    const { refetch, ...useQueryResultWithoutMethods } = useQueryResult

    assertType<typeof useQueryResultWithoutMethods>(useQueryStateResult)

    expectTypeOf(useQueryStateResult).toMatchTypeOf(
      useQueryResultWithoutMethods,
    )

    expectTypeOf(useQueryStateWithSelectFromResult)
      .parameter(0)
      .not.toMatchTypeOf(useQueryResultWithoutMethods)

    expectTypeOf(api.endpoints.getTest.select).returns.returns.toEqualTypeOf<
      Awaited<ReturnType<typeof refetch>>
    >()
  })

  test('useQueryState (with selectFromResult)', () => {
    const result = api.endpoints.getTest.useQueryState(undefined, {
      selectFromResult({
        data,
        isLoading,
        isFetching,
        isError,
        isSuccess,
        isUninitialized,
      }) {
        return {
          data: data ?? 1,
          isLoading,
          isFetching,
          isError,
          isSuccess,
          isUninitialized,
        }
      },
    })

    expectTypeOf({
      data: '' as string | number,
      isUninitialized: false,
      isLoading: true,
      isFetching: true,
      isSuccess: false,
      isError: false,
    }).toEqualTypeOf(result)
  })

  test('useQuery (with selectFromResult)', async () => {
    const { refetch, ...result } = api.endpoints.getTest.useQuery(undefined, {
      selectFromResult({
        data,
        isLoading,
        isFetching,
        isError,
        isSuccess,
        isUninitialized,
      }) {
        return {
          data: data ?? 1,
          isLoading,
          isFetching,
          isError,
          isSuccess,
          isUninitialized,
        }
      },
    })

    expectTypeOf({
      data: '' as string | number,
      isUninitialized: false,
      isLoading: true,
      isFetching: true,
      isSuccess: false,
      isError: false,
    }).toEqualTypeOf(result)

    expectTypeOf(api.endpoints.getTest.select).returns.returns.toEqualTypeOf<
      Awaited<ReturnType<typeof refetch>>
    >()
  })

  test('useMutation union', () => {
    const [_trigger, result] = api.endpoints.mutation.useMutation()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })

  test('useMutation (with selectFromResult)', () => {
    const [_trigger, result] = api.endpoints.mutation.useMutation({
      selectFromResult({
        data,
        isLoading,
        isError,
        isSuccess,
        isUninitialized,
      }) {
        return {
          data: data ?? 'hi',
          isLoading,
          isError,
          isSuccess,
          isUninitialized,
        }
      },
    })

    expectTypeOf({
      data: '' as string,
      isUninitialized: false,
      isLoading: true,
      isSuccess: false,
      isError: false,
      reset: () => {},
    }).toMatchTypeOf(result)
  })

  test('useMutation TS4.1 union', () => {
    const [_trigger, result] = api.useMutationMutation()

    if (result.isUninitialized) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isLoading) {
      expectTypeOf(result.data).toBeUndefined()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError | undefined
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isError) {
      expectTypeOf(result.data).toEqualTypeOf<string | undefined>()

      expectTypeOf(result.error).toEqualTypeOf<
        SerializedError | FetchBaseQueryError
      >()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isSuccess).toEqualTypeOf<false>()
    }

    if (result.isSuccess) {
      expectTypeOf(result.data).toBeString()

      expectTypeOf(result.error).toBeUndefined()

      expectTypeOf(result.isUninitialized).toEqualTypeOf<false>()

      expectTypeOf(result.isLoading).toEqualTypeOf<false>()

      expectTypeOf(result.isError).toEqualTypeOf<false>()
    }

    expectTypeOf(result).not.toBeNever()

    // is always one of those four
    if (
      !result.isUninitialized &&
      !result.isLoading &&
      !result.isError &&
      !result.isSuccess
    ) {
      expectTypeOf(result).toBeNever()
    }
  })
})

describe('"Typed" helper types', () => {
  test('useQuery', () => {
    expectTypeOf<TypedUseQuery<string, void, typeof baseQuery>>().toMatchTypeOf(
      api.endpoints.getTest.useQuery,
    )

    const result = api.endpoints.getTest.useQuery()

    expectTypeOf<
      TypedUseQueryHookResult<string, void, typeof baseQuery>
    >().toEqualTypeOf(result)
  })

  test('useQuery with selectFromResult', () => {
    const result = api.endpoints.getTest.useQuery(undefined, {
      selectFromResult: () => ({ x: true }),
    })

    expectTypeOf<
      TypedUseQueryHookResult<string, void, typeof baseQuery, { x: boolean }>
    >().toEqualTypeOf(result)
  })

  test('useQueryState', () => {
    expectTypeOf<
      TypedUseQueryState<string, void, typeof baseQuery>
    >().toMatchTypeOf(api.endpoints.getTest.useQueryState)

    const result = api.endpoints.getTest.useQueryState()

    expectTypeOf<
      TypedUseQueryStateResult<string, void, typeof baseQuery>
    >().toEqualTypeOf(result)
  })

  test('useQueryState with selectFromResult', () => {
    const result = api.endpoints.getTest.useQueryState(undefined, {
      selectFromResult: () => ({ x: true }),
    })

    expectTypeOf<
      TypedUseQueryStateResult<string, void, typeof baseQuery, { x: boolean }>
    >().toEqualTypeOf(result)
  })

  test('useQueryState options', () => {
    expectTypeOf<
      TypedUseQueryStateOptions<string, void, typeof baseQuery>
    >().toMatchTypeOf<
      Parameters<typeof api.endpoints.getTest.useQueryState>[1]
    >()

    expectTypeOf<
      UseQueryStateOptions<
        QueryDefinition<void, typeof baseQuery, string, string>,
        { x: boolean }
      >
    >().toEqualTypeOf<
      TypedUseQueryStateOptions<string, void, typeof baseQuery, { x: boolean }>
    >()
  })

  test('useQuerySubscription', () => {
    expectTypeOf<
      TypedUseQuerySubscription<string, void, typeof baseQuery>
    >().toMatchTypeOf(api.endpoints.getTest.useQuerySubscription)

    const result = api.endpoints.getTest.useQuerySubscription()

    expectTypeOf<
      TypedUseQuerySubscriptionResult<string, void, typeof baseQuery>
    >().toEqualTypeOf(result)
  })

  test('useLazyQuery', () => {
    expectTypeOf<
      TypedUseLazyQuery<string, void, typeof baseQuery>
    >().toMatchTypeOf(api.endpoints.getTest.useLazyQuery)

    const [trigger, result] = api.endpoints.getTest.useLazyQuery()

    expectTypeOf<
      TypedLazyQueryTrigger<string, void, typeof baseQuery>
    >().toMatchTypeOf(trigger)

    expectTypeOf<
      TypedUseLazyQueryStateResult<string, void, typeof baseQuery>
    >().toMatchTypeOf(result)
  })

  test('useLazyQuery with selectFromResult', () => {
    const [trigger, result] = api.endpoints.getTest.useLazyQuery({
      selectFromResult: () => ({ x: true }),
    })

    expectTypeOf<
      TypedLazyQueryTrigger<string, void, typeof baseQuery>
    >().toMatchTypeOf(trigger)

    expectTypeOf<
      TypedUseLazyQueryStateResult<
        string,
        void,
        typeof baseQuery,
        { x: boolean }
      >
    >().toMatchTypeOf(result)
  })

  test('useLazyQuerySubscription', () => {
    expectTypeOf<
      TypedUseLazyQuerySubscription<string, void, typeof baseQuery>
    >().toMatchTypeOf(api.endpoints.getTest.useLazyQuerySubscription)

    const [trigger] = api.endpoints.getTest.useLazyQuerySubscription()

    expectTypeOf<
      TypedLazyQueryTrigger<string, void, typeof baseQuery>
    >().toMatchTypeOf(trigger)
  })

  test('useMutation', () => {
    expectTypeOf<
      TypedUseMutation<string, void, typeof baseQuery>
    >().toMatchTypeOf(api.endpoints.mutation.useMutation)

    const [trigger, result] = api.endpoints.mutation.useMutation()

    expectTypeOf<
      TypedMutationTrigger<string, void, typeof baseQuery>
    >().toMatchTypeOf(trigger)

    expectTypeOf<
      TypedUseMutationResult<string, void, typeof baseQuery>
    >().toMatchTypeOf(result)
  })

  test('useQuery - defining selectFromResult separately', () => {
    const selectFromResult = (
      result: TypedUseQueryStateResult<string, void, typeof baseQuery>,
    ) => ({ x: true })

    const result = api.endpoints.getTest.useQuery(undefined, {
      selectFromResult,
    })

    expectTypeOf(result).toEqualTypeOf<
      TypedUseQueryHookResult<
        string,
        void,
        typeof baseQuery,
        ReturnType<typeof selectFromResult>
      >
    >()
  })

  test('useMutation - defining selectFromResult separately', () => {
    const selectFromResult = (
      result: Omit<
        TypedUseMutationResult<string, void, typeof baseQuery>,
        'reset' | 'originalArgs'
      >,
    ) => ({ x: true })

    const [trigger, result] = api.endpoints.mutation.useMutation({
      selectFromResult,
    })
    expectTypeOf(result).toEqualTypeOf<
      TypedUseMutationResult<
        string,
        void,
        typeof baseQuery,
        ReturnType<typeof selectFromResult>
      >
    >()
  })
})
