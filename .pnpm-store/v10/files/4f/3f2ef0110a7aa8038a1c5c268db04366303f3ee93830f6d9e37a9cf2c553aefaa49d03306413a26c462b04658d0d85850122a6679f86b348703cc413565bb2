import type {
  Action,
  Reducer,
  Slice,
  WithSlice,
  WithSlicePreloadedState,
} from '@reduxjs/toolkit'
import { combineSlices } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

declare const stringSlice: Slice<string, {}, 'string'>

declare const numberSlice: Slice<number, {}, 'number'>

declare const booleanReducer: Reducer<boolean>

declare const mixedReducer: Reducer<string, Action, number>

declare const mixedSliceLike: {
  reducerPath: 'mixedSlice'
  reducer: typeof mixedReducer
}

const exampleApi = createApi({
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getThing: build.query({
      query: () => '',
    }),
  }),
})

type ExampleApiState = ReturnType<typeof exampleApi.reducer>

describe('type tests', () => {
  test('combineSlices correctly combines static state', () => {
    const rootReducer = combineSlices(
      stringSlice,
      numberSlice,
      exampleApi,
      {
        boolean: booleanReducer,
        mixed: mixedReducer,
      },
      mixedSliceLike,
    )

    expectTypeOf(rootReducer(undefined, { type: '' })).toEqualTypeOf<{
      string: string
      number: number
      boolean: boolean
      api: ExampleApiState
      mixed: string
      mixedSlice: string
    }>()

    // test for correct preloaded state handling
    expectTypeOf(rootReducer).toBeCallableWith(
      { mixed: 9, mixedSlice: 9 },
      { type: '' },
    )
  })

  test('combineSlices allows passing no initial reducers', () => {
    const rootReducer = combineSlices()

    expectTypeOf(rootReducer(undefined, { type: '' })).toEqualTypeOf<{}>()

    const declaredLazy =
      combineSlices().withLazyLoadedSlices<WithSlice<typeof numberSlice>>()

    expectTypeOf(declaredLazy(undefined, { type: '' })).toEqualTypeOf<{
      number?: number
    }>()
  })

  test('withLazyLoadedSlices adds partial to state', () => {
    const rootReducer = combineSlices(stringSlice).withLazyLoadedSlices<
      WithSlice<typeof numberSlice> & WithSlice<typeof exampleApi>
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).number).toEqualTypeOf<
      number | undefined
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).api).toEqualTypeOf<
      ExampleApiState | undefined
    >()
  })

  test('inject marks injected keys as required', () => {
    const rootReducer = combineSlices(stringSlice).withLazyLoadedSlices<
      WithSlice<typeof numberSlice> &
        WithSlice<typeof exampleApi> & { boolean: boolean } & WithSlice<
          typeof mixedSliceLike
        > &
        WithSlice<{
          reducerPath: 'mixedReducer'
          reducer: typeof mixedReducer
        }>,
      WithSlicePreloadedState<typeof numberSlice> &
        WithSlicePreloadedState<typeof exampleApi> & {
          boolean: boolean
        } & WithSlicePreloadedState<typeof mixedSliceLike> &
        WithSlicePreloadedState<{
          reducerPath: 'mixedReducer'
          reducer: typeof mixedReducer
        }>
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).number).toEqualTypeOf<
      number | undefined
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).boolean).toEqualTypeOf<
      boolean | undefined
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).api).toEqualTypeOf<
      ExampleApiState | undefined
    >()

    expectTypeOf(rootReducer(undefined, { type: '' }).mixedSlice).toEqualTypeOf<
      string | undefined
    >()

    expectTypeOf(
      rootReducer(undefined, { type: '' }).mixedReducer,
    ).toEqualTypeOf<string | undefined>()

    const withNumber = rootReducer.inject(numberSlice)

    expectTypeOf(withNumber(undefined, { type: '' }).number).toBeNumber()

    const withBool = rootReducer.inject({
      reducerPath: 'boolean' as const,
      reducer: booleanReducer,
    })

    expectTypeOf(withBool(undefined, { type: '' }).boolean).toBeBoolean()

    const withApi = rootReducer.inject(exampleApi)

    expectTypeOf(
      withApi(undefined, { type: '' }).api,
    ).toEqualTypeOf<ExampleApiState>()

    const withMixedSlice = rootReducer.inject(mixedSliceLike)

    expectTypeOf(
      withMixedSlice(undefined, { type: '' }).mixedSlice,
    ).toBeString()

    const withMixedReducer = rootReducer.inject({
      reducerPath: 'mixedReducer',
      reducer: mixedReducer,
    })

    expectTypeOf(
      withMixedReducer(undefined, { type: '' }).mixedReducer,
    ).toBeString()
  })

  test('selector() allows defining selectors with injected reducers defined', () => {
    const rootReducer = combineSlices(stringSlice).withLazyLoadedSlices<
      WithSlice<typeof numberSlice> & { boolean: boolean }
    >()

    type RootState = ReturnType<typeof rootReducer>

    const withoutInjection = rootReducer.selector(
      (state: RootState) => state.number,
    )

    expectTypeOf(
      withoutInjection(rootReducer(undefined, { type: '' })),
    ).toEqualTypeOf<number | undefined>()

    const withInjection = rootReducer
      .inject(numberSlice)
      .selector((state) => state.number)

    expectTypeOf(
      withInjection(rootReducer(undefined, { type: '' })),
    ).toBeNumber()
  })

  test('selector() passes arguments through', () => {
    const rootReducer = combineSlices(stringSlice).withLazyLoadedSlices<
      WithSlice<typeof numberSlice> & { boolean: boolean }
    >()

    const selector = rootReducer
      .inject(numberSlice)
      .selector((state, num: number) => state.number)

    const state = rootReducer(undefined, { type: '' })

    expectTypeOf(selector).toBeCallableWith(state, 0)

    // required argument
    expectTypeOf(selector).parameters.not.toMatchTypeOf([state])

    // number not string
    expectTypeOf(selector).parameters.not.toMatchTypeOf([state, ''])
  })

  test('nested calls inferred correctly', () => {
    const innerReducer =
      combineSlices(stringSlice).withLazyLoadedSlices<
        WithSlice<typeof numberSlice>
      >()

    const innerSelector = innerReducer.inject(numberSlice).selector(
      (state) => state.number,
      (rootState: RootState) => rootState.inner,
    )

    const outerReducer = combineSlices({ inner: innerReducer })

    type RootState = ReturnType<typeof outerReducer>

    expectTypeOf(outerReducer(undefined, { type: '' })).toMatchTypeOf<{
      inner: { string: string }
    }>()

    expectTypeOf(
      innerSelector(outerReducer(undefined, { type: '' })),
    ).toBeNumber()
  })

  test('selector errors if selectorFn and selectState are mismatched', () => {
    const combinedReducer =
      combineSlices(stringSlice).withLazyLoadedSlices<
        WithSlice<typeof numberSlice>
      >()

    const outerReducer = combineSlices({ inner: combinedReducer })

    type RootState = ReturnType<typeof outerReducer>

    combinedReducer.selector(
      (state) => state.number,
      // @ts-expect-error wrong state returned
      (rootState: RootState) => rootState.inner.number,
    )

    combinedReducer.selector(
      (state, num: number) => state.number,
      // @ts-expect-error wrong arguments
      (rootState: RootState, str: string) => rootState.inner,
    )

    combinedReducer.selector(
      (state, num: number) => state.number,
      (rootState: RootState) => rootState.inner,
    )

    // TODO: see if there's a way of making this work
    // probably a rare case so not the end of the world if not
    combinedReducer.selector(
      (state) => state.number,
      // @ts-ignore
      (rootState: RootState, num: number) => rootState.inner,
    )
  })

  test('correct type of state is inferred when not declared via `withLazyLoadedSlices`', () => {
    // Related to https://github.com/reduxjs/redux-toolkit/issues/4171

    const combinedReducer = combineSlices(stringSlice)

    const withNumber = combinedReducer.inject(numberSlice)

    expectTypeOf(withNumber).returns.toEqualTypeOf<{
      string: string
      number: number
    }>()

    expectTypeOf(
      withNumber(undefined, { type: '' }).number,
    ).toMatchTypeOf<number>()
  })
})
