"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getComponents = _interopRequireDefault(require("./getComponents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CORE = 'prismjs/components/prism-core';

var _default = function _default(_ref) {
  var t = _ref.types;
  return {
    name: 'prismjs',
    visitor: {
      ImportDeclaration: function ImportDeclaration(path, _ref2) {
        var opts = _ref2.opts;

        if (path.node.source.value !== 'prismjs') {
          return;
        }

        path.replaceWith(t.importDeclaration(path.node.specifiers, t.stringLiteral(CORE)));
        path.insertAfter((0, _getComponents["default"])(opts).map(function (component) {
          return t.importDeclaration([], t.stringLiteral(component));
        }));
      }
    }
  };
};

exports["default"] = _default;