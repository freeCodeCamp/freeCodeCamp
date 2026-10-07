"use strict";

exports.__esModule = true;
exports.default = _default;
// matches any hook-like (the default)
const isHook = /^use[A-Z]/;

// matches only built-in hooks provided by React et al
const isBuiltInHook = /^use(Callback|Context|DebugValue|Effect|ImperativeHandle|LayoutEffect|Memo|Reducer|Ref|State)$/;
function _default({
  types: t
}) {
  const visitor = {
    CallExpression(path, state) {
      var _state$opts, _state$opts2;
      const onlyBuiltIns = ((_state$opts = state.opts) === null || _state$opts === void 0 ? void 0 : _state$opts.onlyBuiltIns) || false;

      // if specified, options.lib is a list of libraries that provide hook functions
      const libs = ((_state$opts2 = state.opts) === null || _state$opts2 === void 0 ? void 0 : _state$opts2.lib) === true ? [`react`, `preact/hooks`] : [state.opts.lib];

      // skip function calls that are not the init of a variable declaration:
      if (!t.isVariableDeclarator(path.parent)) return;

      // skip function calls where the return value is not Array-destructured:
      if (!t.isArrayPattern(path.parent.id)) return;

      // name of the (hook) function being called:
      const hookName = path.node.callee.name;
      if (libs) {
        const binding = path.scope.getBinding(hookName);
        // not an import
        if (!binding || binding.kind !== `module`) return;
        const specifier = binding.path.parent.source.value;
        // not a match
        if (!libs.some(lib => lib === specifier)) return;
      }

      // only match function calls with names that look like a hook
      if (!(onlyBuiltIns ? isBuiltInHook : isHook).test(hookName)) return;
      path.parent.id = t.objectPattern(path.parent.id.elements.reduce((acc, element, i) => {
        if (element) {
          acc.push(t.objectProperty(t.numericLiteral(i), element));
        }
        return acc;
      }, []));
    }
  };
  return {
    name: `optimize-hook-destructuring`,
    visitor: {
      // this is a workaround to run before preset-env destroys destructured assignments
      Program(path, state) {
        path.traverse(visitor, state);
      }
    }
  };
}