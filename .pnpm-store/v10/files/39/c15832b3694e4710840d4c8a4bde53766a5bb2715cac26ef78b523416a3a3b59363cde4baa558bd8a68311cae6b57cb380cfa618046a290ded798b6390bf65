import Pool from './pool'
import MockAgent from './mock-agent'
import { Interceptable, MockInterceptor } from './mock-interceptor'
import Dispatcher from './dispatcher'

export default MockPool

/** MockPool extends the Pool API and allows one to mock requests. */
declare class MockPool extends Pool implements Interceptable {
  constructor (origin: string, options: MockPool.Options)
  /** Intercepts any matching requests that use the same origin as this mock pool. */
  intercept (options: MockInterceptor.Options): MockInterceptor
  /** Dispatches a mocked request. */
  dispatch (options: Dispatcher.DispatchOptions, handlers: Dispatcher.DispatchHandler): boolean
  /** Closes the mock pool and gracefully waits for enqueued requests to complete. */
  close (): Promise<void>
  /** Clean up all the prepared mocks. */
  cleanMocks (): void
}

declare namespace MockPool {
  /** MockPool options. */
  export interface Options extends Pool.Options {
    /** The agent to associate this MockPool with. */
    agent: MockAgent;
  }
}
