"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.NPMPackageCreate = exports.GatsbyPluginCreate = void 0;
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _execa = _interopRequireDefault(require("execa"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _core = require("@babel/core");
var _pluginBabelUtils = _interopRequireDefault(require("./plugin-babel-utils"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const addPluginToConfig = (src, srcPath, {
  name,
  options,
  key
}) => {
  let code;
  try {
    var _transform;
    const transformOptions = {
      plugins: [[_pluginBabelUtils.default, {
        pluginOrThemeName: name,
        options,
        key
      }]],
      filename: srcPath,
      configFile: false
    };

    // Use the Babel TS preset if we're operating on `gatsby-config.ts`
    if (srcPath.endsWith(`ts`)) {
      transformOptions.presets = [require.resolve(`@babel/preset-typescript`)];
    }
    code = (_transform = (0, _core.transform)(src, transformOptions)) === null || _transform === void 0 ? void 0 : _transform.code;

    // Add back stripped type import, do light formatting, remove added empty module export.
    // Use semicolon since Babel does that anyway, and we might as well be consistent.
    if (srcPath.endsWith(`ts`)) {
      code = `import type { GatsbyConfig } from "gatsby";\n\n${code}`;
      code = code.replace(`export {};`, ``);
      code = code.replace(`export default config;`, `\nexport default config;`);
    }
  } catch (error) {
    console.error(`Failed to transform gatsby config`, error);
  }
  return code;
};
const GatsbyPluginCreate = async ({
  root,
  name,
  options,
  key
}) => {
  const release = await (0, _gatsbyCoreUtils.lock)(`gatsby-config.js`);
  const configSrcPath = (0, _gatsbyCoreUtils.getConfigPath)(root);
  const configSrc = await (0, _gatsbyCoreUtils.readConfigFile)(root);
  const code = addPluginToConfig(configSrc, configSrcPath, {
    name,
    options,
    key
  });
  await fs.writeFile((0, _gatsbyCoreUtils.getConfigPath)(root), code);
  release();
};
exports.GatsbyPluginCreate = GatsbyPluginCreate;
const packageMangerConfigKey = `cli.packageManager`;
const PACKAGE_MANAGER = (0, _gatsbyCoreUtils.getConfigStore)().get(packageMangerConfigKey) || `yarn`;
const getPackageNames = packages => packages.map(n => `${n.name}@${n.version}`);
const generateClientCommands = ({
  packageManager,
  depType,
  packageNames
}) => {
  const commands = [];
  if (packageManager === `yarn`) {
    commands.push(`add`);
    // Needed for Yarn Workspaces and is a no-opt elsewhere.
    commands.push(`-W`);
    if (depType === `development`) {
      commands.push(`--dev`);
    }
    return commands.concat(packageNames);
  } else if (packageManager === `npm`) {
    commands.push(`install`);
    if (depType === `development`) {
      commands.push(`--save-dev`);
    }
    return commands.concat(packageNames);
  }
  return undefined;
};
let installs = [];
const executeInstalls = async root => {
  // @ts-ignore - fix me
  const types = (0, _groupBy2.default)(installs, c => c.resource.dependencyType);

  // Grab the key of the first install & delete off installs these packages
  // then run intall
  // when done, check again & call executeInstalls again.
  // @ts-ignore - fix me
  const depType = installs[0].resource.dependencyType;
  const packagesToInstall = types[depType];
  installs = installs.filter(
  // @ts-ignore - fix me
  i => !packagesToInstall.some(p => i.resource.name === p.resource.name));

  // @ts-ignore - fix me
  const pkgs = packagesToInstall.map(p => p.resource);
  const packageNames = getPackageNames(pkgs);
  const commands = generateClientCommands({
    packageNames,
    depType,
    packageManager: PACKAGE_MANAGER
  });
  const release = await (0, _gatsbyCoreUtils.lock)(`package.json`);
  try {
    await (0, _execa.default)(PACKAGE_MANAGER, commands, {
      cwd: root
    });
  } catch (e) {
    // A package failed so call the rejects
    return packagesToInstall.forEach(p => {
      // @ts-ignore - fix me
      p.outsideReject(JSON.stringify({
        message: e.shortMessage,
        installationError: `Could not install package`
      }));
    });
  }
  release();

  // @ts-ignore - fix me
  packagesToInstall.forEach(p => p.outsideResolve());

  // Run again if there's still more installs.
  if (installs.length > 0) {
    executeInstalls(root);
  }
  return undefined;
};
const debouncedExecute = (0, _debounce2.default)(executeInstalls, 25);
const createInstall = async ({
  root,
  name
}) => {
  let outsideResolve;
  let outsideReject;
  const promise = new Promise((resolve, reject) => {
    outsideResolve = resolve;
    outsideReject = reject;
  });
  installs.push({
    outsideResolve,
    outsideReject,
    resource: name
  });
  debouncedExecute(root);
  return promise;
};
const NPMPackageCreate = async ({
  root,
  name
}) => {
  await createInstall({
    root,
    name
  });
};
exports.NPMPackageCreate = NPMPackageCreate;