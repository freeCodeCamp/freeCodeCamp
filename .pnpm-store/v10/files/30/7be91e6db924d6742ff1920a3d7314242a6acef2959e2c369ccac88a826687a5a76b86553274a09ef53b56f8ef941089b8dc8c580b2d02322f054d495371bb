'use strict';

exports.type = 'visitor';
exports.name = 'sortAttrs';
exports.active = false;
exports.description = 'Sort element attributes for better compression';

/**
 * Sort element attributes for better compression
 *
 * @author Nikolay Frantsev
 *
 * @type {import('../lib/types').Plugin<{
 *   order?: Array<string>
 *   xmlnsOrder?: 'front' | 'alphabetical'
 * }>}
 */
exports.fn = (_root, params) => {
  const {
    order = [
      'id',
      'width',
      'height',
      'x',
      'x1',
      'x2',
      'y',
      'y1',
      'y2',
      'cx',
      'cy',
      'r',
      'fill',
      'stroke',
      'marker',
      'd',
      'points',
    ],
    xmlnsOrder = 'front',
  } = params;

  /**
   * @type {(name: string) => number}
   */
  const getNsPriority = (name) => {
    if (xmlnsOrder === 'front') {
      // put xmlns first
      if (name === 'xmlns') {
        return 3;
      }
      // xmlns:* attributes second
      if (name.startsWith('xmlns:')) {
        return 2;
      }
    }
    // other namespaces after and sort them alphabetically
    if (name.includes(':')) {
      return 1;
    }
    // other attributes
    return 0;
  };

  /**
   * @type {(a: [string, string], b: [string, string]) => number}
   */
  const compareAttrs = ([aName], [bName]) => {
    // sort namespaces
    const aPriority = getNsPriority(aName);
    const bPriority = getNsPriority(bName);
    const priorityNs = bPriority - aPriority;
    if (priorityNs !== 0) {
      return priorityNs;
    }
    // extract the first part from attributes
    // for example "fill" from "fill" and "fill-opacity"
    const [aPart] = aName.split('-');
    const [bPart] = bName.split('-');
    // rely on alphabetical sort when the first part is the same
    if (aPart !== bPart) {
      const aInOrderFlag = order.includes(aPart) ? 1 : 0;
      const bInOrderFlag = order.includes(bPart) ? 1 : 0;
      // sort by position in order param
      if (aInOrderFlag === 1 && bInOrderFlag === 1) {
        return order.indexOf(aPart) - order.indexOf(bPart);
      }
      // put attributes from order param before others
      const priorityOrder = bInOrderFlag - aInOrderFlag;
      if (priorityOrder !== 0) {
        return priorityOrder;
      }
    }
    // sort alphabetically
    return aName < bName ? -1 : 1;
  };

  return {
    element: {
      enter: (node) => {
        const attrs = Object.entries(node.attributes);
        attrs.sort(compareAttrs);
        /**
         * @type {Record<string, string>}
         */
        const sortedAttributes = {};
        for (const [name, value] of attrs) {
          sortedAttributes[name] = value;
        }
        node.attributes = sortedAttributes;
      },
    },
  };
};
