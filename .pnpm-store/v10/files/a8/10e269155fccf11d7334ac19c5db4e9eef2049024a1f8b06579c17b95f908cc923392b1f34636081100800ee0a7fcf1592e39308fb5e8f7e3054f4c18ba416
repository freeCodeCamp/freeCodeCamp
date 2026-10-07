/** @internal */
export interface Stack<out A> {
  readonly value: A
  readonly previous: Stack<A> | undefined
}

export const make = <A>(value: A, previous?: Stack<A>): Stack<A> => ({
  value,
  previous
})
