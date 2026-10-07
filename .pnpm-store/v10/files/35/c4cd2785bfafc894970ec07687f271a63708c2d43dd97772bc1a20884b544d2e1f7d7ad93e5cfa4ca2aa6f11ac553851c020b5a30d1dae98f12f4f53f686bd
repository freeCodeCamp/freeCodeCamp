"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getLatestAdapters = exports.getLatestAPIs = void 0;
var _path = _interopRequireDefault(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _axios = _interopRequireDefault(require("axios"));
var _preferDefault = require("../bootstrap/prefer-default");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ROOT = _path.default.join(__dirname, `..`, `..`);
const UNPKG_ROOT = `https://unpkg.com/gatsby/`;
const GITHUB_ROOT = `https://raw.githubusercontent.com/gatsbyjs/gatsby/master/packages/gatsby/`;
const FILE_NAMES = {
  APIS: `apis.json`,
  ADAPTERS: `adapters.js`
};
const OUTPUT_FILES = {
  APIS: _path.default.join(ROOT, `latest-apis.json`),
  ADAPTERS: _path.default.join(ROOT, `latest-adapters.js`)
};
const _fetchFile = async (root, fileName) => {
  try {
    const {
      data
    } = await _axios.default.get(`${root}${fileName}`, {
      timeout: 5000
    });
    return data;
  } catch (e) {
    return null;
  }
};
const _getFile = async ({
  fileName,
  outputFileName,
  defaultReturn,
  tryGithubBeforeUnpkg,
  forcedContent
}) => {
  let fileToUse = _path.default.join(ROOT, fileName);
  let dataToUse = forcedContent;
  if (!dataToUse && tryGithubBeforeUnpkg) {
    dataToUse = await _fetchFile(GITHUB_ROOT, fileName);
  }
  if (!dataToUse) {
    dataToUse = await _fetchFile(UNPKG_ROOT, fileName);
  }
  if (dataToUse) {
    await fs.writeFile(outputFileName, typeof dataToUse === `string` ? dataToUse : JSON.stringify(dataToUse, null, 2), `utf8`);
    fileToUse = outputFileName;
  } else {
    // if file was previously cached, use it
    if (await fs.pathExists(outputFileName)) {
      fileToUse = outputFileName;
    }
  }
  if (fileToUse.endsWith(`.json`)) {
    return fs.readJSON(fileToUse).catch(() => defaultReturn);
  } else {
    try {
      const importedFile = await Promise.resolve(`${fileToUse}`).then(s => _interopRequireWildcard(require(s)));
      const adapters = (0, _preferDefault.preferDefault)(importedFile);
      return adapters;
    } catch (e) {
      // no-op
      return defaultReturn;
    }
  }
};
const getLatestAPIs = async () => _getFile({
  fileName: FILE_NAMES.APIS,
  outputFileName: OUTPUT_FILES.APIS,
  defaultReturn: {
    browser: {},
    node: {},
    ssr: {}
  }
});
exports.getLatestAPIs = getLatestAPIs;
const getLatestAdapters = async () => _getFile({
  fileName: FILE_NAMES.ADAPTERS,
  outputFileName: OUTPUT_FILES.ADAPTERS,
  defaultReturn: [],
  // trying github first for adapters manifest to be able to faster make changes to version manifest
  // as publishing latest version of gatsby package takes more time
  tryGithubBeforeUnpkg: true,
  // in e2e-tests/adapters we force adapters manifest to be used
  forcedContent: process.env.GATSBY_ADAPTERS_MANIFEST
});
exports.getLatestAdapters = getLatestAdapters;
//# sourceMappingURL=get-latest-gatsby-files.js.map