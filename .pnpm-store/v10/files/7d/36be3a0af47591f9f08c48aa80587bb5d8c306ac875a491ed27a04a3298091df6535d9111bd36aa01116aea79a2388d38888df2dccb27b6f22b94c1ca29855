/**
 * Generate secure URL-friendly unique ID. The non-blocking version.
 *
 * By default, the ID will have 21 symbols to have a collision probability
 * similar to UUID v4.
 *
 * ```js
 * import { nanoid } from 'nanoid/async'
 * nanoid().then(id => {
 *   model.id = id
 * })
 * ```
 *
 * @param size Size of the ID. The default size is 21.
 * @returns A promise with a random string.
 */
export function nanoid(size?: number): Promise<string>

/**
 * A low-level function.
 * Generate secure unique ID with custom alphabet. The non-blocking version.
 *
 * Alphabet must contain 256 symbols or less. Otherwise, the generator
 * will not be secure.
 *
 * @param alphabet Alphabet used to generate the ID.
 * @param defaultSize Size of the ID. The default size is 21.
 * @returns A function that returns a promise with a random string.
 *
 * ```js
 * import { customAlphabet } from 'nanoid/async'
 * const nanoid = customAlphabet('0123456789абвгдеё', 5)
 * nanoid().then(id => {
 *   model.id = id //=> "8ё56а"
 * })
 * ```
 */
export function customAlphabet(
  alphabet: string,
  defaultSize?: number
): (size?: number) => Promise<string>

/**
 * Generate an array of random bytes collected from hardware noise.
 *
 * ```js
 * import { random } from 'nanoid/async'
 * random(5).then(bytes => {
 *   bytes //=> [10, 67, 212, 67, 89]
 * })
 * ```
 *
 * @param bytes Size of the array.
 * @returns A promise with a random bytes array.
 */
export function random(bytes: number): Promise<Uint8Array>
