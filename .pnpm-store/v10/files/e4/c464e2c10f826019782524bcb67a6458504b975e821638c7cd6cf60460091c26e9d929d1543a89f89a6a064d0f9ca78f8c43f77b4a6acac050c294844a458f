import type { BaseQueryFn, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { createApi, retry } from '@reduxjs/toolkit/query'
import { setupApiStore } from '../../tests/utils/helpers'

beforeEach(() => {
  vi.useFakeTimers()
})

const loopTimers = async (max: number = 12) => {
  let count = 0
  while (count < max) {
    await vi.advanceTimersByTimeAsync(1)
    vi.advanceTimersByTime(120_000)
    count++
  }
}

describe('configuration', () => {
  test('retrying without any config options', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery)
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(7)

    expect(baseBaseQuery).toHaveBeenCalledTimes(6)
  })

  test('retrying with baseQuery config that overrides default behavior (maxRetries: 5)', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(5)

    expect(baseBaseQuery).toHaveBeenCalledTimes(4)
  })

  test('retrying with endpoint config that overrides baseQuery config', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
        q2: build.query({
          query: () => {},
          extraOptions: { maxRetries: 8 },
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))
    await loopTimers(5)

    expect(baseBaseQuery).toHaveBeenCalledTimes(4)

    baseBaseQuery.mockClear()

    storeRef.store.dispatch(api.endpoints.q2.initiate({}))

    await loopTimers(10)

    expect(baseBaseQuery).toHaveBeenCalledTimes(9)
  })

  test('stops retrying a query after a success', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery
      .mockResolvedValueOnce({ error: 'rejected' })
      .mockResolvedValueOnce({ error: 'rejected' })
      .mockResolvedValue({ data: { success: true } })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 10 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.mutation({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(6)

    expect(baseBaseQuery).toHaveBeenCalledTimes(3)
  })

  test('retrying also works with mutations', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        m1: build.mutation({
          query: () => ({ method: 'PUT' }),
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.m1.initiate({}))

    await loopTimers(5)

    expect(baseBaseQuery).toHaveBeenCalledTimes(4)
  })

  test('retrying stops after a success from a mutation', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery
      .mockRejectedValueOnce(new Error('rejected'))
      .mockRejectedValueOnce(new Error('rejected'))
      .mockResolvedValue({ data: { success: true } })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        m1: build.mutation({
          query: () => ({ method: 'PUT' }),
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.m1.initiate({}))

    await loopTimers(5)

    expect(baseBaseQuery).toHaveBeenCalledTimes(3)
  })
  test('non-error-cases should **not** retry', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ data: { success: true } })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(2)

    expect(baseBaseQuery).toHaveBeenCalledOnce()
  })
  test('calling retry.fail(error) will skip retrying and expose the error directly', async () => {
    const error = { message: 'banana' }

    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockImplementation((input) => {
      retry.fail(error)
      return { data: `this won't happen` }
    })

    const baseQuery = retry(baseBaseQuery)
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    const result = await storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(2)

    expect(baseBaseQuery).toHaveBeenCalledOnce()
    expect(result.error).toEqual(error)
    expect(result).toEqual({
      endpointName: 'q1',
      error,
      isError: true,
      isLoading: false,
      isSuccess: false,
      isUninitialized: false,
      originalArgs: expect.any(Object),
      requestId: expect.any(String),
      startedTimeStamp: expect.any(Number),
      status: 'rejected',
    })
  })

  test('wrapping retry(retry(..., { maxRetries: 3 }), { maxRetries: 3 }) should retry 16 times', async () => {
    /**
     * Note:
     * This will retry 16 total times because we try the initial + 3 retries (sum: 4), then retry that process 3 times (starting at 0 for a total of 4)... 4x4=16 (allegedly)
     */
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(retry(baseBaseQuery, { maxRetries: 3 }), {
      maxRetries: 3,
    })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(18)

    expect(baseBaseQuery).toHaveBeenCalledTimes(16)
  })

  test('accepts a custom backoff fn', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, {
      maxRetries: 8,
      backoff: async (attempt, maxRetries) => {
        const attempts = Math.min(attempt, maxRetries)
        const timeout = attempts * 300 // Scale up by 300ms per request, ex: 300ms, 600ms, 900ms, 1200ms...
        await new Promise((resolve) =>
          setTimeout((res: any) => resolve(res), timeout),
        )
      },
    })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers()

    expect(baseBaseQuery).toHaveBeenCalledTimes(9)
  })

  test('accepts a custom retryCondition fn', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const overrideMaxRetries = 3

    const baseQuery = retry(baseBaseQuery, {
      retryCondition: (_, __, { attempt }) => attempt <= overrideMaxRetries,
    })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers()

    expect(baseBaseQuery).toHaveBeenCalledTimes(overrideMaxRetries + 1)
  })

  test('retryCondition with endpoint config that overrides baseQuery config', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, {
      maxRetries: 10,
    })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
          extraOptions: {
            retryCondition: (_, __, { attempt }) => attempt <= 5,
          },
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers()

    expect(baseBaseQuery).toHaveBeenCalledTimes(6)
  })

  test('retryCondition also works with mutations', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()

    baseBaseQuery
      .mockRejectedValueOnce(new Error('rejected'))
      .mockRejectedValueOnce(new Error('hello retryCondition'))
      .mockRejectedValueOnce(new Error('rejected'))
      .mockResolvedValue({ error: 'hello retryCondition' })

    const baseQuery = retry(baseBaseQuery, {})
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        m1: build.mutation({
          query: () => ({ method: 'PUT' }),
          extraOptions: {
            retryCondition: (e) =>
              (e as FetchBaseQueryError).data === 'hello retryCondition',
          },
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })
    storeRef.store.dispatch(api.endpoints.m1.initiate({}))

    await loopTimers()

    expect(baseBaseQuery).toHaveBeenCalledTimes(4)
  })

  test('Specifying maxRetries as 0 in RetryOptions prevents retries', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery.mockResolvedValue({ error: 'rejected' })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 0 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))
    await loopTimers(2)

    expect(baseBaseQuery).toHaveBeenCalledOnce()
  })

  test('retryCondition receives abort signal and stops retrying when cache entry is removed', async () => {
    let capturedSignal: AbortSignal | undefined
    let retryAttempts = 0

    const baseBaseQuery = vi.fn<BaseQueryFn>()

    // Always return an error to trigger retries
    baseBaseQuery.mockResolvedValue({ error: 'network error' })

    let retryConditionCalled = false

    const baseQuery = retry(baseBaseQuery, {
      retryCondition: (error, args, { attempt, baseQueryApi }) => {
        retryConditionCalled = true
        retryAttempts = attempt
        capturedSignal = baseQueryApi.signal

        // Stop retrying if the signal is aborted
        if (baseQueryApi.signal.aborted) {
          return false
        }

        // Otherwise, retry up to 10 times
        return attempt <= 10
      },
      backoff: async () => {
        // Short backoff for faster test
        await new Promise((resolve) => setTimeout(resolve, 10))
      },
    })

    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        getTest: build.query<string, number>({
          query: (id) => ({ url: `test/${id}` }),
          keepUnusedDataFor: 0.01, // Very short timeout (10ms)
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    // Start the query
    const queryPromise = storeRef.store.dispatch(
      api.endpoints.getTest.initiate(1),
    )

    // Wait for the first retry to happen so we capture the signal
    await loopTimers(2)

    // Verify the retry condition was called and we have a signal
    expect(retryConditionCalled).toBe(true)
    expect(capturedSignal).toBeDefined()
    expect(capturedSignal!.aborted).toBe(false)

    // Unsubscribe to trigger cache removal
    queryPromise.unsubscribe()

    // Wait for the cache entry to be removed (keepUnusedDataFor: 0.01s = 10ms)
    await vi.advanceTimersByTimeAsync(50)

    // Allow some time for more retries to potentially happen
    await loopTimers(3)

    // The signal should now be aborted
    expect(capturedSignal!.aborted).toBe(true)

    // We should have stopped retrying early due to the abort signal
    // If abort signal wasn't working, we'd see many more retry attempts
    expect(retryAttempts).toBeLessThan(10)

    // The base query should have been called at least once (initial attempt)
    // but not the full 10+ times it would without abort signal
    expect(baseBaseQuery).toHaveBeenCalled()
    expect(baseBaseQuery.mock.calls.length).toBeLessThan(10)
  })

  // Tests for issue #4079: Thrown errors should respect maxRetries
  test('thrown errors (not HandledError) should respect maxRetries', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    // Simulate network error that keeps throwing
    baseBaseQuery.mockRejectedValue(new Error('Network timeout'))

    const baseQuery = retry(baseBaseQuery, { maxRetries: 3 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(5)

    // Should try initial + 3 retries = 4 total, then stop
    // Currently this will fail because it retries infinitely
    expect(baseBaseQuery).toHaveBeenCalledTimes(4)
  })

  test('graphql-style thrown errors should respect maxRetries', async () => {
    class ClientError extends Error {
      constructor(message: string) {
        super(message)
        this.name = 'ClientError'
      }
    }

    const baseBaseQuery = vi.fn<BaseQueryFn>()
    // Simulate graphql-request throwing ClientError
    baseBaseQuery.mockImplementation(() => {
      throw new ClientError('GraphQL network error')
    })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 2 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(4)

    // Should try initial + 2 retries = 3 total, then stop
    // Currently this will fail because it retries infinitely
    expect(baseBaseQuery).toHaveBeenCalledTimes(3)
  })

  test('handles mix of returned errors and thrown errors', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    baseBaseQuery
      .mockResolvedValueOnce({ error: 'returned error' }) // HandledError
      .mockRejectedValueOnce(new Error('thrown error')) // Not HandledError
      .mockResolvedValueOnce({ error: 'returned error' }) // HandledError
      .mockResolvedValue({ data: { success: true } })

    const baseQuery = retry(baseBaseQuery, { maxRetries: 5 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        q1: build.query({
          query: () => {},
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.q1.initiate({}))

    await loopTimers(6)

    // Should eventually succeed after 4 attempts
    expect(baseBaseQuery).toHaveBeenCalledTimes(4)
  })

  test('thrown errors with mutations should respect maxRetries', async () => {
    const baseBaseQuery = vi.fn<BaseQueryFn>()
    // Simulate persistent network error
    baseBaseQuery.mockRejectedValue(new Error('Connection refused'))

    const baseQuery = retry(baseBaseQuery, { maxRetries: 2 })
    const api = createApi({
      baseQuery,
      endpoints: (build) => ({
        m1: build.mutation({
          query: () => ({ method: 'POST' }),
        }),
      }),
    })

    const storeRef = setupApiStore(api, undefined, {
      withoutTestLifecycles: true,
    })

    storeRef.store.dispatch(api.endpoints.m1.initiate({}))

    await loopTimers(4)

    // Should try initial + 2 retries = 3 total, then stop
    // Currently this will fail because it retries infinitely
    expect(baseBaseQuery).toHaveBeenCalledTimes(3)
  })

  // These tests validate the abort signal handling implementation
  describe('abort signal handling', () => {
    test('retry loop exits immediately when signal is aborted before retry', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 10 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Let first attempt fail
      await loopTimers(1)
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)

      // Abort the query
      promise.abort()

      // Advance timers to allow retry attempts
      await loopTimers(5)

      // Should not have retried after abort
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)
    })

    test('abort during active request prevents retry', async () => {
      let requestInProgress = false
      const baseBaseQuery = vi.fn<BaseQueryFn>()

      baseBaseQuery.mockImplementation(async () => {
        requestInProgress = true
        await new Promise((resolve) => setTimeout(resolve, 100))
        requestInProgress = false
        return { error: 'network error' }
      })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 5 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Wait for request to start
      await vi.advanceTimersByTimeAsync(50)
      expect(requestInProgress).toBe(true)

      // Abort while request is in progress
      promise.abort()

      // Let request complete
      await loopTimers(2)

      // Should not retry after abort
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)
    })

    test('custom backoff without signal parameter still works', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      // Custom backoff that doesn't accept signal (backward compatibility)
      const customBackoff = async (attempt: number, maxRetries: number) => {
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      const baseQuery = retry(baseBaseQuery, {
        maxRetries: 3,
        backoff: customBackoff,
      })

      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      await loopTimers(5)

      // Should complete all retries (not cancellable without signal)
      expect(baseBaseQuery).toHaveBeenCalledTimes(4)
    })

    test('abort signal is checked before each retry attempt', async () => {
      const attemptNumbers: number[] = []
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockImplementation(async () => {
        attemptNumbers.push(attemptNumbers.length + 1)
        return { error: 'network error' }
      })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 10 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Let 3 attempts happen
      await loopTimers(3)
      expect(attemptNumbers).toEqual([1, 2, 3])

      // Abort
      promise.abort()

      // Try to let more attempts happen
      await loopTimers(5)

      // Should not have any more attempts
      expect(attemptNumbers).toEqual([1, 2, 3])
    })

    test('mutations respect abort signal during retry', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 5 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          m1: build.mutation({ query: () => ({ method: 'POST' }) }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.m1.initiate({}))

      // Let first attempt fail
      await loopTimers(1)
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)

      // Abort
      promise.abort()

      // Try to let retries happen
      await loopTimers(5)

      // Should not have retried
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)
    })

    test('abort after successful retry does not affect result', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery
        .mockResolvedValueOnce({ error: 'network error' })
        .mockResolvedValue({ data: { success: true } })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 5 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Let it succeed on retry
      await loopTimers(3)
      expect(baseBaseQuery).toHaveBeenCalledTimes(2)

      const result = await promise

      // Abort after success
      promise.abort()

      // Result should still be successful
      expect(result.isSuccess).toBe(true)
      expect(result.data).toEqual({ success: true })
    })

    test('multiple aborts are handled gracefully', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 10 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      await loopTimers(1)

      // Call abort multiple times
      promise.abort()
      promise.abort()
      promise.abort()

      await loopTimers(3)

      // Should handle gracefully
      expect(baseBaseQuery).toHaveBeenCalledTimes(1)
    })

    test('abort signal already aborted before retry starts', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 5 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      const promise = storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Abort immediately
      promise.abort()

      await loopTimers(5)

      // May have started the first attempt before abort was processed
      // but should not retry
      expect(baseBaseQuery.mock.calls.length).toBeLessThanOrEqual(1)
    })

    test('resetApiState aborts retrying queries', async () => {
      const baseBaseQuery = vi.fn<BaseQueryFn>()
      baseBaseQuery.mockResolvedValue({ error: 'network error' })

      const baseQuery = retry(baseBaseQuery, { maxRetries: 10 })
      const api = createApi({
        baseQuery,
        endpoints: (build) => ({
          q1: build.query({ query: () => {} }),
        }),
      })

      const storeRef = setupApiStore(api, undefined, {
        withoutTestLifecycles: true,
      })
      storeRef.store.dispatch(api.endpoints.q1.initiate({}))

      // Let first attempt fail and start retrying
      await loopTimers(2)
      expect(baseBaseQuery).toHaveBeenCalledTimes(2)

      // Reset API state (should abort the retry loop)
      storeRef.store.dispatch(api.util.resetApiState())

      // Try to let more retries happen
      await loopTimers(5)

      // Should not have retried after resetApiState
      expect(baseBaseQuery).toHaveBeenCalledTimes(2)
    })
  })
})
