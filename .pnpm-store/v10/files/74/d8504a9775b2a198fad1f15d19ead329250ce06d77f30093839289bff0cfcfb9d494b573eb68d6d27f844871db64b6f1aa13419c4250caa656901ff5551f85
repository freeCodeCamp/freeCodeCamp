import { isNodeProcess } from 'is-node-process'
import { invariant } from 'outvariant'
import {
  Cookie,
  CookieJar,
  MemoryCookieStore,
  type SerializedCookie,
  type MemoryCookieStoreIndex,
} from 'tough-cookie'
import { jsonParse } from './internal/jsonParse'

class CookieStore {
  #storageKey = '__msw-cookie-store__'
  #jar: CookieJar
  #memoryStore: MemoryCookieStore

  constructor() {
    if (!isNodeProcess()) {
      invariant(
        typeof localStorage !== 'undefined',
        'Failed to create a CookieStore: `localStorage` is not available in this environment. This is likely an issue with your environment, which has been detected as browser (or browser-like) environment and must implement global browser APIs correctly.',
      )
    }

    this.#memoryStore = new MemoryCookieStore()
    this.#memoryStore.idx = this.getCookieStoreIndex()
    this.#jar = new CookieJar(this.#memoryStore)
  }

  public getCookies(url: string): Array<Cookie> {
    return this.#jar.getCookiesSync(url)
  }

  public async setCookie(cookieName: string, url: string): Promise<void> {
    await this.#jar.setCookie(cookieName, url)
    this.persist()
  }

  private getCookieStoreIndex(): MemoryCookieStoreIndex {
    if (
      typeof localStorage === 'undefined' ||
      typeof localStorage.getItem !== 'function'
    ) {
      return {}
    }

    const cookiesString = localStorage.getItem(this.#storageKey)
    if (cookiesString == null) {
      return {}
    }

    const rawCookies = jsonParse<Array<Record<string, unknown>>>(cookiesString)
    if (rawCookies == null) {
      return {}
    }

    const cookies: MemoryCookieStoreIndex = {}

    for (const rawCookie of rawCookies) {
      const cookie = Cookie.fromJSON(rawCookie)

      if (cookie != null && cookie.domain != null && cookie.path != null) {
        cookies[cookie.domain] ||= {}
        cookies[cookie.domain][cookie.path] ||= {}
        cookies[cookie.domain][cookie.path][cookie.key] = cookie
      }
    }

    return cookies
  }

  private persist(): void {
    if (
      typeof localStorage === 'undefined' ||
      typeof localStorage.setItem !== 'function'
    ) {
      return
    }

    const data: Array<SerializedCookie> = []
    const { idx } = this.#memoryStore

    for (const domain in idx) {
      for (const path in idx[domain]) {
        for (const key in idx[domain][path]) {
          data.push(idx[domain][path][key].toJSON())
        }
      }
    }

    localStorage.setItem(this.#storageKey, JSON.stringify(data))
  }
}

export const cookieStore = new CookieStore()
