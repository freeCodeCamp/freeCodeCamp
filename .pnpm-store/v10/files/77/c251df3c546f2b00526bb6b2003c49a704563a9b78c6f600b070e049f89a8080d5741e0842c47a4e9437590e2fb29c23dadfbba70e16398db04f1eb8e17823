"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.collectSlices = collectSlices;
exports.mergePreviouslyCollectedSlices = mergePreviouslyCollectedSlices;
var _traverse = _interopRequireDefault(require("@babel/traverse"));
var _babelJsxUtils = require("babel-jsx-utils");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const SLICES_PROPS = new Set([`alias`, `allowEmpty`]);
function mergePreviouslyCollectedSlice(newInfo, previousInfo) {
  var _previousInfo$allowEm;
  return {
    name: newInfo.name,
    // it's enough for one use of slice that doesn't allow empty
    // to require passing everyhing
    allowEmpty: (previousInfo === null || previousInfo === void 0 ? void 0 : previousInfo.allowEmpty) === false ? false : (_previousInfo$allowEm = previousInfo === null || previousInfo === void 0 ? void 0 : previousInfo.allowEmpty) !== null && _previousInfo$allowEm !== void 0 ? _previousInfo$allowEm : newInfo.allowEmpty
  };
}
function mergePreviouslyCollectedSlices(newInfo, previousInfo) {
  const ret = previousInfo !== null && previousInfo !== void 0 ? previousInfo : {};
  for (const [name, info] of Object.entries(newInfo)) {
    ret[name] = mergePreviouslyCollectedSlice(info, ret[name]);
  }
  return ret;
}
function collectSlices(ast, filename) {
  const result = {};
  let hasResults = false;
  (0, _traverse.default)(ast, {
    JSXOpeningElement(nodePath) {
      if (!nodePath.get(`name`).referencesImport(`gatsby`, `Slice`)) {
        return;
      }
      const unresolvedProps = [];
      const props = (0, _babelJsxUtils.getAttributeValues)(nodePath, prop => {
        unresolvedProps.push(prop);
      }, SLICES_PROPS);
      const {
        alias: name,
        allowEmpty = false
      } = props;
      if (unresolvedProps.length) {
        var _nodePath$node$loc, _nodePath$node$loc$st;
        let locationInFile = ``;
        if ((_nodePath$node$loc = nodePath.node.loc) !== null && _nodePath$node$loc !== void 0 && (_nodePath$node$loc$st = _nodePath$node$loc.start) !== null && _nodePath$node$loc$st !== void 0 && _nodePath$node$loc$st.line) {
          var _nodePath$node$loc2, _nodePath$node$loc2$s;
          locationInFile = `:${nodePath.node.loc.start.line}`;
          if ((_nodePath$node$loc2 = nodePath.node.loc) !== null && _nodePath$node$loc2 !== void 0 && (_nodePath$node$loc2$s = _nodePath$node$loc2.start) !== null && _nodePath$node$loc2$s !== void 0 && _nodePath$node$loc2$s.column) {
            locationInFile += `:${nodePath.node.loc.start.column + 1}`;
          }
        }
        const error = `[Gatsby Slice API] Could not find values in "${filename}${locationInFile}" for the following props at build time: ${unresolvedProps.join(`, `)}`;
        _reporter.default.warn(error);
        return;
      }
      if (name) {
        result[name] = mergePreviouslyCollectedSlice({
          name,
          allowEmpty
        }, result[name]);
        hasResults = true;
      }
    }
  });
  return hasResults ? result : null;
}
//# sourceMappingURL=find-slices.js.map