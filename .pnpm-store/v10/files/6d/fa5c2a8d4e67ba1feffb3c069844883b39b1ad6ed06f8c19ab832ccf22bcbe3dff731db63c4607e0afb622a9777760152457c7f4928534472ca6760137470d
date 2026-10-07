'use strict';

const {
  querySelector,
  closestByName,
  detachNodeFromParent,
} = require('../lib/xast.js');
const { collectStylesheet, computeStyle } = require('../lib/style.js');
const { parsePathData } = require('../lib/path.js');

exports.name = 'removeHiddenElems';
exports.type = 'visitor';
exports.active = true;
exports.description =
  'removes hidden elements (zero sized, with absent attributes)';

/**
 * Remove hidden elements with disabled rendering:
 * - display="none"
 * - opacity="0"
 * - circle with zero radius
 * - ellipse with zero x-axis or y-axis radius
 * - rectangle with zero width or height
 * - pattern with zero width or height
 * - image with zero width or height
 * - path with empty data
 * - polyline with empty points
 * - polygon with empty points
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<{
 *   isHidden: boolean,
 *   displayNone: boolean,
 *   opacity0: boolean,
 *   circleR0: boolean,
 *   ellipseRX0: boolean,
 *   ellipseRY0: boolean,
 *   rectWidth0: boolean,
 *   rectHeight0: boolean,
 *   patternWidth0: boolean,
 *   patternHeight0: boolean,
 *   imageWidth0: boolean,
 *   imageHeight0: boolean,
 *   pathEmptyD: boolean,
 *   polylineEmptyPoints: boolean,
 *   polygonEmptyPoints: boolean,
 * }>}
 */
exports.fn = (root, params) => {
  const {
    isHidden = true,
    displayNone = true,
    opacity0 = true,
    circleR0 = true,
    ellipseRX0 = true,
    ellipseRY0 = true,
    rectWidth0 = true,
    rectHeight0 = true,
    patternWidth0 = true,
    patternHeight0 = true,
    imageWidth0 = true,
    imageHeight0 = true,
    pathEmptyD = true,
    polylineEmptyPoints = true,
    polygonEmptyPoints = true,
  } = params;
  const stylesheet = collectStylesheet(root);

  return {
    element: {
      enter: (node, parentNode) => {
        // Removes hidden elements
        // https://www.w3schools.com/cssref/pr_class_visibility.asp
        const computedStyle = computeStyle(stylesheet, node);
        if (
          isHidden &&
          computedStyle.visibility &&
          computedStyle.visibility.type === 'static' &&
          computedStyle.visibility.value === 'hidden' &&
          // keep if any descendant enables visibility
          querySelector(node, '[visibility=visible]') == null
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // display="none"
        //
        // https://www.w3.org/TR/SVG11/painting.html#DisplayProperty
        // "A value of display: none indicates that the given element
        // and its children shall not be rendered directly"
        if (
          displayNone &&
          computedStyle.display &&
          computedStyle.display.type === 'static' &&
          computedStyle.display.value === 'none' &&
          // markers with display: none still rendered
          node.name !== 'marker'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // opacity="0"
        //
        // https://www.w3.org/TR/SVG11/masking.html#ObjectAndGroupOpacityProperties
        if (
          opacity0 &&
          computedStyle.opacity &&
          computedStyle.opacity.type === 'static' &&
          computedStyle.opacity.value === '0' &&
          // transparent element inside clipPath still affect clipped elements
          closestByName(node, 'clipPath') == null
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Circles with zero radius
        //
        // https://www.w3.org/TR/SVG11/shapes.html#CircleElementRAttribute
        // "A value of zero disables rendering of the element"
        //
        // <circle r="0">
        if (
          circleR0 &&
          node.name === 'circle' &&
          node.children.length === 0 &&
          node.attributes.r === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Ellipse with zero x-axis radius
        //
        // https://www.w3.org/TR/SVG11/shapes.html#EllipseElementRXAttribute
        // "A value of zero disables rendering of the element"
        //
        // <ellipse rx="0">
        if (
          ellipseRX0 &&
          node.name === 'ellipse' &&
          node.children.length === 0 &&
          node.attributes.rx === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Ellipse with zero y-axis radius
        //
        // https://www.w3.org/TR/SVG11/shapes.html#EllipseElementRYAttribute
        // "A value of zero disables rendering of the element"
        //
        // <ellipse ry="0">
        if (
          ellipseRY0 &&
          node.name === 'ellipse' &&
          node.children.length === 0 &&
          node.attributes.ry === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Rectangle with zero width
        //
        // https://www.w3.org/TR/SVG11/shapes.html#RectElementWidthAttribute
        // "A value of zero disables rendering of the element"
        //
        // <rect width="0">
        if (
          rectWidth0 &&
          node.name === 'rect' &&
          node.children.length === 0 &&
          node.attributes.width === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Rectangle with zero height
        //
        // https://www.w3.org/TR/SVG11/shapes.html#RectElementHeightAttribute
        // "A value of zero disables rendering of the element"
        //
        // <rect height="0">
        if (
          rectHeight0 &&
          rectWidth0 &&
          node.name === 'rect' &&
          node.children.length === 0 &&
          node.attributes.height === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Pattern with zero width
        //
        // https://www.w3.org/TR/SVG11/pservers.html#PatternElementWidthAttribute
        // "A value of zero disables rendering of the element (i.e., no paint is applied)"
        //
        // <pattern width="0">
        if (
          patternWidth0 &&
          node.name === 'pattern' &&
          node.attributes.width === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Pattern with zero height
        //
        // https://www.w3.org/TR/SVG11/pservers.html#PatternElementHeightAttribute
        // "A value of zero disables rendering of the element (i.e., no paint is applied)"
        //
        // <pattern height="0">
        if (
          patternHeight0 &&
          node.name === 'pattern' &&
          node.attributes.height === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Image with zero width
        //
        // https://www.w3.org/TR/SVG11/struct.html#ImageElementWidthAttribute
        // "A value of zero disables rendering of the element"
        //
        // <image width="0">
        if (
          imageWidth0 &&
          node.name === 'image' &&
          node.attributes.width === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Image with zero height
        //
        // https://www.w3.org/TR/SVG11/struct.html#ImageElementHeightAttribute
        // "A value of zero disables rendering of the element"
        //
        // <image height="0">
        if (
          imageHeight0 &&
          node.name === 'image' &&
          node.attributes.height === '0'
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Path with empty data
        //
        // https://www.w3.org/TR/SVG11/paths.html#DAttribute
        //
        // <path d=""/>
        if (pathEmptyD && node.name === 'path') {
          if (node.attributes.d == null) {
            detachNodeFromParent(node, parentNode);
            return;
          }
          const pathData = parsePathData(node.attributes.d);
          if (pathData.length === 0) {
            detachNodeFromParent(node, parentNode);
            return;
          }
          // keep single point paths for markers
          if (
            pathData.length === 1 &&
            computedStyle['marker-start'] == null &&
            computedStyle['marker-end'] == null
          ) {
            detachNodeFromParent(node, parentNode);
            return;
          }
          return;
        }

        // Polyline with empty points
        //
        // https://www.w3.org/TR/SVG11/shapes.html#PolylineElementPointsAttribute
        //
        // <polyline points="">
        if (
          polylineEmptyPoints &&
          node.name === 'polyline' &&
          node.attributes.points == null
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }

        // Polygon with empty points
        //
        // https://www.w3.org/TR/SVG11/shapes.html#PolygonElementPointsAttribute
        //
        // <polygon points="">
        if (
          polygonEmptyPoints &&
          node.name === 'polygon' &&
          node.attributes.points == null
        ) {
          detachNodeFromParent(node, parentNode);
          return;
        }
      },
    },
  };
};
