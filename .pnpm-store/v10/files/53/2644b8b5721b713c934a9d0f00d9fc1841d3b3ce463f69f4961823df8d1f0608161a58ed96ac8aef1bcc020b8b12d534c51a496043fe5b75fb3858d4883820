'use strict';
const { unit } = require('postcss-value-parser');
const { getArguments } = require('cssnano-utils');
const addSpace = require('../lib/addSpace');
const getValue = require('../lib/getValue');

// transition: [ none | <single-transition-property> ] || <time> || <single-transition-timing-function> || <time>

const timingFunctions = new Set([
  'ease',
  'linear',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'step-start',
  'step-end',
]);

/**
 * @param {import('postcss-value-parser').Node[][]} args
 * @return {import('postcss-value-parser').Node[][]}
 */
function normalize(args) {
  const list = [];
  for (const arg of args) {
    /** @type {Record<string, import('postcss-value-parser').Node[]>} */
    let state = {
      timingFunction: [],
      property: [],
      time1: [],
      time2: [],
    };

    arg.forEach((node) => {
      const { type, value } = node;

      if (type === 'space') {
        return;
      }

      if (
        type === 'function' &&
        new Set(['steps', 'cubic-bezier']).has(value.toLowerCase())
      ) {
        state.timingFunction = [...state.timingFunction, node, addSpace()];
      } else if (unit(value)) {
        if (!state.time1.length) {
          state.time1 = [...state.time1, node, addSpace()];
        } else {
          state.time2 = [...state.time2, node, addSpace()];
        }
      } else if (timingFunctions.has(value.toLowerCase())) {
        state.timingFunction = [...state.timingFunction, node, addSpace()];
      } else {
        state.property = [...state.property, node, addSpace()];
      }
    });

    list.push([
      ...state.property,
      ...state.time1,
      ...state.timingFunction,
      ...state.time2,
    ]);
  }
  return list;
}
/**
 * @param {import('postcss-value-parser').ParsedValue} parsed
 * @return {string}
 */
module.exports = function normalizeTransition(parsed) {
  const values = normalize(getArguments(parsed));

  return getValue(values);
};
