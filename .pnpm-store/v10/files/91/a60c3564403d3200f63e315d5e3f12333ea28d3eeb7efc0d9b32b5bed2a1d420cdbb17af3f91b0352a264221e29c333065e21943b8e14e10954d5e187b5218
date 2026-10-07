"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpecifier = getSpecifier;
exports.replaceScriptDependencies = replaceScriptDependencies;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This replaces __parcel__require__ references left by the transformer with
// parcelRequire calls of the resolved asset id. This lets runtimes work within
// script bundles, which must be outside the bundle wrapper so their variables are global.
function replaceScriptDependencies(bundleGraph, bundle, code, map, parcelRequireName) {
  let entry = (0, _nullthrows().default)(bundle.getMainEntry());
  let dependencies = bundleGraph.getDependencies(entry);
  let lineCount = 0;
  let offset = 0;
  let columnStartIndex = 0;
  code = code.replace(/\n|__parcel__require__\(['"](.*?)['"]\)/g, (m, s, i) => {
    if (m === '\n') {
      columnStartIndex = i + offset + 1;
      lineCount++;
      return '\n';
    }

    let dep = (0, _nullthrows().default)(dependencies.find(d => getSpecifier(d) === s));
    let resolved = (0, _nullthrows().default)(bundleGraph.getResolvedAsset(dep, bundle));
    let publicId = bundleGraph.getAssetPublicId(resolved);
    let replacement = `${parcelRequireName}("${publicId}")`;

    if (map) {
      let lengthDifference = replacement.length - m.length;

      if (lengthDifference !== 0) {
        map.offsetColumns(lineCount + 1, i + offset - columnStartIndex + m.length, lengthDifference);
        offset += lengthDifference;
      }
    }

    return replacement;
  });
  return code;
}

function getSpecifier(dep) {
  if (typeof dep.meta.placeholder === 'string') {
    return dep.meta.placeholder;
  }

  return dep.specifier;
}