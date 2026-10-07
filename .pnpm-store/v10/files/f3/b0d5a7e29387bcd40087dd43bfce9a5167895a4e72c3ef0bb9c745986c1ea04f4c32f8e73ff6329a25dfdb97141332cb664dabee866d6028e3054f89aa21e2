import type { EntityAdapter } from '../index'
import { createEntityAdapter } from '../index'
import type { PayloadAction } from '../../createAction'
import { createAction } from '../../createAction'
import { createSlice } from '../../createSlice'
import type { BookModel } from './fixtures/book'

describe('Entity State', () => {
  let adapter: EntityAdapter<BookModel, string>

  beforeEach(() => {
    adapter = createEntityAdapter({
      selectId: (book: BookModel) => book.id,
    })
  })

  it('should let you get the initial state', () => {
    const initialState = adapter.getInitialState()

    expect(initialState).toEqual({
      ids: [],
      entities: {},
    })
  })

  it('should let you provide additional initial state properties', () => {
    const additionalProperties = { isHydrated: true }

    const initialState = adapter.getInitialState(additionalProperties)

    expect(initialState).toEqual({
      ...additionalProperties,
      ids: [],
      entities: {},
    })
  })

  it('should let you provide initial entities', () => {
    const book1: BookModel = { id: 'a', title: 'First' }

    const initialState = adapter.getInitialState(undefined, [book1])

    expect(initialState).toEqual({
      ids: [book1.id],
      entities: { [book1.id]: book1 },
    })

    const additionalProperties = { isHydrated: true }

    const initialState2 = adapter.getInitialState(additionalProperties, [book1])

    expect(initialState2).toEqual({
      ...additionalProperties,
      ids: [book1.id],
      entities: { [book1.id]: book1 },
    })
  })

  it('should allow methods to be passed as reducers', () => {
    const upsertBook = createAction<BookModel>('otherBooks/upsert')

    const booksSlice = createSlice({
      name: 'books',
      initialState: adapter.getInitialState(),
      reducers: {
        addOne: adapter.addOne,
        removeOne(state, action: PayloadAction<string>) {
          // TODO The nested `produce` calls don't mutate `state` here as I would have expected.
          // TODO (note that `state` here is actually an Immer Draft<S>, from `createReducer`)
          // TODO However, this works if we _return_ the new plain result value instead
          // TODO See https://github.com/immerjs/immer/issues/533
          const result = adapter.removeOne(state, action)
          return result
        },
      },
      extraReducers: (builder) => {
        builder.addCase(upsertBook, (state, action) => {
          return adapter.upsertOne(state, action)
        })
      },
    })

    const { addOne, removeOne } = booksSlice.actions
    const { reducer } = booksSlice

    const selectors = adapter.getSelectors()

    const book1: BookModel = { id: 'a', title: 'First' }
    const book1a: BookModel = { id: 'a', title: 'Second' }

    const afterAddOne = reducer(undefined, addOne(book1))
    expect(afterAddOne.entities[book1.id]).toBe(book1)

    const afterRemoveOne = reducer(afterAddOne, removeOne(book1.id))
    expect(afterRemoveOne.entities[book1.id]).toBeUndefined()
    expect(selectors.selectTotal(afterRemoveOne)).toBe(0)

    const afterUpsertFirst = reducer(afterRemoveOne, upsertBook(book1))
    const afterUpsertSecond = reducer(afterUpsertFirst, upsertBook(book1a))

    expect(afterUpsertSecond.entities[book1.id]).toEqual(book1a)
    expect(selectors.selectTotal(afterUpsertSecond)).toBe(1)
  })
})
