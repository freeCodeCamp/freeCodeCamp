import { Writable } from 'node:stream'

export default (): Writable => {
  const myTransportStream = new Writable({
    autoDestroy: true,
    write (chunk, _enc, cb) {
      console.log(chunk.toString())
      cb()
    },
    defaultEncoding: 'utf8'
  })

  return myTransportStream
}
