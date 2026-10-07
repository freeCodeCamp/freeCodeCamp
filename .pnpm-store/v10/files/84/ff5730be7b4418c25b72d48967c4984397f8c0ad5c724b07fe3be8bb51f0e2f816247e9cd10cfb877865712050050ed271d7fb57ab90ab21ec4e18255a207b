import { createWriteStream } from 'fs'
import { once } from 'events'

export default async function run (opts) {
  const stream = createWriteStream(opts.dest)
  await once(stream, 'open')
  return stream
}
