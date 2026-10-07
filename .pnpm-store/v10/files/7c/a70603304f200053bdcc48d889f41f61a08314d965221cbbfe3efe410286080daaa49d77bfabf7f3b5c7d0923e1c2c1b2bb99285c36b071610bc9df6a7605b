/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @emails oncall+relay
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var OperationExecutor = require('./OperationExecutor');

var RelayDefaultHandlerProvider = require('../handlers/RelayDefaultHandlerProvider');

var RelayFeatureFlags = require('../util/RelayFeatureFlags');

var RelayObservable = require('../network/RelayObservable');

var RelayOperationTracker = require('../store/RelayOperationTracker');

var RelayPublishQueue = require('./RelayPublishQueue');

var RelayRecordSource = require('./RelayRecordSource');

var defaultGetDataID = require('./defaultGetDataID');

var defaultRequiredFieldLogger = require('./defaultRequiredFieldLogger');

var invariant = require('invariant');

var registerEnvironmentWithDevTools = require('../util/registerEnvironmentWithDevTools');

var wrapNetworkWithLogObserver = require('../network/wrapNetworkWithLogObserver');

var _require = require('../multi-actor-environment/ActorIdentifier'),
    INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE = _require.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
    assertInternalActorIndentifier = _require.assertInternalActorIndentifier;

var RelayModernEnvironment = /*#__PURE__*/function () {
  function RelayModernEnvironment(config) {
    var _this = this;

    var _config$log, _config$requiredField, _config$UNSTABLE_defa, _config$getDataID, _config$handlerProvid, _config$scheduler, _config$isServer, _config$operationTrac;

    this.configName = config.configName;
    this._treatMissingFieldsAsNull = config.treatMissingFieldsAsNull === true;
    var operationLoader = config.operationLoader;
    var reactFlightPayloadDeserializer = config.reactFlightPayloadDeserializer;
    var reactFlightServerErrorHandler = config.reactFlightServerErrorHandler;

    if (process.env.NODE_ENV !== "production") {
      if (operationLoader != null) {
        !(typeof operationLoader === 'object' && typeof operationLoader.get === 'function' && typeof operationLoader.load === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected `operationLoader` to be an object ' + 'with get() and load() functions, got `%s`.', operationLoader) : invariant(false) : void 0;
      }

      if (reactFlightPayloadDeserializer != null) {
        !(typeof reactFlightPayloadDeserializer === 'function') ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayModernEnvironment: Expected `reactFlightPayloadDeserializer` ' + ' to be a function, got `%s`.', reactFlightPayloadDeserializer) : invariant(false) : void 0;
      }
    }

    this.__log = (_config$log = config.log) !== null && _config$log !== void 0 ? _config$log : emptyFunction;
    this.requiredFieldLogger = (_config$requiredField = config.requiredFieldLogger) !== null && _config$requiredField !== void 0 ? _config$requiredField : defaultRequiredFieldLogger;
    this._defaultRenderPolicy = ((_config$UNSTABLE_defa = config.UNSTABLE_defaultRenderPolicy) !== null && _config$UNSTABLE_defa !== void 0 ? _config$UNSTABLE_defa : RelayFeatureFlags.ENABLE_PARTIAL_RENDERING_DEFAULT === true) ? 'partial' : 'full';
    this._operationLoader = operationLoader;
    this._operationExecutions = new Map();
    this._network = wrapNetworkWithLogObserver(this, config.network);
    this._getDataID = (_config$getDataID = config.getDataID) !== null && _config$getDataID !== void 0 ? _config$getDataID : defaultGetDataID;
    this._publishQueue = new RelayPublishQueue(config.store, (_config$handlerProvid = config.handlerProvider) !== null && _config$handlerProvid !== void 0 ? _config$handlerProvid : RelayDefaultHandlerProvider, this._getDataID);
    this._scheduler = (_config$scheduler = config.scheduler) !== null && _config$scheduler !== void 0 ? _config$scheduler : null;
    this._store = config.store;
    this.options = config.options;
    this._isServer = (_config$isServer = config.isServer) !== null && _config$isServer !== void 0 ? _config$isServer : false;

    this.__setNet = function (newNet) {
      return _this._network = wrapNetworkWithLogObserver(_this, newNet);
    };

    if (process.env.NODE_ENV !== "production") {
      var _require2 = require('./StoreInspector'),
          inspect = _require2.inspect;

      this.DEBUG_inspect = function (dataID) {
        return inspect(_this, dataID);
      };
    }

    this._missingFieldHandlers = config.missingFieldHandlers;
    this._operationTracker = (_config$operationTrac = config.operationTracker) !== null && _config$operationTrac !== void 0 ? _config$operationTrac : new RelayOperationTracker();
    this._reactFlightPayloadDeserializer = reactFlightPayloadDeserializer;
    this._reactFlightServerErrorHandler = reactFlightServerErrorHandler;
    this._shouldProcessClientComponents = config.shouldProcessClientComponents; // Register this Relay Environment with Relay DevTools if it exists.
    // Note: this must always be the last step in the constructor.

    registerEnvironmentWithDevTools(this);
  }

  var _proto = RelayModernEnvironment.prototype;

  _proto.getStore = function getStore() {
    return this._store;
  };

  _proto.getNetwork = function getNetwork() {
    return this._network;
  };

  _proto.getOperationTracker = function getOperationTracker() {
    return this._operationTracker;
  };

  _proto.isRequestActive = function isRequestActive(requestIdentifier) {
    var activeState = this._operationExecutions.get(requestIdentifier);

    return activeState === 'active';
  };

  _proto.UNSTABLE_getDefaultRenderPolicy = function UNSTABLE_getDefaultRenderPolicy() {
    return this._defaultRenderPolicy;
  };

  _proto.applyUpdate = function applyUpdate(optimisticUpdate) {
    var _this2 = this;

    var dispose = function dispose() {
      _this2._scheduleUpdates(function () {
        _this2._publishQueue.revertUpdate(optimisticUpdate);

        _this2._publishQueue.run();
      });
    };

    this._scheduleUpdates(function () {
      _this2._publishQueue.applyUpdate(optimisticUpdate);

      _this2._publishQueue.run();
    });

    return {
      dispose: dispose
    };
  };

  _proto.revertUpdate = function revertUpdate(update) {
    var _this3 = this;

    this._scheduleUpdates(function () {
      _this3._publishQueue.revertUpdate(update);

      _this3._publishQueue.run();
    });
  };

  _proto.replaceUpdate = function replaceUpdate(update, newUpdate) {
    var _this4 = this;

    this._scheduleUpdates(function () {
      _this4._publishQueue.revertUpdate(update);

      _this4._publishQueue.applyUpdate(newUpdate);

      _this4._publishQueue.run();
    });
  };

  _proto.applyMutation = function applyMutation(optimisticConfig) {
    var subscription = this._execute({
      createSource: function createSource() {
        return RelayObservable.create(function (_sink) {});
      },
      isClientPayload: false,
      operation: optimisticConfig.operation,
      optimisticConfig: optimisticConfig,
      updater: null
    }).subscribe({});

    return {
      dispose: function dispose() {
        return subscription.unsubscribe();
      }
    };
  };

  _proto.check = function check(operation) {
    if (this._missingFieldHandlers == null || this._missingFieldHandlers.length === 0) {
      return this._store.check(operation);
    }

    return this._checkSelectorAndHandleMissingFields(operation, this._missingFieldHandlers);
  };

  _proto.commitPayload = function commitPayload(operation, payload) {
    this._execute({
      createSource: function createSource() {
        return RelayObservable.from({
          data: payload
        });
      },
      isClientPayload: true,
      operation: operation,
      optimisticConfig: null,
      updater: null
    }).subscribe({});
  };

  _proto.commitUpdate = function commitUpdate(updater) {
    var _this5 = this;

    this._scheduleUpdates(function () {
      _this5._publishQueue.commitUpdate(updater);

      _this5._publishQueue.run();
    });
  };

  _proto.lookup = function lookup(readSelector) {
    return this._store.lookup(readSelector);
  };

  _proto.subscribe = function subscribe(snapshot, callback) {
    return this._store.subscribe(snapshot, callback);
  };

  _proto.retain = function retain(operation) {
    return this._store.retain(operation);
  };

  _proto.isServer = function isServer() {
    return this._isServer;
  };

  _proto._checkSelectorAndHandleMissingFields = function _checkSelectorAndHandleMissingFields(operation, handlers) {
    var _this6 = this;

    var target = RelayRecordSource.create();

    var source = this._store.getSource();

    var result = this._store.check(operation, {
      handlers: handlers,
      defaultActorIdentifier: INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      getSourceForActor: function getSourceForActor(actorIdentifier) {
        assertInternalActorIndentifier(actorIdentifier);
        return source;
      },
      getTargetForActor: function getTargetForActor(actorIdentifier) {
        assertInternalActorIndentifier(actorIdentifier);
        return target;
      }
    });

    if (target.size() > 0) {
      this._scheduleUpdates(function () {
        _this6._publishQueue.commitSource(target);

        _this6._publishQueue.run();
      });
    }

    return result;
  };

  _proto._scheduleUpdates = function _scheduleUpdates(task) {
    var scheduler = this._scheduler;

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
  ;

  _proto.execute = function execute(_ref) {
    var _this7 = this;

    var operation = _ref.operation,
        updater = _ref.updater;
    return this._execute({
      createSource: function createSource() {
        return _this7._network.execute(operation.request.node.params, operation.request.variables, operation.request.cacheConfig || {}, null);
      },
      isClientPayload: false,
      operation: operation,
      optimisticConfig: null,
      updater: updater
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
  ;

  _proto.executeMutation = function executeMutation(_ref2) {
    var _this8 = this;

    var operation = _ref2.operation,
        optimisticResponse = _ref2.optimisticResponse,
        optimisticUpdater = _ref2.optimisticUpdater,
        updater = _ref2.updater,
        uploadables = _ref2.uploadables;
    var optimisticConfig;

    if (optimisticResponse || optimisticUpdater) {
      optimisticConfig = {
        operation: operation,
        response: optimisticResponse,
        updater: optimisticUpdater
      };
    }

    return this._execute({
      createSource: function createSource() {
        return _this8._network.execute(operation.request.node.params, operation.request.variables, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({}, operation.request.cacheConfig), {}, {
          force: true
        }), uploadables);
      },
      isClientPayload: false,
      operation: operation,
      optimisticConfig: optimisticConfig,
      updater: updater
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
  ;

  _proto.executeWithSource = function executeWithSource(_ref3) {
    var operation = _ref3.operation,
        source = _ref3.source;
    return this._execute({
      createSource: function createSource() {
        return source;
      },
      isClientPayload: false,
      operation: operation,
      optimisticConfig: null,
      updater: null
    });
  };

  _proto.toJSON = function toJSON() {
    var _this$configName;

    return "RelayModernEnvironment(".concat((_this$configName = this.configName) !== null && _this$configName !== void 0 ? _this$configName : '', ")");
  };

  _proto._execute = function _execute(_ref4) {
    var _this9 = this;

    var createSource = _ref4.createSource,
        isClientPayload = _ref4.isClientPayload,
        operation = _ref4.operation,
        optimisticConfig = _ref4.optimisticConfig,
        updater = _ref4.updater;
    var publishQueue = this._publishQueue;
    var store = this._store;
    return RelayObservable.create(function (sink) {
      var executor = OperationExecutor.execute({
        actorIdentifier: INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
        getDataID: _this9._getDataID,
        isClientPayload: isClientPayload,
        log: _this9.__log,
        operation: operation,
        operationExecutions: _this9._operationExecutions,
        operationLoader: _this9._operationLoader,
        operationTracker: _this9._operationTracker,
        optimisticConfig: optimisticConfig,
        getPublishQueue: function getPublishQueue(actorIdentifier) {
          assertInternalActorIndentifier(actorIdentifier);
          return publishQueue;
        },
        reactFlightPayloadDeserializer: _this9._reactFlightPayloadDeserializer,
        reactFlightServerErrorHandler: _this9._reactFlightServerErrorHandler,
        scheduler: _this9._scheduler,
        shouldProcessClientComponents: _this9._shouldProcessClientComponents,
        sink: sink,
        // NOTE: Some product tests expect `Network.execute` to be called only
        //       when the Observable is executed.
        source: createSource(),
        getStore: function getStore(actorIdentifier) {
          assertInternalActorIndentifier(actorIdentifier);
          return store;
        },
        treatMissingFieldsAsNull: _this9._treatMissingFieldsAsNull,
        updater: updater
      });
      return function () {
        return executor.cancel();
      };
    });
  };

  return RelayModernEnvironment;
}(); // Add a sigil for detection by `isRelayModernEnvironment()` to avoid a
// realm-specific instanceof check, and to aid in module tree-shaking to
// avoid requiring all of RelayRuntime just to detect its environment.


RelayModernEnvironment.prototype['@@RelayModernEnvironment'] = true;

function emptyFunction() {}

module.exports = RelayModernEnvironment;