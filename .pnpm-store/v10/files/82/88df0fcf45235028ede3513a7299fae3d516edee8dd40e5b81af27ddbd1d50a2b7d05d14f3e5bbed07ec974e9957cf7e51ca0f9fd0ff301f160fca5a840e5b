'use strict';

/**
 * @typedef {import('../lib/types').XastElement} XastElement
 */

const csso = require('csso');

exports.type = 'visitor';
exports.name = 'minifyStyles';
exports.active = true;
exports.description =
  'minifies styles and removes unused styles based on usage data';

/**
 * Minifies styles (<style> element + style attribute) using CSSO
 *
 * @author strarsis <strarsis@gmail.com>
 *
 * @type {import('../lib/types').Plugin<csso.MinifyOptions & Omit<csso.CompressOptions, 'usage'> & {
 *   usage?: boolean | {
 *     force?: boolean,
 *     ids?: boolean,
 *     classes?: boolean,
 *     tags?: boolean
 *   }
 * }>}
 */
exports.fn = (_root, { usage, ...params }) => {
  let enableTagsUsage = true;
  let enableIdsUsage = true;
  let enableClassesUsage = true;
  // force to use usage data even if it unsafe (document contains <script> or on* attributes)
  let forceUsageDeoptimized = false;
  if (typeof usage === 'boolean') {
    enableTagsUsage = usage;
    enableIdsUsage = usage;
    enableClassesUsage = usage;
  } else if (usage) {
    enableTagsUsage = usage.tags == null ? true : usage.tags;
    enableIdsUsage = usage.ids == null ? true : usage.ids;
    enableClassesUsage = usage.classes == null ? true : usage.classes;
    forceUsageDeoptimized = usage.force == null ? false : usage.force;
  }
  /**
   * @type {Array<XastElement>}
   */
  const styleElements = [];
  /**
   * @type {Array<XastElement>}
   */
  const elementsWithStyleAttributes = [];
  let deoptimized = false;
  /**
   * @type {Set<string>}
   */
  const tagsUsage = new Set();
  /**
   * @type {Set<string>}
   */
  const idsUsage = new Set();
  /**
   * @type {Set<string>}
   */
  const classesUsage = new Set();

  return {
    element: {
      enter: (node) => {
        // detect deoptimisations
        if (node.name === 'script') {
          deoptimized = true;
        }
        for (const name of Object.keys(node.attributes)) {
          if (name.startsWith('on')) {
            deoptimized = true;
          }
        }
        // collect tags, ids and classes usage
        tagsUsage.add(node.name);
        if (node.attributes.id != null) {
          idsUsage.add(node.attributes.id);
        }
        if (node.attributes.class != null) {
          for (const className of node.attributes.class.split(/\s+/)) {
            classesUsage.add(className);
          }
        }
        // collect style elements or elements with style attribute
        if (node.name === 'style' && node.children.length !== 0) {
          styleElements.push(node);
        } else if (node.attributes.style != null) {
          elementsWithStyleAttributes.push(node);
        }
      },
    },

    root: {
      exit: () => {
        /**
         * @type {csso.Usage}
         */
        const cssoUsage = {};
        if (deoptimized === false || forceUsageDeoptimized === true) {
          if (enableTagsUsage && tagsUsage.size !== 0) {
            cssoUsage.tags = Array.from(tagsUsage);
          }
          if (enableIdsUsage && idsUsage.size !== 0) {
            cssoUsage.ids = Array.from(idsUsage);
          }
          if (enableClassesUsage && classesUsage.size !== 0) {
            cssoUsage.classes = Array.from(classesUsage);
          }
        }
        // minify style elements
        for (const node of styleElements) {
          if (
            node.children[0].type === 'text' ||
            node.children[0].type === 'cdata'
          ) {
            const cssText = node.children[0].value;
            const minified = csso.minify(cssText, {
              ...params,
              usage: cssoUsage,
            }).css;
            // preserve cdata if necessary
            // TODO split cdata -> text optimisation into separate plugin
            if (cssText.indexOf('>') >= 0 || cssText.indexOf('<') >= 0) {
              node.children[0].type = 'cdata';
              node.children[0].value = minified;
            } else {
              node.children[0].type = 'text';
              node.children[0].value = minified;
            }
          }
        }
        // minify style attributes
        for (const node of elementsWithStyleAttributes) {
          // style attribute
          const elemStyle = node.attributes.style;
          node.attributes.style = csso.minifyBlock(elemStyle, {
            ...params,
          }).css;
        }
      },
    },
  };
};
