'use strict';

const { querySelectorAll } = require('../lib/xast.js');

exports.name = 'removeAttributesBySelector';
exports.type = 'visitor';
exports.active = false;
exports.description =
  'removes attributes of elements that match a css selector';

/**
 * Removes attributes of elements that match a css selector.
 *
 * @example
 * <caption>A selector removing a single attribute</caption>
 * plugins: [
 *   {
 *     name: "removeAttributesBySelector",
 *     params: {
 *       selector: "[fill='#00ff00']"
 *       attributes: "fill"
 *     }
 *   }
 * ]
 *
 * <rect x="0" y="0" width="100" height="100" fill="#00ff00" stroke="#00ff00"/>
 *   ↓
 * <rect x="0" y="0" width="100" height="100" stroke="#00ff00"/>
 *
 * <caption>A selector removing multiple attributes</caption>
 * plugins: [
 *   {
 *     name: "removeAttributesBySelector",
 *     params: {
 *       selector: "[fill='#00ff00']",
 *       attributes: [
 *         "fill",
 *         "stroke"
 *       ]
 *     }
 *   }
 * ]
 *
 * <rect x="0" y="0" width="100" height="100" fill="#00ff00" stroke="#00ff00"/>
 *   ↓
 * <rect x="0" y="0" width="100" height="100"/>
 *
 * <caption>Multiple selectors removing attributes</caption>
 * plugins: [
 *   {
 *     name: "removeAttributesBySelector",
 *     params: {
 *       selectors: [
 *         {
 *           selector: "[fill='#00ff00']",
 *           attributes: "fill"
 *         },
 *         {
 *           selector: "#remove",
 *           attributes: [
 *             "stroke",
 *             "id"
 *           ]
 *         }
 *       ]
 *     }
 *   }
 * ]
 *
 * <rect x="0" y="0" width="100" height="100" fill="#00ff00" stroke="#00ff00"/>
 *   ↓
 * <rect x="0" y="0" width="100" height="100"/>
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors|MDN CSS Selectors
 *
 * @author Bradley Mease
 *
 * @type {import('../lib/types').Plugin<any>}
 */
exports.fn = (root, params) => {
  const selectors = Array.isArray(params.selectors)
    ? params.selectors
    : [params];
  for (const { selector, attributes } of selectors) {
    const nodes = querySelectorAll(root, selector);
    for (const node of nodes) {
      if (node.type === 'element') {
        if (Array.isArray(attributes)) {
          for (const name of attributes) {
            delete node.attributes[name];
          }
        } else {
          delete node.attributes[attributes];
        }
      }
    }
  }
  return {};
};
