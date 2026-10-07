"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CJSOutputFormat = void 0;

class CJSOutputFormat {
  constructor(packager) {
    this.packager = packager;
  }

  buildBundlePrelude() {
    let res = '';
    let lines = 0;

    for (let [source, specifiers] of this.packager.externals) {
      // CJS only supports the namespace symbol. This ensures that all accesses
      // are live and the `this` binding is correct.
      let namespace = specifiers.get('*');

      if (namespace) {
        res += `var ${namespace} = require(${JSON.stringify(source)});\n`;
        lines++;
      } else {
        res += `require(${JSON.stringify(source)});\n`;
        lines++;
      }
    }

    if (res.length > 0) {
      res += '\n';
      lines++;
    }

    return [res, lines];
  }

  buildBundlePostlude() {
    return ['', 0];
  }

}

exports.CJSOutputFormat = CJSOutputFormat;