'use strict';

const { visit, visitSkip, detachNodeFromParent } = require('../lib/xast.js');
const { collectStylesheet, computeStyle } = require('../lib/style.js');
const { elemsGroups } = require('./_collections.js');

exports.type = 'visitor';
exports.name = 'removeUselessStrokeAndFill';
exports.active = true;
exports.description = 'removes useless stroke and fill attributes';

/**
 * Remove useless stroke and fill attrs.
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<{
 *  stroke?: boolean,
 *  fill?: boolean,
 *  removeNone?: boolean
 * }>}
 */
exports.fn = (root, params) => {
  const {
    stroke: removeStroke = true,
    fill: removeFill = true,
    removeNone = false,
  } = params;

  // style and script elements deoptimise this plugin
  let hasStyleOrScript = false;
  visit(root, {
    element: {
      enter: (node) => {
        if (node.name === 'style' || node.name === 'script') {
          hasStyleOrScript = true;
        }
      },
    },
  });
  if (hasStyleOrScript) {
    return null;
  }

  const stylesheet = collectStylesheet(root);

  return {
    element: {
      enter: (node, parentNode) => {
        // id attribute deoptimise the whole subtree
        if (node.attributes.id != null) {
          return visitSkip;
        }
        if (elemsGroups.shape.includes(node.name) == false) {
          return;
        }
        const computedStyle = computeStyle(stylesheet, node);
        const stroke = computedStyle.stroke;
        const strokeOpacity = computedStyle['stroke-opacity'];
        const strokeWidth = computedStyle['stroke-width'];
        const markerEnd = computedStyle['marker-end'];
        const fill = computedStyle.fill;
        const fillOpacity = computedStyle['fill-opacity'];
        const computedParentStyle =
          parentNode.type === 'element'
            ? computeStyle(stylesheet, parentNode)
            : null;
        const parentStroke =
          computedParentStyle == null ? null : computedParentStyle.stroke;

        // remove stroke*
        if (removeStroke) {
          if (
            stroke == null ||
            (stroke.type === 'static' && stroke.value == 'none') ||
            (strokeOpacity != null &&
              strokeOpacity.type === 'static' &&
              strokeOpacity.value === '0') ||
            (strokeWidth != null &&
              strokeWidth.type === 'static' &&
              strokeWidth.value === '0')
          ) {
            // stroke-width may affect the size of marker-end
            // marker is not visible when stroke-width is 0
            if (
              (strokeWidth != null &&
                strokeWidth.type === 'static' &&
                strokeWidth.value === '0') ||
              markerEnd == null
            ) {
              for (const name of Object.keys(node.attributes)) {
                if (name.startsWith('stroke')) {
                  delete node.attributes[name];
                }
              }
              // set explicit none to not inherit from parent
              if (
                parentStroke != null &&
                parentStroke.type === 'static' &&
                parentStroke.value !== 'none'
              ) {
                node.attributes.stroke = 'none';
              }
            }
          }
        }

        // remove fill*
        if (removeFill) {
          if (
            (fill != null && fill.type === 'static' && fill.value === 'none') ||
            (fillOpacity != null &&
              fillOpacity.type === 'static' &&
              fillOpacity.value === '0')
          ) {
            for (const name of Object.keys(node.attributes)) {
              if (name.startsWith('fill-')) {
                delete node.attributes[name];
              }
            }
            if (
              fill == null ||
              (fill.type === 'static' && fill.value !== 'none')
            ) {
              node.attributes.fill = 'none';
            }
          }
        }

        if (removeNone) {
          if (
            (stroke == null || node.attributes.stroke === 'none') &&
            ((fill != null &&
              fill.type === 'static' &&
              fill.value === 'none') ||
              node.attributes.fill === 'none')
          ) {
            detachNodeFromParent(node, parentNode);
          }
        }
      },
    },
  };
};
