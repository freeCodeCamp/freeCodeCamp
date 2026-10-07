import type { Draft } from 'immer'
import type {
  EntityStateAdapter,
  IdSelector,
  Update,
  EntityId,
  DraftableEntityState,
} from './models'
import {
  createStateOperator,
  createSingleArgumentStateOperator,
} from './state_adapter'
import {
  selectIdValue,
  ensureEntitiesArray,
  splitAddedUpdatedEntities,
} from './utils'

export function createUnsortedStateAdapter<T, Id extends EntityId>(
  selectId: IdSelector<T, Id>,
): EntityStateAdapter<T, Id> {
  type R = DraftableEntityState<T, Id>

  function addOneMutably(entity: T, state: R): void {
    const key = selectIdValue(entity, selectId)

    if (key in state.entities) {
      return
    }

    state.ids.push(key as Id & Draft<Id>)
    ;(state.entities as Record<Id, T>)[key] = entity
  }

  function addManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    newEntities = ensureEntitiesArray(newEntities)

    for (const entity of newEntities) {
      addOneMutably(entity, state)
    }
  }

  function setOneMutably(entity: T, state: R): void {
    const key = selectIdValue(entity, selectId)
    if (!(key in state.entities)) {
      state.ids.push(key as Id & Draft<Id>)
    }
    ;(state.entities as Record<Id, T>)[key] = entity
  }

  function setManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    newEntities = ensureEntitiesArray(newEntities)
    for (const entity of newEntities) {
      setOneMutably(entity, state)
    }
  }

  function setAllMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    newEntities = ensureEntitiesArray(newEntities)

    state.ids = []
    state.entities = {} as Record<Id, T>

    addManyMutably(newEntities, state)
  }

  function removeOneMutably(key: Id, state: R): void {
    return removeManyMutably([key], state)
  }

  function removeManyMutably(keys: readonly Id[], state: R): void {
    let didMutate = false

    keys.forEach((key) => {
      if (key in state.entities) {
        delete (state.entities as Record<Id, T>)[key]
        didMutate = true
      }
    })

    if (didMutate) {
      state.ids = (state.ids as Id[]).filter((id) => id in state.entities) as
        | Id[]
        | Draft<Id[]>
    }
  }

  function removeAllMutably(state: R): void {
    Object.assign(state, {
      ids: [],
      entities: {},
    })
  }

  function takeNewKey(
    keys: { [id: string]: Id },
    update: Update<T, Id>,
    state: R,
  ): boolean {
    const original: T | undefined = (state.entities as Record<Id, T>)[update.id]
    if (original === undefined) {
      return false
    }
    const updated: T = Object.assign({}, original, update.changes)
    const newKey = selectIdValue(updated, selectId)
    const hasNewKey = newKey !== update.id

    if (hasNewKey) {
      keys[update.id] = newKey
      delete (state.entities as Record<Id, T>)[update.id]
    }

    ;(state.entities as Record<Id, T>)[newKey] = updated

    return hasNewKey
  }

  function updateOneMutably(update: Update<T, Id>, state: R): void {
    return updateManyMutably([update], state)
  }

  function updateManyMutably(
    updates: ReadonlyArray<Update<T, Id>>,
    state: R,
  ): void {
    const newKeys: { [id: string]: Id } = {}

    const updatesPerEntity: { [id: string]: Update<T, Id> } = {}

    updates.forEach((update) => {
      // Only apply updates to entities that currently exist
      if (update.id in state.entities) {
        // If there are multiple updates to one entity, merge them together
        updatesPerEntity[update.id] = {
          id: update.id,
          // Spreads ignore falsy values, so this works even if there isn't
          // an existing update already at this key
          changes: {
            ...updatesPerEntity[update.id]?.changes,
            ...update.changes,
          },
        }
      }
    })

    updates = Object.values(updatesPerEntity)

    const didMutateEntities = updates.length > 0

    if (didMutateEntities) {
      const didMutateIds =
        updates.filter((update) => takeNewKey(newKeys, update, state)).length >
        0

      if (didMutateIds) {
        state.ids = Object.values(state.entities).map((e) =>
          selectIdValue(e as T, selectId),
        )
      }
    }
  }

  function upsertOneMutably(entity: T, state: R): void {
    return upsertManyMutably([entity], state)
  }

  function upsertManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    const [added, updated] = splitAddedUpdatedEntities<T, Id>(
      newEntities,
      selectId,
      state,
    )

    addManyMutably(added, state)
    updateManyMutably(updated, state)
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably),
  }
}
