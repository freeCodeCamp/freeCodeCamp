"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getGatsbyDependents = void 0;
var _memoize2 = _interopRequireDefault(require("lodash/memoize"));
var _redux = require("../redux");
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _path = require("path");
var _fsExtra = require("fs-extra");
const getAllDependencies = pkg => new Set([...Object.entries(pkg.dependencies || {}), ...Object.entries(pkg.devDependencies || {}), ...Object.entries(pkg.optionalDependencies || {})]);
const readJSON = async file => {
  const buffer = await (0, _fsExtra.readFile)(file);
  return JSON.parse(buffer.toString());
};
const getTreeFromNodeModules = async (dir, results = new Map()) => {
  const requireFromHere = (0, _gatsbyCoreUtils.createRequireFromPath)(`${dir}/:internal:`);
  let packageJSON;
  try {
    packageJSON = await readJSON(require.resolve((0, _path.join)(dir, `package.json`)));
  } catch (error) {
    packageJSON = {};
  }
  await Promise.all(Array.from(getAllDependencies(packageJSON)).map(async ([name, version]) => {
    try {
      const currentDependency = {
        name,
        version,
        path: (0, _path.dirname)(requireFromHere.resolve(`${name}/package.json`))
      };

      // Include anything that has `gatsby` in its name but not `gatsby` itself
      if (/gatsby/.test(currentDependency.name) && currentDependency.name !== `gatsby`) {
        await getTreeFromNodeModules(currentDependency.path, results);
        if (!results.has(currentDependency.name)) results.set(currentDependency.name, currentDependency);
      }
    } catch (error) {
      // Sometimes dev dependencies of dependencies aren't installed
      // when using `yarn`. This is okay and safe to ignore.
    }
  }));
  return Array.from(results.values());
};
const getGatsbyDependents = (0, _memoize2.default)(async () => {
  const {
    program
  } = _redux.store.getState();
  return getTreeFromNodeModules(program.directory);
});
exports.getGatsbyDependents = getGatsbyDependents;
//# sourceMappingURL=gatsby-dependents.js.map