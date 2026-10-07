"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isStatelessComponent;
var traversed = Symbol('traversed');

function isJSXElementOrReactCreateElement(path) {
  var visited = false;
  path.traverse({
    CallExpression: function CallExpression(path2) {
      var callee = path2.get('callee');

      if (callee.matchesPattern('React.createElement') || callee.matchesPattern('React.cloneElement') || callee.node.name === 'cloneElement') {
        visited = true;
      }
    },
    JSXElement: function JSXElement() {
      visited = true;
    }
  });
  return visited;
}

function isReturningJSXElement(path) {
  var iteration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // Early exit for ArrowFunctionExpressions, there is no ReturnStatement node.
  if (path.node.init && path.node.init.body && isJSXElementOrReactCreateElement(path)) {
    return true;
  }

  if (iteration > 20) {
    throw new Error('transform-react-remove-prop-type: infinite loop detected.');
  }

  var visited = false;
  path.traverse({
    ReturnStatement: function ReturnStatement(path2) {
      // We have already found what we are looking for.
      if (visited) {
        return;
      }

      var argument = path2.get('argument'); // Nothing is returned

      if (!argument.node) {
        return;
      }

      if (isJSXElementOrReactCreateElement(path2)) {
        visited = true;
        return;
      }

      if (argument.node.type === 'CallExpression') {
        var name = argument.get('callee').node.name;
        var binding = path.scope.getBinding(name);

        if (!binding) {
          return;
        } // Prevents infinite traverse loop.


        if (binding.path[traversed]) {
          return;
        }

        binding.path[traversed] = true;

        if (isReturningJSXElement(binding.path, iteration + 1)) {
          visited = true;
        }
      }
    }
  });
  return visited;
}

var VALID_POSSIBLE_STATELESS_COMPONENT_TYPES = ['VariableDeclarator', 'FunctionDeclaration']; // Returns `true` if the path represents a function which returns a JSXElement

function isStatelessComponent(path) {
  if (VALID_POSSIBLE_STATELESS_COMPONENT_TYPES.indexOf(path.node.type) === -1) {
    return false;
  }

  if (isReturningJSXElement(path)) {
    return true;
  }

  return false;
}