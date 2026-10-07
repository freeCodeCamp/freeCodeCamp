import type { EntityAdapter, EntityState } from '../models'
import { createEntityAdapter } from '../create_adapter'
import type { BookModel } from './fixtures/book'
import {
  TheGreatGatsby,
  AClockworkOrange,
  AnimalFarm,
  TheHobbit,
} from './fixtures/book'
import { createNextState } from '../..'

describe('Unsorted State Adapter', () => {
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
      ids: [TheGreatGatsby.id, AClockworkOrange.id, AnimalFarm.id],
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
      ids: [TheGreatGatsby.id, AClockworkOrange.id, AnimalFarm.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
        [AClockworkOrange.id]: AClockworkOrange,
        [AnimalFarm.id]: AnimalFarm,
      },
    })
  })

  it('should let you add the only first occurrence for duplicate ids', () => {
    const firstEntry = {id: AClockworkOrange.id, author: TheHobbit.author }
    const secondEntry = {id: AClockworkOrange.id, title: 'Zack' }
    const withOne = adapter.setAll(state, [TheGreatGatsby])
    const withMany = adapter.addMany(withOne, [
      { ...AClockworkOrange, ...firstEntry }, {...AClockworkOrange, ...secondEntry}
    ])

    expect(withMany).toEqual({
      ids: [TheGreatGatsby.id, AClockworkOrange.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
        [AClockworkOrange.id]: {
          ...AClockworkOrange,
          ...firstEntry,
        },
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

  it('should not change ids state if you attempt to update an entity that has already been added', () => {
    const withOne = adapter.addOne(state, TheGreatGatsby)
    const changes = { title: 'A New Hope' }

    const withUpdates = adapter.updateOne(withOne, {
      id: TheGreatGatsby.id,
      changes,
    })

    expect(withOne.ids).toBe(withUpdates.ids)
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

  it('should let you update many entities by id in the state', () => {
    const firstChange = { title: 'First Change' }
    const secondChange = { title: 'Second Change' }
    const withMany = adapter.setAll(state, [TheGreatGatsby, AClockworkOrange])

    const withUpdates = adapter.updateMany(withMany, [
      { id: TheGreatGatsby.id, changes: firstChange },
      { id: AClockworkOrange.id, changes: secondChange },
    ])

    expect(withUpdates).toEqual({
      ids: [TheGreatGatsby.id, AClockworkOrange.id],
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

  it("doesn't break when multiple renames of one item occur", () => {
    const withA = adapter.addOne(state, { id: 'a', title: 'First' })

    const withUpdates = adapter.updateMany(withA, [
      { id: 'a', changes: { id: 'b' } },
      { id: 'a', changes: { id: 'c' } },
    ])

    const { ids, entities } = withUpdates

    /*
      Original code failed with a mish-mash of values, like:
      {
        ids: [ 'c' ],
        entities: { b: { id: 'b', title: 'First' }, c: { id: 'c' } }
      }
      We now expect that only 'c' will be left:
      { 
        ids: [ 'c' ], 
        entities: { c: { id: 'c', title: 'First' } } 
      }
    */
    expect(ids.length).toBe(1)
    expect(ids).toEqual(['c'])
    expect(entities.a).toBeFalsy()
    expect(entities.b).toBeFalsy()
    expect(entities.c).toBeTruthy()
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
    const firstChange = { title: 'First Change' }
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, [
      { ...TheGreatGatsby, ...firstChange },
      AClockworkOrange,
    ])

    expect(withUpserts).toEqual({
      ids: [TheGreatGatsby.id, AClockworkOrange.id],
      entities: {
        [TheGreatGatsby.id]: {
          ...TheGreatGatsby,
          ...firstChange,
        },
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should let you upsert many entities in the state when passing in a dictionary', () => {
    const firstChange = { title: 'Zack' }
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, {
      [TheGreatGatsby.id]: { ...TheGreatGatsby, ...firstChange },
      [AClockworkOrange.id]: AClockworkOrange,
    })

    expect(withUpserts).toEqual({
      ids: [TheGreatGatsby.id, AClockworkOrange.id],
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
    const withMany = adapter.setAll(state, [TheGreatGatsby])

    const withUpserts = adapter.upsertMany(withMany, [
      {...AClockworkOrange}, { ...AClockworkOrange, ...firstChange }, {...AClockworkOrange, ...secondChange}
    ])

    expect(withUpserts).toEqual({
      ids: [TheGreatGatsby.id, AClockworkOrange.id],
      entities: {
        [TheGreatGatsby.id]: TheGreatGatsby,
        [AClockworkOrange.id]: {
          ...AClockworkOrange,
          ...firstChange,
          ...secondChange,
        },
      },
    })
  })

  it('should let you add a new entity in the state with setOne()', () => {
    const withOne = adapter.setOne(state, TheGreatGatsby)
    expect(withOne).toEqual({
      ids: [TheGreatGatsby.id],
      entities: {
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

  it('should let you set many entities in the state', () => {
    const changeWithoutAuthor = { id: TheHobbit.id, title: 'Silmarillion' }
    const withMany = adapter.setAll(state, [TheHobbit])

    const withSetMany = adapter.setMany(withMany, [
      changeWithoutAuthor,
      AClockworkOrange,
    ])

    expect(withSetMany).toEqual({
      ids: [TheHobbit.id, AClockworkOrange.id],
      entities: {
        [TheHobbit.id]: changeWithoutAuthor,
        [AClockworkOrange.id]: AClockworkOrange,
      },
    })
  })

  it('should let you set many entities in the state when passing in a dictionary', () => {
    const changeWithoutAuthor = { id: TheHobbit.id, title: 'Silmarillion' }
    const withMany = adapter.setAll(state, [TheHobbit])

    const withSetMany = adapter.setMany(withMany, {
      [TheHobbit.id]: changeWithoutAuthor,
      [AClockworkOrange.id]: AClockworkOrange,
    })

    expect(withSetMany).toEqual({
      ids: [TheHobbit.id, AClockworkOrange.id],
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
        ids: ['tgg', 'af'],
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
        ids: ['tgg', 'af'],
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
        ids: ['tgg', 'aco', 'th'],
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
        ids: ['th', 'af'],
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
