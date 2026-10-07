'use strict';
const selectorParser = require('postcss-selector-parser');
const valueParser = require('postcss-value-parser');

const { parser } = require('../parser.js');

const reducer = require('./reducer.js');
const stringifier = require('./stringifier.js');

const MATCH_CALC = /((?:-(moz|webkit)-)?calc)/i;

/**
 * @param {string} value
 * @param {{precision: number, warnWhenCannotResolve: boolean}} options
 * @param {import("postcss").Result} result
 * @param {import("postcss").ChildNode} item
 */
function transformValue(value, options, result, item) {
  return valueParser(value)
    .walk((node) => {
      // skip anything which isn't a calc() function
      if (node.type !== 'function' || !MATCH_CALC.test(node.value)) {
        return;
      }

      // stringify calc expression and produce an AST
      const contents = valueParser.stringify(node.nodes);
      const ast = parser.parse(contents);

      // reduce AST to its simplest form, that is, either to a single value
      // or a simplified calc expression
      const reducedAst = reducer(ast, options.precision);

      // stringify AST and write it back
      /** @type {valueParser.Node} */ (node).type = 'word';
      node.value = stringifier(
        node.value,
        reducedAst,
        value,
        options,
        result,
        item
      );

      return false;
    })
    .toString();
}
/**
 * @param {import("postcss-selector-parser").Selectors} value
 * @param {{precision: number, warnWhenCannotResolve: boolean}} options
 * @param {import("postcss").Result} result
 * @param {import("postcss").ChildNode} item
 */
function transformSelector(value, options, result, item) {
  return selectorParser((selectors) => {
    selectors.walk((node) => {
      // attribute value
      // e.g. the "calc(3*3)" part of "div[data-size="calc(3*3)"]"
      if (node.type === 'attribute' && node.value) {
        node.setValue(transformValue(node.value, options, result, item));
      }

      // tag value
      // e.g. the "calc(3*3)" part of "div:nth-child(2n + calc(3*3))"
      if (node.type === 'tag') {
        node.value = transformValue(node.value, options, result, item);
      }

      return;
    });
  }).processSync(value);
}

/**
 * @param {any} node
 * @param {{precision: number, preserve: boolean, warnWhenCannotResolve: boolean}} options
 * @param {'value'|'params'|'selector'} property
 * @param {import("postcss").Result} result
 */
module.exports = (node, property, options, result) => {
  let value = node[property];

  try {
    value =
      property === 'selector'
        ? transformSelector(node[property], options, result, node)
        : transformValue(node[property], options, result, node);
  } catch (error) {
    if (error instanceof Error) {
      result.warn(error.message, { node });
    } else {
      result.warn('Error', { node });
    }
    return;
  }

  // if the preserve option is enabled and the value has changed, write the
  // transformed value into a cloned node which is inserted before the current
  // node, preserving the original value. Otherwise, overwrite the original
  // value.
  if (options.preserve && node[property] !== value) {
    const clone = node.clone();
    clone[property] = value;
    node.parent.insertBefore(node, clone);
  } else {
    node[property] = value;
  }
};
