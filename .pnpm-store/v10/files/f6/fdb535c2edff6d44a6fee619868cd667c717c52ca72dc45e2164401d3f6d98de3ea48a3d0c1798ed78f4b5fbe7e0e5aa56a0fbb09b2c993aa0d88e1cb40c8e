"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.init = void 0;

var _path = _interopRequireDefault(require("path"));

var _SourceMap = _interopRequireDefault(require("./SourceMap"));

var bindings = _interopRequireWildcard(require("./wasm-bindings"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const init = typeof bindings.init === 'function' ? bindings.init() : Promise.resolve();
exports.init = init;

class WasmSourceMap extends _SourceMap.default {
  constructor(projectRoot = '/', buffer) {
    super(projectRoot, buffer);
    this.sourceMapInstance = new bindings.SourceMap(projectRoot, buffer);
    this.projectRoot = this.sourceMapInstance.getProjectRoot();
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

    this.sourceMapInstance.addVLQMap(mappings, sources, sourcesContent.map(content => content ? content : ''), names, lineOffset, columnOffset);
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
    let previousMap = new WasmSourceMap(this.projectRoot, buffer);
    return this.addSourceMap(previousMap, lineOffset);
  }

  extends(input) {
    // $FlowFixMe
    let inputSourceMap = input instanceof Uint8Array ? new WasmSourceMap(this.projectRoot, input) : input;
    this.sourceMapInstance.extends(inputSourceMap.sourceMapInstance);
    return this;
  }

  delete() {
    this.sourceMapInstance.free();
  }

  static generateEmptyMap({
    projectRoot,
    sourceName,
    sourceContent,
    lineOffset = 0
  }) {
    let map = new WasmSourceMap(projectRoot);
    map.addEmptyMap(sourceName, sourceContent, lineOffset);
    return map;
  }

}

exports.default = WasmSourceMap;