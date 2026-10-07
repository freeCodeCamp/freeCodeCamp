"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalOutputFormat = void 0;

class GlobalOutputFormat {
  constructor(packager) {
    this.packager = packager;
  }

  buildBundlePrelude() {
    let prelude = this.packager.bundle.env.supports('arrow-functions', true) ? '(() => {\n' : '(function () {\n';
    return [prelude, 1];
  }

  buildBundlePostlude() {
    return ['})();', 0];
  }

}

exports.GlobalOutputFormat = GlobalOutputFormat;