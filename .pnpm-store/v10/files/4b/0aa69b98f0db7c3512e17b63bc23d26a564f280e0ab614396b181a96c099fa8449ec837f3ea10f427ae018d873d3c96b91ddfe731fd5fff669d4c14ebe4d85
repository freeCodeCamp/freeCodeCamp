'use strict';

const regTransformTypes = /matrix|translate|scale|rotate|skewX|skewY/;
const regTransformSplit =
  /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
const regNumericValues = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;

/**
 * @typedef {{ name: string, data: Array<number> }} TransformItem
 */

/**
 * Convert transform string to JS representation.
 *
 * @type {(transformString: string) => Array<TransformItem>}
 */
exports.transform2js = (transformString) => {
  // JS representation of the transform data
  /**
   * @type {Array<TransformItem>}
   */
  const transforms = [];
  // current transform context
  /**
   * @type {null | TransformItem}
   */
  let current = null;
  // split value into ['', 'translate', '10 50', '', 'scale', '2', '', 'rotate', '-45', '']
  for (const item of transformString.split(regTransformSplit)) {
    var num;
    if (item) {
      // if item is a translate function
      if (regTransformTypes.test(item)) {
        // then collect it and change current context
        current = { name: item, data: [] };
        transforms.push(current);
        // else if item is data
      } else {
        // then split it into [10, 50] and collect as context.data
        // eslint-disable-next-line no-cond-assign
        while ((num = regNumericValues.exec(item))) {
          num = Number(num);
          if (current != null) {
            current.data.push(num);
          }
        }
      }
    }
  }
  // return empty array if broken transform (no data)
  return current == null || current.data.length == 0 ? [] : transforms;
};

/**
 * Multiply transforms into one.
 *
 * @type {(transforms: Array<TransformItem>) => TransformItem}
 */
exports.transformsMultiply = (transforms) => {
  // convert transforms objects to the matrices
  const matrixData = transforms.map((transform) => {
    if (transform.name === 'matrix') {
      return transform.data;
    }
    return transformToMatrix(transform);
  });
  // multiply all matrices into one
  const matrixTransform = {
    name: 'matrix',
    data:
      matrixData.length > 0 ? matrixData.reduce(multiplyTransformMatrices) : [],
  };
  return matrixTransform;
};

/**
 * math utilities in radians.
 */
const mth = {
  /**
   * @type {(deg: number) => number}
   */
  rad: (deg) => {
    return (deg * Math.PI) / 180;
  },

  /**
   * @type {(rad: number) => number}
   */
  deg: (rad) => {
    return (rad * 180) / Math.PI;
  },

  /**
   * @type {(deg: number) => number}
   */
  cos: (deg) => {
    return Math.cos(mth.rad(deg));
  },

  /**
   * @type {(val: number, floatPrecision: number) => number}
   */
  acos: (val, floatPrecision) => {
    return Number(mth.deg(Math.acos(val)).toFixed(floatPrecision));
  },

  /**
   * @type {(deg: number) => number}
   */
  sin: (deg) => {
    return Math.sin(mth.rad(deg));
  },

  /**
   * @type {(val: number, floatPrecision: number) => number}
   */
  asin: (val, floatPrecision) => {
    return Number(mth.deg(Math.asin(val)).toFixed(floatPrecision));
  },

  /**
   * @type {(deg: number) => number}
   */
  tan: (deg) => {
    return Math.tan(mth.rad(deg));
  },

  /**
   * @type {(val: number, floatPrecision: number) => number}
   */
  atan: (val, floatPrecision) => {
    return Number(mth.deg(Math.atan(val)).toFixed(floatPrecision));
  },
};

/**
 * @typedef {{
 *   convertToShorts: boolean,
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
 * Decompose matrix into simple transforms. See
 * https://frederic-wang.fr/decomposition-of-2d-transform-matrices.html
 *
 * @type {(transform: TransformItem, params: TransformParams) => Array<TransformItem>}
 */
exports.matrixToTransform = (transform, params) => {
  let floatPrecision = params.floatPrecision;
  let data = transform.data;
  let transforms = [];
  let sx = Number(
    Math.hypot(data[0], data[1]).toFixed(params.transformPrecision)
  );
  let sy = Number(
    ((data[0] * data[3] - data[1] * data[2]) / sx).toFixed(
      params.transformPrecision
    )
  );
  let colsSum = data[0] * data[2] + data[1] * data[3];
  let rowsSum = data[0] * data[1] + data[2] * data[3];
  let scaleBefore = rowsSum != 0 || sx == sy;

  // [..., ..., ..., ..., tx, ty] → translate(tx, ty)
  if (data[4] || data[5]) {
    transforms.push({
      name: 'translate',
      data: data.slice(4, data[5] ? 6 : 5),
    });
  }

  // [sx, 0, tan(a)·sy, sy, 0, 0] → skewX(a)·scale(sx, sy)
  if (!data[1] && data[2]) {
    transforms.push({
      name: 'skewX',
      data: [mth.atan(data[2] / sy, floatPrecision)],
    });

    // [sx, sx·tan(a), 0, sy, 0, 0] → skewY(a)·scale(sx, sy)
  } else if (data[1] && !data[2]) {
    transforms.push({
      name: 'skewY',
      data: [mth.atan(data[1] / data[0], floatPrecision)],
    });
    sx = data[0];
    sy = data[3];

    // [sx·cos(a), sx·sin(a), sy·-sin(a), sy·cos(a), x, y] → rotate(a[, cx, cy])·(scale or skewX) or
    // [sx·cos(a), sy·sin(a), sx·-sin(a), sy·cos(a), x, y] → scale(sx, sy)·rotate(a[, cx, cy]) (if !scaleBefore)
  } else if (!colsSum || (sx == 1 && sy == 1) || !scaleBefore) {
    if (!scaleBefore) {
      sx = (data[0] < 0 ? -1 : 1) * Math.hypot(data[0], data[2]);
      sy = (data[3] < 0 ? -1 : 1) * Math.hypot(data[1], data[3]);
      transforms.push({ name: 'scale', data: [sx, sy] });
    }
    var angle = Math.min(Math.max(-1, data[0] / sx), 1),
      rotate = [
        mth.acos(angle, floatPrecision) *
          ((scaleBefore ? 1 : sy) * data[1] < 0 ? -1 : 1),
      ];

    if (rotate[0]) transforms.push({ name: 'rotate', data: rotate });

    if (rowsSum && colsSum)
      transforms.push({
        name: 'skewX',
        data: [mth.atan(colsSum / (sx * sx), floatPrecision)],
      });

    // rotate(a, cx, cy) can consume translate() within optional arguments cx, cy (rotation point)
    if (rotate[0] && (data[4] || data[5])) {
      transforms.shift();
      var cos = data[0] / sx,
        sin = data[1] / (scaleBefore ? sx : sy),
        x = data[4] * (scaleBefore ? 1 : sy),
        y = data[5] * (scaleBefore ? 1 : sx),
        denom =
          (Math.pow(1 - cos, 2) + Math.pow(sin, 2)) *
          (scaleBefore ? 1 : sx * sy);
      rotate.push(((1 - cos) * x - sin * y) / denom);
      rotate.push(((1 - cos) * y + sin * x) / denom);
    }

    // Too many transformations, return original matrix if it isn't just a scale/translate
  } else if (data[1] || data[2]) {
    return [transform];
  }

  if ((scaleBefore && (sx != 1 || sy != 1)) || !transforms.length)
    transforms.push({
      name: 'scale',
      data: sx == sy ? [sx] : [sx, sy],
    });

  return transforms;
};

/**
 * Convert transform to the matrix data.
 *
 * @type {(transform: TransformItem) => Array<number> }
 */
const transformToMatrix = (transform) => {
  if (transform.name === 'matrix') {
    return transform.data;
  }
  switch (transform.name) {
    case 'translate':
      // [1, 0, 0, 1, tx, ty]
      return [1, 0, 0, 1, transform.data[0], transform.data[1] || 0];
    case 'scale':
      // [sx, 0, 0, sy, 0, 0]
      return [
        transform.data[0],
        0,
        0,
        transform.data[1] || transform.data[0],
        0,
        0,
      ];
    case 'rotate':
      // [cos(a), sin(a), -sin(a), cos(a), x, y]
      var cos = mth.cos(transform.data[0]),
        sin = mth.sin(transform.data[0]),
        cx = transform.data[1] || 0,
        cy = transform.data[2] || 0;
      return [
        cos,
        sin,
        -sin,
        cos,
        (1 - cos) * cx + sin * cy,
        (1 - cos) * cy - sin * cx,
      ];
    case 'skewX':
      // [1, 0, tan(a), 1, 0, 0]
      return [1, 0, mth.tan(transform.data[0]), 1, 0, 0];
    case 'skewY':
      // [1, tan(a), 0, 1, 0, 0]
      return [1, mth.tan(transform.data[0]), 0, 1, 0, 0];
    default:
      throw Error(`Unknown transform ${transform.name}`);
  }
};

/**
 * Applies transformation to an arc. To do so, we represent ellipse as a matrix, multiply it
 * by the transformation matrix and use a singular value decomposition to represent in a form
 * rotate(θ)·scale(a b)·rotate(φ). This gives us new ellipse params a, b and θ.
 * SVD is being done with the formulae provided by Wolffram|Alpha (svd {{m0, m2}, {m1, m3}})
 *
 * @type {(
 *   cursor: [x: number, y: number],
 *   arc: Array<number>,
 *   transform: Array<number>
 * ) => Array<number>}
 */
exports.transformArc = (cursor, arc, transform) => {
  const x = arc[5] - cursor[0];
  const y = arc[6] - cursor[1];
  let a = arc[0];
  let b = arc[1];
  const rot = (arc[2] * Math.PI) / 180;
  const cos = Math.cos(rot);
  const sin = Math.sin(rot);
  // skip if radius is 0
  if (a > 0 && b > 0) {
    let h =
      Math.pow(x * cos + y * sin, 2) / (4 * a * a) +
      Math.pow(y * cos - x * sin, 2) / (4 * b * b);
    if (h > 1) {
      h = Math.sqrt(h);
      a *= h;
      b *= h;
    }
  }
  const ellipse = [a * cos, a * sin, -b * sin, b * cos, 0, 0];
  const m = multiplyTransformMatrices(transform, ellipse);
  // Decompose the new ellipse matrix
  const lastCol = m[2] * m[2] + m[3] * m[3];
  const squareSum = m[0] * m[0] + m[1] * m[1] + lastCol;
  const root =
    Math.hypot(m[0] - m[3], m[1] + m[2]) * Math.hypot(m[0] + m[3], m[1] - m[2]);

  if (!root) {
    // circle
    arc[0] = arc[1] = Math.sqrt(squareSum / 2);
    arc[2] = 0;
  } else {
    const majorAxisSqr = (squareSum + root) / 2;
    const minorAxisSqr = (squareSum - root) / 2;
    const major = Math.abs(majorAxisSqr - lastCol) > 1e-6;
    const sub = (major ? majorAxisSqr : minorAxisSqr) - lastCol;
    const rowsSum = m[0] * m[2] + m[1] * m[3];
    const term1 = m[0] * sub + m[2] * rowsSum;
    const term2 = m[1] * sub + m[3] * rowsSum;
    arc[0] = Math.sqrt(majorAxisSqr);
    arc[1] = Math.sqrt(minorAxisSqr);
    arc[2] =
      (((major ? term2 < 0 : term1 > 0) ? -1 : 1) *
        Math.acos((major ? term1 : term2) / Math.hypot(term1, term2)) *
        180) /
      Math.PI;
  }

  if (transform[0] < 0 !== transform[3] < 0) {
    // Flip the sweep flag if coordinates are being flipped horizontally XOR vertically
    arc[4] = 1 - arc[4];
  }

  return arc;
};

/**
 * Multiply transformation matrices.
 *
 * @type {(a: Array<number>, b: Array<number>) => Array<number>}
 */
const multiplyTransformMatrices = (a, b) => {
  return [
    a[0] * b[0] + a[2] * b[1],
    a[1] * b[0] + a[3] * b[1],
    a[0] * b[2] + a[2] * b[3],
    a[1] * b[2] + a[3] * b[3],
    a[0] * b[4] + a[2] * b[5] + a[4],
    a[1] * b[4] + a[3] * b[5] + a[5],
  ];
};
