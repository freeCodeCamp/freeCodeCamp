'use strict';

const { attrsGroups } = require('./_collections.js');

exports.type = 'visitor';
exports.name = 'removeEmptyAttrs';
exports.active = true;
exports.description = 'removes empty attributes';

/**
 * Remove attributes with empty values.
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node) => {
        for (const [name, value] of Object.entries(node.attributes)) {
          if (
            value === '' &&
            // empty conditional processing attributes prevents elements from rendering
            attrsGroups.conditionalProcessing.includes(name) === false
          ) {
            delete node.attributes[name];
          }
        }
      },
    },
  };
};
