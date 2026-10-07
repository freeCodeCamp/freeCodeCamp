"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _genMapping = require("@jridgewell/gen-mapping");
var _traceMapping = require("@jridgewell/trace-mapping");
class SourceMap {
  constructor(opts, code) {
    var _opts$sourceFileName;
    this._map = void 0;
    this._rawMappings = void 0;
    this._sourceFileName = void 0;
    this._lastGenLine = 0;
    this._lastSourceLine = 0;
    this._lastSourceColumn = 0;
    this._inputMap = null;
    const map = this._map = new _genMapping.GenMapping({
      sourceRoot: opts.sourceRoot
    });
    this._sourceFileName = (_opts$sourceFileName = opts.sourceFileName) == null ? void 0 : _opts$sourceFileName.replace(/\\/g, "/");
    this._rawMappings = undefined;
    if (opts.inputSourceMap) {
      this._inputMap = new _traceMapping.TraceMap(opts.inputSourceMap);
      const resolvedSources = this._inputMap.resolvedSources;
      if (resolvedSources.length) {
        for (let i = 0; i < resolvedSources.length; i++) {
          var _this$_inputMap$sourc;
          (0, _genMapping.setSourceContent)(map, resolvedSources[i], (_this$_inputMap$sourc = this._inputMap.sourcesContent) == null ? void 0 : _this$_inputMap$sourc[i]);
        }
      }
    }
    if (typeof code === "string" && !opts.inputSourceMap) {
      (0, _genMapping.setSourceContent)(map, this._sourceFileName, code);
    } else if (typeof code === "object") {
      for (const sourceFileName of Object.keys(code)) {
        (0, _genMapping.setSourceContent)(map, sourceFileName.replace(/\\/g, "/"), code[sourceFileName]);
      }
    }
  }
  get() {
    return (0, _genMapping.toEncodedMap)(this._map);
  }
  getDecoded() {
    return (0, _genMapping.toDecodedMap)(this._map);
  }
  getRawMappings() {
    return this._rawMappings || (this._rawMappings = (0, _genMapping.allMappings)(this._map));
  }
  mark(generated, line, column, identifierName, identifierNamePos, filename) {
    var _originalMapping;
    this._rawMappings = undefined;
    let originalMapping;
    if (line != null) {
      if (this._inputMap) {
        originalMapping = (0, _traceMapping.originalPositionFor)(this._inputMap, {
          line,
          column: column
        });
        if (!originalMapping.name && identifierNamePos) {
          const originalIdentifierMapping = (0, _traceMapping.originalPositionFor)(this._inputMap, identifierNamePos);
          if (originalIdentifierMapping.name) {
            identifierName = originalIdentifierMapping.name;
          }
        }
      } else {
        originalMapping = {
          name: null,
          source: (filename == null ? void 0 : filename.replace(/\\/g, "/")) || this._sourceFileName,
          line: line,
          column: column
        };
      }
    }
    (0, _genMapping.maybeAddMapping)(this._map, {
      name: identifierName,
      generated,
      source: (_originalMapping = originalMapping) == null ? void 0 : _originalMapping.source,
      original: originalMapping
    });
  }
}
exports.default = SourceMap;

//# sourceMappingURL=source-map.js.map
