;
const {
  getImportSource,
  getRequireSource,
  isPolyfillSource
} = require("./utils.cjs");
const BABEL_POLYFILL_DEPRECATION = `
  \`@babel/polyfill\` is deprecated. Please, use required parts of \`core-js\`
  and \`regenerator-runtime/runtime\` separately`;
const NO_DIRECT_POLYFILL_IMPORT = `
  When setting \`useBuiltIns: 'usage'\`, polyfills are automatically imported when needed.
  Please remove the direct import of \`SPECIFIER\` or use \`useBuiltIns: 'entry'\` instead.`;
module.exports = function ({
  template
}, {
  regenerator,
  deprecated,
  usage
}) {
  return {
    name: "preset-env/replace-babel-polyfill",
    visitor: {
      ImportDeclaration(path) {
        const src = getImportSource(path);
        if (usage && isPolyfillSource(src)) {
          console.warn(NO_DIRECT_POLYFILL_IMPORT.replace("SPECIFIER", src));
          if (!deprecated) path.remove();
        } else if (src === "@babel/polyfill") {
          if (deprecated) {
            console.warn(BABEL_POLYFILL_DEPRECATION);
          } else if (regenerator) {
            path.replaceWithMultiple(template.ast`
              import "core-js";
              import "regenerator-runtime/runtime.js";
            `);
          } else {
            path.replaceWith(template.ast`
              import "core-js";
            `);
          }
        }
      },
      Program(path) {
        path.get("body").forEach(bodyPath => {
          const src = getRequireSource(bodyPath);
          if (usage && isPolyfillSource(src)) {
            console.warn(NO_DIRECT_POLYFILL_IMPORT.replace("SPECIFIER", src));
            if (!deprecated) bodyPath.remove();
          } else if (src === "@babel/polyfill") {
            if (deprecated) {
              console.warn(BABEL_POLYFILL_DEPRECATION);
            } else if (regenerator) {
              bodyPath.replaceWithMultiple(template.ast`
                require("core-js");
                require("regenerator-runtime/runtime.js");
              `);
            } else {
              bodyPath.replaceWith(template.ast`
                require("core-js");
              `);
            }
          }
        });
      }
    }
  };
};

//# sourceMappingURL=babel-polyfill.cjs.map
