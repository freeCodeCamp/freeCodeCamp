"use strict";

exports.__esModule = true;
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var t = _interopRequireWildcard(require("@babel/types"));
var _babelModuleExportsHelpers = require("./babel-module-exports-helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * Remove specified module exports from files.
 */
var _default = (0, _helperPluginUtils.declare)(function removeApiCalls(api, options) {
  var _options$apis;
  api.assertVersion(7);
  const apisToRemove = (_options$apis = options === null || options === void 0 ? void 0 : options.apis) !== null && _options$apis !== void 0 ? _options$apis : [];
  if (!apisToRemove.length) {
    console.warn(`No list of APIs was given to remove, check your plugin options.`);
  }
  return {
    name: `remove-api`,
    visitor: {
      Program: {
        exit(path, state) {
          if (!state.apiRemoved) {
            return;
          }

          // babel doesn't remove references very well so we loop until nothing gets removed
          let removed = false;

          // remove all unreferenced bindings
          do {
            removed = false;
            // make sure all references are up to date
            path.scope.crawl();
            Object.keys(path.scope.bindings).forEach(refName => {
              const ref = path.scope.bindings[refName];
              if (ref.referenced) {
                // Functions can reference themselves, so we need to check if there's a
                // binding outside the function scope or not.
                if (ref.path.type === `FunctionDeclaration`) {
                  const isSelfReferenced = ref.referencePaths.every(refPath => !!refPath.findParent(p => p === ref.path));
                  if (isSelfReferenced) {
                    ref.path.remove();
                    removed = true;
                  }
                }
              } else {
                // if const {x,y} is used, we remove the property
                if (t.isVariableDeclarator(ref.path) && t.isObjectPattern(ref.path.parent.declarations[0].id)) {
                  const objectPattern = ref.path.parent.declarations[0].id;
                  objectPattern.properties = objectPattern.properties.filter(prop => t.isObjectProperty(prop) ? prop.value.name !== refName : prop.argument.name !== refName);

                  // if all properties got removed thus the object pattern is empty, we remove the whole declaration
                  if (!objectPattern.properties.length) {
                    ref.path.remove();
                  }
                } else {
                  ref.path.remove();
                }

                // if it's a module and all specifiers are removed, remove the full binding
                if (ref.kind === `module` && !ref.path.parent.specifiers.length && ref.path.parentPath) {
                  ref.path.parentPath.remove();
                }
                removed = true;
              }
            });
          } while (removed);
        }
      },
      // Remove export statements

      ExportDefaultDeclaration(path, state) {
        if (apisToRemove.includes(`default`)) {
          state.apiRemoved = true;
          path.remove();
        }
      },
      ExportNamedDeclaration(path, state) {
        var _path$node;
        const declaration = path.node.declaration;
        if (t.isExportNamedDeclaration(path.node)) {
          const specifiersToKeep = [];

          // Remove `export { foo } = [...]` and `export { foo } from "X"` shaped exports
          path.node.specifiers.forEach(specifier => {
            if (t.isExportSpecifier(specifier) && t.isIdentifier(specifier.exported) && apisToRemove.includes(specifier.exported.name)) {
              const binding = path.scope.bindings[specifier.local.name];
              // binding will not exist for `export { foo } from "X"` cases
              if (binding) {
                binding.path.remove();
              }
            } else {
              specifiersToKeep.push(specifier);
            }
          });
          path.node.specifiers = specifiersToKeep;
        }

        // Remove `export function foo() {}` shaped exports
        let apiToCheck;
        if (t.isFunctionDeclaration(declaration) && declaration.id) {
          apiToCheck = declaration.id.name;
        }

        // Remove `export const foo = () => {}` shaped exports
        if (t.isVariableDeclaration(declaration) && t.isIdentifier(declaration.declarations[0].id)) {
          apiToCheck = declaration.declarations[0].id.name;
        }
        if (apiToCheck && apisToRemove.includes(apiToCheck)) {
          state.apiRemoved = true;
          path.remove();
        }

        // Remove `export const { foo } = () => {}` shaped exports
        if (t.isVariableDeclaration(declaration)) {
          for (let i = 0; i < (declaration === null || declaration === void 0 ? void 0 : declaration.declarations.length); i++) {
            if ((declaration === null || declaration === void 0 ? void 0 : declaration.declarations[i].id.type) === `ObjectPattern`) {
              const objectPath = path.get(`declaration.declarations.${i}.id`);
              (0, _babelModuleExportsHelpers.removeExportProperties)(path, objectPath, apisToRemove);
            }
          }
        }
        // Remove `export const { foo } from "X"` shaped exports
        else if ((_path$node = path.node) !== null && _path$node !== void 0 && _path$node.source) {
          if (path.node.specifiers.length === 0) {
            path.remove();
          }
        }
      },
      // Remove `module.exports = { foo }` and `exports.foo = {}` shaped exports
      ExpressionStatement(path, state) {
        if (!t.isAssignmentExpression(path.node.expression) || !t.isMemberExpression(path.node.expression.left) || path.node.expression.left.object.name !== `exports`) {
          return;
        }
        const apiToCheck = path.node.expression.left.property.name;
        if (apiToCheck && apisToRemove.includes(apiToCheck)) {
          state.apiRemoved = true;
          path.remove();
        }
      }
    }
  };
});
exports.default = _default;
//# sourceMappingURL=babel-plugin-remove-api.js.map