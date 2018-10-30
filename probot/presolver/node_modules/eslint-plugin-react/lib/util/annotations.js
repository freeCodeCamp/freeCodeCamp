/**
 * @fileoverview Utility functions for type annotation detection.
 * @author Yannick Croissant
 * @author Vitor Balocco
 */
'use strict';

/**
 * Checks if we are declaring a `props` argument with a flow type annotation.
 * @param {ASTNode} node The AST node being checked.
 * @returns {Boolean} True if the node is a type annotated props declaration, false if not.
 */
function isAnnotatedFunctionPropsDeclaration(node, context) {
  if (!node || !node.params || !node.params.length) {
    return false;
  }

  var tokens = context.getFirstTokens(node.params[0], 2);
  var isAnnotated = node.params[0].typeAnnotation;
  var isDestructuredProps = node.params[0].type === 'ObjectPattern';
  var isProps = tokens[0].value === 'props' || (tokens[1] && tokens[1].value === 'props');

  return (isAnnotated && (isDestructuredProps || isProps));
}

module.exports = {
  isAnnotatedFunctionPropsDeclaration: isAnnotatedFunctionPropsDeclaration
};
