"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Graph = _interopRequireDefault(require("./Graph"));

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContentGraph extends _Graph.default {
  constructor(opts) {
    if (opts) {
      let {
        _contentKeyToNodeId,
        _nodeIdToContentKey,
        ...rest
      } = opts;
      super(rest);
      this._contentKeyToNodeId = _contentKeyToNodeId;
      this._nodeIdToContentKey = _nodeIdToContentKey;
    } else {
      super();
      this._contentKeyToNodeId = new Map();
      this._nodeIdToContentKey = new Map();
    }
  } // $FlowFixMe[prop-missing]


  static deserialize(opts) {
    return new ContentGraph(opts);
  } // $FlowFixMe[prop-missing]


  serialize() {
    // $FlowFixMe[prop-missing]
    return { ...super.serialize(),
      _contentKeyToNodeId: this._contentKeyToNodeId,
      _nodeIdToContentKey: this._nodeIdToContentKey
    };
  }

  addNodeByContentKey(contentKey, node) {
    if (this.hasContentKey(contentKey)) {
      throw new Error('Graph already has content key ' + contentKey);
    }

    let nodeId = super.addNode(node);

    this._contentKeyToNodeId.set(contentKey, nodeId);

    this._nodeIdToContentKey.set(nodeId, contentKey);

    return nodeId;
  }

  addNodeByContentKeyIfNeeded(contentKey, node) {
    return this.hasContentKey(contentKey) ? this.getNodeIdByContentKey(contentKey) : this.addNodeByContentKey(contentKey, node);
  }

  getNodeByContentKey(contentKey) {
    let nodeId = this._contentKeyToNodeId.get(contentKey);

    if (nodeId != null) {
      return super.getNode(nodeId);
    }
  }

  getNodeIdByContentKey(contentKey) {
    return (0, _nullthrows().default)(this._contentKeyToNodeId.get(contentKey), `Expected content key ${contentKey} to exist`);
  }

  hasContentKey(contentKey) {
    return this._contentKeyToNodeId.has(contentKey);
  }

  removeNode(nodeId) {
    this._assertHasNodeId(nodeId);

    let contentKey = (0, _nullthrows().default)(this._nodeIdToContentKey.get(nodeId));

    this._contentKeyToNodeId.delete(contentKey);

    this._nodeIdToContentKey.delete(nodeId);

    super.removeNode(nodeId);
  }

}

exports.default = ContentGraph;