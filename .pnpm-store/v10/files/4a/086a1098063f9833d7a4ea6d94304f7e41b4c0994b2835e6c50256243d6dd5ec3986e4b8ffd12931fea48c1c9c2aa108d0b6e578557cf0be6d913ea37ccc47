'use strict';

const { detachNodeFromParent } = require('../lib/xast.js');

exports.name = 'removeScriptElement';
exports.type = 'visitor';
exports.active = false;
exports.description = 'removes <script> elements (disabled by default)';

/**
 * Remove <script>.
 *
 * https://www.w3.org/TR/SVG11/script.html
 *
 * @author Patrick Klingemann
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node, parentNode) => {
        if (node.name === 'script') {
          detachNodeFromParent(node, parentNode);
        }
      },
    },
  };
};
