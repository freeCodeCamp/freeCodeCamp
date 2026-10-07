'use strict';
const joinGridValue = require('../lib/joinGridValue');

/**
 * @param {import('postcss-value-parser').ParsedValue} gridAutoFlow
 * @return {import('postcss-value-parser').ParsedValue | string}
 */
const normalizeGridAutoFlow = (gridAutoFlow) => {
  let newValue = { front: '', back: '' };
  let shouldNormalize = false;
  gridAutoFlow.walk((node) => {
    if (node.value === 'dense') {
      shouldNormalize = true;
      newValue.back = node.value;
    } else if (['row', 'column'].includes(node.value.trim().toLowerCase())) {
      shouldNormalize = true;
      newValue.front = node.value;
    } else {
      shouldNormalize = false;
    }
  });
  if (shouldNormalize) {
    return `${newValue.front.trim()} ${newValue.back.trim()}`;
  }
  return gridAutoFlow;
};

/**
 * @param {import('postcss-value-parser').ParsedValue} gridGap
 * @return {import('postcss-value-parser').ParsedValue | string}
 */
const normalizeGridColumnRowGap = (gridGap) => {
  let newValue = { front: '', back: '' };
  let shouldNormalize = false;
  gridGap.walk((node) => {
    // console.log(node);
    if (node.value === 'normal') {
      shouldNormalize = true;
      newValue.front = node.value;
    } else {
      newValue.back = `${newValue.back} ${node.value}`;
    }
  });
  if (shouldNormalize) {
    return `${newValue.front.trim()} ${newValue.back.trim()}`;
  }
  return gridGap;
};

/**
 * @param {import('postcss-value-parser').ParsedValue} grid
 * @return {string | string[]}
 */
const normalizeGridColumnRow = (grid) => {
  // cant do normalization here using node, so copy it as a string
  let gridValue = grid.toString().split('/'); // node -> string value, split ->  " 2 / 3 span " ->  [' 2','3 span ']
  if (gridValue.length > 1) {
    return joinGridValue(
      gridValue.map((gridLine) => {
        let normalizeValue = {
          front: '',
          back: '',
        };
        gridLine = gridLine.trim(); // '3 span ' -> '3 span'
        gridLine.split(' ').forEach((node) => {
          // ['3','span']
          if (node === 'span') {
            normalizeValue.front = node; // span _
          } else {
            normalizeValue.back = `${normalizeValue.back} ${node}`; // _ 3
          }
        });
        return `${normalizeValue.front.trim()} ${normalizeValue.back.trim()}`; // span 3
      })
      // returns "2 / span 3"
    );
  }
  // doing this separating if `/` is not present as while joining('/') , it will add `/` at the end
  return gridValue.map((gridLine) => {
    let normalizeValue = {
      front: '',
      back: '',
    };
    gridLine = gridLine.trim();
    gridLine.split(' ').forEach((node) => {
      if (node === 'span') {
        normalizeValue.front = node;
      } else {
        normalizeValue.back = `${normalizeValue.back} ${node}`;
      }
    });
    return `${normalizeValue.front.trim()} ${normalizeValue.back.trim()}`;
  });
};

module.exports = {
  normalizeGridAutoFlow,
  normalizeGridColumnRowGap,
  normalizeGridColumnRow,
};
