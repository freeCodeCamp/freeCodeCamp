'use strict';

const { visit } = require('../lib/xast.js');

exports.type = 'visitor';
exports.name = 'cleanupEnableBackground';
exports.active = true;
exports.description =
  'remove or cleanup enable-background attribute when possible';

/**
 * Remove or cleanup enable-background attr which coincides with a width/height box.
 *
 * @see https://www.w3.org/TR/SVG11/filters.html#EnableBackgroundProperty
 *
 * @example
 * <svg width="100" height="50" enable-background="new 0 0 100 50">
 *             ⬇
 * <svg width="100" height="50">
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = (root) => {
  const regEnableBackground =
    /^new\s0\s0\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)$/;

  let hasFilter = false;
  visit(root, {
    element: {
      enter: (node) => {
        if (node.name === 'filter') {
          hasFilter = true;
        }
      },
    },
  });

  return {
    element: {
      enter: (node) => {
        if (node.attributes['enable-background'] == null) {
          return;
        }
        if (hasFilter) {
          if (
            (node.name === 'svg' ||
              node.name === 'mask' ||
              node.name === 'pattern') &&
            node.attributes.width != null &&
            node.attributes.height != null
          ) {
            const match =
              node.attributes['enable-background'].match(regEnableBackground);
            if (
              match != null &&
              node.attributes.width === match[1] &&
              node.attributes.height === match[3]
            ) {
              if (node.name === 'svg') {
                delete node.attributes['enable-background'];
              } else {
                node.attributes['enable-background'] = 'new';
              }
            }
          }
        } else {
          //we don't need 'enable-background' if we have no filters
          delete node.attributes['enable-background'];
        }
      },
    },
  };
};
