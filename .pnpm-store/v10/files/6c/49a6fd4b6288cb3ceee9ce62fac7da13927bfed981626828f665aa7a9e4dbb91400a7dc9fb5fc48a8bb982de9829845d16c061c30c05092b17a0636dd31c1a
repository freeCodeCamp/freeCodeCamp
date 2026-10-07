import { TLSSocket, ConnectionOptions } from 'node:tls'
import { IpcNetConnectOpts, Socket, TcpNetConnectOpts } from 'node:net'

export default buildConnector
declare function buildConnector (options?: buildConnector.BuildOptions): buildConnector.connector

declare namespace buildConnector {
  export type BuildOptions = (ConnectionOptions | TcpNetConnectOpts | IpcNetConnectOpts) & {
    allowH2?: boolean;
    maxCachedSessions?: number | null;
    socketPath?: string | null;
    timeout?: number | null;
    port?: number;
    keepAlive?: boolean | null;
    keepAliveInitialDelay?: number | null;
  }

  export interface Options {
    hostname: string
    host?: string
    protocol: string
    port: string
    servername?: string
    localAddress?: string | null
    httpSocket?: Socket
  }

  export type Callback = (...args: CallbackArgs) => void
  type CallbackArgs = [null, Socket | TLSSocket] | [Error, null]

  export interface connector {
    (options: buildConnector.Options, callback: buildConnector.Callback): void
  }
}
