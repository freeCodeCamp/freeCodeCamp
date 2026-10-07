'use strict';
const selectorParser = require('postcss-selector-parser');

/**
 * @param {string} selectors
 * @param {selectorParser.SyncProcessor<void>} callback
 * @return {string}
 */
function parseSelectors(selectors, callback) {
  return selectorParser(callback).processSync(selectors);
}

/**
 * @param {import('postcss').Rule} rule
 * @return {string}
 */
function unique(rule) {
  const selector = [...new Set(rule.selectors)];
  selector.sort();
  return selector.join();
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-unique-selectors',
    OnceExit(css) {
      css.walkRules((nodes) => {
        /** @type {string[]} */
        let comments = [];
        /** @type {selectorParser.SyncProcessor<void>} */
        const removeAndSaveComments = (selNode) => {
          selNode.walk((sel) => {
            if (sel.type === 'comment') {
              comments.push(sel.value);
              sel.remove();
              return;
            } else {
              return;
            }
          });
        };
        if (nodes.raws.selector && nodes.raws.selector.raw) {
          parseSelectors(nodes.raws.selector.raw, removeAndSaveComments);
          nodes.raws.selector.raw = unique(nodes);
        }
        nodes.selector = parseSelectors(nodes.selector, removeAndSaveComments);
        nodes.selector = unique(nodes);
        nodes.selectors = nodes.selectors.concat(comments);
      });
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
