'use strict';
const valueParser = require('postcss-value-parser');

/**
 * @param {(number|string)[]} list
 * @param {valueParser.Node} node
 * @param {number} index
 * @return {(number|string)[]}
 */
function getValues(list, node, index) {
  if (index % 2 === 0) {
    /** @type {number|string} */
    let value = NaN;

    if (
      node.type === 'function' &&
      (node.value === 'var' || node.value === 'env') &&
      node.nodes.length === 1
    ) {
      value = valueParser.stringify(node.nodes);
    } else if (node.type === 'word') {
      value = parseFloat(node.value);
    }

    return [...list, value];
  }

  return list;
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function matrix3d(node, values) {
  if (values.length !== 16) {
    return;
  }

  // matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1) => matrix(a, b, c, d, tx, ty)
  if (
    values[15] &&
    values[2] === 0 &&
    values[3] === 0 &&
    values[6] === 0 &&
    values[7] === 0 &&
    values[8] === 0 &&
    values[9] === 0 &&
    values[10] === 1 &&
    values[11] === 0 &&
    values[14] === 0 &&
    values[15] === 1
  ) {
    const { nodes } = node;

    node.value = 'matrix';
    node.nodes = [
      nodes[0], // a
      nodes[1], // ,
      nodes[2], // b
      nodes[3], // ,
      nodes[8], // c
      nodes[9], // ,
      nodes[10], // d
      nodes[11], // ,
      nodes[24], // tx
      nodes[25], // ,
      nodes[26], // ty
    ];
  }
}

const rotate3dMappings = new Map([
  [[1, 0, 0].toString(), 'rotateX'], // rotate3d(1, 0, 0, a) => rotateX(a)
  [[0, 1, 0].toString(), 'rotateY'], // rotate3d(0, 1, 0, a) => rotateY(a)
  [[0, 0, 1].toString(), 'rotate'], // rotate3d(0, 0, 1, a) => rotate(a)
]);

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function rotate3d(node, values) {
  if (values.length !== 4) {
    return;
  }

  const { nodes } = node;
  const match = rotate3dMappings.get(values.slice(0, 3).toString());

  if (match) {
    node.value = match;
    node.nodes = [nodes[6]];
  }
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function rotateZ(node, values) {
  if (values.length !== 1) {
    return;
  }

  // rotateZ(rz) => rotate(rz)
  node.value = 'rotate';
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function scale(node, values) {
  if (values.length !== 2) {
    return;
  }

  const { nodes } = node;
  const [first, second] = values;

  // scale(sx, sy) => scale(sx)
  if (first === second) {
    node.nodes = [nodes[0]];

    return;
  }

  // scale(sx, 1) => scaleX(sx)
  if (second === 1) {
    node.value = 'scaleX';
    node.nodes = [nodes[0]];

    return;
  }

  // scale(1, sy) => scaleY(sy)
  if (first === 1) {
    node.value = 'scaleY';
    node.nodes = [nodes[2]];

    return;
  }
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function scale3d(node, values) {
  if (values.length !== 3) {
    return;
  }

  const { nodes } = node;
  const [first, second, third] = values;

  // scale3d(sx, 1, 1) => scaleX(sx)
  if (second === 1 && third === 1) {
    node.value = 'scaleX';
    node.nodes = [nodes[0]];

    return;
  }

  // scale3d(1, sy, 1) => scaleY(sy)
  if (first === 1 && third === 1) {
    node.value = 'scaleY';
    node.nodes = [nodes[2]];

    return;
  }

  // scale3d(1, 1, sz) => scaleZ(sz)
  if (first === 1 && second === 1) {
    node.value = 'scaleZ';
    node.nodes = [nodes[4]];

    return;
  }
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function translate(node, values) {
  if (values.length !== 2) {
    return;
  }

  const { nodes } = node;

  // translate(tx, 0) => translate(tx)
  if (values[1] === 0) {
    node.nodes = [nodes[0]];

    return;
  }

  // translate(0, ty) => translateY(ty)
  if (values[0] === 0) {
    node.value = 'translateY';
    node.nodes = [nodes[2]];

    return;
  }
}

/**
 * @param {valueParser.FunctionNode} node
 * @param {(number|string)[]} values
 * @return {void}
 */
function translate3d(node, values) {
  if (values.length !== 3) {
    return;
  }

  const { nodes } = node;

  // translate3d(0, 0, tz) => translateZ(tz)
  if (values[0] === 0 && values[1] === 0) {
    node.value = 'translateZ';
    node.nodes = [nodes[4]];
  }
}

const reducers = new Map([
  ['matrix3d', matrix3d],
  ['rotate3d', rotate3d],
  ['rotateZ', rotateZ],
  ['scale', scale],
  ['scale3d', scale3d],
  ['translate', translate],
  ['translate3d', translate3d],
]);
/**
 * @param {string} name
 * @return {string}
 */
function normalizeReducerName(name) {
  const lowerCasedName = name.toLowerCase();

  if (lowerCasedName === 'rotatez') {
    return 'rotateZ';
  }

  return lowerCasedName;
}

/**
 * @param {valueParser.Node} node
 * @return {false}
 */
function reduce(node) {
  if (node.type === 'function') {
    const normalizedReducerName = normalizeReducerName(node.value);
    const reducer = reducers.get(normalizedReducerName);
    if (reducer !== undefined) {
      reducer(node, node.nodes.reduce(getValues, []));
    }
  }
  return false;
}

/**
 * @type {import('postcss').PluginCreator<void>}
 * @return {import('postcss').Plugin}
 */
function pluginCreator() {
  return {
    postcssPlugin: 'postcss-reduce-transforms',
    prepare() {
      const cache = new Map();
      return {
        OnceExit(css) {
          css.walkDecls(/transform$/i, (decl) => {
            const value = decl.value;

            if (!value) {
              return;
            }

            if (cache.has(value)) {
              decl.value = cache.get(value);

              return;
            }

            const result = valueParser(value).walk(reduce).toString();

            decl.value = result;
            cache.set(value, result);
          });
        },
      };
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
