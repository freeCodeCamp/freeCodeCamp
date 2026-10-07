/**
 * Safari ~11 has an issue where variable declarations in a For statement throw if they shadow parameters.
 * This is fixed by renaming any declarations in the left/init part of a For* statement so they don't shadow.
 * @see https://bugs.webkit.org/show_bug.cgi?id=171041
 *
 * @example
 *   e => { for (let e of []) e }   // throws
 *   e => { for (let _e of []) _e }   // works
 */

function handle(declaration) {
  if (!declaration.isVariableDeclaration()) return;

  const fn = declaration.getFunctionParent();
  const { name } = declaration.node.declarations[0].id;

  // check if there is a shadowed binding coming from a parameter
  if (
    fn &&
    fn.scope.hasOwnBinding(name) &&
    fn.scope.getOwnBinding(name).kind === "param"
  ) {
    declaration.scope.rename(name);
  }
}

export default () => ({
  name: "transform-safari-for-shadowing",
  visitor: {
    ForXStatement(path) {
      handle(path.get("left"));
    },

    ForStatement(path) {
      handle(path.get("init"));
    },
  },
});
