import * as Chunk from "../Chunk.js";
import { constUndefined } from "../Function.js";
import * as Option from "../Option.js";
/** @internal */
export class RingBuffer {
  capacity;
  array;
  size = 0;
  current = 0;
  constructor(capacity) {
    this.capacity = capacity;
    this.array = Array.from({
      length: capacity
    }, constUndefined);
  }
  head() {
    return Option.fromNullable(this.array[this.current]);
  }
  lastOrNull() {
    if (this.size === 0) {
      return undefined;
    }
    const index = this.current === 0 ? this.array.length - 1 : this.current - 1;
    return this.array[index] ?? undefined;
  }
  put(value) {
    this.array[this.current] = value;
    this.increment();
  }
  dropLast() {
    if (this.size > 0) {
      this.decrement();
      this.array[this.current] = undefined;
    }
  }
  toChunk() {
    const begin = this.current - this.size;
    const newArray = begin < 0 ? [...this.array.slice(this.capacity + begin, this.capacity), ...this.array.slice(0, this.current)] : this.array.slice(begin, this.current);
    return Chunk.fromIterable(newArray);
  }
  increment() {
    if (this.size < this.capacity) {
      this.size += 1;
    }
    this.current = (this.current + 1) % this.capacity;
  }
  decrement() {
    this.size -= 1;
    if (this.current > 0) {
      this.current -= 1;
    } else {
      this.current = this.capacity - 1;
    }
  }
}
//# sourceMappingURL=ringBuffer.js.map