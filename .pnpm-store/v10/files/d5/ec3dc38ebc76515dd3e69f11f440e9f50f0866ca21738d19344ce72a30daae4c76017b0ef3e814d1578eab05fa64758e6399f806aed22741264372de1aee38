import { type PathLike, type WriteStream, createWriteStream } from 'fs'
import { once } from 'events'

export default async function run (
  opts: { dest: PathLike },
): Promise<WriteStream> {
  const stream = createWriteStream(opts.dest)
  await once(stream, 'open')
  return stream
}
