import type {
  QueryStateSelector,
  UseMutation,
  UseQuery,
} from '@internal/query/react/buildHooks'
import { ANY } from '@internal/tests/utils/helpers'
import type { SerializedError } from '@reduxjs/toolkit'
import type {
  QueryDefinition,
  SubscriptionOptions,
  TypedQueryStateSelector,
} from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useState } from 'react'

let amount = 0
let nextItemId = 0

interface Item {
  id: number
}

const api = createApi({
  baseQuery: (arg: any) => {
    if (arg?.body && 'amount' in arg.body) {
      amount += 1
    }

    if (arg?.body && 'forceError' in arg.body) {
      return {
        error: {
          status: 500,
          data: null,
        },
      }
    }

    if (arg?.body && 'listItems' in arg.body) {
      const items: Item[] = []
      for (let i = 0; i < 3; i++) {
        const item = { id: nextItemId++ }
        items.push(item)
      }
      return { data: items }
    }

    return {
      data: arg?.body ? { ...arg.body, ...(amount ? { amount } : {}) } : {},
    }
  },
  endpoints: (build) => ({
    getUser: build.query<{ name: string }, number>({
      query: () => ({
        body: { name: 'Timmy' },
      }),
    }),
    getUserAndForceError: build.query<{ name: string }, number>({
      query: () => ({
        body: {
          forceError: true,
        },
      }),
    }),
    getIncrementedAmount: build.query<{ amount: number }, void>({
      query: () => ({
        url: '',
        body: {
          amount,
        },
      }),
    }),
    updateUser: build.mutation<{ name: string }, { name: string }>({
      query: (update) => ({ body: update }),
    }),
    getError: build.query({
      query: () => '/error',
    }),
    listItems: build.query<Item[], { pageNumber: number }>({
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      query: ({ pageNumber }) => ({
        url: `items?limit=1&offset=${pageNumber}`,
        body: {
          listItems: true,
        },
      }),
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch: () => {
        return true
      },
    }),
  }),
})

describe('type tests', () => {
  test('useLazyQuery hook callback returns various properties to handle the result', () => {
    function User() {
      const [getUser] = api.endpoints.getUser.useLazyQuery()
      const [{ successMsg, errMsg, isAborted }, setValues] = useState({
        successMsg: '',
        errMsg: '',
        isAborted: false,
      })

      const handleClick = (abort: boolean) => async () => {
        const res = getUser(1)

        // no-op simply for clearer type assertions
        res.then((result) => {
          if (result.isSuccess) {
            expectTypeOf(result).toMatchTypeOf<{
              data: {
                name: string
              }
            }>()
          }

          if (result.isError) {
            expectTypeOf(result).toMatchTypeOf<{
              error: { status: number; data: unknown } | SerializedError
            }>()
          }
        })

        expectTypeOf(res.arg).toBeNumber()

        expectTypeOf(res.requestId).toBeString()

        expectTypeOf(res.abort).toEqualTypeOf<() => void>()

        expectTypeOf(res.unsubscribe).toEqualTypeOf<() => void>()

        expectTypeOf(res.updateSubscriptionOptions).toEqualTypeOf<
          (options: SubscriptionOptions) => void
        >()

        expectTypeOf(res.refetch).toMatchTypeOf<() => void>()

        expectTypeOf(res.unwrap()).resolves.toEqualTypeOf<{ name: string }>()
      }

      return (
        <div>
          <button onClick={handleClick(false)}>Fetch User successfully</button>
          <button onClick={handleClick(true)}>Fetch User and abort</button>
          <div>{successMsg}</div>
          <div>{errMsg}</div>
          <div>{isAborted ? 'Request was aborted' : ''}</div>
        </div>
      )
    }
  })

  test('useMutation hook callback returns various properties to handle the result', async () => {
    function User() {
      const [updateUser] = api.endpoints.updateUser.useMutation()
      const [successMsg, setSuccessMsg] = useState('')
      const [errMsg, setErrMsg] = useState('')
      const [isAborted, setIsAborted] = useState(false)

      const handleClick = async () => {
        const res = updateUser({ name: 'Banana' })

        expectTypeOf(res).resolves.toMatchTypeOf<
          | {
              error: { status: number; data: unknown } | SerializedError
            }
          | {
              data: {
                name: string
              }
            }
        >()

        expectTypeOf(res.arg).toMatchTypeOf<{
          endpointName: string
          originalArgs: { name: string }
          track?: boolean
        }>()

        expectTypeOf(res.requestId).toBeString()

        expectTypeOf(res.abort).toEqualTypeOf<() => void>()

        expectTypeOf(res.unwrap()).resolves.toEqualTypeOf<{ name: string }>()

        expectTypeOf(res.reset).toEqualTypeOf<() => void>()
      }

      return (
        <div>
          <button onClick={handleClick}>Update User and abort</button>
          <div>{successMsg}</div>
          <div>{errMsg}</div>
          <div>{isAborted ? 'Request was aborted' : ''}</div>
        </div>
      )
    }
  })

  test('top level named hooks', () => {
    interface Post {
      id: number
      name: string
      fetched_at: string
    }

    type PostsResponse = Post[]

    const api = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/' }),
      tagTypes: ['Posts'],
      endpoints: (build) => ({
        getPosts: build.query<PostsResponse, void>({
          query: () => ({ url: 'posts' }),
          providesTags: (result) =>
            result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
        }),
        updatePost: build.mutation<Post, Partial<Post>>({
          query: ({ id, ...body }) => ({
            url: `post/${id}`,
            method: 'PUT',
            body,
          }),
          invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
        addPost: build.mutation<Post, Partial<Post>>({
          query: (body) => ({
            url: `post`,
            method: 'POST',
            body,
          }),
          invalidatesTags: ['Posts'],
        }),
      }),
    })

    expectTypeOf(api.useGetPostsQuery).toEqualTypeOf(
      api.endpoints.getPosts.useQuery,
    )

    expectTypeOf(api.useUpdatePostMutation).toEqualTypeOf(
      api.endpoints.updatePost.useMutation,
    )

    expectTypeOf(api.useAddPostMutation).toEqualTypeOf(
      api.endpoints.addPost.useMutation,
    )
  })

  test('UseQuery type can be used to recreate the hook type', () => {
    const fakeQuery = ANY as UseQuery<
      typeof api.endpoints.getUser.Types.QueryDefinition
    >

    expectTypeOf(fakeQuery).toEqualTypeOf(api.endpoints.getUser.useQuery)
  })

  test('UseMutation type can be used to recreate the hook type', () => {
    const fakeMutation = ANY as UseMutation<
      typeof api.endpoints.updateUser.Types.MutationDefinition
    >

    expectTypeOf(fakeMutation).toEqualTypeOf(
      api.endpoints.updateUser.useMutation,
    )
  })

  test('TypedQueryStateSelector creates a pre-typed version of QueryStateSelector', () => {
    type Post = {
      id: number
      title: string
    }

    type PostsApiResponse = {
      posts: Post[]
      total: number
      skip: number
      limit: number
    }

    type QueryArgument = number | undefined

    type BaseQueryFunction = ReturnType<typeof fetchBaseQuery>

    type SelectedResult = Pick<PostsApiResponse, 'posts'>

    const postsApiSlice = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/posts' }),
      reducerPath: 'postsApi',
      tagTypes: ['Posts'],
      endpoints: (build) => ({
        getPosts: build.query<PostsApiResponse, QueryArgument>({
          query: (limit = 5) => `?limit=${limit}&select=title`,
        }),
      }),
    })

    const { useGetPostsQuery } = postsApiSlice

    function PostById({ id }: { id: number }) {
      const { post } = useGetPostsQuery(undefined, {
        selectFromResult: (state) => ({
          post: state.data?.posts.find((post) => post.id === id),
        }),
      })

      expectTypeOf(post).toEqualTypeOf<Post | undefined>()

      return <li>{post?.title}</li>
    }

    const EMPTY_ARRAY: Post[] = []

    const typedSelectFromResult: TypedQueryStateSelector<
      PostsApiResponse,
      QueryArgument,
      BaseQueryFunction,
      SelectedResult
    > = (state) => ({ posts: state.data?.posts ?? EMPTY_ARRAY })

    function PostsList() {
      const { posts } = useGetPostsQuery(undefined, {
        selectFromResult: typedSelectFromResult,
      })

      expectTypeOf(posts).toEqualTypeOf<Post[]>()

      return (
        <div>
          <ul>
            {posts.map((post) => (
              <PostById key={post.id} id={post.id} />
            ))}
          </ul>
        </div>
      )
    }
  })
})
