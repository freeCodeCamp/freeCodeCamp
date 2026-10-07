"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gzipSize = _interopRequireDefault(require("gzip-size"));

var _Node = _interopRequireDefault(require("./Node"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Module extends _Node.default {
  constructor(name, data, parent) {
    super(name, parent);
    this.data = data;
  }

  get src() {
    return this.data.parsedSrc;
  }

  set src(value) {
    this.data.parsedSrc = value;
    delete this._gzipSize;
  }

  get size() {
    return this.data.size;
  }

  set size(value) {
    this.data.size = value;
  }

  get parsedSize() {
    return this.getParsedSize();
  }

  get gzipSize() {
    return this.getGzipSize();
  }

  getParsedSize() {
    return this.src ? this.src.length : undefined;
  }

  getGzipSize() {
    if (!('_gzipSize' in this)) {
      this._gzipSize = this.src ? _gzipSize.default.sync(this.src) : undefined;
    }

    return this._gzipSize;
  }

  mergeData(data) {
    if (data.size) {
      this.size += data.size;
    }

    if (data.parsedSrc) {
      this.src = (this.src || '') + data.parsedSrc;
    }
  }

  toChartData() {
    return {
      id: this.data.id,
      label: this.name,
      path: this.path,
      statSize: this.size,
      parsedSize: this.parsedSize,
      gzipSize: this.gzipSize
    };
  }

}

exports.default = Module;
;