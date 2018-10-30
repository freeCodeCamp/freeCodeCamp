var tape = require('tape')

module.exports = function (m) {
  if(m.parent) return
  for(var name in m.exports) {
    tape(name, function (t) {
      console.log('start', name)
      t.done = t.end
      m.exports[name](t)
    })
  }
}
