export type WriteCallback = (error?: Error | null) => void

export type WriteArgs =
  | [chunk: unknown, callback?: WriteCallback]
  | [chunk: unknown, encoding: BufferEncoding, callback?: WriteCallback]

export type NormalizedSocketWriteArgs = [
  chunk: any,
  encoding?: BufferEncoding,
  callback?: WriteCallback,
]

/**
 * Normalizes the arguments provided to the `Writable.prototype.write()`
 * and `Writable.prototype.end()`.
 */
export function normalizeSocketWriteArgs(
  args: WriteArgs
): NormalizedSocketWriteArgs {
  const normalized: NormalizedSocketWriteArgs = [args[0], undefined, undefined]

  if (typeof args[1] === 'string') {
    normalized[1] = args[1]
  } else if (typeof args[1] === 'function') {
    normalized[2] = args[1]
  }

  if (typeof args[2] === 'function') {
    normalized[2] = args[2]
  }

  return normalized
}
