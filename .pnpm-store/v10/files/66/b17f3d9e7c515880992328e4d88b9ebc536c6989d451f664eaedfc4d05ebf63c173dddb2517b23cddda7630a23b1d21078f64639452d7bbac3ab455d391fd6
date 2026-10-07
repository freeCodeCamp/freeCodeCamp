import Client from './client'

export default ClientStats

declare class ClientStats {
  constructor (pool: Client)
  /** If socket has open connection. */
  connected: boolean
  /** Number of open socket connections in this client that do not have an active request. */
  pending: number
  /** Number of currently active requests of this client. */
  running: number
  /** Number of active, pending, or queued requests of this client. */
  size: number
}
