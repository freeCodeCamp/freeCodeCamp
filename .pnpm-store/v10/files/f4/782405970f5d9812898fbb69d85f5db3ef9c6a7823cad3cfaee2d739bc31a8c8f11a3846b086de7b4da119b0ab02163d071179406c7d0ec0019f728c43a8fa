"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ESMOutputFormat = void 0;

class ESMOutputFormat {
  constructor(packager) {
    this.packager = packager;
  }

  buildBundlePrelude() {
    let res = '';
    let lines = 0;

    for (let [source, specifiers] of this.packager.externals) {
      let defaultSpecifier = null;
      let namespaceSpecifier = null;
      let namedSpecifiers = [];

      for (let [imported, symbol] of specifiers) {
        if (imported === 'default'
        /* || isCommonJS*/
        ) {
          defaultSpecifier = symbol;
        } else if (imported === '*') {
          namespaceSpecifier = `* as ${symbol}`;
        } else {
          let specifier = imported;

          if (symbol !== imported) {
            specifier += ` as ${symbol}`;
          }

          namedSpecifiers.push(specifier);
        }
      } // ESModule syntax allows combining default and namespace specifiers, or default and named, but not all three.


      let imported = '';

      if (namespaceSpecifier) {
        let s = namespaceSpecifier;

        if (defaultSpecifier) {
          s = `${defaultSpecifier}, ${namespaceSpecifier}`;
        }

        res += `import ${s} from ${JSON.stringify(source)};\n`;
        lines++;
      } else if (defaultSpecifier) {
        imported = defaultSpecifier;

        if (namedSpecifiers.length > 0) {
          imported += `, {${namedSpecifiers.join(', ')}}`;
        }
      } else if (namedSpecifiers.length > 0) {
        imported = `{${namedSpecifiers.join(', ')}}`;
      }

      if (imported.length > 0) {
        res += `import ${imported} from ${JSON.stringify(source)};\n`;
        lines++;
      } else if (!namespaceSpecifier) {
        res += `import ${JSON.stringify(source)};\n`;
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
    let res = '';
    let lines = 0;
    let exportSpecifiers = [];

    for (let {
      asset,
      exportSymbol,
      local,
      exportAs
    } of this.packager.exportedSymbols.values()) {
      if (this.packager.wrappedAssets.has(asset.id)) {
        let obj = `parcelRequire("${this.packager.bundleGraph.getAssetPublicId(asset)}")`;
        res += `\nvar ${local} = ${this.packager.getPropertyAccess(obj, exportSymbol)};`;
        lines++;
      }

      for (let as of exportAs) {
        let specifier = local;

        if (exportAs !== local) {
          specifier += ` as ${as}`;
        }

        exportSpecifiers.push(specifier);
      }
    }

    if (exportSpecifiers.length > 0) {
      res += `\nexport {${exportSpecifiers.join(', ')}};`;
      lines++;
    }

    return [res, lines];
  }

}

exports.ESMOutputFormat = ESMOutputFormat;