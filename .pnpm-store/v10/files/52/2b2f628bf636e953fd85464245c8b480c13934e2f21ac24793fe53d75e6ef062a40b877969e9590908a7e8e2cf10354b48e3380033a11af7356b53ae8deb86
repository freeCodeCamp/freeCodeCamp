'use strict';

const { detachNodeFromParent } = require('../lib/xast.js');

exports.name = 'removeTitle';
exports.type = 'visitor';
exports.active = true;
exports.description = 'removes <title>';

/**
 * Remove <title>.
 *
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title
 *
 * @author Igor Kalashnikov
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node, parentNode) => {
        if (node.name === 'title') {
          detachNodeFromParent(node, parentNode);
        }
      },
    },
  };
};
