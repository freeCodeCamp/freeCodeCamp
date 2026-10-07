import type {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  EntityAdapter,
  EntityId,
  EntityStateAdapter,
  Update,
} from '@reduxjs/toolkit'
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

function extractReducers<T, Id extends EntityId>(
  adapter: EntityAdapter<T, Id>,
): EntityStateAdapter<T, Id> {
  const { selectId, sortComparer, getInitialState, getSelectors, ...rest } =
    adapter
  return rest
}

describe('type tests', () => {
  test('should be usable in a slice, with all the "reducer-like" functions', () => {
    type Id = string & { readonly __tag: unique symbol }
    type Entity = {
      id: Id
    }
    const adapter = createEntityAdapter<Entity>()
    const slice = createSlice({
      name: 'test',
      initialState: adapter.getInitialState(),
      reducers: {
        ...extractReducers(adapter),
      },
    })

    expectTypeOf(slice.actions.addOne).toMatchTypeOf<
      ActionCreatorWithPayload<Entity>
    >()

    expectTypeOf(slice.actions.addMany).toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Entity> | Record<string, Entity>>
    >()

    expectTypeOf(slice.actions.setAll).toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Entity> | Record<string, Entity>>
    >()

    expectTypeOf(slice.actions.removeOne).toMatchTypeOf<
      ActionCreatorWithPayload<Id>
    >()

    expectTypeOf(slice.actions.addMany).not.toMatchTypeOf<
      ActionCreatorWithPayload<Entity[] | Record<string, Entity>>
    >()

    expectTypeOf(slice.actions.setAll).not.toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Id>>
    >()

    expectTypeOf(slice.actions.removeOne).toMatchTypeOf<
      ActionCreatorWithPayload<Id>
    >()

    expectTypeOf(slice.actions.removeMany).toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Id>>
    >()

    expectTypeOf(slice.actions.removeMany).not.toMatchTypeOf<
      ActionCreatorWithPayload<EntityId[]>
    >()

    expectTypeOf(
      slice.actions.removeAll,
    ).toMatchTypeOf<ActionCreatorWithoutPayload>()

    expectTypeOf(slice.actions.updateOne).toMatchTypeOf<
      ActionCreatorWithPayload<Update<Entity, Id>>
    >()

    expectTypeOf(slice.actions.updateMany).not.toMatchTypeOf<
      ActionCreatorWithPayload<Update<Entity, Id>[]>
    >()

    expectTypeOf(slice.actions.upsertOne).toMatchTypeOf<
      ActionCreatorWithPayload<Entity>
    >()

    expectTypeOf(slice.actions.updateMany).toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Update<Entity, Id>>>
    >()

    expectTypeOf(slice.actions.upsertOne).toMatchTypeOf<
      ActionCreatorWithPayload<Entity>
    >()

    expectTypeOf(slice.actions.upsertMany).toMatchTypeOf<
      ActionCreatorWithPayload<ReadonlyArray<Entity> | Record<string, Entity>>
    >()

    expectTypeOf(slice.actions.upsertMany).not.toMatchTypeOf<
      ActionCreatorWithPayload<Entity[] | Record<string, Entity>>
    >()
  })

  test('should not be able to mix with a different EntityAdapter', () => {
    type Entity = {
      id: EntityId
      value: string
    }
    type Entity2 = {
      id: EntityId
      value2: string
    }
    const adapter = createEntityAdapter<Entity>()
    const adapter2 = createEntityAdapter<Entity2>()
    createSlice({
      name: 'test',
      initialState: adapter.getInitialState(),
      reducers: {
        addOne: adapter.addOne,
        // @ts-expect-error
        addOne2: adapter2.addOne,
      },
    })
  })

  test('should be usable in a slice with extra properties', () => {
    type Entity = { id: EntityId; value: string }
    const adapter = createEntityAdapter<Entity>()
    createSlice({
      name: 'test',
      initialState: adapter.getInitialState({ extraData: 'test' }),
      reducers: {
        addOne: adapter.addOne,
      },
    })
  })

  test('should not be usable in a slice with an unfitting state', () => {
    type Entity = { id: EntityId; value: string }
    const adapter = createEntityAdapter<Entity>()
    createSlice({
      name: 'test',
      initialState: { somethingElse: '' },
      reducers: {
        // @ts-expect-error
        addOne: adapter.addOne,
      },
    })
  })

  test('should not be able to create an adapter unless the type has an Id or an idSelector is provided', () => {
    type Entity = {
      value: string
    }
    // @ts-expect-error
    const adapter = createEntityAdapter<Entity>()
    const adapter2: EntityAdapter<Entity, Entity['value']> =
      createEntityAdapter({
        selectId: (e: Entity) => e.value,
      })
  })
})
