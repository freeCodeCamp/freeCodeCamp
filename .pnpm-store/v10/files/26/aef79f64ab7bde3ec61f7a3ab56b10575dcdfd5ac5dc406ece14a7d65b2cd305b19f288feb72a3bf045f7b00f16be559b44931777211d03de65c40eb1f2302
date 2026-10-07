import * as Arr from "../../Array.js"
import * as Option from "../../Option.js"
import type * as RBT from "../../RedBlackTree.js"
import type { RedBlackTreeImpl } from "../redBlackTree.js"
import type * as Node from "./node.js"

/** @internal */
export const Direction = {
  Forward: 0 as RBT.RedBlackTree.Direction,
  Backward: 1 << 0 as RBT.RedBlackTree.Direction
} as const

/** @internal */
export class RedBlackTreeIterator<in out K, out V> implements Iterator<[K, V]> {
  private count = 0

  constructor(
    readonly self: RBT.RedBlackTree<K, V>,
    readonly stack: Array<Node.Node<K, V>>,
    readonly direction: RBT.RedBlackTree.Direction
  ) {}

  /**
   * Clones the iterator
   */
  clone(): RedBlackTreeIterator<K, V> {
    return new RedBlackTreeIterator(this.self, this.stack.slice(), this.direction)
  }

  /**
   * Reverse the traversal direction
   */
  reversed(): RedBlackTreeIterator<K, V> {
    return new RedBlackTreeIterator(
      this.self,
      this.stack.slice(),
      this.direction === Direction.Forward ? Direction.Backward : Direction.Forward
    )
  }

  /**
   * Iterator next
   */
  next(): IteratorResult<[K, V], number> {
    const entry = this.entry
    this.count++
    if (this.direction === Direction.Forward) {
      this.moveNext()
    } else {
      this.movePrev()
    }
    switch (entry._tag) {
      case "None": {
        return { done: true, value: this.count }
      }
      case "Some": {
        return { done: false, value: entry.value }
      }
    }
  }

  /**
   * Returns the key
   */
  get key(): Option.Option<K> {
    if (this.stack.length > 0) {
      return Option.some(this.stack[this.stack.length - 1]!.key)
    }
    return Option.none()
  }

  /**
   * Returns the value
   */
  get value(): Option.Option<V> {
    if (this.stack.length > 0) {
      return Option.some(this.stack[this.stack.length - 1]!.value)
    }
    return Option.none()
  }

  /**
   * Returns the key
   */
  get entry(): Option.Option<[K, V]> {
    return Option.map(Arr.last(this.stack), (node) => [node.key, node.value])
  }

  /**
   * Returns the position of this iterator in the sorted list
   */
  get index(): number {
    let idx = 0
    const stack = this.stack
    if (stack.length === 0) {
      const r = (this.self as RedBlackTreeImpl<K, V>)._root
      if (r != null) {
        return r.count
      }
      return 0
    } else if (stack[stack.length - 1]!.left != null) {
      idx = stack[stack.length - 1]!.left!.count
    }
    for (let s = stack.length - 2; s >= 0; --s) {
      if (stack[s + 1] === stack[s]!.right) {
        ++idx
        if (stack[s]!.left != null) {
          idx += stack[s]!.left!.count
        }
      }
    }
    return idx
  }

  /**
   * Advances iterator to next element in list
   */
  moveNext() {
    const stack = this.stack
    if (stack.length === 0) {
      return
    }
    let n: Node.Node<K, V> | undefined = stack[stack.length - 1]!
    if (n.right != null) {
      n = n.right
      while (n != null) {
        stack.push(n)
        n = n.left
      }
    } else {
      stack.pop()
      while (stack.length > 0 && stack[stack.length - 1]!.right === n) {
        n = stack[stack.length - 1]
        stack.pop()
      }
    }
  }

  /**
   * Checks if there is a next element
   */
  get hasNext() {
    const stack = this.stack
    if (stack.length === 0) {
      return false
    }
    if (stack[stack.length - 1]!.right != null) {
      return true
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1]!.left === stack[s]) {
        return true
      }
    }
    return false
  }

  /**
   * Advances iterator to previous element in list
   */
  movePrev() {
    const stack = this.stack
    if (stack.length === 0) {
      return
    }
    let n: Node.Node<K, V> | undefined = stack[stack.length - 1]
    if (n != null && n.left != null) {
      n = n.left
      while (n != null) {
        stack.push(n)
        n = n.right
      }
    } else {
      stack.pop()
      while (stack.length > 0 && stack[stack.length - 1]!.left === n) {
        n = stack[stack.length - 1]
        stack.pop()
      }
    }
  }

  /**
   * Checks if there is a previous element
   */
  get hasPrev() {
    const stack = this.stack
    if (stack.length === 0) {
      return false
    }
    if (stack[stack.length - 1]!.left != null) {
      return true
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1]!.right === stack[s]) {
        return true
      }
    }
    return false
  }
}
