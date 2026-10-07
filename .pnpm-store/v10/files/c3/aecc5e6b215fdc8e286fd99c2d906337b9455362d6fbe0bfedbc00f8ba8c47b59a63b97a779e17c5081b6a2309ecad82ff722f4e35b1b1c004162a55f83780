"use strict";

exports.__esModule = true;
exports.addFieldToMinimalSiteMetadata = addFieldToMinimalSiteMetadata;
exports.getInternalSiteMetadata = getInternalSiteMetadata;
exports.updateSiteMetadata = exports.updateInternalSiteMetadata = updateInternalSiteMetadata;
var fs = _interopRequireWildcard(require("fs-extra"));
var _serviceLock = require("./service-lock");
var _utils = require("./utils");
var _lock = require("./lock");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
async function getInternalSiteMetadata(sitePath) {
  return (0, _serviceLock.getService)(sitePath, `metadata`, true);
}
async function updateInternalSiteMetadata(metadata, merge = true) {
  if (merge) {
    const oldMetadata = await getInternalSiteMetadata(metadata.sitePath);
    if (oldMetadata) {
      metadata = {
        ...oldMetadata,
        ...metadata
      };
    }
  }
  return (0, _serviceLock.createServiceLock)(metadata.sitePath, `metadata`, metadata).then(unlock => unlock === null || unlock === void 0 ? void 0 : unlock());
}

// TODO(v5): Remove again - Necessary because of renaming in https://github.com/gatsbyjs/gatsby/pull/34094

/**
 * Does a string replace by searching for beginning of "siteMetadata"
 * Then it adds the name + value as the next key of that object
 */
function addField(src, {
  name,
  value
}) {
  const FIND = `  siteMetadata: {\n`;
  const REPLACE = `  siteMetadata: {\n    ${name}: \`${value}\`,\n`;
  const modifiedConfig = src.replace(FIND, REPLACE);
  return modifiedConfig;
}
async function addFieldToMinimalSiteMetadata({
  root
}, {
  name,
  value
}) {
  const release = await (0, _lock.lock)(`gatsby-config.js`);
  const configSrc = await (0, _utils.readConfigFile)(root);
  const code = addField(configSrc, {
    name,
    value
  });
  await fs.writeFile((0, _utils.getConfigPath)(root), code);
  release();
}