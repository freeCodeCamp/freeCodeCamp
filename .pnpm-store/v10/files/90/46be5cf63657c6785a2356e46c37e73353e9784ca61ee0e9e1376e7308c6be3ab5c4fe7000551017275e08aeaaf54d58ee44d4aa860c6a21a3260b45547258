'use strict';

const { visit } = require('../lib/xast.js');
const { inheritableAttrs, pathElems } = require('./_collections.js');

exports.type = 'visitor';
exports.name = 'moveElemsAttrsToGroup';
exports.active = true;
exports.description = 'Move common attributes of group children to the group';

/**
 * Move common attributes of group children to the group
 *
 * @example
 * <g attr1="val1">
 *     <g attr2="val2">
 *         text
 *     </g>
 *     <circle attr2="val2" attr3="val3"/>
 * </g>
 *              ⬇
 * <g attr1="val1" attr2="val2">
 *     <g>
 *         text
 *     </g>
 *    <circle attr3="val3"/>
 * </g>
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = (root) => {
  // find if any style element is present
  let deoptimizedWithStyles = false;
  visit(root, {
    element: {
      enter: (node) => {
        if (node.name === 'style') {
          deoptimizedWithStyles = true;
        }
      },
    },
  });

  return {
    element: {
      exit: (node) => {
        // process only groups with more than 1 children
        if (node.name !== 'g' || node.children.length <= 1) {
          return;
        }

        // deoptimize the plugin when style elements are present
        // selectors may rely on id, classes or tag names
        if (deoptimizedWithStyles) {
          return;
        }

        /**
         * find common attributes in group children
         * @type {Map<string, string>}
         */
        const commonAttributes = new Map();
        let initial = true;
        let everyChildIsPath = true;
        for (const child of node.children) {
          if (child.type === 'element') {
            if (pathElems.includes(child.name) === false) {
              everyChildIsPath = false;
            }
            if (initial) {
              initial = false;
              // collect all inheritable attributes from first child element
              for (const [name, value] of Object.entries(child.attributes)) {
                // consider only inheritable attributes
                if (inheritableAttrs.includes(name)) {
                  commonAttributes.set(name, value);
                }
              }
            } else {
              // exclude uncommon attributes from initial list
              for (const [name, value] of commonAttributes) {
                if (child.attributes[name] !== value) {
                  commonAttributes.delete(name);
                }
              }
            }
          }
        }

        // preserve transform on children when group has clip-path or mask
        if (
          node.attributes['clip-path'] != null ||
          node.attributes.mask != null
        ) {
          commonAttributes.delete('transform');
        }

        // preserve transform when all children are paths
        // so the transform could be applied to path data by other plugins
        if (everyChildIsPath) {
          commonAttributes.delete('transform');
        }

        // add common children attributes to group
        for (const [name, value] of commonAttributes) {
          if (name === 'transform') {
            if (node.attributes.transform != null) {
              node.attributes.transform = `${node.attributes.transform} ${value}`;
            } else {
              node.attributes.transform = value;
            }
          } else {
            node.attributes[name] = value;
          }
        }

        // delete common attributes from children
        for (const child of node.children) {
          if (child.type === 'element') {
            for (const [name] of commonAttributes) {
              delete child.attributes[name];
            }
          }
        }
      },
    },
  };
};
