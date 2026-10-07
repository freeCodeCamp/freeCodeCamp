/**
 * @license React
 * eslint-plugin-react-hooks.development.js
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/* global BigInt */

function isHookName(s) {
  return /^use[A-Z0-9].*$/.test(s);
}
/**
 * We consider hooks to be a hook name identifier or a member expression
 * containing a hook name.
 */


function isHook(node) {
  if (node.type === 'Identifier') {
    return isHookName(node.name);
  } else if (node.type === 'MemberExpression' && !node.computed && isHook(node.property)) {
    var obj = node.object;
    var isPascalCaseNameSpace = /^[A-Z].*/;
    return obj.type === 'Identifier' && isPascalCaseNameSpace.test(obj.name);
  } else {
    return false;
  }
}
/**
 * Checks if the node is a React component name. React component names must
 * always start with a non-lowercase letter. So `MyComponent` or `_MyComponent`
 * are valid component names for instance.
 */


function isComponentName(node) {
  if (node.type === 'Identifier') {
    return !/^[a-z]/.test(node.name);
  } else {
    return false;
  }
}

function isReactFunction(node, functionName) {
  return node.name === functionName || node.type === 'MemberExpression' && node.object.name === 'React' && node.property.name === functionName;
}
/**
 * Checks if the node is a callback argument of forwardRef. This render function
 * should follow the rules of hooks.
 */


function isForwardRefCallback(node) {
  return !!(node.parent && node.parent.callee && isReactFunction(node.parent.callee, 'forwardRef'));
}
/**
 * Checks if the node is a callback argument of React.memo. This anonymous
 * functional component should follow the rules of hooks.
 */


function isMemoCallback(node) {
  return !!(node.parent && node.parent.callee && isReactFunction(node.parent.callee, 'memo'));
}

function isInsideComponentOrHook(node) {
  while (node) {
    var functionName = getFunctionName(node);

    if (functionName) {
      if (isComponentName(functionName) || isHook(functionName)) {
        return true;
      }
    }

    if (isForwardRefCallback(node) || isMemoCallback(node)) {
      return true;
    }

    node = node.parent;
  }

  return false;
}

var RulesOfHooks = {
  meta: {
    type: 'problem',
    docs: {
      description: 'enforces the Rules of Hooks',
      recommended: true,
      url: 'https://reactjs.org/docs/hooks-rules.html'
    }
  },
  create: function (context) {
    var codePathReactHooksMapStack = [];
    var codePathSegmentStack = [];
    return {
      // Maintain code segment path stack as we traverse.
      onCodePathSegmentStart: function (segment) {
        return codePathSegmentStack.push(segment);
      },
      onCodePathSegmentEnd: function () {
        return codePathSegmentStack.pop();
      },
      // Maintain code path stack as we traverse.
      onCodePathStart: function () {
        return codePathReactHooksMapStack.push(new Map());
      },
      // Process our code path.
      //
      // Everything is ok if all React Hooks are both reachable from the initial
      // segment and reachable from every final segment.
      onCodePathEnd: function (codePath, codePathNode) {
        var reactHooksMap = codePathReactHooksMapStack.pop();

        if (reactHooksMap.size === 0) {
          return;
        } // All of the segments which are cyclic are recorded in this set.


        var cyclic = new Set();
        /**
         * Count the number of code paths from the start of the function to this
         * segment. For example:
         *
         * ```js
         * function MyComponent() {
         *   if (condition) {
         *     // Segment 1
         *   } else {
         *     // Segment 2
         *   }
         *   // Segment 3
         * }
         * ```
         *
         * Segments 1 and 2 have one path to the beginning of `MyComponent` and
         * segment 3 has two paths to the beginning of `MyComponent` since we
         * could have either taken the path of segment 1 or segment 2.
         *
         * Populates `cyclic` with cyclic segments.
         */

        function countPathsFromStart(segment, pathHistory) {
          var cache = countPathsFromStart.cache;
          var paths = cache.get(segment.id);
          var pathList = new Set(pathHistory); // If `pathList` includes the current segment then we've found a cycle!
          // We need to fill `cyclic` with all segments inside cycle

          if (pathList.has(segment.id)) {
            var pathArray = [].concat(pathList);
            var cyclicSegments = pathArray.slice(pathArray.indexOf(segment.id) + 1);

            var _iterator = _createForOfIteratorHelper(cyclicSegments),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var cyclicSegment = _step.value;
                cyclic.add(cyclicSegment);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return BigInt('0');
          } // add the current segment to pathList


          pathList.add(segment.id); // We have a cached `paths`. Return it.

          if (paths !== undefined) {
            return paths;
          }

          if (codePath.thrownSegments.includes(segment)) {
            paths = BigInt('0');
          } else if (segment.prevSegments.length === 0) {
            paths = BigInt('1');
          } else {
            paths = BigInt('0');

            var _iterator2 = _createForOfIteratorHelper(segment.prevSegments),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var prevSegment = _step2.value;
                paths += countPathsFromStart(prevSegment, pathList);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } // If our segment is reachable then there should be at least one path
          // to it from the start of our code path.


          if (segment.reachable && paths === BigInt('0')) {
            cache.delete(segment.id);
          } else {
            cache.set(segment.id, paths);
          }

          return paths;
        }
        /**
         * Count the number of code paths from this segment to the end of the
         * function. For example:
         *
         * ```js
         * function MyComponent() {
         *   // Segment 1
         *   if (condition) {
         *     // Segment 2
         *   } else {
         *     // Segment 3
         *   }
         * }
         * ```
         *
         * Segments 2 and 3 have one path to the end of `MyComponent` and
         * segment 1 has two paths to the end of `MyComponent` since we could
         * either take the path of segment 1 or segment 2.
         *
         * Populates `cyclic` with cyclic segments.
         */


        function countPathsToEnd(segment, pathHistory) {
          var cache = countPathsToEnd.cache;
          var paths = cache.get(segment.id);
          var pathList = new Set(pathHistory); // If `pathList` includes the current segment then we've found a cycle!
          // We need to fill `cyclic` with all segments inside cycle

          if (pathList.has(segment.id)) {
            var pathArray = Array.from(pathList);
            var cyclicSegments = pathArray.slice(pathArray.indexOf(segment.id) + 1);

            var _iterator3 = _createForOfIteratorHelper(cyclicSegments),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var cyclicSegment = _step3.value;
                cyclic.add(cyclicSegment);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            return BigInt('0');
          } // add the current segment to pathList


          pathList.add(segment.id); // We have a cached `paths`. Return it.

          if (paths !== undefined) {
            return paths;
          }

          if (codePath.thrownSegments.includes(segment)) {
            paths = BigInt('0');
          } else if (segment.nextSegments.length === 0) {
            paths = BigInt('1');
          } else {
            paths = BigInt('0');

            var _iterator4 = _createForOfIteratorHelper(segment.nextSegments),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var nextSegment = _step4.value;
                paths += countPathsToEnd(nextSegment, pathList);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }

          cache.set(segment.id, paths);
          return paths;
        }
        /**
         * Gets the shortest path length to the start of a code path.
         * For example:
         *
         * ```js
         * function MyComponent() {
         *   if (condition) {
         *     // Segment 1
         *   }
         *   // Segment 2
         * }
         * ```
         *
         * There is only one path from segment 1 to the code path start. Its
         * length is one so that is the shortest path.
         *
         * There are two paths from segment 2 to the code path start. One
         * through segment 1 with a length of two and another directly to the
         * start with a length of one. The shortest path has a length of one
         * so we would return that.
         */


        function shortestPathLengthToStart(segment) {
          var cache = shortestPathLengthToStart.cache;
          var length = cache.get(segment.id); // If `length` is null then we found a cycle! Return infinity since
          // the shortest path is definitely not the one where we looped.

          if (length === null) {
            return Infinity;
          } // We have a cached `length`. Return it.


          if (length !== undefined) {
            return length;
          } // Compute `length` and cache it. Guarding against cycles.


          cache.set(segment.id, null);

          if (segment.prevSegments.length === 0) {
            length = 1;
          } else {
            length = Infinity;

            var _iterator5 = _createForOfIteratorHelper(segment.prevSegments),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var prevSegment = _step5.value;
                var prevLength = shortestPathLengthToStart(prevSegment);

                if (prevLength < length) {
                  length = prevLength;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            length += 1;
          }

          cache.set(segment.id, length);
          return length;
        }

        countPathsFromStart.cache = new Map();
        countPathsToEnd.cache = new Map();
        shortestPathLengthToStart.cache = new Map(); // Count all code paths to the end of our component/hook. Also primes
        // the `countPathsToEnd` cache.

        var allPathsFromStartToEnd = countPathsToEnd(codePath.initialSegment); // Gets the function name for our code path. If the function name is
        // `undefined` then we know either that we have an anonymous function
        // expression or our code path is not in a function. In both cases we
        // will want to error since neither are React function components or
        // hook functions - unless it is an anonymous function argument to
        // forwardRef or memo.

        var codePathFunctionName = getFunctionName(codePathNode); // This is a valid code path for React hooks if we are directly in a React
        // function component or we are in a hook function.

        var isSomewhereInsideComponentOrHook = isInsideComponentOrHook(codePathNode);
        var isDirectlyInsideComponentOrHook = codePathFunctionName ? isComponentName(codePathFunctionName) || isHook(codePathFunctionName) : isForwardRefCallback(codePathNode) || isMemoCallback(codePathNode); // Compute the earliest finalizer level using information from the
        // cache. We expect all reachable final segments to have a cache entry
        // after calling `visitSegment()`.

        var shortestFinalPathLength = Infinity;

        var _iterator6 = _createForOfIteratorHelper(codePath.finalSegments),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var finalSegment = _step6.value;

            if (!finalSegment.reachable) {
              continue;
            }

            var length = shortestPathLengthToStart(finalSegment);

            if (length < shortestFinalPathLength) {
              shortestFinalPathLength = length;
            }
          } // Make sure all React Hooks pass our lint invariants. Log warnings
          // if not.

        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        var _iterator7 = _createForOfIteratorHelper(reactHooksMap),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _step7$value = _step7.value,
                segment = _step7$value[0],
                reactHooks = _step7$value[1];

            // NOTE: We could report here that the hook is not reachable, but
            // that would be redundant with more general "no unreachable"
            // lint rules.
            if (!segment.reachable) {
              continue;
            } // If there are any final segments with a shorter path to start then
            // we possibly have an early return.
            //
            // If our segment is a final segment itself then siblings could
            // possibly be early returns.


            var possiblyHasEarlyReturn = segment.nextSegments.length === 0 ? shortestFinalPathLength <= shortestPathLengthToStart(segment) : shortestFinalPathLength < shortestPathLengthToStart(segment); // Count all the paths from the start of our code path to the end of
            // our code path that go _through_ this segment. The critical piece
            // of this is _through_. If we just call `countPathsToEnd(segment)`
            // then we neglect that we may have gone through multiple paths to get
            // to this point! Consider:
            //
            // ```js
            // function MyComponent() {
            //   if (a) {
            //     // Segment 1
            //   } else {
            //     // Segment 2
            //   }
            //   // Segment 3
            //   if (b) {
            //     // Segment 4
            //   } else {
            //     // Segment 5
            //   }
            // }
            // ```
            //
            // In this component we have four code paths:
            //
            // 1. `a = true; b = true`
            // 2. `a = true; b = false`
            // 3. `a = false; b = true`
            // 4. `a = false; b = false`
            //
            // From segment 3 there are two code paths to the end through segment
            // 4 and segment 5. However, we took two paths to get here through
            // segment 1 and segment 2.
            //
            // If we multiply the paths from start (two) by the paths to end (two)
            // for segment 3 we get four. Which is our desired count.

            var pathsFromStartToEnd = countPathsFromStart(segment) * countPathsToEnd(segment); // Is this hook a part of a cyclic segment?

            var cycled = cyclic.has(segment.id);

            var _iterator8 = _createForOfIteratorHelper(reactHooks),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var hook = _step8.value;

                // Report an error if a hook may be called more then once.
                if (cycled) {
                  context.report({
                    node: hook,
                    message: "React Hook \"" + context.getSource(hook) + "\" may be executed " + 'more than once. Possibly because it is called in a loop. ' + 'React Hooks must be called in the exact same order in ' + 'every component render.'
                  });
                } // If this is not a valid code path for React hooks then we need to
                // log a warning for every hook in this code path.
                //
                // Pick a special message depending on the scope this hook was
                // called in.


                if (isDirectlyInsideComponentOrHook) {
                  // Report an error if a hook does not reach all finalizing code
                  // path segments.
                  //
                  // Special case when we think there might be an early return.
                  if (!cycled && pathsFromStartToEnd !== allPathsFromStartToEnd) {
                    var message = "React Hook \"" + context.getSource(hook) + "\" is called " + 'conditionally. React Hooks must be called in the exact ' + 'same order in every component render.' + (possiblyHasEarlyReturn ? ' Did you accidentally call a React Hook after an' + ' early return?' : '');
                    context.report({
                      node: hook,
                      message: message
                    });
                  }
                } else if (codePathNode.parent && (codePathNode.parent.type === 'MethodDefinition' || codePathNode.parent.type === 'ClassProperty') && codePathNode.parent.value === codePathNode) {
                  // Custom message for hooks inside a class
                  var _message = "React Hook \"" + context.getSource(hook) + "\" cannot be called " + 'in a class component. React Hooks must be called in a ' + 'React function component or a custom React Hook function.';

                  context.report({
                    node: hook,
                    message: _message
                  });
                } else if (codePathFunctionName) {
                  // Custom message if we found an invalid function name.
                  var _message2 = "React Hook \"" + context.getSource(hook) + "\" is called in " + ("function \"" + context.getSource(codePathFunctionName) + "\" ") + 'that is neither a React function component nor a custom ' + 'React Hook function.' + ' React component names must start with an uppercase letter.' + ' React Hook names must start with the word "use".';

                  context.report({
                    node: hook,
                    message: _message2
                  });
                } else if (codePathNode.type === 'Program') {
                  // These are dangerous if you have inline requires enabled.
                  var _message3 = "React Hook \"" + context.getSource(hook) + "\" cannot be called " + 'at the top level. React Hooks must be called in a ' + 'React function component or a custom React Hook function.';

                  context.report({
                    node: hook,
                    message: _message3
                  });
                } else {
                  // Assume in all other cases the user called a hook in some
                  // random function callback. This should usually be true for
                  // anonymous function expressions. Hopefully this is clarifying
                  // enough in the common case that the incorrect message in
                  // uncommon cases doesn't matter.
                  if (isSomewhereInsideComponentOrHook) {
                    var _message4 = "React Hook \"" + context.getSource(hook) + "\" cannot be called " + 'inside a callback. React Hooks must be called in a ' + 'React function component or a custom React Hook function.';

                    context.report({
                      node: hook,
                      message: _message4
                    });
                  }
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      },
      // Missed opportunity...We could visit all `Identifier`s instead of all
      // `CallExpression`s and check that _every use_ of a hook name is valid.
      // But that gets complicated and enters type-system territory, so we're
      // only being strict about hook calls for now.
      CallExpression: function (node) {
        if (isHook(node.callee)) {
          // Add the hook node to a map keyed by the code path segment. We will
          // do full code path analysis at the end of our code path.
          var reactHooksMap = last(codePathReactHooksMapStack);
          var codePathSegment = last(codePathSegmentStack);
          var reactHooks = reactHooksMap.get(codePathSegment);

          if (!reactHooks) {
            reactHooks = [];
            reactHooksMap.set(codePathSegment, reactHooks);
          }

          reactHooks.push(node.callee);
        }
      }
    };
  }
};
/**
 * Gets the static name of a function AST node. For function declarations it is
 * easy. For anonymous function expressions it is much harder. If you search for
 * `IsAnonymousFunctionDefinition()` in the ECMAScript spec you'll find places
 * where JS gives anonymous function expressions names. We roughly detect the
 * same AST nodes with some exceptions to better fit our use case.
 */

function getFunctionName(node) {
  if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression' && node.id) {
    // function useHook() {}
    // const whatever = function useHook() {};
    //
    // Function declaration or function expression names win over any
    // assignment statements or other renames.
    return node.id;
  } else if (node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression') {
    if (node.parent.type === 'VariableDeclarator' && node.parent.init === node) {
      // const useHook = () => {};
      return node.parent.id;
    } else if (node.parent.type === 'AssignmentExpression' && node.parent.right === node && node.parent.operator === '=') {
      // useHook = () => {};
      return node.parent.left;
    } else if (node.parent.type === 'Property' && node.parent.value === node && !node.parent.computed) {
      // {useHook: () => {}}
      // {useHook() {}}
      return node.parent.key; // NOTE: We could also support `ClassProperty` and `MethodDefinition`
      // here to be pedantic. However, hooks in a class are an anti-pattern. So
      // we don't allow it to error early.
      //
      // class {useHook = () => {}}
      // class {useHook() {}}
    } else if (node.parent.type === 'AssignmentPattern' && node.parent.right === node && !node.parent.computed) {
      // const {useHook = () => {}} = {};
      // ({useHook = () => {}} = {});
      //
      // Kinda clowny, but we'd said we'd follow spec convention for
      // `IsAnonymousFunctionDefinition()` usage.
      return node.parent.left;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
/**
 * Convenience function for peeking the last item in a stack.
 */


function last(array) {
  return array[array.length - 1];
}

/* eslint-disable no-for-of-loops/no-for-of-loops */
var ExhaustiveDeps = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'verifies the list of dependencies for Hooks like useEffect and similar',
      recommended: true,
      url: 'https://github.com/facebook/react/issues/14920'
    },
    fixable: 'code',
    hasSuggestions: true,
    schema: [{
      type: 'object',
      additionalProperties: false,
      enableDangerousAutofixThisMayCauseInfiniteLoops: false,
      properties: {
        additionalHooks: {
          type: 'string'
        },
        enableDangerousAutofixThisMayCauseInfiniteLoops: {
          type: 'boolean'
        }
      }
    }]
  },
  create: function (context) {
    // Parse the `additionalHooks` regex.
    var additionalHooks = context.options && context.options[0] && context.options[0].additionalHooks ? new RegExp(context.options[0].additionalHooks) : undefined;
    var enableDangerousAutofixThisMayCauseInfiniteLoops = context.options && context.options[0] && context.options[0].enableDangerousAutofixThisMayCauseInfiniteLoops || false;
    var options = {
      additionalHooks: additionalHooks,
      enableDangerousAutofixThisMayCauseInfiniteLoops: enableDangerousAutofixThisMayCauseInfiniteLoops
    };

    function reportProblem(problem) {
      if (enableDangerousAutofixThisMayCauseInfiniteLoops) {
        // Used to enable legacy behavior. Dangerous.
        // Keep this as an option until major IDEs upgrade (including VSCode FB ESLint extension).
        if (Array.isArray(problem.suggest) && problem.suggest.length > 0) {
          problem.fix = problem.suggest[0].fix;
        }
      }

      context.report(problem);
    }

    var scopeManager = context.getSourceCode().scopeManager; // Should be shared between visitors.

    var setStateCallSites = new WeakMap();
    var stateVariables = new WeakSet();
    var stableKnownValueCache = new WeakMap();
    var functionWithoutCapturedValueCache = new WeakMap();

    function memoizeWithWeakMap(fn, map) {
      return function (arg) {
        if (map.has(arg)) {
          // to verify cache hits:
          // console.log(arg.name)
          return map.get(arg);
        }

        var result = fn(arg);
        map.set(arg, result);
        return result;
      };
    }
    /**
     * Visitor for both function expressions and arrow function expressions.
     */


    function visitFunctionWithDependencies(node, declaredDependenciesNode, reactiveHook, reactiveHookName, isEffect) {
      if (isEffect && node.async) {
        reportProblem({
          node: node,
          message: "Effect callbacks are synchronous to prevent race conditions. " + "Put the async function inside:\n\n" + 'useEffect(() => {\n' + '  async function fetchData() {\n' + '    // You can await here\n' + '    const response = await MyAPI.getData(someId);\n' + '    // ...\n' + '  }\n' + '  fetchData();\n' + "}, [someId]); // Or [] if effect doesn't need props or state\n\n" + 'Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching'
        });
      } // Get the current scope.


      var scope = scopeManager.acquire(node); // Find all our "pure scopes". On every re-render of a component these
      // pure scopes may have changes to the variables declared within. So all
      // variables used in our reactive hook callback but declared in a pure
      // scope need to be listed as dependencies of our reactive hook callback.
      //
      // According to the rules of React you can't read a mutable value in pure
      // scope. We can't enforce this in a lint so we trust that all variables
      // declared outside of pure scope are indeed frozen.

      var pureScopes = new Set();
      var componentScope = null;
      {
        var currentScope = scope.upper;

        while (currentScope) {
          pureScopes.add(currentScope);

          if (currentScope.type === 'function') {
            break;
          }

          currentScope = currentScope.upper;
        } // If there is no parent function scope then there are no pure scopes.
        // The ones we've collected so far are incorrect. So don't continue with
        // the lint.


        if (!currentScope) {
          return;
        }

        componentScope = currentScope;
      }
      var isArray = Array.isArray; // Next we'll define a few helpers that helps us
      // tell if some values don't have to be declared as deps.
      // Some are known to be stable based on Hook calls.
      // const [state, setState] = useState() / React.useState()
      //               ^^^ true for this reference
      // const [state, dispatch] = useReducer() / React.useReducer()
      //               ^^^ true for this reference
      // const ref = useRef()
      //       ^^^ true for this reference
      // False for everything else.

      function isStableKnownHookValue(resolved) {
        if (!isArray(resolved.defs)) {
          return false;
        }

        var def = resolved.defs[0];

        if (def == null) {
          return false;
        } // Look for `let stuff = ...`


        if (def.node.type !== 'VariableDeclarator') {
          return false;
        }

        var init = def.node.init;

        if (init == null) {
          return false;
        }

        while (init.type === 'TSAsExpression') {
          init = init.expression;
        } // Detect primitive constants
        // const foo = 42


        var declaration = def.node.parent;

        if (declaration == null) {
          // This might happen if variable is declared after the callback.
          // In that case ESLint won't set up .parent refs.
          // So we'll set them up manually.
          fastFindReferenceWithParent(componentScope.block, def.node.id);
          declaration = def.node.parent;

          if (declaration == null) {
            return false;
          }
        }

        if (declaration.kind === 'const' && init.type === 'Literal' && (typeof init.value === 'string' || typeof init.value === 'number' || init.value === null)) {
          // Definitely stable
          return true;
        } // Detect known Hook calls
        // const [_, setState] = useState()


        if (init.type !== 'CallExpression') {
          return false;
        }

        var callee = init.callee; // Step into `= React.something` initializer.

        if (callee.type === 'MemberExpression' && callee.object.name === 'React' && callee.property != null && !callee.computed) {
          callee = callee.property;
        }

        if (callee.type !== 'Identifier') {
          return false;
        }

        var id = def.node.id;
        var _callee = callee,
            name = _callee.name;

        if (name === 'useRef' && id.type === 'Identifier') {
          // useRef() return value is stable.
          return true;
        } else if (name === 'useState' || name === 'useReducer') {
          // Only consider second value in initializing tuple stable.
          if (id.type === 'ArrayPattern' && id.elements.length === 2 && isArray(resolved.identifiers)) {
            // Is second tuple value the same reference we're checking?
            if (id.elements[1] === resolved.identifiers[0]) {
              if (name === 'useState') {
                var references = resolved.references;
                var writeCount = 0;

                for (var i = 0; i < references.length; i++) {
                  if (references[i].isWrite()) {
                    writeCount++;
                  }

                  if (writeCount > 1) {
                    return false;
                  }

                  setStateCallSites.set(references[i].identifier, id.elements[0]);
                }
              } // Setter is stable.


              return true;
            } else if (id.elements[0] === resolved.identifiers[0]) {
              if (name === 'useState') {
                var _references = resolved.references;

                for (var _i = 0; _i < _references.length; _i++) {
                  stateVariables.add(_references[_i].identifier);
                }
              } // State variable itself is dynamic.


              return false;
            }
          }
        } else if (name === 'useTransition') {
          // Only consider second value in initializing tuple stable.
          if (id.type === 'ArrayPattern' && id.elements.length === 2 && Array.isArray(resolved.identifiers)) {
            // Is second tuple value the same reference we're checking?
            if (id.elements[1] === resolved.identifiers[0]) {
              // Setter is stable.
              return true;
            }
          }
        } // By default assume it's dynamic.


        return false;
      } // Some are just functions that don't reference anything dynamic.


      function isFunctionWithoutCapturedValues(resolved) {
        if (!isArray(resolved.defs)) {
          return false;
        }

        var def = resolved.defs[0];

        if (def == null) {
          return false;
        }

        if (def.node == null || def.node.id == null) {
          return false;
        } // Search the direct component subscopes for
        // top-level function definitions matching this reference.


        var fnNode = def.node;
        var childScopes = componentScope.childScopes;
        var fnScope = null;
        var i;

        for (i = 0; i < childScopes.length; i++) {
          var childScope = childScopes[i];
          var childScopeBlock = childScope.block;

          if ( // function handleChange() {}
          fnNode.type === 'FunctionDeclaration' && childScopeBlock === fnNode || // const handleChange = () => {}
          // const handleChange = function() {}
          fnNode.type === 'VariableDeclarator' && childScopeBlock.parent === fnNode) {
            // Found it!
            fnScope = childScope;
            break;
          }
        }

        if (fnScope == null) {
          return false;
        } // Does this function capture any values
        // that are in pure scopes (aka render)?


        for (i = 0; i < fnScope.through.length; i++) {
          var ref = fnScope.through[i];

          if (ref.resolved == null) {
            continue;
          }

          if (pureScopes.has(ref.resolved.scope) && // Stable values are fine though,
          // although we won't check functions deeper.
          !memoizedIsStableKnownHookValue(ref.resolved)) {
            return false;
          }
        } // If we got here, this function doesn't capture anything
        // from render--or everything it captures is known stable.


        return true;
      } // Remember such values. Avoid re-running extra checks on them.


      var memoizedIsStableKnownHookValue = memoizeWithWeakMap(isStableKnownHookValue, stableKnownValueCache);
      var memoizedIsFunctionWithoutCapturedValues = memoizeWithWeakMap(isFunctionWithoutCapturedValues, functionWithoutCapturedValueCache); // These are usually mistaken. Collect them.

      var currentRefsInEffectCleanup = new Map(); // Is this reference inside a cleanup function for this effect node?
      // We can check by traversing scopes upwards  from the reference, and checking
      // if the last "return () => " we encounter is located directly inside the effect.

      function isInsideEffectCleanup(reference) {
        var curScope = reference.from;
        var isInReturnedFunction = false;

        while (curScope.block !== node) {
          if (curScope.type === 'function') {
            isInReturnedFunction = curScope.block.parent != null && curScope.block.parent.type === 'ReturnStatement';
          }

          curScope = curScope.upper;
        }

        return isInReturnedFunction;
      } // Get dependencies from all our resolved references in pure scopes.
      // Key is dependency string, value is whether it's stable.


      var dependencies = new Map();
      var optionalChains = new Map();
      gatherDependenciesRecursively(scope);

      function gatherDependenciesRecursively(currentScope) {
        var _iterator = _createForOfIteratorHelper(currentScope.references),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var reference = _step.value;

            // If this reference is not resolved or it is not declared in a pure
            // scope then we don't care about this reference.
            if (!reference.resolved) {
              continue;
            }

            if (!pureScopes.has(reference.resolved.scope)) {
              continue;
            } // Narrow the scope of a dependency if it is, say, a member expression.
            // Then normalize the narrowed dependency.


            var referenceNode = fastFindReferenceWithParent(node, reference.identifier);
            var dependencyNode = getDependency(referenceNode);
            var dependency = analyzePropertyChain(dependencyNode, optionalChains); // Accessing ref.current inside effect cleanup is bad.

            if ( // We're in an effect...
            isEffect && // ... and this look like accessing .current...
            dependencyNode.type === 'Identifier' && (dependencyNode.parent.type === 'MemberExpression' || dependencyNode.parent.type === 'OptionalMemberExpression') && !dependencyNode.parent.computed && dependencyNode.parent.property.type === 'Identifier' && dependencyNode.parent.property.name === 'current' && // ...in a cleanup function or below...
            isInsideEffectCleanup(reference)) {
              currentRefsInEffectCleanup.set(dependency, {
                reference: reference,
                dependencyNode: dependencyNode
              });
            }

            if (dependencyNode.parent.type === 'TSTypeQuery' || dependencyNode.parent.type === 'TSTypeReference') {
              continue;
            }

            var def = reference.resolved.defs[0];

            if (def == null) {
              continue;
            } // Ignore references to the function itself as it's not defined yet.


            if (def.node != null && def.node.init === node.parent) {
              continue;
            } // Ignore Flow type parameters


            if (def.type === 'TypeParameter') {
              continue;
            } // Add the dependency to a map so we can make sure it is referenced
            // again in our dependencies array. Remember whether it's stable.


            if (!dependencies.has(dependency)) {
              var resolved = reference.resolved;
              var isStable = memoizedIsStableKnownHookValue(resolved) || memoizedIsFunctionWithoutCapturedValues(resolved);
              dependencies.set(dependency, {
                isStable: isStable,
                references: [reference]
              });
            } else {
              dependencies.get(dependency).references.push(reference);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(currentScope.childScopes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var childScope = _step2.value;
            gatherDependenciesRecursively(childScope);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } // Warn about accessing .current in cleanup effects.


      currentRefsInEffectCleanup.forEach(function (_ref, dependency) {
        var reference = _ref.reference,
            dependencyNode = _ref.dependencyNode;
        var references = reference.resolved.references; // Is React managing this ref or us?
        // Let's see if we can find a .current assignment.

        var foundCurrentAssignment = false;

        for (var i = 0; i < references.length; i++) {
          var identifier = references[i].identifier;
          var parent = identifier.parent;

          if (parent != null && // ref.current
          // Note: no need to handle OptionalMemberExpression because it can't be LHS.
          parent.type === 'MemberExpression' && !parent.computed && parent.property.type === 'Identifier' && parent.property.name === 'current' && // ref.current = <something>
          parent.parent.type === 'AssignmentExpression' && parent.parent.left === parent) {
            foundCurrentAssignment = true;
            break;
          }
        } // We only want to warn about React-managed refs.


        if (foundCurrentAssignment) {
          return;
        }

        reportProblem({
          node: dependencyNode.parent.property,
          message: "The ref value '" + dependency + ".current' will likely have " + "changed by the time this effect cleanup function runs. If " + "this ref points to a node rendered by React, copy " + ("'" + dependency + ".current' to a variable inside the effect, and ") + "use that variable in the cleanup function."
        });
      }); // Warn about assigning to variables in the outer scope.
      // Those are usually bugs.

      var staleAssignments = new Set();

      function reportStaleAssignment(writeExpr, key) {
        if (staleAssignments.has(key)) {
          return;
        }

        staleAssignments.add(key);
        reportProblem({
          node: writeExpr,
          message: "Assignments to the '" + key + "' variable from inside React Hook " + (context.getSource(reactiveHook) + " will be lost after each ") + "render. To preserve the value over time, store it in a useRef " + "Hook and keep the mutable value in the '.current' property. " + "Otherwise, you can move this variable directly inside " + (context.getSource(reactiveHook) + ".")
        });
      } // Remember which deps are stable and report bad usage first.


      var stableDependencies = new Set();
      dependencies.forEach(function (_ref2, key) {
        var isStable = _ref2.isStable,
            references = _ref2.references;

        if (isStable) {
          stableDependencies.add(key);
        }

        references.forEach(function (reference) {
          if (reference.writeExpr) {
            reportStaleAssignment(reference.writeExpr, key);
          }
        });
      });

      if (staleAssignments.size > 0) {
        // The intent isn't clear so we'll wait until you fix those first.
        return;
      }

      if (!declaredDependenciesNode) {
        // Check if there are any top-level setState() calls.
        // Those tend to lead to infinite loops.
        var setStateInsideEffectWithoutDeps = null;
        dependencies.forEach(function (_ref3, key) {
          var isStable = _ref3.isStable,
              references = _ref3.references;

          if (setStateInsideEffectWithoutDeps) {
            return;
          }

          references.forEach(function (reference) {
            if (setStateInsideEffectWithoutDeps) {
              return;
            }

            var id = reference.identifier;
            var isSetState = setStateCallSites.has(id);

            if (!isSetState) {
              return;
            }

            var fnScope = reference.from;

            while (fnScope.type !== 'function') {
              fnScope = fnScope.upper;
            }

            var isDirectlyInsideEffect = fnScope.block === node;

            if (isDirectlyInsideEffect) {
              // TODO: we could potentially ignore early returns.
              setStateInsideEffectWithoutDeps = key;
            }
          });
        });

        if (setStateInsideEffectWithoutDeps) {
          var _collectRecommendatio = collectRecommendations({
            dependencies: dependencies,
            declaredDependencies: [],
            stableDependencies: stableDependencies,
            externalDependencies: new Set(),
            isEffect: true
          }),
              _suggestedDependencies = _collectRecommendatio.suggestedDependencies;

          reportProblem({
            node: reactiveHook,
            message: "React Hook " + reactiveHookName + " contains a call to '" + setStateInsideEffectWithoutDeps + "'. " + "Without a list of dependencies, this can lead to an infinite chain of updates. " + "To fix this, pass [" + _suggestedDependencies.join(', ') + ("] as a second argument to the " + reactiveHookName + " Hook."),
            suggest: [{
              desc: "Add dependencies array: [" + _suggestedDependencies.join(', ') + "]",
              fix: function (fixer) {
                return fixer.insertTextAfter(node, ", [" + _suggestedDependencies.join(', ') + "]");
              }
            }]
          });
        }

        return;
      }

      var declaredDependencies = [];
      var externalDependencies = new Set();

      if (declaredDependenciesNode.type !== 'ArrayExpression') {
        // If the declared dependencies are not an array expression then we
        // can't verify that the user provided the correct dependencies. Tell
        // the user this in an error.
        reportProblem({
          node: declaredDependenciesNode,
          message: "React Hook " + context.getSource(reactiveHook) + " was passed a " + 'dependency list that is not an array literal. This means we ' + "can't statically verify whether you've passed the correct " + 'dependencies.'
        });
      } else {
        declaredDependenciesNode.elements.forEach(function (declaredDependencyNode) {
          // Skip elided elements.
          if (declaredDependencyNode === null) {
            return;
          } // If we see a spread element then add a special warning.


          if (declaredDependencyNode.type === 'SpreadElement') {
            reportProblem({
              node: declaredDependencyNode,
              message: "React Hook " + context.getSource(reactiveHook) + " has a spread " + "element in its dependency array. This means we can't " + "statically verify whether you've passed the " + 'correct dependencies.'
            });
            return;
          } // Try to normalize the declared dependency. If we can't then an error
          // will be thrown. We will catch that error and report an error.


          var declaredDependency;

          try {
            declaredDependency = analyzePropertyChain(declaredDependencyNode, null);
          } catch (error) {
            if (/Unsupported node type/.test(error.message)) {
              if (declaredDependencyNode.type === 'Literal') {
                if (dependencies.has(declaredDependencyNode.value)) {
                  reportProblem({
                    node: declaredDependencyNode,
                    message: "The " + declaredDependencyNode.raw + " literal is not a valid dependency " + "because it never changes. " + ("Did you mean to include " + declaredDependencyNode.value + " in the array instead?")
                  });
                } else {
                  reportProblem({
                    node: declaredDependencyNode,
                    message: "The " + declaredDependencyNode.raw + " literal is not a valid dependency " + 'because it never changes. You can safely remove it.'
                  });
                }
              } else {
                reportProblem({
                  node: declaredDependencyNode,
                  message: "React Hook " + context.getSource(reactiveHook) + " has a " + "complex expression in the dependency array. " + 'Extract it to a separate variable so it can be statically checked.'
                });
              }

              return;
            } else {
              throw error;
            }
          }

          var maybeID = declaredDependencyNode;

          while (maybeID.type === 'MemberExpression' || maybeID.type === 'OptionalMemberExpression' || maybeID.type === 'ChainExpression') {
            maybeID = maybeID.object || maybeID.expression.object;
          }

          var isDeclaredInComponent = !componentScope.through.some(function (ref) {
            return ref.identifier === maybeID;
          }); // Add the dependency to our declared dependency map.

          declaredDependencies.push({
            key: declaredDependency,
            node: declaredDependencyNode
          });

          if (!isDeclaredInComponent) {
            externalDependencies.add(declaredDependency);
          }
        });
      }

      var _collectRecommendatio2 = collectRecommendations({
        dependencies: dependencies,
        declaredDependencies: declaredDependencies,
        stableDependencies: stableDependencies,
        externalDependencies: externalDependencies,
        isEffect: isEffect
      }),
          suggestedDependencies = _collectRecommendatio2.suggestedDependencies,
          unnecessaryDependencies = _collectRecommendatio2.unnecessaryDependencies,
          missingDependencies = _collectRecommendatio2.missingDependencies,
          duplicateDependencies = _collectRecommendatio2.duplicateDependencies;

      var suggestedDeps = suggestedDependencies;
      var problemCount = duplicateDependencies.size + missingDependencies.size + unnecessaryDependencies.size;

      if (problemCount === 0) {
        // If nothing else to report, check if some dependencies would
        // invalidate on every render.
        var constructions = scanForConstructions({
          declaredDependencies: declaredDependencies,
          declaredDependenciesNode: declaredDependenciesNode,
          componentScope: componentScope,
          scope: scope
        });
        constructions.forEach(function (_ref4) {
          var construction = _ref4.construction,
              isUsedOutsideOfHook = _ref4.isUsedOutsideOfHook,
              depType = _ref4.depType;
          var wrapperHook = depType === 'function' ? 'useCallback' : 'useMemo';
          var constructionType = depType === 'function' ? 'definition' : 'initialization';
          var defaultAdvice = "wrap the " + constructionType + " of '" + construction.name.name + "' in its own " + wrapperHook + "() Hook.";
          var advice = isUsedOutsideOfHook ? "To fix this, " + defaultAdvice : "Move it inside the " + reactiveHookName + " callback. Alternatively, " + defaultAdvice;
          var causation = depType === 'conditional' || depType === 'logical expression' ? 'could make' : 'makes';
          var message = "The '" + construction.name.name + "' " + depType + " " + causation + " the dependencies of " + (reactiveHookName + " Hook (at line " + declaredDependenciesNode.loc.start.line + ") ") + ("change on every render. " + advice);
          var suggest; // Only handle the simple case of variable assignments.
          // Wrapping function declarations can mess up hoisting.

          if (isUsedOutsideOfHook && construction.type === 'Variable' && // Objects may be mutated after construction, which would make this
          // fix unsafe. Functions _probably_ won't be mutated, so we'll
          // allow this fix for them.
          depType === 'function') {
            suggest = [{
              desc: "Wrap the " + constructionType + " of '" + construction.name.name + "' in its own " + wrapperHook + "() Hook.",
              fix: function (fixer) {
                var _ref5 = wrapperHook === 'useMemo' ? ["useMemo(() => { return ", '; })'] : ['useCallback(', ')'],
                    before = _ref5[0],
                    after = _ref5[1];

                return [// TODO: also add an import?
                fixer.insertTextBefore(construction.node.init, before), // TODO: ideally we'd gather deps here but it would require
                // restructuring the rule code. This will cause a new lint
                // error to appear immediately for useCallback. Note we're
                // not adding [] because would that changes semantics.
                fixer.insertTextAfter(construction.node.init, after)];
              }
            }];
          } // TODO: What if the function needs to change on every render anyway?
          // Should we suggest removing effect deps as an appropriate fix too?


          reportProblem({
            // TODO: Why not report this at the dependency site?
            node: construction.node,
            message: message,
            suggest: suggest
          });
        });
        return;
      } // If we're going to report a missing dependency,
      // we might as well recalculate the list ignoring
      // the currently specified deps. This can result
      // in some extra deduplication. We can't do this
      // for effects though because those have legit
      // use cases for over-specifying deps.


      if (!isEffect && missingDependencies.size > 0) {
        suggestedDeps = collectRecommendations({
          dependencies: dependencies,
          declaredDependencies: [],
          // Pretend we don't know
          stableDependencies: stableDependencies,
          externalDependencies: externalDependencies,
          isEffect: isEffect
        }).suggestedDependencies;
      } // Alphabetize the suggestions, but only if deps were already alphabetized.


      function areDeclaredDepsAlphabetized() {
        if (declaredDependencies.length === 0) {
          return true;
        }

        var declaredDepKeys = declaredDependencies.map(function (dep) {
          return dep.key;
        });
        var sortedDeclaredDepKeys = declaredDepKeys.slice().sort();
        return declaredDepKeys.join(',') === sortedDeclaredDepKeys.join(',');
      }

      if (areDeclaredDepsAlphabetized()) {
        suggestedDeps.sort();
      } // Most of our algorithm deals with dependency paths with optional chaining stripped.
      // This function is the last step before printing a dependency, so now is a good time to
      // check whether any members in our path are always used as optional-only. In that case,
      // we will use ?. instead of . to concatenate those parts of the path.


      function formatDependency(path) {
        var members = path.split('.');
        var finalPath = '';

        for (var i = 0; i < members.length; i++) {
          if (i !== 0) {
            var pathSoFar = members.slice(0, i + 1).join('.');
            var isOptional = optionalChains.get(pathSoFar) === true;
            finalPath += isOptional ? '?.' : '.';
          }

          finalPath += members[i];
        }

        return finalPath;
      }

      function getWarningMessage(deps, singlePrefix, label, fixVerb) {
        if (deps.size === 0) {
          return null;
        }

        return (deps.size > 1 ? '' : singlePrefix + ' ') + label + ' ' + (deps.size > 1 ? 'dependencies' : 'dependency') + ': ' + joinEnglish(Array.from(deps).sort().map(function (name) {
          return "'" + formatDependency(name) + "'";
        })) + (". Either " + fixVerb + " " + (deps.size > 1 ? 'them' : 'it') + " or remove the dependency array.");
      }

      var extraWarning = '';

      if (unnecessaryDependencies.size > 0) {
        var badRef = null;
        Array.from(unnecessaryDependencies.keys()).forEach(function (key) {
          if (badRef !== null) {
            return;
          }

          if (key.endsWith('.current')) {
            badRef = key;
          }
        });

        if (badRef !== null) {
          extraWarning = " Mutable values like '" + badRef + "' aren't valid dependencies " + "because mutating them doesn't re-render the component.";
        } else if (externalDependencies.size > 0) {
          var dep = Array.from(externalDependencies)[0]; // Don't show this warning for things that likely just got moved *inside* the callback
          // because in that case they're clearly not referring to globals.

          if (!scope.set.has(dep)) {
            extraWarning = " Outer scope values like '" + dep + "' aren't valid dependencies " + "because mutating them doesn't re-render the component.";
          }
        }
      } // `props.foo()` marks `props` as a dependency because it has
      // a `this` value. This warning can be confusing.
      // So if we're going to show it, append a clarification.


      if (!extraWarning && missingDependencies.has('props')) {
        var propDep = dependencies.get('props');

        if (propDep == null) {
          return;
        }

        var refs = propDep.references;

        if (!Array.isArray(refs)) {
          return;
        }

        var isPropsOnlyUsedInMembers = true;

        for (var i = 0; i < refs.length; i++) {
          var ref = refs[i];
          var id = fastFindReferenceWithParent(componentScope.block, ref.identifier);

          if (!id) {
            isPropsOnlyUsedInMembers = false;
            break;
          }

          var parent = id.parent;

          if (parent == null) {
            isPropsOnlyUsedInMembers = false;
            break;
          }

          if (parent.type !== 'MemberExpression' && parent.type !== 'OptionalMemberExpression') {
            isPropsOnlyUsedInMembers = false;
            break;
          }
        }

        if (isPropsOnlyUsedInMembers) {
          extraWarning = " However, 'props' will change when *any* prop changes, so the " + "preferred fix is to destructure the 'props' object outside of " + ("the " + reactiveHookName + " call and refer to those specific props ") + ("inside " + context.getSource(reactiveHook) + ".");
        }
      }

      if (!extraWarning && missingDependencies.size > 0) {
        // See if the user is trying to avoid specifying a callable prop.
        // This usually means they're unaware of useCallback.
        var missingCallbackDep = null;
        missingDependencies.forEach(function (missingDep) {
          if (missingCallbackDep) {
            return;
          } // Is this a variable from top scope?


          var topScopeRef = componentScope.set.get(missingDep);
          var usedDep = dependencies.get(missingDep);

          if (usedDep.references[0].resolved !== topScopeRef) {
            return;
          } // Is this a destructured prop?


          var def = topScopeRef.defs[0];

          if (def == null || def.name == null || def.type !== 'Parameter') {
            return;
          } // Was it called in at least one case? Then it's a function.


          var isFunctionCall = false;
          var id;

          for (var _i2 = 0; _i2 < usedDep.references.length; _i2++) {
            id = usedDep.references[_i2].identifier;

            if (id != null && id.parent != null && (id.parent.type === 'CallExpression' || id.parent.type === 'OptionalCallExpression') && id.parent.callee === id) {
              isFunctionCall = true;
              break;
            }
          }

          if (!isFunctionCall) {
            return;
          } // If it's missing (i.e. in component scope) *and* it's a parameter
          // then it is definitely coming from props destructuring.
          // (It could also be props itself but we wouldn't be calling it then.)


          missingCallbackDep = missingDep;
        });

        if (missingCallbackDep !== null) {
          extraWarning = " If '" + missingCallbackDep + "' changes too often, " + "find the parent component that defines it " + "and wrap that definition in useCallback.";
        }
      }

      if (!extraWarning && missingDependencies.size > 0) {
        var setStateRecommendation = null;
        missingDependencies.forEach(function (missingDep) {
          if (setStateRecommendation !== null) {
            return;
          }

          var usedDep = dependencies.get(missingDep);
          var references = usedDep.references;
          var id;
          var maybeCall;

          for (var _i3 = 0; _i3 < references.length; _i3++) {
            id = references[_i3].identifier;
            maybeCall = id.parent; // Try to see if we have setState(someExpr(missingDep)).

            while (maybeCall != null && maybeCall !== componentScope.block) {
              if (maybeCall.type === 'CallExpression') {
                var correspondingStateVariable = setStateCallSites.get(maybeCall.callee);

                if (correspondingStateVariable != null) {
                  if (correspondingStateVariable.name === missingDep) {
                    // setCount(count + 1)
                    setStateRecommendation = {
                      missingDep: missingDep,
                      setter: maybeCall.callee.name,
                      form: 'updater'
                    };
                  } else if (stateVariables.has(id)) {
                    // setCount(count + increment)
                    setStateRecommendation = {
                      missingDep: missingDep,
                      setter: maybeCall.callee.name,
                      form: 'reducer'
                    };
                  } else {
                    var resolved = references[_i3].resolved;

                    if (resolved != null) {
                      // If it's a parameter *and* a missing dep,
                      // it must be a prop or something inside a prop.
                      // Therefore, recommend an inline reducer.
                      var def = resolved.defs[0];

                      if (def != null && def.type === 'Parameter') {
                        setStateRecommendation = {
                          missingDep: missingDep,
                          setter: maybeCall.callee.name,
                          form: 'inlineReducer'
                        };
                      }
                    }
                  }

                  break;
                }
              }

              maybeCall = maybeCall.parent;
            }

            if (setStateRecommendation !== null) {
              break;
            }
          }
        });

        if (setStateRecommendation !== null) {
          switch (setStateRecommendation.form) {
            case 'reducer':
              extraWarning = " You can also replace multiple useState variables with useReducer " + ("if '" + setStateRecommendation.setter + "' needs the ") + ("current value of '" + setStateRecommendation.missingDep + "'.");
              break;

            case 'inlineReducer':
              extraWarning = " If '" + setStateRecommendation.setter + "' needs the " + ("current value of '" + setStateRecommendation.missingDep + "', ") + "you can also switch to useReducer instead of useState and " + ("read '" + setStateRecommendation.missingDep + "' in the reducer.");
              break;

            case 'updater':
              extraWarning = " You can also do a functional update '" + setStateRecommendation.setter + "(" + setStateRecommendation.missingDep.substring(0, 1) + " => ...)' if you only need '" + setStateRecommendation.missingDep + "'" + (" in the '" + setStateRecommendation.setter + "' call.");
              break;

            default:
              throw new Error('Unknown case.');
          }
        }
      }

      reportProblem({
        node: declaredDependenciesNode,
        message: "React Hook " + context.getSource(reactiveHook) + " has " + ( // To avoid a long message, show the next actionable item.
        getWarningMessage(missingDependencies, 'a', 'missing', 'include') || getWarningMessage(unnecessaryDependencies, 'an', 'unnecessary', 'exclude') || getWarningMessage(duplicateDependencies, 'a', 'duplicate', 'omit')) + extraWarning,
        suggest: [{
          desc: "Update the dependencies array to be: [" + suggestedDeps.map(formatDependency).join(', ') + "]",
          fix: function (fixer) {
            // TODO: consider preserving the comments or formatting?
            return fixer.replaceText(declaredDependenciesNode, "[" + suggestedDeps.map(formatDependency).join(', ') + "]");
          }
        }]
      });
    }

    function visitCallExpression(node) {
      var callbackIndex = getReactiveHookCallbackIndex(node.callee, options);

      if (callbackIndex === -1) {
        // Not a React Hook call that needs deps.
        return;
      }

      var callback = node.arguments[callbackIndex];
      var reactiveHook = node.callee;
      var reactiveHookName = getNodeWithoutReactNamespace(reactiveHook).name;
      var declaredDependenciesNode = node.arguments[callbackIndex + 1];
      var isEffect = /Effect($|[^a-z])/g.test(reactiveHookName); // Check whether a callback is supplied. If there is no callback supplied
      // then the hook will not work and React will throw a TypeError.
      // So no need to check for dependency inclusion.

      if (!callback) {
        reportProblem({
          node: reactiveHook,
          message: "React Hook " + reactiveHookName + " requires an effect callback. " + "Did you forget to pass a callback to the hook?"
        });
        return;
      } // Check the declared dependencies for this reactive hook. If there is no
      // second argument then the reactive callback will re-run on every render.
      // So no need to check for dependency inclusion.


      if (!declaredDependenciesNode && !isEffect) {
        // These are only used for optimization.
        if (reactiveHookName === 'useMemo' || reactiveHookName === 'useCallback') {
          // TODO: Can this have a suggestion?
          reportProblem({
            node: reactiveHook,
            message: "React Hook " + reactiveHookName + " does nothing when called with " + "only one argument. Did you forget to pass an array of " + "dependencies?"
          });
        }

        return;
      }

      switch (callback.type) {
        case 'FunctionExpression':
        case 'ArrowFunctionExpression':
          visitFunctionWithDependencies(callback, declaredDependenciesNode, reactiveHook, reactiveHookName, isEffect);
          return;
        // Handled

        case 'Identifier':
          if (!declaredDependenciesNode) {
            // No deps, no problems.
            return; // Handled
          } // The function passed as a callback is not written inline.
          // But perhaps it's in the dependencies array?


          if (declaredDependenciesNode.elements && declaredDependenciesNode.elements.some(function (el) {
            return el && el.type === 'Identifier' && el.name === callback.name;
          })) {
            // If it's already in the list of deps, we don't care because
            // this is valid regardless.
            return; // Handled
          } // We'll do our best effort to find it, complain otherwise.


          var variable = context.getScope().set.get(callback.name);

          if (variable == null || variable.defs == null) {
            // If it's not in scope, we don't care.
            return; // Handled
          } // The function passed as a callback is not written inline.
          // But it's defined somewhere in the render scope.
          // We'll do our best effort to find and check it, complain otherwise.


          var def = variable.defs[0];

          if (!def || !def.node) {
            break; // Unhandled
          }

          if (def.type !== 'Variable' && def.type !== 'FunctionName') {
            // Parameter or an unusual pattern. Bail out.
            break; // Unhandled
          }

          switch (def.node.type) {
            case 'FunctionDeclaration':
              // useEffect(() => { ... }, []);
              visitFunctionWithDependencies(def.node, declaredDependenciesNode, reactiveHook, reactiveHookName, isEffect);
              return;
            // Handled

            case 'VariableDeclarator':
              var init = def.node.init;

              if (!init) {
                break; // Unhandled
              }

              switch (init.type) {
                // const effectBody = () => {...};
                // useEffect(effectBody, []);
                case 'ArrowFunctionExpression':
                case 'FunctionExpression':
                  // We can inspect this function as if it were inline.
                  visitFunctionWithDependencies(init, declaredDependenciesNode, reactiveHook, reactiveHookName, isEffect);
                  return;
                // Handled
              }

              break;
            // Unhandled
          }

          break;
        // Unhandled

        default:
          // useEffect(generateEffectBody(), []);
          reportProblem({
            node: reactiveHook,
            message: "React Hook " + reactiveHookName + " received a function whose dependencies " + "are unknown. Pass an inline function instead."
          });
          return;
        // Handled
      } // Something unusual. Fall back to suggesting to add the body itself as a dep.


      reportProblem({
        node: reactiveHook,
        message: "React Hook " + reactiveHookName + " has a missing dependency: '" + callback.name + "'. " + "Either include it or remove the dependency array.",
        suggest: [{
          desc: "Update the dependencies array to be: [" + callback.name + "]",
          fix: function (fixer) {
            return fixer.replaceText(declaredDependenciesNode, "[" + callback.name + "]");
          }
        }]
      });
    }

    return {
      CallExpression: visitCallExpression
    };
  }
}; // The meat of the logic.

function collectRecommendations(_ref6) {
  var dependencies = _ref6.dependencies,
      declaredDependencies = _ref6.declaredDependencies,
      stableDependencies = _ref6.stableDependencies,
      externalDependencies = _ref6.externalDependencies,
      isEffect = _ref6.isEffect;
  // Our primary data structure.
  // It is a logical representation of property chains:
  // `props` -> `props.foo` -> `props.foo.bar` -> `props.foo.bar.baz`
  //         -> `props.lol`
  //         -> `props.huh` -> `props.huh.okay`
  //         -> `props.wow`
  // We'll use it to mark nodes that are *used* by the programmer,
  // and the nodes that were *declared* as deps. Then we will
  // traverse it to learn which deps are missing or unnecessary.
  var depTree = createDepTree();

  function createDepTree() {
    return {
      isUsed: false,
      // True if used in code
      isSatisfiedRecursively: false,
      // True if specified in deps
      isSubtreeUsed: false,
      // True if something deeper is used by code
      children: new Map() // Nodes for properties

    };
  } // Mark all required nodes first.
  // Imagine exclamation marks next to each used deep property.


  dependencies.forEach(function (_, key) {
    var node = getOrCreateNodeByPath(depTree, key);
    node.isUsed = true;
    markAllParentsByPath(depTree, key, function (parent) {
      parent.isSubtreeUsed = true;
    });
  }); // Mark all satisfied nodes.
  // Imagine checkmarks next to each declared dependency.

  declaredDependencies.forEach(function (_ref7) {
    var key = _ref7.key;
    var node = getOrCreateNodeByPath(depTree, key);
    node.isSatisfiedRecursively = true;
  });
  stableDependencies.forEach(function (key) {
    var node = getOrCreateNodeByPath(depTree, key);
    node.isSatisfiedRecursively = true;
  }); // Tree manipulation helpers.

  function getOrCreateNodeByPath(rootNode, path) {
    var keys = path.split('.');
    var node = rootNode;

    var _iterator3 = _createForOfIteratorHelper(keys),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        var child = node.children.get(key);

        if (!child) {
          child = createDepTree();
          node.children.set(key, child);
        }

        node = child;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return node;
  }

  function markAllParentsByPath(rootNode, path, fn) {
    var keys = path.split('.');
    var node = rootNode;

    var _iterator4 = _createForOfIteratorHelper(keys),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var key = _step4.value;
        var child = node.children.get(key);

        if (!child) {
          return;
        }

        fn(child);
        node = child;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  } // Now we can learn which dependencies are missing or necessary.


  var missingDependencies = new Set();
  var satisfyingDependencies = new Set();
  scanTreeRecursively(depTree, missingDependencies, satisfyingDependencies, function (key) {
    return key;
  });

  function scanTreeRecursively(node, missingPaths, satisfyingPaths, keyToPath) {
    node.children.forEach(function (child, key) {
      var path = keyToPath(key);

      if (child.isSatisfiedRecursively) {
        if (child.isSubtreeUsed) {
          // Remember this dep actually satisfied something.
          satisfyingPaths.add(path);
        } // It doesn't matter if there's something deeper.
        // It would be transitively satisfied since we assume immutability.
        // `props.foo` is enough if you read `props.foo.id`.


        return;
      }

      if (child.isUsed) {
        // Remember that no declared deps satisfied this node.
        missingPaths.add(path); // If we got here, nothing in its subtree was satisfied.
        // No need to search further.

        return;
      }

      scanTreeRecursively(child, missingPaths, satisfyingPaths, function (childKey) {
        return path + '.' + childKey;
      });
    });
  } // Collect suggestions in the order they were originally specified.


  var suggestedDependencies = [];
  var unnecessaryDependencies = new Set();
  var duplicateDependencies = new Set();
  declaredDependencies.forEach(function (_ref8) {
    var key = _ref8.key;

    // Does this declared dep satisfy a real need?
    if (satisfyingDependencies.has(key)) {
      if (suggestedDependencies.indexOf(key) === -1) {
        // Good one.
        suggestedDependencies.push(key);
      } else {
        // Duplicate.
        duplicateDependencies.add(key);
      }
    } else {
      if (isEffect && !key.endsWith('.current') && !externalDependencies.has(key)) {
        // Effects are allowed extra "unnecessary" deps.
        // Such as resetting scroll when ID changes.
        // Consider them legit.
        // The exception is ref.current which is always wrong.
        if (suggestedDependencies.indexOf(key) === -1) {
          suggestedDependencies.push(key);
        }
      } else {
        // It's definitely not needed.
        unnecessaryDependencies.add(key);
      }
    }
  }); // Then add the missing ones at the end.

  missingDependencies.forEach(function (key) {
    suggestedDependencies.push(key);
  });
  return {
    suggestedDependencies: suggestedDependencies,
    unnecessaryDependencies: unnecessaryDependencies,
    duplicateDependencies: duplicateDependencies,
    missingDependencies: missingDependencies
  };
} // If the node will result in constructing a referentially unique value, return
// its human readable type name, else return null.


function getConstructionExpressionType(node) {
  switch (node.type) {
    case 'ObjectExpression':
      return 'object';

    case 'ArrayExpression':
      return 'array';

    case 'ArrowFunctionExpression':
    case 'FunctionExpression':
      return 'function';

    case 'ClassExpression':
      return 'class';

    case 'ConditionalExpression':
      if (getConstructionExpressionType(node.consequent) != null || getConstructionExpressionType(node.alternate) != null) {
        return 'conditional';
      }

      return null;

    case 'LogicalExpression':
      if (getConstructionExpressionType(node.left) != null || getConstructionExpressionType(node.right) != null) {
        return 'logical expression';
      }

      return null;

    case 'JSXFragment':
      return 'JSX fragment';

    case 'JSXElement':
      return 'JSX element';

    case 'AssignmentExpression':
      if (getConstructionExpressionType(node.right) != null) {
        return 'assignment expression';
      }

      return null;

    case 'NewExpression':
      return 'object construction';

    case 'Literal':
      if (node.value instanceof RegExp) {
        return 'regular expression';
      }

      return null;

    case 'TypeCastExpression':
      return getConstructionExpressionType(node.expression);

    case 'TSAsExpression':
      return getConstructionExpressionType(node.expression);
  }

  return null;
} // Finds variables declared as dependencies
// that would invalidate on every render.


function scanForConstructions(_ref9) {
  var declaredDependencies = _ref9.declaredDependencies,
      declaredDependenciesNode = _ref9.declaredDependenciesNode,
      componentScope = _ref9.componentScope,
      scope = _ref9.scope;
  var constructions = declaredDependencies.map(function (_ref10) {
    var key = _ref10.key;
    var ref = componentScope.variables.find(function (v) {
      return v.name === key;
    });

    if (ref == null) {
      return null;
    }

    var node = ref.defs[0];

    if (node == null) {
      return null;
    } // const handleChange = function () {}
    // const handleChange = () => {}
    // const foo = {}
    // const foo = []
    // etc.


    if (node.type === 'Variable' && node.node.type === 'VariableDeclarator' && node.node.id.type === 'Identifier' && // Ensure this is not destructed assignment
    node.node.init != null) {
      var constantExpressionType = getConstructionExpressionType(node.node.init);

      if (constantExpressionType != null) {
        return [ref, constantExpressionType];
      }
    } // function handleChange() {}


    if (node.type === 'FunctionName' && node.node.type === 'FunctionDeclaration') {
      return [ref, 'function'];
    } // class Foo {}


    if (node.type === 'ClassName' && node.node.type === 'ClassDeclaration') {
      return [ref, 'class'];
    }

    return null;
  }).filter(Boolean);

  function isUsedOutsideOfHook(ref) {
    var foundWriteExpr = false;

    for (var i = 0; i < ref.references.length; i++) {
      var reference = ref.references[i];

      if (reference.writeExpr) {
        if (foundWriteExpr) {
          // Two writes to the same function.
          return true;
        } else {
          // Ignore first write as it's not usage.
          foundWriteExpr = true;
          continue;
        }
      }

      var currentScope = reference.from;

      while (currentScope !== scope && currentScope != null) {
        currentScope = currentScope.upper;
      }

      if (currentScope !== scope) {
        // This reference is outside the Hook callback.
        // It can only be legit if it's the deps array.
        if (!isAncestorNodeOf(declaredDependenciesNode, reference.identifier)) {
          return true;
        }
      }
    }

    return false;
  }

  return constructions.map(function (_ref11) {
    var ref = _ref11[0],
        depType = _ref11[1];
    return {
      construction: ref.defs[0],
      depType: depType,
      isUsedOutsideOfHook: isUsedOutsideOfHook(ref)
    };
  });
}
/**
 * Assuming () means the passed/returned node:
 * (props) => (props)
 * props.(foo) => (props.foo)
 * props.foo.(bar) => (props).foo.bar
 * props.foo.bar.(baz) => (props).foo.bar.baz
 */


function getDependency(node) {
  if ((node.parent.type === 'MemberExpression' || node.parent.type === 'OptionalMemberExpression') && node.parent.object === node && node.parent.property.name !== 'current' && !node.parent.computed && !(node.parent.parent != null && (node.parent.parent.type === 'CallExpression' || node.parent.parent.type === 'OptionalCallExpression') && node.parent.parent.callee === node.parent)) {
    return getDependency(node.parent);
  } else if ( // Note: we don't check OptionalMemberExpression because it can't be LHS.
  node.type === 'MemberExpression' && node.parent && node.parent.type === 'AssignmentExpression' && node.parent.left === node) {
    return node.object;
  } else {
    return node;
  }
}
/**
 * Mark a node as either optional or required.
 * Note: If the node argument is an OptionalMemberExpression, it doesn't necessarily mean it is optional.
 * It just means there is an optional member somewhere inside.
 * This particular node might still represent a required member, so check .optional field.
 */


function markNode(node, optionalChains, result) {
  if (optionalChains) {
    if (node.optional) {
      // We only want to consider it optional if *all* usages were optional.
      if (!optionalChains.has(result)) {
        // Mark as (maybe) optional. If there's a required usage, this will be overridden.
        optionalChains.set(result, true);
      }
    } else {
      // Mark as required.
      optionalChains.set(result, false);
    }
  }
}
/**
 * Assuming () means the passed node.
 * (foo) -> 'foo'
 * foo(.)bar -> 'foo.bar'
 * foo.bar(.)baz -> 'foo.bar.baz'
 * Otherwise throw.
 */


function analyzePropertyChain(node, optionalChains) {
  if (node.type === 'Identifier' || node.type === 'JSXIdentifier') {
    var result = node.name;

    if (optionalChains) {
      // Mark as required.
      optionalChains.set(result, false);
    }

    return result;
  } else if (node.type === 'MemberExpression' && !node.computed) {
    var object = analyzePropertyChain(node.object, optionalChains);
    var property = analyzePropertyChain(node.property, null);

    var _result = object + "." + property;

    markNode(node, optionalChains, _result);
    return _result;
  } else if (node.type === 'OptionalMemberExpression' && !node.computed) {
    var _object = analyzePropertyChain(node.object, optionalChains);

    var _property = analyzePropertyChain(node.property, null);

    var _result2 = _object + "." + _property;

    markNode(node, optionalChains, _result2);
    return _result2;
  } else if (node.type === 'ChainExpression' && !node.computed) {
    var expression = node.expression;

    if (expression.type === 'CallExpression') {
      throw new Error("Unsupported node type: " + expression.type);
    }

    var _object2 = analyzePropertyChain(expression.object, optionalChains);

    var _property2 = analyzePropertyChain(expression.property, null);

    var _result3 = _object2 + "." + _property2;

    markNode(expression, optionalChains, _result3);
    return _result3;
  } else {
    throw new Error("Unsupported node type: " + node.type);
  }
}

function getNodeWithoutReactNamespace(node, options) {
  if (node.type === 'MemberExpression' && node.object.type === 'Identifier' && node.object.name === 'React' && node.property.type === 'Identifier' && !node.computed) {
    return node.property;
  }

  return node;
} // What's the index of callback that needs to be analyzed for a given Hook?
// -1 if it's not a Hook we care about (e.g. useState).
// 0 for useEffect/useMemo/useCallback(fn).
// 1 for useImperativeHandle(ref, fn).
// For additionally configured Hooks, assume that they're like useEffect (0).


function getReactiveHookCallbackIndex(calleeNode, options) {
  var node = getNodeWithoutReactNamespace(calleeNode);

  if (node.type !== 'Identifier') {
    return -1;
  }

  switch (node.name) {
    case 'useEffect':
    case 'useLayoutEffect':
    case 'useCallback':
    case 'useMemo':
      // useEffect(fn)
      return 0;

    case 'useImperativeHandle':
      // useImperativeHandle(ref, fn)
      return 1;

    default:
      if (node === calleeNode && options && options.additionalHooks) {
        // Allow the user to provide a regular expression which enables the lint to
        // target custom reactive hooks.
        var name;

        try {
          name = analyzePropertyChain(node, null);
        } catch (error) {
          if (/Unsupported node type/.test(error.message)) {
            return 0;
          } else {
            throw error;
          }
        }

        return options.additionalHooks.test(name) ? 0 : -1;
      } else {
        return -1;
      }

  }
}
/**
 * ESLint won't assign node.parent to references from context.getScope()
 *
 * So instead we search for the node from an ancestor assigning node.parent
 * as we go. This mutates the AST.
 *
 * This traversal is:
 * - optimized by only searching nodes with a range surrounding our target node
 * - agnostic to AST node types, it looks for `{ type: string, ... }`
 */


function fastFindReferenceWithParent(start, target) {
  var queue = [start];
  var item = null;

  while (queue.length) {
    item = queue.shift();

    if (isSameIdentifier(item, target)) {
      return item;
    }

    if (!isAncestorNodeOf(item, target)) {
      continue;
    }

    for (var _i4 = 0, _Object$entries = Object.entries(item); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _Object$entries[_i4],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (key === 'parent') {
        continue;
      }

      if (isNodeLike(value)) {
        value.parent = item;
        queue.push(value);
      } else if (Array.isArray(value)) {
        value.forEach(function (val) {
          if (isNodeLike(val)) {
            val.parent = item;
            queue.push(val);
          }
        });
      }
    }
  }

  return null;
}

function joinEnglish(arr) {
  var s = '';

  for (var i = 0; i < arr.length; i++) {
    s += arr[i];

    if (i === 0 && arr.length === 2) {
      s += ' and ';
    } else if (i === arr.length - 2 && arr.length > 2) {
      s += ', and ';
    } else if (i < arr.length - 1) {
      s += ', ';
    }
  }

  return s;
}

function isNodeLike(val) {
  return typeof val === 'object' && val !== null && !Array.isArray(val) && typeof val.type === 'string';
}

function isSameIdentifier(a, b) {
  return (a.type === 'Identifier' || a.type === 'JSXIdentifier') && a.type === b.type && a.name === b.name && a.range[0] === b.range[0] && a.range[1] === b.range[1];
}

function isAncestorNodeOf(a, b) {
  return a.range[0] <= b.range[0] && a.range[1] >= b.range[1];
}

var configs = {
  recommended: {
    plugins: ['react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
};
var rules = {
  'rules-of-hooks': RulesOfHooks,
  'exhaustive-deps': ExhaustiveDeps
};

exports.configs = configs;
exports.rules = rules;
  })();
}
