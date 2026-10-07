// @flow
import type {
  ScopeHoistingPackager,
  OutputFormat,
} from './ScopeHoistingPackager';

export class CJSOutputFormat implements OutputFormat {
  packager: ScopeHoistingPackager;

  constructor(packager: ScopeHoistingPackager) {
    this.packager = packager;
  }

  buildBundlePrelude(): [string, number] {
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

  buildBundlePostlude(): [string, number] {
    return ['', 0];
  }
}
