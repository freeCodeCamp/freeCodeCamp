'use strict';
/**
 * @param {import('postcss').Rule} rule
 * @param {import('postcss').Declaration} decl
 * @param {Partial<import('postcss').DeclarationProps>=} props
 * @return {import('postcss').Declaration}
 */
module.exports = function insertCloned(rule, decl, props) {
  const newNode = Object.assign(decl.clone(), props);

  rule.insertAfter(decl, newNode);

  return newNode;
};
