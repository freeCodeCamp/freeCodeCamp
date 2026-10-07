import { Readable, Writable } from 'node:stream'

export default CacheHandler

declare namespace CacheHandler {
  export type CacheMethods = 'GET' | 'HEAD' | 'OPTIONS' | 'TRACE'

  export interface CacheHandlerOptions {
    store: CacheStore

    cacheByDefault?: number

    type?: CacheOptions['type']
  }

  export interface CacheOptions {
    store?: CacheStore

    /**
     * The methods to cache
     * Note we can only cache safe methods. Unsafe methods (i.e. PUT, POST)
     *  invalidate the cache for a origin.
     * @see https://www.rfc-editor.org/rfc/rfc9111.html#name-invalidating-stored-respons
     * @see https://www.rfc-editor.org/rfc/rfc9110#section-9.2.1
     */
    methods?: CacheMethods[]

    /**
     * RFC9111 allows for caching responses that we aren't explicitly told to
     *  cache or to not cache.
     * @see https://www.rfc-editor.org/rfc/rfc9111.html#section-3-5
     * @default undefined
     */
    cacheByDefault?: number

    /**
     * TODO docs
     * @default 'shared'
     */
    type?: 'shared' | 'private'

    /**
     * Array of origins to cache. Only requests to these origins will be cached.
     * Supports strings (case insensitive) and RegExp patterns.
     * @default undefined (cache all origins)
     */
    origins?: (string | RegExp)[]
  }

  export interface CacheControlDirectives {
    'max-stale'?: number;
    'min-fresh'?: number;
    'max-age'?: number;
    's-maxage'?: number;
    'stale-while-revalidate'?: number;
    'stale-if-error'?: number;
    public?: true;
    private?: true | string[];
    'no-store'?: true;
    'no-cache'?: true | string[];
    'must-revalidate'?: true;
    'proxy-revalidate'?: true;
    immutable?: true;
    'no-transform'?: true;
    'must-understand'?: true;
    'only-if-cached'?: true;
  }

  export interface CacheKey {
    origin: string
    method: string
    path: string
    headers?: Record<string, string | string[]>
  }

  export interface CacheValue {
    statusCode: number
    statusMessage: string
    headers: Record<string, string | string[]>
    vary?: Record<string, string | string[] | null>
    etag?: string
    cacheControlDirectives?: CacheControlDirectives
    cachedAt: number
    staleAt: number
    deleteAt: number
  }

  export interface DeleteByUri {
    origin: string
    method: string
    path: string
  }

  type GetResult = {
    statusCode: number
    statusMessage: string
    headers: Record<string, string | string[]>
    vary?: Record<string, string | string[] | null>
    etag?: string
    body?: Readable | Iterable<Buffer> | AsyncIterable<Buffer> | Buffer | Iterable<string> | AsyncIterable<string> | string
    cacheControlDirectives: CacheControlDirectives,
    cachedAt: number
    staleAt: number
    deleteAt: number
  }

  /**
   * Underlying storage provider for cached responses
   */
  export interface CacheStore {
    get(key: CacheKey): GetResult | Promise<GetResult | undefined> | undefined

    createWriteStream(key: CacheKey, val: CacheValue): Writable | undefined

    delete(key: CacheKey): void | Promise<void>
  }

  export interface MemoryCacheStoreOpts {
    /**
       * @default Infinity
       */
    maxCount?: number

    /**
     * @default Infinity
     */
    maxSize?: number

    /**
     * @default Infinity
     */
    maxEntrySize?: number

    errorCallback?: (err: Error) => void
  }

  export class MemoryCacheStore implements CacheStore {
    constructor (opts?: MemoryCacheStoreOpts)

    get (key: CacheKey): GetResult | Promise<GetResult | undefined> | undefined

    createWriteStream (key: CacheKey, value: CacheValue): Writable | undefined

    delete (key: CacheKey): void | Promise<void>
  }

  export interface SqliteCacheStoreOpts {
    /**
     * Location of the database
     * @default ':memory:'
     */
    location?: string

    /**
     * @default Infinity
     */
    maxCount?: number

    /**
     * @default Infinity
     */
    maxEntrySize?: number
  }

  export class SqliteCacheStore implements CacheStore {
    constructor (opts?: SqliteCacheStoreOpts)

    /**
     * Closes the connection to the database
     */
    close (): void

    get (key: CacheKey): GetResult | Promise<GetResult | undefined> | undefined

    createWriteStream (key: CacheKey, value: CacheValue): Writable | undefined

    delete (key: CacheKey): void | Promise<void>
  }
}
