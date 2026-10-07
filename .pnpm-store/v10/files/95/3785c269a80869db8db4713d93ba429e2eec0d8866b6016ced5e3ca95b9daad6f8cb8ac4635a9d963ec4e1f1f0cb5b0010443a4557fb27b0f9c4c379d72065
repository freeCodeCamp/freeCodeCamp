import { createWriteStream } from 'node:fs'
import { once } from 'node:events'

export default async function run (opts) {
  const stream = createWriteStream(opts.destination)
  await once(stream, 'open')
  return stream
}
