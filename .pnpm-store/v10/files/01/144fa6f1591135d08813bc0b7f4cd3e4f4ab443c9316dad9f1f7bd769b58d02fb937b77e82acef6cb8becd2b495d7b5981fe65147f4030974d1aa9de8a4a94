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

var ConnectionHandler = require('./ConnectionHandler');

var ConnectionInterface = require('./ConnectionInterface');

var invariant = require('invariant');

var warning = require("fbjs/lib/warning");

var DeleteRecordHandler = {
  update: function update(store, payload) {
    var record = store.get(payload.dataID);

    if (record != null) {
      var idOrIds = record.getValue(payload.fieldKey);

      if (typeof idOrIds === 'string') {
        store["delete"](idOrIds);
      } else if (Array.isArray(idOrIds)) {
        idOrIds.forEach(function (id) {
          if (typeof id === 'string') {
            store["delete"](id);
          }
        });
      }
    }
  }
};
var DeleteEdgeHandler = {
  update: function update(store, payload) {
    var record = store.get(payload.dataID);

    if (record == null) {
      return;
    } // $FlowFixMe[prop-missing]


    var connections = payload.handleArgs.connections;
    !(connections != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Expected connection IDs to be specified.') : invariant(false) : void 0;
    var idOrIds = record.getValue(payload.fieldKey);
    var idList = Array.isArray(idOrIds) ? idOrIds : [idOrIds];
    idList.forEach(function (id) {
      if (typeof id === 'string') {
        var _iterator = (0, _createForOfIteratorHelper2["default"])(connections),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var connectionID = _step.value;
            var connection = store.get(connectionID);

            if (connection == null) {
              process.env.NODE_ENV !== "production" ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
              continue;
            }

            ConnectionHandler.deleteNode(connection, id);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
  }
};
var AppendEdgeHandler = {
  update: edgeUpdater(ConnectionHandler.insertEdgeAfter)
};
var PrependEdgeHandler = {
  update: edgeUpdater(ConnectionHandler.insertEdgeBefore)
};
var AppendNodeHandler = {
  update: nodeUpdater(ConnectionHandler.insertEdgeAfter)
};
var PrependNodeHandler = {
  update: nodeUpdater(ConnectionHandler.insertEdgeBefore)
};

function edgeUpdater(insertFn) {
  return function (store, payload) {
    var _serverEdges;

    var record = store.get(payload.dataID);

    if (record == null) {
      return;
    } // $FlowFixMe[prop-missing]


    var connections = payload.handleArgs.connections;
    !(connections != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Expected connection IDs to be specified.') : invariant(false) : void 0;
    var singleServerEdge, serverEdges;

    try {
      singleServerEdge = record.getLinkedRecord(payload.fieldKey, payload.args);
    } catch (_unused) {}

    if (!singleServerEdge) {
      try {
        serverEdges = record.getLinkedRecords(payload.fieldKey, payload.args);
      } catch (_unused2) {}
    }

    if (singleServerEdge == null && serverEdges == null) {
      process.env.NODE_ENV !== "production" ? warning(false, 'MutationHandlers: Expected the server edge to be non-null.') : void 0;
      return;
    }

    var _ConnectionInterface$ = ConnectionInterface.get(),
        NODE = _ConnectionInterface$.NODE,
        EDGES = _ConnectionInterface$.EDGES;

    var serverEdgeList = (_serverEdges = serverEdges) !== null && _serverEdges !== void 0 ? _serverEdges : [singleServerEdge];

    var _iterator2 = (0, _createForOfIteratorHelper2["default"])(serverEdgeList),
        _step2;

    try {
      var _loop = function _loop() {
        var serverEdge = _step2.value;

        if (serverEdge == null) {
          return "continue";
        }

        var serverNode = serverEdge.getLinkedRecord('node');

        if (!serverNode) {
          return "continue";
        }

        var serverNodeId = serverNode.getDataID();

        var _iterator3 = (0, _createForOfIteratorHelper2["default"])(connections),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var connectionID = _step3.value;
            var connection = store.get(connectionID);

            if (connection == null) {
              process.env.NODE_ENV !== "production" ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
              continue;
            }

            var nodeAlreadyExistsInConnection = (_connection$getLinked = connection.getLinkedRecords(EDGES)) === null || _connection$getLinked === void 0 ? void 0 : _connection$getLinked.some(function (edge) {
              var _edge$getLinkedRecord;

              return (edge === null || edge === void 0 ? void 0 : (_edge$getLinkedRecord = edge.getLinkedRecord(NODE)) === null || _edge$getLinkedRecord === void 0 ? void 0 : _edge$getLinkedRecord.getDataID()) === serverNodeId;
            });

            if (nodeAlreadyExistsInConnection) {
              continue;
            }

            var clientEdge = ConnectionHandler.buildConnectionEdge(store, connection, serverEdge);
            !(clientEdge != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Failed to build the edge.') : invariant(false) : void 0;
            insertFn(connection, clientEdge);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      };

      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _connection$getLinked;

        var _ret = _loop();

        if (_ret === "continue") continue;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
}

function nodeUpdater(insertFn) {
  return function (store, payload) {
    var _serverNodes;

    var record = store.get(payload.dataID);

    if (record == null) {
      return;
    } // $FlowFixMe[prop-missing]


    var _payload$handleArgs = payload.handleArgs,
        connections = _payload$handleArgs.connections,
        edgeTypeName = _payload$handleArgs.edgeTypeName;
    !(connections != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Expected connection IDs to be specified.') : invariant(false) : void 0;
    !(edgeTypeName != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Expected edge typename to be specified.') : invariant(false) : void 0;
    var singleServerNode;
    var serverNodes;

    try {
      singleServerNode = record.getLinkedRecord(payload.fieldKey, payload.args);
    } catch (_unused3) {}

    if (!singleServerNode) {
      try {
        serverNodes = record.getLinkedRecords(payload.fieldKey, payload.args);
      } catch (_unused4) {}
    }

    if (singleServerNode == null && serverNodes == null) {
      process.env.NODE_ENV !== "production" ? warning(false, 'MutationHandlers: Expected target node to exist.') : void 0;
      return;
    }

    var _ConnectionInterface$2 = ConnectionInterface.get(),
        NODE = _ConnectionInterface$2.NODE,
        EDGES = _ConnectionInterface$2.EDGES;

    var serverNodeList = (_serverNodes = serverNodes) !== null && _serverNodes !== void 0 ? _serverNodes : [singleServerNode];

    var _iterator4 = (0, _createForOfIteratorHelper2["default"])(serverNodeList),
        _step4;

    try {
      var _loop2 = function _loop2() {
        var serverNode = _step4.value;

        if (serverNode == null) {
          return "continue";
        }

        var serverNodeId = serverNode.getDataID();

        var _iterator5 = (0, _createForOfIteratorHelper2["default"])(connections),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var connectionID = _step5.value;
            var connection = store.get(connectionID);

            if (connection == null) {
              process.env.NODE_ENV !== "production" ? warning(false, "[Relay][Mutation] The connection with id '".concat(connectionID, "' doesn't exist.")) : void 0;
              continue;
            }

            var nodeAlreadyExistsInConnection = (_connection$getLinked2 = connection.getLinkedRecords(EDGES)) === null || _connection$getLinked2 === void 0 ? void 0 : _connection$getLinked2.some(function (edge) {
              var _edge$getLinkedRecord2;

              return (edge === null || edge === void 0 ? void 0 : (_edge$getLinkedRecord2 = edge.getLinkedRecord(NODE)) === null || _edge$getLinkedRecord2 === void 0 ? void 0 : _edge$getLinkedRecord2.getDataID()) === serverNodeId;
            });

            if (nodeAlreadyExistsInConnection) {
              continue;
            }

            var clientEdge = ConnectionHandler.createEdge(store, connection, serverNode, edgeTypeName);
            !(clientEdge != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'MutationHandlers: Failed to build the edge.') : invariant(false) : void 0;
            insertFn(connection, clientEdge);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      };

      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _connection$getLinked2;

        var _ret2 = _loop2();

        if (_ret2 === "continue") continue;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  };
}

module.exports = {
  AppendEdgeHandler: AppendEdgeHandler,
  DeleteRecordHandler: DeleteRecordHandler,
  PrependEdgeHandler: PrependEdgeHandler,
  AppendNodeHandler: AppendNodeHandler,
  PrependNodeHandler: PrependNodeHandler,
  DeleteEdgeHandler: DeleteEdgeHandler
};