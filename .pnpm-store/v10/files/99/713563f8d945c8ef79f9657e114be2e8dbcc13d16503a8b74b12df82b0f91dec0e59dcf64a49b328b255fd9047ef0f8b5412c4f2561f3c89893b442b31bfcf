"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Module = _interopRequireDefault(require("./Module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContentModule extends _Module.default {
  constructor(name, data, ownerModule, parent) {
    super(name, data, parent);
    this.ownerModule = ownerModule;
  }

  get parsedSize() {
    return this.getSize('parsedSize');
  }

  get gzipSize() {
    return this.getSize('gzipSize');
  }

  getSize(sizeType) {
    const ownerModuleSize = this.ownerModule[sizeType];

    if (ownerModuleSize !== undefined) {
      return Math.floor(this.size / this.ownerModule.size * ownerModuleSize);
    }
  }

  toChartData() {
    return { ...super.toChartData(),
      inaccurateSizes: true
    };
  }

}

exports.default = ContentModule;
;