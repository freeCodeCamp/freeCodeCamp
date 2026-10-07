import Pool from './pool'

export default PoolStats

declare class PoolStats {
  constructor (pool: Pool)
  /** Number of open socket connections in this pool. */
  connected: number
  /** Number of open socket connections in this pool that do not have an active request. */
  free: number
  /** Number of pending requests across all clients in this pool. */
  pending: number
  /** Number of queued requests across all clients in this pool. */
  queued: number
  /** Number of currently active requests across all clients in this pool. */
  running: number
  /** Number of active, pending, or queued requests across all clients in this pool. */
  size: number
}
