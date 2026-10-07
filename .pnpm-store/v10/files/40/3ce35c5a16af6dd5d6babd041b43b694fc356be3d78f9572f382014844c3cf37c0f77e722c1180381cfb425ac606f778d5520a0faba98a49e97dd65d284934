import { equals } from "../../Equal.js"
import type { HashMap } from "../../HashMap.js"
import * as O from "../../Option.js"
import { isTagged } from "../../Predicate.js"
import * as Stack from "../stack.js"
import { arraySpliceIn, arraySpliceOut, arrayUpdate } from "./array.js"
import { fromBitmap, hashFragment, toBitmap } from "./bitwise.js"
import { MAX_INDEX_NODE, MIN_ARRAY_NODE, SIZE } from "./config.js"

/** @internal */
export type Node<K, V> =
  | EmptyNode<K, V>
  | LeafNode<K, V>
  | CollisionNode<K, V>
  | IndexedNode<K, V>
  | ArrayNode<K, V>

/** @internal */
export interface SizeRef {
  value: number // mutable by design
}

/** @internal */
export class EmptyNode<out K, out V> {
  readonly _tag = "EmptyNode"

  modify(
    edit: number,
    _shift: number,
    f: HashMap.UpdateFn<V>,
    hash: number,
    key: K,
    size: SizeRef
  ): Node<K, V> {
    const v = f(O.none())
    if (O.isNone(v)) return new EmptyNode()
    ++size.value
    return new LeafNode(edit, hash, key, v)
  }
}

/** @internal */
export function isEmptyNode(a: unknown): a is EmptyNode<unknown, unknown> {
  return isTagged(a, "EmptyNode")
}

/** @internal */
export function isLeafNode<K, V>(
  node: Node<K, V>
): node is EmptyNode<K, V> | LeafNode<K, V> | CollisionNode<K, V> {
  return isEmptyNode(node) || node._tag === "LeafNode" || node._tag === "CollisionNode"
}

/** @internal */
export function canEditNode<K, V>(node: Node<K, V>, edit: number): boolean {
  return isEmptyNode(node) ? false : edit === node.edit
}

/** @internal */
export class LeafNode<out K, out V> {
  readonly _tag = "LeafNode"

  constructor(
    readonly edit: number,
    readonly hash: number,
    readonly key: K,
    public value: O.Option<V>
  ) {}

  modify(
    edit: number,
    shift: number,
    f: HashMap.UpdateFn<V>,
    hash: number,
    key: K,
    size: SizeRef
  ): Node<K, V> {
    if (equals(key, this.key)) {
      const v = f(this.value)
      if (v === this.value) return this
      else if (O.isNone(v)) {
        --size.value
        return new EmptyNode()
      }
      if (canEditNode(this, edit)) {
        this.value = v
        return this
      }
      return new LeafNode(edit, hash, key, v)
    }
    const v = f(O.none())
    if (O.isNone(v)) return this
    ++size.value
    return mergeLeaves(
      edit,
      shift,
      this.hash,
      this,
      hash,
      new LeafNode(edit, hash, key, v)
    )
  }
}

/** @internal */
export class CollisionNode<out K, out V> {
  readonly _tag = "CollisionNode"

  constructor(
    readonly edit: number,
    readonly hash: number,
    readonly children: Array<Node<K, V>>
  ) {}

  modify(
    edit: number,
    shift: number,
    f: HashMap.UpdateFn<V>,
    hash: number,
    key: K,
    size: SizeRef
  ): Node<K, V> {
    if (hash === this.hash) {
      const canEdit = canEditNode(this, edit)
      const list = this.updateCollisionList(
        canEdit,
        edit,
        this.hash,
        this.children,
        f,
        key,
        size
      )
      if (list === this.children) return this

      return list.length > 1 ? new CollisionNode(edit, this.hash, list) : list[0]! // collapse single element collision list
    }
    const v = f(O.none())
    if (O.isNone(v)) return this
    ++size.value
    return mergeLeaves(
      edit,
      shift,
      this.hash,
      this,
      hash,
      new LeafNode(edit, hash, key, v)
    )
  }

  updateCollisionList(
    mutate: boolean,
    edit: number,
    hash: number,
    list: Array<Node<K, V>>,
    f: HashMap.UpdateFn<V>,
    key: K,
    size: SizeRef
  ) {
    const len = list.length
    for (let i = 0; i < len; ++i) {
      const child = list[i]!
      if ("key" in child && equals(key, child.key)) {
        const value = child.value
        const newValue = f(value)
        if (newValue === value) return list
        if (O.isNone(newValue)) {
          --size.value
          return arraySpliceOut(mutate, i, list)
        }
        return arrayUpdate(mutate, i, new LeafNode(edit, hash, key, newValue), list)
      }
    }

    const newValue = f(O.none())
    if (O.isNone(newValue)) return list
    ++size.value
    return arrayUpdate(mutate, len, new LeafNode(edit, hash, key, newValue), list)
  }
}

/** @internal */
export class IndexedNode<out K, out V> {
  readonly _tag = "IndexedNode"

  constructor(
    readonly edit: number,
    public mask: number,
    public children: Array<Node<K, V>>
  ) {}

  modify(
    edit: number,
    shift: number,
    f: HashMap.UpdateFn<V>,
    hash: number,
    key: K,
    size: SizeRef
  ): Node<K, V> {
    const mask = this.mask
    const children = this.children
    const frag = hashFragment(shift, hash)
    const bit = toBitmap(frag)
    const indx = fromBitmap(mask, bit)
    const exists = mask & bit
    const canEdit = canEditNode(this, edit)

    if (!exists) {
      const _newChild = new EmptyNode<K, V>().modify(edit, shift + SIZE, f, hash, key, size)
      if (!_newChild) return this
      return children.length >= MAX_INDEX_NODE ?
        expand(edit, frag, _newChild, mask, children) :
        new IndexedNode(edit, mask | bit, arraySpliceIn(canEdit, indx, _newChild, children))
    }

    const current = children[indx]!
    const child = current.modify(edit, shift + SIZE, f, hash, key, size)

    if (current === child) return this
    let bitmap = mask
    let newChildren
    if (isEmptyNode(child)) {
      // remove
      bitmap &= ~bit
      if (!bitmap) return new EmptyNode()
      if (children.length <= 2 && isLeafNode(children[indx ^ 1]!)) {
        return children[indx ^ 1]! // collapse
      }

      newChildren = arraySpliceOut(canEdit, indx, children)
    } else {
      // modify
      newChildren = arrayUpdate(canEdit, indx, child, children)
    }

    if (canEdit) {
      this.mask = bitmap
      this.children = newChildren
      return this
    }

    return new IndexedNode(edit, bitmap, newChildren)
  }
}

/** @internal */
export class ArrayNode<out K, out V> {
  readonly _tag = "ArrayNode"

  constructor(
    readonly edit: number,
    public size: number,
    public children: Array<Node<K, V>>
  ) {}

  modify(
    edit: number,
    shift: number,
    f: HashMap.UpdateFn<V>,
    hash: number,
    key: K,
    size: SizeRef
  ): Node<K, V> {
    let count = this.size
    const children = this.children
    const frag = hashFragment(shift, hash)
    const child = children[frag]
    const newChild = (child || new EmptyNode<K, V>()).modify(
      edit,
      shift + SIZE,
      f,
      hash,
      key,
      size
    )

    if (child === newChild) return this

    const canEdit = canEditNode(this, edit)
    let newChildren
    if (isEmptyNode(child) && !isEmptyNode(newChild)) {
      // add
      ++count
      newChildren = arrayUpdate(canEdit, frag, newChild, children)
    } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
      // remove
      --count
      if (count <= MIN_ARRAY_NODE) {
        return pack(edit, count, frag, children)
      }
      newChildren = arrayUpdate(canEdit, frag, new EmptyNode<K, V>(), children)
    } else {
      // modify
      newChildren = arrayUpdate(canEdit, frag, newChild, children)
    }

    if (canEdit) {
      this.size = count
      this.children = newChildren
      return this
    }
    return new ArrayNode(edit, count, newChildren)
  }
}

function pack<K, V>(
  edit: number,
  count: number,
  removed: number,
  elements: Array<Node<K, V>>
) {
  const children = new Array<Node<K, V>>(count - 1)
  let g = 0
  let bitmap = 0
  for (let i = 0, len = elements.length; i < len; ++i) {
    if (i !== removed) {
      const elem = elements[i]
      if (elem && !isEmptyNode(elem)) {
        children[g++] = elem
        bitmap |= 1 << i
      }
    }
  }
  return new IndexedNode(edit, bitmap, children)
}

function expand<K, V>(
  edit: number,
  frag: number,
  child: Node<K, V>,
  bitmap: number,
  subNodes: Array<Node<K, V>>
) {
  const arr = []
  let bit = bitmap
  let count = 0
  for (let i = 0; bit; ++i) {
    if (bit & 1) arr[i] = subNodes[count++]!
    bit >>>= 1
  }
  arr[frag] = child
  return new ArrayNode(edit, count + 1, arr)
}

function mergeLeavesInner<K, V>(
  edit: number,
  shift: number,
  h1: number,
  n1: Node<K, V>,
  h2: number,
  n2: Node<K, V>
): Node<K, V> | ((child: Node<K, V>) => Node<K, V>) {
  if (h1 === h2) return new CollisionNode(edit, h1, [n2, n1])
  const subH1 = hashFragment(shift, h1)
  const subH2 = hashFragment(shift, h2)

  if (subH1 === subH2) {
    return (child) => new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), [child])
  } else {
    const children = subH1 < subH2 ? [n1, n2] : [n2, n1]
    return new IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), children)
  }
}

function mergeLeaves<K, V>(
  edit: number,
  shift: number,
  h1: number,
  n1: Node<K, V>,
  h2: number,
  n2: Node<K, V>
): Node<K, V> {
  let stack: Stack.Stack<(node: Node<K, V>) => Node<K, V>> | undefined = undefined
  let currentShift = shift

  while (true) {
    const res = mergeLeavesInner(edit, currentShift, h1, n1, h2, n2)

    if (typeof res === "function") {
      stack = Stack.make(res, stack)
      currentShift = currentShift + SIZE
    } else {
      let final = res
      while (stack != null) {
        final = stack.value(final)
        stack = stack.previous
      }
      return final
    }
  }
}
