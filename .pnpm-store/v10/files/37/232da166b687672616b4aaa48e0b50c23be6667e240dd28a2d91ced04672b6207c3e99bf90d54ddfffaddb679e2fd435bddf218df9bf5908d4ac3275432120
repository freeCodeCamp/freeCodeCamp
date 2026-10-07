// Original source:
// - https://github.com/simonihmig/tracked-redux/blob/master/packages/tracked-redux/src/-private/proxy.ts

import type { Node, Tag } from './tracking'
import {
  consumeCollection,
  consumeTag,
  createTag,
  dirtyCollection,
  dirtyTag
} from './tracking'

export const REDUX_PROXY_LABEL = Symbol()

let nextId = 0

const proto = Object.getPrototypeOf({})

class ObjectTreeNode<T extends Record<string, unknown>> implements Node<T> {
  proxy: T = new Proxy(this, objectProxyHandler) as unknown as T
  tag = createTag()
  tags = {} as Record<string, Tag>
  children = {} as Record<string, Node>
  collectionTag = null
  id = nextId++

  constructor(public value: T) {
    this.value = value
    this.tag.value = value
  }
}

const objectProxyHandler = {
  get(node: Node, key: string | symbol): unknown {
    function calculateResult() {
      const { value } = node

      const childValue = Reflect.get(value, key)

      if (typeof key === 'symbol') {
        return childValue
      }

      if (key in proto) {
        return childValue
      }

      if (typeof childValue === 'object' && childValue !== null) {
        let childNode = node.children[key]

        if (childNode === undefined) {
          childNode = node.children[key] = createNode(childValue)
        }

        if (childNode.tag) {
          consumeTag(childNode.tag)
        }

        return childNode.proxy
      } else {
        let tag = node.tags[key]

        if (tag === undefined) {
          tag = node.tags[key] = createTag()
          tag.value = childValue
        }

        consumeTag(tag)

        return childValue
      }
    }
    const res = calculateResult()
    return res
  },

  ownKeys(node: Node): ArrayLike<string | symbol> {
    consumeCollection(node)
    return Reflect.ownKeys(node.value)
  },

  getOwnPropertyDescriptor(
    node: Node,
    prop: string | symbol
  ): PropertyDescriptor | undefined {
    return Reflect.getOwnPropertyDescriptor(node.value, prop)
  },

  has(node: Node, prop: string | symbol): boolean {
    return Reflect.has(node.value, prop)
  }
}

class ArrayTreeNode<T extends Array<unknown>> implements Node<T> {
  proxy: T = new Proxy([this], arrayProxyHandler) as unknown as T
  tag = createTag()
  tags = {}
  children = {}
  collectionTag = null
  id = nextId++

  constructor(public value: T) {
    this.value = value
    this.tag.value = value
  }
}

const arrayProxyHandler = {
  get([node]: [Node], key: string | symbol): unknown {
    if (key === 'length') {
      consumeCollection(node)
    }

    return objectProxyHandler.get(node, key)
  },

  ownKeys([node]: [Node]): ArrayLike<string | symbol> {
    return objectProxyHandler.ownKeys(node)
  },

  getOwnPropertyDescriptor(
    [node]: [Node],
    prop: string | symbol
  ): PropertyDescriptor | undefined {
    return objectProxyHandler.getOwnPropertyDescriptor(node, prop)
  },

  has([node]: [Node], prop: string | symbol): boolean {
    return objectProxyHandler.has(node, prop)
  }
}

export function createNode<T extends Array<unknown> | Record<string, unknown>>(
  value: T
): Node<T> {
  if (Array.isArray(value)) {
    return new ArrayTreeNode(value)
  }

  return new ObjectTreeNode(value) as Node<T>
}

const keysMap = new WeakMap<
  Array<unknown> | Record<string, unknown>,
  Set<string>
>()

export function updateNode<T extends Array<unknown> | Record<string, unknown>>(
  node: Node<T>,
  newValue: T
): void {
  const { value, tags, children } = node

  node.value = newValue

  if (
    Array.isArray(value) &&
    Array.isArray(newValue) &&
    value.length !== newValue.length
  ) {
    dirtyCollection(node)
  } else {
    if (value !== newValue) {
      let oldKeysSize = 0
      let newKeysSize = 0
      let anyKeysAdded = false

      for (const _key in value) {
        oldKeysSize++
      }

      for (const key in newValue) {
        newKeysSize++
        if (!(key in value)) {
          anyKeysAdded = true
          break
        }
      }

      const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize

      if (isDifferent) {
        dirtyCollection(node)
      }
    }
  }

  for (const key in tags) {
    const childValue = (value as Record<string, unknown>)[key]
    const newChildValue = (newValue as Record<string, unknown>)[key]

    if (childValue !== newChildValue) {
      dirtyCollection(node)
      dirtyTag(tags[key], newChildValue)
    }

    if (typeof newChildValue === 'object' && newChildValue !== null) {
      delete tags[key]
    }
  }

  for (const key in children) {
    const childNode = children[key]
    const newChildValue = (newValue as Record<string, unknown>)[key]

    const childValue = childNode.value

    if (childValue === newChildValue) {
      continue
    } else if (typeof newChildValue === 'object' && newChildValue !== null) {
      updateNode(childNode, newChildValue as Record<string, unknown>)
    } else {
      deleteNode(childNode)
      delete children[key]
    }
  }
}

function deleteNode(node: Node): void {
  if (node.tag) {
    dirtyTag(node.tag, null)
  }
  dirtyCollection(node)
  for (const key in node.tags) {
    dirtyTag(node.tags[key], null)
  }
  for (const key in node.children) {
    deleteNode(node.children[key])
  }
}
