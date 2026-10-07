/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayError = require('../util/RelayError');
const RelayFeatureFlags = require('../util/RelayFeatureFlags');
const RelayModernRecord = require('./RelayModernRecord');
const RelayObservable = require('../network/RelayObservable');
const RelayRecordSource = require('./RelayRecordSource');
const RelayResponseNormalizer = require('./RelayResponseNormalizer');

const generateID = require('../util/generateID');
const getOperation = require('../util/getOperation');
const invariant = require('invariant');
const stableCopy = require('../util/stableCopy');
const warning = require('warning');
const withDuration = require('../util/withDuration');

const {generateClientID, generateUniqueClientID} = require('./ClientID');
const {getLocalVariables} = require('./RelayConcreteVariables');
const {
  createNormalizationSelector,
  createReaderSelector,
} = require('./RelayModernSelector');
const {ROOT_TYPE, TYPENAME_KEY, getStorageKey} = require('./RelayStoreUtils');

import type {ActorIdentifier} from '../multi-actor-environment/ActorIdentifier';
import type {
  GraphQLResponse,
  GraphQLSingularResponse,
  GraphQLResponseWithData,
  ReactFlightServerTree,
} from '../network/RelayNetworkTypes';
import type {Sink, Subscription} from '../network/RelayObservable';
import type {
  DeferPlaceholder,
  FollowupPayload,
  RequestDescriptor,
  HandleFieldPayload,
  IncrementalDataPlaceholder,
  LogFunction,
  ModuleImportPayload,
  NormalizationSelector,
  OperationDescriptor,
  OperationLoader,
  OperationTracker,
  OptimisticResponseConfig,
  OptimisticUpdate,
  PublishQueue,
  ReactFlightPayloadDeserializer,
  ReactFlightServerErrorHandler,
  ReactFlightClientResponse,
  Record,
  RelayResponsePayload,
  SelectorStoreUpdater,
  Store,
  StreamPlaceholder,
} from '../store/RelayStoreTypes';
import type {
  NormalizationLinkedField,
  NormalizationOperation,
  NormalizationRootNode,
  NormalizationSelectableNode,
  NormalizationSplitOperation,
} from '../util/NormalizationNode';
import type {DataID, Variables, Disposable} from '../util/RelayRuntimeTypes';
import type {GetDataID} from './RelayResponseNormalizer';
import type {NormalizationOptions} from './RelayResponseNormalizer';

export type ExecuteConfig = {|
  +actorIdentifier: ActorIdentifier,
  +getDataID: GetDataID,
  +getPublishQueue: (actorIdentifier: ActorIdentifier) => PublishQueue,
  +getStore: (actorIdentifier: ActorIdentifier) => Store,
  +isClientPayload?: boolean,
  +operation: OperationDescriptor,
  +operationExecutions: Map<string, ActiveState>,
  +operationLoader: ?OperationLoader,
  +operationTracker: OperationTracker,
  +optimisticConfig: ?OptimisticResponseConfig,
  +reactFlightPayloadDeserializer?: ?ReactFlightPayloadDeserializer,
  +reactFlightServerErrorHandler?: ?ReactFlightServerErrorHandler,
  +scheduler?: ?TaskScheduler,
  +shouldProcessClientComponents?: ?boolean,
  +sink: Sink<GraphQLResponse>,
  +source: RelayObservable<GraphQLResponse>,
  +treatMissingFieldsAsNull: boolean,
  +updater?: ?SelectorStoreUpdater,
  +log: LogFunction,
|};

export type ActiveState = 'active' | 'inactive';

export type TaskScheduler = {|
  +cancel: (id: string) => void,
  +schedule: (fn: () => void) => string,
|};

type Label = string;
type PathKey = string;
type IncrementalResults =
  | {|
      +kind: 'placeholder',
      +placeholder: IncrementalDataPlaceholder,
    |}
  | {|
      +kind: 'response',
      +responses: Array<IncrementalGraphQLResponse>,
    |};

type IncrementalGraphQLResponse = {|
  label: string,
  path: $ReadOnlyArray<mixed>,
  response: GraphQLResponseWithData,
|};

function execute(config: ExecuteConfig): Executor {
  return new Executor(config);
}

/**
 * Coordinates the execution of a query, handling network callbacks
 * including optimistic payloads, standard payloads, resolution of match
 * dependencies, etc.
 */
class Executor {
  _actorIdentifier: ActorIdentifier;
  _getDataID: GetDataID;
  _treatMissingFieldsAsNull: boolean;
  _incrementalPayloadsPending: boolean;
  _incrementalResults: Map<Label, Map<PathKey, IncrementalResults>>;
  _log: LogFunction;
  _executeId: number;
  _nextSubscriptionId: number;
  _operation: OperationDescriptor;
  _operationExecutions: Map<string, ActiveState>;
  _operationLoader: ?OperationLoader;
  _operationTracker: OperationTracker;
  _operationUpdateEpochs: Map<string, number>;
  _optimisticUpdates: null | Array<OptimisticUpdate>;
  _pendingModulePayloadsCount: number;
  +_getPublishQueue: (actorIdentifier: ActorIdentifier) => PublishQueue;
  _reactFlightPayloadDeserializer: ?ReactFlightPayloadDeserializer;
  _reactFlightServerErrorHandler: ?ReactFlightServerErrorHandler;
  _shouldProcessClientComponents: ?boolean;
  _scheduler: ?TaskScheduler;
  _sink: Sink<GraphQLResponse>;
  _source: Map<
    string,
    {|+record: Record, +fieldPayloads: Array<HandleFieldPayload>|},
  >;
  _state: 'started' | 'loading_incremental' | 'loading_final' | 'completed';
  +_getStore: (actorIdentifier: ActorIdentifier) => Store;
  _subscriptions: Map<number, Subscription>;
  _updater: ?SelectorStoreUpdater;
  _asyncStoreUpdateDisposable: ?Disposable;
  _completeFns: Array<() => void>;
  +_retainDisposables: Map<ActorIdentifier, Disposable>;
  +_isClientPayload: boolean;
  +_isSubscriptionOperation: boolean;
  +_seenActors: Set<ActorIdentifier>;

  constructor({
    actorIdentifier,
    getDataID,
    getPublishQueue,
    getStore,
    isClientPayload,
    operation,
    operationExecutions,
    operationLoader,
    operationTracker,
    optimisticConfig,
    reactFlightPayloadDeserializer,
    reactFlightServerErrorHandler,
    scheduler,
    shouldProcessClientComponents,
    sink,
    source,
    treatMissingFieldsAsNull,
    updater,
    log,
  }: ExecuteConfig): void {
    this._actorIdentifier = actorIdentifier;
    this._getDataID = getDataID;
    this._treatMissingFieldsAsNull = treatMissingFieldsAsNull;
    this._incrementalPayloadsPending = false;
    this._incrementalResults = new Map();
    this._log = log;
    this._executeId = generateID();
    this._nextSubscriptionId = 0;
    this._operation = operation;
    this._operationExecutions = operationExecutions;
    this._operationLoader = operationLoader;
    this._operationTracker = operationTracker;
    this._operationUpdateEpochs = new Map();
    this._optimisticUpdates = null;
    this._pendingModulePayloadsCount = 0;
    this._getPublishQueue = getPublishQueue;
    this._scheduler = scheduler;
    this._sink = sink;
    this._source = new Map();
    this._state = 'started';
    this._getStore = getStore;
    this._subscriptions = new Map();
    this._updater = updater;
    this._isClientPayload = isClientPayload === true;
    this._reactFlightPayloadDeserializer = reactFlightPayloadDeserializer;
    this._reactFlightServerErrorHandler = reactFlightServerErrorHandler;
    this._isSubscriptionOperation =
      this._operation.request.node.params.operationKind === 'subscription';
    this._shouldProcessClientComponents = shouldProcessClientComponents;
    this._retainDisposables = new Map();
    this._seenActors = new Set();
    this._completeFns = [];

    const id = this._nextSubscriptionId++;
    source.subscribe({
      complete: () => this._complete(id),
      error: error => this._error(error),
      next: response => {
        try {
          this._next(id, response);
        } catch (error) {
          sink.error(error);
        }
      },
      start: subscription => {
        this._start(id, subscription);
        this._log({
          name: 'execute.start',
          executeId: this._executeId,
          params: this._operation.request.node.params,
          variables: this._operation.request.variables,
          cacheConfig: this._operation.request.cacheConfig ?? {},
        });
      },
    });

    if (optimisticConfig != null) {
      this._processOptimisticResponse(
        optimisticConfig.response != null
          ? {data: optimisticConfig.response}
          : null,
        optimisticConfig.updater,
        false,
      );
    }
  }

  // Cancel any pending execution tasks and mark the executor as completed.
  cancel(): void {
    if (this._state === 'completed') {
      return;
    }
    this._state = 'completed';
    this._operationExecutions.delete(this._operation.request.identifier);

    if (this._subscriptions.size !== 0) {
      this._subscriptions.forEach(sub => sub.unsubscribe());
      this._subscriptions.clear();
    }
    const optimisticUpdates = this._optimisticUpdates;
    if (optimisticUpdates !== null) {
      this._optimisticUpdates = null;
      optimisticUpdates.forEach(update =>
        this._getPublishQueueAndSaveActor().revertUpdate(update),
      );
      // OK: run revert on cancel
      this._runPublishQueue();
    }
    this._incrementalResults.clear();
    if (this._asyncStoreUpdateDisposable != null) {
      this._asyncStoreUpdateDisposable.dispose();
      this._asyncStoreUpdateDisposable = null;
    }
    this._completeFns = [];
    this._completeOperationTracker();
    this._disposeRetainedData();
  }

  _deserializeReactFlightPayloadWithLogging = (
    tree: ReactFlightServerTree,
  ): ReactFlightClientResponse => {
    const reactFlightPayloadDeserializer = this._reactFlightPayloadDeserializer;
    invariant(
      typeof reactFlightPayloadDeserializer === 'function',
      'OperationExecutor: Expected reactFlightPayloadDeserializer to be available when calling _deserializeReactFlightPayloadWithLogging.',
    );
    const [duration, result] = withDuration(() => {
      return reactFlightPayloadDeserializer(tree);
    });
    this._log({
      name: 'execute.flight.payload_deserialize',
      executeId: this._executeId,
      operationName: this._operation.request.node.params.name,
      duration,
    });
    return result;
  };

  _updateActiveState(): void {
    let activeState;
    switch (this._state) {
      case 'started': {
        activeState = 'active';
        break;
      }
      case 'loading_incremental': {
        activeState = 'active';
        break;
      }
      case 'completed': {
        activeState = 'inactive';
        break;
      }
      case 'loading_final': {
        activeState =
          this._pendingModulePayloadsCount > 0 ? 'active' : 'inactive';
        break;
      }
      default:
        (this._state: empty);
        invariant(false, 'OperationExecutor: invalid executor state.');
    }
    this._operationExecutions.set(
      this._operation.request.identifier,
      activeState,
    );
  }

  _schedule(task: () => void): void {
    const scheduler = this._scheduler;
    if (scheduler != null) {
      const id = this._nextSubscriptionId++;
      RelayObservable.create(sink => {
        const cancellationToken = scheduler.schedule(() => {
          try {
            task();
            sink.complete();
          } catch (error) {
            sink.error(error);
          }
        });
        return () => scheduler.cancel(cancellationToken);
      }).subscribe({
        complete: () => this._complete(id),
        error: error => this._error(error),
        start: subscription => this._start(id, subscription),
      });
    } else {
      task();
    }
  }

  _complete(id: number): void {
    this._subscriptions.delete(id);
    if (this._subscriptions.size === 0) {
      this.cancel();
      this._sink.complete();
      this._log({
        name: 'execute.complete',
        executeId: this._executeId,
      });
    }
  }

  _error(error: Error): void {
    this.cancel();
    this._sink.error(error);
    this._log({
      name: 'execute.error',
      executeId: this._executeId,
      error,
    });
  }

  _start(id: number, subscription: Subscription): void {
    this._subscriptions.set(id, subscription);
    this._updateActiveState();
  }

  // Handle a raw GraphQL response.
  _next(_id: number, response: GraphQLResponse): void {
    this._schedule(() => {
      const [duration] = withDuration(() => {
        this._handleNext(response);
        this._maybeCompleteSubscriptionOperationTracking();
      });
      this._log({
        name: 'execute.next',
        executeId: this._executeId,
        response,
        duration,
      });
    });
  }

  _handleErrorResponse(
    responses: $ReadOnlyArray<GraphQLSingularResponse>,
  ): $ReadOnlyArray<GraphQLResponseWithData> {
    const results = [];
    responses.forEach(response => {
      if (
        response.data === null &&
        response.extensions != null &&
        !response.hasOwnProperty('errors')
      ) {
        // Skip extensions-only payloads
        return;
      } else if (response.data == null) {
        // Error if any other payload in the batch is missing data, regardless of whether
        // it had `errors` or not.
        const errors =
          response.hasOwnProperty('errors') && response.errors != null
            ? response.errors
            : null;
        const messages = errors
          ? errors.map(({message}) => message).join('\n')
          : '(No errors)';
        const error = RelayError.create(
          'RelayNetwork',
          'No data returned for operation `' +
            this._operation.request.node.params.name +
            '`, got error(s):\n' +
            messages +
            '\n\nSee the error `source` property for more information.',
        );
        (error: $FlowFixMe).source = {
          errors,
          operation: this._operation.request.node,
          variables: this._operation.request.variables,
        };
        // In V8, Error objects keep the closure scope chain alive until the
        // err.stack property is accessed.
        error.stack;
        throw error;
      } else {
        const responseWithData: GraphQLResponseWithData = (response: $FlowFixMe);
        results.push(responseWithData);
      }
    });
    return results;
  }

  /**
   * This method return boolean to indicate if the optimistic
   * response has been handled
   */
  _handleOptimisticResponses(
    responses: $ReadOnlyArray<GraphQLResponseWithData>,
  ): boolean {
    if (responses.length > 1) {
      if (
        responses.some(
          responsePart => responsePart.extensions?.isOptimistic === true,
        )
      ) {
        invariant(
          false,
          'OperationExecutor: Optimistic responses cannot be batched.',
        );
      }
      return false;
    }
    const response = responses[0];
    const isOptimistic = response.extensions?.isOptimistic === true;
    if (isOptimistic && this._state !== 'started') {
      invariant(
        false,
        'OperationExecutor: optimistic payload received after server payload.',
      );
    }
    if (isOptimistic) {
      this._processOptimisticResponse(
        response,
        null,
        this._treatMissingFieldsAsNull,
      );
      this._sink.next(response);
      return true;
    }
    return false;
  }

  _handleNext(response: GraphQLResponse): void {
    if (this._state === 'completed') {
      return;
    }
    this._seenActors.clear();

    const responses = Array.isArray(response) ? response : [response];
    const responsesWithData = this._handleErrorResponse(responses);

    if (responsesWithData.length === 0) {
      // no results with data, nothing to process
      // this can occur with extensions-only payloads
      const isFinal = responses.some(x => x.extensions?.is_final === true);
      if (isFinal) {
        this._state = 'loading_final';
        this._updateActiveState();
        this._incrementalPayloadsPending = false;
      }
      this._sink.next(response);
      return;
    }

    // Next, handle optimistic responses
    const isOptimistic = this._handleOptimisticResponses(responsesWithData);
    if (isOptimistic) {
      return;
    }

    const [
      nonIncrementalResponses,
      incrementalResponses,
    ] = partitionGraphQLResponses(responsesWithData);
    const hasNonIncrementalResponses = nonIncrementalResponses.length > 0;

    // In theory this doesn't preserve the ordering of the batch.
    // The idea is that a batch is always:
    //  * at most one non-incremental payload
    //  * followed by zero or more incremental payloads
    // The non-incremental payload can appear if the server sends a batch
    // with the initial payload followed by some early-to-resolve incremental
    // payloads (although, can that even happen?)
    if (hasNonIncrementalResponses) {
      // For subscriptions, to avoid every new payload from overwriting existing
      // data from previous payloads, assign a unique rootID for every new
      // non-incremental payload.
      if (this._isSubscriptionOperation) {
        const nextID = generateUniqueClientID();
        this._operation = {
          request: this._operation.request,
          fragment: createReaderSelector(
            this._operation.fragment.node,
            nextID,
            this._operation.fragment.variables,
            this._operation.fragment.owner,
          ),
          root: createNormalizationSelector(
            this._operation.root.node,
            nextID,
            this._operation.root.variables,
          ),
        };
      }

      const payloadFollowups = this._processResponses(nonIncrementalResponses);
      this._processPayloadFollowups(payloadFollowups);
    }

    if (incrementalResponses.length > 0) {
      const payloadFollowups = this._processIncrementalResponses(
        incrementalResponses,
      );

      this._processPayloadFollowups(payloadFollowups);
    }
    if (this._isSubscriptionOperation) {
      // We attach the id to allow the `requestSubscription` to read from the store using
      // the current id in its `onNext` callback
      if (responsesWithData[0].extensions == null) {
        // $FlowFixMe[cannot-write]
        responsesWithData[0].extensions = {
          __relay_subscription_root_id: this._operation.fragment.dataID,
        };
      } else {
        responsesWithData[0].extensions.__relay_subscription_root_id = this._operation.fragment.dataID;
      }
    }

    // OK: run once after each new payload
    // If we have non-incremental responses, we passing `this._operation` to
    // the publish queue here, which will later be passed to the store (via
    // notify) to indicate that this operation caused the store to update
    const updatedOwners = this._runPublishQueue(
      hasNonIncrementalResponses ? this._operation : undefined,
    );

    if (hasNonIncrementalResponses) {
      if (this._incrementalPayloadsPending) {
        this._retainData();
      }
    }
    this._updateOperationTracker(updatedOwners);
    this._sink.next(response);
  }

  _processOptimisticResponse(
    response: ?GraphQLResponseWithData,
    updater: ?SelectorStoreUpdater,
    treatMissingFieldsAsNull: boolean,
  ): void {
    invariant(
      this._optimisticUpdates === null,
      'OperationExecutor: environment.execute: only support one optimistic response per ' +
        'execute.',
    );
    if (response == null && updater == null) {
      return;
    }
    const optimisticUpdates: Array<OptimisticUpdate> = [];
    if (response) {
      const payload = normalizeResponse(
        response,
        this._operation.root,
        ROOT_TYPE,
        {
          actorIdentifier: this._actorIdentifier,
          getDataID: this._getDataID,
          path: [],
          reactFlightPayloadDeserializer:
            this._reactFlightPayloadDeserializer != null
              ? this._deserializeReactFlightPayloadWithLogging
              : null,
          reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
          shouldProcessClientComponents: this._shouldProcessClientComponents,
          treatMissingFieldsAsNull,
        },
      );
      validateOptimisticResponsePayload(payload);
      optimisticUpdates.push({
        operation: this._operation,
        payload,
        updater,
      });
      this._processOptimisticFollowups(payload, optimisticUpdates);
    } else if (updater) {
      optimisticUpdates.push({
        operation: this._operation,
        payload: {
          errors: null,
          fieldPayloads: null,
          incrementalPlaceholders: null,
          followupPayloads: null,
          source: RelayRecordSource.create(),
          isFinal: false,
        },
        updater: updater,
      });
    }
    this._optimisticUpdates = optimisticUpdates;
    optimisticUpdates.forEach(update =>
      this._getPublishQueueAndSaveActor().applyUpdate(update),
    );
    // OK: only called on construction and when receiving an optimistic payload from network,
    // which doesn't fall-through to the regular next() handling
    this._runPublishQueue();
  }

  _processOptimisticFollowups(
    payload: RelayResponsePayload,
    optimisticUpdates: Array<OptimisticUpdate>,
  ): void {
    if (payload.followupPayloads && payload.followupPayloads.length) {
      const followupPayloads = payload.followupPayloads;
      for (const followupPayload of followupPayloads) {
        switch (followupPayload.kind) {
          case 'ModuleImportPayload':
            const operationLoader = this._expectOperationLoader();
            const operation = operationLoader.get(
              followupPayload.operationReference,
            );
            if (operation == null) {
              this._processAsyncOptimisticModuleImport(followupPayload);
            } else {
              const moduleImportOptimisticUpdates = this._processOptimisticModuleImport(
                operation,
                followupPayload,
              );
              optimisticUpdates.push(...moduleImportOptimisticUpdates);
            }
            break;
          case 'ActorPayload':
            warning(
              false,
              'OperationExecutor: Unexpected optimistic ActorPayload. These updates are not supported.',
            );
            break;
          default:
            (followupPayload: empty);
            invariant(
              false,
              'OperationExecutor: Unexpected followup kind `%s`. when processing optimistic updates.',
              followupPayload.kind,
            );
        }
      }
    }
  }

  /**
   * Normalize Data for @module payload, and actor-specific payload
   */
  _normalizeFollowupPayload(
    followupPayload: FollowupPayload,
    normalizationNode: NormalizationSelectableNode,
  ) {
    let variables;
    if (
      normalizationNode.kind === 'SplitOperation' &&
      followupPayload.kind === 'ModuleImportPayload'
    ) {
      variables = getLocalVariables(
        followupPayload.variables,
        normalizationNode.argumentDefinitions,
        followupPayload.args,
      );
    } else {
      variables = followupPayload.variables;
    }
    const selector = createNormalizationSelector(
      normalizationNode,
      followupPayload.dataID,
      variables,
    );
    return normalizeResponse(
      {data: followupPayload.data},
      selector,
      followupPayload.typeName,
      {
        actorIdentifier: this._actorIdentifier,
        getDataID: this._getDataID,
        path: followupPayload.path,
        reactFlightPayloadDeserializer:
          this._reactFlightPayloadDeserializer != null
            ? this._deserializeReactFlightPayloadWithLogging
            : null,
        reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
        treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
        shouldProcessClientComponents: this._shouldProcessClientComponents,
      },
    );
  }

  _processOptimisticModuleImport(
    normalizationRootNode: NormalizationRootNode,
    moduleImportPayload: ModuleImportPayload,
  ): $ReadOnlyArray<OptimisticUpdate> {
    const operation = getOperation(normalizationRootNode);
    const optimisticUpdates = [];
    const modulePayload = this._normalizeFollowupPayload(
      moduleImportPayload,
      operation,
    );
    validateOptimisticResponsePayload(modulePayload);
    optimisticUpdates.push({
      operation: this._operation,
      payload: modulePayload,
      updater: null,
    });
    this._processOptimisticFollowups(modulePayload, optimisticUpdates);
    return optimisticUpdates;
  }

  _processAsyncOptimisticModuleImport(
    moduleImportPayload: ModuleImportPayload,
  ): void {
    this._expectOperationLoader()
      .load(moduleImportPayload.operationReference)
      .then(operation => {
        if (operation == null || this._state !== 'started') {
          return;
        }
        const moduleImportOptimisticUpdates = this._processOptimisticModuleImport(
          operation,
          moduleImportPayload,
        );
        moduleImportOptimisticUpdates.forEach(update =>
          this._getPublishQueueAndSaveActor().applyUpdate(update),
        );
        if (this._optimisticUpdates == null) {
          warning(
            false,
            'OperationExecutor: Unexpected ModuleImport optimistic ' +
              'update in operation %s.' +
              this._operation.request.node.params.name,
          );
        } else {
          this._optimisticUpdates.push(...moduleImportOptimisticUpdates);
          // OK: always have to run() after an module import resolves async
          this._runPublishQueue();
        }
      });
  }

  _processResponses(
    responses: $ReadOnlyArray<GraphQLResponseWithData>,
  ): $ReadOnlyArray<RelayResponsePayload> {
    if (this._optimisticUpdates !== null) {
      this._optimisticUpdates.forEach(update => {
        this._getPublishQueueAndSaveActor().revertUpdate(update);
      });
      this._optimisticUpdates = null;
    }

    this._incrementalPayloadsPending = false;
    this._incrementalResults.clear();
    this._source.clear();
    return responses.map(payloadPart => {
      const relayPayload = normalizeResponse(
        payloadPart,
        this._operation.root,
        ROOT_TYPE,
        {
          actorIdentifier: this._actorIdentifier,
          getDataID: this._getDataID,
          path: [],
          reactFlightPayloadDeserializer:
            this._reactFlightPayloadDeserializer != null
              ? this._deserializeReactFlightPayloadWithLogging
              : null,
          reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
          treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
          shouldProcessClientComponents: this._shouldProcessClientComponents,
        },
      );
      this._getPublishQueueAndSaveActor().commitPayload(
        this._operation,
        relayPayload,
        this._updater,
      );

      return relayPayload;
    });
  }

  /**
   * Handles any follow-up actions for a Relay payload for @match, @defer,
   * and @stream directives.
   */
  _processPayloadFollowups(
    payloads: $ReadOnlyArray<RelayResponsePayload>,
  ): void {
    if (this._state === 'completed') {
      return;
    }
    payloads.forEach(payload => {
      const {incrementalPlaceholders, followupPayloads, isFinal} = payload;
      this._state = isFinal ? 'loading_final' : 'loading_incremental';
      this._updateActiveState();
      if (isFinal) {
        this._incrementalPayloadsPending = false;
      }
      if (followupPayloads && followupPayloads.length !== 0) {
        followupPayloads.forEach(followupPayload => {
          const prevActorIdentifier = this._actorIdentifier;
          this._actorIdentifier =
            followupPayload.actorIdentifier ?? this._actorIdentifier;
          this._processFollowupPayload(followupPayload);
          this._actorIdentifier = prevActorIdentifier;
        });
      }

      if (incrementalPlaceholders && incrementalPlaceholders.length !== 0) {
        this._incrementalPayloadsPending = this._state !== 'loading_final';
        incrementalPlaceholders.forEach(incrementalPlaceholder => {
          const prevActorIdentifier = this._actorIdentifier;
          this._actorIdentifier =
            incrementalPlaceholder.actorIdentifier ?? this._actorIdentifier;
          this._processIncrementalPlaceholder(payload, incrementalPlaceholder);
          this._actorIdentifier = prevActorIdentifier;
        });

        if (this._isClientPayload || this._state === 'loading_final') {
          // The query has defer/stream selections that are enabled, but either
          // the server indicated that this is a "final" payload: no incremental
          // payloads will be delivered, then warn that the query was (likely)
          // executed on the server in non-streaming mode, with incremental
          // delivery disabled; or this is a client payload, and there will be
          // no incremental payload.
          warning(
            this._isClientPayload,
            'RelayModernEnvironment: Operation `%s` contains @defer/@stream ' +
              'directives but was executed in non-streaming mode. See ' +
              'https://fburl.com/relay-incremental-delivery-non-streaming-warning.',
            this._operation.request.node.params.name,
          );
          // But eagerly process any deferred payloads
          const relayPayloads = [];
          incrementalPlaceholders.forEach(placeholder => {
            if (placeholder.kind === 'defer') {
              relayPayloads.push(
                this._processDeferResponse(
                  placeholder.label,
                  placeholder.path,
                  placeholder,
                  {data: placeholder.data},
                ),
              );
            }
          });
          if (relayPayloads.length > 0) {
            this._processPayloadFollowups(relayPayloads);
          }
        }
      }
    });
  }

  _maybeCompleteSubscriptionOperationTracking() {
    if (!this._isSubscriptionOperation) {
      return;
    }
    if (
      this._pendingModulePayloadsCount === 0 &&
      this._incrementalPayloadsPending === false
    ) {
      this._completeOperationTracker();
    }
  }

  /**
   * Processes a ModuleImportPayload, asynchronously resolving the normalization
   * AST and using it to normalize the field data into a RelayResponsePayload.
   * The resulting payload may contain other incremental payloads (match,
   * defer, stream, etc); these are handled by calling
   * `_processPayloadFollowups()`.
   */
  _processFollowupPayload(followupPayload: FollowupPayload): void {
    switch (followupPayload.kind) {
      case 'ModuleImportPayload':
        const operationLoader = this._expectOperationLoader();
        const node = operationLoader.get(followupPayload.operationReference);
        if (node != null) {
          // If the operation module is available synchronously, normalize the
          // data synchronously.
          this._processFollowupPayloadWithNormalizationNode(
            followupPayload,
            getOperation(node),
          );
        } else {
          // Otherwise load the operation module and schedule a task to normalize
          // the data when the module is available.
          const id = this._nextSubscriptionId++;
          this._pendingModulePayloadsCount++;

          const decrementPendingCount = () => {
            this._pendingModulePayloadsCount--;
            this._maybeCompleteSubscriptionOperationTracking();
          };

          // Observable.from(operationLoader.load()) wouldn't catch synchronous
          // errors thrown by the load function, which is user-defined. Guard
          // against that with Observable.from(new Promise(<work>)).
          const networkObservable = RelayObservable.from(
            new Promise((resolve, reject) => {
              operationLoader
                .load(followupPayload.operationReference)
                .then(resolve, reject);
            }),
          );
          RelayObservable.create(sink => {
            let cancellationToken;
            const subscription = networkObservable.subscribe({
              next: (loadedNode: ?NormalizationRootNode) => {
                if (loadedNode != null) {
                  const publishModuleImportPayload = () => {
                    try {
                      const operation = getOperation(loadedNode);
                      const batchAsyncModuleUpdatesFN =
                        RelayFeatureFlags.BATCH_ASYNC_MODULE_UPDATES_FN;
                      const shouldScheduleAsyncStoreUpdate =
                        batchAsyncModuleUpdatesFN != null &&
                        this._pendingModulePayloadsCount > 1;
                      const [duration] = withDuration(() => {
                        this._handleFollowupPayload(followupPayload, operation);
                        // OK: always have to run after an async module import resolves
                        if (shouldScheduleAsyncStoreUpdate) {
                          this._scheduleAsyncStoreUpdate(
                            // $FlowFixMe[incompatible-call] `shouldScheduleAsyncStoreUpdate` check should cover `null` case
                            batchAsyncModuleUpdatesFN,
                            sink.complete,
                          );
                        } else {
                          const updatedOwners = this._runPublishQueue();
                          this._updateOperationTracker(updatedOwners);
                        }
                      });
                      this._log({
                        name: 'execute.async.module',
                        executeId: this._executeId,
                        operationName: operation.name,
                        duration,
                      });
                      if (!shouldScheduleAsyncStoreUpdate) {
                        sink.complete();
                      }
                    } catch (error) {
                      sink.error(error);
                    }
                  };
                  const scheduler = this._scheduler;
                  if (scheduler == null) {
                    publishModuleImportPayload();
                  } else {
                    cancellationToken = scheduler.schedule(
                      publishModuleImportPayload,
                    );
                  }
                } else {
                  sink.complete();
                }
              },
              error: sink.error,
            });
            return () => {
              subscription.unsubscribe();
              if (this._scheduler != null && cancellationToken != null) {
                this._scheduler.cancel(cancellationToken);
              }
            };
          }).subscribe({
            complete: () => {
              this._complete(id);
              decrementPendingCount();
            },
            error: error => {
              this._error(error);
              decrementPendingCount();
            },
            start: subscription => this._start(id, subscription),
          });
        }
        break;
      case 'ActorPayload':
        this._processFollowupPayloadWithNormalizationNode(
          followupPayload,
          followupPayload.node,
        );
        break;
      default:
        (followupPayload: empty);
        invariant(
          false,
          'OperationExecutor: Unexpected followup kind `%s`.',
          followupPayload.kind,
        );
    }
  }

  _processFollowupPayloadWithNormalizationNode(
    followupPayload: FollowupPayload,
    normalizationNode:
      | NormalizationSplitOperation
      | NormalizationOperation
      | NormalizationLinkedField,
  ) {
    this._handleFollowupPayload(followupPayload, normalizationNode);
    this._maybeCompleteSubscriptionOperationTracking();
  }

  _handleFollowupPayload(
    followupPayload: FollowupPayload,
    normalizationNode:
      | NormalizationSplitOperation
      | NormalizationOperation
      | NormalizationLinkedField,
  ): void {
    const relayPayload = this._normalizeFollowupPayload(
      followupPayload,
      normalizationNode,
    );
    this._getPublishQueueAndSaveActor().commitPayload(
      this._operation,
      relayPayload,
    );
    this._processPayloadFollowups([relayPayload]);
  }

  /**
   * The executor now knows that GraphQL responses are expected for a given
   * label/path:
   * - Store the placeholder in order to process any future responses that may
   *   arrive.
   * - Then process any responses that had already arrived.
   *
   * The placeholder contains the normalization selector, path (for nested
   * defer/stream), and other metadata used to normalize the incremental
   * response(s).
   */
  _processIncrementalPlaceholder(
    relayPayload: RelayResponsePayload,
    placeholder: IncrementalDataPlaceholder,
  ): void {
    // Update the label => path => placeholder map
    const {label, path} = placeholder;
    const pathKey = path.map(String).join('.');
    let resultForLabel = this._incrementalResults.get(label);
    if (resultForLabel == null) {
      resultForLabel = new Map();
      this._incrementalResults.set(label, resultForLabel);
    }
    const resultForPath = resultForLabel.get(pathKey);
    const pendingResponses =
      resultForPath != null && resultForPath.kind === 'response'
        ? resultForPath.responses
        : null;
    resultForLabel.set(pathKey, {kind: 'placeholder', placeholder});

    // Store references to the parent node to allow detecting concurrent
    // modifications to the parent before items arrive and to replay
    // handle field payloads to account for new information on source records.
    let parentID;
    if (placeholder.kind === 'stream') {
      parentID = placeholder.parentID;
    } else if (placeholder.kind === 'defer') {
      parentID = placeholder.selector.dataID;
    } else {
      (placeholder: empty);
      invariant(
        false,
        'OperationExecutor: Unsupported incremental placeholder kind `%s`.',
        placeholder.kind,
      );
    }
    const parentRecord = relayPayload.source.get(parentID);
    const parentPayloads = (relayPayload.fieldPayloads ?? []).filter(
      fieldPayload => {
        const fieldID = generateClientID(
          fieldPayload.dataID,
          fieldPayload.fieldKey,
        );
        return (
          // handlers applied to the streamed field itself
          fieldPayload.dataID === parentID ||
          // handlers applied to a field on an ancestor object, where
          // ancestor.field links to the parent record (example: connections)
          fieldID === parentID
        );
      },
    );
    // If an incremental payload exists for some id that record should also
    // exist.
    invariant(
      parentRecord != null,
      'OperationExecutor: Expected record `%s` to exist.',
      parentID,
    );
    let nextParentRecord;
    let nextParentPayloads;
    const previousParentEntry = this._source.get(parentID);
    if (previousParentEntry != null) {
      // If a previous entry exists, merge the previous/next records and
      // payloads together.
      nextParentRecord = RelayModernRecord.update(
        previousParentEntry.record,
        parentRecord,
      );
      const handlePayloads = new Map();
      const dedupePayload = payload => {
        const key = stableStringify(payload);
        handlePayloads.set(key, payload);
      };
      previousParentEntry.fieldPayloads.forEach(dedupePayload);
      parentPayloads.forEach(dedupePayload);
      nextParentPayloads = Array.from(handlePayloads.values());
    } else {
      nextParentRecord = parentRecord;
      nextParentPayloads = parentPayloads;
    }
    this._source.set(parentID, {
      record: nextParentRecord,
      fieldPayloads: nextParentPayloads,
    });

    // If there were any queued responses, process them now that placeholders
    // are in place
    if (pendingResponses != null) {
      const payloadFollowups = this._processIncrementalResponses(
        pendingResponses,
      );
      this._processPayloadFollowups(payloadFollowups);
    }
  }

  /**
   * Lookup the placeholder the describes how to process an incremental
   * response, normalize/publish it, and process any nested defer/match/stream
   * metadata.
   */
  _processIncrementalResponses(
    incrementalResponses: $ReadOnlyArray<IncrementalGraphQLResponse>,
  ): $ReadOnlyArray<RelayResponsePayload> {
    const relayPayloads = [];
    incrementalResponses.forEach(incrementalResponse => {
      const {label, path, response} = incrementalResponse;
      let resultForLabel = this._incrementalResults.get(label);
      if (resultForLabel == null) {
        resultForLabel = new Map();
        this._incrementalResults.set(label, resultForLabel);
      }

      if (label.indexOf('$defer$') !== -1) {
        const pathKey = path.map(String).join('.');
        let resultForPath = resultForLabel.get(pathKey);
        if (resultForPath == null) {
          resultForPath = {kind: 'response', responses: [incrementalResponse]};
          resultForLabel.set(pathKey, resultForPath);
          return;
        } else if (resultForPath.kind === 'response') {
          resultForPath.responses.push(incrementalResponse);
          return;
        }
        const placeholder = resultForPath.placeholder;
        invariant(
          placeholder.kind === 'defer',
          'OperationExecutor: Expected data for path `%s` for label `%s` ' +
            'to be data for @defer, was `@%s`.',
          pathKey,
          label,
          placeholder.kind,
        );
        relayPayloads.push(
          this._processDeferResponse(label, path, placeholder, response),
        );
      } else {
        // @stream payload path values end in the field name and item index,
        // but Relay records paths relative to the parent of the stream node:
        // therefore we strip the last two elements just to lookup the path
        // (the item index is used later to insert the element in the list)
        const pathKey = path
          .slice(0, -2)
          .map(String)
          .join('.');
        let resultForPath = resultForLabel.get(pathKey);
        if (resultForPath == null) {
          resultForPath = {kind: 'response', responses: [incrementalResponse]};
          resultForLabel.set(pathKey, resultForPath);
          return;
        } else if (resultForPath.kind === 'response') {
          resultForPath.responses.push(incrementalResponse);
          return;
        }
        const placeholder = resultForPath.placeholder;
        invariant(
          placeholder.kind === 'stream',
          'OperationExecutor: Expected data for path `%s` for label `%s` ' +
            'to be data for @stream, was `@%s`.',
          pathKey,
          label,
          placeholder.kind,
        );
        relayPayloads.push(
          this._processStreamResponse(label, path, placeholder, response),
        );
      }
    });
    return relayPayloads;
  }

  _processDeferResponse(
    label: string,
    path: $ReadOnlyArray<mixed>,
    placeholder: DeferPlaceholder,
    response: GraphQLResponseWithData,
  ): RelayResponsePayload {
    const {dataID: parentID} = placeholder.selector;
    const prevActorIdentifier = this._actorIdentifier;
    this._actorIdentifier =
      placeholder.actorIdentifier ?? this._actorIdentifier;
    const relayPayload = normalizeResponse(
      response,
      placeholder.selector,
      placeholder.typeName,
      {
        actorIdentifier: this._actorIdentifier,
        getDataID: this._getDataID,
        path: placeholder.path,
        reactFlightPayloadDeserializer:
          this._reactFlightPayloadDeserializer != null
            ? this._deserializeReactFlightPayloadWithLogging
            : null,
        reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
        treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
        shouldProcessClientComponents: this._shouldProcessClientComponents,
      },
    );
    this._getPublishQueueAndSaveActor().commitPayload(
      this._operation,
      relayPayload,
    );

    // Load the version of the parent record from which this incremental data
    // was derived
    const parentEntry = this._source.get(parentID);
    invariant(
      parentEntry != null,
      'OperationExecutor: Expected the parent record `%s` for @defer ' +
        'data to exist.',
      parentID,
    );
    const {fieldPayloads} = parentEntry;
    if (fieldPayloads.length !== 0) {
      const handleFieldsRelayPayload = {
        errors: null,
        fieldPayloads,
        incrementalPlaceholders: null,
        followupPayloads: null,
        source: RelayRecordSource.create(),
        isFinal: response.extensions?.is_final === true,
      };
      this._getPublishQueueAndSaveActor().commitPayload(
        this._operation,
        handleFieldsRelayPayload,
      );
    }

    this._actorIdentifier = prevActorIdentifier;
    return relayPayload;
  }

  /**
   * Process the data for one item in a @stream field.
   */
  _processStreamResponse(
    label: string,
    path: $ReadOnlyArray<mixed>,
    placeholder: StreamPlaceholder,
    response: GraphQLResponseWithData,
  ): RelayResponsePayload {
    const {parentID, node, variables, actorIdentifier} = placeholder;
    const prevActorIdentifier = this._actorIdentifier;
    this._actorIdentifier = actorIdentifier ?? this._actorIdentifier;
    // Find the LinkedField where @stream was applied
    const field = node.selections[0];
    invariant(
      field != null && field.kind === 'LinkedField' && field.plural === true,
      'OperationExecutor: Expected @stream to be used on a plural field.',
    );
    const {
      fieldPayloads,
      itemID,
      itemIndex,
      prevIDs,
      relayPayload,
      storageKey,
    } = this._normalizeStreamItem(
      response,
      parentID,
      field,
      variables,
      path,
      placeholder.path,
    );
    // Publish the new item and update the parent record to set
    // field[index] = item *if* the parent record hasn't been concurrently
    // modified.
    this._getPublishQueueAndSaveActor().commitPayload(
      this._operation,
      relayPayload,
      store => {
        const currentParentRecord = store.get(parentID);
        if (currentParentRecord == null) {
          // parent has since been deleted, stream data is stale
          return;
        }
        const currentItems = currentParentRecord.getLinkedRecords(storageKey);
        if (currentItems == null) {
          // field has since been deleted, stream data is stale
          return;
        }
        if (
          currentItems.length !== prevIDs.length ||
          currentItems.some(
            (currentItem, index) =>
              prevIDs[index] !== (currentItem && currentItem.getDataID()),
          )
        ) {
          // field has been modified by something other than this query,
          // stream data is stale
          return;
        }
        // parent.field has not been concurrently modified:
        // update `parent.field[index] = item`
        const nextItems = [...currentItems];
        nextItems[itemIndex] = store.get(itemID);
        currentParentRecord.setLinkedRecords(nextItems, storageKey);
      },
    );

    // Now that the parent record has been updated to include the new item,
    // also update any handle fields that are derived from the parent record.
    if (fieldPayloads.length !== 0) {
      const handleFieldsRelayPayload = {
        errors: null,
        fieldPayloads,
        incrementalPlaceholders: null,
        followupPayloads: null,
        source: RelayRecordSource.create(),
        isFinal: false,
      };
      this._getPublishQueueAndSaveActor().commitPayload(
        this._operation,
        handleFieldsRelayPayload,
      );
    }

    this._actorIdentifier = prevActorIdentifier;
    return relayPayload;
  }

  _normalizeStreamItem(
    response: GraphQLResponseWithData,
    parentID: DataID,
    field: NormalizationLinkedField,
    variables: Variables,
    path: $ReadOnlyArray<mixed>,
    normalizationPath: $ReadOnlyArray<string>,
  ): {|
    fieldPayloads: Array<HandleFieldPayload>,
    itemID: DataID,
    itemIndex: number,
    prevIDs: Array<?DataID>,
    relayPayload: RelayResponsePayload,
    storageKey: string,
  |} {
    const {data} = response;
    invariant(
      typeof data === 'object',
      'OperationExecutor: Expected the GraphQL @stream payload `data` ' +
        'value to be an object.',
    );
    const responseKey = field.alias ?? field.name;
    const storageKey = getStorageKey(field, variables);

    // Load the version of the parent record from which this incremental data
    // was derived
    const parentEntry = this._source.get(parentID);
    invariant(
      parentEntry != null,
      'OperationExecutor: Expected the parent record `%s` for @stream ' +
        'data to exist.',
      parentID,
    );
    const {record: parentRecord, fieldPayloads} = parentEntry;

    // Load the field value (items) that were created by *this* query executor
    // in order to check if there has been any concurrent modifications by some
    // other operation.
    const prevIDs = RelayModernRecord.getLinkedRecordIDs(
      parentRecord,
      storageKey,
    );
    invariant(
      prevIDs != null,
      'OperationExecutor: Expected record `%s` to have fetched field ' +
        '`%s` with @stream.',
      parentID,
      field.name,
    );

    // Determine the index in the field of the new item
    const finalPathEntry = path[path.length - 1];
    const itemIndex = parseInt(finalPathEntry, 10);
    invariant(
      itemIndex === finalPathEntry && itemIndex >= 0,
      'OperationExecutor: Expected path for @stream to end in a ' +
        'positive integer index, got `%s`',
      finalPathEntry,
    );

    const typeName = field.concreteType ?? data[TYPENAME_KEY];
    invariant(
      typeof typeName === 'string',
      'OperationExecutor: Expected @stream field `%s` to have a ' +
        '__typename.',
      field.name,
    );

    // Determine the __id of the new item: this must equal the value that would
    // be assigned had the item not been streamed
    const itemID =
      // https://github.com/prettier/prettier/issues/6403
      // prettier-ignore
      (this._getDataID(data, typeName) ??
        (prevIDs && prevIDs[itemIndex])) || // Reuse previously generated client IDs
      generateClientID(parentID, storageKey, itemIndex);
    invariant(
      typeof itemID === 'string',
      'OperationExecutor: Expected id of elements of field `%s` to ' +
        'be strings.',
      storageKey,
    );

    // Build a selector to normalize the item data with
    const selector = createNormalizationSelector(field, itemID, variables);

    // Update the cached version of the parent record to reflect the new item:
    // this is used when subsequent stream payloads arrive to see if there
    // have been concurrent modifications to the list
    const nextParentRecord = RelayModernRecord.clone(parentRecord);
    const nextIDs = [...prevIDs];
    nextIDs[itemIndex] = itemID;
    RelayModernRecord.setLinkedRecordIDs(nextParentRecord, storageKey, nextIDs);
    this._source.set(parentID, {
      record: nextParentRecord,
      fieldPayloads,
    });
    const relayPayload = normalizeResponse(response, selector, typeName, {
      actorIdentifier: this._actorIdentifier,
      getDataID: this._getDataID,
      path: [...normalizationPath, responseKey, String(itemIndex)],
      reactFlightPayloadDeserializer:
        this._reactFlightPayloadDeserializer != null
          ? this._deserializeReactFlightPayloadWithLogging
          : null,
      reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
      treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
      shouldProcessClientComponents: this._shouldProcessClientComponents,
    });
    return {
      fieldPayloads,
      itemID,
      itemIndex,
      prevIDs,
      relayPayload,
      storageKey,
    };
  }

  _scheduleAsyncStoreUpdate(
    scheduleFn: (() => void) => Disposable,
    completeFn: () => void,
  ): void {
    this._completeFns.push(completeFn);
    if (this._asyncStoreUpdateDisposable != null) {
      return;
    }
    this._asyncStoreUpdateDisposable = scheduleFn(() => {
      this._asyncStoreUpdateDisposable = null;
      const updatedOwners = this._runPublishQueue();
      this._updateOperationTracker(updatedOwners);
      for (const complete of this._completeFns) {
        complete();
      }
      this._completeFns = [];
    });
  }

  _updateOperationTracker(
    updatedOwners: ?$ReadOnlyArray<RequestDescriptor>,
  ): void {
    if (updatedOwners != null && updatedOwners.length > 0) {
      this._operationTracker.update(
        this._operation.request,
        new Set(updatedOwners),
      );
    }
  }

  _completeOperationTracker() {
    this._operationTracker.complete(this._operation.request);
  }

  _getPublishQueueAndSaveActor(): PublishQueue {
    this._seenActors.add(this._actorIdentifier);
    return this._getPublishQueue(this._actorIdentifier);
  }

  _getActorsToVisit(): $ReadOnlySet<ActorIdentifier> {
    if (this._seenActors.size === 0) {
      return new Set([this._actorIdentifier]);
    } else {
      return this._seenActors;
    }
  }

  _runPublishQueue(
    operation?: OperationDescriptor,
  ): $ReadOnlyArray<RequestDescriptor> {
    const updatedOwners = new Set();
    for (const actorIdentifier of this._getActorsToVisit()) {
      const owners = this._getPublishQueue(actorIdentifier).run(operation);
      owners.forEach(owner => updatedOwners.add(owner));
    }
    return Array.from(updatedOwners);
  }

  _retainData() {
    for (const actorIdentifier of this._getActorsToVisit()) {
      if (!this._retainDisposables.has(actorIdentifier)) {
        this._retainDisposables.set(
          actorIdentifier,
          this._getStore(actorIdentifier).retain(this._operation),
        );
      }
    }
  }

  _disposeRetainedData() {
    for (const disposable of this._retainDisposables.values()) {
      disposable.dispose();
    }
    this._retainDisposables.clear();
  }

  _expectOperationLoader(): OperationLoader {
    const operationLoader = this._operationLoader;
    invariant(
      operationLoader,
      'OperationExecutor: Expected an operationLoader to be ' +
        'configured when using `@match`.',
    );
    return operationLoader;
  }
}

function partitionGraphQLResponses(
  responses: $ReadOnlyArray<GraphQLResponseWithData>,
): [
  $ReadOnlyArray<GraphQLResponseWithData>,
  $ReadOnlyArray<IncrementalGraphQLResponse>,
] {
  const nonIncrementalResponses: Array<GraphQLResponseWithData> = [];
  const incrementalResponses: Array<IncrementalGraphQLResponse> = [];
  responses.forEach(response => {
    if (response.path != null || response.label != null) {
      const {label, path} = response;
      if (label == null || path == null) {
        invariant(
          false,
          'OperationExecutor: invalid incremental payload, expected ' +
            '`path` and `label` to either both be null/undefined, or ' +
            '`path` to be an `Array<string | number>` and `label` to be a ' +
            '`string`.',
        );
      }
      incrementalResponses.push({
        label,
        path,
        response,
      });
    } else {
      nonIncrementalResponses.push(response);
    }
  });
  return [nonIncrementalResponses, incrementalResponses];
}

function normalizeResponse(
  response: GraphQLResponseWithData,
  selector: NormalizationSelector,
  typeName: string,
  options: NormalizationOptions,
): RelayResponsePayload {
  const {data, errors} = response;
  const source = RelayRecordSource.create();
  const record = RelayModernRecord.create(selector.dataID, typeName);
  source.set(selector.dataID, record);
  const relayPayload = RelayResponseNormalizer.normalize(
    source,
    selector,
    data,
    options,
  );
  return {
    ...relayPayload,
    errors,
    isFinal: response.extensions?.is_final === true,
  };
}

function stableStringify(value: mixed): string {
  return JSON.stringify(stableCopy(value)) ?? ''; // null-check for flow
}

function validateOptimisticResponsePayload(
  payload: RelayResponsePayload,
): void {
  const {incrementalPlaceholders} = payload;
  if (incrementalPlaceholders != null && incrementalPlaceholders.length !== 0) {
    invariant(
      false,
      'OperationExecutor: optimistic responses cannot be returned ' +
        'for operations that use incremental data delivery (@defer, ' +
        '@stream, and @stream_connection).',
    );
  }
}

module.exports = {
  execute,
};
