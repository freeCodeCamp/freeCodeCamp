'use strict';

const { detachNodeFromParent } = require('../lib/xast.js');

exports.name = 'removeElementsByAttr';
exports.type = 'visitor';
exports.active = false;
exports.description =
  'removes arbitrary elements by ID or className (disabled by default)';

/**
 * Remove arbitrary SVG elements by ID or className.
 *
 * @example id
 *     > single: remove element with ID of `elementID`
 *     ---
 *     removeElementsByAttr:
 *       id: 'elementID'
 *
 *     > list: remove multiple elements by ID
 *     ---
 *     removeElementsByAttr:
 *       id:
 *         - 'elementID'
 *         - 'anotherID'
 *
 * @example class
 *     > single: remove all elements with class of `elementClass`
 *     ---
 *     removeElementsByAttr:
 *       class: 'elementClass'
 *
 *     > list: remove all elements with class of `elementClass` or `anotherClass`
 *     ---
 *     removeElementsByAttr:
 *       class:
 *         - 'elementClass'
 *         - 'anotherClass'
 *
 * @author Eli Dupuis (@elidupuis)
 *
 * @type {import('../lib/types').Plugin<{
 *   id?: string | Array<string>,
 *   class?: string | Array<string>
 * }>}
 */
exports.fn = (root, params) => {
  const ids =
    params.id == null ? [] : Array.isArray(params.id) ? params.id : [params.id];
  const classes =
    params.class == null
      ? []
      : Array.isArray(params.class)
      ? params.class
      : [params.class];
  return {
    element: {
      enter: (node, parentNode) => {
        // remove element if it's `id` matches configured `id` params
        if (node.attributes.id != null && ids.length !== 0) {
          if (ids.includes(node.attributes.id)) {
            detachNodeFromParent(node, parentNode);
          }
        }
        // remove element if it's `class` contains any of the configured `class` params
        if (node.attributes.class && classes.length !== 0) {
          const classList = node.attributes.class.split(' ');
          for (const item of classes) {
            if (classList.includes(item)) {
              detachNodeFromParent(node, parentNode);
              break;
            }
          }
        }
      },
    },
  };
};
