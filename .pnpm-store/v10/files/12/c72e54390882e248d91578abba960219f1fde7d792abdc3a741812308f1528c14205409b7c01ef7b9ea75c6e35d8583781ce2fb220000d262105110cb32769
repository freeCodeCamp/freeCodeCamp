import type { Draft } from 'immer'
import type { PayloadAction } from '../createAction'
import type { CastAny, Id } from '../tsHelpers'
import type { UncheckedIndexedAccess } from '../uncheckedindexed.js'
import type { GetSelectorsOptions } from './state_selectors'

/**
 * @public
 */
export type EntityId = number | string

/**
 * @public
 */
export type Comparer<T> = (a: T, b: T) => number

/**
 * @public
 */
export type IdSelector<T, Id extends EntityId> = (model: T) => Id

/**
 * @public
 */
export type Update<T, Id extends EntityId> = { id: Id; changes: Partial<T> }

/**
 * @public
 */
export interface EntityState<T, Id extends EntityId> {
  ids: Id[]
  entities: Record<Id, T>
}

/**
 * @public
 */
export interface EntityAdapterOptions<T, Id extends EntityId> {
  selectId?: IdSelector<T, Id>
  sortComparer?: false | Comparer<T>
}

export type PreventAny<S, T, Id extends EntityId> = CastAny<
  S,
  EntityState<T, Id>
>

export type DraftableEntityState<T, Id extends EntityId> =
  | EntityState<T, Id>
  | Draft<EntityState<T, Id>>

/**
 * @public
 */
export interface EntityStateAdapter<T, Id extends EntityId> {
  addOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entity: T,
  ): S
  addOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    action: PayloadAction<T>,
  ): S

  addMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: readonly T[] | Record<Id, T>,
  ): S
  addMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: PayloadAction<readonly T[] | Record<Id, T>>,
  ): S

  setOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entity: T,
  ): S
  setOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    action: PayloadAction<T>,
  ): S
  setMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: readonly T[] | Record<Id, T>,
  ): S
  setMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: PayloadAction<readonly T[] | Record<Id, T>>,
  ): S
  setAll<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: readonly T[] | Record<Id, T>,
  ): S
  setAll<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: PayloadAction<readonly T[] | Record<Id, T>>,
  ): S

  removeOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    key: Id,
  ): S
  removeOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    key: PayloadAction<Id>,
  ): S

  removeMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    keys: readonly Id[],
  ): S
  removeMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    keys: PayloadAction<readonly Id[]>,
  ): S

  removeAll<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
  ): S

  updateOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    update: Update<T, Id>,
  ): S
  updateOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    update: PayloadAction<Update<T, Id>>,
  ): S

  updateMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    updates: ReadonlyArray<Update<T, Id>>,
  ): S
  updateMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    updates: PayloadAction<ReadonlyArray<Update<T, Id>>>,
  ): S

  upsertOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entity: T,
  ): S
  upsertOne<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entity: PayloadAction<T>,
  ): S

  upsertMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: readonly T[] | Record<Id, T>,
  ): S
  upsertMany<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
    entities: PayloadAction<readonly T[] | Record<Id, T>>,
  ): S
}

/**
 * @public
 */
export interface EntitySelectors<T, V, IdType extends EntityId> {
  selectIds: (state: V) => IdType[]
  selectEntities: (state: V) => Record<IdType, T>
  selectAll: (state: V) => T[]
  selectTotal: (state: V) => number
  selectById: (state: V, id: IdType) => Id<UncheckedIndexedAccess<T>>
}

/**
 * @public
 */
export interface EntityStateFactory<T, Id extends EntityId> {
  getInitialState(
    state?: undefined,
    entities?: Record<Id, T> | readonly T[],
  ): EntityState<T, Id>
  getInitialState<S extends object>(
    state: S,
    entities?: Record<Id, T> | readonly T[],
  ): EntityState<T, Id> & S
}

/**
 * @public
 */
export interface EntityAdapter<T, Id extends EntityId>
  extends EntityStateAdapter<T, Id>,
    EntityStateFactory<T, Id>,
    Required<EntityAdapterOptions<T, Id>> {
  getSelectors(
    selectState?: undefined,
    options?: GetSelectorsOptions,
  ): EntitySelectors<T, EntityState<T, Id>, Id>
  getSelectors<V>(
    selectState: (state: V) => EntityState<T, Id>,
    options?: GetSelectorsOptions,
  ): EntitySelectors<T, V, Id>
}
