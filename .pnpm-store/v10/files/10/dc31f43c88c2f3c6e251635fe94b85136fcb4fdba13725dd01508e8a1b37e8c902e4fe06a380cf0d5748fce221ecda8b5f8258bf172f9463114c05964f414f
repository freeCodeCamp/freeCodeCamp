import type { Draft } from 'immer'
import { current, isDraft } from '../immerImports'
import type {
  DraftableEntityState,
  EntityId,
  IdSelector,
  Update,
} from './models'

export function selectIdValue<T, Id extends EntityId>(
  entity: T,
  selectId: IdSelector<T, Id>,
) {
  const key = selectId(entity)

  if (process.env.NODE_ENV !== 'production' && key === undefined) {
    console.warn(
      'The entity passed to the `selectId` implementation returned undefined.',
      'You should probably provide your own `selectId` implementation.',
      'The entity that was passed:',
      entity,
      'The `selectId` implementation:',
      selectId.toString(),
    )
  }

  return key
}

export function ensureEntitiesArray<T, Id extends EntityId>(
  entities: readonly T[] | Record<Id, T>,
): readonly T[] {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities)
  }

  return entities
}

export function getCurrent<T>(value: T | Draft<T>): T {
  return (isDraft(value) ? current(value) : value) as T
}

export function splitAddedUpdatedEntities<T, Id extends EntityId>(
  newEntities: readonly T[] | Record<Id, T>,
  selectId: IdSelector<T, Id>,
  state: DraftableEntityState<T, Id>,
): [T[], Update<T, Id>[], Id[]] {
  newEntities = ensureEntitiesArray(newEntities)

  const existingIdsArray = getCurrent(state.ids)
  const existingIds = new Set<Id>(existingIdsArray)

  const added: T[] = []
  const addedIds = new Set<Id>([])
  const updated: Update<T, Id>[] = []

  for (const entity of newEntities) {
    const id = selectIdValue(entity, selectId)
    if (existingIds.has(id) || addedIds.has(id)) {
      updated.push({ id, changes: entity })
    } else {
      addedIds.add(id)
      added.push(entity)
    }
  }
  return [added, updated, existingIdsArray]
}
