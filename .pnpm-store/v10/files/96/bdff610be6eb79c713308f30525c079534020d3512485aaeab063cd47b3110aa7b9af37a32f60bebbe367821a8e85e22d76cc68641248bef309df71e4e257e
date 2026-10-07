import { createDraftSafeSelectorCreator } from '../../createDraftSafeSelector'
import type { EntityAdapter, EntityState } from '../index'
import { createEntityAdapter } from '../index'
import type { EntitySelectors } from '../models'
import type { BookModel } from './fixtures/book'
import { AClockworkOrange, AnimalFarm, TheGreatGatsby } from './fixtures/book'
import type { Selector } from 'reselect'
import { createSelector, weakMapMemoize } from 'reselect'
import { vi } from 'vitest'

describe('Entity State Selectors', () => {
  describe('Composed Selectors', () => {
    interface State {
      books: EntityState<BookModel, string>
    }

    let adapter: EntityAdapter<BookModel, string>
    let selectors: EntitySelectors<BookModel, State, string>
    let state: State

    beforeEach(() => {
      adapter = createEntityAdapter({
        selectId: (book: BookModel) => book.id,
      })

      state = {
        books: adapter.setAll(adapter.getInitialState(), [
          AClockworkOrange,
          AnimalFarm,
          TheGreatGatsby,
        ]),
      }

      selectors = adapter.getSelectors((state: State) => state.books)
    })

    it('should create a selector for selecting the ids', () => {
      const ids = selectors.selectIds(state)

      expect(ids).toEqual(state.books.ids)
    })

    it('should create a selector for selecting the entities', () => {
      const entities = selectors.selectEntities(state)

      expect(entities).toEqual(state.books.entities)
    })

    it('should create a selector for selecting the list of models', () => {
      const models = selectors.selectAll(state)

      expect(models).toEqual([AClockworkOrange, AnimalFarm, TheGreatGatsby])
    })

    it('should create a selector for selecting the count of models', () => {
      const total = selectors.selectTotal(state)

      expect(total).toEqual(3)
    })

    it('should create a selector for selecting a single item by ID', () => {
      const first = selectors.selectById(state, AClockworkOrange.id)
      expect(first).toBe(AClockworkOrange)
      const second = selectors.selectById(state, AnimalFarm.id)
      expect(second).toBe(AnimalFarm)
    })
  })

  describe('Uncomposed Selectors', () => {
    type State = EntityState<BookModel, string>

    let adapter: EntityAdapter<BookModel, string>
    let selectors: EntitySelectors<
      BookModel,
      EntityState<BookModel, string>,
      string
    >
    let state: State

    beforeEach(() => {
      adapter = createEntityAdapter({
        selectId: (book: BookModel) => book.id,
      })

      state = adapter.setAll(adapter.getInitialState(), [
        AClockworkOrange,
        AnimalFarm,
        TheGreatGatsby,
      ])

      selectors = adapter.getSelectors()
    })

    it('should create a selector for selecting the ids', () => {
      const ids = selectors.selectIds(state)

      expect(ids).toEqual(state.ids)
    })

    it('should create a selector for selecting the entities', () => {
      const entities = selectors.selectEntities(state)

      expect(entities).toEqual(state.entities)
    })

    it('should type single entity from Dictionary as entity type or undefined', () => {
      expectType<
        Selector<EntityState<BookModel, string>, BookModel | undefined>
      >(createSelector(selectors.selectEntities, (entities) => entities[0]))
    })

    it('should create a selector for selecting the list of models', () => {
      const models = selectors.selectAll(state)

      expect(models).toEqual([AClockworkOrange, AnimalFarm, TheGreatGatsby])
    })

    it('should create a selector for selecting the count of models', () => {
      const total = selectors.selectTotal(state)

      expect(total).toEqual(3)
    })

    it('should create a selector for selecting a single item by ID', () => {
      const first = selectors.selectById(state, AClockworkOrange.id)
      expect(first).toBe(AClockworkOrange)
      const second = selectors.selectById(state, AnimalFarm.id)
      expect(second).toBe(AnimalFarm)
    })
  })
  describe('custom createSelector instance', () => {
    it('should use the custom createSelector function if provided', () => {
      const memoizeSpy = vi.fn(
        // test that we're allowed to pass memoizers with different options, as long as they're optional
        <F extends (...args: any[]) => any>(fn: F, param?: boolean) => fn,
      )
      const createCustomSelector = createDraftSafeSelectorCreator(memoizeSpy)

      const adapter = createEntityAdapter({
        selectId: (book: BookModel) => book.id,
      })

      adapter.getSelectors(undefined, { createSelector: createCustomSelector })

      expect(memoizeSpy).toHaveBeenCalled()

      memoizeSpy.mockClear()
    })
  })
})

function expectType<T>(t: T) {
  return t
}
