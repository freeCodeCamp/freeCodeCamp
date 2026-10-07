import Client from './client'
import TPoolStats from './pool-stats'
import { URL } from 'node:url'
import Dispatcher from './dispatcher'

export default RoundRobinPool

type RoundRobinPoolConnectOptions = Omit<Dispatcher.ConnectOptions, 'origin'>

declare class RoundRobinPool extends Dispatcher {
  constructor (url: string | URL, options?: RoundRobinPool.Options)
  /** `true` after `pool.close()` has been called. */
  closed: boolean
  /** `true` after `pool.destroyed()` has been called or `pool.close()` has been called and the pool shutdown has completed. */
  destroyed: boolean
  /** Aggregate stats for a RoundRobinPool. */
  readonly stats: TPoolStats

  // Override dispatcher APIs.
  override connect (
    options: RoundRobinPoolConnectOptions
  ): Promise<Dispatcher.ConnectData>
  override connect (
    options: RoundRobinPoolConnectOptions,
    callback: (err: Error | null, data: Dispatcher.ConnectData) => void
  ): void
}

declare namespace RoundRobinPool {
  export type RoundRobinPoolStats = TPoolStats
  export interface Options extends Client.Options {
    /** Default: `(origin, opts) => new Client(origin, opts)`. */
    factory?(origin: URL, opts: object): Dispatcher;
    /** The max number of clients to create. `null` if no limit. Default `null`. */
    connections?: number | null;
    /** The amount of time before a client is removed from the pool and closed. `null` if no time limit. Default `null` */
    clientTtl?: number | null;

    interceptors?: { RoundRobinPool?: readonly Dispatcher.DispatchInterceptor[] } & Client.Options['interceptors']
  }
}
