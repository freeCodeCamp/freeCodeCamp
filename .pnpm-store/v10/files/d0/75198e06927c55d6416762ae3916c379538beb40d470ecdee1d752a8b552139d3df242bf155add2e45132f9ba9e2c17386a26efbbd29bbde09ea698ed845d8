"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findPackageData = findPackageData;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
var _utils = require("./utils.js");
var _configError = require("../../errors/config-error.js");
const PACKAGE_FILENAME = "package.json";
const readConfigPackage = (0, _utils.makeStaticFileCache)((filepath, content) => {
  let options;
  try {
    options = JSON.parse(content);
  } catch (err) {
    throw new _configError.default(`Error while parsing JSON - ${err.message}`, filepath);
  }
  if (!options) throw new Error(`${filepath}: No config detected`);
  if (typeof options !== "object") {
    throw new _configError.default(`Config returned typeof ${typeof options}`, filepath);
  }
  if (Array.isArray(options)) {
    throw new _configError.default(`Expected config object but found array`, filepath);
  }
  return {
    filepath,
    dirname: _path().dirname(filepath),
    options
  };
});
function* findPackageData(filepath) {
  let pkg = null;
  const directories = [];
  let isPackage = true;
  let dirname = _path().dirname(filepath);
  while (!pkg && _path().basename(dirname) !== "node_modules") {
    directories.push(dirname);
    pkg = yield* readConfigPackage(_path().join(dirname, PACKAGE_FILENAME));
    const nextLoc = _path().dirname(dirname);
    if (dirname === nextLoc) {
      isPackage = false;
      break;
    }
    dirname = nextLoc;
  }
  return {
    filepath,
    directories,
    pkg,
    isPackage
  };
}
0 && 0;

//# sourceMappingURL=package.js.map
