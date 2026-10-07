'use strict';

/**
 * @typedef {import('../lib/types').XastElement} XastElement
 * @typedef {import('../lib/types').XastParent} XastParent
 * @typedef {import('../lib/types').XastNode} XastNode
 */

const JSAPI = require('../lib/svgo/jsAPI.js');

exports.type = 'visitor';
exports.name = 'reusePaths';
exports.active = false;
exports.description =
  'Finds <path> elements with the same d, fill, and ' +
  'stroke, and converts them to <use> elements ' +
  'referencing a single <path> def.';

/**
 * Finds <path> elements with the same d, fill, and stroke, and converts them to
 * <use> elements referencing a single <path> def.
 *
 * @author Jacob Howcroft
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  /**
   * @type {Map<string, Array<XastElement>>}
   */
  const paths = new Map();

  return {
    element: {
      enter: (node) => {
        if (node.name === 'path' && node.attributes.d != null) {
          const d = node.attributes.d;
          const fill = node.attributes.fill || '';
          const stroke = node.attributes.stroke || '';
          const key = d + ';s:' + stroke + ';f:' + fill;
          let list = paths.get(key);
          if (list == null) {
            list = [];
            paths.set(key, list);
          }
          list.push(node);
        }
      },

      exit: (node, parentNode) => {
        if (node.name === 'svg' && parentNode.type === 'root') {
          /**
           * @type {XastElement}
           */
          const rawDefs = {
            type: 'element',
            name: 'defs',
            attributes: {},
            children: [],
          };
          /**
           * @type {XastElement}
           */
          const defsTag = new JSAPI(rawDefs, node);
          let index = 0;
          for (const list of paths.values()) {
            if (list.length > 1) {
              // add reusable path to defs
              /**
               * @type {XastElement}
               */
              const rawPath = {
                type: 'element',
                name: 'path',
                attributes: { ...list[0].attributes },
                children: [],
              };
              delete rawPath.attributes.transform;
              let id;
              if (rawPath.attributes.id == null) {
                id = 'reuse-' + index;
                index += 1;
                rawPath.attributes.id = id;
              } else {
                id = rawPath.attributes.id;
                delete list[0].attributes.id;
              }
              /**
               * @type {XastElement}
               */
              const reusablePath = new JSAPI(rawPath, defsTag);
              defsTag.children.push(reusablePath);
              // convert paths to <use>
              for (const pathNode of list) {
                pathNode.name = 'use';
                pathNode.attributes['xlink:href'] = '#' + id;
                delete pathNode.attributes.d;
                delete pathNode.attributes.stroke;
                delete pathNode.attributes.fill;
              }
            }
          }
          if (defsTag.children.length !== 0) {
            if (node.attributes['xmlns:xlink'] == null) {
              node.attributes['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
            }
            node.children.unshift(defsTag);
          }
        }
      },
    },
  };
};
