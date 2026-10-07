'use strict';

/**
 * @typedef {import('../lib/types').XastElement} XastElement
 */

const { cleanupOutData } = require('../lib/svgo/tools.js');
const {
  transform2js,
  transformsMultiply,
  matrixToTransform,
} = require('./_transforms.js');

exports.type = 'visitor';
exports.name = 'convertTransform';
exports.active = true;
exports.description = 'collapses multiple transformations and optimizes it';

/**
 * Convert matrices to the short aliases,
 * convert long translate, scale or rotate transform notations to the shorts ones,
 * convert transforms to the matrices and multiply them all into one,
 * remove useless transforms.
 *
 * @see https://www.w3.org/TR/SVG11/coords.html#TransformMatrixDefined
 *
 * @author Kir Belevich
 *
 * @type {import('../lib/types').Plugin<{
 *   convertToShorts?: boolean,
 *   degPrecision?: number,
 *   floatPrecision?: number,
 *   transformPrecision?: number,
 *   matrixToTransform?: boolean,
 *   shortTranslate?: boolean,
 *   shortScale?: boolean,
 *   shortRotate?: boolean,
 *   removeUseless?: boolean,
 *   collapseIntoOne?: boolean,
 *   leadingZero?: boolean,
 *   negativeExtraSpace?: boolean,
 * }>}
 */
exports.fn = (_root, params) => {
  const {
    convertToShorts = true,
    // degPrecision = 3, // transformPrecision (or matrix precision) - 2 by default
    degPrecision,
    floatPrecision = 3,
    transformPrecision = 5,
    matrixToTransform = true,
    shortTranslate = true,
    shortScale = true,
    shortRotate = true,
    removeUseless = true,
    collapseIntoOne = true,
    leadingZero = true,
    negativeExtraSpace = false,
  } = params;
  const newParams = {
    convertToShorts,
    degPrecision,
    floatPrecision,
    transformPrecision,
    matrixToTransform,
    shortTranslate,
    shortScale,
    shortRotate,
    removeUseless,
    collapseIntoOne,
    leadingZero,
    negativeExtraSpace,
  };
  return {
    element: {
      enter: (node) => {
        // transform
        if (node.attributes.transform != null) {
          convertTransform(node, 'transform', newParams);
        }
        // gradientTransform
        if (node.attributes.gradientTransform != null) {
          convertTransform(node, 'gradientTransform', newParams);
        }
        // patternTransform
        if (node.attributes.patternTransform != null) {
          convertTransform(node, 'patternTransform', newParams);
        }
      },
    },
  };
};

/**
 * @typedef {{
 *   convertToShorts: boolean,
 *   degPrecision?: number,
 *   floatPrecision: number,
 *   transformPrecision: number,
 *   matrixToTransform: boolean,
 *   shortTranslate: boolean,
 *   shortScale: boolean,
 *   shortRotate: boolean,
 *   removeUseless: boolean,
 *   collapseIntoOne: boolean,
 *   leadingZero: boolean,
 *   negativeExtraSpace: boolean,
 * }} TransformParams
 */

/**
 * @typedef {{ name: string, data: Array<number> }} TransformItem
 */

/**
 * Main function.
 *
 * @type {(item: XastElement, attrName: string, params: TransformParams) => void}
 */
const convertTransform = (item, attrName, params) => {
  let data = transform2js(item.attributes[attrName]);
  params = definePrecision(data, params);

  if (params.collapseIntoOne && data.length > 1) {
    data = [transformsMultiply(data)];
  }

  if (params.convertToShorts) {
    data = convertToShorts(data, params);
  } else {
    data.forEach((item) => roundTransform(item, params));
  }

  if (params.removeUseless) {
    data = removeUseless(data);
  }

  if (data.length) {
    item.attributes[attrName] = js2transform(data, params);
  } else {
    delete item.attributes[attrName];
  }
};

/**
 * Defines precision to work with certain parts.
 * transformPrecision - for scale and four first matrix parameters (needs a better precision due to multiplying),
 * floatPrecision - for translate including two last matrix and rotate parameters,
 * degPrecision - for rotate and skew. By default it's equal to (rougly)
 * transformPrecision - 2 or floatPrecision whichever is lower. Can be set in params.
 *
 * @type {(data: Array<TransformItem>, params: TransformParams) => TransformParams}
 *
 * clone params so it don't affect other elements transformations.
 */
const definePrecision = (data, { ...newParams }) => {
  const matrixData = [];
  for (const item of data) {
    if (item.name == 'matrix') {
      matrixData.push(...item.data.slice(0, 4));
    }
  }
  let significantDigits = newParams.transformPrecision;
  // Limit transform precision with matrix one. Calculating with larger precision doesn't add any value.
  if (matrixData.length) {
    newParams.transformPrecision = Math.min(
      newParams.transformPrecision,
      Math.max.apply(Math, matrixData.map(floatDigits)) ||
        newParams.transformPrecision
    );
    significantDigits = Math.max.apply(
      Math,
      matrixData.map(
        (n) => n.toString().replace(/\D+/g, '').length // Number of digits in a number. 123.45 → 5
      )
    );
  }
  // No sense in angle precision more then number of significant digits in matrix.
  if (newParams.degPrecision == null) {
    newParams.degPrecision = Math.max(
      0,
      Math.min(newParams.floatPrecision, significantDigits - 2)
    );
  }
  return newParams;
};

/**
 * @type {(data: Array<number>, params: TransformParams) => Array<number>}
 */
const degRound = (data, params) => {
  if (
    params.degPrecision != null &&
    params.degPrecision >= 1 &&
    params.floatPrecision < 20
  ) {
    return smartRound(params.degPrecision, data);
  } else {
    return round(data);
  }
};
/**
 * @type {(data: Array<number>, params: TransformParams) => Array<number>}
 */
const floatRound = (data, params) => {
  if (params.floatPrecision >= 1 && params.floatPrecision < 20) {
    return smartRound(params.floatPrecision, data);
  } else {
    return round(data);
  }
};

/**
 * @type {(data: Array<number>, params: TransformParams) => Array<number>}
 */
const transformRound = (data, params) => {
  if (params.transformPrecision >= 1 && params.floatPrecision < 20) {
    return smartRound(params.transformPrecision, data);
  } else {
    return round(data);
  }
};

/**
 * Returns number of digits after the point. 0.125 → 3
 *
 * @type {(n: number) => number}
 */
const floatDigits = (n) => {
  const str = n.toString();
  return str.slice(str.indexOf('.')).length - 1;
};

/**
 * Convert transforms to the shorthand alternatives.
 *
 * @type {(transforms: Array<TransformItem>, params: TransformParams) => Array<TransformItem>}
 */
const convertToShorts = (transforms, params) => {
  for (var i = 0; i < transforms.length; i++) {
    var transform = transforms[i];

    // convert matrix to the short aliases
    if (params.matrixToTransform && transform.name === 'matrix') {
      var decomposed = matrixToTransform(transform, params);
      if (
        js2transform(decomposed, params).length <=
        js2transform([transform], params).length
      ) {
        transforms.splice(i, 1, ...decomposed);
      }
      transform = transforms[i];
    }

    // fixed-point numbers
    // 12.754997 → 12.755
    roundTransform(transform, params);

    // convert long translate transform notation to the shorts one
    // translate(10 0) → translate(10)
    if (
      params.shortTranslate &&
      transform.name === 'translate' &&
      transform.data.length === 2 &&
      !transform.data[1]
    ) {
      transform.data.pop();
    }

    // convert long scale transform notation to the shorts one
    // scale(2 2) → scale(2)
    if (
      params.shortScale &&
      transform.name === 'scale' &&
      transform.data.length === 2 &&
      transform.data[0] === transform.data[1]
    ) {
      transform.data.pop();
    }

    // convert long rotate transform notation to the short one
    // translate(cx cy) rotate(a) translate(-cx -cy) → rotate(a cx cy)
    if (
      params.shortRotate &&
      transforms[i - 2] &&
      transforms[i - 2].name === 'translate' &&
      transforms[i - 1].name === 'rotate' &&
      transforms[i].name === 'translate' &&
      transforms[i - 2].data[0] === -transforms[i].data[0] &&
      transforms[i - 2].data[1] === -transforms[i].data[1]
    ) {
      transforms.splice(i - 2, 3, {
        name: 'rotate',
        data: [
          transforms[i - 1].data[0],
          transforms[i - 2].data[0],
          transforms[i - 2].data[1],
        ],
      });

      // splice compensation
      i -= 2;
    }
  }

  return transforms;
};

/**
 * Remove useless transforms.
 *
 * @type {(trasforms: Array<TransformItem>) => Array<TransformItem>}
 */
const removeUseless = (transforms) => {
  return transforms.filter((transform) => {
    // translate(0), rotate(0[, cx, cy]), skewX(0), skewY(0)
    if (
      (['translate', 'rotate', 'skewX', 'skewY'].indexOf(transform.name) > -1 &&
        (transform.data.length == 1 || transform.name == 'rotate') &&
        !transform.data[0]) ||
      // translate(0, 0)
      (transform.name == 'translate' &&
        !transform.data[0] &&
        !transform.data[1]) ||
      // scale(1)
      (transform.name == 'scale' &&
        transform.data[0] == 1 &&
        (transform.data.length < 2 || transform.data[1] == 1)) ||
      // matrix(1 0 0 1 0 0)
      (transform.name == 'matrix' &&
        transform.data[0] == 1 &&
        transform.data[3] == 1 &&
        !(
          transform.data[1] ||
          transform.data[2] ||
          transform.data[4] ||
          transform.data[5]
        ))
    ) {
      return false;
    }

    return true;
  });
};

/**
 * Convert transforms JS representation to string.
 *
 * @type {(transformJS: Array<TransformItem>, params: TransformParams) => string}
 */
const js2transform = (transformJS, params) => {
  var transformString = '';

  // collect output value string
  transformJS.forEach((transform) => {
    roundTransform(transform, params);
    transformString +=
      (transformString && ' ') +
      transform.name +
      '(' +
      cleanupOutData(transform.data, params) +
      ')';
  });

  return transformString;
};

/**
 * @type {(transform: TransformItem, params: TransformParams) => TransformItem}
 */
const roundTransform = (transform, params) => {
  switch (transform.name) {
    case 'translate':
      transform.data = floatRound(transform.data, params);
      break;
    case 'rotate':
      transform.data = [
        ...degRound(transform.data.slice(0, 1), params),
        ...floatRound(transform.data.slice(1), params),
      ];
      break;
    case 'skewX':
    case 'skewY':
      transform.data = degRound(transform.data, params);
      break;
    case 'scale':
      transform.data = transformRound(transform.data, params);
      break;
    case 'matrix':
      transform.data = [
        ...transformRound(transform.data.slice(0, 4), params),
        ...floatRound(transform.data.slice(4), params),
      ];
      break;
  }
  return transform;
};

/**
 * Rounds numbers in array.
 *
 * @type {(data: Array<number>) => Array<number>}
 */
const round = (data) => {
  return data.map(Math.round);
};

/**
 * Decrease accuracy of floating-point numbers
 * in transforms keeping a specified number of decimals.
 * Smart rounds values like 2.349 to 2.35.
 *
 * @type {(precision: number, data: Array<number>) => Array<number>}
 */
const smartRound = (precision, data) => {
  for (
    var i = data.length,
      tolerance = +Math.pow(0.1, precision).toFixed(precision);
    i--;

  ) {
    if (Number(data[i].toFixed(precision)) !== data[i]) {
      var rounded = +data[i].toFixed(precision - 1);
      data[i] =
        +Math.abs(rounded - data[i]).toFixed(precision + 1) >= tolerance
          ? +data[i].toFixed(precision)
          : rounded;
    }
  }
  return data;
};
