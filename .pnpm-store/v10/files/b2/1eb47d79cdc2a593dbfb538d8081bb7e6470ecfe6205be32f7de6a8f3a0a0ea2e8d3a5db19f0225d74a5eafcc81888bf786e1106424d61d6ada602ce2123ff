/**
 * @license React
 * react-refresh-babel.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

function ReactFreshBabelPlugin (babel) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof babel.env === 'function') {
    // Only available in Babel 7.
    var env = babel.env();

    if (env !== 'development' && !opts.skipEnvCheck) {
      throw new Error('React Refresh Babel transform should only be enabled in development environment. ' + 'Instead, the environment is: "' + env + '". If you want to override this check, pass {skipEnvCheck: true} as plugin options.');
    }
  }

  var t = babel.types;
  var refreshReg = t.identifier(opts.refreshReg || '$RefreshReg$');
  var refreshSig = t.identifier(opts.refreshSig || '$RefreshSig$');
  var registrationsByProgramPath = new Map();

  function createRegistration(programPath, persistentID) {
    var handle = programPath.scope.generateUidIdentifier('c');

    if (!registrationsByProgramPath.has(programPath)) {
      registrationsByProgramPath.set(programPath, []);
    }

    var registrations = registrationsByProgramPath.get(programPath);
    registrations.push({
      handle: handle,
      persistentID: persistentID
    });
    return handle;
  }

  function isComponentishName(name) {
    return typeof name === 'string' && name[0] >= 'A' && name[0] <= 'Z';
  }

  function findInnerComponents(inferredName, path, callback) {
    var node = path.node;

    switch (node.type) {
      case 'Identifier':
        {
          if (!isComponentishName(node.name)) {
            return false;
          } // export default hoc(Foo)
          // const X = hoc(Foo)


          callback(inferredName, node, null);
          return true;
        }

      case 'FunctionDeclaration':
        {
          // function Foo() {}
          // export function Foo() {}
          // export default function Foo() {}
          callback(inferredName, node.id, null);
          return true;
        }

      case 'ArrowFunctionExpression':
        {
          if (node.body.type === 'ArrowFunctionExpression') {
            return false;
          } // let Foo = () => {}
          // export default hoc1(hoc2(() => {}))


          callback(inferredName, node, path);
          return true;
        }

      case 'FunctionExpression':
        {
          // let Foo = function() {}
          // const Foo = hoc1(forwardRef(function renderFoo() {}))
          // export default memo(function() {})
          callback(inferredName, node, path);
          return true;
        }

      case 'CallExpression':
        {
          var argsPath = path.get('arguments');

          if (argsPath === undefined || argsPath.length === 0) {
            return false;
          }

          var calleePath = path.get('callee');

          switch (calleePath.node.type) {
            case 'MemberExpression':
            case 'Identifier':
              {
                var calleeSource = calleePath.getSource();
                var firstArgPath = argsPath[0];
                var innerName = inferredName + '$' + calleeSource;
                var foundInside = findInnerComponents(innerName, firstArgPath, callback);

                if (!foundInside) {
                  return false;
                } // const Foo = hoc1(hoc2(() => {}))
                // export default memo(React.forwardRef(function() {}))


                callback(inferredName, node, path);
                return true;
              }

            default:
              {
                return false;
              }
          }
        }

      case 'VariableDeclarator':
        {
          var init = node.init;

          if (init === null) {
            return false;
          }

          var name = node.id.name;

          if (!isComponentishName(name)) {
            return false;
          }

          switch (init.type) {
            case 'ArrowFunctionExpression':
            case 'FunctionExpression':
              // Likely component definitions.
              break;

            case 'CallExpression':
              {
                // Maybe a HOC.
                // Try to determine if this is some form of import.
                var callee = init.callee;
                var calleeType = callee.type;

                if (calleeType === 'Import') {
                  return false;
                } else if (calleeType === 'Identifier') {
                  if (callee.name.indexOf('require') === 0) {
                    return false;
                  } else if (callee.name.indexOf('import') === 0) {
                    return false;
                  } // Neither require nor import. Might be a HOC.
                  // Pass through.

                }

                break;
              }

            case 'TaggedTemplateExpression':
              // Maybe something like styled.div`...`
              break;

            default:
              return false;
          }

          var initPath = path.get('init');

          var _foundInside = findInnerComponents(inferredName, initPath, callback);

          if (_foundInside) {
            return true;
          } // See if this identifier is used in JSX. Then it's a component.


          var binding = path.scope.getBinding(name);

          if (binding === undefined) {
            return;
          }

          var isLikelyUsedAsType = false;
          var referencePaths = binding.referencePaths;

          for (var i = 0; i < referencePaths.length; i++) {
            var ref = referencePaths[i];

            if (ref.node && ref.node.type !== 'JSXIdentifier' && ref.node.type !== 'Identifier') {
              continue;
            }

            var refParent = ref.parent;

            if (refParent.type === 'JSXOpeningElement') {
              isLikelyUsedAsType = true;
            } else if (refParent.type === 'CallExpression') {
              var _callee = refParent.callee;
              var fnName = void 0;

              switch (_callee.type) {
                case 'Identifier':
                  fnName = _callee.name;
                  break;

                case 'MemberExpression':
                  fnName = _callee.property.name;
                  break;
              }

              switch (fnName) {
                case 'createElement':
                case 'jsx':
                case 'jsxDEV':
                case 'jsxs':
                  isLikelyUsedAsType = true;
                  break;
              }
            }

            if (isLikelyUsedAsType) {
              // const X = ... + later <X />
              callback(inferredName, init, initPath);
              return true;
            }
          }
        }
    }

    return false;
  }

  function isBuiltinHook(hookName) {
    switch (hookName) {
      case 'useState':
      case 'React.useState':
      case 'useReducer':
      case 'React.useReducer':
      case 'useEffect':
      case 'React.useEffect':
      case 'useLayoutEffect':
      case 'React.useLayoutEffect':
      case 'useMemo':
      case 'React.useMemo':
      case 'useCallback':
      case 'React.useCallback':
      case 'useRef':
      case 'React.useRef':
      case 'useContext':
      case 'React.useContext':
      case 'useImperativeHandle':
      case 'React.useImperativeHandle':
      case 'useDebugValue':
      case 'React.useDebugValue':
        return true;

      default:
        return false;
    }
  }

  function getHookCallsSignature(functionNode) {
    var fnHookCalls = hookCalls.get(functionNode);

    if (fnHookCalls === undefined) {
      return null;
    }

    return {
      key: fnHookCalls.map(function (call) {
        return call.name + '{' + call.key + '}';
      }).join('\n'),
      customHooks: fnHookCalls.filter(function (call) {
        return !isBuiltinHook(call.name);
      }).map(function (call) {
        return t.cloneDeep(call.callee);
      })
    };
  }

  var hasForceResetCommentByFile = new WeakMap(); // We let user do /* @refresh reset */ to reset state in the whole file.

  function hasForceResetComment(path) {
    var file = path.hub.file;
    var hasForceReset = hasForceResetCommentByFile.get(file);

    if (hasForceReset !== undefined) {
      return hasForceReset;
    }

    hasForceReset = false;
    var comments = file.ast.comments;

    for (var i = 0; i < comments.length; i++) {
      var cmt = comments[i];

      if (cmt.value.indexOf('@refresh reset') !== -1) {
        hasForceReset = true;
        break;
      }
    }

    hasForceResetCommentByFile.set(file, hasForceReset);
    return hasForceReset;
  }

  function createArgumentsForSignature(node, signature, scope) {
    var key = signature.key,
        customHooks = signature.customHooks;
    var forceReset = hasForceResetComment(scope.path);
    var customHooksInScope = [];
    customHooks.forEach(function (callee) {
      // Check if a corresponding binding exists where we emit the signature.
      var bindingName;

      switch (callee.type) {
        case 'MemberExpression':
          if (callee.object.type === 'Identifier') {
            bindingName = callee.object.name;
          }

          break;

        case 'Identifier':
          bindingName = callee.name;
          break;
      }

      if (scope.hasBinding(bindingName)) {
        customHooksInScope.push(callee);
      } else {
        // We don't have anything to put in the array because Hook is out of scope.
        // Since it could potentially have been edited, remount the component.
        forceReset = true;
      }
    });
    var finalKey = key;

    if (typeof require === 'function' && !opts.emitFullSignatures) {
      // Prefer to hash when we can (e.g. outside of ASTExplorer).
      // This makes it deterministically compact, even if there's
      // e.g. a useState initializer with some code inside.
      // We also need it for www that has transforms like cx()
      // that don't understand if something is part of a string.
      finalKey = require('crypto').createHash('sha1').update(key).digest('base64');
    }

    var args = [node, t.stringLiteral(finalKey)];

    if (forceReset || customHooksInScope.length > 0) {
      args.push(t.booleanLiteral(forceReset));
    }

    if (customHooksInScope.length > 0) {
      args.push( // TODO: We could use an arrow here to be more compact.
      // However, don't do it until AMA can run them natively.
      t.functionExpression(null, [], t.blockStatement([t.returnStatement(t.arrayExpression(customHooksInScope))])));
    }

    return args;
  }

  function findHOCCallPathsAbove(path) {
    var calls = [];

    while (true) {
      if (!path) {
        return calls;
      }

      var parentPath = path.parentPath;

      if (!parentPath) {
        return calls;
      }

      if ( // hoc(_c = function() { })
      parentPath.node.type === 'AssignmentExpression' && path.node === parentPath.node.right) {
        // Ignore registrations.
        path = parentPath;
        continue;
      }

      if ( // hoc1(hoc2(...))
      parentPath.node.type === 'CallExpression' && path.node !== parentPath.node.callee) {
        calls.push(parentPath);
        path = parentPath;
        continue;
      }

      return calls; // Stop at other types.
    }
  }

  var seenForRegistration = new WeakSet();
  var seenForSignature = new WeakSet();
  var seenForOutro = new WeakSet();
  var hookCalls = new WeakMap();
  var HookCallsVisitor = {
    CallExpression: function (path) {
      var node = path.node;
      var callee = node.callee; // Note: this visitor MUST NOT mutate the tree in any way.
      // It runs early in a separate traversal and should be very fast.

      var name = null;

      switch (callee.type) {
        case 'Identifier':
          name = callee.name;
          break;

        case 'MemberExpression':
          name = callee.property.name;
          break;
      }

      if (name === null || !/^use[A-Z]/.test(name)) {
        return;
      }

      var fnScope = path.scope.getFunctionParent();

      if (fnScope === null) {
        return;
      } // This is a Hook call. Record it.


      var fnNode = fnScope.block;

      if (!hookCalls.has(fnNode)) {
        hookCalls.set(fnNode, []);
      }

      var hookCallsForFn = hookCalls.get(fnNode);
      var key = '';

      if (path.parent.type === 'VariableDeclarator') {
        // TODO: if there is no LHS, consider some other heuristic.
        key = path.parentPath.get('id').getSource();
      } // Some built-in Hooks reset on edits to arguments.


      var args = path.get('arguments');

      if (name === 'useState' && args.length > 0) {
        // useState second argument is initial state.
        key += '(' + args[0].getSource() + ')';
      } else if (name === 'useReducer' && args.length > 1) {
        // useReducer second argument is initial state.
        key += '(' + args[1].getSource() + ')';
      }

      hookCallsForFn.push({
        callee: path.node.callee,
        name: name,
        key: key
      });
    }
  };
  return {
    visitor: {
      ExportDefaultDeclaration: function (path) {
        var node = path.node;
        var decl = node.declaration;
        var declPath = path.get('declaration');

        if (decl.type !== 'CallExpression') {
          // For now, we only support possible HOC calls here.
          // Named function declarations are handled in FunctionDeclaration.
          // Anonymous direct exports like export default function() {}
          // are currently ignored.
          return;
        } // Make sure we're not mutating the same tree twice.
        // This can happen if another Babel plugin replaces parents.


        if (seenForRegistration.has(node)) {
          return;
        }

        seenForRegistration.add(node); // Don't mutate the tree above this point.
        // This code path handles nested cases like:
        // export default memo(() => {})
        // In those cases it is more plausible people will omit names
        // so they're worth handling despite possible false positives.
        // More importantly, it handles the named case:
        // export default memo(function Named() {})

        var inferredName = '%default%';
        var programPath = path.parentPath;
        findInnerComponents(inferredName, declPath, function (persistentID, targetExpr, targetPath) {
          if (targetPath === null) {
            // For case like:
            // export default hoc(Foo)
            // we don't want to wrap Foo inside the call.
            // Instead we assume it's registered at definition.
            return;
          }

          var handle = createRegistration(programPath, persistentID);
          targetPath.replaceWith(t.assignmentExpression('=', handle, targetExpr));
        });
      },
      FunctionDeclaration: {
        enter: function (path) {
          var node = path.node;
          var programPath;
          var insertAfterPath;
          var modulePrefix = '';

          switch (path.parent.type) {
            case 'Program':
              insertAfterPath = path;
              programPath = path.parentPath;
              break;

            case 'TSModuleBlock':
              insertAfterPath = path;
              programPath = insertAfterPath.parentPath.parentPath;
              break;

            case 'ExportNamedDeclaration':
              insertAfterPath = path.parentPath;
              programPath = insertAfterPath.parentPath;
              break;

            case 'ExportDefaultDeclaration':
              insertAfterPath = path.parentPath;
              programPath = insertAfterPath.parentPath;
              break;

            default:
              return;
          } // These types can be nested in typescript namespace
          // We need to find the export chain
          // Or return if it stays local


          if (path.parent.type === 'TSModuleBlock' || path.parent.type === 'ExportNamedDeclaration') {
            while (programPath.type !== 'Program') {
              if (programPath.type === 'TSModuleDeclaration') {
                if (programPath.parentPath.type !== 'Program' && programPath.parentPath.type !== 'ExportNamedDeclaration') {
                  return;
                }

                modulePrefix = programPath.node.id.name + '$' + modulePrefix;
              }

              programPath = programPath.parentPath;
            }
          }

          var id = node.id;

          if (id === null) {
            // We don't currently handle anonymous default exports.
            return;
          }

          var inferredName = id.name;

          if (!isComponentishName(inferredName)) {
            return;
          } // Make sure we're not mutating the same tree twice.
          // This can happen if another Babel plugin replaces parents.


          if (seenForRegistration.has(node)) {
            return;
          }

          seenForRegistration.add(node); // Don't mutate the tree above this point.

          var innerName = modulePrefix + inferredName; // export function Named() {}
          // function Named() {}

          findInnerComponents(innerName, path, function (persistentID, targetExpr) {
            var handle = createRegistration(programPath, persistentID);
            insertAfterPath.insertAfter(t.expressionStatement(t.assignmentExpression('=', handle, targetExpr)));
          });
        },
        exit: function (path) {
          var node = path.node;
          var id = node.id;

          if (id === null) {
            return;
          }

          var signature = getHookCallsSignature(node);

          if (signature === null) {
            return;
          } // Make sure we're not mutating the same tree twice.
          // This can happen if another Babel plugin replaces parents.


          if (seenForSignature.has(node)) {
            return;
          }

          seenForSignature.add(node); // Don't mutate the tree above this point.

          var sigCallID = path.scope.generateUidIdentifier('_s');
          path.scope.parent.push({
            id: sigCallID,
            init: t.callExpression(refreshSig, [])
          }); // The signature call is split in two parts. One part is called inside the function.
          // This is used to signal when first render happens.

          path.get('body').unshiftContainer('body', t.expressionStatement(t.callExpression(sigCallID, []))); // The second call is around the function itself.
          // This is used to associate a type with a signature.
          // Unlike with $RefreshReg$, this needs to work for nested
          // declarations too. So we need to search for a path where
          // we can insert a statement rather than hard coding it.

          var insertAfterPath = null;
          path.find(function (p) {
            if (p.parentPath.isBlock()) {
              insertAfterPath = p;
              return true;
            }
          });

          if (insertAfterPath === null) {
            return;
          }

          insertAfterPath.insertAfter(t.expressionStatement(t.callExpression(sigCallID, createArgumentsForSignature(id, signature, insertAfterPath.scope))));
        }
      },
      'ArrowFunctionExpression|FunctionExpression': {
        exit: function (path) {
          var node = path.node;
          var signature = getHookCallsSignature(node);

          if (signature === null) {
            return;
          } // Make sure we're not mutating the same tree twice.
          // This can happen if another Babel plugin replaces parents.


          if (seenForSignature.has(node)) {
            return;
          }

          seenForSignature.add(node); // Don't mutate the tree above this point.

          var sigCallID = path.scope.generateUidIdentifier('_s');
          path.scope.parent.push({
            id: sigCallID,
            init: t.callExpression(refreshSig, [])
          }); // The signature call is split in two parts. One part is called inside the function.
          // This is used to signal when first render happens.

          if (path.node.body.type !== 'BlockStatement') {
            path.node.body = t.blockStatement([t.returnStatement(path.node.body)]);
          }

          path.get('body').unshiftContainer('body', t.expressionStatement(t.callExpression(sigCallID, []))); // The second call is around the function itself.
          // This is used to associate a type with a signature.

          if (path.parent.type === 'VariableDeclarator') {
            var insertAfterPath = null;
            path.find(function (p) {
              if (p.parentPath.isBlock()) {
                insertAfterPath = p;
                return true;
              }
            });

            if (insertAfterPath === null) {
              return;
            } // Special case when a function would get an inferred name:
            // let Foo = () => {}
            // let Foo = function() {}
            // We'll add signature it on next line so that
            // we don't mess up the inferred 'Foo' function name.


            insertAfterPath.insertAfter(t.expressionStatement(t.callExpression(sigCallID, createArgumentsForSignature(path.parent.id, signature, insertAfterPath.scope)))); // Result: let Foo = () => {}; __signature(Foo, ...);
          } else {
            // let Foo = hoc(() => {})
            var paths = [path].concat(findHOCCallPathsAbove(path));
            paths.forEach(function (p) {
              p.replaceWith(t.callExpression(sigCallID, createArgumentsForSignature(p.node, signature, p.scope)));
            }); // Result: let Foo = __signature(hoc(__signature(() => {}, ...)), ...)
          }
        }
      },
      VariableDeclaration: function (path) {
        var node = path.node;
        var programPath;
        var insertAfterPath;
        var modulePrefix = '';

        switch (path.parent.type) {
          case 'Program':
            insertAfterPath = path;
            programPath = path.parentPath;
            break;

          case 'TSModuleBlock':
            insertAfterPath = path;
            programPath = insertAfterPath.parentPath.parentPath;
            break;

          case 'ExportNamedDeclaration':
            insertAfterPath = path.parentPath;
            programPath = insertAfterPath.parentPath;
            break;

          case 'ExportDefaultDeclaration':
            insertAfterPath = path.parentPath;
            programPath = insertAfterPath.parentPath;
            break;

          default:
            return;
        } // These types can be nested in typescript namespace
        // We need to find the export chain
        // Or return if it stays local


        if (path.parent.type === 'TSModuleBlock' || path.parent.type === 'ExportNamedDeclaration') {
          while (programPath.type !== 'Program') {
            if (programPath.type === 'TSModuleDeclaration') {
              if (programPath.parentPath.type !== 'Program' && programPath.parentPath.type !== 'ExportNamedDeclaration') {
                return;
              }

              modulePrefix = programPath.node.id.name + '$' + modulePrefix;
            }

            programPath = programPath.parentPath;
          }
        } // Make sure we're not mutating the same tree twice.
        // This can happen if another Babel plugin replaces parents.


        if (seenForRegistration.has(node)) {
          return;
        }

        seenForRegistration.add(node); // Don't mutate the tree above this point.

        var declPaths = path.get('declarations');

        if (declPaths.length !== 1) {
          return;
        }

        var declPath = declPaths[0];
        var inferredName = declPath.node.id.name;
        var innerName = modulePrefix + inferredName;
        findInnerComponents(innerName, declPath, function (persistentID, targetExpr, targetPath) {
          if (targetPath === null) {
            // For case like:
            // export const Something = hoc(Foo)
            // we don't want to wrap Foo inside the call.
            // Instead we assume it's registered at definition.
            return;
          }

          var handle = createRegistration(programPath, persistentID);

          if (targetPath.parent.type === 'VariableDeclarator') {
            // Special case when a variable would get an inferred name:
            // let Foo = () => {}
            // let Foo = function() {}
            // let Foo = styled.div``;
            // We'll register it on next line so that
            // we don't mess up the inferred 'Foo' function name.
            // (eg: with @babel/plugin-transform-react-display-name or
            // babel-plugin-styled-components)
            insertAfterPath.insertAfter(t.expressionStatement(t.assignmentExpression('=', handle, declPath.node.id))); // Result: let Foo = () => {}; _c1 = Foo;
          } else {
            // let Foo = hoc(() => {})
            targetPath.replaceWith(t.assignmentExpression('=', handle, targetExpr)); // Result: let Foo = hoc(_c1 = () => {})
          }
        });
      },
      Program: {
        enter: function (path) {
          // This is a separate early visitor because we need to collect Hook calls
          // and "const [foo, setFoo] = ..." signatures before the destructuring
          // transform mangles them. This extra traversal is not ideal for perf,
          // but it's the best we can do until we stop transpiling destructuring.
          path.traverse(HookCallsVisitor);
        },
        exit: function (path) {
          var registrations = registrationsByProgramPath.get(path);

          if (registrations === undefined) {
            return;
          } // Make sure we're not mutating the same tree twice.
          // This can happen if another Babel plugin replaces parents.


          var node = path.node;

          if (seenForOutro.has(node)) {
            return;
          }

          seenForOutro.add(node); // Don't mutate the tree above this point.

          registrationsByProgramPath.delete(path);
          var declarators = [];
          path.pushContainer('body', t.variableDeclaration('var', declarators));
          registrations.forEach(function (_ref) {
            var handle = _ref.handle,
                persistentID = _ref.persistentID;
            path.pushContainer('body', t.expressionStatement(t.callExpression(refreshReg, [handle, t.stringLiteral(persistentID)])));
            declarators.push(t.variableDeclarator(handle));
          });
        }
      }
    }
  };
}

module.exports = ReactFreshBabelPlugin;
  })();
}
