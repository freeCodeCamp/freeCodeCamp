/**
 * Safari 10.3 had an issue where async arrow function expressions within any class method would throw.
 * After an initial fix, any references to the instance via `this` within those methods would also throw.
 * This is fixed by converting arrow functions in class methods into equivalent function expressions.
 * @see https://bugs.webkit.org/show_bug.cgi?id=166879
 *
 * @example
 *   class X{ a(){ async () => {}; } }   // throws
 *   class X{ a(){ async function() {}; } }   // works
 *
 * @example
 *   class X{ a(){
 *     async () => this.a;   // throws
 *   } }
 *   class X{ a(){
 *     var _this=this;
 *     async function() { return _this.a };   // works
 *   } }
 */

const OPTS = {
  allowInsertArrow: false,
  specCompliant: false,
};

export default ({ types: t }) => ({
  name: "transform-async-arrows-in-class",
  visitor: {
    ArrowFunctionExpression(path) {
      if (path.node.async && path.findParent(t.isClassMethod)) {
        path.arrowFunctionToExpression(OPTS);
      }
    },
  },
});
