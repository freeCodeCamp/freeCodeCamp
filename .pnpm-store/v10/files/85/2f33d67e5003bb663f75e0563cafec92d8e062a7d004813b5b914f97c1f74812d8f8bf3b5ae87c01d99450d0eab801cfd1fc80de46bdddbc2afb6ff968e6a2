module.exports = function xorInplace (a, b) {
  var length = Math.min(a.length, b.length)

  for (var i = 0; i < length; ++i) {
    a[i] = a[i] ^ b[i]
  }

  return a.slice(0, length)
}
