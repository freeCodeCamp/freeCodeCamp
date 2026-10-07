"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isAnnotatedForRemoval = _interopRequireDefault(require("./isAnnotatedForRemoval"));

var _isStatelessComponent = _interopRequireDefault(require("./isStatelessComponent"));

var _remove = _interopRequireDefault(require("./remove"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isPathReactClass(path, globalOptions) {
  var node = path.node;
  var matchers = globalOptions.classNameMatchers;

  if (path.matchesPattern('React.Component') || path.matchesPattern('React.PureComponent')) {
    return true;
  }

  if (node && (node.name === 'Component' || node.name === 'PureComponent')) {
    return true;
  }

  if (node && matchers && matchers.test(node.name)) {
    return true;
  }

  return false;
}

function isReactClass(superClass, scope, globalOptions) {
  if (!superClass.node) {
    return false;
  }

  var answer = false;

  if (isPathReactClass(superClass, globalOptions)) {
    answer = true;
  } else if (superClass.node.name) {
    // Check for inheritance
    var className = superClass.node.name;
    var binding = scope.getBinding(className);

    if (!binding) {
      answer = false;
    } else {
      var bindingSuperClass = binding.path.get('superClass');

      if (isPathReactClass(bindingSuperClass, globalOptions)) {
        answer = true;
      }
    }
  }

  return answer;
}

function areSetsEqual(set1, set2) {
  if (set1 === set2) {
    return true;
  }

  if (set1.size !== set2.size) {
    return false;
  }

  return !Array.from(set1).some(function (item) {
    return !set2.has(item);
  });
}

function memberExpressionRootIdentifier(path) {
  // Traverse up to the parent before the topmost member expression, and then
  // traverse back down to find the topmost identifier. It seems like there
  // might be a better way to do this.
  var parent = path.findParent(function (p) {
    return !p.isMemberExpression();
  });
  var type = parent.node.type;
  var memberExpression;

  if (type === 'ObjectProperty') {
    // The topmost MemberExpression's parent is an object property, so the
    // topmost MemberExpression should be the value.
    memberExpression = parent.get('value');
  }

  if (!memberExpression || memberExpression.type !== 'MemberExpression') {
    // This case is currently unhandled by this plugin.
    return null;
  } // We have a topmost MemberExpression now, so we want to traverse down the
  // left half untli we no longer see MemberExpressions. This node will give us
  // our leftmost identifier.


  while (memberExpression.node.object.type === 'MemberExpression') {
    memberExpression = memberExpression.get('object');
  }

  return memberExpression.get('object');
}

function _default(api) {
  var template = api.template,
      types = api.types,
      traverse = api.traverse;
  var nestedIdentifiers = new Set();
  var removedPaths = new WeakSet();
  var collectNestedIdentifiers = {
    Identifier: function Identifier(path) {
      if (path.parent.type === 'MemberExpression') {
        // foo.bar
        var root = memberExpressionRootIdentifier(path);

        if (root) {
          nestedIdentifiers.add(root.node.name);
        }

        return;
      }

      if (path.parent.type === 'ObjectProperty' && (path.parent.key === path.node || path.parent.shorthand)) {
        // { foo: 'bar' }
        // { foo }
        return;
      }

      nestedIdentifiers.add(path.node.name);
    }
  };
  return {
    visitor: {
      Program: function Program(programPath, state) {
        var ignoreFilenames;
        var classNameMatchers;

        if (state.opts.ignoreFilenames) {
          ignoreFilenames = new RegExp(state.opts.ignoreFilenames.join('|'), 'i');
        } else {
          ignoreFilenames = undefined;
        }

        if (state.opts.classNameMatchers) {
          classNameMatchers = new RegExp(state.opts.classNameMatchers.join('|'));
        } else {
          classNameMatchers = undefined;
        }

        var globalOptions = {
          visitedKey: "transform-react-remove-prop-types".concat(Date.now()),
          unsafeWrapTemplate: template("\n              if (process.env.NODE_ENV !== \"production\") {\n                NODE;\n              }\n            ", {
            placeholderPattern: /^NODE$/
          }),
          wrapTemplate: function wrapTemplate(_ref) {
            var LEFT = _ref.LEFT,
                RIGHT = _ref.RIGHT;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var _options$as = options.as,
                as = _options$as === void 0 ? 'assignmentExpression' : _options$as;
            var right = template.expression("\n                process.env.NODE_ENV !== \"production\" ? RIGHT : {}\n              ", {
              placeholderPattern: /^(LEFT|RIGHT)$/
            })({
              RIGHT: RIGHT
            });

            switch (as) {
              case 'variableDeclarator':
                return types.variableDeclarator(LEFT, right);

              case 'assignmentExpression':
                return types.assignmentExpression('=', LEFT, right);

              default:
                throw new Error("unrecognized template type ".concat(as));
            }
          },
          mode: state.opts.mode || 'remove',
          ignoreFilenames: ignoreFilenames,
          types: types,
          removeImport: state.opts.removeImport || false,
          libraries: (state.opts.additionalLibraries || []).concat('prop-types'),
          classNameMatchers: classNameMatchers,
          createReactClassName: state.opts.createReactClassName || 'createReactClass'
        };

        if (state.opts.plugins) {
          var pluginsState = state;
          var pluginsVisitors = state.opts.plugins.map(function (pluginOpts) {
            var pluginName = typeof pluginOpts === 'string' ? pluginOpts : pluginOpts[0];

            if (typeof pluginOpts !== 'string') {
              pluginsState.opts = _objectSpread({}, pluginsState.opts, pluginOpts[1]);
            }

            var plugin = require(pluginName);

            if (typeof plugin !== 'function') {
              plugin = plugin.default;
            }

            return plugin(api).visitor;
          });
          traverse(programPath.parent, traverse.visitors.merge(pluginsVisitors), programPath.scope, pluginsState, programPath.parentPath);
        } // On program start, do an explicit traversal up front for this plugin.


        programPath.traverse({
          ObjectProperty: {
            exit: function exit(path) {
              var node = path.node;

              if (node.computed || node.key.name !== 'propTypes') {
                return;
              }

              var parent = path.findParent(function (currentNode) {
                if (currentNode.type !== 'CallExpression') {
                  return false;
                }

                return currentNode.get('callee').node.name === globalOptions.createReactClassName || currentNode.get('callee').node.property && currentNode.get('callee').node.property.name === 'createClass';
              });

              if (parent) {
                path.traverse(collectNestedIdentifiers);
                removedPaths.add(path);
                (0, _remove.default)(path, globalOptions, {
                  type: 'createClass'
                });
              }
            }
          },
          // Here to support stage-1 transform-class-properties.
          ClassProperty: function ClassProperty(path) {
            var node = path.node,
                scope = path.scope;

            if (node.key.name === 'propTypes') {
              var pathClassDeclaration = scope.path;

              if (isReactClass(pathClassDeclaration.get('superClass'), scope, globalOptions)) {
                path.traverse(collectNestedIdentifiers);
                removedPaths.add(path);
                (0, _remove.default)(path, globalOptions, {
                  type: 'class static',
                  pathClassDeclaration: pathClassDeclaration
                });
              }
            }
          },
          AssignmentExpression: function AssignmentExpression(path) {
            var node = path.node,
                scope = path.scope;

            if (node.left.computed || !node.left.property || node.left.property.name !== 'propTypes') {
              return;
            }

            var forceRemoval = (0, _isAnnotatedForRemoval.default)(path.node.left);

            if (forceRemoval) {
              path.traverse(collectNestedIdentifiers);
              removedPaths.add(path);
              (0, _remove.default)(path, globalOptions, {
                type: 'assign'
              });
              return;
            }

            var className = node.left.object.name;
            var binding = scope.getBinding(className);

            if (!binding) {
              return;
            }

            if (binding.path.isClassDeclaration()) {
              var superClass = binding.path.get('superClass');

              if (isReactClass(superClass, scope, globalOptions)) {
                path.traverse(collectNestedIdentifiers);
                removedPaths.add(path);
                (0, _remove.default)(path, globalOptions, {
                  type: 'assign'
                });
              }
            } else if ((0, _isStatelessComponent.default)(binding.path)) {
              path.traverse(collectNestedIdentifiers);
              removedPaths.add(path);
              (0, _remove.default)(path, globalOptions, {
                type: 'assign'
              });
            }
          }
        });
        var skippedIdentifiers = 0;
        var removeNewlyUnusedIdentifiers = {
          VariableDeclarator: function VariableDeclarator(path) {
            // Only consider the top level scope.
            if (path.scope.block.type !== 'Program') {
              return;
            }

            if (['ObjectPattern', 'ArrayPattern'].includes(path.node.id.type)) {
              // Object or Array destructuring, so we will want to capture all
              // the names created by the destructuring. This currently doesn't
              // work, but would be good to improve. All of the names for
              // ObjectPattern can be collected like:
              //
              //   path.node.id.properties.map(prop => prop.value.name);
              return;
            }

            var name = path.node.id.name;

            if (!nestedIdentifiers.has(name)) {
              return;
            }

            var _path$scope$getBindin = path.scope.getBinding(name),
                referencePaths = _path$scope$getBindin.referencePaths; // Count the number of referencePaths that are not in the
            // removedPaths Set. We need to do this in order to support the wrap
            // option, which doesn't actually remove the references.


            var hasRemainingReferencePaths = referencePaths.some(function (referencePath) {
              var found = referencePath.find(function (path2) {
                return removedPaths.has(path2);
              });
              return !found;
            });

            if (hasRemainingReferencePaths) {
              // There are still references to this identifier, so we need to
              // skip over it for now.
              skippedIdentifiers += 1;
              return;
            }

            removedPaths.add(path);
            nestedIdentifiers.delete(name);
            path.get('init').traverse(collectNestedIdentifiers);
            (0, _remove.default)(path, globalOptions, {
              type: 'declarator'
            });
          }
        };
        var lastNestedIdentifiers = new Set();

        while (!areSetsEqual(nestedIdentifiers, lastNestedIdentifiers) && nestedIdentifiers.size > 0 && skippedIdentifiers < nestedIdentifiers.size) {
          lastNestedIdentifiers = new Set(nestedIdentifiers);
          skippedIdentifiers = 0;
          programPath.scope.crawl();
          programPath.traverse(removeNewlyUnusedIdentifiers);
        }

        if (globalOptions.removeImport) {
          if (globalOptions.mode === 'remove') {
            programPath.scope.crawl();
            programPath.traverse({
              ImportDeclaration: function ImportDeclaration(path) {
                var _path$node = path.node,
                    source = _path$node.source,
                    specifiers = _path$node.specifiers;
                var found = globalOptions.libraries.some(function (library) {
                  if (library instanceof RegExp) {
                    return library.test(source.value);
                  }

                  return source.value === library;
                });

                if (!found) {
                  return;
                }

                var haveUsedSpecifiers = specifiers.some(function (specifier) {
                  var importedIdentifierName = specifier.local.name;

                  var _path$scope$getBindin2 = path.scope.getBinding(importedIdentifierName),
                      referencePaths = _path$scope$getBindin2.referencePaths;

                  return referencePaths.length > 0;
                });

                if (!haveUsedSpecifiers) {
                  path.remove();
                }
              }
            });
          } else {
            throw new Error('transform-react-remove-prop-type: removeImport = true and mode != "remove" can not be used at the same time.');
          }
        }
      }
    }
  };
}