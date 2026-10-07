'use strict';

const { detachNodeFromParent } = require('../lib/xast.js');

exports.name = 'removeDesc';
exports.type = 'visitor';
exports.active = true;
exports.description = 'removes <desc>';

const standardDescs = /^(Created with|Created using)/;

/**
 * Removes <desc>.
 * Removes only standard editors content or empty elements 'cause it can be used for accessibility.
 * Enable parameter 'removeAny' to remove any description.
 *
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc
 *
 * @author Daniel Wabyick
 *
 * @type {import('../lib/types').Plugin<{ removeAny?: boolean }>}
 */
exports.fn = (root, params) => {
  const { removeAny = true } = params;
  return {
    element: {
      enter: (node, parentNode) => {
        if (node.name === 'desc') {
          if (
            removeAny ||
            node.children.length === 0 ||
            (node.children[0].type === 'text' &&
              standardDescs.test(node.children[0].value))
          ) {
            detachNodeFromParent(node, parentNode);
          }
        }
      },
    },
  };
};
