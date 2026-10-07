"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = exports.KNOWN_CONFIG_KEYS = void 0;
exports.didYouMean = didYouMean;
var _meant = _interopRequireDefault(require("meant"));
const KNOWN_CONFIG_KEYS = [`flags`, `polyfill`, `assetPrefix`, `pathPrefix`, `siteMetadata`, `mapping`, `plugins`, `proxy`, `developMiddleware`, `jsxRuntime`, `jsxImportSource`, `trailingSlash`, `graphqlTypegen`, `headers`, `adapter`];
exports.KNOWN_CONFIG_KEYS = KNOWN_CONFIG_KEYS;
function didYouMean(configKey, commands = KNOWN_CONFIG_KEYS) {
  const bestSimilarity = (0, _meant.default)(configKey, commands);
  if (bestSimilarity.length === 0) return ``;
  if (bestSimilarity.length === 1) {
    return `Did you mean "${bestSimilarity[0]}"?`;
  } else {
    return [`Did you mean one of these?`].concat(bestSimilarity.slice(0, 3)).join(`\n`) + `\n`;
  }
}
var _default = didYouMean;
exports.default = _default;
//# sourceMappingURL=did-you-mean.js.map