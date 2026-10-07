/**
 * Fixes block-shadowed let/const bindings in Safari 10/11.
 * https://kangax.github.io/compat-table/es6/#test-let_scope_shadow_resolution
 */
export default function({ types: t }) {
  return {
    name: "transform-safari-block-shadowing",
    visitor: {
      VariableDeclarator(path) {
        // the issue only affects let and const bindings:
        const kind = path.parent.kind;
        if (kind !== "let" && kind !== "const") return;

        // ignore non-block-scoped bindings:
        const block = path.scope.block;
        if (t.isFunction(block) || t.isProgram(block)) return;

        const bindings = t.getOuterBindingIdentifiers(path.node.id);
        for (const name of Object.keys(bindings)) {
          let scope = path.scope;

          // ignore parent bindings (note: impossible due to let/const?)
          if (!scope.hasOwnBinding(name)) continue;

          // check if shadowed within the nearest function/program boundary
          while ((scope = scope.parent)) {
            if (scope.hasOwnBinding(name)) {
              path.scope.rename(name);
              break;
            }
            if (t.isFunction(scope.block) || t.isProgram(scope.block)) {
              break;
            }
          }
        }
      },
    },
  };
}
