import type {
  EntityId,
  EntityState,
  EntityStateAdapter,
  EntityStateFactory,
} from './models'

export function getInitialEntityState<T, Id extends EntityId>(): EntityState<
  T,
  Id
> {
  return {
    ids: [],
    entities: {} as Record<Id, T>,
  }
}

export function createInitialStateFactory<T, Id extends EntityId>(
  stateAdapter: EntityStateAdapter<T, Id>,
): EntityStateFactory<T, Id> {
  function getInitialState(
    state?: undefined,
    entities?: readonly T[] | Record<Id, T>,
  ): EntityState<T, Id>
  function getInitialState<S extends object>(
    additionalState: S,
    entities?: readonly T[] | Record<Id, T>,
  ): EntityState<T, Id> & S
  function getInitialState(
    additionalState: any = {},
    entities?: readonly T[] | Record<Id, T>,
  ): any {
    const state = Object.assign(getInitialEntityState(), additionalState)
    return entities ? stateAdapter.setAll(state, entities) : state
  }

  return { getInitialState }
}
