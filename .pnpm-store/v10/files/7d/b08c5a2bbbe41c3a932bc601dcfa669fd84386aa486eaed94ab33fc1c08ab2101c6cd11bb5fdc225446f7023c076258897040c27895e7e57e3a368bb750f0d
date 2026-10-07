import { createInterface } from 'node:readline'

/**
 * Returns a promise resolving to the first line written to stdin after invoking.
 * @warn will never resolve if called after writing to stdin
 *
 * @returns {Promise<string>}
 */
export const readStdin = () => {
  const readline = createInterface({ input: process.stdin })

  return new Promise((resolve) => {
    readline.prompt()
    readline.on('line', (line) => {
      readline.close()
      resolve(line)
    })
  })
}
