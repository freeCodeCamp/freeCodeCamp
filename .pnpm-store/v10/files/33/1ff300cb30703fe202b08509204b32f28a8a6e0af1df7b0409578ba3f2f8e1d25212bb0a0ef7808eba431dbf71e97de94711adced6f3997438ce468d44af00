/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var ConnectionHandler = require('./handlers/connection/ConnectionHandler');

var ConnectionInterface = require('./handlers/connection/ConnectionInterface');

var GraphQLTag = require('./query/GraphQLTag');

var MutationHandlers = require('./handlers/connection/MutationHandlers');

var PreloadableQueryRegistry = require('./query/PreloadableQueryRegistry');

var RelayConcreteNode = require('./util/RelayConcreteNode');

var RelayConcreteVariables = require('./store/RelayConcreteVariables');

var RelayDeclarativeMutationConfig = require('./mutations/RelayDeclarativeMutationConfig');

var RelayDefaultHandleKey = require('./util/RelayDefaultHandleKey');

var RelayDefaultHandlerProvider = require('./handlers/RelayDefaultHandlerProvider');

var RelayError = require('./util/RelayError');

var RelayFeatureFlags = require('./util/RelayFeatureFlags');

var RelayModernEnvironment = require('./store/RelayModernEnvironment');

var RelayModernOperationDescriptor = require('./store/RelayModernOperationDescriptor');

var RelayModernRecord = require('./store/RelayModernRecord');

var RelayModernSelector = require('./store/RelayModernSelector');

var RelayModernStore = require('./store/RelayModernStore');

var RelayNetwork = require('./network/RelayNetwork');

var RelayObservable = require('./network/RelayObservable');

var RelayOperationTracker = require('./store/RelayOperationTracker');

var RelayProfiler = require('./util/RelayProfiler');

var RelayQueryResponseCache = require('./network/RelayQueryResponseCache');

var RelayRecordSource = require('./store/RelayRecordSource');

var RelayReplaySubject = require('./util/RelayReplaySubject');

var RelayStoreUtils = require('./store/RelayStoreUtils');

var ViewerPattern = require('./store/ViewerPattern');

var applyOptimisticMutation = require('./mutations/applyOptimisticMutation');

var commitLocalUpdate = require('./mutations/commitLocalUpdate');

var commitMutation = require('./mutations/commitMutation');

var createFragmentSpecResolver = require('./store/createFragmentSpecResolver');

var createPayloadFor3DField = require('./util/createPayloadFor3DField');

var createRelayContext = require('./store/createRelayContext');

var deepFreeze = require('./util/deepFreeze');

var fetchQuery = require('./query/fetchQuery');

var fetchQueryInternal = require('./query/fetchQueryInternal');

var fetchQuery_DEPRECATED = require('./query/fetchQuery_DEPRECATED');

var getFragmentIdentifier = require('./util/getFragmentIdentifier');

var getPaginationMetadata = require('./util/getPaginationMetadata');

var getPaginationVariables = require('./util/getPaginationVariables');

var getPendingOperationsForFragment = require('./util/getPendingOperationsForFragment');

var getRefetchMetadata = require('./util/getRefetchMetadata');

var getRelayHandleKey = require('./util/getRelayHandleKey');

var getRequestIdentifier = require('./util/getRequestIdentifier');

var getValueAtPath = require('./util/getValueAtPath');

var isPromise = require('./util/isPromise');

var isRelayModernEnvironment = require('./store/isRelayModernEnvironment');

var isScalarAndEqual = require('./util/isScalarAndEqual');

var readInlineData = require('./store/readInlineData');

var recycleNodesInto = require('./util/recycleNodesInto');

var reportMissingRequiredFields = require('./util/reportMissingRequiredFields');

var requestSubscription = require('./subscription/requestSubscription');

var stableCopy = require('./util/stableCopy');

var _require = require('./store/ClientID'),
    generateClientID = _require.generateClientID,
    generateUniqueClientID = _require.generateUniqueClientID,
    isClientID = _require.isClientID;

// As early as possible, check for the existence of the JavaScript globals which
// Relay Runtime relies upon, and produce a clear message if they do not exist.
if (process.env.NODE_ENV !== "production") {
  var mapStr = typeof Map !== 'function' ? 'Map' : null;
  var setStr = typeof Set !== 'function' ? 'Set' : null;
  var promiseStr = typeof Promise !== 'function' ? 'Promise' : null;
  var objStr = typeof Object.assign !== 'function' ? 'Object.assign' : null;

  if (mapStr || setStr || promiseStr || objStr) {
    throw new Error("relay-runtime requires ".concat([mapStr, setStr, promiseStr, objStr].filter(Boolean).join(', and '), " to exist. ") + 'Use a polyfill to provide these for older browsers.');
  }
}
/**
 * The public interface to Relay Runtime.
 */


module.exports = {
  // Core API
  Environment: RelayModernEnvironment,
  Network: RelayNetwork,
  Observable: RelayObservable,
  QueryResponseCache: RelayQueryResponseCache,
  RecordSource: RelayRecordSource,
  Record: RelayModernRecord,
  ReplaySubject: RelayReplaySubject,
  Store: RelayModernStore,
  areEqualSelectors: RelayModernSelector.areEqualSelectors,
  createFragmentSpecResolver: createFragmentSpecResolver,
  createNormalizationSelector: RelayModernSelector.createNormalizationSelector,
  createOperationDescriptor: RelayModernOperationDescriptor.createOperationDescriptor,
  createReaderSelector: RelayModernSelector.createReaderSelector,
  createRequestDescriptor: RelayModernOperationDescriptor.createRequestDescriptor,
  getDataIDsFromFragment: RelayModernSelector.getDataIDsFromFragment,
  getDataIDsFromObject: RelayModernSelector.getDataIDsFromObject,
  getNode: GraphQLTag.getNode,
  getFragment: GraphQLTag.getFragment,
  getInlineDataFragment: GraphQLTag.getInlineDataFragment,
  getModuleComponentKey: RelayStoreUtils.getModuleComponentKey,
  getModuleOperationKey: RelayStoreUtils.getModuleOperationKey,
  getPaginationFragment: GraphQLTag.getPaginationFragment,
  getPluralSelector: RelayModernSelector.getPluralSelector,
  getRefetchableFragment: GraphQLTag.getRefetchableFragment,
  getRequest: GraphQLTag.getRequest,
  getRequestIdentifier: getRequestIdentifier,
  getSelector: RelayModernSelector.getSelector,
  getSelectorsFromObject: RelayModernSelector.getSelectorsFromObject,
  getSingularSelector: RelayModernSelector.getSingularSelector,
  getStorageKey: RelayStoreUtils.getStorageKey,
  getVariablesFromFragment: RelayModernSelector.getVariablesFromFragment,
  getVariablesFromObject: RelayModernSelector.getVariablesFromObject,
  getVariablesFromPluralFragment: RelayModernSelector.getVariablesFromPluralFragment,
  getVariablesFromSingularFragment: RelayModernSelector.getVariablesFromSingularFragment,
  reportMissingRequiredFields: reportMissingRequiredFields,
  graphql: GraphQLTag.graphql,
  isFragment: GraphQLTag.isFragment,
  isInlineDataFragment: GraphQLTag.isInlineDataFragment,
  isRequest: GraphQLTag.isRequest,
  readInlineData: readInlineData,
  // Declarative mutation API
  MutationTypes: RelayDeclarativeMutationConfig.MutationTypes,
  RangeOperations: RelayDeclarativeMutationConfig.RangeOperations,
  // Extensions
  DefaultHandlerProvider: RelayDefaultHandlerProvider,
  ConnectionHandler: ConnectionHandler,
  MutationHandlers: MutationHandlers,
  VIEWER_ID: ViewerPattern.VIEWER_ID,
  VIEWER_TYPE: ViewerPattern.VIEWER_TYPE,
  // Helpers (can be implemented via the above API)
  applyOptimisticMutation: applyOptimisticMutation,
  commitLocalUpdate: commitLocalUpdate,
  commitMutation: commitMutation,
  fetchQuery: fetchQuery,
  fetchQuery_DEPRECATED: fetchQuery_DEPRECATED,
  isRelayModernEnvironment: isRelayModernEnvironment,
  requestSubscription: requestSubscription,
  // Configuration interface for legacy or special uses
  ConnectionInterface: ConnectionInterface,
  // Utilities
  PreloadableQueryRegistry: PreloadableQueryRegistry,
  RelayProfiler: RelayProfiler,
  createPayloadFor3DField: createPayloadFor3DField,
  // INTERNAL-ONLY: These exports might be removed at any point.
  RelayConcreteNode: RelayConcreteNode,
  RelayError: RelayError,
  RelayFeatureFlags: RelayFeatureFlags,
  DEFAULT_HANDLE_KEY: RelayDefaultHandleKey.DEFAULT_HANDLE_KEY,
  FRAGMENTS_KEY: RelayStoreUtils.FRAGMENTS_KEY,
  FRAGMENT_OWNER_KEY: RelayStoreUtils.FRAGMENT_OWNER_KEY,
  ID_KEY: RelayStoreUtils.ID_KEY,
  REF_KEY: RelayStoreUtils.REF_KEY,
  REFS_KEY: RelayStoreUtils.REFS_KEY,
  ROOT_ID: RelayStoreUtils.ROOT_ID,
  ROOT_TYPE: RelayStoreUtils.ROOT_TYPE,
  TYPENAME_KEY: RelayStoreUtils.TYPENAME_KEY,
  deepFreeze: deepFreeze,
  generateClientID: generateClientID,
  generateUniqueClientID: generateUniqueClientID,
  getRelayHandleKey: getRelayHandleKey,
  isClientID: isClientID,
  isPromise: isPromise,
  isScalarAndEqual: isScalarAndEqual,
  recycleNodesInto: recycleNodesInto,
  stableCopy: stableCopy,
  getFragmentIdentifier: getFragmentIdentifier,
  getRefetchMetadata: getRefetchMetadata,
  getPaginationMetadata: getPaginationMetadata,
  getPaginationVariables: getPaginationVariables,
  getPendingOperationsForFragment: getPendingOperationsForFragment,
  getValueAtPath: getValueAtPath,
  __internal: {
    OperationTracker: RelayOperationTracker,
    createRelayContext: createRelayContext,
    getOperationVariables: RelayConcreteVariables.getOperationVariables,
    fetchQuery: fetchQueryInternal.fetchQuery,
    fetchQueryDeduped: fetchQueryInternal.fetchQueryDeduped,
    getPromiseForActiveRequest: fetchQueryInternal.getPromiseForActiveRequest,
    getObservableForActiveRequest: fetchQueryInternal.getObservableForActiveRequest
  }
};