"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _SourceMap = _interopRequireDefault(require("./SourceMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bindings = require('../parcel_sourcemap_node/index');

class NodeSourceMap extends _SourceMap.default {
  constructor(projectRoot = '/', buffer) {
    super(projectRoot);
    this.projectRoot = projectRoot;
    this.sourceMapInstance = new bindings.SourceMap(projectRoot, buffer);
  }

  addVLQMap(map, lineOffset = 0, columnOffset = 0) {
    let {
      sourcesContent,
      sources = [],
      mappings,
      names = []
    } = map;

    if (!sourcesContent) {
      sourcesContent = sources.map(() => '');
    } else {
      sourcesContent = sourcesContent.map(content => content ? content : '');
    }

    this.sourceMapInstance.addVLQMap(mappings, JSON.stringify(sources), JSON.stringify(sourcesContent.map(content => content ? content : '')), JSON.stringify(names), lineOffset, columnOffset);
    return this;
  }

  addSourceMap(sourcemap, lineOffset = 0) {
    if (!(sourcemap.sourceMapInstance instanceof bindings.SourceMap)) {
      throw new Error('The sourcemap provided to addSourceMap is not a valid sourcemap instance');
    }

    this.sourceMapInstance.addSourceMap(sourcemap.sourceMapInstance, lineOffset);
    return this;
  }

  addBuffer(buffer, lineOffset = 0) {
    let previousMap = new NodeSourceMap(this.projectRoot, buffer);
    return this.addSourceMap(previousMap, lineOffset);
  }

  extends(input) {
    // $FlowFixMe
    let inputSourceMap = Buffer.isBuffer(input) ? new NodeSourceMap(this.projectRoot, input) : input;
    this.sourceMapInstance.extends(inputSourceMap.sourceMapInstance);
    return this;
  }

  getNames() {
    return JSON.parse(this.sourceMapInstance.getNames());
  }

  getSources() {
    return JSON.parse(this.sourceMapInstance.getSources());
  }

  delete() {}

  static generateEmptyMap({
    projectRoot,
    sourceName,
    sourceContent,
    lineOffset = 0
  }) {
    let map = new NodeSourceMap(projectRoot);
    map.addEmptyMap(sourceName, sourceContent, lineOffset);
    return map;
  }

}

exports.default = NodeSourceMap;
const init = Promise.resolve();
exports.init = init;