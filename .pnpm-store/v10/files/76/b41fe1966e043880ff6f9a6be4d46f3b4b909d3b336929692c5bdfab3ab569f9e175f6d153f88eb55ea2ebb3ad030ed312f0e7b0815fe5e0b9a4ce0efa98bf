import { splitCookiesString } from 'set-cookie-parser'
import { HeadersList, HeadersObject } from './glossary'
import { normalizeHeaderName } from './utils/normalizeHeaderName'
import { normalizeHeaderValue } from './utils/normalizeHeaderValue'
import { isValidHeaderName } from './utils/isValidHeaderName'
import { isValidHeaderValue } from './utils/isValidHeaderValue'

export const NORMALIZED_HEADERS: unique symbol = Symbol('normalizedHeaders')

export const RAW_HEADER_NAMES: unique symbol = Symbol('rawHeaderNames')

const HEADER_VALUE_DELIMITER = ', ' as const

export class Headers {
  // Normalized header {"name":"a, b"} storage.
  private [NORMALIZED_HEADERS]: Record<string, string> = {}

  // Keeps the mapping between the raw header name
  // and the normalized header name to ease the lookup.
  private [RAW_HEADER_NAMES]: Map<string, string> = new Map()

  constructor(init?: HeadersInit | HeadersObject | HeadersList) {
    /**
     * @note Cannot necessarily check if the `init` is an instance of the
     * `Headers` because that class may not be defined in Node or jsdom.
     */
    if (
      ['Headers', 'HeadersPolyfill'].includes(init?.constructor?.name) ||
      init instanceof Headers ||
      (typeof globalThis.Headers !== 'undefined' &&
        init instanceof globalThis.Headers)
    ) {
      const initialHeaders = init as Headers
      initialHeaders.forEach((value, name) => {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(init)) {
      init.forEach(([name, value]) => {
        this.append(
          name,
          Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value
        )
      })
    } else if (init) {
      Object.getOwnPropertyNames(init).forEach((name) => {
        const value = init[name]
        this.append(
          name,
          Array.isArray(value) ? value.join(HEADER_VALUE_DELIMITER) : value
        )
      })
    }
  }

  [Symbol.toStringTag] = 'Headers';

  [Symbol.iterator]() {
    return this.entries()
  }

  *keys(): Generator<string> {
    for (const [name] of this.entries()) {
      yield name
    }
  }

  *values(): Generator<string> {
    for (const [, value] of this.entries()) {
      yield value
    }
  }

  *entries(): Generator<[string, string]> {
    // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
    let sortedKeys = Object.keys(this[NORMALIZED_HEADERS]).sort((a, b) =>
      a.localeCompare(b)
    )
    for (const name of sortedKeys) {
      if (name === 'set-cookie') {
        for (const value of this.getSetCookie()) {
          yield [name, value]
        }
      } else {
        yield [name, this.get(name)]
      }
    }
  }

  /**
   * Returns a boolean stating whether a `Headers` object contains a certain header.
   */
  has(name: string): boolean {
    if (!isValidHeaderName(name)) {
      throw new TypeError(`Invalid header name "${name}"`)
    }

    return this[NORMALIZED_HEADERS].hasOwnProperty(normalizeHeaderName(name))
  }

  /**
   * Returns a `ByteString` sequence of all the values of a header with a given name.
   */
  get(name: string): string | null {
    if (!isValidHeaderName(name)) {
      throw TypeError(`Invalid header name "${name}"`)
    }

    return this[NORMALIZED_HEADERS][normalizeHeaderName(name)] ?? null
  }

  /**
   * Sets a new value for an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  set(name: string, value: string): void {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return
    }

    const normalizedName = normalizeHeaderName(name)
    const normalizedValue = normalizeHeaderValue(value)

    this[NORMALIZED_HEADERS][normalizedName] =
      normalizeHeaderValue(normalizedValue)
    this[RAW_HEADER_NAMES].set(normalizedName, name)
  }

  /**
   * Appends a new value onto an existing header inside a `Headers` object, or adds the header if it does not already exist.
   */
  append(name: string, value: string): void {
    if (!isValidHeaderName(name) || !isValidHeaderValue(value)) {
      return
    }

    const normalizedName = normalizeHeaderName(name)
    const normalizedValue = normalizeHeaderValue(value)

    let resolvedValue = this.has(normalizedName)
      ? `${this.get(normalizedName)}, ${normalizedValue}`
      : normalizedValue

    this.set(name, resolvedValue)
  }

  /**
   * Deletes a header from the `Headers` object.
   */
  delete(name: string): void {
    if (!isValidHeaderName(name)) {
      return
    }

    if (!this.has(name)) {
      return
    }

    const normalizedName = normalizeHeaderName(name)
    delete this[NORMALIZED_HEADERS][normalizedName]
    this[RAW_HEADER_NAMES].delete(normalizedName)
  }

  /**
   * Traverses the `Headers` object,
   * calling the given callback for each header.
   */
  forEach<ThisArg = this>(
    callback: (
      this: ThisArg,
      value: string,
      name: string,
      parent: this
    ) => void,
    thisArg?: ThisArg
  ) {
    for (const [name, value] of this.entries()) {
      callback.call(thisArg, value, name, this)
    }
  }

  /**
   * Returns an array containing the values
   * of all Set-Cookie headers associated
   * with a response
   */
  getSetCookie(): string[] {
    const setCookieHeader = this.get('set-cookie')

    if (setCookieHeader === null) {
      return []
    }

    if (setCookieHeader === '') {
      return ['']
    }

    return splitCookiesString(setCookieHeader)
  }
}
