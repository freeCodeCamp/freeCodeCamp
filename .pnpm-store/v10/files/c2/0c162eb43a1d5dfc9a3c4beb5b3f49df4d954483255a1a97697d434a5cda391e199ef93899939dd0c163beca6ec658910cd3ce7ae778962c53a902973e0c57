'use strict';
const hasAllProps = require('./hasAllProps.js');
const getDecls = require('./getDecls.js');
const getRules = require('./getRules.js');

/**
 * @param {import('postcss').Declaration} propA
 * @param {import('postcss').Declaration} propB
 * @return {boolean}
 */
function isConflictingProp(propA, propB) {
  if (
    !propB.prop ||
    propB.important !== propA.important ||
    propA.prop === propB.prop
  ) {
    return false;
  }

  const partsA = propA.prop.split('-');
  const partsB = propB.prop.split('-');

  /* Be safe: check that the first part matches. So we don't try to
   * combine e.g. border-color and color.
   */
  if (partsA[0] !== partsB[0]) {
    return false;
  }

  const partsASet = new Set(partsA);
  return partsB.every((partB) => partsASet.has(partB));
}

/**
 * @param {import('postcss').Declaration[]} match
 * @param {import('postcss').Declaration[]} nodes
 * @return {boolean}
 */
function hasConflicts(match, nodes) {
  const firstNode = Math.min(...match.map((n) => nodes.indexOf(n)));
  const lastNode = Math.max(...match.map((n) => nodes.indexOf(n)));
  const between = nodes.slice(firstNode + 1, lastNode);

  return match.some((a) => between.some((b) => isConflictingProp(a, b)));
}

/**
 * @param {import('postcss').Rule} rule
 * @param {string[]} properties
 * @param {(rules: import('postcss').Declaration[], last: import('postcss').Declaration, props: import('postcss').Declaration[]) => boolean} callback
 * @return {void}
 */
module.exports = function mergeRules(rule, properties, callback) {
  let decls = getDecls(rule, properties);

  while (decls.length) {
    const last = decls[decls.length - 1];
    const props = decls.filter((node) => node.important === last.important);
    const rules = getRules(props, properties);

    if (
      hasAllProps(rules, ...properties) &&
      !hasConflicts(
        rules,
        /** @type import('postcss').Declaration[]*/ (rule.nodes)
      )
    ) {
      if (callback(rules, last, props)) {
        decls = decls.filter((node) => !rules.includes(node));
      }
    }

    decls = decls.filter((node) => node !== last);
  }
};
