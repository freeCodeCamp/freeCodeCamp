"use strict";

const babel = require("@babel/core");
module.exports = function injectCaller(opts, target) {
  if (!supportsCallerOption()) return opts;
  return Object.assign({}, opts, {
    caller: Object.assign({
      name: "babel-loader",
      // Provide plugins with insight into webpack target.
      // https://github.com/babel/babel-loader/issues/787
      target,
      // Webpack >= 2 supports ESM and dynamic import.
      supportsStaticESM: true,
      supportsDynamicImport: true,
      // Webpack 5 supports TLA behind a flag. We enable it by default
      // for Babel, and then webpack will throw an error if the experimental
      // flag isn't enabled.
      supportsTopLevelAwait: true
    }, opts.caller)
  });
};

// TODO: We can remove this eventually, I'm just adding it so that people have
// a little time to migrate to the newer RCs of @babel/core without getting
// hard-to-diagnose errors about unknown 'caller' options.
let supportsCallerOptionFlag = undefined;
function supportsCallerOption() {
  if (supportsCallerOptionFlag === undefined) {
    try {
      // Rather than try to match the Babel version, we just see if it throws
      // when passed a 'caller' flag, and use that to decide if it is supported.
      babel.loadPartialConfig({
        caller: undefined,
        babelrc: false,
        configFile: false
      });
      supportsCallerOptionFlag = true;
    } catch (err) {
      supportsCallerOptionFlag = false;
    }
  }
  return supportsCallerOptionFlag;
}