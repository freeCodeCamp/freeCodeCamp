const FixedFIFO = require('./fixed-size')

module.exports = class FastFIFO {
  constructor (hwm) {
    this.hwm = hwm || 16
    this.head = new FixedFIFO(this.hwm)
    this.tail = this.head
    this.length = 0
  }

  clear () {
    this.head = this.tail
    this.head.clear()
    this.length = 0
  }

  push (val) {
    this.length++
    if (!this.head.push(val)) {
      const prev = this.head
      this.head = prev.next = new FixedFIFO(2 * this.head.buffer.length)
      this.head.push(val)
    }
  }

  shift () {
    if (this.length !== 0) this.length--
    const val = this.tail.shift()
    if (val === undefined && this.tail.next) {
      const next = this.tail.next
      this.tail.next = null
      this.tail = next
      return this.tail.shift()
    }

    return val
  }

  peek () {
    const val = this.tail.peek()
    if (val === undefined && this.tail.next) return this.tail.next.peek()
    return val
  }

  isEmpty () {
    return this.length === 0
  }
}
