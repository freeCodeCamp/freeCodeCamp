"use strict";

exports.__esModule = true;
exports.setupInMemoryStore = setupInMemoryStore;
var _redux = require("../../redux");
var _iterable = require("../common/iterable");
var _runFastFilters = require("./run-fast-filters");
/**
 * @deprecated
 */
function getNodes() {
  var _store$getState$nodes;
  const nodes = (_store$getState$nodes = _redux.store.getState().nodes) !== null && _store$getState$nodes !== void 0 ? _store$getState$nodes : new Map();
  return Array.from(nodes.values());
}

/**
 * @deprecated
 */
function getNodesByType(type) {
  var _store$getState$nodes2;
  const nodes = (_store$getState$nodes2 = _redux.store.getState().nodesByType.get(type)) !== null && _store$getState$nodes2 !== void 0 ? _store$getState$nodes2 : new Map();
  return Array.from(nodes.values());
}
function iterateNodes() {
  var _store$getState$nodes3;
  const nodes = (_store$getState$nodes3 = _redux.store.getState().nodes) !== null && _store$getState$nodes3 !== void 0 ? _store$getState$nodes3 : new Map();
  return new _iterable.GatsbyIterable(nodes.values());
}
function iterateNodesByType(type) {
  var _store$getState$nodes4;
  const nodes = (_store$getState$nodes4 = _redux.store.getState().nodesByType.get(type)) !== null && _store$getState$nodes4 !== void 0 ? _store$getState$nodes4 : new Map();
  return new _iterable.GatsbyIterable(nodes.values());
}
function getNode(id) {
  return _redux.store.getState().nodes.get(id);
}
function getTypes() {
  // Note: sorting to match the output of the LMDB version (where keys are sorted by default)
  return Array.from(_redux.store.getState().nodesByType.keys()).sort();
}
function countNodes(typeName) {
  if (!typeName) {
    return _redux.store.getState().nodes.size;
  }
  const nodes = _redux.store.getState().nodesByType.get(typeName);
  return nodes ? nodes.size : 0;
}
function runQuery(args) {
  return Promise.resolve((0, _runFastFilters.runFastFiltersAndSort)(args));
}
const readyPromise = Promise.resolve(undefined);

/**
 * Returns promise that resolves when the store is ready for reads
 * (the in-memory store is always ready)
 */
function ready() {
  return readyPromise;
}
function setupInMemoryStore() {
  return {
    getNode,
    getTypes,
    countNodes,
    ready,
    iterateNodes,
    iterateNodesByType,
    runQuery,
    // deprecated:
    getNodes,
    getNodesByType
  };
}
//# sourceMappingURL=in-memory-datastore.js.map