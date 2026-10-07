const { Writable } = require('node:stream')

module.exports = (options) => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      // apply a transform and send to stdout
      console.log(chunk.toString().toUpperCase())
      cb()
    }
  })
  return myTransportStream
}
