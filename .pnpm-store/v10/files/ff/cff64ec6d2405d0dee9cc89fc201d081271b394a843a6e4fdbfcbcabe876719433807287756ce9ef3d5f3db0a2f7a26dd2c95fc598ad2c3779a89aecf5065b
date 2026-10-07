/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @emails oncall+relay
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const OperationExecutor = require('./OperationExecutor');
const RelayDefaultHandlerProvider = require('../handlers/RelayDefaultHandlerProvider');
const RelayFeatureFlags = require('../util/RelayFeatureFlags');
const RelayObservable = require('../network/RelayObservable');
const RelayOperationTracker = require('../store/RelayOperationTracker');
const RelayPublishQueue = require('./RelayPublishQueue');
const RelayRecordSource = require('./RelayRecordSource');

const defaultGetDataID = require('./defaultGetDataID');
const defaultRequiredFieldLogger = require('./defaultRequiredFieldLogger');
const invariant = require('invariant');
const registerEnvironmentWithDevTools = require('../util/registerEnvironmentWithDevTools');
const wrapNetworkWithLogObserver = require('../network/wrapNetworkWithLogObserver');

const {
  INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
  assertInternalActorIndentifier,
} = require('../multi-actor-environment/ActorIdentifier');

import type {HandlerProvider} from '../handlers/RelayDefaultHandlerProvider';
import type {ActorIdentifier} from '../multi-actor-environment/ActorIdentifier';
import type {
  GraphQLResponse,
  INetwork,
  PayloadData,
} from '../network/RelayNetworkTypes';
import type {Disposable, RenderPolicy} from '../util/RelayRuntimeTypes';
import type {ActiveState, TaskScheduler} from './OperationExecutor';
import type {GetDataID} from './RelayResponseNormalizer';
import type {
  ExecuteMutationConfig,
  IEnvironment,
  LogFunction,
  MissingFieldHandler,
  OperationAvailability,
  OperationDescriptor,
  OperationLoader,
  OperationTracker,
  OptimisticResponseConfig,
  OptimisticUpdateFunction,
  PublishQueue,
  ReactFlightPayloadDeserializer,
  ReactFlightServerErrorHandler,
  RequiredFieldLogger,
  SelectorStoreUpdater,
  SingularReaderSelector,
  Snapshot,
  Store,
  StoreUpdater,
} from './RelayStoreTypes';

export type EnvironmentConfig = {|
  +configName?: string,
  +handlerProvider?: ?HandlerProvider,
  +treatMissingFieldsAsNull?: boolean,
  +log?: ?LogFunction,
  +operationLoader?: ?OperationLoader,
  +reactFlightPayloadDeserializer?: ?ReactFlightPayloadDeserializer,
  +reactFlightServerErrorHandler?: ?ReactFlightServerErrorHandler,
  +network: INetwork,
  +scheduler?: ?TaskScheduler,
  +store: Store,
  +missingFieldHandlers?: ?$ReadOnlyArray<MissingFieldHandler>,
  +operationTracker?: ?OperationTracker,
  +getDataID?: ?GetDataID,
  +UNSTABLE_defaultRenderPolicy?: ?RenderPolicy,
  +options?: mixed,
  +isServer?: boolean,
  +requiredFieldLogger?: ?RequiredFieldLogger,
  +shouldProcessClientComponents?: ?boolean,
|};

class RelayModernEnvironment implements IEnvironment {
  __log: LogFunction;
  +_defaultRenderPolicy: RenderPolicy;
  _operationLoader: ?OperationLoader;
  _reactFlightPayloadDeserializer: ?ReactFlightPayloadDeserializer;
  _reactFlightServerErrorHandler: ?ReactFlightServerErrorHandler;
  _shouldProcessClientComponents: ?boolean;
  _network: INetwork;
  _publishQueue: PublishQueue;
  _scheduler: ?TaskScheduler;
  _store: Store;
  configName: ?string;
  _missingFieldHandlers: ?$ReadOnlyArray<MissingFieldHandler>;
  _operationTracker: OperationTracker;
  _getDataID: GetDataID;
  _treatMissingFieldsAsNull: boolean;
  _operationExecutions: Map<string, ActiveState>;
  +options: mixed;
  +_isServer: boolean;
  requiredFieldLogger: RequiredFieldLogger;

  constructor(config: EnvironmentConfig) {
    this.configName = config.configName;
    this._treatMissingFieldsAsNull = config.treatMissingFieldsAsNull === true;
    const operationLoader = config.operationLoader;
    const reactFlightPayloadDeserializer =
      config.reactFlightPayloadDeserializer;
    const reactFlightServerErrorHandler = config.reactFlightServerErrorHandler;
    if (__DEV__) {
      if (operationLoader != null) {
        invariant(
          typeof operationLoader === 'object' &&
            typeof operationLoader.get === 'function' &&
            typeof operationLoader.load === 'function',
          'RelayModernEnvironment: Expected `operationLoader` to be an object ' +
            'with get() and load() functions, got `%s`.',
          operationLoader,
        );
      }
      if (reactFlightPayloadDeserializer != null) {
        invariant(
          typeof reactFlightPayloadDeserializer === 'function',
          'RelayModernEnvironment: Expected `reactFlightPayloadDeserializer` ' +
            ' to be a function, got `%s`.',
          reactFlightPayloadDeserializer,
        );
      }
    }
    this.__log = config.log ?? emptyFunction;
    this.requiredFieldLogger =
      config.requiredFieldLogger ?? defaultRequiredFieldLogger;
    this._defaultRenderPolicy =
      config.UNSTABLE_defaultRenderPolicy ??
      RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT === true
        ? 'partial'
        : 'full';
    this._operationLoader = operationLoader;
    this._operationExecutions = new Map();
    this._network = wrapNetworkWithLogObserver(this, config.network);
    this._getDataID = config.getDataID ?? defaultGetDataID;
    this._publishQueue = new RelayPublishQueue(
      config.store,
      config.handlerProvider ?? RelayDefaultHandlerProvider,
      this._getDataID,
    );
    this._scheduler = config.scheduler ?? null;
    this._store = config.store;
    this.options = config.options;
    this._isServer = config.isServer ?? false;

    (this: any).__setNet = newNet =>
      (this._network = wrapNetworkWithLogObserver(this, newNet));

    if (__DEV__) {
      const {inspect} = require('./StoreInspector');
      (this: any).DEBUG_inspect = (dataID: ?string) => inspect(this, dataID);
    }

    this._missingFieldHandlers = config.missingFieldHandlers;
    this._operationTracker =
      config.operationTracker ?? new RelayOperationTracker();
    this._reactFlightPayloadDeserializer = reactFlightPayloadDeserializer;
    this._reactFlightServerErrorHandler = reactFlightServerErrorHandler;
    this._shouldProcessClientComponents = config.shouldProcessClientComponents;

    // Register this Relay Environment with Relay DevTools if it exists.
    // Note: this must always be the last step in the constructor.
    registerEnvironmentWithDevTools(this);
  }

  getStore(): Store {
    return this._store;
  }

  getNetwork(): INetwork {
    return this._network;
  }

  getOperationTracker(): RelayOperationTracker {
    return this._operationTracker;
  }

  isRequestActive(requestIdentifier: string): boolean {
    const activeState = this._operationExecutions.get(requestIdentifier);
    return activeState === 'active';
  }

  UNSTABLE_getDefaultRenderPolicy(): RenderPolicy {
    return this._defaultRenderPolicy;
  }

  applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable {
    const dispose = () => {
      this._scheduleUpdates(() => {
        this._publishQueue.revertUpdate(optimisticUpdate);
        this._publishQueue.run();
      });
    };
    this._scheduleUpdates(() => {
      this._publishQueue.applyUpdate(optimisticUpdate);
      this._publishQueue.run();
    });
    return {dispose};
  }

  revertUpdate(update: OptimisticUpdateFunction): void {
    this._scheduleUpdates(() => {
      this._publishQueue.revertUpdate(update);
      this._publishQueue.run();
    });
  }

  replaceUpdate(
    update: OptimisticUpdateFunction,
    newUpdate: OptimisticUpdateFunction,
  ): void {
    this._scheduleUpdates(() => {
      this._publishQueue.revertUpdate(update);
      this._publishQueue.applyUpdate(newUpdate);
      this._publishQueue.run();
    });
  }

  applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable {
    const subscription = this._execute({
      createSource: () => RelayObservable.create(_sink => {}),
      isClientPayload: false,
      operation: optimisticConfig.operation,
      optimisticConfig,
      updater: null,
    }).subscribe({});
    return {
      dispose: () => subscription.unsubscribe(),
    };
  }

  check(operation: OperationDescriptor): OperationAvailability {
    if (
      this._missingFieldHandlers == null ||
      this._missingFieldHandlers.length === 0
    ) {
      return this._store.check(operation);
    }
    return this._checkSelectorAndHandleMissingFields(
      operation,
      this._missingFieldHandlers,
    );
  }

  commitPayload(operation: OperationDescriptor, payload: PayloadData): void {
    this._execute({
      createSource: () => RelayObservable.from({data: payload}),
      isClientPayload: true,
      operation: operation,
      optimisticConfig: null,
      updater: null,
    }).subscribe({});
  }

  commitUpdate(updater: StoreUpdater): void {
    this._scheduleUpdates(() => {
      this._publishQueue.commitUpdate(updater);
      this._publishQueue.run();
    });
  }

  lookup(readSelector: SingularReaderSelector): Snapshot {
    return this._store.lookup(readSelector);
  }

  subscribe(
    snapshot: Snapshot,
    callback: (snapshot: Snapshot) => void,
  ): Disposable {
    return this._store.subscribe(snapshot, callback);
  }

  retain(operation: OperationDescriptor): Disposable {
    return this._store.retain(operation);
  }

  isServer(): boolean {
    return this._isServer;
  }

  _checkSelectorAndHandleMissingFields(
    operation: OperationDescriptor,
    handlers: $ReadOnlyArray<MissingFieldHandler>,
  ): OperationAvailability {
    const target = RelayRecordSource.create();
    const source = this._store.getSource();
    const result = this._store.check(operation, {
      handlers,
      defaultActorIdentifier: INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      getSourceForActor(actorIdentifier: ActorIdentifier) {
        assertInternalActorIndentifier(actorIdentifier);
        return source;
      },
      getTargetForActor(actorIdentifier: ActorIdentifier) {
        assertInternalActorIndentifier(actorIdentifier);
        return target;
      },
    });
    if (target.size() > 0) {
      this._scheduleUpdates(() => {
        this._publishQueue.commitSource(target);
        this._publishQueue.run();
      });
    }
    return result;
  }

  _scheduleUpdates(task: () => void) {
    const scheduler = this._scheduler;
    if (scheduler != null) {
      scheduler.schedule(task);
    } else {
      task();
    }
  }

  /**
   * Returns an Observable of GraphQLResponse resulting from executing the
   * provided Query or Subscription operation, each result of which is then
   * normalized and committed to the publish queue.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to: environment.execute({...}).subscribe({...}).
   */
  execute({
    operation,
    updater,
  }: {|
    operation: OperationDescriptor,
    updater?: ?SelectorStoreUpdater,
  |}): RelayObservable<GraphQLResponse> {
    return this._execute({
      createSource: () =>
        this._network.execute(
          operation.request.node.params,
          operation.request.variables,
          operation.request.cacheConfig || {},
          null,
        ),
      isClientPayload: false,
      operation,
      optimisticConfig: null,
      updater,
    });
  }

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
  executeMutation({
    operation,
    optimisticResponse,
    optimisticUpdater,
    updater,
    uploadables,
  }: ExecuteMutationConfig): RelayObservable<GraphQLResponse> {
    let optimisticConfig;
    if (optimisticResponse || optimisticUpdater) {
      optimisticConfig = {
        operation: operation,
        response: optimisticResponse,
        updater: optimisticUpdater,
      };
    }
    return this._execute({
      createSource: () =>
        this._network.execute(
          operation.request.node.params,
          operation.request.variables,
          {
            ...operation.request.cacheConfig,
            force: true,
          },
          uploadables,
        ),
      isClientPayload: false,
      operation,
      optimisticConfig,
      updater,
    });
  }

  /**
   * Returns an Observable of GraphQLResponse resulting from executing the
   * provided Query or Subscription operation responses, the result of which is
   * then normalized and committed to the publish queue.
   *
   * Note: Observables are lazy, so calling this method will do nothing until
   * the result is subscribed to:
   * environment.executeWithSource({...}).subscribe({...}).
   */
  executeWithSource({
    operation,
    source,
  }: {|
    operation: OperationDescriptor,
    source: RelayObservable<GraphQLResponse>,
  |}): RelayObservable<GraphQLResponse> {
    return this._execute({
      createSource: () => source,
      isClientPayload: false,
      operation,
      optimisticConfig: null,
      updater: null,
    });
  }

  toJSON(): mixed {
    return `RelayModernEnvironment(${this.configName ?? ''})`;
  }

  _execute({
    createSource,
    isClientPayload,
    operation,
    optimisticConfig,
    updater,
  }: {|
    createSource: () => RelayObservable<GraphQLResponse>,
    isClientPayload: boolean,
    operation: OperationDescriptor,
    optimisticConfig: ?OptimisticResponseConfig,
    updater: ?SelectorStoreUpdater,
  |}): RelayObservable<GraphQLResponse> {
    const publishQueue = this._publishQueue;
    const store = this._store;
    return RelayObservable.create(sink => {
      const executor = OperationExecutor.execute({
        actorIdentifier: INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
        getDataID: this._getDataID,
        isClientPayload,
        log: this.__log,
        operation,
        operationExecutions: this._operationExecutions,
        operationLoader: this._operationLoader,
        operationTracker: this._operationTracker,
        optimisticConfig,
        getPublishQueue(actorIdentifier: ActorIdentifier) {
          assertInternalActorIndentifier(actorIdentifier);
          return publishQueue;
        },
        reactFlightPayloadDeserializer: this._reactFlightPayloadDeserializer,
        reactFlightServerErrorHandler: this._reactFlightServerErrorHandler,
        scheduler: this._scheduler,
        shouldProcessClientComponents: this._shouldProcessClientComponents,
        sink,
        // NOTE: Some product tests expect `Network.execute` to be called only
        //       when the Observable is executed.
        source: createSource(),
        getStore(actorIdentifier: ActorIdentifier) {
          assertInternalActorIndentifier(actorIdentifier);
          return store;
        },
        treatMissingFieldsAsNull: this._treatMissingFieldsAsNull,
        updater,
      });
      return () => executor.cancel();
    });
  }
}

// Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
// realm-specific instanceof check, and to aid in module tree-shaking to
// avoid requiring all of RelayRuntime just to detect its environment.
(RelayModernEnvironment: any).prototype['@@RelayModernEnvironment'] = true;

function emptyFunction() {}

module.exports = RelayModernEnvironment;
