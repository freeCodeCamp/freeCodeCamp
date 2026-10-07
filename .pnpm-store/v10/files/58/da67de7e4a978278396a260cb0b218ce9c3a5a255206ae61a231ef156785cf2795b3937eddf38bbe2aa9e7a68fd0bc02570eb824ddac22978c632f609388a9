"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RingBuffer = void 0;
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
class RingBuffer {
  capacity;
  array;
  size = 0;
  current = 0;
  constructor(capacity) {
    this.capacity = capacity;
    this.array = Array.from({
      length: capacity
    }, _Function.constUndefined);
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
exports.RingBuffer = RingBuffer;
//# sourceMappingURL=ringBuffer.js.map