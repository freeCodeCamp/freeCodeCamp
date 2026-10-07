"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];

const create = context => {
  const always = (context.options[0] || 'always') === 'always';

  if (always) {
    const sourceCode = context.getSourceCode(); // nodes representing type and import declarations

    const ignoredNodes = [// import ...
    node => {
      return node.type === 'ImportDeclaration';
    }, // export type Foo = ...
    // export opaque type Foo = ...
    // export type Foo from ...
    // export opaque type Foo from ...
    node => {
      return node.type === 'ExportNamedDeclaration' && node.exportKind === 'type';
    }, // type Foo = ...
    node => {
      return node.type === 'TypeAlias';
    }, // opaque type Foo = ...
    node => {
      return node.type === 'OpaqueType';
    }];

    const isIgnoredNode = node => {
      for (const predicate of ignoredNodes) {
        if (predicate(node)) {
          return true;
        }
      }

      return false;
    };

    let regularCodeStartRange;

    for (const node of sourceCode.ast.body) {
      if (!isIgnoredNode(node)) {
        regularCodeStartRange = node.range;
        break;
      }
    }

    if (!_lodash.default.isArray(regularCodeStartRange)) {
      // a source with only ignored nodes
      return {};
    }

    return {
      'TypeAlias, OpaqueType'(node) {
        if (node.range[0] > regularCodeStartRange[0]) {
          context.report({
            message: 'All type declaration should be at the top of the file, after any import declarations.',
            node
          });
        }
      }

    };
  } else {
    return {};
  }
};

var _default = {
  create,
  schema
};
exports.default = _default;
module.exports = exports.default;