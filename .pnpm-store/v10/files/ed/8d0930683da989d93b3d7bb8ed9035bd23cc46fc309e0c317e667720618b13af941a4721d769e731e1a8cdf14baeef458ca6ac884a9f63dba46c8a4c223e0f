'use strict';

/**
 * @typedef {import('../lib/types').XastNode} XastNode
 */

const { inheritableAttrs, elemsGroups } = require('./_collections.js');

exports.type = 'visitor';
exports.name = 'collapseGroups';
exports.active = true;
exports.description = 'collapses useless groups';

/**
 * @type {(node: XastNode, name: string) => boolean}
 */
const hasAnimatedAttr = (node, name) => {
  if (node.type === 'element') {
    if (
      elemsGroups.animation.includes(node.name) &&
      node.attributes.attributeName === name
    ) {
      return true;
    }
    for (const child of node.children) {
      if (hasAnimatedAttr(child, name)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Collapse useless groups.
 *
 * @example
 * <g>
 *     <g attr1="val1">
 *         <path d="..."/>
 *     </g>
 * </g>
 *         ⬇
 * <g>
 *     <g>
 *         <path attr1="val1" d="..."/>
 *     </g>
 * </g>
 *         ⬇
 * <path attr1="val1" d="..."/>
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      exit: (node, parentNode) => {
        if (parentNode.type === 'root' || parentNode.name === 'switch') {
          return;
        }
        // non-empty groups
        if (node.name !== 'g' || node.children.length === 0) {
          return;
        }

        // move group attibutes to the single child element
        if (
          Object.keys(node.attributes).length !== 0 &&
          node.children.length === 1
        ) {
          const firstChild = node.children[0];
          // TODO untangle this mess
          if (
            firstChild.type === 'element' &&
            firstChild.attributes.id == null &&
            node.attributes.filter == null &&
            (node.attributes.class == null ||
              firstChild.attributes.class == null) &&
            ((node.attributes['clip-path'] == null &&
              node.attributes.mask == null) ||
              (firstChild.name === 'g' &&
                node.attributes.transform == null &&
                firstChild.attributes.transform == null))
          ) {
            for (const [name, value] of Object.entries(node.attributes)) {
              // avoid copying to not conflict with animated attribute
              if (hasAnimatedAttr(firstChild, name)) {
                return;
              }
              if (firstChild.attributes[name] == null) {
                firstChild.attributes[name] = value;
              } else if (name === 'transform') {
                firstChild.attributes[name] =
                  value + ' ' + firstChild.attributes[name];
              } else if (firstChild.attributes[name] === 'inherit') {
                firstChild.attributes[name] = value;
              } else if (
                inheritableAttrs.includes(name) === false &&
                firstChild.attributes[name] !== value
              ) {
                return;
              }
              delete node.attributes[name];
            }
          }
        }

        // collapse groups without attributes
        if (Object.keys(node.attributes).length === 0) {
          // animation elements "add" attributes to group
          // group should be preserved
          for (const child of node.children) {
            if (
              child.type === 'element' &&
              elemsGroups.animation.includes(child.name)
            ) {
              return;
            }
          }
          // replace current node with all its children
          const index = parentNode.children.indexOf(node);
          parentNode.children.splice(index, 1, ...node.children);
          // TODO remove in v3
          for (const child of node.children) {
            // @ts-ignore parentNode is forbidden for public usage
            // and will be moved in v3
            child.parentNode = parentNode;
          }
        }
      },
    },
  };
};
