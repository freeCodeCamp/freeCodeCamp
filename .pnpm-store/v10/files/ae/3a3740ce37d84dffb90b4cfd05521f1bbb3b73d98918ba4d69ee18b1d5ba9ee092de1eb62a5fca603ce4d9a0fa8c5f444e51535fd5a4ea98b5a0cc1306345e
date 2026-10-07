"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deepArray = require("./helpers/deep-array.js");
class Plugin {
  constructor(plugin, options, key, externalDependencies = (0, _deepArray.finalize)([])) {
    this.key = void 0;
    this.manipulateOptions = void 0;
    this.post = void 0;
    this.pre = void 0;
    this.visitor = void 0;
    this.parserOverride = void 0;
    this.generatorOverride = void 0;
    this.options = void 0;
    this.externalDependencies = void 0;
    this.key = plugin.name || key;
    this.manipulateOptions = plugin.manipulateOptions;
    this.post = plugin.post;
    this.pre = plugin.pre;
    this.visitor = plugin.visitor || {};
    this.parserOverride = plugin.parserOverride;
    this.generatorOverride = plugin.generatorOverride;
    this.options = options;
    this.externalDependencies = externalDependencies;
  }
}
exports.default = Plugin;
0 && 0;

//# sourceMappingURL=plugin.js.map
