import type { TagDescription } from '@reduxjs/toolkit/query'
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query'
import { waitFor } from '@testing-library/react'
import { delay } from 'msw'
import { setupApiStore } from '../../tests/utils/helpers'

const tagTypes = [
  'apple',
  'pear',
  'banana',
  'tomato',
  'cat',
  'dog',
  'giraffe',
] as const
type TagTypes = (typeof tagTypes)[number]
type ProvidedTags = TagDescription<TagTypes>[] 
type InvalidatesTags = (ProvidedTags[number] | null | undefined)[]
/** providesTags, invalidatesTags, shouldInvalidate */
const caseMatrix: [ProvidedTags, InvalidatesTags, boolean][] = [
  // *****************************
  // basic invalidation behavior
  // *****************************

  // string
  [['apple'], ['apple'], true],
  [['apple'], ['pear'], false],
  // string and type only behave identical
  [[{ type: 'apple' }], ['apple'], true],
  [[{ type: 'apple' }], ['pear'], false],
  [['apple'], [{ type: 'apple' }], true],
  [['apple'], [{ type: 'pear' }], false],
  // type only invalidates type + id
  [[{ type: 'apple', id: 1 }], [{ type: 'apple' }], true],
  [[{ type: 'pear', id: 1 }], ['apple'], false],
  // type + id never invalidates type only
  [['apple'], [{ type: 'apple', id: 1 }], false],
  [['pear'], [{ type: 'apple', id: 1 }], false],
  // type + id invalidates type + id
  [[{ type: 'apple', id: 1 }], [{ type: 'apple', id: 1 }], true],
  [[{ type: 'apple', id: 1 }], [{ type: 'apple', id: 2 }], false],
  // null and undefined
  [['apple'], [null], false],
  [['apple'], [undefined], false],
  [['apple'], [null, 'apple'], true],
  [['apple'], [undefined, 'apple'], true],
  // *****************************
  // test multiple values in array
  // *****************************

  [['apple', 'banana', 'tomato'], ['apple'], true],
  [['apple'], ['pear', 'banana', 'tomato'], false],
  [
    [
      { type: 'apple', id: 1 },
      { type: 'apple', id: 3 },
      { type: 'apple', id: 4 },
    ],
    [{ type: 'apple', id: 1 }],
    true,
  ],
  [
    [{ type: 'apple', id: 1 }],
    [
      { type: 'apple', id: 2 },
      { type: 'apple', id: 3 },
      { type: 'apple', id: 4 },
    ],
    false,
  ],
]

test.each(caseMatrix)(
  '\tprovidesTags: %O,\n\tinvalidatesTags: %O,\n\tshould invalidate: %s',
  async (providesTags, invalidatesTags, shouldInvalidate) => {
    let queryCount = 0
    const {
      store,
      api,
      api: {
        endpoints: { invalidating, providing, unrelated },
      },
    } = setupApiStore(
      createApi({
        baseQuery: fakeBaseQuery(),
        tagTypes,
        endpoints: (build) => ({
          providing: build.query<unknown, void>({
            queryFn() {
              queryCount++
              return { data: {} }
            },
            providesTags,
          }),
          unrelated: build.query<unknown, void>({
            queryFn() {
              return { data: {} }
            },
            providesTags: ['cat', 'dog', { type: 'giraffe', id: 8 }],
          }),
          invalidating: build.mutation<unknown, void>({
            queryFn() {
              return { data: {} }
            },
            invalidatesTags,
          }),
        }),
      }),
      undefined,
      { withoutTestLifecycles: true },
    )

    store.dispatch(providing.initiate())
    store.dispatch(unrelated.initiate())
    expect(queryCount).toBe(1)
    await waitFor(() => {
      expect(api.endpoints.providing.select()(store.getState()).status).toBe(
        'fulfilled',
      )
      expect(api.endpoints.unrelated.select()(store.getState()).status).toBe(
        'fulfilled',
      )
    })
    const toInvalidate = api.util.selectInvalidatedBy(
      store.getState(),
      invalidatesTags,
    )

    if (shouldInvalidate) {
      expect(toInvalidate).toEqual([
        {
          queryCacheKey: 'providing(undefined)',
          endpointName: 'providing',
          originalArgs: undefined,
        },
      ])
    } else {
      expect(toInvalidate).toEqual([])
    }

    store.dispatch(invalidating.initiate())
    expect(queryCount).toBe(1)
    await delay(2)
    expect(queryCount).toBe(shouldInvalidate ? 2 : 1)
  },
)
