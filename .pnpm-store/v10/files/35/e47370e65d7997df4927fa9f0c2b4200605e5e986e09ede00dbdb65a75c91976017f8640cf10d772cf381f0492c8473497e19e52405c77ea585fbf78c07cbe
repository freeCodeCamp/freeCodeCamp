module.exports = class FixedFIFO {
  constructor (hwm) {
    if (!(hwm > 0) || ((hwm - 1) & hwm) !== 0) throw new Error('Max size for a FixedFIFO should be a power of two')
    this.buffer = new Array(hwm)
    this.mask = hwm - 1
    this.top = 0
    this.btm = 0
    this.next = null
  }

  clear () {
    this.top = this.btm = 0
    this.next = null
    this.buffer.fill(undefined)
  }

  push (data) {
    if (this.buffer[this.top] !== undefined) return false
    this.buffer[this.top] = data
    this.top = (this.top + 1) & this.mask
    return true
  }

  shift () {
    const last = this.buffer[this.btm]
    if (last === undefined) return undefined
    this.buffer[this.btm] = undefined
    this.btm = (this.btm + 1) & this.mask
    return last
  }

  peek () {
    return this.buffer[this.btm]
  }

  isEmpty () {
    return this.buffer[this.btm] === undefined
  }
}
