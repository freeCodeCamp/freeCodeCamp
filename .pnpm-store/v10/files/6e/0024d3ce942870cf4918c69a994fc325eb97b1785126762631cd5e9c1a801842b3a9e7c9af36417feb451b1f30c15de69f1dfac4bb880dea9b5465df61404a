"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _stringNaturalCompare = _interopRequireDefault(require("string-natural-compare"));

var _utilities = require("../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = [{
  enum: ['asc', 'desc'],
  type: 'string'
}, {
  additionalProperties: false,
  type: 'object'
}];
/**
 * @private
 */

const sorters = {
  asc: (a, b) => {
    return (0, _stringNaturalCompare.default)(a, b, {
      caseInsensitive: true
    });
  },
  desc: (a, b) => {
    return (0, _stringNaturalCompare.default)(b, a, {
      caseInsensitive: true
    });
  }
};

const generateOrderedList = (context, sort, properties) => {
  const source = context.getSourceCode();
  const items = properties.map(property => {
    const name = (0, _utilities.getParameterName)(property, context);
    const commentsBefore = source.getCommentsBefore(property);
    const startIndex = commentsBefore.length > 0 ? commentsBefore[0].range[0] : property.range[0];
    const isMethodProperty = property.value && property.value.type === 'FunctionTypeAnnotation';

    if (property.type === 'ObjectTypeSpreadProperty' || !property.value || isMethodProperty) {
      // NOTE: It could but currently does not fix recursive generic type arguments in GenericTypeAnnotation within ObjectTypeSpreadProperty.
      // Maintain everything between the start of property including leading comments and the nextPunctuator `,` or `}`:
      const nextPunctuator = source.getTokenAfter(property, {
        filter: token => {
          return token.type === 'Punctuator' || token.value === '|}';
        }
      });
      const beforePunctuator = source.getTokenBefore(nextPunctuator, {
        includeComments: true
      });
      const text = source.getText().slice(startIndex, beforePunctuator.range[1]);
      return [property, name, text];
    }

    const colonToken = source.getTokenBefore(property.value, {
      filter: token => {
        return token.value === ':';
      }
    }); // Preserve all code until the colon verbatim:

    const key = source.getText().slice(startIndex, colonToken.range[0]);
    let value;

    if (property.value.type === 'ObjectTypeAnnotation') {
      // eslint-disable-next-line no-use-before-define
      value = ' ' + generateFix(property.value, context, sort);
    } else {
      // NOTE: It could but currently does not fix recursive generic type arguments in GenericTypeAnnotation.
      // Maintain everything between the `:` and the next Punctuator `,` or `}`:
      const nextPunctuator = source.getTokenAfter(property, {
        filter: token => {
          return token.type === 'Punctuator' || token.value === '|}';
        }
      });
      const beforePunctuator = source.getTokenBefore(nextPunctuator, {
        includeComments: true
      });
      const text = source.getText().slice(colonToken.range[1], beforePunctuator.range[1]);
      value = text;
    }

    return [property, name, key, value];
  });
  const itemGroups = [[]];
  let itemGroupIndex = 0;

  for (const item of items) {
    if (item[0].type === 'ObjectTypeSpreadProperty') {
      ++itemGroupIndex;
      itemGroups[itemGroupIndex] = [item];
      ++itemGroupIndex;
      itemGroups[itemGroupIndex] = [];
    } else {
      itemGroups[itemGroupIndex].push(item);
    }
  }

  const orderedList = [];

  for (const itemGroup of itemGroups) {
    if (itemGroup[0] && itemGroup[0].type !== 'ObjectTypeSpreadProperty') {
      // console.log('itemGroup', itemGroup);
      itemGroup.sort((first, second) => {
        return sort(first[1], second[1]);
      });
    }

    orderedList.push(...itemGroup.map(item => {
      if (item.length === 3) {
        return item[2];
      }

      return item[2] + ':' + item[3];
    }));
  }

  return orderedList;
};

const generateFix = (node, context, sort) => {
  // this could be done much more cleanly in ESLint >=4
  // as we can apply multiple fixes. That also means we can
  // maintain code style in a much nicer way
  let nodeText;
  const newTypes = generateOrderedList(context, sort, node.properties);
  const source = context.getSourceCode(node);
  const originalSubstring = source.getText(node);
  nodeText = originalSubstring;

  for (const [index, property] of node.properties.entries()) {
    const nextPunctuator = source.getTokenAfter(property, {
      filter: token => {
        return token.type === 'Punctuator' || token.value === '|}';
      }
    });
    const beforePunctuator = source.getTokenBefore(nextPunctuator, {
      includeComments: true
    });
    const commentsBefore = source.getCommentsBefore(property);
    const startIndex = commentsBefore.length > 0 ? commentsBefore[0].range[0] : property.range[0];
    const subString = source.getText().slice(startIndex, beforePunctuator.range[1]);
    nodeText = nodeText.replace(subString, '$' + index);
  }

  for (const [index, item] of newTypes.entries()) {
    nodeText = nodeText.replace('$' + index, item);
  }

  return nodeText;
};

const create = context => {
  const order = _lodash.default.get(context, ['options', 0], 'asc');

  let prev;

  const checkKeyOrder = node => {
    prev = null; // eslint-disable-next-line unicorn/no-array-for-each

    node.properties.forEach(identifierNode => {
      const current = (0, _utilities.getParameterName)(identifierNode, context);
      const last = prev; // keep track of the last token

      prev = current || last;

      if (!last || !current) {
        return;
      }

      const sort = sorters[order];

      if (sort(last, current) > 0) {
        context.report({
          data: {
            current,
            last,
            order
          },

          fix(fixer) {
            const nodeText = generateFix(node, context, sort);
            return fixer.replaceText(node, nodeText);
          },

          loc: identifierNode.loc,
          message: 'Expected type annotations to be in {{order}}ending order. "{{current}}" must be before "{{last}}".',
          node: identifierNode
        });
      }
    });
  };

  return {
    ObjectTypeAnnotation: checkKeyOrder
  };
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