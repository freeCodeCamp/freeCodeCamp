"use strict";

exports.__esModule = true;
exports.getTypes = exports.getNodesByType = exports.getNodes = exports.getNode = void 0;
var _datastore = require("./datastore");
exports.getDataStore = _datastore.getDataStore;
// Convenience accessor methods

/**
 * Get all nodes from datastore.
 * @deprecated
 */
const getNodes = () => (0, _datastore.getDataStore)().getNodes();

/**
 * Get node by id from datastore.
 */
exports.getNodes = getNodes;
const getNode = id => (0, _datastore.getDataStore)().getNode(id);

/**
 * Get all nodes of type from datastore.
 * @deprecated
 */
exports.getNode = getNode;
const getNodesByType = type => (0, _datastore.getDataStore)().getNodesByType(type);

/**
 * Get all type names from datastore.
 */
exports.getNodesByType = getNodesByType;
const getTypes = () => (0, _datastore.getDataStore)().getTypes();
exports.getTypes = getTypes;
//# sourceMappingURL=index.js.map