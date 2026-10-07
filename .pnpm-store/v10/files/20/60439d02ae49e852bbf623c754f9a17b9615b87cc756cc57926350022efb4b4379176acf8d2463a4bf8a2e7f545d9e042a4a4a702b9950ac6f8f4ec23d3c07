import { IncomingHttpHeaders } from './header'
import Dispatcher from './dispatcher'
import { BodyInit, Headers } from './fetch'

/** The scope associated with a mock dispatch. */
declare class MockScope<TData extends object = object> {
  constructor (mockDispatch: MockInterceptor.MockDispatch<TData>)
  /** Delay a reply by a set amount of time in ms. */
  delay (waitInMs: number): MockScope<TData>
  /** Persist the defined mock data for the associated reply. It will return the defined mock data indefinitely. */
  persist (): MockScope<TData>
  /** Define a reply for a set amount of matching requests. */
  times (repeatTimes: number): MockScope<TData>
}

/** The interceptor for a Mock. */
declare class MockInterceptor {
  constructor (options: MockInterceptor.Options, mockDispatches: MockInterceptor.MockDispatch[])
  /** Mock an undici request with the defined reply. */
  reply<TData extends object = object>(replyOptionsCallback: MockInterceptor.MockReplyOptionsCallback<TData>): MockScope<TData>
  reply<TData extends object = object>(
    statusCode: number,
    data?: TData | Buffer | string | MockInterceptor.MockResponseDataHandler<TData>,
    responseOptions?: MockInterceptor.MockResponseOptions
  ): MockScope<TData>
  /** Mock an undici request by throwing the defined reply error. */
  replyWithError<TError extends Error = Error>(error: TError): MockScope
  /** Set default reply headers on the interceptor for subsequent mocked replies. */
  defaultReplyHeaders (headers: IncomingHttpHeaders): MockInterceptor
  /** Set default reply trailers on the interceptor for subsequent mocked replies. */
  defaultReplyTrailers (trailers: Record<string, string>): MockInterceptor
  /** Set automatically calculated content-length header on subsequent mocked replies. */
  replyContentLength (): MockInterceptor
}

declare namespace MockInterceptor {
  /** MockInterceptor options. */
  export interface Options {
    /** Path to intercept on. */
    path: string | RegExp | ((path: string) => boolean);
    /** Method to intercept on. Defaults to GET. */
    method?: string | RegExp | ((method: string) => boolean);
    /** Body to intercept on. */
    body?: string | RegExp | ((body: string) => boolean);
    /** Headers to intercept on. */
    headers?: Record<string, string | RegExp | ((body: string) => boolean)> | ((headers: Record<string, string>) => boolean);
    /** Query params to intercept on */
    query?: Record<string, any>;
  }
  export interface MockDispatch<TData extends object = object, TError extends Error = Error> extends Options {
    times: number | null;
    persist: boolean;
    consumed: boolean;
    data: MockDispatchData<TData, TError>;
  }
  export interface MockDispatchData<TData extends object = object, TError extends Error = Error> extends MockResponseOptions {
    error: TError | null;
    statusCode?: number;
    data?: TData | string;
  }
  export interface MockResponseOptions {
    headers?: IncomingHttpHeaders;
    trailers?: Record<string, string>;
  }

  export interface MockResponseCallbackOptions {
    path: string;
    method: string;
    headers?: Headers | Record<string, string>;
    origin?: string;
    body?: BodyInit | Dispatcher.DispatchOptions['body'] | null;
  }

  export type MockResponseDataHandler<TData extends object = object> = (
    opts: MockResponseCallbackOptions
  ) => TData | Buffer | string

  export type MockReplyOptionsCallback<TData extends object = object> = (
    opts: MockResponseCallbackOptions
  ) => { statusCode: number, data?: TData | Buffer | string, responseOptions?: MockResponseOptions }
}

interface Interceptable extends Dispatcher {
  /** Intercepts any matching requests that use the same origin as this mock client. */
  intercept(options: MockInterceptor.Options): MockInterceptor;
  /** Clean up all the prepared mocks. */
  cleanMocks (): void
}

export {
  Interceptable,
  MockInterceptor,
  MockScope
}
