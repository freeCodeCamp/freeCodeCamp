"use strict";

exports.__esModule = true;
exports.default = addSlicePlaceholderLocation;
var _path = require("path");
var _redux = require("../../redux");
/**
 * This is a plugin that finds Slice placeholder components and injects the __renderedByLocation prop
 * with filename and location in the file where the placeholder was found. This is later used to provide
 * more useful error messages when the user props are invalid showing codeframe where user tries to render it
 * instead of codeframe of the Slice component itself (internals of gatsby) that is not useful for the user.
 */

function addSlicePlaceholderLocation({
  types: t
}) {
  return {
    name: `babel-plugin-add-slice-placeholder-location`,
    visitor: {
      JSXOpeningElement(nodePath) {
        if (!nodePath.get(`name`).referencesImport(`gatsby`, `Slice`)) {
          return;
        }
        if (this.file.opts.filename) {
          var _nodePath$node$loc;
          const __renderedByLocationProperties = [t.objectProperty(t.identifier(`fileName`), t.stringLiteral((0, _path.relative)(_redux.store.getState().program.directory, this.file.opts.filename)))];
          if ((_nodePath$node$loc = nodePath.node.loc) !== null && _nodePath$node$loc !== void 0 && _nodePath$node$loc.start.line) {
            var _nodePath$node$loc2, _nodePath$node$loc3;
            __renderedByLocationProperties.push(t.objectProperty(t.identifier(`lineNumber`), t.numericLiteral(nodePath.node.loc.start.line)));
            if ((_nodePath$node$loc2 = nodePath.node.loc) !== null && _nodePath$node$loc2 !== void 0 && _nodePath$node$loc2.start.column) {
              __renderedByLocationProperties.push(t.objectProperty(t.identifier(`columnNumber`), t.numericLiteral(nodePath.node.loc.start.column + 1)));
            }
            if ((_nodePath$node$loc3 = nodePath.node.loc) !== null && _nodePath$node$loc3 !== void 0 && _nodePath$node$loc3.end.line) {
              var _nodePath$node$loc4;
              __renderedByLocationProperties.push(t.objectProperty(t.identifier(`endLineNumber`), t.numericLiteral(nodePath.node.loc.end.line)));
              if ((_nodePath$node$loc4 = nodePath.node.loc) !== null && _nodePath$node$loc4 !== void 0 && _nodePath$node$loc4.end.column) {
                __renderedByLocationProperties.push(t.objectProperty(t.identifier(`endColumnNumber`), t.numericLiteral(nodePath.node.loc.end.column + 1)));
              }
            }
          }
          const newProp = t.jsxAttribute(t.jsxIdentifier(`__renderedByLocation`), t.jsxExpressionContainer(t.objectExpression(__renderedByLocationProperties)));
          nodePath.node.attributes.push(newProp);
        }
      }
    }
  };
}
//# sourceMappingURL=babel-plugin-add-slice-placeholder-location.js.map