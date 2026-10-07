'use strict';
const plugin = 'postcss-discard-empty';
/**
 * @param {import('postcss').Root} css
 * @param {import('postcss').Result} result
 * @return {void}
 */
function discardAndReport(css, result) {
  /**
   * @param {import('postcss').AnyNode} node
   * @return {void}
   */
  function discardEmpty(node) {
    const { type } = node;
    /** @type {(import('postcss').ChildNode | import('postcss').ChildProps)[] | undefined} */
    const sub = /** @type {any} */ (node).nodes;
    if (sub) {
      /** @type {import('postcss').Container} */ (node).each(discardEmpty);
    }

    if (
      (type === 'decl' && !node.value && !node.prop.startsWith('--')) ||
      (type === 'rule' && !node.selector) ||
      (sub && !sub.length) ||
      (type === 'atrule' &&
        ((!sub && !node.params) ||
          (!node.params &&
            !(/** @type {import('postcss').ChildNode[]}*/ (sub).length))))
    ) {
      node.remove();

      result.messages.push({
        type: 'removal',
        plugin,
        node,
      });
    }
  }

  css.each(discardEmpty);
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: plugin,
    OnceExit(css, { result }) {
      discardAndReport(css, result);
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
