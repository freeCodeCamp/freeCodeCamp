import type { PayloadAction } from '@reduxjs/toolkit'
import {
  configureStore,
  createAction,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit'
import { createNextState } from '../..'
import { createEntityAdapter } from '../create_adapter'
import type { EntityAdapter, EntityState } from '../models'
import type { BookModel } from './fixtures/book'
import {
  AClockworkOrange,
  AnimalFarm,
  TheGreatGatsby,
  TheHobbit,
} from './fixtures/book'

describe('Sorted State Adapter', () => {
  let adapter: EntityAdapter<BookModel, string>
  let state: EntityState<BookModel, string>

  beforeAll(() => {
    //eslint-disable-next-line
    Object.defineProperty(Array.prototype, 'unwantedField', {
      enumerable: true,
      configurable: true,
      value: 'This should not appear anywhere',
    })
  })

  afterAll(() => {
    delete (Array.prototype as any).unwantedField
  })

  beforeEach(() => {
    adapter = createEntityAdapter({
      selectId: (book: BookModel) => book.id,
      sortComparer: (a, b) => {
        return a.title.localeCompare(b.title)
      },
    })

    state = { ids: [], entities: {} }
  })

  it('should let you add one entity to the state', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    expect(withOneEntity).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should let you add one entity to the state as an FSA', () => {
    const bookAction = createAction<BookModel>('books/add')
    const withOneEntity = adapter.addOne(state, bookAction(TheGreatGatsby))

    expect(withOneEntity).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should not change state if you attempt to re-add an entity', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const readded = adapter.addOne(withOneEntity, TheGreatGatsby)

    expect(readded).toBe(withOneEntity)
  })

  it('should let you add many entities to the state', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withManyMore = adapter.addMany(withOneEntity, [
      AClockworkOrange,
      AnimalFarm,
    ])

    expect(withManyMore).toEqual({
      ids: [AClockworkOrange.id, AnimalFarm.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should let you add many entities to the state from a dictionary', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withManyMore = adapter.addMany(withOneEntity, {
      [AClockworkOrange.id]: AClockworkOrange,
      [AnimalFarm.id]: AnimalFarm,
    })

    expect(withManyMore).toEqual({
      ids: [AClockworkOrange.id, AnimalFarm.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should remove existing and add new ones on setAll', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withAll = adapter.setAll(withOneEntity, [
      AClockworkOrange,
      AnimalFarm,
    ])

    expect(withAll).toEqual({
      ids: [AClockworkOrange.id, AnimalFarm.id],
      entities: {
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should remove existing and add new ones on setAll when passing in a dictionary', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withAll = adapter.setAll(withOneEntity, {
      [AClockworkOrange.id]: AClockworkOrange,
      [AnimalFarm.id]: AnimalFarm,
    })

    expect(withAll).toEqual({
      ids: [AClockworkOrange.id, AnimalFarm.id],
      entities: {
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should remove existing and add new ones on addAll (deprecated)', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withAll = adapter.setAll(withOneEntity, [
      AClockworkOrange,
      AnimalFarm,
    ])

    expect(withAll).toEqual({
      ids: [AClockworkOrange.id, AnimalFarm.id],
      entities: {
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should let you add remove an entity from the state', () => {
    const withOneEntity = adapter.addOne(state, TheGreatGatsby)

    const withoutOne = adapter.removeOne(withOneEntity, TheGreatGatsby.id)

    expect(withoutOne).toEqual({
      ids: [],
      entities: {},
    })
  })

  it('should let you remove many entities by id from the state', () => {
    const withAll = adapter.setAll(state, [
      TheGreatGatsby,
      AClockworkOrange,
      AnimalFarm,
    ])

    const withoutMany = adapter.removeMany(withAll, [
      TheGreatGatsby.id,
      AClockworkOrange.id,
    ])

    expect(withoutMany).toEqual({
      ids: [AnimalFarm.id],
      entities: {
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should let you remove all entities from the state', () => {
    const withAll = adapter.setAll(state, [
      TheGreatGatsby,
      AClockworkOrange,
      AnimalFarm,
    ])

    const withoutAll = adapter.removeAll(withAll)

    expect(withoutAll).toEqual({
      ids: [],
      entities: {},
    })
  })

  it('should let you update an entity in the state', () => {
    const withOne = adapter.addOne(state, TheGreatGatsby)
    const changes = { title: 'A New Hope' }

    const withUpdates = adapter.updateOne(withOne, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withUpdates).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...changes,
        },
      },
    })
  })

  it('should not change state if you attempt to update an entity that has not been added', () => {
    const withUpdates = adapter.updateOne(state, {
      id: TheGreatGatsby.id,
      changes: { title: 'A New Title' },
    })

    expect(withUpdates).toBe(state)
  })

  it('Replaces an existing entity if you change the ID while updating', () => {
    const a = { id: 'a', title: 'First' }
    const b = { id: 'b', title: 'Second' }
    const c = { id: 'c', title: 'Third' }
    const d = { id: 'd', title: 'Fourth' }
    const withAdded = adapter.setAll(state, [a, b, c])

    const withUpdated = adapter.updateOne(withAdded, {
      id: 'b',
      changes: {
        id: 'c',
      },
    })

    const { ids, entities } = withUpdated

    expect(ids).toEqual(['a', 'c'])
    expect(entities.a).toBeTruthy()
    expect(entities.b).not.toBeTruthy()
    expect(entities.c).toBeTruthy()
    expect(entities.c!.id).toBe('c')
    expect(entities.c!.title).toBe('Second')
  })

  it('should not change ids state if you attempt to update an entity that does not impact sorting', () => {
    const withAll = adapter.setAll(state, [
      TheGreatGatsby,
      AClockworkOrange,
      AnimalFarm,
    ])
    const changes = { title: 'The Great Gatsby II' }

    const withUpdates = adapter.updateOne(withAll, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withAll.ids).toBe(withUpdates.ids)
  })

  it('should let you update the id of entity', () => {
    const withOne = adapter.addOne(state, TheGreatGatsby)
    const changes = { id: 'A New Id' }

    const withUpdates = adapter.updateOne(withOne, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withUpdates).toEqual({
      ids: [changes.id],
      entities: {
        [changes.id]: {
          ...TheGreatGatsby,
          ...changes,
        },
      },
    })
  })

  it('should resort correctly if same id but sort key update', () => {
    const withAll = adapter.setAll(state, [
      TheGreatGatsby,
      AnimalFarm,
      AClockworkOrange,
    ])
    const changes = { title: 'A New Hope' }

    const withUpdates = adapter.updateOne(withAll, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withUpdates).toEqual({
      ids: [AClockworkOrange.id, TheGreatGatsby.id, AnimalFarm.id],
      entities: {
        [AClockworkOrange.id]: AClockworkOrange,
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...changes,
        },
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should resort correctly if the id and sort key update', () => {
    const withOne = adapter.setAll(state, [
      TheGreatGatsby,
      AnimalFarm,
      AClockworkOrange,
    ])
    const changes = { id: 'A New Id', title: 'A New Hope' }

    const withUpdates = adapter.updateOne(withOne, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withUpdates).toEqual({
      ids: [AClockworkOrange.id, changes.id, AnimalFarm.id],
      entities: {
        [AClockworkOrange.id]: AClockworkOrange,
        [changes.id]: {
          ...TheGreatGatsby,
          ...changes,
        },
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should maintain a stable sorting order when updating items', () => {
    interface OrderedEntity {
      id: string
      order: number
      ts: number
    }
    const sortedItemsAdapter = createEntityAdapter<OrderedEntity>({
      sortComparer: (a, b) => a.order - b.order,
    })
    const withInitialItems = sortedItemsAdapter.setAll(
      sortedItemsAdapter.getInitialState(),
      [
        { id: 'C', order: 3, ts: 0 },
        { id: 'A', order: 1, ts: 0 },
        { id: 'F', order: 4, ts: 0 },
        { id: 'B', order: 2, ts: 0 },
        { id: 'D', order: 3, ts: 0 },
        { id: 'E', order: 3, ts: 0 },
      ],
    )

    expect(withInitialItems.ids).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])

    const updated = sortedItemsAdapter.updateOne(withInitialItems, {
      id: 'C',
      changes: { ts: 5 },
    })

    expect(updated.ids).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])

    const updated2 = sortedItemsAdapter.updateOne(withInitialItems, {
      id: 'D',
      changes: { ts: 6 },
    })

    expect(updated2.ids).toEqual(['A', 'B', 'C', 'D', 'E', 'F'])
  })

  it('should let you update many entities by id in the state', () => {
    const firstChange = { title: 'Zack' }
    const secondChange = { title: 'Aaron' }
    const withMany = adapter.setAll(state, [TheGreatGatsby, AClockworkOrange])

    const withUpdates = adapter.updateMany(withMany, [
      { id: TheGreatGatsby.id, changes: firstChange },
      { id: AClockworkOrange.id, changes: secondChange },
    ])

    expect(withUpdates).toEqual({
      ids: [AClockworkOrange.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...firstChange,
        },
        [AClockworkOrange.id]: {
          ...AClockworkOrange,
          ...secondChange,
        },
      },
    })
  })

  it('should let you add one entity to the state with upsert()', () => {
    const withOneEntity = adapter.upsertOne(state, TheGreatGatsby)
    expect(withOneEntity).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should let you update an entity in the state with upsert()', () => {
    const withOne = adapter.addOne(state, TheGreatGatsby)
    const changes = { title: 'A New Hope' }

    const withUpdates = adapter.upsertOne(withOne, {
      ...TheGreatGatsby,
      ...changes,
    })
    expect(withUpdates).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...changes,
        },
      },
    })
  })

  it('should let you upsert many entities in the state', () => {
    const firstChange = { title: 'Zack' }
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, [
      { ...TheGreatGatsby, ...firstChange },
      AClockworkOrange,
    ])

    expect(withUpserts).toEqual({
      ids: [AClockworkOrange.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...firstChange,
        },
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should do nothing when upsertMany is given an empty array', () => {
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, [])

    expect(withUpserts).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should throw when upsertMany is passed undefined or null', async () => {
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const fakeRequest = (response: null | undefined) =>
      new Promise((resolve) => setTimeout(() => resolve(response), 50))

    const undefinedBooks = (await fakeRequest(undefined)) as BookModel[]
    expect(() => adapter.upsertMany(withMany, undefinedBooks)).toThrow()

    const nullBooks = (await fakeRequest(null)) as BookModel[]
    expect(() => adapter.upsertMany(withMany, nullBooks)).toThrow()
  })

  it('should let you upsert many entities in the state when passing in a dictionary', () => {
    const firstChange = { title: 'Zack' }
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, {
      [TheGreatGatsby.id]: { ...TheGreatGatsby, ...firstChange },
      [AClockworkOrange.id]: AClockworkOrange,
    })

    expect(withUpserts).toEqual({
      ids: [AClockworkOrange.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...firstChange,
        },
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should let you add a new entity then apply changes to it', () => {
    const firstChange = { author: TheHobbit.author }
    const secondChange = { title: 'Zack' }
    const withMany = adapter.setAll(state, [AClockworkOrange])

    const withUpserts = adapter.upsertMany(withMany, [
      {...TheGreatGatsby}, { ...TheGreatGatsby, ...firstChange }, {...TheGreatGatsby, ...secondChange}
    ])

    expect(withUpserts).toEqual({
      ids: [AClockworkOrange.id, TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...firstChange,
          ...secondChange,
        },
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should let you add a new entity in the state with setOne() and keep the sorting', () => {
    const withMany = adapter.setAll(state, [AnimalFarm, TheHobbit])
    const withOneMore = adapter.setOne(withMany, TheGreatGatsby)
    expect(withOneMore).toEqual({
      ids: [AnimalFarm.id, TheGreatGatsby.id, TheHobbit.id],
      entities: {
        [AnimalFarm.id]: AnimalFarm,
        [TheHobbit.id]: TheHobbit,
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should let you replace an entity in the state with setOne()', () => {
    let withOne = adapter.setOne(state, TheHobbit)
    const changeWithoutAuthor = { id: TheHobbit.id, title: 'Silmarillion' }
    withOne = adapter.setOne(withOne, changeWithoutAuthor)

    expect(withOne).toEqual({
      ids: [TheHobbit.id],
      entities: {
        [TheHobbit.id]: changeWithoutAuthor,
      },
    })
  })

  it('should do nothing when setMany is given an empty array', () => {
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.setMany(withMany, [])

    expect(withUpserts).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
      },
    })
  })

  it('should let you set many entities in the state', () => {
    const firstChange = { id: TheHobbit.id, title: 'Silmarillion' }
    const withMany = adapter.setAll(state, [TheHobbit])

    const withSetMany = adapter.setMany(withMany, [
      firstChange,
      AClockworkOrange,
    ])

    expect(withSetMany).toEqual({
      ids: [AClockworkOrange.id, TheHobbit.id],
      entities: {
        [TheHobbit.id]: firstChange,
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should work consistent with Unsorted State Adapter adding duplicate ids', () => {
    const unsortedAdaptor = createEntityAdapter({
      selectId: (book: BookModel) => book.id
    });

    const firstEntry = {id: AClockworkOrange.id, author: TheHobbit.author }
    const secondEntry = {id: AClockworkOrange.id, title: 'Zack' }
    const withNothingSorted = adapter.setAll(state, []);
    const withNothingUnsorted = unsortedAdaptor.setAll(state, []);
    const withOneSorted = adapter.addMany(withNothingSorted, [
      { ...AClockworkOrange, ...firstEntry }, {...AClockworkOrange, ...secondEntry}
    ])
    const withOneUnsorted = adapter.addMany(withNothingUnsorted, [
      { ...AClockworkOrange, ...firstEntry }, {...AClockworkOrange, ...secondEntry}
    ])

    expect(withOneSorted).toEqual(withOneUnsorted);
  })

  it('should work consistent with Unsorted State Adapter adding duplicate ids', () => {
    const unsortedAdaptor = createEntityAdapter({
      selectId: (book: BookModel) => book.id
    });

    const firstEntry = {id: AClockworkOrange.id, author: TheHobbit.author }
    const secondEntry = {id: AClockworkOrange.id, title: 'Zack' }
    const withNothingSorted = adapter.setAll(state, [TheHobbit]);
    const withNothingUnsorted = unsortedAdaptor.setAll(state, [TheHobbit]);
    const withOneSorted = adapter.setMany(withNothingSorted, [
      { ...AClockworkOrange, ...firstEntry, id: 'th' }, {...AClockworkOrange, ...secondEntry, id: 'th'}
    ])
    const withOneUnsorted = unsortedAdaptor.setMany(withNothingUnsorted, [
      { ...AClockworkOrange, ...firstEntry, id: 'th' }, {...AClockworkOrange, ...secondEntry, id: 'th'}
    ])

    expect(withOneSorted).toEqual(withOneUnsorted);
  })

  it('should let you set many entities in the state when passing in a dictionary', () => {
    const changeWithoutAuthor = { id: TheHobbit.id, title: 'Silmarillion' }
    const withMany = adapter.setAll(state, [TheHobbit])

    const withSetMany = adapter.setMany(withMany, {
      [TheHobbit.id]: changeWithoutAuthor,
      [AClockworkOrange.id]: AClockworkOrange,
    })

    expect(withSetMany).toEqual({
      ids: [AClockworkOrange.id, TheHobbit.id],
      entities: {
        [TheHobbit.id]: changeWithoutAuthor,
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it("only returns one entry for that id in the id's array", () => {
    const book1: BookModel = { id: 'a', title: 'First' }
    const book2: BookModel = { id: 'b', title: 'Second' }
    const initialState = adapter.getInitialState()
    const withItems = adapter.addMany(initialState, [book1, book2])

    expect(withItems.ids).toEqual(['a', 'b'])
    const withUpdate = adapter.updateOne(withItems, {
      id: 'a',
      changes: { id: 'b' },
    })

    expect(withUpdate.ids).toEqual(['b'])
    expect(withUpdate.entities['b']!.title).toBe(book1.title)
  })

  it('should minimize the amount of sorting work needed', () => {
    const INITIAL_ITEMS = 10_000
    const ADDED_ITEMS = 1_000

    type Entity = { id: string; name: string; position: number }

    let numSorts = 0

    const adaptor = createEntityAdapter({
      selectId: (entity: Entity) => entity.id,
      sortComparer: (a, b) => {
        numSorts++
        if (a.position < b.position) return -1
        else if (a.position > b.position) return 1
        return 0
      },
    })

    function generateItems(count: number) {
      const items: readonly Entity[] = new Array(count)
        .fill(undefined)
        .map((x, i) => ({
          name: `${i}`,
          position: Math.random(),
          id: nanoid(),
        }))
      return items
    }

    const entitySlice = createSlice({
      name: 'entity',
      initialState: adaptor.getInitialState(),
      reducers: {
        updateOne: adaptor.updateOne,
        upsertOne: adaptor.upsertOne,
        upsertMany: adaptor.upsertMany,
        addMany: adaptor.addMany,
      },
    })

    const store = configureStore({
      reducer: {
        entity: entitySlice.reducer,
      },
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: false,
        })
      },
    })

    numSorts = 0

    const logComparisons = false

    function measureComparisons(name: string, cb: () => void) {
      numSorts = 0
      const start = new Date().getTime()
      cb()
      const end = new Date().getTime()
      const duration = end - start

      if (logComparisons) {
        console.log(
          `${name}: sortComparer called ${numSorts.toLocaleString()} times in ${duration.toLocaleString()}ms`,
        )
      }
    }

    const initialItems = generateItems(INITIAL_ITEMS)

    measureComparisons('Original Setup', () => {
      store.dispatch(entitySlice.actions.upsertMany(initialItems))
    })

    expect(numSorts).toBeLessThan(INITIAL_ITEMS * 20)

    measureComparisons('Insert One (random)', () => {
      store.dispatch(
        entitySlice.actions.upsertOne({
          id: nanoid(),
          position: Math.random(),
          name: 'test',
        }),
      )
    })

    expect(numSorts).toBeLessThan(50)

    measureComparisons('Insert One (middle)', () => {
      store.dispatch(
        entitySlice.actions.upsertOne({
          id: nanoid(),
          position: 0.5,
          name: 'test',
        }),
      )
    })

    expect(numSorts).toBeLessThan(50)

    measureComparisons('Insert One (end)', () => {
      store.dispatch(
        entitySlice.actions.upsertOne({
          id: nanoid(),
          position: 0.9998,
          name: 'test',
        }),
      )
    })

    expect(numSorts).toBeLessThan(50)

    const addedItems = generateItems(ADDED_ITEMS)
    measureComparisons('Add Many', () => {
      store.dispatch(entitySlice.actions.addMany(addedItems))
    })

    expect(numSorts).toBeLessThan(ADDED_ITEMS * 20)

    // These numbers will vary because of the randomness, but generally
    // with 10K items the old code had 200K+ sort calls, while the new code
    // is around 13K sort calls.
    expect(numSorts).toBeLessThan(20_000)

    const { ids } = store.getState().entity
    const middleItemId = ids[(ids.length / 2) | 0]

    measureComparisons('Update One (end)', () => {
      store.dispatch(
        // Move this middle item near the end
        entitySlice.actions.updateOne({
          id: middleItemId,
          changes: {
            position: 0.99999,
          },
        }),
      )
    })

    const SORTING_COUNT_BUFFER = 100

    expect(numSorts).toBeLessThan(
      INITIAL_ITEMS + ADDED_ITEMS + SORTING_COUNT_BUFFER,
    )

    measureComparisons('Update One (middle)', () => {
      store.dispatch(
        // Move this middle item near the end
        entitySlice.actions.updateOne({
          id: middleItemId,
          changes: {
            position: 0.42,
          },
        }),
      )
    })

    expect(numSorts).toBeLessThan(
      INITIAL_ITEMS + ADDED_ITEMS + SORTING_COUNT_BUFFER,
    )

    measureComparisons('Update One (replace)', () => {
      store.dispatch(
        // Move this middle item near the end
        entitySlice.actions.updateOne({
          id: middleItemId,
          changes: {
            id: nanoid(),
            position: 0.98,
          },
        }),
      )
    })

    expect(numSorts).toBeLessThan(
      INITIAL_ITEMS + ADDED_ITEMS + SORTING_COUNT_BUFFER,
    )

    // The old code was around 120K, the new code is around 10K.
    //expect(numSorts).toBeLessThan(25_000)
  })

  it('should not throw an Immer `current` error when `state.ids` is a plain array', () => {
    const book1: BookModel = { id: 'a', title: 'First' }
    const initialState = adapter.getInitialState()
    const withItems = adapter.addMany(initialState, [book1])
    const booksSlice = createSlice({
      name: 'books',
      initialState,
      reducers: {
        testCurrentBehavior(state, action: PayloadAction<BookModel>) {
          // Will overwrite `state.ids` with a plain array
          adapter.removeAll(state)

          // will call `splitAddedUpdatedEntities` and call `current(state.ids)`
          adapter.upsertMany(state, [book1])
        },
      },
    })

    booksSlice.reducer(
      initialState,
      booksSlice.actions.testCurrentBehavior(book1),
    )
  })

  it('should not throw an Immer `current` error when the adapter is called twice', () => {
    const book1: BookModel = { id: 'a', title: 'First' }
    const book2: BookModel = { id: 'b', title: 'Second' }
    const initialState = adapter.getInitialState()
    const booksSlice = createSlice({
      name: 'books',
      initialState,
      reducers: {
        testCurrentBehavior(state, action: PayloadAction<BookModel>) {
          // Will overwrite `state.ids` with a plain array
          adapter.removeAll(state)

          // will call `splitAddedUpdatedEntities` and call `current(state.ids)`
          adapter.addOne(state, book1)
          adapter.addOne(state, book2)
        },
      },
    })

    booksSlice.reducer(
      initialState,
      booksSlice.actions.testCurrentBehavior(book1),
    )
  })

  describe('can be used mutably when wrapped in createNextState', () => {
    test('removeAll', () => {
      const withTwo = adapter.addMany(state, [TheGreatGatsby, AnimalFarm])
      const result = createNextState(withTwo, (draft) => {
        adapter.removeAll(draft)
      })
      expect(result).toEqual({
        entities: {},
        ids: [],
      })
    })

    test('addOne', () => {
      const result = createNextState(state, (draft) => {
        adapter.addOne(draft, TheGreatGatsby)
      })

      expect(result).toEqual({
        entities: {
          tgg: {
            id: 'tgg',
            title: 'The Great Gatsby',
          },
        },
        ids: ['tgg'],
      })
    })

    test('addMany', () => {
      const result = createNextState(state, (draft) => {
        adapter.addMany(draft, [TheGreatGatsby, AnimalFarm])
      })

      expect(result).toEqual({
        entities: {
          af: {
            id: 'af',
            title: 'Animal Farm',
          },
          tgg: {
            id: 'tgg',
            title: 'The Great Gatsby',
          },
        },
        ids: ['af', 'tgg'],
      })
    })

    test('setAll', () => {
      const result = createNextState(state, (draft) => {
        adapter.setAll(draft, [TheGreatGatsby, AnimalFarm])
      })

      expect(result).toEqual({
        entities: {
          af: {
            id: 'af',
            title: 'Animal Farm',
          },
          tgg: {
            id: 'tgg',
            title: 'The Great Gatsby',
          },
        },
        ids: ['af', 'tgg'],
      })
    })

    test('updateOne', () => {
      const withOne = adapter.addOne(state, TheGreatGatsby)
      const changes = { title: 'A New Hope' }
      const result = createNextState(withOne, (draft) => {
        adapter.updateOne(draft, {
          id: TheGreatGatsby.id,
          changes,
        })
      })

      expect(result).toEqual({
        entities: {
          tgg: {
            id: 'tgg',
            title: 'A New Hope',
          },
        },
        ids: ['tgg'],
      })
    })

    test('updateMany', () => {
      const firstChange = { title: 'First Change' }
      const secondChange = { title: 'Second Change' }
      const thirdChange = { title: 'Third Change' }
      const fourthChange = { author: 'Fourth Change' }
      const withMany = adapter.setAll(state, [
        TheGreatGatsby,
        AClockworkOrange,
        TheHobbit,
      ])

      const result = createNextState(withMany, (draft) => {
        adapter.updateMany(draft, [
          { id: TheHobbit.id, changes: firstChange },
          { id: TheGreatGatsby.id, changes: secondChange },
          { id: AClockworkOrange.id, changes: thirdChange },
          { id: TheHobbit.id, changes: fourthChange },
        ])
      })

      expect(result).toEqual({
        entities: {
          aco: {
            id: 'aco',
            title: 'Third Change',
          },
          tgg: {
            id: 'tgg',
            title: 'Second Change',
          },
          th: {
            author: 'Fourth Change',
            id: 'th',
            title: 'First Change',
          },
        },
        ids: ['th', 'tgg', 'aco'],
      })
    })

    test('upsertOne (insert)', () => {
      const result = createNextState(state, (draft) => {
        adapter.upsertOne(draft, TheGreatGatsby)
      })
      expect(result).toEqual({
        entities: {
          tgg: {
            id: 'tgg',
            title: 'The Great Gatsby',
          },
        },
        ids: ['tgg'],
      })
    })

    test('upsertOne (update)', () => {
      const withOne = adapter.upsertOne(state, TheGreatGatsby)
      const result = createNextState(withOne, (draft) => {
        adapter.upsertOne(draft, {
          id: TheGreatGatsby.id,
          title: 'A New Hope',
        })
      })
      expect(result).toEqual({
        entities: {
          tgg: {
            id: 'tgg',
            title: 'A New Hope',
          },
        },
        ids: ['tgg'],
      })
    })

    test('upsertMany', () => {
      const withOne = adapter.upsertOne(state, TheGreatGatsby)
      const result = createNextState(withOne, (draft) => {
        adapter.upsertMany(draft, [
          {
            id: TheGreatGatsby.id,
            title: 'A New Hope',
          },
          AnimalFarm,
        ])
      })
      expect(result).toEqual({
        entities: {
          af: {
            id: 'af',
            title: 'Animal Farm',
          },
          tgg: {
            id: 'tgg',
            title: 'A New Hope',
          },
        },
        ids: ['tgg', 'af'],
      })
    })

    test('setOne (insert)', () => {
      const result = createNextState(state, (draft) => {
        adapter.setOne(draft, TheGreatGatsby)
      })
      expect(result).toEqual({
        entities: {
          tgg: {
            id: 'tgg',
            title: 'The Great Gatsby',
          },
        },
        ids: ['tgg'],
      })
    })

    test('setOne (update)', () => {
      const withOne = adapter.setOne(state, TheHobbit)
      const result = createNextState(withOne, (draft) => {
        adapter.setOne(draft, {
          id: TheHobbit.id,
          title: 'Silmarillion',
        })
      })
      expect(result).toEqual({
        entities: {
          th: {
            id: 'th',
            title: 'Silmarillion',
          },
        },
        ids: ['th'],
      })
    })

    test('setMany', () => {
      const withOne = adapter.setOne(state, TheHobbit)
      const result = createNextState(withOne, (draft) => {
        adapter.setMany(draft, [
          {
            id: TheHobbit.id,
            title: 'Silmarillion',
          },
          AnimalFarm,
        ])
      })
      expect(result).toEqual({
        entities: {
          af: {
            id: 'af',
            title: 'Animal Farm',
          },
          th: {
            id: 'th',
            title: 'Silmarillion',
          },
        },
        ids: ['af', 'th'],
      })
    })

    test('removeOne', () => {
      const withTwo = adapter.addMany(state, [TheGreatGatsby, AnimalFarm])
      const result = createNextState(withTwo, (draft) => {
        adapter.removeOne(draft, TheGreatGatsby.id)
      })
      expect(result).toEqual({
        entities: {
          af: {
            id: 'af',
            title: 'Animal Farm',
          },
        },
        ids: ['af'],
      })
    })

    test('removeMany', () => {
      const withThree = adapter.addMany(state, [
        TheGreatGatsby,
        AnimalFarm,
        AClockworkOrange,
      ])
      const result = createNextState(withThree, (draft) => {
        adapter.removeMany(draft, [TheGreatGatsby.id, AnimalFarm.id])
      })
      expect(result).toEqual({
        entities: {
          aco: {
            id: 'aco',
            title: 'A Clockwork Orange',
          },
        },
        ids: ['aco'],
      })
    })
  })
})
