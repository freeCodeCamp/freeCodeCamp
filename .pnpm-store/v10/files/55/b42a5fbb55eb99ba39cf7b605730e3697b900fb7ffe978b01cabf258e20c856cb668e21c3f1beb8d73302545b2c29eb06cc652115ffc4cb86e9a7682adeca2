'use strict';
const getLastNode = require('./getLastNode.js');

/**
 * @param {import('postcss').Declaration[]} props
 * @param {string[]} properties
 * @return {import('postcss').Declaration[]}
 */
module.exports = function getRules(props, properties) {
  return properties
    .map((property) => {
      return getLastNode(props, property);
    })
    .filter(Boolean);
};
