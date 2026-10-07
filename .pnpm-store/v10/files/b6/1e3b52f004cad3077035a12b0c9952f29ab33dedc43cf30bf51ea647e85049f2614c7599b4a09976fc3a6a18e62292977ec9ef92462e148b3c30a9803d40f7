import { createApi } from '@reduxjs/toolkit/query/react'
import { createAction } from '@reduxjs/toolkit'
import {
  actionsReducer,
  hookWaitFor,
  setupApiStore,
} from '../../tests/utils/helpers'
import {
  render,
  renderHook,
  act,
  waitFor,
  screen,
} from '@testing-library/react'
import { delay } from 'msw'

interface Post {
  id: string
  title: string
  contents: string
}

interface FolderT {
  id: number
  children: FolderT[]
}

const baseQuery = vi.fn()
beforeEach(() => baseQuery.mockReset())

const postAddedAction = createAction<string>('postAdded')

const api = createApi({
  baseQuery: (...args: any[]) => {
    const result = baseQuery(...args)
    if (typeof result === 'object' && 'then' in result)
      return result
        .then((data: any) => ({ data, meta: 'meta' }))
        .catch((e: any) => ({ error: e }))
    return { data: result, meta: 'meta' }
  },
  tagTypes: ['Post', 'Folder'],
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({ query: () => '/posts' }),
    post: build.query<Post, string>({
      query: (id) => `post/${id}`,
      providesTags: ['Post'],
    }),
    updatePost: build.mutation<void, Pick<Post, 'id'> & Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `post/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
        const currentItem = api.endpoints.post.select(arg.id)(getState())
        if (currentItem?.data) {
          dispatch(
            api.util.upsertQueryData('post', arg.id, {
              ...currentItem.data,
              ...arg,
            }),
          )
        }
      },
      invalidatesTags: (result) => (result ? ['Post'] : []),
    }),
    post2: build.query<Post, string>({
      queryFn: async (id) => {
        await delay(20)
        return { data: { id, title: 'All about cheese.', contents: 'TODO' } }
      },
    }),
    postWithSideEffect: build.query<Post, string>({
      query: (id) => `post/${id}`,
      providesTags: (result) => {
        if (result) {
          return [{ type: 'Post', id: result.id } as const]
        }
        return []
      },
      async onCacheEntryAdded(arg, api) {
        // Verify that lifecycle promise resolution works
        const res = await api.cacheDataLoaded

        // and leave a side effect we can check in the test
        api.dispatch(postAddedAction(res.data.id))
      },
      keepUnusedDataFor: 0.1,
    }),
    getFolder: build.query<FolderT, number>({
      queryFn: async (args) => {
        return {
          data: {
            id: args,
            // Folder contains children that are as well folders
            children: [{ id: 2, children: [] }],
          },
        }
      },
      providesTags: (result, err, args) => [{ type: 'Folder', id: args }],
      onQueryStarted: async (args, queryApi) => {
        const { data } = await queryApi.queryFulfilled

        // Upsert getFolder endpoint with children from response data
        const upsertData = data.children.map((child) => ({
          arg: child.id,
          endpointName: 'getFolder' as const,
          value: child,
        }))

        queryApi.dispatch(api.util.upsertQueryEntries(upsertData))
      },
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

  test('Does basic inserts and upserts', async () => {
    const newPost: Post = {
      id: '3',
      contents: 'Inserted content',
      title: 'Inserted title',
    }
    const insertPromise = storeRef.store.dispatch(
      api.util.upsertQueryData('post', newPost.id, newPost),
    )

    await insertPromise

    const selectPost3 = api.endpoints.post.select(newPost.id)
    const insertedPostEntry = selectPost3(storeRef.store.getState())
    expect(insertedPostEntry.isSuccess).toBe(true)
    expect(insertedPostEntry.data).toEqual(newPost)

    const updatedPost: Post = {
      id: '3',
      contents: 'Updated content',
      title: 'Updated title',
    }

    const updatePromise = storeRef.store.dispatch(
      api.util.upsertQueryData('post', updatedPost.id, updatedPost),
    )

    await updatePromise

    const updatedPostEntry = selectPost3(storeRef.store.getState())

    expect(updatedPostEntry.isSuccess).toBe(true)
    expect(updatedPostEntry.data).toEqual(updatedPost)
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

describe('upsertQueryData', () => {
  test('inserts cache entry', async () => {
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

    await act(async () => {
      storeRef.store.dispatch(
        api.util.upsertQueryData('post', '3', {
          id: '3',
          title: 'All about cheese.',
          contents: 'I love cheese!',
        }),
      )
    })

    expect(result.current.data).not.toBe(dataBefore)
    expect(result.current.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'I love cheese!',
    })
  })

  test('does update non-existing values', async () => {
    baseQuery
      // throw an error to make sure there is no cached data
      .mockImplementationOnce(async () => {
        throw new Error('failed to load')
      })
      .mockResolvedValueOnce(42)

    // a subscriber is needed to have the data stay in the cache
    // Not sure if this is the wanted behavior, I would have liked
    // it to stay in the cache for the x amount of time the cache
    // is preserved normally after the last subscriber was unmounted
    const { result, rerender } = renderHook(
      () => api.endpoints.post.useQuery('4'),
      { wrapper: storeRef.wrapper },
    )
    await hookWaitFor(() => expect(result.current.isError).toBeTruthy())

    // upsert the data
    act(() => {
      storeRef.store.dispatch(
        api.util.upsertQueryData('post', '4', {
          id: '4',
          title: 'All about cheese',
          contents: 'I love cheese!',
        }),
      )
    })

    // rerender the hook
    rerender()
    // wait until everything has settled
    await hookWaitFor(() => expect(result.current.isSuccess).toBeTruthy())

    // the cached data is returned as the result
    expect(result.current.data).toStrictEqual({
      id: '4',
      title: 'All about cheese',
      contents: 'I love cheese!',
    })
  })

  test('upsert while a normal query is running (success)', async () => {
    const fetchedData = {
      id: '3',
      title: 'All about cheese.',
      contents: 'Yummy',
    }
    baseQuery.mockImplementation(() => delay(20).then(() => fetchedData))
    const upsertedData = {
      id: '3',
      title: 'Data from a SSR Render',
      contents: 'This is just some random data',
    }

    const selector = api.endpoints.post.select('3')
    const fetchRes = storeRef.store.dispatch(api.endpoints.post.initiate('3'))
    const upsertRes = storeRef.store.dispatch(
      api.util.upsertQueryData('post', '3', upsertedData),
    )

    await upsertRes
    let state = selector(storeRef.store.getState())
    expect(state.data).toEqual(upsertedData)

    await fetchRes
    state = selector(storeRef.store.getState())
    expect(state.data).toEqual(fetchedData)
  })
  test('upsert while a normal query is running (rejected)', async () => {
    baseQuery.mockImplementationOnce(async () => {
      await delay(20)
      // eslint-disable-next-line no-throw-literal
      throw 'Error!'
    })
    const upsertedData = {
      id: '3',
      title: 'Data from a SSR Render',
      contents: 'This is just some random data',
    }

    const selector = api.endpoints.post.select('3')
    const fetchRes = storeRef.store.dispatch(api.endpoints.post.initiate('3'))
    const upsertRes = storeRef.store.dispatch(
      api.util.upsertQueryData('post', '3', upsertedData),
    )

    await upsertRes
    let state = selector(storeRef.store.getState())
    expect(state.data).toEqual(upsertedData)
    expect(state.isSuccess).toBeTruthy()

    await fetchRes
    state = selector(storeRef.store.getState())
    expect(state.data).toEqual(upsertedData)
    expect(state.isError).toBeTruthy()
  })
})

describe('upsertQueryEntries', () => {
  const posts: Post[] = [
    { id: '1', contents: 'A', title: 'A' },
    { id: '2', contents: 'B', title: 'B' },
    { id: '3', contents: 'C', title: 'C' },
  ]

  const entriesAction = api.util.upsertQueryEntries([
    { endpointName: 'getPosts', arg: undefined, value: posts },
    ...posts.map((post) => ({
      endpointName: 'postWithSideEffect' as const,
      arg: post.id,
      value: post,
    })),
  ])

  test('Upserts many entries at once', async () => {
    storeRef.store.dispatch(entriesAction)

    const state = storeRef.store.getState()

    expect(api.endpoints.getPosts.select()(state).data).toBe(posts)

    for (const post of posts) {
      expect(api.endpoints.postWithSideEffect.select(post.id)(state).data).toBe(
        post,
      )

      // Should have added tags
      expect(state.api.provided.tags.Post[post.id]).toEqual([
        `postWithSideEffect("${post.id}")`,
      ])
    }
  })

  test('Triggers cache lifecycles and side effects', async () => {
    storeRef.store.dispatch(entriesAction)

    // Tricky timing. The cache data promises will be resolved
    // in microtasks. We need to wait for them. Best to do this
    // in a loop just to avoid a hardcoded delay, but also this
    // needs to complete before `keepUnusedDataFor` expires them.
    await waitFor(
      () => {
        const state = storeRef.store.getState()

        // onCacheEntryAdded should have run for each post,
        // including cache data being resolved
        for (const post of posts) {
          const matchingSideEffectAction = state.actions.find(
            (action) =>
              postAddedAction.match(action) && action.payload === post.id,
          )
          expect(matchingSideEffectAction).toBeTruthy()
        }

        const selectedData =
          api.endpoints.postWithSideEffect.select('1')(state).data

        expect(selectedData).toBe(posts[0])
      },
      { timeout: 150, interval: 5 },
    )

    // The cache data should be removed after the keepUnusedDataFor time,
    // so wait longer than that
    await delay(300)

    const stateAfter = storeRef.store.getState()

    expect(api.endpoints.postWithSideEffect.select('1')(stateAfter).data).toBe(
      undefined,
    )
  })

  test('Handles repeated upserts and async lifecycles', async () => {
    const StateForUpsertFolder = ({ folderId }: { folderId: number }) => {
      const { status } = api.useGetFolderQuery(folderId)

      return (
        <>
          <div>
            Status getFolder with ID (
            {folderId === 1 ? 'original request' : 'upserted'}) {folderId}:{' '}
            <span data-testid={`status-${folderId}`}>{status}</span>
          </div>
        </>
      )
    }

    const Folder = () => {
      const { data, isLoading, isError } = api.useGetFolderQuery(1)

      return (
        <div>
          <h1>Folders</h1>

          {isLoading && <div>Loading...</div>}

          {isError && <div>Error...</div>}

          <StateForUpsertFolder key={`state-${1}`} folderId={1} />
          <StateForUpsertFolder key={`state-${2}`} folderId={2} />
        </div>
      )
    }

    render(<Folder />, { wrapper: storeRef.wrapper })

    await waitFor(() => {
      const { actions } = storeRef.store.getState()
      // Inspection:
      // - 2 inits
      // - 2 pendings, 2 fulfilleds for the hook queries
      // - 2 upserts
      expect(actions.length).toBe(8)
      expect(
        actions.filter((a) => api.util.upsertQueryEntries.match(a)).length,
      ).toBe(2)
    })
    expect(screen.getByTestId('status-2').textContent).toBe('fulfilled')
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

    await act(async () => {
      await result.current.mutation[0]({
        id: '3',
        contents: 'Delicious cheese!',
      })
    })

    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'Meanwhile, this changed server-side.',
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

    await act(async () => {
      await result.current.mutation[0]({
        id: '3',
        contents: 'Delicious cheese!',
      })
    })

    // optimistic update
    expect(result.current.query.data).toEqual({
      id: '3',
      title: 'All about cheese.',
      contents: 'Delicious cheese!',
    })

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

  test('Interop with in-flight requests', async () => {
    await act(async () => {
      const fetchRes = storeRef.store.dispatch(
        api.endpoints.post2.initiate('3'),
      )

      const upsertRes = storeRef.store.dispatch(
        api.util.upsertQueryData('post2', '3', {
          id: '3',
          title: 'Upserted title',
          contents: 'Upserted contents',
        }),
      )

      const selectEntry = api.endpoints.post2.select('3')
      await waitFor(
        () => {
          const entry1 = selectEntry(storeRef.store.getState())
          expect(entry1.data).toEqual({
            id: '3',
            title: 'Upserted title',
            contents: 'Upserted contents',
          })
        },
        { interval: 1, timeout: 15 },
      )
      await waitFor(
        () => {
          const entry2 = selectEntry(storeRef.store.getState())
          expect(entry2.data).toEqual({
            id: '3',
            title: 'All about cheese.',
            contents: 'TODO',
          })
        },
        { interval: 1 },
      )
    })
  })
})
