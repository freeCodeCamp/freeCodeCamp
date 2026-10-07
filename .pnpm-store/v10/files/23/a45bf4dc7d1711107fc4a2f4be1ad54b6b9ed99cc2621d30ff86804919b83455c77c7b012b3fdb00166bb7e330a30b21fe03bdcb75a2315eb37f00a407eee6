import type {
  IdSelector,
  Comparer,
  EntityStateAdapter,
  Update,
  EntityId,
  DraftableEntityState,
} from './models'
import { createStateOperator } from './state_adapter'
import { createUnsortedStateAdapter } from './unsorted_state_adapter'
import {
  selectIdValue,
  ensureEntitiesArray,
  splitAddedUpdatedEntities,
  getCurrent,
} from './utils'

// Borrowed from Replay
export function findInsertIndex<T>(
  sortedItems: T[],
  item: T,
  comparisonFunction: Comparer<T>,
): number {
  let lowIndex = 0
  let highIndex = sortedItems.length
  while (lowIndex < highIndex) {
    let middleIndex = (lowIndex + highIndex) >>> 1
    const currentItem = sortedItems[middleIndex]
    const res = comparisonFunction(item, currentItem)
    if (res >= 0) {
      lowIndex = middleIndex + 1
    } else {
      highIndex = middleIndex
    }
  }

  return lowIndex
}

export function insert<T>(
  sortedItems: T[],
  item: T,
  comparisonFunction: Comparer<T>,
): T[] {
  const insertAtIndex = findInsertIndex(sortedItems, item, comparisonFunction)

  sortedItems.splice(insertAtIndex, 0, item)

  return sortedItems
}

export function createSortedStateAdapter<T, Id extends EntityId>(
  selectId: IdSelector<T, Id>,
  comparer: Comparer<T>,
): EntityStateAdapter<T, Id> {
  type R = DraftableEntityState<T, Id>

  const { removeOne, removeMany, removeAll } =
    createUnsortedStateAdapter(selectId)

  function addOneMutably(entity: T, state: R): void {
    return addManyMutably([entity], state)
  }

  function addManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
    existingIds?: Id[],
  ): void {
    newEntities = ensureEntitiesArray(newEntities)

    const existingKeys = new Set<Id>(existingIds ?? getCurrent(state.ids))
    const addedKeys = new Set<Id>();
    const models = newEntities.filter(
      (model) => {
          const modelId = selectIdValue(model, selectId);
          const notAdded = !addedKeys.has(modelId);
          if (notAdded) addedKeys.add(modelId);
          return !existingKeys.has(modelId) && notAdded;
      }
    )

    if (models.length !== 0) {
      mergeFunction(state, models)
    }
  }

  function setOneMutably(entity: T, state: R): void {
    return setManyMutably([entity], state)
  }

  function setManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    let deduplicatedEntities = {} as Record<Id, T>;
    newEntities = ensureEntitiesArray(newEntities)
    if (newEntities.length !== 0) {
      for (const item of newEntities) {
        const entityId = selectId(item);
        // For multiple items with the same ID, we should keep the last one.
        deduplicatedEntities[entityId] = item;
        delete (state.entities as Record<Id, T>)[entityId]
      }
      newEntities = ensureEntitiesArray(deduplicatedEntities);
      mergeFunction(state, newEntities)
    }
  }

  function setAllMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    newEntities = ensureEntitiesArray(newEntities)
    state.entities = {} as Record<Id, T>
    state.ids = []

    addManyMutably(newEntities, state, [])
  }

  function updateOneMutably(update: Update<T, Id>, state: R): void {
    return updateManyMutably([update], state)
  }

  function updateManyMutably(
    updates: ReadonlyArray<Update<T, Id>>,
    state: R,
  ): void {
    let appliedUpdates = false
    let replacedIds = false

    for (let update of updates) {
      const entity: T | undefined = (state.entities as Record<Id, T>)[update.id]
      if (!entity) {
        continue
      }

      appliedUpdates = true

      Object.assign(entity, update.changes)
      const newId = selectId(entity)

      if (update.id !== newId) {
        // We do support the case where updates can change an item's ID.
        // This makes things trickier - go ahead and swap the IDs in state now.
        replacedIds = true
        delete (state.entities as Record<Id, T>)[update.id]
        const oldIndex = (state.ids as Id[]).indexOf(update.id)
        state.ids[oldIndex] = newId
        ;(state.entities as Record<Id, T>)[newId] = entity
      }
    }

    if (appliedUpdates) {
      mergeFunction(state, [], appliedUpdates, replacedIds)
    }
  }

  function upsertOneMutably(entity: T, state: R): void {
    return upsertManyMutably([entity], state)
  }

  function upsertManyMutably(
    newEntities: readonly T[] | Record<Id, T>,
    state: R,
  ): void {
    const [added, updated, existingIdsArray] = splitAddedUpdatedEntities<T, Id>(
      newEntities,
      selectId,
      state,
    )

    if (added.length) {
      addManyMutably(added, state, existingIdsArray)
    }
    if (updated.length) {
      updateManyMutably(updated, state)
    }
  }

  function areArraysEqual(a: readonly unknown[], b: readonly unknown[]) {
    if (a.length !== b.length) {
      return false
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue
      }
      return false
    }
    return true
  }

  type MergeFunction = (
    state: R,
    addedItems: readonly T[],
    appliedUpdates?: boolean,
    replacedIds?: boolean,
  ) => void

  const mergeFunction: MergeFunction = (
    state,
    addedItems,
    appliedUpdates,
    replacedIds,
  ) => {
    const currentEntities = getCurrent(state.entities)
    const currentIds = getCurrent(state.ids)

    const stateEntities = state.entities as Record<Id, T>

    let ids: Iterable<Id> = currentIds
    if (replacedIds) {
      ids = new Set(currentIds)
    }

    let sortedEntities: T[] = []
    for (const id of ids) {
      const entity = currentEntities[id]
      if (entity) {
        sortedEntities.push(entity)
      }
    }
    const wasPreviouslyEmpty = sortedEntities.length === 0

    // Insert/overwrite all new/updated
    for (const item of addedItems) {
      stateEntities[selectId(item)] = item

      if (!wasPreviouslyEmpty) {
        // Binary search insertion generally requires fewer comparisons
        insert(sortedEntities, item, comparer)
      }
    }

    if (wasPreviouslyEmpty) {
      // All we have is the incoming values, sort them
      sortedEntities = addedItems.slice().sort(comparer)
    } else if (appliedUpdates) {
      // We should have a _mostly_-sorted array already
      sortedEntities.sort(comparer)
    }

    const newSortedIds = sortedEntities.map(selectId)

    if (!areArraysEqual(currentIds, newSortedIds)) {
      state.ids = newSortedIds
    }
  }

  return {
    removeOne,
    removeMany,
    removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably),
  }
}
