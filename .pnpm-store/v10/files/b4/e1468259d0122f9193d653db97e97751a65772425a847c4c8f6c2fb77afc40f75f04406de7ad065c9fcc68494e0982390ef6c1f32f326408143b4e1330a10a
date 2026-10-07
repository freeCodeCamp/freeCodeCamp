/**
 * Generate secure URL-friendly unique ID.
 *
 * By default, the ID will have 21 symbols to have a collision probability
 * similar to UUID v4.
 *
 * ```js
 * import { nanoid } from 'nanoid'
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 * ```
 *
 * @param size Size of the ID. The default size is 21.
 * @returns A random string.
 */
export function nanoid(size?: number): string

/**
 * Generate secure unique ID with custom alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param alphabet Alphabet used to generate the ID.
 * @param defaultSize Size of the ID. The default size is 21.
 * @returns A random string generator.
 *
 * ```js
 * const { customAlphabet } = require('nanoid')
 * const nanoid = customAlphabet('0123456789абвгдеё', 5)
 * nanoid() //=> "8ё56а"
 * ```
 */
export function customAlphabet(
  alphabet: string,
  defaultSize?: number
): (size?: number) => string

/**
 * Generate unique ID with custom random generator and alphabet.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * ```js
 * import { customRandom } from 'nanoid/format'
 *
 * const nanoid = customRandom('abcdef', 5, size => {
 *   const random = []
 *   for (let i = 0; i < size; i++) {
 *     random.push(randomByte())
 *   }
 *   return random
 * })
 *
 * nanoid() //=> "fbaef"
 * ```
 *
 * @param alphabet Alphabet used to generate a random string.
 * @param size Size of the random string.
 * @param random A random bytes generator.
 * @returns A random string generator.
 */
export function customRandom(
  alphabet: string,
  size: number,
  random: (bytes: number) => Uint8Array
): () => string

/**
 * URL safe symbols.
 *
 * ```js
 * import { urlAlphabet } from 'nanoid'
 * const nanoid = customAlphabet(urlAlphabet, 10)
 * nanoid() //=> "Uakgb_J5m9"
 * ```
 */
export const urlAlphabet: string

/**
 * Generate an array of random bytes collected from hardware noise.
 *
 * ```js
 * import { customRandom, random } from 'nanoid'
 * const nanoid = customRandom("abcdef", 5, random)
 * ```
 *
 * @param bytes Size of the array.
 * @returns An array of random bytes.
 */
export function random(bytes: number): Uint8Array
