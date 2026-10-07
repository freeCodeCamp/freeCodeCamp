'use strict';

exports.type = 'visitor';
exports.name = 'removeUnusedNS';
exports.active = true;
exports.description = 'removes unused namespaces declaration';

/**
 * Remove unused namespaces declaration from svg element
 * which are not used in elements or attributes
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  /**
   * @type {Set<string>}
   */
  const unusedNamespaces = new Set();
  return {
    element: {
      enter: (node, parentNode) => {
        // collect all namespaces from svg element
        // (such as xmlns:xlink="http://www.w3.org/1999/xlink")
        if (node.name === 'svg' && parentNode.type === 'root') {
          for (const name of Object.keys(node.attributes)) {
            if (name.startsWith('xmlns:')) {
              const local = name.slice('xmlns:'.length);
              unusedNamespaces.add(local);
            }
          }
        }
        if (unusedNamespaces.size !== 0) {
          // preserve namespace used in nested elements names
          if (node.name.includes(':')) {
            const [ns] = node.name.split(':');
            if (unusedNamespaces.has(ns)) {
              unusedNamespaces.delete(ns);
            }
          }
          // preserve namespace used in nested elements attributes
          for (const name of Object.keys(node.attributes)) {
            if (name.includes(':')) {
              const [ns] = name.split(':');
              unusedNamespaces.delete(ns);
            }
          }
        }
      },
      exit: (node, parentNode) => {
        // remove unused namespace attributes from svg element
        if (node.name === 'svg' && parentNode.type === 'root') {
          for (const name of unusedNamespaces) {
            delete node.attributes[`xmlns:${name}`];
          }
        }
      },
    },
  };
};
