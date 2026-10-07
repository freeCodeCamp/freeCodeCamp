const traversed = Symbol('traversed')

function isJSXElementOrReactCreateElement(path) {
  let visited = false

  path.traverse({
    CallExpression(path2) {
      const callee = path2.get('callee')

      if (
        callee.matchesPattern('React.createElement') ||
        callee.matchesPattern('React.cloneElement') ||
        callee.node.name === 'cloneElement'
      ) {
        visited = true
      }
    },
    JSXElement() {
      visited = true
    },
  })

  return visited
}

function isReturningJSXElement(path, iteration = 0) {
  // Early exit for ArrowFunctionExpressions, there is no ReturnStatement node.
  if (path.node.init && path.node.init.body && isJSXElementOrReactCreateElement(path)) {
    return true
  }

  if (iteration > 20) {
    throw new Error('transform-react-remove-prop-type: infinite loop detected.')
  }

  let visited = false

  path.traverse({
    ReturnStatement(path2) {
      // We have already found what we are looking for.
      if (visited) {
        return
      }

      const argument = path2.get('argument')

      // Nothing is returned
      if (!argument.node) {
        return
      }

      if (isJSXElementOrReactCreateElement(path2)) {
        visited = true
        return
      }

      if (argument.node.type === 'CallExpression') {
        const name = argument.get('callee').node.name
        const binding = path.scope.getBinding(name)

        if (!binding) {
          return
        }

        // Prevents infinite traverse loop.
        if (binding.path[traversed]) {
          return
        }

        binding.path[traversed] = true

        if (isReturningJSXElement(binding.path, iteration + 1)) {
          visited = true
        }
      }
    },
  })

  return visited
}

const VALID_POSSIBLE_STATELESS_COMPONENT_TYPES = ['VariableDeclarator', 'FunctionDeclaration']

// Returns `true` if the path represents a function which returns a JSXElement
export default function isStatelessComponent(path) {
  if (VALID_POSSIBLE_STATELESS_COMPONENT_TYPES.indexOf(path.node.type) === -1) {
    return false
  }

  if (isReturningJSXElement(path)) {
    return true
  }

  return false
}
