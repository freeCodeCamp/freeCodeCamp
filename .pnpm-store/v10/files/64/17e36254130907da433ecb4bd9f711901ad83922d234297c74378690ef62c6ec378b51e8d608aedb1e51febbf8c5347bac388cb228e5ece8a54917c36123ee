/**
 * Generate URL-friendly unique ID. This method uses the non-secure
 * predictable random generator with bigger collision probability.
 *
 * ```js
 * import { nanoid } from 'nanoid/non-secure'
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 * ```
 *
 * @param size Size of the ID. The default size is 21.
 * @returns A random string.
 */
export function nanoid(size?: number): string

/**
 * Generate a unique ID based on a custom alphabet.
 * This method uses the non-secure predictable random generator
 * with bigger collision probability.
 *
 * @param alphabet Alphabet used to generate the ID.
 * @param defaultSize Size of the ID. The default size is 21.
 * @returns A random string generator.
 *
 * ```js
 * import { customAlphabet } from 'nanoid/non-secure'
 * const nanoid = customAlphabet('0123456789абвгдеё', 5)
 * model.id = //=> "8ё56а"
 * ```
 */
export function customAlphabet(
  alphabet: string,
  defaultSize?: number
): (size?: number) => string
