import CacheHandler from './cache-interceptor'
import Dispatcher from './dispatcher'
import RetryHandler from './retry-handler'
import { LookupOptions } from 'node:dns'

export default Interceptors

declare namespace Interceptors {
  export type DumpInterceptorOpts = { maxSize?: number }
  export type RetryInterceptorOpts = RetryHandler.RetryOptions
  export type RedirectInterceptorOpts = { maxRedirections?: number }
  export type DecompressInterceptorOpts = {
    skipErrorResponses?: boolean
    skipStatusCodes?: number[]
  }

  export type ResponseErrorInterceptorOpts = { throwOnError: boolean }
  export type CacheInterceptorOpts = CacheHandler.CacheOptions

  // DNS interceptor
  export type DNSInterceptorRecord = { address: string, ttl: number, family: 4 | 6 }
  export type DNSInterceptorOriginRecords = { records: { 4: { ips: DNSInterceptorRecord[] } | null, 6: { ips: DNSInterceptorRecord[] } | null } }
  export type DNSStorage = {
    size: number
    get(origin: string): DNSInterceptorOriginRecords | null
    set(origin: string, records: DNSInterceptorOriginRecords | null, options: { ttl: number }): void
    delete(origin: string): void
    full(): boolean
  }
  export type DNSInterceptorOpts = {
    maxTTL?: number
    maxItems?: number
    lookup?: (origin: URL, options: LookupOptions, callback: (err: NodeJS.ErrnoException | null, addresses: DNSInterceptorRecord[]) => void) => void
    pick?: (origin: URL, records: DNSInterceptorOriginRecords, affinity: 4 | 6) => DNSInterceptorRecord
    dualStack?: boolean
    affinity?: 4 | 6
    storage?: DNSStorage
  }

  // Deduplicate interceptor
  export type DeduplicateMethods = 'GET' | 'HEAD' | 'OPTIONS' | 'TRACE'
  export type DeduplicateInterceptorOpts = {
    /**
     * The HTTP methods to deduplicate.
     * Note: Only safe HTTP methods can be deduplicated.
     * @default ['GET']
     */
    methods?: DeduplicateMethods[]
    /**
     * Header names that, if present in a request, will cause the request to skip deduplication.
     * Header name matching is case-insensitive.
     * @default []
     */
    skipHeaderNames?: string[]
    /**
     * Header names to exclude from the deduplication key.
     * Requests with different values for these headers will still be deduplicated together.
     * Useful for headers like `x-request-id` that vary per request but shouldn't affect deduplication.
     * Header name matching is case-insensitive.
     * @default []
     */
    excludeHeaderNames?: string[]
  }

  export function dump (opts?: DumpInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function retry (opts?: RetryInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function redirect (opts?: RedirectInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function decompress (opts?: DecompressInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function responseError (opts?: ResponseErrorInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function dns (opts?: DNSInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function cache (opts?: CacheInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
  export function deduplicate (opts?: DeduplicateInterceptorOpts): Dispatcher.DispatcherComposeInterceptor
}
