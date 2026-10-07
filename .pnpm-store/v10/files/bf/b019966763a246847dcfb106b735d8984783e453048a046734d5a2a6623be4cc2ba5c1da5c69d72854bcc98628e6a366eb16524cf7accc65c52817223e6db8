import type { Cell } from './autotracking'
import {
  getValue as consumeTag,
  createCell as createStorage,
  setValue
} from './autotracking'

export type Tag = Cell<unknown>

const neverEq = (a: any, b: any): boolean => false

export function createTag(): Tag {
  return createStorage(null, neverEq)
}
export { consumeTag }
export function dirtyTag(tag: Tag, value: any): void {
  setValue(tag, value)
}

export interface Node<
  T extends Array<unknown> | Record<string, unknown> =
    | Array<unknown>
    | Record<string, unknown>
> {
  collectionTag: Tag | null
  tag: Tag | null
  tags: Record<string, Tag>
  children: Record<string, Node>
  proxy: T
  value: T
  id: number
}

export const consumeCollection = (node: Node): void => {
  let tag = node.collectionTag

  if (tag === null) {
    tag = node.collectionTag = createTag()
  }

  consumeTag(tag)
}

export const dirtyCollection = (node: Node): void => {
  const tag = node.collectionTag

  if (tag !== null) {
    dirtyTag(tag, null)
  }
}
