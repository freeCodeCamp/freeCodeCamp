/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * 
 * @format
 */
'use strict';

var RelayOperationTracker = require('../store/RelayOperationTracker');

var RelayPublishQueue = require('../store/RelayPublishQueue');

var defaultGetDataID = require('../store/defaultGetDataID');

var registerEnvironmentWithDevTools = require('../util/registerEnvironmentWithDevTools');

var wrapNetworkWithLogObserver = require('../network/wrapNetworkWithLogObserver');

var ActorSpecificEnvironment = /*#__PURE__*/function () {
  function ActorSpecificEnvironment(config) {
    var _this = this;

    this.configName = config.configName;
    this.actorIdentifier = config.actorIdentifier;
    this.multiActorEnvironment = config.multiActorEnvironment;
    this.__log = config.logFn;
    this.requiredFieldLogger = config.requiredFieldLogger;
    this._operationTracker = new RelayOperationTracker();
    this._store = config.store;
    this._network = wrapNetworkWithLogObserver(this, config.network);
    this._publishQueue = new RelayPublishQueue(config.store, config.handlerProvider, defaultGetDataID);
    this._defaultRenderPolicy = config.defaultRenderPolicy; // TODO:T92305692 Remove `options` in favor of directly using `actorIdentifier` on the environment

    this.options = {
      actorID: this.actorIdentifier
    }; // We need to add this here to pass `isRelayModernEnvironment` check
    // $FlowFixMe[prop-missing]

    this['@@RelayModernEnvironment'] = true;

    if (process.env.NODE_ENV !== "production") {
      var _require = require('../store/StoreInspector'),
          inspect = _require.inspect;

      this.DEBUG_inspect = function (dataID) {
        return inspect(_this, dataID);
      };
    } // Register this Relay Environment with Relay DevTools if it exists.
    // Note: this must always be the last step in the constructor.


    registerEnvironmentWithDevTools(this);
  }

  var _proto = ActorSpecificEnvironment.prototype;

  _proto.getPublishQueue = function getPublishQueue() {
    return this._publishQueue;
  };

  _proto.UNSTABLE_getDefaultRenderPolicy = function UNSTABLE_getDefaultRenderPolicy() {
    return this._defaultRenderPolicy;
  };

  _proto.applyMutation = function applyMutation(optimisticConfig) {
    return this.multiActorEnvironment.applyMutation(this, optimisticConfig);
  };

  _proto.applyUpdate = function applyUpdate(optimisticUpdate) {
    return this.multiActorEnvironment.applyUpdate(this, optimisticUpdate);
  };

  _proto.revertUpdate = function revertUpdate(optimisticUpdate) {
    return this.multiActorEnvironment.revertUpdate(this, optimisticUpdate);
  };

  _proto.replaceUpdate = function replaceUpdate(optimisticUpdate, replacementUpdate) {
    return this.multiActorEnvironment.replaceUpdate(this, optimisticUpdate, replacementUpdate);
  };

  _proto.check = function check(operation) {
    return this.multiActorEnvironment.check(this, operation);
  };

  _proto.subscribe = function subscribe(snapshot, callback) {
    return this.multiActorEnvironment.subscribe(this, snapshot, callback);
  };

  _proto.retain = function retain(operation) {
    return this.multiActorEnvironment.retain(this, operation);
  };

  _proto.commitUpdate = function commitUpdate(updater) {
    return this.multiActorEnvironment.commitUpdate(this, updater);
  }
  /**
   * Commit a payload to the environment using the given operation selector.
   */
  ;

  _proto.commitPayload = function commitPayload(operationDescriptor, payload) {
    return this.multiActorEnvironment.commitPayload(this, operationDescriptor, payload);
  };

  _proto.getNetwork = function getNetwork() {
    return this._network;
  };

  _proto.getStore = function getStore() {
    return this._store;
  };

  _proto.getOperationTracker = function getOperationTracker() {
    return this._operationTracker;
  };

  _proto.lookup = function lookup(selector) {
    return this.multiActorEnvironment.lookup(this, selector);
  };

  _proto.execute = function execute(config) {
    return this.multiActorEnvironment.execute(this, config);
  };

  _proto.executeMutation = function executeMutation(options) {
    return this.multiActorEnvironment.executeMutation(this, options);
  };

  _proto.executeWithSource = function executeWithSource(options) {
    return this.multiActorEnvironment.executeWithSource(this, options);
  };

  _proto.isRequestActive = function isRequestActive(requestIdentifier) {
    return this.multiActorEnvironment.isRequestActive(this, requestIdentifier);
  };

  _proto.isServer = function isServer() {
    return this.multiActorEnvironment.isServer();
  };

  return ActorSpecificEnvironment;
}();

module.exports = ActorSpecificEnvironment;