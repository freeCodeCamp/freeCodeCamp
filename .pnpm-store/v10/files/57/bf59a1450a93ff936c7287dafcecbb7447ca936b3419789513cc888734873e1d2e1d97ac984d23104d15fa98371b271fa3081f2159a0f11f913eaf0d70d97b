import { invariant } from 'outvariant'
import type { AnyHandler } from '../../experimental/handlers-controller'

const kSiblingHandlers = Symbol('kSiblingHandlers')

export function attachSiblingHandlers<T extends AnyHandler>(
  owner: T,
  siblings: Array<AnyHandler>,
): T {
  invariant(
    getSiblingHandlers(owner).length === 0,
    'Failed to merge handlers: the owner "%s" handler is already merged',
    owner.kind,
  )

  Object.defineProperty(owner, kSiblingHandlers, {
    value: siblings,
    enumerable: false,
    writable: false,
    configurable: false,
  })

  return owner
}

export function getSiblingHandlers(owner: AnyHandler): Array<AnyHandler> {
  return Reflect.get(owner, kSiblingHandlers) || []
}
