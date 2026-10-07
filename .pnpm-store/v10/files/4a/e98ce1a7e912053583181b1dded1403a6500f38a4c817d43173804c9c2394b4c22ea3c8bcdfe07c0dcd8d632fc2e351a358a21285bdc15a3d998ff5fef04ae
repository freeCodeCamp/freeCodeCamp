import Dispatcher from './dispatcher'

declare namespace MockCallHistoryLog {
  /** request's configuration properties */
  export type MockCallHistoryLogProperties = 'protocol' | 'host' | 'port' | 'origin' | 'path' | 'hash' | 'fullUrl' | 'method' | 'searchParams' | 'body' | 'headers'
}

/** a log reflecting request configuration  */
declare class MockCallHistoryLog {
  constructor (requestInit: Dispatcher.DispatchOptions)
  /** protocol used. ie. 'https:' or 'http:' etc... */
  protocol: string
  /** request's host. */
  host: string
  /** request's port. */
  port: string
  /** request's origin. ie. https://localhost:3000. */
  origin: string
  /** path. never contains searchParams. */
  path: string
  /** request's hash. */
  hash: string
  /** the full url requested. */
  fullUrl: string
  /** request's method. */
  method: string
  /** search params. */
  searchParams: Record<string, string>
  /** request's body */
  body: string | null | undefined
  /** request's headers */
  headers: Record<string, string | string[]> | null | undefined

  /** returns an Map of property / value pair */
  toMap (): Map<MockCallHistoryLog.MockCallHistoryLogProperties, string | Record<string, string | string[]> | null | undefined>

  /** returns a string computed with all key value pair */
  toString (): string
}

declare namespace MockCallHistory {
  export type FilterCallsOperator = 'AND' | 'OR'

  /** modify the filtering behavior */
  export interface FilterCallsOptions {
    /** the operator to apply when filtering. 'OR' will adds any MockCallHistoryLog matching any criteria given. 'AND' will adds only MockCallHistoryLog matching every criteria given. (default 'OR')  */
    operator?: FilterCallsOperator | Lowercase<FilterCallsOperator>
  }
  /** a function to be executed for filtering MockCallHistoryLog */
  export type FilterCallsFunctionCriteria = (log: MockCallHistoryLog) => boolean

  /** parameter to filter MockCallHistoryLog */
  export type FilterCallsParameter = string | RegExp | undefined | null

  /** an object to execute multiple filtering at once */
  export interface FilterCallsObjectCriteria extends Record<string, FilterCallsParameter> {
    /** filter by request protocol. ie https: */
    protocol?: FilterCallsParameter;
    /** filter by request host. */
    host?: FilterCallsParameter;
    /** filter by request port. */
    port?: FilterCallsParameter;
    /** filter by request origin. */
    origin?: FilterCallsParameter;
    /** filter by request path. */
    path?: FilterCallsParameter;
    /** filter by request hash. */
    hash?: FilterCallsParameter;
    /** filter by request fullUrl. */
    fullUrl?: FilterCallsParameter;
    /** filter by request method. */
    method?: FilterCallsParameter;
  }
}

/** a call history to track requests configuration */
declare class MockCallHistory {
  constructor (name: string)
  /** returns an array of MockCallHistoryLog. */
  calls (): Array<MockCallHistoryLog>
  /** returns the first MockCallHistoryLog */
  firstCall (): MockCallHistoryLog | undefined
  /** returns the last MockCallHistoryLog. */
  lastCall (): MockCallHistoryLog | undefined
  /** returns the nth MockCallHistoryLog. */
  nthCall (position: number): MockCallHistoryLog | undefined
  /** return all MockCallHistoryLog matching any of criteria given. if an object is used with multiple properties, you can change the operator to apply during filtering on options */
  filterCalls (criteria: MockCallHistory.FilterCallsFunctionCriteria | MockCallHistory.FilterCallsObjectCriteria | RegExp, options?: MockCallHistory.FilterCallsOptions): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given protocol. if a string is given, it is matched with includes */
  filterCallsByProtocol (protocol: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given host. if a string is given, it is matched with includes */
  filterCallsByHost (host: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given port. if a string is given, it is matched with includes */
  filterCallsByPort (port: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given origin. if a string is given, it is matched with includes */
  filterCallsByOrigin (origin: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given path. if a string is given, it is matched with includes */
  filterCallsByPath (path: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given hash. if a string is given, it is matched with includes */
  filterCallsByHash (hash: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given fullUrl. if a string is given, it is matched with includes */
  filterCallsByFullUrl (fullUrl: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** return all MockCallHistoryLog matching the given method. if a string is given, it is matched with includes */
  filterCallsByMethod (method: MockCallHistory.FilterCallsParameter): Array<MockCallHistoryLog>
  /** clear all MockCallHistoryLog on this MockCallHistory. */
  clear (): void
  /** use it with for..of loop or spread operator */
  [Symbol.iterator]: () => Generator<MockCallHistoryLog>
}

export { MockCallHistoryLog, MockCallHistory }
