"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseFolder = _interopRequireDefault(require("./BaseFolder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ContentFolder extends _BaseFolder.default {
  constructor(name, ownerModule, parent) {
    super(name, parent);
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
      parsedSize: this.parsedSize,
      gzipSize: this.gzipSize,
      inaccurateSizes: true
    };
  }

}

exports.default = ContentFolder;
;