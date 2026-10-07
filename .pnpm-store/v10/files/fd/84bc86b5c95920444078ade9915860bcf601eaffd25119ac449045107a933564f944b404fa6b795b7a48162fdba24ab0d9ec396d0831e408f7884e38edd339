import Dispatcher from './dispatcher'
import { setGlobalDispatcher, getGlobalDispatcher } from './global-dispatcher'
import { setGlobalOrigin, getGlobalOrigin } from './global-origin'
import Pool from './pool'
import { RedirectHandler, DecoratorHandler } from './handlers'

import BalancedPool from './balanced-pool'
import Client from './client'
import H2CClient from './h2c-client'
import buildConnector from './connector'
import errors from './errors'
import Agent from './agent'
import MockClient from './mock-client'
import MockPool from './mock-pool'
import MockAgent from './mock-agent'
import { SnapshotAgent } from './snapshot-agent'
import { MockCallHistory, MockCallHistoryLog } from './mock-call-history'
import mockErrors from './mock-errors'
import ProxyAgent from './proxy-agent'
import EnvHttpProxyAgent from './env-http-proxy-agent'
import RetryHandler from './retry-handler'
import RetryAgent from './retry-agent'
import { request, pipeline, stream, connect, upgrade } from './api'
import interceptors from './interceptors'

export * from './util'
export * from './cookies'
export * from './eventsource'
export * from './fetch'
export * from './formdata'
export * from './diagnostics-channel'
export * from './websocket'
export * from './content-type'
export * from './cache'
export { Interceptable } from './mock-interceptor'

declare function globalThisInstall (): void

export { Dispatcher, BalancedPool, Pool, Client, buildConnector, errors, Agent, request, stream, pipeline, connect, upgrade, setGlobalDispatcher, getGlobalDispatcher, setGlobalOrigin, getGlobalOrigin, interceptors, MockClient, MockPool, MockAgent, SnapshotAgent, MockCallHistory, MockCallHistoryLog, mockErrors, ProxyAgent, EnvHttpProxyAgent, RedirectHandler, DecoratorHandler, RetryHandler, RetryAgent, H2CClient, globalThisInstall as install }
export default Undici

declare namespace Undici {
  const Dispatcher: typeof import('./dispatcher').default
  const Pool: typeof import('./pool').default
  const RedirectHandler: typeof import ('./handlers').RedirectHandler
  const DecoratorHandler: typeof import ('./handlers').DecoratorHandler
  const RetryHandler: typeof import ('./retry-handler').default
  const BalancedPool: typeof import('./balanced-pool').default
  const Client: typeof import('./client').default
  const H2CClient: typeof import('./h2c-client').default
  const buildConnector: typeof import('./connector').default
  const errors: typeof import('./errors').default
  const Agent: typeof import('./agent').default
  const setGlobalDispatcher: typeof import('./global-dispatcher').setGlobalDispatcher
  const getGlobalDispatcher: typeof import('./global-dispatcher').getGlobalDispatcher
  const request: typeof import('./api').request
  const stream: typeof import('./api').stream
  const pipeline: typeof import('./api').pipeline
  const connect: typeof import('./api').connect
  const upgrade: typeof import('./api').upgrade
  const MockClient: typeof import('./mock-client').default
  const MockPool: typeof import('./mock-pool').default
  const MockAgent: typeof import('./mock-agent').default
  const SnapshotAgent: typeof import('./snapshot-agent').SnapshotAgent
  const MockCallHistory: typeof import('./mock-call-history').MockCallHistory
  const MockCallHistoryLog: typeof import('./mock-call-history').MockCallHistoryLog
  const mockErrors: typeof import('./mock-errors').default
  const fetch: typeof import('./fetch').fetch
  const Headers: typeof import('./fetch').Headers
  const Response: typeof import('./fetch').Response
  const Request: typeof import('./fetch').Request
  const FormData: typeof import('./formdata').FormData
  const caches: typeof import('./cache').caches
  const interceptors: typeof import('./interceptors').default
  const cacheStores: {
    MemoryCacheStore: typeof import('./cache-interceptor').default.MemoryCacheStore,
    SqliteCacheStore: typeof import('./cache-interceptor').default.SqliteCacheStore
  }
  const install: typeof globalThisInstall
}
