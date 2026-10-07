"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dumpGraphToGraphViz;

var _BundleGraph = require("./BundleGraph");

var _RequestTracker = require("./RequestTracker");

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
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

var _projectPath = require("./projectPath");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const COLORS = {
  root: 'gray',
  asset: 'green',
  dependency: 'orange',
  transformer_request: 'cyan',
  file: 'gray',
  default: 'white'
};
const TYPE_COLORS = {
  // bundle graph
  bundle: 'blue',
  contains: 'grey',
  internal_async: 'orange',
  references: 'red',
  sibling: 'green',
  // asset graph
  // request graph
  invalidated_by_create: 'green',
  invalidated_by_create_above: 'orange',
  invalidate_by_update: 'cyan',
  invalidated_by_delete: 'red'
};

async function dumpGraphToGraphViz(graph, name, edgeTypes) {}

function nodeId(id) {
  // $FlowFixMe
  return `node${id}`;
}

function getEnvDescription(env) {
  var _description;

  let description;

  if (typeof env.engines.browsers === 'string') {
    description = `${env.context}: ${env.engines.browsers}`;
  } else if (Array.isArray(env.engines.browsers)) {
    description = `${env.context}: ${env.engines.browsers.join(', ')}`;
  } else if (env.engines.node) {
    description = `node: ${env.engines.node}`;
  } else if (env.engines.electron) {
    description = `electron: ${env.engines.electron}`;
  }

  return (_description = description) !== null && _description !== void 0 ? _description : '';
}