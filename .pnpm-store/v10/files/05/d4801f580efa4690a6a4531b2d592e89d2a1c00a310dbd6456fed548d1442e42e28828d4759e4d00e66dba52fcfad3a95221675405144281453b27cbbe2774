import Agent from './agent'
import ProxyAgent from './proxy-agent'
import Dispatcher from './dispatcher'

export default EnvHttpProxyAgent

declare class EnvHttpProxyAgent extends Dispatcher {
  constructor (opts?: EnvHttpProxyAgent.Options)

  dispatch (options: Agent.DispatchOptions, handler: Dispatcher.DispatchHandler): boolean
}

declare namespace EnvHttpProxyAgent {
  export interface Options extends Omit<ProxyAgent.Options, 'uri'> {
    /** Overrides the value of the HTTP_PROXY environment variable  */
    httpProxy?: string;
    /** Overrides the value of the HTTPS_PROXY environment variable  */
    httpsProxy?: string;
    /** Overrides the value of the NO_PROXY environment variable  */
    noProxy?: string;
  }
}
