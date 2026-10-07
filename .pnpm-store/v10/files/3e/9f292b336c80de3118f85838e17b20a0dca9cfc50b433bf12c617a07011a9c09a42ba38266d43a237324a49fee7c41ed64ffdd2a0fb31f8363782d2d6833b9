import { FastifyRouteConfig } from './route'
import { ContextConfigDefault } from './utils'

export interface FastifyContextConfig {
}

/**
 * Route context object. Properties defined here will be available in the route's handler
 */
export interface FastifyRequestContext<ContextConfig = ContextConfigDefault> {
  /**
   * @deprecated Use Request#routeOptions#config or Request#routeOptions#schema instead
   */
  config: FastifyContextConfig & FastifyRouteConfig & ContextConfig;
}

export interface FastifyReplyContext<ContextConfig = ContextConfigDefault> {
  /**
   * @deprecated Use Reply#routeOptions#config or Reply#routeOptions#schema instead
   */
  config: FastifyContextConfig & FastifyRouteConfig & ContextConfig;
}
