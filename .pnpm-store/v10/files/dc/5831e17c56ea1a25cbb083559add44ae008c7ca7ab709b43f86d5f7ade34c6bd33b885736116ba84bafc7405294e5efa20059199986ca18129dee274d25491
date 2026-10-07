const tee = require('./')
const { Readable } = require('streamx')

const s = new Readable()

for (let i = 0; i < 1000; i++) {
  s.push(Buffer.alloc(1024))
}

const [a, b] = tee(s)

a.on('data', console.log)

setTimeout(function () {
  b.read()
}, 1000)
