"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSimpleType = _interopRequireDefault(require("./isSimpleType"));

var _needWrap = _interopRequireDefault(require("./needWrap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  enum: ['verbose', 'shorthand'],
  type: 'string'
}];

const inlineType = type => {
  const inlined = type.replace(/\s+/g, ' ');

  if (inlined.length <= 50) {
    return inlined;
  } else {
    return 'Type';
  }
};

var _default = (defaultConfig, simpleType) => {
  const create = context => {
    const verbose = (context.options[0] || defaultConfig) === 'verbose';
    return {
      // shorthand
      ArrayTypeAnnotation(node) {
        const rawElementType = context.getSourceCode().getText(node.elementType);
        const inlinedType = inlineType(rawElementType);
        const wrappedInlinedType = (0, _needWrap.default)(node.elementType) ? '(' + inlinedType + ')' : inlinedType;

        if ((0, _isSimpleType.default)(node.elementType) === simpleType && verbose) {
          context.report({
            data: {
              type: inlinedType,
              wrappedType: wrappedInlinedType
            },

            fix(fixer) {
              return fixer.replaceText(node, 'Array<' + rawElementType + '>');
            },

            message: 'Use "Array<{{ type }}>", not "{{ wrappedType }}[]"',
            node
          });
        }
      },

      // verbose
      GenericTypeAnnotation(node) {
        if (node.id.name === 'Array') {
          // Don't report on un-parameterized Array annotations. There are valid cases for this,
          // but regardless, we should not crash when encountering them.
          if (node.typeParameters && node.typeParameters.params.length === 1) {
            const elementTypeNode = node.typeParameters.params[0];
            const rawElementType = context.getSourceCode().getText(elementTypeNode);
            const inlinedType = inlineType(rawElementType);
            const wrappedInlinedType = (0, _needWrap.default)(elementTypeNode) ? '(' + inlinedType + ')' : inlinedType;

            if ((0, _isSimpleType.default)(elementTypeNode) === simpleType && !verbose) {
              context.report({
                data: {
                  type: inlinedType,
                  wrappedType: wrappedInlinedType
                },

                fix(fixer) {
                  if ((0, _needWrap.default)(elementTypeNode)) {
                    return fixer.replaceText(node, '(' + rawElementType + ')[]');
                  } else {
                    return fixer.replaceText(node, rawElementType + '[]');
                  }
                },

                message: 'Use "{{ wrappedType }}[]", not "Array<{{ type }}>"',
                node
              });
            }
          }
        }
      }

    };
  };

  return {
    create,
    meta: {
      fixable: 'code'
    },
    schema
  };
};

exports.default = _default;
module.exports = exports.default;