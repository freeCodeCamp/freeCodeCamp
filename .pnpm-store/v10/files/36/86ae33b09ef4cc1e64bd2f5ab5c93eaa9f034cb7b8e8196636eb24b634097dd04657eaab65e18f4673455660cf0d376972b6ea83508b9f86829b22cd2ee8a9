import { createApi } from '@reduxjs/toolkit/query/react'
import { act, renderHook } from '@testing-library/react'
import { delay } from 'msw'
import {
  actionsReducer,
  hookWaitFor,
  setupApiStore,
} from '../../tests/utils/helpers'
import type { InvalidationState } from '../core/apiState'

interface Post {
  id: string
  title: string
  contents: string
}

const baseQuery = vi.fn()
beforeEach(() => {
  baseQuery.mockReset()
})

const api = createApi({
  baseQuery: (...args: any[]) => {
    const result = baseQuery(...args)
    if (typeof result === 'object' && 'then' in result)
      return result
        .then((data: any) => ({ data, meta: 'meta' }))
        .catch((e: any) => ({ error: e }))
    return { data: result, meta: 'meta' }
  },
  tagTypes: ['Post'],
  endpoints: (build) => ({
    post: build.query<Post, string>({
      query: (id) => `post/${id}`,
      providesTags: ['Post'],
    }),
    listPosts: build.query<Post[], void>({
      query: () => `posts`,
      providesTags: (result) => [
        ...(result?.map(({ id }) => ({ type: 'Post' as const, id })) ?? []),
        'Post',
      ],
    }),
    updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `post/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const { undo } = dispatch(
          api.util.updateQueryData('post', id, (draft) => {
            Object.assign(draft, patch)
          }),
        )
        queryFulfilled.catch(undo)
      },
      invalidatesTags: (result) => (result ? ['Post'] : []),
    }),
  }),
})

const storeRef = setupApiStore(api, { ...actionsReducer })

describe('basic lifecycle', () => {
  let onStart = vi.fn(),
    onError = vi.fn(),
    onSuccess = vi.fn()

  const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
      test: build.mutation({
        query: (x) => x,
        async onQueryStarted(arg, api) {
          onStart(arg)
          try {
            const result = await api.queryFulfilled
            onSuccess(result)
          } catch (e) {
            onError(e)
          }
        },
      }),
    }),
    overrideExisting: true,
  })

  beforeEach(() => {
    onStart.mockReset()
    onError.mockReset()
    onSuccess.mockReset()
  })

  test('success', async () => {
    const { result } = renderHook(
      () => extendedApi.endpoints.test.useMutation(),
      { wrapper: storeRef.wrapper },
    )

    baseQuery.mockResolvedValue('success')

    expect(onStart).not.toHaveBeenCalled()
    expect(baseQuery).not.toHaveBeenCalled()
    act(() => void result.current[0]('arg'))
    expect(onStart).toHaveBeenCalledWith('arg')
    expect(baseQuery).toHaveBeenCalledWith('arg', expect.any(Object), undefined)

    expect(onError).not.toHaveBeenCalled()
    expect(onSuccess).not.toHaveBeenCalled()
    await act(() => delay(5))
    expect(onError).not.toHaveBeenCalled()
    expect(onSuccess).toHaveBeenCalledWith({ data: 'success', meta: 'meta' })
  })

  test('error', async () => {
    const { result } = renderHook(
      () => extendedApi.endpoints.test.useMutation(),
      { wrapper: storeRef.wrapper },
    )

    baseQuery.mockRejectedValueOnce('error')
    expect(onStart).not.toHaveBeenCalled()
    expect(baseQuery).not.toHaveBeenCalled()

    act(() => void result.current[0]('arg'))
    expect(onStart).toHaveBeenCalledWith('arg')
    expect(baseQuery).toHaveBeenCalledWith('arg', expect.any(Object), undefined)
    expect(onError).not.toHaveBeenCalled()
    expect(onSuccess).not.toHaveBeenCalled()
    await act(() => delay(5))
    expect(onError).toHaveBeenCalledWith({
      error: 'error',
      isUnhandledError: false,
      meta: undefined,
    })
    expect(onSuccess).not.toHaveBeenCalled()
  })
})

describe('updateQueryData', () => {
  test('updates cache values, can apply inverse patch', async () => {
    baseQuery
      .mockResolvedValueOnce({
        id: '3',
        title: 'All about cheese.',
        contents: 'TODO',
      })
      // TODO I have no idea why the query is getting called multiple times,
      // but passing an additional mocked value (_any_ value)
      // seems to silence some annoying "got an undefined result" logging
      .mockResolvedValueOnce(42)
    const { result } = renderHook(() => api.endpoints.post.useQuery('3'), {
      wrapper: storeRef.wrapper,
    })
    await hookWaitFor(() => expect(result.current.isSuccess).toBeTruthy())

    const dataBefore = result.current.data
    expect(dataBefore).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'TODO',
    })

    let returnValue!: ReturnType<ReturnType<typeof api.util.updateQueryData>>
    act(() => {
      returnValue = storeRef.store.dispatch(
        api.util.updateQueryData('post', '3', (draft) => {
          draft.contents = 'I love cheese!'
        }),
      )
    })

    expect(result.current.data).not.toBe(dataBefore)
    expect(result.current.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'I love cheese!',
    })

    expect(returnValue).toEqual({
      inversePatches: [{ op: 'replace', path: ['contents'], value: 'TODO' }],
      patches: [{ op: 'replace', path: ['contents'], value: 'I love cheese!' }],
      undo: expect.any(Function),
    })

    act(() => {
      storeRef.store.dispatch(
        api.util.patchQueryData('post', '3', returnValue.inversePatches),
      )
    })

    expect(result.current.data).toEqual(dataBefore)
  })

  test('updates (list) cache values including provided tags, undos that', async () => {
    baseQuery
      .mockResolvedValueOnce([
        { id: '3', title: 'All about cheese.', contents: 'TODO' },
      ])
      .mockResolvedValueOnce(42)
    const { result } = renderHook(() => api.endpoints.listPosts.useQuery(), {
      wrapper: storeRef.wrapper,
    })
    await hookWaitFor(() => expect(result.current.isSuccess).toBeTruthy())

    let provided!: InvalidationState<'Post'>
    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    const provided3 = provided.tags.Post['3']

    let returnValue!: ReturnType<ReturnType<typeof api.util.updateQueryData>>
    act(() => {
      returnValue = storeRef.store.dispatch(
        api.util.updateQueryData(
          'listPosts',
          undefined,
          (draft) => {
            draft.push({
              id: '4',
              title: 'Mostly about cheese.',
              contents: 'TODO',
            })
          },
          true,
        ),
      )
    })

    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    const provided4 = provided.tags.Post['4']

    expect(provided4).toEqual(provided3)

    act(() => {
      returnValue.undo()
    })

    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    const provided4Next = provided.tags.Post['4']

    expect(provided4Next).toEqual([])
  })

  test('updates (list) cache values excluding provided tags, undoes that', async () => {
    baseQuery
      .mockResolvedValueOnce([
        { id: '3', title: 'All about cheese.', contents: 'TODO' },
      ])
      .mockResolvedValueOnce(42)
    const { result } = renderHook(() => api.endpoints.listPosts.useQuery(), {
      wrapper: storeRef.wrapper,
    })
    await hookWaitFor(() => expect(result.current.isSuccess).toBeTruthy())

    let provided!: InvalidationState<'Post'>
    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    let returnValue!: ReturnType<ReturnType<typeof api.util.updateQueryData>>
    act(() => {
      returnValue = storeRef.store.dispatch(
        api.util.updateQueryData(
          'listPosts',
          undefined,
          (draft) => {
            draft.push({
              id: '4',
              title: 'Mostly about cheese.',
              contents: 'TODO',
            })
          },
          false,
        ),
      )
    })

    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    const provided4 = provided.tags.Post['4']

    expect(provided4).toEqual(undefined)

    act(() => {
      returnValue.undo()
    })

    act(() => {
      provided = storeRef.store.getState().api.provided
    })

    const provided4Next = provided.tags.Post['4']

    expect(provided4Next).toEqual(undefined)
  })

  test('does not update non-existing values', async () => {
    baseQuery
      .mockImplementationOnce(async () => ({
        id: '3',
        title: 'All about cheese.',
        contents: 'TODO',
      }))
      .mockResolvedValueOnce(42)

    const { result } = renderHook(() => api.endpoints.post.useQuery('3'), {
      wrapper: storeRef.wrapper,
    })
    await hookWaitFor(() => expect(result.current.isSuccess).toBeTruthy())

    const dataBefore = result.current.data
    expect(dataBefore).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'TODO',
    })

    let returnValue!: ReturnType<ReturnType<typeof api.util.updateQueryData>>
    act(() => {
      returnValue = storeRef.store.dispatch(
        api.util.updateQueryData('post', '4', (draft) => {
          draft.contents = 'I love cheese!'
        }),
      )
    })

    expect(result.current.data).toBe(dataBefore)

    expect(returnValue).toEqual({
      inversePatches: [],
      patches: [],
      undo: expect.any(Function),
    })
  })
})

describe('full integration', () => {
  test('success case', async () => {
    baseQuery
      .mockResolvedValueOnce({
        id: '3',
        title: 'All about cheese.',
        contents: 'TODO',
      })
      .mockResolvedValueOnce({
        id: '3',
        title: 'Meanwhile, this changed server-side.',
        contents: 'Delicious cheese!',
      })
      .mockResolvedValueOnce({
        id: '3',
        title: 'Meanwhile, this changed server-side.',
        contents: 'Delicious cheese!',
      })
      .mockResolvedValueOnce(42)
    const { result } = renderHook(
      () => ({
        query: api.endpoints.post.useQuery('3'),
        mutation: api.endpoints.updatePost.useMutation(),
      }),
      { wrapper: storeRef.wrapper },
    )
    await hookWaitFor(() => expect(result.current.query.isSuccess).toBeTruthy())

    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'TODO',
    })

    act(() => {
      result.current.mutation[0]({ id: '3', contents: 'Delicious cheese!' })
    })

    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'Delicious cheese!',
    })

    await hookWaitFor(() =>
      expect(result.current.query.data).toEqual({
        id: '3',
        title: 'Meanwhile, this changed server-side.',
        contents: 'Delicious cheese!',
      }),
    )
  })

  test('error case', async () => {
    baseQuery
      .mockResolvedValueOnce({
        id: '3',
        title: 'All about cheese.',
        contents: 'TODO',
      })
      .mockRejectedValueOnce('some error!')
      .mockResolvedValueOnce({
        id: '3',
        title: 'Meanwhile, this changed server-side.',
        contents: 'TODO',
      })
      .mockResolvedValueOnce(42)

    const { result } = renderHook(
      () => ({
        query: api.endpoints.post.useQuery('3'),
        mutation: api.endpoints.updatePost.useMutation(),
      }),
      { wrapper: storeRef.wrapper },
    )
    await hookWaitFor(() => expect(result.current.query.isSuccess).toBeTruthy())

    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'TODO',
    })

    act(() => {
      result.current.mutation[0]({ id: '3', contents: 'Delicious cheese!' })
    })

    // optimistic update
    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'Delicious cheese!',
    })

    // rollback
    await hookWaitFor(() =>
      expect(result.current.query.data).toEqual({
        id: '3',
        title: 'All about cheese.',
        contents: 'TODO',
      }),
    )

    // mutation failed - will not invalidate query and not refetch data from the server
    await expect(() =>
      hookWaitFor(
        () =>
          expect(result.current.query.data).toEqual({
            id: '3',
            title: 'Meanwhile, this changed server-side.',
            contents: 'TODO',
          }),
        50,
      ),
    ).rejects.toBeTruthy()

    act(() => void result.current.query.refetch())

    // manually refetching gives up-to-date data
    await hookWaitFor(
      () =>
        expect(result.current.query.data).toEqual({
          id: '3',
          title: 'Meanwhile, this changed server-side.',
          contents: 'TODO',
        }),
      50,
    )
  })
})
