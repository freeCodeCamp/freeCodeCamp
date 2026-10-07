import Agent from './agent'
import buildConnector from './connector'
import Dispatcher from './dispatcher'
import { IncomingHttpHeaders } from './header'

export default ProxyAgent

declare class ProxyAgent extends Dispatcher {
  constructor (options: ProxyAgent.Options | string)

  dispatch (options: Agent.DispatchOptions, handler: Dispatcher.DispatchHandler): boolean
  close (): Promise<void>
}

declare namespace ProxyAgent {
  export interface Options extends Agent.Options {
    uri: string;
    /**
     * @deprecated use opts.token
     */
    auth?: string;
    token?: string;
    headers?: IncomingHttpHeaders;
    requestTls?: buildConnector.BuildOptions;
    proxyTls?: buildConnector.BuildOptions;
    clientFactory?(origin: URL, opts: object): Dispatcher;
    proxyTunnel?: boolean;
  }
}
