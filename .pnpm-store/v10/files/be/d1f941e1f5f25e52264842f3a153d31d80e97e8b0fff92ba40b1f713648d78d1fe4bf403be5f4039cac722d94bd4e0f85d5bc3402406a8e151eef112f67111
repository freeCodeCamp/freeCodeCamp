'use strict';

exports.type = 'visitor';
exports.name = 'removeViewBox';
exports.active = true;
exports.description = 'removes viewBox attribute when possible';

const viewBoxElems = ['svg', 'pattern', 'symbol'];

/**
 * Remove viewBox attr which coincides with a width/height box.
 *
 * @see https://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute
 *
 * @example
 * <svg width="100" height="50" viewBox="0 0 100 50">
 *             ⬇
 * <svg width="100" height="50">
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<void>}
 */
exports.fn = () => {
  return {
    element: {
      enter: (node, parentNode) => {
        if (
          viewBoxElems.includes(node.name) &&
          node.attributes.viewBox != null &&
          node.attributes.width != null &&
          node.attributes.height != null
        ) {
          // TODO remove width/height for such case instead
          if (node.name === 'svg' && parentNode.type !== 'root') {
            return;
          }
          const nums = node.attributes.viewBox.split(/[ ,]+/g);
          if (
            nums[0] === '0' &&
            nums[1] === '0' &&
            node.attributes.width.replace(/px$/, '') === nums[2] && // could use parseFloat too
            node.attributes.height.replace(/px$/, '') === nums[3]
          ) {
            delete node.attributes.viewBox;
          }
        }
      },
    },
  };
};
