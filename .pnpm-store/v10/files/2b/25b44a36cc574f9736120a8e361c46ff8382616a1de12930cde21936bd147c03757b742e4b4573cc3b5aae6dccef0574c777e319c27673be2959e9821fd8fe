/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {RequestParameters} from '../util/RelayConcreteNode';
import type {CacheConfig, Variables} from '../util/RelayRuntimeTypes';
import type RelayObservable, {ObservableFromValue} from './RelayObservable';

/**
 * An interface for fetching the data for one or more (possibly interdependent)
 * queries.
 */
export interface INetwork {
  +execute: ExecuteFunction;
}

export type LogRequestInfoFunction = mixed => void;

export type PayloadData = interface {[key: string]: mixed};

export type PayloadError = interface {
  message: string,
  locations?: Array<{
    line: number,
    column: number,
    ...
  }>,
  // Not officially part of the spec, but used at Facebook
  severity?: 'CRITICAL' | 'ERROR' | 'WARNING',
};

export type PayloadExtensions = {[key: string]: mixed, ...};

/**
 * The shape of a GraphQL response as dictated by the
 * [spec](https://spec.graphql.org/June2018/#sec-Response-Format).
 */
export type GraphQLResponseWithData = {|
  +data: PayloadData,
  +errors?: Array<PayloadError>,
  +extensions?: PayloadExtensions,
  +label?: string,
  +path?: Array<string | number>,
|};

export type GraphQLResponseWithoutData = {|
  +data?: ?PayloadData,
  +errors: Array<PayloadError>,
  +extensions?: PayloadExtensions,
  +label?: string,
  +path?: Array<string | number>,
|};

export type GraphQLResponseWithExtensionsOnly = {|
  // Per https://spec.graphql.org/June2018/#sec-Errors
  // > If the data entry in the response is not present, the errors entry
  // > in the response must not be empty. It must contain at least one error
  // This means a payload has to have either a data key or an errors key:
  // but the spec leaves room for the combination of data: null plus extensions
  // since `data: null` is a *required* output if there was an error during
  // execution, but the inverse is not described in the sepc: `data: null`
  // does not necessarily indicate that there was an error.
  +data: null,
  +extensions: PayloadExtensions,
|};

export type GraphQLSingularResponse =
  | GraphQLResponseWithData
  | GraphQLResponseWithExtensionsOnly
  | GraphQLResponseWithoutData;

export type GraphQLResponse =
  | GraphQLSingularResponse
  | $ReadOnlyArray<GraphQLSingularResponse>;

/**
 * A function that returns an Observable representing the response of executing
 * a GraphQL operation.
 */
export type ExecuteFunction = (
  request: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables?: ?UploadableMap,
  logRequestInfo?: ?LogRequestInfoFunction,
) => RelayObservable<GraphQLResponse>;

/**
 * A function that executes a GraphQL operation with request/response semantics.
 *
 * May return an Observable or Promise of a plain GraphQL server response, or
 * a composed ExecutePayload object supporting additional metadata.
 */
export type FetchFunction = (
  request: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables: ?UploadableMap,
  logRequestInfo?: ?LogRequestInfoFunction,
) => ObservableFromValue<GraphQLResponse>;

/**
 * A function that executes a GraphQL subscription operation, returning zero or
 * more raw server responses over time.
 */
export type SubscribeFunction = (
  request: RequestParameters,
  variables: Variables,
  cacheConfig: CacheConfig,
) => RelayObservable<GraphQLResponse>;

export type Uploadable = File | Blob;
export type UploadableMap = interface {[key: string]: Uploadable};

/**
 * React Flight tree created on the server.
 */
export type ReactFlightServerTree = mixed;
export type ReactFlightPayloadQuery = {|
  +id: mixed,
  +module: mixed,
  +response: GraphQLSingularResponse,
  +variables: Variables,
|};
export type ReactFlightPayloadFragment = {|
  +__id: string,
  +__typename: string,
  +module: mixed,
  +response: GraphQLSingularResponse,
  +variables: Variables,
|};
export type ReactFlightServerError = {
  +message: string,
  +stack: string,
  ...
};
/**
 * Data that is returned by a Flight compliant GraphQL server.
 *
 * - status: string representing status of the server response.
 * - tree: React Server Components written into a row protocol that can be later
 *         read on the client. If this is null, this indicates that no rows were
 *         were written on the server.
 * - queries: an array of queries that the server preloaded for the client.
 * - errors: an array of errors that were encountered while rendering the
 *           Server Component.
 * - fragments: an array of fragments that the server preloaded for the client.
 */
export type ReactFlightPayloadData = {|
  +status: string,
  +tree: ?Array<ReactFlightServerTree>,
  +queries: Array<ReactFlightPayloadQuery>,
  +errors: Array<ReactFlightServerError>,
  +fragments: Array<ReactFlightPayloadFragment>,
|};
