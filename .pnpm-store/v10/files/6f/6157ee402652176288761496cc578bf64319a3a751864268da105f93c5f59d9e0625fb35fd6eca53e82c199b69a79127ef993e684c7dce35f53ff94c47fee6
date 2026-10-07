/**
 * Converts destructured parameters with default values to non-shorthand syntax.
 * This fixes the only Tagged Templates-related bug in ES Modules-supporting browsers (Safari 10 & 11).
 * Use this plugin instead of `@babel/plugin-transform-template-literals` when targeting ES Modules.
 *
 * @example
 *   // Bug 1: Safari 10/11 doesn't reliably return the same Strings value.
 *   // The value changes depending on invocation and function optimization state.
 *   function f() { return Object`` }
 *   f() === new f()  // false, should be true.
 *
 * @example
 *   // Bug 2: Safari 10/11 use the same cached strings value when the string parts are the same.
 *   // This behavior comes from an earlier version of the spec, and can cause tricky bugs.
 *   Object``===Object``  // true, should be false.
 *
 * Benchmarks: https://jsperf.com/compiled-tagged-template-performance
 */
export default ({ types: t }) => ({
  name: "transform-tagged-template-caching",
  visitor: {
    TaggedTemplateExpression(path, state) {
      // tagged templates we've already dealt with
      let processed = state.get("processed");
      if (!processed) {
        processed = new WeakSet();
        state.set("processed", processed);
      }

      if (processed.has(path.node)) return path.skip();

      // Grab the expressions from the original tag.
      //   tag`a${'hello'}`  // ['hello']
      const expressions = path.node.quasi.expressions;

      // Create an identity function helper:
      //   identity = t => t
      let identity = state.get("identity");
      if (!identity) {
        identity = path.scope
          .getProgramParent()
          .generateDeclaredUidIdentifier("_");
        state.set("identity", identity);
        const binding = path.scope.getBinding(identity.name);
        binding.path.get("init").replaceWith(
          t.arrowFunctionExpression(
            // re-use the helper identifier for compressability
            [t.identifier("t")],
            t.identifier("t")
          )
        );
      }

      // Use the identity function helper to get a reference to the template's Strings.
      // We replace all expressions with `0` ensure Strings has the same shape.
      //   identity`a${0}`
      const template = t.taggedTemplateExpression(
        t.cloneNode(identity),
        t.templateLiteral(
          path.node.quasi.quasis,
          expressions.map(() => t.numericLiteral(0))
        )
      );
      processed.add(template);

      // Install an inline cache at the callsite using the global variable:
      //   _t || (_t = identity`a${0}`)
      const ident = path.scope
        .getProgramParent()
        .generateDeclaredUidIdentifier("t");
      path.scope.getBinding(ident.name).path.parent.kind = "let";
      const inlineCache = t.logicalExpression(
        "||",
        ident,
        t.assignmentExpression("=", t.cloneNode(ident), template)
      );

      // The original tag function becomes a plain function call.
      // The expressions omitted from the cached Strings tag are directly applied as arguments.
      //   tag(_t || (_t = Object`a${0}`), 'hello')
      const node = t.callExpression(path.node.tag, [
        inlineCache,
        ...expressions,
      ]);
      path.replaceWith(node);
    },
  },
});
