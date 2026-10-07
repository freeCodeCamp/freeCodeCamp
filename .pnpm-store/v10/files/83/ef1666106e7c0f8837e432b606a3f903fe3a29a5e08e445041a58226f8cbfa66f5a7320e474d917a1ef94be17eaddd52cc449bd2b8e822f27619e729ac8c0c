import type { RequestInfo, Response, Request } from './fetch'

export interface CacheStorage {
  match (request: RequestInfo, options?: MultiCacheQueryOptions): Promise<Response | undefined>,
  has (cacheName: string): Promise<boolean>,
  open (cacheName: string): Promise<Cache>,
  delete (cacheName: string): Promise<boolean>,
  keys (): Promise<string[]>
}

declare const CacheStorage: {
  prototype: CacheStorage
  new(): CacheStorage
}

export interface Cache {
  match (request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>,
  matchAll (request?: RequestInfo, options?: CacheQueryOptions): Promise<readonly Response[]>,
  add (request: RequestInfo): Promise<undefined>,
  addAll (requests: RequestInfo[]): Promise<undefined>,
  put (request: RequestInfo, response: Response): Promise<undefined>,
  delete (request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>,
  keys (request?: RequestInfo, options?: CacheQueryOptions): Promise<readonly Request[]>
}

export interface CacheQueryOptions {
  ignoreSearch?: boolean,
  ignoreMethod?: boolean,
  ignoreVary?: boolean
}

export interface MultiCacheQueryOptions extends CacheQueryOptions {
  cacheName?: string
}

export declare const caches: CacheStorage
