const { Writable } = require('node:stream')

module.exports = () =>
  new Writable({
    autoDestroy: true,
    write (chunk, enc, cb) {
      setImmediate(() => {
        /* eslint-disable no-empty */
        for (let i = 0; i < 1e3; i++) {}
        process.exit(0)
      })
    }
  })
