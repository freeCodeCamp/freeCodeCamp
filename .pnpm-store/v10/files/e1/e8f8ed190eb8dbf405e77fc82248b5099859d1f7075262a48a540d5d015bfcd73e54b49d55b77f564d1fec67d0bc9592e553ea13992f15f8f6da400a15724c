import * as Chunk from "../Chunk.js"
import { constUndefined } from "../Function.js"
import * as Option from "../Option.js"

/** @internal */
export class RingBuffer<out A> {
  private array: Array<A | undefined>
  private size = 0
  private current = 0

  constructor(public readonly capacity: number) {
    this.array = Array.from({ length: capacity }, constUndefined)
  }

  head(): Option.Option<A> {
    return Option.fromNullable(this.array[this.current])
  }

  lastOrNull(): A | undefined {
    if (this.size === 0) {
      return undefined
    }

    const index = this.current === 0 ? this.array.length - 1 : this.current - 1

    return this.array[index] ?? undefined
  }

  put(value: A): void {
    this.array[this.current] = value
    this.increment()
  }

  dropLast(): void {
    if (this.size > 0) {
      this.decrement()
      this.array[this.current] = undefined
    }
  }

  toChunk(): Chunk.Chunk<A> {
    const begin = this.current - this.size
    const newArray = begin < 0
      ? [
        ...this.array.slice(this.capacity + begin, this.capacity),
        ...this.array.slice(0, this.current)
      ]
      : this.array.slice(begin, this.current)

    return Chunk.fromIterable(newArray) as Chunk.Chunk<A>
  }

  private increment(): void {
    if (this.size < this.capacity) {
      this.size += 1
    }
    this.current = (this.current + 1) % this.capacity
  }

  private decrement(): void {
    this.size -= 1
    if (this.current > 0) {
      this.current -= 1
    } else {
      this.current = this.capacity - 1
    }
  }
}
