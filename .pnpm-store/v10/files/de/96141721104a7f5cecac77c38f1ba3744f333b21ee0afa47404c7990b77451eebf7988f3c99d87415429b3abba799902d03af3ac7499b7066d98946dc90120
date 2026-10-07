"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Edge 16 & 17 do not infer function.name from variable assignment.
 * All other `function.name` behavior works fine, so we can skip most of @babel/transform-function-name.
 * @see https://kangax.github.io/compat-table/es6/#test-function_name_property_variables_(function)
 *
 * Note: contrary to various Github issues, Edge 16+ *does* correctly infer the name of Arrow Functions.
 * The variable declarator name inference issue only affects function expressions, so that's all we fix here.
 *
 * A Note on Minification: Terser undoes this transform *by default* unless `keep_fnames` is set to true.
 * There is by design - if Function.name is critical to your application, you must configure
 * your minifier to preserve function names.
 */
var _default = ({
  types: t
}) => ({
  name: "transform-edge-function-name",
  visitor: {
    FunctionExpression: {
      exit(path) {
        if (!path.node.id && t.isIdentifier(path.parent.id)) {
          const id = t.cloneNode(path.parent.id);
          const binding = path.scope.getBinding(id.name); // if the binding gets reassigned anywhere, rename it

          if (binding == null ? void 0 : binding.constantViolations.length) {
            path.scope.rename(id.name);
          }

          path.node.id = id;
        }
      }

    }
  }
});

exports.default = _default;
module.exports = exports.default;