import Agent from './agent'
import Dispatcher from './dispatcher'
import { Interceptable, MockInterceptor } from './mock-interceptor'
import MockDispatch = MockInterceptor.MockDispatch
import { MockCallHistory } from './mock-call-history'

export default MockAgent

interface PendingInterceptor extends MockDispatch {
  origin: string;
}

/** A mocked Agent class that implements the Agent API. It allows one to intercept HTTP requests made through undici and return mocked responses instead. */
declare class MockAgent<TMockAgentOptions extends MockAgent.Options = MockAgent.Options> extends Dispatcher {
  constructor (options?: TMockAgentOptions)
  /** Creates and retrieves mock Dispatcher instances which can then be used to intercept HTTP requests. If the number of connections on the mock agent is set to 1, a MockClient instance is returned. Otherwise a MockPool instance is returned. */
  get<TInterceptable extends Interceptable>(origin: string): TInterceptable
  get<TInterceptable extends Interceptable>(origin: RegExp): TInterceptable
  get<TInterceptable extends Interceptable>(origin: ((origin: string) => boolean)): TInterceptable
  /** Dispatches a mocked request. */
  dispatch (options: Agent.DispatchOptions, handler: Dispatcher.DispatchHandler): boolean
  /** Closes the mock agent and waits for registered mock pools and clients to also close before resolving. */
  close (): Promise<void>
  /** Disables mocking in MockAgent. */
  deactivate (): void
  /** Enables mocking in a MockAgent instance. When instantiated, a MockAgent is automatically activated. Therefore, this method is only effective after `MockAgent.deactivate` has been called. */
  activate (): void
  /** Define host matchers so only matching requests that aren't intercepted by the mock dispatchers will be attempted. */
  enableNetConnect (): void
  enableNetConnect (host: string): void
  enableNetConnect (host: RegExp): void
  enableNetConnect (host: ((host: string) => boolean)): void
  /** Causes all requests to throw when requests are not matched in a MockAgent intercept. */
  disableNetConnect (): void
  /** get call history. returns the MockAgent call history or undefined if the option is not enabled. */
  getCallHistory (): MockCallHistory | undefined
  /** clear every call history. Any MockCallHistoryLog will be deleted on the MockCallHistory instance */
  clearCallHistory (): void
  /** Enable call history. Any subsequence calls will then be registered. */
  enableCallHistory (): this
  /** Disable call history. Any subsequence calls will then not be registered. */
  disableCallHistory (): this
  pendingInterceptors (): PendingInterceptor[]
  assertNoPendingInterceptors (options?: {
    pendingInterceptorsFormatter?: PendingInterceptorsFormatter;
  }): void
}

interface PendingInterceptorsFormatter {
  format(pendingInterceptors: readonly PendingInterceptor[]): string;
}

declare namespace MockAgent {
  /** MockAgent options. */
  export interface Options extends Agent.Options {
    /** A custom agent to be encapsulated by the MockAgent. */
    agent?: Dispatcher;

    /** Ignore trailing slashes in the path */
    ignoreTrailingSlash?: boolean;

    /** Accept URLs with search parameters using non standard syntaxes. default false */
    acceptNonStandardSearchParameters?: boolean;

    /** Enable call history. you can either call MockAgent.enableCallHistory(). default false */
    enableCallHistory?: boolean
  }
}
