'use strict';

exports.name = 'convertEllipseToCircle';
exports.type = 'visitor';
exports.active = true;
exports.description = 'converts non-eccentric <ellipse>s to <circle>s';

/**
 * Converts non-eccentric <ellipse>s to <circle>s.
 *
 * @see https://www.w3.org/TR/SVG11/shapes.html
 *
 * @author Taylor Hunt
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node) => {
        if (node.name === 'ellipse') {
          const rx = node.attributes.rx || '0';
          const ry = node.attributes.ry || '0';
          if (
            rx === ry ||
            rx === 'auto' ||
            ry === 'auto' // SVG2
          ) {
            node.name = 'circle';
            const radius = rx === 'auto' ? ry : rx;
            delete node.attributes.rx;
            delete node.attributes.ry;
            node.attributes.r = radius;
          }
        }
      },
    },
  };
};
