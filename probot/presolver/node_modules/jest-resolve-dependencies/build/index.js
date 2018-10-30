'use strict';

var _jestRegexUtil;

function _load_jestRegexUtil() {
  return _jestRegexUtil = require('jest-regex-util');
}

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const snapshotDirRegex = new RegExp((0, (_jestRegexUtil || _load_jestRegexUtil()).replacePathSepForRegex)('/__snapshots__/'));
const snapshotFileRegex = new RegExp((0, (_jestRegexUtil || _load_jestRegexUtil()).replacePathSepForRegex)('__snapshots__/(.*).snap'));
const isSnapshotPath = path => !!path.match(snapshotDirRegex);

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    const element = array[i];
    if (element != null) {
      result.push(element);
    }
  }
  return result;
}

/**
 * DependencyResolver is used to resolve the direct dependencies of a module or
 * to retrieve a list of all transitive inverse dependencies.
 */
class DependencyResolver {

  constructor(resolver, hasteFS) {
    this._resolver = resolver;
    this._hasteFS = hasteFS;
  }

  resolve(file, options) {
    const dependencies = this._hasteFS.getDependencies(file);
    if (!dependencies) {
      return [];
    }
    return compact(dependencies.map(dependency => {
      if (this._resolver.isCoreModule(dependency)) {
        return null;
      }
      try {
        return this._resolver.resolveModule(file, dependency, options);
      } catch (e) {}
      return this._resolver.getMockModule(file, dependency) || null;
    }));
  }

  resolveInverse(paths, filter, options) {
    const collectModules = (relatedPaths, moduleMap, changed) => {
      const visitedModules = new Set();
      while (changed.size) {
        changed = new Set(moduleMap.filter(module => !visitedModules.has(module.file) && module.dependencies.some(dep => dep && changed.has(dep))).map(module => {
          const file = module.file;
          if (filter(file)) {
            relatedPaths.add(file);
          }
          visitedModules.add(file);
          return module.file;
        }));
      }
      return relatedPaths;
    };

    if (!paths.size) {
      return [];
    }

    const relatedPaths = new Set();
    const changed = new Set();
    for (const path of paths) {
      if (this._hasteFS.exists(path)) {
        // /path/to/__snapshots__/test.js.snap is always adjacent to
        // /path/to/test.js
        const modulePath = isSnapshotPath(path) ? path.replace(snapshotFileRegex, '$1') : path;
        changed.add(modulePath);
        if (filter(modulePath)) {
          relatedPaths.add(modulePath);
        }
      }
    }

    const modules = this._hasteFS.getAllFiles().map(file => ({
      dependencies: this.resolve(file, options),
      file
    }));
    return Array.from(collectModules(relatedPaths, modules, changed));
  }
}

module.exports = DependencyResolver;