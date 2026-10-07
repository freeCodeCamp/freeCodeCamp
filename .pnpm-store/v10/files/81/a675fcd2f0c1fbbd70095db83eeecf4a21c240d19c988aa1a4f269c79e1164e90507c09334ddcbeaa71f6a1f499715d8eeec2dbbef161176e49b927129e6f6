"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../utilities");

const schema = [{
  enum: ['always', 'never'],
  type: 'string'
}];

const create = context => {
  const always = (context.options[0] || 'always') === 'always';

  if (always) {
    return {
      ObjectTypeIndexer(node) {
        const id = (0, _utilities.getParameterName)(node, context);
        const rawKeyType = context.getSourceCode().getText(node.key);

        if (id === null) {
          context.report({
            fix(fixer) {
              return fixer.replaceText(node.key, 'key: ' + rawKeyType);
            },

            message: 'All indexers must be declared with key name.',
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
  meta: {
    fixable: 'code'
  },
  schema
};
exports.default = _default;
module.exports = exports.default;