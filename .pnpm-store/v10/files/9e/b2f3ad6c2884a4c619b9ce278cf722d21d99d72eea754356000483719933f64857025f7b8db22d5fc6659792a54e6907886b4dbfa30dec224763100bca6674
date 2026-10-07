import Pool from './pool'
import Dispatcher from './dispatcher'
import { URL } from 'node:url'

export default BalancedPool

type BalancedPoolConnectOptions = Omit<Dispatcher.ConnectOptions, 'origin'>

declare class BalancedPool extends Dispatcher {
  constructor (url: string | string[] | URL | URL[], options?: Pool.Options)

  addUpstream (upstream: string | URL): BalancedPool
  removeUpstream (upstream: string | URL): BalancedPool
  getUpstream (upstream: string | URL): Pool | undefined
  upstreams: Array<string>

  /** `true` after `pool.close()` has been called. */
  closed: boolean
  /** `true` after `pool.destroyed()` has been called or `pool.close()` has been called and the pool shutdown has completed. */
  destroyed: boolean

  // Override dispatcher APIs.
  override connect (
    options: BalancedPoolConnectOptions
  ): Promise<Dispatcher.ConnectData>
  override connect (
    options: BalancedPoolConnectOptions,
    callback: (err: Error | null, data: Dispatcher.ConnectData) => void
  ): void
}
