/* eslint-disable global-require, import/no-dynamic-require */

// import generate from 'babel-generator';
// console.log(generate(node).code);
import isAnnotatedForRemoval from './isAnnotatedForRemoval'
import isStatelessComponent from './isStatelessComponent'
import remove from './remove'

function isPathReactClass(path, globalOptions) {
  const node = path.node
  const matchers = globalOptions.classNameMatchers

  if (path.matchesPattern('React.Component') || path.matchesPattern('React.PureComponent')) {
    return true
  }

  if (node && (node.name === 'Component' || node.name === 'PureComponent')) {
    return true
  }

  if (node && matchers && matchers.test(node.name)) {
    return true
  }

  return false
}

function isReactClass(superClass, scope, globalOptions) {
  if (!superClass.node) {
    return false
  }

  let answer = false

  if (isPathReactClass(superClass, globalOptions)) {
    answer = true
  } else if (superClass.node.name) {
    // Check for inheritance
    const className = superClass.node.name
    const binding = scope.getBinding(className)
    if (!binding) {
      answer = false
    } else {
      const bindingSuperClass = binding.path.get('superClass')

      if (isPathReactClass(bindingSuperClass, globalOptions)) {
        answer = true
      }
    }
  }

  return answer
}

function areSetsEqual(set1, set2) {
  if (set1 === set2) {
    return true
  }

  if (set1.size !== set2.size) {
    return false
  }

  return !Array.from(set1).some(item => !set2.has(item))
}

function memberExpressionRootIdentifier(path) {
  // Traverse up to the parent before the topmost member expression, and then
  // traverse back down to find the topmost identifier. It seems like there
  // might be a better way to do this.
  const parent = path.findParent(p => !p.isMemberExpression())
  const { type } = parent.node

  let memberExpression
  if (type === 'ObjectProperty') {
    // The topmost MemberExpression's parent is an object property, so the
    // topmost MemberExpression should be the value.
    memberExpression = parent.get('value')
  }

  if (!memberExpression || memberExpression.type !== 'MemberExpression') {
    // This case is currently unhandled by this plugin.
    return null
  }

  // We have a topmost MemberExpression now, so we want to traverse down the
  // left half untli we no longer see MemberExpressions. This node will give us
  // our leftmost identifier.
  while (memberExpression.node.object.type === 'MemberExpression') {
    memberExpression = memberExpression.get('object')
  }

  return memberExpression.get('object')
}

export default function(api) {
  const { template, types, traverse } = api

  const nestedIdentifiers = new Set()
  const removedPaths = new WeakSet()
  const collectNestedIdentifiers = {
    Identifier(path) {
      if (path.parent.type === 'MemberExpression') {
        // foo.bar

        const root = memberExpressionRootIdentifier(path)
        if (root) {
          nestedIdentifiers.add(root.node.name)
        }

        return
      }

      if (
        path.parent.type === 'ObjectProperty' &&
        (path.parent.key === path.node || path.parent.shorthand)
      ) {
        // { foo: 'bar' }
        // { foo }
        return
      }

      nestedIdentifiers.add(path.node.name)
    },
  }

  return {
    visitor: {
      Program(programPath, state) {
        let ignoreFilenames
        let classNameMatchers

        if (state.opts.ignoreFilenames) {
          ignoreFilenames = new RegExp(state.opts.ignoreFilenames.join('|'), 'i')
        } else {
          ignoreFilenames = undefined
        }

        if (state.opts.classNameMatchers) {
          classNameMatchers = new RegExp(state.opts.classNameMatchers.join('|'))
        } else {
          classNameMatchers = undefined
        }

        const globalOptions = {
          visitedKey: `transform-react-remove-prop-types${Date.now()}`,
          unsafeWrapTemplate: template(
            `
              if (process.env.NODE_ENV !== "production") {
                NODE;
              }
            `,
            { placeholderPattern: /^NODE$/ }
          ),
          wrapTemplate: ({ LEFT, RIGHT }, options = {}) => {
            const { as = 'assignmentExpression' } = options
            const right = template.expression(
              `
                process.env.NODE_ENV !== "production" ? RIGHT : {}
              `,
              { placeholderPattern: /^(LEFT|RIGHT)$/ }
            )({ RIGHT })
            switch (as) {
              case 'variableDeclarator':
                return types.variableDeclarator(LEFT, right)
              case 'assignmentExpression':
                return types.assignmentExpression('=', LEFT, right)
              default:
                throw new Error(`unrecognized template type ${as}`)
            }
          },
          mode: state.opts.mode || 'remove',
          ignoreFilenames,
          types,
          removeImport: state.opts.removeImport || false,
          libraries: (state.opts.additionalLibraries || []).concat('prop-types'),
          classNameMatchers,
          createReactClassName: state.opts.createReactClassName || 'createReactClass',
        }

        if (state.opts.plugins) {
          const pluginsState = state
          const pluginsVisitors = state.opts.plugins.map(pluginOpts => {
            const pluginName = typeof pluginOpts === 'string' ? pluginOpts : pluginOpts[0]

            if (typeof pluginOpts !== 'string') {
              pluginsState.opts = {
                ...pluginsState.opts,
                ...pluginOpts[1],
              }
            }

            let plugin = require(pluginName)
            if (typeof plugin !== 'function') {
              plugin = plugin.default
            }

            return plugin(api).visitor
          })

          traverse(
            programPath.parent,
            traverse.visitors.merge(pluginsVisitors),
            programPath.scope,
            pluginsState,
            programPath.parentPath
          )
        }

        // On program start, do an explicit traversal up front for this plugin.
        programPath.traverse({
          ObjectProperty: {
            exit(path) {
              const node = path.node

              if (node.computed || node.key.name !== 'propTypes') {
                return
              }

              const parent = path.findParent(currentNode => {
                if (currentNode.type !== 'CallExpression') {
                  return false
                }

                return (
                  currentNode.get('callee').node.name === globalOptions.createReactClassName ||
                  (currentNode.get('callee').node.property &&
                    currentNode.get('callee').node.property.name === 'createClass')
                )
              })

              if (parent) {
                path.traverse(collectNestedIdentifiers)
                removedPaths.add(path)
                remove(path, globalOptions, {
                  type: 'createClass',
                })
              }
            },
          },

          // Here to support stage-1 transform-class-properties.
          ClassProperty(path) {
            const { node, scope } = path

            if (node.key.name === 'propTypes') {
              const pathClassDeclaration = scope.path

              if (isReactClass(pathClassDeclaration.get('superClass'), scope, globalOptions)) {
                path.traverse(collectNestedIdentifiers)
                removedPaths.add(path)
                remove(path, globalOptions, {
                  type: 'class static',
                  pathClassDeclaration,
                })
              }
            }
          },

          AssignmentExpression(path) {
            const { node, scope } = path

            if (
              node.left.computed ||
              !node.left.property ||
              node.left.property.name !== 'propTypes'
            ) {
              return
            }

            const forceRemoval = isAnnotatedForRemoval(path.node.left)

            if (forceRemoval) {
              path.traverse(collectNestedIdentifiers)
              removedPaths.add(path)
              remove(path, globalOptions, { type: 'assign' })
              return
            }

            const className = node.left.object.name
            const binding = scope.getBinding(className)

            if (!binding) {
              return
            }

            if (binding.path.isClassDeclaration()) {
              const superClass = binding.path.get('superClass')

              if (isReactClass(superClass, scope, globalOptions)) {
                path.traverse(collectNestedIdentifiers)
                removedPaths.add(path)
                remove(path, globalOptions, { type: 'assign' })
              }
            } else if (isStatelessComponent(binding.path)) {
              path.traverse(collectNestedIdentifiers)
              removedPaths.add(path)
              remove(path, globalOptions, { type: 'assign' })
            }
          },
        })

        let skippedIdentifiers = 0
        const removeNewlyUnusedIdentifiers = {
          VariableDeclarator(path) {
            // Only consider the top level scope.
            if (path.scope.block.type !== 'Program') {
              return
            }

            if (['ObjectPattern', 'ArrayPattern'].includes(path.node.id.type)) {
              // Object or Array destructuring, so we will want to capture all
              // the names created by the destructuring. This currently doesn't
              // work, but would be good to improve. All of the names for
              // ObjectPattern can be collected like:
              //
              //   path.node.id.properties.map(prop => prop.value.name);
              return
            }
            const { name } = path.node.id

            if (!nestedIdentifiers.has(name)) {
              return
            }

            const { referencePaths } = path.scope.getBinding(name)

            // Count the number of referencePaths that are not in the
            // removedPaths Set. We need to do this in order to support the wrap
            // option, which doesn't actually remove the references.
            const hasRemainingReferencePaths = referencePaths.some(referencePath => {
              const found = referencePath.find(path2 => removedPaths.has(path2))
              return !found
            })

            if (hasRemainingReferencePaths) {
              // There are still references to this identifier, so we need to
              // skip over it for now.
              skippedIdentifiers += 1
              return
            }

            removedPaths.add(path)
            nestedIdentifiers.delete(name)
            path.get('init').traverse(collectNestedIdentifiers)
            remove(path, globalOptions, { type: 'declarator' })
          },
        }

        let lastNestedIdentifiers = new Set()
        while (
          !areSetsEqual(nestedIdentifiers, lastNestedIdentifiers) &&
          nestedIdentifiers.size > 0 &&
          skippedIdentifiers < nestedIdentifiers.size
        ) {
          lastNestedIdentifiers = new Set(nestedIdentifiers)
          skippedIdentifiers = 0
          programPath.scope.crawl()
          programPath.traverse(removeNewlyUnusedIdentifiers)
        }

        if (globalOptions.removeImport) {
          if (globalOptions.mode === 'remove') {
            programPath.scope.crawl()

            programPath.traverse({
              ImportDeclaration(path) {
                const { source, specifiers } = path.node

                const found = globalOptions.libraries.some(library => {
                  if (library instanceof RegExp) {
                    return library.test(source.value)
                  }

                  return source.value === library
                })

                if (!found) {
                  return
                }

                const haveUsedSpecifiers = specifiers.some(specifier => {
                  const importedIdentifierName = specifier.local.name
                  const { referencePaths } = path.scope.getBinding(importedIdentifierName)
                  return referencePaths.length > 0
                })

                if (!haveUsedSpecifiers) {
                  path.remove()
                }
              },
            })
          } else {
            throw new Error(
              'transform-react-remove-prop-type: removeImport = true and mode != "remove" can not be used at the same time.'
            )
          }
        }
      },
    },
  }
}
