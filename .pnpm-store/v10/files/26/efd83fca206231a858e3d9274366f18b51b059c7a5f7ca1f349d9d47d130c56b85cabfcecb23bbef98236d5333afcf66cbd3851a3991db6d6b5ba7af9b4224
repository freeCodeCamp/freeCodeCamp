"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getServices = exports.getService = exports.createServiceLock = void 0;
var _path = _interopRequireDefault(require("path"));
var _tmp = _interopRequireDefault(require("tmp"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _xdgBasedir = _interopRequireDefault(require("xdg-basedir"));
var _createContentDigest = require("./create-content-digest");
var _ci = require("./ci");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const globalConfigPath = _xdgBasedir.default.config || _tmp.default.fileSync().name;
const getSiteDir = programPath => {
  const hash = (0, _createContentDigest.createContentDigest)(programPath);
  return _path.default.join(globalConfigPath, `gatsby`, `sites`, hash);
};
const DATA_FILE_EXTENSION = `.json`;
const getDataFilePath = (siteDir, serviceName) => _path.default.join(siteDir, `${serviceName}${DATA_FILE_EXTENSION}`);
const lockfileOptions = {
  // Use the minimum stale duration
  stale: 5000
};
// proper-lockfile has a side-effect that we only want to set when needed
function getLockFileInstance() {
  return Promise.resolve().then(() => _interopRequireWildcard(require(`proper-lockfile`)));
}
const memoryServices = {};
const createServiceLock = async (programPath, serviceName, content) => {
  // NOTE(@mxstbr): In CI, we cannot reliably access the global config dir and do not need cross-process coordination anyway
  // so we fall back to storing the services in memory instead!
  if ((0, _ci.isCI)()) {
    if (memoryServices[serviceName]) return null;
    memoryServices[serviceName] = content;
    return async () => {
      delete memoryServices[serviceName];
    };
  }
  const siteDir = getSiteDir(programPath);
  await _fsExtra.default.ensureDir(siteDir);
  const serviceDataFile = getDataFilePath(siteDir, serviceName);
  try {
    await _fsExtra.default.writeFile(serviceDataFile, JSON.stringify(content));
    const lockfile = await getLockFileInstance();
    const unlock = await lockfile.lock(serviceDataFile, lockfileOptions);
    return unlock;
  } catch (err) {
    return null;
  }
};
exports.createServiceLock = createServiceLock;
const getService = async (programPath, serviceName, ignoreLockfile = false) => {
  if ((0, _ci.isCI)()) return memoryServices[serviceName] || null;
  const siteDir = getSiteDir(programPath);
  const serviceDataFile = getDataFilePath(siteDir, serviceName);
  try {
    const lockfile = await getLockFileInstance();
    if (ignoreLockfile || (await lockfile.check(serviceDataFile, lockfileOptions))) {
      return JSON.parse(await _fsExtra.default.readFile(serviceDataFile, `utf8`).catch(() => `null`));
    }
    return null;
  } catch (err) {
    return null;
  }
};
exports.getService = getService;
const getServices = async programPath => {
  if ((0, _ci.isCI)()) return memoryServices;
  const siteDir = getSiteDir(programPath);
  const serviceNames = (await _fsExtra.default.readdir(siteDir)).filter(file => file.endsWith(DATA_FILE_EXTENSION)).map(file => file.replace(DATA_FILE_EXTENSION, ``));
  const services = {};
  await Promise.all(serviceNames.map(async service => {
    services[service] = await getService(programPath, service, true);
  }));
  return services;
};
exports.getServices = getServices;