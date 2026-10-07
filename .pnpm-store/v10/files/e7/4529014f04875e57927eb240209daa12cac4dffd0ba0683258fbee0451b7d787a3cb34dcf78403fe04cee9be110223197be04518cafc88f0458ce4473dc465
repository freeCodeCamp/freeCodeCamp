"use strict";

exports.__esModule = true;
exports.getConfigPath = getConfigPath;
exports.readConfigFile = readConfigFile;
var path = _interopRequireWildcard(require("path"));
var _fsExtra = require("fs-extra");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getConfigPath(root) {
  const {
    js,
    ts
  } = {
    js: path.join(root, `gatsby-config.js`),
    ts: path.join(root, `gatsby-config.ts`)
  };
  return (0, _fsExtra.pathExistsSync)(ts) ? ts : js;
}
async function readConfigFile(root) {
  let src;
  try {
    src = await (0, _fsExtra.readFile)(getConfigPath(root), `utf8`);
  } catch (e) {
    if (e.code === `ENOENT`) {
      src = `
module.exports = {
  siteMetadata: {
    siteUrl: \`https://www.yourdomain.tld\`,
  },
  plugins: [],
}
`;
    } else {
      throw e;
    }
  }
  return src;
}