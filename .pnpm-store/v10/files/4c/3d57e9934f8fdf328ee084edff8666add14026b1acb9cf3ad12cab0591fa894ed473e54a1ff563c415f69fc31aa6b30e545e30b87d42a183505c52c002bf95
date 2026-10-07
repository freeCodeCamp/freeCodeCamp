/** @internal */
export const Color = {
  Red: 0 as Node.Color,
  Black: 1 << 0 as Node.Color
} as const

export declare namespace Node {
  export type Color = number & {
    readonly Color: unique symbol
  }
}

export interface Node<out K, out V> {
  color: Node.Color
  key: K
  value: V
  left: Node<K, V> | undefined
  right: Node<K, V> | undefined
  count: number
}

/** @internal */
export const clone = <K, V>({
  color,
  count,
  key,
  left,
  right,
  value
}: Node<K, V>) => ({
  color,
  key,
  value,
  left,
  right,
  count
})

/** @internal */
export function swap<K, V>(n: Node<K, V>, v: Node<K, V>) {
  n.key = v.key
  n.value = v.value
  n.left = v.left
  n.right = v.right
  n.color = v.color
  n.count = v.count
}

/** @internal */
export const repaint = <K, V>({
  count,
  key,
  left,
  right,
  value
}: Node<K, V>, color: Node.Color) => ({
  color,
  key,
  value,
  left,
  right,
  count
})

/** @internal */
export const recount = <K, V>(node: Node<K, V>) => {
  node.count = 1 + (node.left?.count ?? 0) + (node.right?.count ?? 0)
}
