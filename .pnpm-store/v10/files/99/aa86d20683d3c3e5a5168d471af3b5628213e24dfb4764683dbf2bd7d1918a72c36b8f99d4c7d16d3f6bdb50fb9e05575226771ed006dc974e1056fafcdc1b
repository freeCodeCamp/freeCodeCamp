"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RequestGraph = void 0;
exports.getWatcherOptions = getWatcherOptions;
exports.requestGraphEdgeTypes = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function _graph() {
  const data = require("@parcel/graph");

  _graph = function () {
    return data;
  };

  return data;
}

var _serializer = require("./serializer");

var _utils2 = require("./utils");

var _projectPath = require("./projectPath");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const requestGraphEdgeTypes = {
  subrequest: 2,
  invalidated_by_update: 3,
  invalidated_by_delete: 4,
  invalidated_by_create: 5,
  invalidated_by_create_above: 6,
  dirname: 7
};
exports.requestGraphEdgeTypes = requestGraphEdgeTypes;

const nodeFromFilePath = filePath => ({
  id: (0, _projectPath.fromProjectPathRelative)(filePath),
  type: 'file',
  value: {
    filePath
  }
});

const nodeFromGlob = glob => ({
  id: (0, _projectPath.fromProjectPathRelative)(glob),
  type: 'glob',
  value: glob
});

const nodeFromFileName = fileName => ({
  id: 'file_name:' + fileName,
  type: 'file_name',
  value: fileName
});

const nodeFromRequest = request => ({
  id: request.id,
  type: 'request',
  value: request,
  invalidateReason: _constants.INITIAL_BUILD
});

const nodeFromEnv = (env, value) => ({
  id: 'env:' + env,
  type: 'env',
  value: {
    key: env,
    value
  }
});

const nodeFromOption = (option, value) => ({
  id: 'option:' + option,
  type: 'option',
  value: {
    key: option,
    hash: (0, _utils2.hashFromOption)(value)
  }
});

class RequestGraph extends _graph().ContentGraph {
  invalidNodeIds = new Set();
  incompleteNodeIds = new Set();
  incompleteNodePromises = new Map();
  globNodeIds = new Set();
  envNodeIds = new Set();
  optionNodeIds = new Set(); // Unpredictable nodes are requests that cannot be predicted whether they should rerun based on
  // filesystem changes alone. They should rerun on each startup of Parcel.

  unpredicatableNodeIds = new Set();
  invalidateOnBuildNodeIds = new Set(); // $FlowFixMe[prop-missing]

  static deserialize(opts) {
    // $FlowFixMe[prop-missing]
    let deserialized = new RequestGraph(opts);
    deserialized.invalidNodeIds = opts.invalidNodeIds;
    deserialized.incompleteNodeIds = opts.incompleteNodeIds;
    deserialized.globNodeIds = opts.globNodeIds;
    deserialized.envNodeIds = opts.envNodeIds;
    deserialized.optionNodeIds = opts.optionNodeIds;
    deserialized.unpredicatableNodeIds = opts.unpredicatableNodeIds;
    deserialized.invalidateOnBuildNodeIds = opts.invalidateOnBuildNodeIds;
    return deserialized;
  } // $FlowFixMe[prop-missing]


  serialize() {
    return { ...super.serialize(),
      invalidNodeIds: this.invalidNodeIds,
      incompleteNodeIds: this.incompleteNodeIds,
      globNodeIds: this.globNodeIds,
      envNodeIds: this.envNodeIds,
      optionNodeIds: this.optionNodeIds,
      unpredicatableNodeIds: this.unpredicatableNodeIds,
      invalidateOnBuildNodeIds: this.invalidateOnBuildNodeIds
    };
  } // addNode for RequestGraph should not override the value if added multiple times


  addNode(node) {
    let nodeId = this._contentKeyToNodeId.get(node.id);

    if (nodeId != null) {
      return nodeId;
    }

    nodeId = super.addNodeByContentKey(node.id, node);

    if (node.type === 'glob') {
      this.globNodeIds.add(nodeId);
    } else if (node.type === 'env') {
      this.envNodeIds.add(nodeId);
    } else if (node.type === 'option') {
      this.optionNodeIds.add(nodeId);
    }

    return nodeId;
  }

  removeNode(nodeId) {
    this.invalidNodeIds.delete(nodeId);
    this.incompleteNodeIds.delete(nodeId);
    this.incompleteNodePromises.delete(nodeId);
    this.unpredicatableNodeIds.delete(nodeId);
    this.invalidateOnBuildNodeIds.delete(nodeId);
    let node = (0, _nullthrows().default)(this.getNode(nodeId));

    if (node.type === 'glob') {
      this.globNodeIds.delete(nodeId);
    } else if (node.type === 'env') {
      this.envNodeIds.delete(nodeId);
    } else if (node.type === 'option') {
      this.optionNodeIds.delete(nodeId);
    }

    return super.removeNode(nodeId);
  }

  getRequestNode(nodeId) {
    let node = (0, _nullthrows().default)(this.getNode(nodeId));
    (0, _assert().default)(node.type === 'request');
    return node;
  }

  replaceSubrequests(requestNodeId, subrequestContentKeys) {
    let subrequestNodeIds = [];

    for (let key of subrequestContentKeys) {
      if (this.hasContentKey(key)) {
        subrequestNodeIds.push(this.getNodeIdByContentKey(key));
      }
    }

    this.replaceNodeIdsConnectedTo(requestNodeId, subrequestNodeIds, null, requestGraphEdgeTypes.subrequest);
  }

  invalidateNode(nodeId, reason) {
    let node = (0, _nullthrows().default)(this.getNode(nodeId));
    (0, _assert().default)(node.type === 'request');
    node.invalidateReason |= reason;
    this.invalidNodeIds.add(nodeId);
    let parentNodes = this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.subrequest);

    for (let parentNode of parentNodes) {
      this.invalidateNode(parentNode, reason);
    }
  }

  invalidateUnpredictableNodes() {
    for (let nodeId of this.unpredicatableNodeIds) {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type !== 'file' && node.type !== 'glob');
      this.invalidateNode(nodeId, _constants.STARTUP);
    }
  }

  invalidateOnBuildNodes() {
    for (let nodeId of this.invalidateOnBuildNodeIds) {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type !== 'file' && node.type !== 'glob');
      this.invalidateNode(nodeId, _constants.STARTUP);
    }
  }

  invalidateEnvNodes(env) {
    for (let nodeId of this.envNodeIds) {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type === 'env');

      if (env[node.value.key] !== node.value.value) {
        let parentNodes = this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.invalidated_by_update);

        for (let parentNode of parentNodes) {
          this.invalidateNode(parentNode, _constants.ENV_CHANGE);
        }
      }
    }
  }

  invalidateOptionNodes(options) {
    for (let nodeId of this.optionNodeIds) {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type === 'option');

      if ((0, _utils2.hashFromOption)(options[node.value.key]) !== node.value.hash) {
        let parentNodes = this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.invalidated_by_update);

        for (let parentNode of parentNodes) {
          this.invalidateNode(parentNode, _constants.OPTION_CHANGE);
        }
      }
    }
  }

  invalidateOnFileUpdate(requestNodeId, filePath) {
    let fileNodeId = this.addNode(nodeFromFilePath(filePath));

    if (!this.hasEdge(requestNodeId, fileNodeId, requestGraphEdgeTypes.invalidated_by_update)) {
      this.addEdge(requestNodeId, fileNodeId, requestGraphEdgeTypes.invalidated_by_update);
    }
  }

  invalidateOnFileDelete(requestNodeId, filePath) {
    let fileNodeId = this.addNode(nodeFromFilePath(filePath));

    if (!this.hasEdge(requestNodeId, fileNodeId, requestGraphEdgeTypes.invalidated_by_delete)) {
      this.addEdge(requestNodeId, fileNodeId, requestGraphEdgeTypes.invalidated_by_delete);
    }
  }

  invalidateOnFileCreate(requestNodeId, input) {
    let node;

    if (input.glob != null) {
      node = nodeFromGlob(input.glob);
    } else if (input.fileName != null && input.aboveFilePath != null) {
      let aboveFilePath = input.aboveFilePath; // Create nodes and edges for each part of the filename pattern.
      // For example, 'node_modules/foo' would create two nodes and one edge.
      // This creates a sort of trie structure within the graph that can be
      // quickly matched by following the edges. This is also memory efficient
      // since common sub-paths (e.g. 'node_modules') are deduplicated.

      let parts = input.fileName.split('/').reverse();
      let lastNodeId;

      for (let part of parts) {
        let fileNameNode = nodeFromFileName(part);
        let fileNameNodeId = this.addNode(fileNameNode);

        if (lastNodeId != null && !this.hasEdge(lastNodeId, fileNameNodeId, requestGraphEdgeTypes.dirname)) {
          this.addEdge(lastNodeId, fileNameNodeId, requestGraphEdgeTypes.dirname);
        }

        lastNodeId = fileNameNodeId;
      } // The `aboveFilePath` condition asserts that requests are only invalidated
      // if the file being created is "above" it in the filesystem (e.g. the file
      // is created in a parent directory). There is likely to already be a node
      // for this file in the graph (e.g. the source file) that we can reuse for this.


      node = nodeFromFilePath(aboveFilePath);
      let nodeId = this.addNode(node); // Now create an edge from the `aboveFilePath` node to the first file_name node
      // in the chain created above, and an edge from the last node in the chain back to
      // the `aboveFilePath` node. When matching, we will start from the first node in
      // the chain, and continue following it to parent directories until there is an
      // edge pointing an `aboveFilePath` node that also points to the start of the chain.
      // This indicates a complete match, and any requests attached to the `aboveFilePath`
      // node will be invalidated.

      let firstId = 'file_name:' + parts[0];
      let firstNodeId = this.getNodeIdByContentKey(firstId);

      if (!this.hasEdge(nodeId, firstNodeId, requestGraphEdgeTypes.invalidated_by_create_above)) {
        this.addEdge(nodeId, firstNodeId, requestGraphEdgeTypes.invalidated_by_create_above);
      }

      (0, _assert().default)(lastNodeId != null);

      if (!this.hasEdge(lastNodeId, nodeId, requestGraphEdgeTypes.invalidated_by_create_above)) {
        this.addEdge(lastNodeId, nodeId, requestGraphEdgeTypes.invalidated_by_create_above);
      }
    } else if (input.filePath != null) {
      node = nodeFromFilePath(input.filePath);
    } else {
      throw new Error('Invalid invalidation');
    }

    let nodeId = this.addNode(node);

    if (!this.hasEdge(requestNodeId, nodeId, requestGraphEdgeTypes.invalidated_by_create)) {
      this.addEdge(requestNodeId, nodeId, requestGraphEdgeTypes.invalidated_by_create);
    }
  }

  invalidateOnStartup(requestNodeId) {
    this.getRequestNode(requestNodeId);
    this.unpredicatableNodeIds.add(requestNodeId);
  }

  invalidateOnBuild(requestNodeId) {
    this.getRequestNode(requestNodeId);
    this.invalidateOnBuildNodeIds.add(requestNodeId);
  }

  invalidateOnEnvChange(requestNodeId, env, value) {
    let envNode = nodeFromEnv(env, value);
    let envNodeId = this.addNode(envNode);

    if (!this.hasEdge(requestNodeId, envNodeId, requestGraphEdgeTypes.invalidated_by_update)) {
      this.addEdge(requestNodeId, envNodeId, requestGraphEdgeTypes.invalidated_by_update);
    }
  }

  invalidateOnOptionChange(requestNodeId, option, value) {
    let optionNode = nodeFromOption(option, value);
    let optionNodeId = this.addNode(optionNode);

    if (!this.hasEdge(requestNodeId, optionNodeId, requestGraphEdgeTypes.invalidated_by_update)) {
      this.addEdge(requestNodeId, optionNodeId, requestGraphEdgeTypes.invalidated_by_update);
    }
  }

  clearInvalidations(nodeId) {
    this.unpredicatableNodeIds.delete(nodeId);
    this.invalidateOnBuildNodeIds.delete(nodeId);
    this.replaceNodeIdsConnectedTo(nodeId, [], null, requestGraphEdgeTypes.invalidated_by_update);
    this.replaceNodeIdsConnectedTo(nodeId, [], null, requestGraphEdgeTypes.invalidated_by_delete);
    this.replaceNodeIdsConnectedTo(nodeId, [], null, requestGraphEdgeTypes.invalidated_by_create);
  }

  getInvalidations(requestNodeId) {
    if (!this.hasNode(requestNodeId)) {
      return [];
    } // For now just handling updates. Could add creates/deletes later if needed.


    let invalidations = this.getNodeIdsConnectedFrom(requestNodeId, requestGraphEdgeTypes.invalidated_by_update);
    return invalidations.map(nodeId => {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));

      switch (node.type) {
        case 'file':
          return {
            type: 'file',
            filePath: node.value.filePath
          };

        case 'env':
          return {
            type: 'env',
            key: node.value.key
          };

        case 'option':
          return {
            type: 'option',
            key: node.value.key
          };
      }
    }).filter(Boolean);
  }

  getSubRequests(requestNodeId) {
    if (!this.hasNode(requestNodeId)) {
      return [];
    }

    let subRequests = this.getNodeIdsConnectedFrom(requestNodeId, requestGraphEdgeTypes.subrequest);
    return subRequests.map(nodeId => {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type === 'request');
      return node.value;
    });
  }

  getInvalidSubRequests(requestNodeId) {
    if (!this.hasNode(requestNodeId)) {
      return [];
    }

    let subRequests = this.getNodeIdsConnectedFrom(requestNodeId, requestGraphEdgeTypes.subrequest);
    return subRequests.filter(id => this.invalidNodeIds.has(id)).map(nodeId => {
      let node = (0, _nullthrows().default)(this.getNode(nodeId));
      (0, _assert().default)(node.type === 'request');
      return node.value;
    });
  }

  invalidateFileNameNode(node, filePath, matchNodes) {
    // If there is an edge between this file_name node and one of the original file nodes pointed to
    // by the original file_name node, and the matched node is inside the current directory, invalidate
    // all connected requests pointed to by the file node.
    let dirname = _path().default.dirname((0, _projectPath.fromProjectPathRelative)(filePath));

    let nodeId = this.getNodeIdByContentKey(node.id);

    for (let matchNode of matchNodes) {
      let matchNodeId = this.getNodeIdByContentKey(matchNode.id);

      if (this.hasEdge(nodeId, matchNodeId, requestGraphEdgeTypes.invalidated_by_create_above) && (0, _utils().isDirectoryInside)(_path().default.dirname((0, _projectPath.fromProjectPathRelative)(matchNode.value.filePath)), dirname)) {
        let connectedNodes = this.getNodeIdsConnectedTo(matchNodeId, requestGraphEdgeTypes.invalidated_by_create);

        for (let connectedNode of connectedNodes) {
          this.invalidateNode(connectedNode, _constants.FILE_CREATE);
        }
      }
    } // Find the `file_name` node for the parent directory and
    // recursively invalidate connected requests as described above.


    let basename = _path().default.basename(dirname);

    let contentKey = 'file_name:' + basename;

    if (this.hasContentKey(contentKey)) {
      if (this.hasEdge(nodeId, this.getNodeIdByContentKey(contentKey), requestGraphEdgeTypes.dirname)) {
        let parent = (0, _nullthrows().default)(this.getNodeByContentKey(contentKey));
        (0, _assert().default)(parent.type === 'file_name');
        this.invalidateFileNameNode(parent, (0, _projectPath.toProjectPathUnsafe)(dirname), matchNodes);
      }
    }
  }

  respondToFSEvents(events) {
    let didInvalidate = false;

    for (let {
      path: _filePath,
      type
    } of events) {
      let filePath = (0, _projectPath.fromProjectPathRelative)(_filePath);
      let hasFileRequest = this.hasContentKey(filePath); // If we see a 'create' event for the project root itself,
      // this means the project root was moved and we need to
      // re-run all requests.

      if (type === 'create' && filePath === '') {
        for (let [id, node] of this.nodes) {
          if (node.type === 'request') {
            this.invalidNodeIds.add(id);
          }
        }

        return true;
      } // sometimes mac os reports update events as create events.
      // if it was a create event, but the file already exists in the graph,
      // then also invalidate nodes connected by invalidated_by_update edges.


      if (hasFileRequest && (type === 'create' || type === 'update')) {
        let nodeId = this.getNodeIdByContentKey(filePath);
        let nodes = this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.invalidated_by_update);

        for (let connectedNode of nodes) {
          didInvalidate = true;
          this.invalidateNode(connectedNode, _constants.FILE_UPDATE);
        }

        if (type === 'create') {
          let nodes = this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.invalidated_by_create);

          for (let connectedNode of nodes) {
            didInvalidate = true;
            this.invalidateNode(connectedNode, _constants.FILE_CREATE);
          }
        }
      } else if (type === 'create') {
        let basename = _path().default.basename(filePath);

        let fileNameNode = this.getNodeByContentKey('file_name:' + basename);

        if (fileNameNode != null && (fileNameNode === null || fileNameNode === void 0 ? void 0 : fileNameNode.type) === 'file_name') {
          let fileNameNodeId = this.getNodeIdByContentKey('file_name:' + basename); // Find potential file nodes to be invalidated if this file name pattern matches

          let above = this.getNodeIdsConnectedTo(fileNameNodeId, requestGraphEdgeTypes.invalidated_by_create_above).map(nodeId => {
            let node = (0, _nullthrows().default)(this.getNode(nodeId));
            (0, _assert().default)(node.type === 'file');
            return node;
          });

          if (above.length > 0) {
            didInvalidate = true;
            this.invalidateFileNameNode(fileNameNode, _filePath, above);
          }
        }

        for (let globeNodeId of this.globNodeIds) {
          let globNode = this.getNode(globeNodeId);
          (0, _assert().default)(globNode && globNode.type === 'glob');

          if ((0, _utils().isGlobMatch)(filePath, (0, _projectPath.fromProjectPathRelative)(globNode.value))) {
            let connectedNodes = this.getNodeIdsConnectedTo(globeNodeId, requestGraphEdgeTypes.invalidated_by_create);

            for (let connectedNode of connectedNodes) {
              didInvalidate = true;
              this.invalidateNode(connectedNode, _constants.FILE_CREATE);
            }
          }
        }
      } else if (hasFileRequest && type === 'delete') {
        let nodeId = this.getNodeIdByContentKey(filePath);

        for (let connectedNode of this.getNodeIdsConnectedTo(nodeId, requestGraphEdgeTypes.invalidated_by_delete)) {
          didInvalidate = true;
          this.invalidateNode(connectedNode, _constants.FILE_DELETE);
        } // Delete the file node since it doesn't exist anymore.
        // This ensures that files that don't exist aren't sent
        // to requests as invalidations for future requests.


        this.removeNode(nodeId);
      }
    }

    return didInvalidate && this.invalidNodeIds.size > 0;
  }

}

exports.RequestGraph = RequestGraph;

class RequestTracker {
  constructor({
    graph,
    farm,
    options
  }) {
    this.graph = graph || new RequestGraph();
    this.farm = farm;
    this.options = options;
  } // TODO: refactor (abortcontroller should be created by RequestTracker)


  setSignal(signal) {
    this.signal = signal;
  }

  startRequest(request) {
    let didPreviouslyExist = this.graph.hasContentKey(request.id);
    let requestNodeId;

    if (didPreviouslyExist) {
      requestNodeId = this.graph.getNodeIdByContentKey(request.id); // Clear existing invalidations for the request so that the new
      // invalidations created during the request replace the existing ones.

      this.graph.clearInvalidations(requestNodeId);
    } else {
      requestNodeId = this.graph.addNode(nodeFromRequest(request));
    }

    this.graph.incompleteNodeIds.add(requestNodeId);
    this.graph.invalidNodeIds.delete(requestNodeId);
    let {
      promise,
      deferred
    } = (0, _utils().makeDeferredWithPromise)();
    this.graph.incompleteNodePromises.set(requestNodeId, promise);
    return {
      requestNodeId,
      deferred
    };
  } // If a cache key is provided, the result will be removed from the node and stored in a separate cache entry


  storeResult(nodeId, result, cacheKey) {
    let node = this.graph.getNode(nodeId);

    if (node && node.type === 'request') {
      node.value.result = result;
      node.value.resultCacheKey = cacheKey;
    }
  }

  hasValidResult(nodeId) {
    return this.graph.hasNode(nodeId) && !this.graph.invalidNodeIds.has(nodeId) && !this.graph.incompleteNodeIds.has(nodeId);
  }

  async getRequestResult(contentKey, ifMatch) {
    let node = (0, _nullthrows().default)(this.graph.getNodeByContentKey(contentKey));
    (0, _assert().default)(node.type === 'request');

    if (ifMatch != null && node.value.resultCacheKey !== ifMatch) {
      return null;
    }

    if (node.value.result != undefined) {
      // $FlowFixMe
      let result = node.value.result;
      return result;
    } else if (node.value.resultCacheKey != null && ifMatch == null) {
      let key = node.value.resultCacheKey;
      (0, _assert().default)(this.options.cache.hasLargeBlob(key));
      let cachedResult = (0, _serializer.deserialize)(await this.options.cache.getLargeBlob(key));
      node.value.result = cachedResult;
      return cachedResult;
    }
  }

  completeRequest(nodeId) {
    this.graph.invalidNodeIds.delete(nodeId);
    this.graph.incompleteNodeIds.delete(nodeId);
    this.graph.incompleteNodePromises.delete(nodeId);
    let node = this.graph.getNode(nodeId);

    if ((node === null || node === void 0 ? void 0 : node.type) === 'request') {
      node.invalidateReason = _constants.VALID;
    }
  }

  rejectRequest(nodeId) {
    this.graph.incompleteNodeIds.delete(nodeId);
    this.graph.incompleteNodePromises.delete(nodeId);
    let node = this.graph.getNode(nodeId);

    if ((node === null || node === void 0 ? void 0 : node.type) === 'request') {
      this.graph.invalidateNode(nodeId, _constants.ERROR);
    }
  }

  respondToFSEvents(events) {
    return this.graph.respondToFSEvents(events);
  }

  hasInvalidRequests() {
    return this.graph.invalidNodeIds.size > 0;
  }

  getInvalidRequests() {
    let invalidRequests = [];

    for (let id of this.graph.invalidNodeIds) {
      let node = (0, _nullthrows().default)(this.graph.getNode(id));
      (0, _assert().default)(node.type === 'request');
      invalidRequests.push(node.value);
    }

    return invalidRequests;
  }

  replaceSubrequests(requestNodeId, subrequestContextKeys) {
    this.graph.replaceSubrequests(requestNodeId, subrequestContextKeys);
  }

  async runRequest(request, opts) {
    let requestId = this.graph.hasContentKey(request.id) ? this.graph.getNodeIdByContentKey(request.id) : undefined;
    let hasValidResult = requestId != null && this.hasValidResult(requestId);

    if (!(opts !== null && opts !== void 0 && opts.force) && hasValidResult) {
      // $FlowFixMe[incompatible-type]
      return this.getRequestResult(request.id);
    }

    if (requestId != null) {
      let incompletePromise = this.graph.incompleteNodePromises.get(requestId);

      if (incompletePromise != null) {
        // There is a another instance of this request already running, wait for its completion and reuse its result
        try {
          if (await incompletePromise) {
            // $FlowFixMe[incompatible-type]
            return this.getRequestResult(request.id);
          }
        } catch (e) {// Rerun this request
        }
      }
    }

    let previousInvalidations = requestId != null ? this.graph.getInvalidations(requestId) : [];
    let {
      requestNodeId,
      deferred
    } = this.startRequest({
      id: request.id,
      type: request.type
    });
    let {
      api,
      subRequestContentKeys
    } = this.createAPI(requestNodeId, previousInvalidations);

    try {
      let node = this.graph.getRequestNode(requestNodeId);
      let result = await request.run({
        input: request.input,
        api,
        farm: this.farm,
        options: this.options,
        invalidateReason: node.invalidateReason
      });
      (0, _utils2.assertSignalNotAborted)(this.signal);
      this.completeRequest(requestNodeId);
      deferred.resolve(true);
      return result;
    } catch (err) {
      this.rejectRequest(requestNodeId);
      deferred.resolve(false);
      throw err;
    } finally {
      this.graph.replaceSubrequests(requestNodeId, [...subRequestContentKeys]);
    }
  }

  createAPI(requestId, previousInvalidations) {
    let subRequestContentKeys = new Set();
    return {
      api: {
        invalidateOnFileCreate: input => this.graph.invalidateOnFileCreate(requestId, input),
        invalidateOnFileDelete: filePath => this.graph.invalidateOnFileDelete(requestId, filePath),
        invalidateOnFileUpdate: filePath => this.graph.invalidateOnFileUpdate(requestId, filePath),
        invalidateOnStartup: () => this.graph.invalidateOnStartup(requestId),
        invalidateOnBuild: () => this.graph.invalidateOnBuild(requestId),
        invalidateOnEnvChange: env => this.graph.invalidateOnEnvChange(requestId, env, this.options.env[env]),
        invalidateOnOptionChange: option => this.graph.invalidateOnOptionChange(requestId, option, this.options[option]),
        getInvalidations: () => previousInvalidations,
        storeResult: (result, cacheKey) => {
          this.storeResult(requestId, result, cacheKey);
        },
        getSubRequests: () => this.graph.getSubRequests(requestId),
        getInvalidSubRequests: () => this.graph.getInvalidSubRequests(requestId),
        getPreviousResult: ifMatch => {
          var _this$graph$getNode;

          let contentKey = (0, _nullthrows().default)((_this$graph$getNode = this.graph.getNode(requestId)) === null || _this$graph$getNode === void 0 ? void 0 : _this$graph$getNode.id);
          return this.getRequestResult(contentKey, ifMatch);
        },
        getRequestResult: id => this.getRequestResult(id),
        canSkipSubrequest: contentKey => {
          if (this.graph.hasContentKey(contentKey) && this.hasValidResult(this.graph.getNodeIdByContentKey(contentKey))) {
            subRequestContentKeys.add(contentKey);
            return true;
          }

          return false;
        },
        runRequest: (subRequest, opts) => {
          subRequestContentKeys.add(subRequest.id);
          return this.runRequest(subRequest, opts);
        }
      },
      subRequestContentKeys
    };
  }

  async writeToCache() {
    let cacheKey = getCacheKey(this.options);
    let requestGraphKey = (0, _hash().hashString)(`${cacheKey}:requestGraph`);
    let snapshotKey = (0, _hash().hashString)(`${cacheKey}:snapshot`);

    if (this.options.shouldDisableCache) {
      return;
    }

    let promises = [];

    for (let [, node] of this.graph.nodes) {
      if (node.type !== 'request') {
        continue;
      }

      let resultCacheKey = node.value.resultCacheKey;

      if (resultCacheKey != null && node.value.result != null) {
        promises.push(this.options.cache.setLargeBlob(resultCacheKey, (0, _serializer.serialize)(node.value.result)));
        delete node.value.result;
      }
    }

    promises.push(this.options.cache.setLargeBlob(requestGraphKey, (0, _serializer.serialize)(this.graph)));
    let opts = getWatcherOptions(this.options);

    let snapshotPath = _path().default.join(this.options.cacheDir, snapshotKey + '.txt');

    promises.push(this.options.inputFS.writeSnapshot(this.options.projectRoot, snapshotPath, opts));
    await Promise.all(promises);
  }

  static async init({
    farm,
    options
  }) {
    let graph = await loadRequestGraph(options);
    return new RequestTracker({
      farm,
      options,
      graph
    });
  }

}

exports.default = RequestTracker;

function getWatcherOptions(options) {
  let vcsDirs = ['.git', '.hg'].map(dir => _path().default.join(options.projectRoot, dir));
  let ignore = [options.cacheDir, ...vcsDirs];
  return {
    ignore
  };
}

function getCacheKey(options) {
  return `${_constants.PARCEL_VERSION}:${JSON.stringify(options.entries)}:${options.mode}`;
}

async function loadRequestGraph(options) {
  if (options.shouldDisableCache) {
    return new RequestGraph();
  }

  let cacheKey = getCacheKey(options);
  let requestGraphKey = (0, _hash().hashString)(`${cacheKey}:requestGraph`);

  if (await options.cache.hasLargeBlob(requestGraphKey)) {
    let requestGraph = (0, _serializer.deserialize)(await options.cache.getLargeBlob(requestGraphKey));
    let opts = getWatcherOptions(options);
    let snapshotKey = (0, _hash().hashString)(`${cacheKey}:snapshot`);

    let snapshotPath = _path().default.join(options.cacheDir, snapshotKey + '.txt');

    let events = await options.inputFS.getEventsSince(options.projectRoot, snapshotPath, opts);
    requestGraph.invalidateUnpredictableNodes();
    requestGraph.invalidateOnBuildNodes();
    requestGraph.invalidateEnvNodes(options.env);
    requestGraph.invalidateOptionNodes(options);
    requestGraph.respondToFSEvents(events.map(e => ({
      type: e.type,
      path: (0, _projectPath.toProjectPath)(options.projectRoot, e.path)
    })));
    return requestGraph;
  }

  return new RequestGraph();
}