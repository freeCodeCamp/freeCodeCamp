/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {
  ActorIdentifier,
  IActorEnvironment,
} from '../multi-actor-environment';
import type {
  GraphQLResponse,
  INetwork,
  PayloadData,
  PayloadError,
  ReactFlightServerTree,
  ReactFlightServerError,
  UploadableMap,
} from '../network/RelayNetworkTypes';
import type RelayObservable from '../network/RelayObservable';
import type {
  NormalizationLinkedField,
  NormalizationRootNode,
  NormalizationScalarField,
  NormalizationSelectableNode,
  NormalizationArgument,
} from '../util/NormalizationNode';
import type {ReaderFragment} from '../util/ReaderNode';
import type {
  ConcreteRequest,
  RequestParameters,
} from '../util/RelayConcreteNode';
import type {
  CacheConfig,
  DataID,
  Disposable,
  RenderPolicy,
  Variables,
} from '../util/RelayRuntimeTypes';
import type {RequestIdentifier} from '../util/getRequestIdentifier';
import type {InvalidationState} from './RelayModernStore';
import type RelayOperationTracker from './RelayOperationTracker';
import type {RecordState} from './RelayRecordState';

export opaque type FragmentReference = empty;
export type OperationTracker = RelayOperationTracker;

/*
 * An individual cached graph object.
 */
export type Record = {[key: string]: mixed, ...};

/**
 * A collection of records keyed by id.
 */
export type RecordObjectMap = {[DataID]: ?Record};

export type FragmentMap = {[key: string]: ReaderFragment, ...};

/**
 * The results of a selector given a store/RecordSource.
 */
export type SelectorData = {[key: string]: mixed, ...};

export type SingularReaderSelector = {|
  +kind: 'SingularReaderSelector',
  +dataID: DataID,
  +isWithinUnmatchedTypeRefinement: boolean,
  +node: ReaderFragment,
  +owner: RequestDescriptor,
  +variables: Variables,
|};

export type ReaderSelector = SingularReaderSelector | PluralReaderSelector;

export type PluralReaderSelector = {|
  +kind: 'PluralReaderSelector',
  +selectors: $ReadOnlyArray<SingularReaderSelector>,
|};

export type RequestDescriptor = {|
  +identifier: RequestIdentifier,
  +node: ConcreteRequest,
  +variables: Variables,
  +cacheConfig: ?CacheConfig,
|};

/**
 * A selector defines the starting point for a traversal into the graph for the
 * purposes of targeting a subgraph.
 */
export type NormalizationSelector = {|
  +dataID: DataID,
  +node: NormalizationSelectableNode,
  +variables: Variables,
|};

type MissingRequiredField = {|
  path: string,
  owner: string,
|};

export type MissingRequiredFields =
  | {|action: 'THROW', field: MissingRequiredField|}
  | {|action: 'LOG', fields: Array<MissingRequiredField>|};

/**
 * A representation of a selector and its results at a particular point in time.
 */
export type Snapshot = {|
  +data: ?SelectorData,
  +isMissingData: boolean,
  +seenRecords: DataIDSet,
  +selector: SingularReaderSelector,
  +missingRequiredFields: ?MissingRequiredFields,
|};

/**
 * An operation selector describes a specific instance of a GraphQL operation
 * with variables applied.
 *
 * - `root`: a selector intended for processing server results or retaining
 *   response data in the store.
 * - `fragment`: a selector intended for use in reading or subscribing to
 *   the results of the the operation.
 */
export type OperationDescriptor = {|
  +fragment: SingularReaderSelector,
  +request: RequestDescriptor,
  +root: NormalizationSelector,
|};

/**
 * Arbitrary data e.g. received by a container as props.
 */
export type Props = {[key: string]: mixed, ...};

/**
 * The type of the `relay` property set on React context by the React/Relay
 * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
 */
export type RelayContext = {|
  environment: IEnvironment,
  getEnvironmentForActor?: ?(
    actorIdentifier: ActorIdentifier,
  ) => IActorEnvironment,
|};

/**
 * The results of reading the results of a FragmentMap given some input
 * `Props`.
 */
export type FragmentSpecResults = {[key: string]: mixed, ...};

/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 */
export interface FragmentSpecResolver {
  /**
   * Stop watching for changes to the results of the fragments.
   */
  dispose(): void;

  /**
   * Get the current results.
   */
  resolve(): FragmentSpecResults;

  /**
   * Update the resolver with new inputs. Call `resolve()` to get the updated
   * results.
   */
  setProps(props: Props): void;

  /**
   * Override the variables used to read the results of the fragments. Call
   * `resolve()` to get the updated results.
   */
  setVariables(variables: Variables, node: ConcreteRequest): void;

  /**
   * Subscribe to resolver updates.
   * Overrides existing callback (if one has been specified).
   */
  setCallback(props: Props, callback: () => void): void;
}

/**
 * A read-only interface for accessing cached graph data.
 */
export interface RecordSource {
  get(dataID: DataID): ?Record;
  getRecordIDs(): Array<DataID>;
  getStatus(dataID: DataID): RecordState;
  has(dataID: DataID): boolean;
  size(): number;
  toJSON(): {[DataID]: ?Record, ...};
}

/**
 * A read/write interface for accessing and updating graph data.
 */
export interface MutableRecordSource extends RecordSource {
  clear(): void;
  delete(dataID: DataID): void;
  remove(dataID: DataID): void;
  set(dataID: DataID, record: Record): void;
}

export type CheckOptions = {|
  handlers: $ReadOnlyArray<MissingFieldHandler>,
  defaultActorIdentifier: ActorIdentifier,
  getTargetForActor: (actorIdentifier: ActorIdentifier) => MutableRecordSource,
  getSourceForActor: (actorIdentifier: ActorIdentifier) => RecordSource,
|};

export type OperationAvailability =
  | {|status: 'available', fetchTime: ?number|}
  | {|status: 'stale'|}
  | {|status: 'missing'|};

export type {InvalidationState} from './RelayModernStore';

/**
 * An interface for keeping multiple views of data consistent across an
 * application.
 */
export interface Store {
  /**
   * Get a read-only view of the store's internal RecordSource.
   */
  getSource(): RecordSource;

  /**
   * Determine if the operation can be resolved with data in the store (i.e. no
   * fields are missing).
   */
  check(
    operation: OperationDescriptor,
    options?: CheckOptions,
  ): OperationAvailability;

  /**
   * Read the results of a selector from in-memory records in the store.
   */
  lookup(selector: SingularReaderSelector): Snapshot;

  /**
   * Notify subscribers (see `subscribe`) of any data that was published
   * (`publish()`) since the last time `notify` was called.
   * Optionally provide an OperationDescriptor indicating the source operation
   * that was being processed to produce this run.
   *
   * This method should return an array of the affected fragment owners.
   */
  notify(
    sourceOperation?: OperationDescriptor,
    invalidateStore?: boolean,
  ): $ReadOnlyArray<RequestDescriptor>;

  /**
   * Publish new information (e.g. from the network) to the store, updating its
   * internal record source. Subscribers are not immediately notified - this
   * occurs when `notify()` is called.
   */
  publish(source: RecordSource, idsMarkedForInvalidation?: DataIDSet): void;

  /**
   * Ensure that all the records necessary to fulfill the given selector are
   * retained in memory. The records will not be eligible for garbage collection
   * until the returned reference is disposed.
   */
  retain(operation: OperationDescriptor): Disposable;

  /**
   * Subscribe to changes to the results of a selector. The callback is called
   * when `notify()` is called *and* records have been published that affect the
   * selector results relative to the last `notify()`.
   */
  subscribe(
    snapshot: Snapshot,
    callback: (snapshot: Snapshot) => void,
  ): Disposable;

  /**
   * The method should disable garbage collection until
   * the returned reference is disposed.
   */
  holdGC(): Disposable;

  /**
   * Record a backup/snapshot of the current state of the store, including
   * records and derived data such as fragment subscriptions.
   * This state can be restored with restore().
   */
  snapshot(): void;

  /**
   * Reset the state of the store to the point that snapshot() was last called.
   */
  restore(): void;

  /**
   * Will return an opaque snapshot of the current invalidation state of
   * the data ids that were provided.
   */
  lookupInvalidationState(dataIDs: $ReadOnlyArray<DataID>): InvalidationState;

  /**
   * Given the previous invalidation state for those
   * ids, this function will return:
   *   - false, if the invalidation state for those ids is the same, meaning
   *     **it has not changed**
   *   - true, if the invalidation state for the given ids has changed
   */
  checkInvalidationState(previousInvalidationState: InvalidationState): boolean;

  /**
   * Will subscribe the provided callback to the invalidation state of the
   * given data ids. Whenever the invalidation state for any of the provided
   * ids changes, the callback will be called, and provide the latest
   * invalidation state.
   * Disposing of the returned disposable will remove the subscription.
   */
  subscribeToInvalidationState(
    invalidationState: InvalidationState,
    callback: () => void,
  ): Disposable;

  /**
   * Get the current write epoch
   */
  getEpoch(): number;
}

export interface StoreSubscriptions {
  /**
   * Subscribe to changes to the results of a selector. The callback is called
   * when `updateSubscriptions()` is called *and* records have been published that affect the
   * selector results relative to the last update.
   */
  subscribe(
    snapshot: Snapshot,
    callback: (snapshot: Snapshot) => void,
  ): Disposable;

  /**
   * Record a backup/snapshot of the current state of the subscriptions.
   * This state can be restored with restore().
   */
  snapshotSubscriptions(source: RecordSource): void;

  /**
   * Reset the state of the subscriptions to the point that snapshot() was last called.
   */
  restoreSubscriptions(): void;

  /**
   * Notifies each subscription if the snapshot for the subscription selector has changed.
   * Mutates the updatedOwners array with any owners (RequestDescriptors) associated
   * with the subscriptions that were notified; i.e. the owners affected by the changes.
   */
  updateSubscriptions(
    source: RecordSource,
    updatedRecordIDs: DataIDSet,
    updatedOwners: Array<RequestDescriptor>,
    sourceOperation?: OperationDescriptor,
  ): void;
}

/**
 * A type that accepts a callback and schedules it to run at some future time.
 * By convention, implementations should not execute the callback immediately.
 */
export type Scheduler = (() => void) => void;

/**
 * An interface for imperatively getting/setting properties of a `Record`. This interface
 * is designed to allow the appearance of direct Record manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */
export interface RecordProxy {
  copyFieldsFrom(source: RecordProxy): void;
  getDataID(): DataID;
  getLinkedRecord(name: string, args?: ?Variables): ?RecordProxy;
  getLinkedRecords(name: string, args?: ?Variables): ?Array<?RecordProxy>;
  getOrCreateLinkedRecord(
    name: string,
    typeName: string,
    args?: ?Variables,
  ): RecordProxy;
  getType(): string;
  getValue(name: string, args?: ?Variables): mixed;
  setLinkedRecord(
    record: RecordProxy,
    name: string,
    args?: ?Variables,
  ): RecordProxy;
  setLinkedRecords(
    records: Array<?RecordProxy>,
    name: string,
    args?: ?Variables,
  ): RecordProxy;
  setValue(value: mixed, name: string, args?: ?Variables): RecordProxy;
  invalidateRecord(): void;
}

export interface ReadOnlyRecordProxy {
  getDataID(): DataID;
  getLinkedRecord(name: string, args?: ?Variables): ?RecordProxy;
  getLinkedRecords(name: string, args?: ?Variables): ?Array<?RecordProxy>;
  getType(): string;
  getValue(name: string, args?: ?Variables): mixed;
}

/**
 * An interface for imperatively getting/setting properties of a `RecordSource`. This interface
 * is designed to allow the appearance of direct RecordSource manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */
export interface RecordSourceProxy {
  create(dataID: DataID, typeName: string): RecordProxy;
  delete(dataID: DataID): void;
  get(dataID: DataID): ?RecordProxy;
  getRoot(): RecordProxy;
  invalidateStore(): void;
}

export interface ReadOnlyRecordSourceProxy {
  get(dataID: DataID): ?ReadOnlyRecordProxy;
  getRoot(): ReadOnlyRecordProxy;
}

/**
 * Extends the RecordSourceProxy interface with methods for accessing the root
 * fields of a Selector.
 */
export interface RecordSourceSelectorProxy extends RecordSourceProxy {
  getRootField(fieldName: string): ?RecordProxy;
  getPluralRootField(fieldName: string): ?Array<?RecordProxy>;
  invalidateStore(): void;
}

export type LogEvent =
  | {|
      +name: 'suspense.fragment',
      +data: mixed,
      +fragment: ReaderFragment,
      +isRelayHooks: boolean,
      +isMissingData: boolean,
      +isPromiseCached: boolean,
      +pendingOperations: $ReadOnlyArray<RequestDescriptor>,
    |}
  | {|
      +name: 'suspense.query',
      +fetchPolicy: string,
      +isPromiseCached: boolean,
      +operation: OperationDescriptor,
      +queryAvailability: ?OperationAvailability,
      +renderPolicy: RenderPolicy,
    |}
  | {|
      +name: 'queryresource.fetch',
      // ID of this query resource request and will be the same
      // if there is an associated queryresource.retain event.
      +resourceID: number,
      +operation: OperationDescriptor,
      // value from ProfilerContext
      +profilerContext: mixed,
      // FetchPolicy from Relay Hooks
      +fetchPolicy: string,
      // RenderPolicy from Relay Hooks
      +renderPolicy: RenderPolicy,
      +queryAvailability: OperationAvailability,
      +shouldFetch: boolean,
    |}
  | {|
      +name: 'queryresource.retain',
      +resourceID: number,
      // value from ProfilerContext
      +profilerContext: mixed,
    |}
  | {|
      +name: 'network.info',
      +networkRequestId: number,
      +info: mixed,
    |}
  | {|
      +name: 'network.start',
      +networkRequestId: number,
      +params: RequestParameters,
      +variables: Variables,
      +cacheConfig: CacheConfig,
    |}
  | {|
      +name: 'network.next',
      +networkRequestId: number,
      +response: GraphQLResponse,
    |}
  | {|
      +name: 'network.error',
      +networkRequestId: number,
      +error: Error,
    |}
  | {|
      +name: 'network.complete',
      +networkRequestId: number,
    |}
  | {|
      +name: 'network.unsubscribe',
      +networkRequestId: number,
    |}
  | {|
      +name: 'execute.start',
      +executeId: number,
      +params: RequestParameters,
      +variables: Variables,
      +cacheConfig: CacheConfig,
    |}
  | {|
      +name: 'execute.next',
      +executeId: number,
      +response: GraphQLResponse,
      +duration: number,
    |}
  | {|
      +name: 'execute.async.module',
      +executeId: number,
      +operationName: string,
      +duration: number,
    |}
  | {|
      +name: 'execute.flight.payload_deserialize',
      +executeId: number,
      +operationName: string,
      +duration: number,
    |}
  | {|
      +name: 'execute.error',
      +executeId: number,
      +error: Error,
    |}
  | {|
      +name: 'execute.complete',
      +executeId: number,
    |}
  | {|
      +name: 'store.publish',
      +source: RecordSource,
      +optimistic: boolean,
    |}
  | {|
      +name: 'store.snapshot',
    |}
  | {|
      +name: 'store.restore',
    |}
  | {|
      +name: 'store.gc',
      +references: DataIDSet,
    |}
  | {|
      +name: 'store.notify.start',
      +sourceOperation: ?OperationDescriptor,
    |}
  | {|
      +name: 'store.notify.complete',
      +sourceOperation: ?OperationDescriptor,
      +updatedRecordIDs: DataIDSet,
      +invalidatedRecordIDs: DataIDSet,
    |}
  | {|
      +name: 'store.notify.subscription',
      +sourceOperation: ?OperationDescriptor,
      +snapshot: Snapshot,
      +nextSnapshot: Snapshot,
    |}
  | {|
      +name: 'entrypoint.root.consume',
      +profilerContext: mixed,
      +rootModuleID: string,
    |};

export type LogFunction = LogEvent => void;
export type LogRequestInfoFunction = mixed => void;

/**
 * The public API of Relay core. Represents an encapsulated environment with its
 * own in-memory cache.
 */
export interface IEnvironment {
  /**
   * Extra information attached to the environment instance
   */
  +options: mixed;

  /**
   * **UNSTABLE** Event based logging API thats scoped to the environment.
   */
  __log: LogFunction;

  /**
   * Determine if the operation can be resolved with data in the store (i.e. no
   * fields are missing).
   *
   * Note that this operation effectively "executes" the selector against the
   * cache and therefore takes time proportional to the size/complexity of the
   * selector.
   */
  check(operation: OperationDescriptor): OperationAvailability;

  /**
   * Subscribe to changes to the results of a selector. The callback is called
   * when data has been committed to the store that would cause the results of
   * the snapshot's selector to change.
   */
  subscribe(
    snapshot: Snapshot,
    callback: (snapshot: Snapshot) => void,
  ): Disposable;

  /**
   * Ensure that all the records necessary to fulfill the given selector are
   * retained in-memory. The records will not be eligible for garbage collection
   * until the returned reference is disposed.
   */
  retain(operation: OperationDescriptor): Disposable;

  /**
   * Apply an optimistic update to the environment. The mutation can be reverted
   * by calling `dispose()` on the returned value.
   */
  applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable;

  /**
   * Revert updates for the `update` function.
   */
  revertUpdate(update: OptimisticUpdateFunction): void;

  /**
   * Revert updates for the `update` function, and apply the `replacement` update.
   */
  replaceUpdate(
    update: OptimisticUpdateFunction,
    replacement: OptimisticUpdateFunction,
  ): void;

  /**
   * Apply an optimistic mutation response and/or updater. The mutation can be
   * reverted by calling `dispose()` on the returned value.
   */
  applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable;

  /**
   * Commit an updater to the environment. This mutation cannot be reverted and
   * should therefore not be used for optimistic updates. This is mainly
   * intended for updating fields from client schema extensions.
   */
  commitUpdate(updater: StoreUpdater): void;

  /**
   * Commit a payload to the environment using the given operation selector.
   */
  commitPayload(
    operationDescriptor: OperationDescriptor,
    payload: PayloadData,
  ): void;

  /**
   * Get the environment's internal Network.
   */
  getNetwork(): INetwork;

  /**
   * Get the environment's internal Store.
   */
  getStore(): Store;

  /**
   * Returns the environment specific OperationTracker.
   */
  getOperationTracker(): RelayOperationTracker;

  /**
   * EXPERIMENTAL
   * Returns the default render policy to use when rendering a query
   * that uses Relay Hooks.
   */
  UNSTABLE_getDefaultRenderPolicy(): RenderPolicy;

  /**
   * Read the results of a selector from in-memory records in the store.
   */
  lookup(selector: SingularReaderSelector): Snapshot;

  /**
   * Send a query to the server with Observer semantics: one or more
   * responses may be returned (via `next`) over time followed by either
   * the request completing (`completed`) or an error (`error`).
   *
   * Networks/servers that support subscriptions may choose to hold the
   * subscription open indefinitely such that `complete` is not called.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to: environment.execute({...}).subscribe({...}).
   */
  execute(config: {|
    operation: OperationDescriptor,
    updater?: ?SelectorStoreUpdater,
  |}): RelayObservable<GraphQLResponse>;

  /**
   * Returns an Observable of GraphQLResponse resulting from executing the
   * provided Mutation operation, the result of which is then normalized and
   * committed to the publish queue along with an optional optimistic response
   * or updater.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to:
   * environment.executeMutation({...}).subscribe({...}).
   */
  executeMutation(
    config: ExecuteMutationConfig,
  ): RelayObservable<GraphQLResponse>;

  /**
   * Returns an Observable of GraphQLResponse resulting from executing the
   * provided Query or Subscription operation responses, the result of which is
   * then normalized and committed to the publish queue.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to:
   * environment.executeWithSource({...}).subscribe({...}).
   */
  executeWithSource({|
    operation: OperationDescriptor,
    source: RelayObservable<GraphQLResponse>,
  |}): RelayObservable<GraphQLResponse>;

  /**
   * Returns true if a request is currently "active", meaning it's currently
   * actively receiving payloads or downloading modules, and has not received
   * a final payload yet. Note that a request might still be pending (or "in flight")
   * without actively receiving payload, for example a live query or an
   * active GraphQL subscription
   */
  isRequestActive(requestIdentifier: string): boolean;

  /**
   * Returns true if the environment is for use during server side rendering.
   * functions like getQueryResource key off of this in order to determine
   * whether we need to set up certain caches and timeout's.
   */
  isServer(): boolean;

  /**
   * Called by Relay when it encounters a missing field that has been annotated
   * with `@required(action: LOG)`.
   */
  requiredFieldLogger: RequiredFieldLogger;
}

/**
 * The partial shape of an object with a '...Fragment @module(name: "...")'
 * selection
 */
export type ModuleImportPointer = {
  +__fragmentPropName: ?string,
  +__module_component: mixed,
  +$fragmentRefs: mixed,
  ...
};

/**
 * A set of DataIDs used to track which IDs a read() operation observed and which IDs
 * a publish operation updated.
 */
export type DataIDSet = Set<DataID>;

/**
 * A function that updates a store (via a proxy) given the results of a "handle"
 * field payload.
 */
export type Handler = {
  update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void,
  ...
};

/**
 * A payload that is used to initialize or update a "handle" field with
 * information from the server.
 */
export type HandleFieldPayload = {|
  // The arguments that were fetched.
  +args: Variables,
  // The __id of the record containing the source/handle field.
  +dataID: DataID,
  // The (storage) key at which the original server data was written.
  +fieldKey: string,
  // The name of the handle.
  +handle: string,
  // The (storage) key at which the handle's data should be written by the
  // handler.
  +handleKey: string,
  // The arguments applied to the handle
  +handleArgs: Variables,
|};

/**
 * A payload that represents data necessary to process the results of an object
 * with a `@module` fragment spread, or a Flight field's:
 *
 * ## @module Fragment Spread
 * - args: Local arguments from the parent
 * - data: The GraphQL response value for the @match field.
 * - dataID: The ID of the store object linked to by the @match field.
 * - operationReference: A reference to a generated module containing the
 *   SplitOperation with which to normalize the field's `data`.
 * - variables: Query variables.
 * - typeName: the type that matched.
 *
 * The dataID, variables, and fragmentName can be used to create a Selector
 * which can in turn be used to normalize and publish the data. The dataID and
 * typeName can also be used to construct a root record for normalization.
 *
 * ## Flight fields
 * In Flight, data for additional components rendered by the requested server
 * component are included in the response returned by a Flight compliant server.
 *
 * - data: Data used by additional components rendered by the server component
 *     being requested.
 * - dataID: For Flight fields, this should always be ROOT_ID. This is because
 *     the query data isn't relative to the parent record–it's root data.
 * - operationReference: The query's module that will be later used by an
 *     operation loader.
 * - variables: The query's variables.
 * - typeName: For Flight fields, this should always be ROOT_TYPE. This is
 *     because the query data isn't relative to the parent record–it's
 *     root data.
 */
export type ModuleImportPayload = {|
  +kind: 'ModuleImportPayload',
  +args: ?$ReadOnlyArray<NormalizationArgument>,
  +data: PayloadData,
  +dataID: DataID,
  +operationReference: mixed,
  +path: $ReadOnlyArray<string>,
  +typeName: string,
  +variables: Variables,
  +actorIdentifier: ?ActorIdentifier,
|};

/**
 * A payload that represents data necessary to process the results of an object
 * with experimental actor change directive.
 *
 * - data: The GraphQL response value for the actor change field.
 * - dataID: The ID of the store object linked to by the actor change field.
 * - node: NormalizationLinkedField, where the actor change directive is used
 * - path: to a field in the response
 * - variables: Query variables.
 * - typeName: the type that matched.
 *
 * The dataID, variables, and fragmentName can be used to create a Selector
 * which can in turn be used to normalize and publish the data. The dataID and
 * typeName can also be used to construct a root record for normalization.
 */
export type ActorPayload = {|
  +kind: 'ActorPayload',
  +data: PayloadData,
  +dataID: DataID,
  +node: NormalizationLinkedField,
  +path: $ReadOnlyArray<string>,
  +typeName: string,
  +variables: Variables,
  +actorIdentifier: ActorIdentifier,
|};

/**
 * Union type of possible payload followups we may handle during normalization.
 */
export type FollowupPayload = ModuleImportPayload | ActorPayload;

/**
 * Data emitted after processing a Defer or Stream node during normalization
 * that describes how to process the corresponding response chunk when it
 * arrives.
 */
export type DeferPlaceholder = {|
  +kind: 'defer',
  +data: PayloadData,
  +label: string,
  +path: $ReadOnlyArray<string>,
  +selector: NormalizationSelector,
  +typeName: string,
  +actorIdentifier: ?ActorIdentifier,
|};
export type StreamPlaceholder = {|
  +kind: 'stream',
  +label: string,
  +path: $ReadOnlyArray<string>,
  +parentID: DataID,
  +node: NormalizationSelectableNode,
  +variables: Variables,
  +actorIdentifier: ?ActorIdentifier,
|};
export type IncrementalDataPlaceholder = DeferPlaceholder | StreamPlaceholder;

/**
 * A user-supplied object to load a generated operation (SplitOperation or
 * ConcreteRequest) AST by a module reference. The exact format of a module
 * reference is left to the application, but it must be a plain JavaScript value
 * (string, number, or object/array of same).
 */
export type OperationLoader = {|
  /**
   * Synchronously load an operation, returning either the node or null if it
   * cannot be resolved synchronously.
   */
  get(reference: mixed): ?NormalizationRootNode,

  /**
   * Asynchronously load an operation.
   */
  load(reference: mixed): Promise<?NormalizationRootNode>,
|};

/**
 * A function that receives a proxy over the store and may trigger side-effects
 * (indirectly) by calling `set*` methods on the store or its record proxies.
 */
export type StoreUpdater = (store: RecordSourceProxy) => void;

/**
 * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
 * order to easily access the root fields of a query/mutation as well as a
 * second argument of the response object of the mutation.
 */
export type SelectorStoreUpdater = (
  store: RecordSourceSelectorProxy,
  // Actually SelectorData, but mixed is inconvenient to access deeply in
  // product code.
  data: $FlowFixMe,
) => void;

/**
 * A set of configs that can be used to apply an optimistic update into the
 * store.
 */
export type OptimisticUpdate =
  | OptimisticUpdateFunction
  | OptimisticUpdateRelayPayload;

export type OptimisticUpdateFunction = {|
  +storeUpdater: StoreUpdater,
|};

export type OptimisticUpdateRelayPayload = {|
  +operation: OperationDescriptor,
  +payload: RelayResponsePayload,
  +updater: ?SelectorStoreUpdater,
|};

export type OptimisticResponseConfig = {|
  +operation: OperationDescriptor,
  +response: ?PayloadData,
  +updater: ?SelectorStoreUpdater,
|};

/**
 * A set of handlers that can be used to provide substitute data for missing
 * fields when reading a selector from a source.
 */
export type MissingFieldHandler =
  | {|
      kind: 'scalar',
      handle: (
        field: NormalizationScalarField,
        record: ?Record,
        args: Variables,
        store: ReadOnlyRecordSourceProxy,
      ) => mixed,
    |}
  | {|
      kind: 'linked',
      handle: (
        field: NormalizationLinkedField,
        record: ?Record,
        args: Variables,
        store: ReadOnlyRecordSourceProxy,
      ) => ?DataID,
    |}
  | {|
      kind: 'pluralLinked',
      handle: (
        field: NormalizationLinkedField,
        record: ?Record,
        args: Variables,
        store: ReadOnlyRecordSourceProxy,
      ) => ?Array<?DataID>,
    |};

/**
 * A handler for events related to @required fields. Currently reports missing
 * fields with either `action: LOG` or `action: THROW`.
 */
export type RequiredFieldLogger = (
  | {|
      +kind: 'missing_field.log',
      +owner: string,
      +fieldPath: string,
    |}
  | {|
      +kind: 'missing_field.throw',
      +owner: string,
      +fieldPath: string,
    |},
) => void;

/**
 * The results of normalizing a query.
 */
export type RelayResponsePayload = {|
  +errors: ?Array<PayloadError>,
  +fieldPayloads: ?Array<HandleFieldPayload>,
  +incrementalPlaceholders: ?Array<IncrementalDataPlaceholder>,
  +followupPayloads: ?Array<FollowupPayload>,
  +source: MutableRecordSource,
  +isFinal: boolean,
|};

/**
 * Configuration on the executeMutation(...).
 */
export type ExecuteMutationConfig = {|
  operation: OperationDescriptor,
  optimisticUpdater?: ?SelectorStoreUpdater,
  optimisticResponse?: ?Object,
  updater?: ?SelectorStoreUpdater,
  uploadables?: ?UploadableMap,
|};

/**
 * Public interface for Publish Queue.
 */
export interface PublishQueue {
  /**
   * Schedule applying an optimistic updates on the next `run()`.
   */
  applyUpdate(updater: OptimisticUpdate): void;

  /**
   * Schedule reverting an optimistic updates on the next `run()`.
   */
  revertUpdate(updater: OptimisticUpdate): void;

  /**
   * Schedule a revert of all optimistic updates on the next `run()`.
   */
  revertAll(): void;

  /**
   * Schedule applying a payload to the store on the next `run()`.
   */
  commitPayload(
    operation: OperationDescriptor,
    payload: RelayResponsePayload,
    updater?: ?SelectorStoreUpdater,
  ): void;

  /**
   * Schedule an updater to mutate the store on the next `run()` typically to
   * update client schema fields.
   */
  commitUpdate(updater: StoreUpdater): void;

  /**
   * Schedule a publish to the store from the provided source on the next
   * `run()`. As an example, to update the store with substituted fields that
   * are missing in the store.
   */
  commitSource(source: RecordSource): void;

  /**
   * Execute all queued up operations from the other public methods.
   * Optionally provide an OperationDescriptor indicating the source operation
   * that was being processed to produce this run.
   */
  run(sourceOperation?: OperationDescriptor): $ReadOnlyArray<RequestDescriptor>;
}

/**
 * ReactFlightDOMRelayClient processes a ReactFlightServerTree into a
 * ReactFlightClientResponse object. readRoot() can suspend.
 */
export type ReactFlightClientResponse = {readRoot: () => mixed, ...};

export type ReactFlightReachableExecutableDefinitions = {|
  +module: mixed,
  +variables: Variables,
|};

/**
 * A user-supplied function that takes a ReactFlightServerTree
 * (after successful execution on the server), and deserializes it into a
 * ReactFlightClientResponse object.
 */
export type ReactFlightPayloadDeserializer = (
  tree: ReactFlightServerTree,
) => ReactFlightClientResponse;

/**
 * An optionally user-supplied function that handles errors returned by the
 * server's JS runtime while executing a React Server Component.
 */
export type ReactFlightServerErrorHandler = (
  status: string,
  errors: Array<ReactFlightServerError>,
) => void;
