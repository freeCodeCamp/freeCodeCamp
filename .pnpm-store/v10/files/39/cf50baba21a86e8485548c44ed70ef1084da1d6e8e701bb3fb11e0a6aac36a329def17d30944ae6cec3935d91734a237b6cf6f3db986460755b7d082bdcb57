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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var ConnectionHandler = require('../handlers/connection/ConnectionHandler');

var warning = require("fbjs/lib/warning");

var MutationTypes = Object.freeze({
  RANGE_ADD: 'RANGE_ADD',
  RANGE_DELETE: 'RANGE_DELETE',
  NODE_DELETE: 'NODE_DELETE'
});
var RangeOperations = Object.freeze({
  APPEND: 'append',
  PREPEND: 'prepend'
});

function convert(configs, request, optimisticUpdater, updater) {
  var configOptimisticUpdates = optimisticUpdater ? [optimisticUpdater] : [];
  var configUpdates = updater ? [updater] : [];
  configs.forEach(function (config) {
    switch (config.type) {
      case 'NODE_DELETE':
        var nodeDeleteResult = nodeDelete(config, request);

        if (nodeDeleteResult) {
          configOptimisticUpdates.push(nodeDeleteResult);
          configUpdates.push(nodeDeleteResult);
        }

        break;

      case 'RANGE_ADD':
        var rangeAddResult = rangeAdd(config, request);

        if (rangeAddResult) {
          configOptimisticUpdates.push(rangeAddResult);
          configUpdates.push(rangeAddResult);
        }

        break;

      case 'RANGE_DELETE':
        var rangeDeleteResult = rangeDelete(config, request);

        if (rangeDeleteResult) {
          configOptimisticUpdates.push(rangeDeleteResult);
          configUpdates.push(rangeDeleteResult);
        }

        break;
    }
  });
  return {
    optimisticUpdater: function optimisticUpdater(store, data) {
      configOptimisticUpdates.forEach(function (eachOptimisticUpdater) {
        eachOptimisticUpdater(store, data);
      });
    },
    updater: function updater(store, data) {
      configUpdates.forEach(function (eachUpdater) {
        eachUpdater(store, data);
      });
    }
  };
}

function nodeDelete(config, request) {
  var deletedIDFieldName = config.deletedIDFieldName;
  var rootField = getRootField(request);

  if (!rootField) {
    return null;
  }

  return function (store, data) {
    var payload = store.getRootField(rootField);

    if (!payload) {
      return;
    }

    var deleteID = payload.getValue(deletedIDFieldName);
    var deleteIDs = Array.isArray(deleteID) ? deleteID : [deleteID];
    deleteIDs.forEach(function (id) {
      if (id && typeof id === 'string') {
        store["delete"](id);
      }
    });
  };
}

function rangeAdd(config, request) {
  var parentID = config.parentID,
      connectionInfo = config.connectionInfo,
      edgeName = config.edgeName;

  if (!parentID) {
    process.env.NODE_ENV !== "production" ? warning(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_ADD ' + 'to work you must include a parentID') : void 0;
    return null;
  }

  var rootField = getRootField(request);

  if (!connectionInfo || !rootField) {
    return null;
  }

  return function (store, data) {
    var parent = store.get(parentID);

    if (!parent) {
      return;
    }

    var payload = store.getRootField(rootField);

    if (!payload) {
      return;
    }

    var serverEdge = payload.getLinkedRecord(edgeName);

    var _iterator = (0, _createForOfIteratorHelper2["default"])(connectionInfo),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var info = _step.value;

        if (!serverEdge) {
          continue;
        }

        var connection = ConnectionHandler.getConnection(parent, info.key, info.filters);

        if (!connection) {
          continue;
        }

        var clientEdge = ConnectionHandler.buildConnectionEdge(store, connection, serverEdge);

        if (!clientEdge) {
          continue;
        }

        switch (info.rangeBehavior) {
          case 'append':
            ConnectionHandler.insertEdgeAfter(connection, clientEdge);
            break;

          case 'prepend':
            ConnectionHandler.insertEdgeBefore(connection, clientEdge);
            break;

          default:
            process.env.NODE_ENV !== "production" ? warning(false, 'RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` ' + 'will not work as expected in RelayModern, supported range ' + "behaviors are 'append', 'prepend'.", info.rangeBehavior) : void 0;
            break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
}

function rangeDelete(config, request) {
  var parentID = config.parentID,
      connectionKeys = config.connectionKeys,
      pathToConnection = config.pathToConnection,
      deletedIDFieldName = config.deletedIDFieldName;

  if (!parentID) {
    process.env.NODE_ENV !== "production" ? warning(false, 'RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE ' + 'to work you must include a parentID') : void 0;
    return null;
  }

  var rootField = getRootField(request);

  if (!rootField) {
    return null;
  }

  return function (store, data) {
    if (!data) {
      return;
    }

    var deleteIDs = [];
    var deletedIDField = data[rootField];

    if (deletedIDField && Array.isArray(deletedIDFieldName)) {
      var _iterator2 = (0, _createForOfIteratorHelper2["default"])(deletedIDFieldName),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var eachField = _step2.value;

          if (deletedIDField && typeof deletedIDField === 'object') {
            deletedIDField = deletedIDField[eachField];
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (idObject) {
          if (idObject && idObject.id && typeof idObject === 'object' && typeof idObject.id === 'string') {
            deleteIDs.push(idObject.id);
          }
        });
      } else if (deletedIDField && deletedIDField.id && typeof deletedIDField.id === 'string') {
        deleteIDs.push(deletedIDField.id);
      }
    } else if (deletedIDField && typeof deletedIDFieldName === 'string' && typeof deletedIDField === 'object') {
      deletedIDField = deletedIDField[deletedIDFieldName];

      if (typeof deletedIDField === 'string') {
        deleteIDs.push(deletedIDField);
      } else if (Array.isArray(deletedIDField)) {
        deletedIDField.forEach(function (id) {
          if (typeof id === 'string') {
            deleteIDs.push(id);
          }
        });
      }
    }

    deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs);
  };
}

function deleteNode(parentID, connectionKeys, pathToConnection, store, deleteIDs) {
  process.env.NODE_ENV !== "production" ? warning(connectionKeys != null, 'RelayDeclarativeMutationConfig: RANGE_DELETE must provide a ' + 'connectionKeys') : void 0;
  var parent = store.get(parentID);

  if (!parent) {
    return;
  }

  if (pathToConnection.length < 2) {
    process.env.NODE_ENV !== "production" ? warning(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection must include at least parent and connection') : void 0;
    return;
  }

  var recordProxy = parent;

  for (var i = 1; i < pathToConnection.length - 1; i++) {
    if (recordProxy) {
      recordProxy = recordProxy.getLinkedRecord(pathToConnection[i]);
    }
  } // Should never enter loop except edge cases


  if (!connectionKeys || !recordProxy) {
    process.env.NODE_ENV !== "production" ? warning(false, 'RelayDeclarativeMutationConfig: RANGE_DELETE ' + 'pathToConnection is incorrect. Unable to find connection with ' + 'parentID: %s and path: %s', parentID, pathToConnection.toString()) : void 0;
    return;
  }

  var _iterator3 = (0, _createForOfIteratorHelper2["default"])(connectionKeys),
      _step3;

  try {
    var _loop = function _loop() {
      var key = _step3.value;
      var connection = ConnectionHandler.getConnection(recordProxy, key.key, key.filters);

      if (connection) {
        deleteIDs.forEach(function (deleteID) {
          ConnectionHandler.deleteNode(connection, deleteID);
        });
      }
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

function getRootField(request) {
  if (request.fragment.selections && request.fragment.selections.length > 0 && request.fragment.selections[0].kind === 'LinkedField') {
    return request.fragment.selections[0].name;
  }

  return null;
}

module.exports = {
  MutationTypes: MutationTypes,
  RangeOperations: RangeOperations,
  convert: convert
};