import path from "path";
import { declare } from "@babel/helper-plugin-utils";

/**
 * @babel/preset-modules produces clean, minimal output for ES Modules-supporting browsers.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode skips seldom-needed transforms that increase output size.
 */
export default declare((api, opts) => {
  api.assertVersion(7);

  const loose = opts.loose === true;

  return {
    plugins: [
      path.resolve(__dirname, "./plugins/transform-edge-default-parameters"),
      path.resolve(__dirname, "./plugins/transform-tagged-template-caching"),
      path.resolve(__dirname, "./plugins/transform-jsx-spread"),
      path.resolve(__dirname, "./plugins/transform-safari-for-shadowing"),
      path.resolve(__dirname, "./plugins/transform-safari-block-shadowing"),
      path.resolve(__dirname, "./plugins/transform-async-arrows-in-class"),
      !loose &&
        path.resolve(__dirname, "./plugins/transform-edge-function-name"),
    ].filter(Boolean),
  };
});
