'use strict';

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _node_modules_paths;

function _load_node_modules_paths() {
  return _node_modules_paths = _interopRequireDefault(require('./node_modules_paths'));
}

var _is_builtin_module;

function _load_is_builtin_module() {
  return _is_builtin_module = _interopRequireDefault(require('./is_builtin_module'));
}

var _default_resolver;

function _load_default_resolver() {
  return _default_resolver = _interopRequireDefault(require('./default_resolver.js'));
}

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                 *
                                                                                                                                                                                                 * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                 * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                 *
                                                                                                                                                                                                 * 
                                                                                                                                                                                                 */

const NATIVE_PLATFORM = 'native';

// We might be inside a symlink.
const cwd = process.cwd();
const resolvedCwd = (_fs || _load_fs()).default.realpathSync(cwd) || cwd;
const nodePaths = process.env.NODE_PATH ? process.env.NODE_PATH.split((_path || _load_path()).default.delimiter).filter(Boolean)
// The resolver expects absolute paths.
.map(p => (_path || _load_path()).default.resolve(resolvedCwd, p)) : null;

class Resolver {

  constructor(moduleMap, options) {
    this._options = {
      browser: options.browser,
      defaultPlatform: options.defaultPlatform,
      extensions: options.extensions,
      hasCoreModules: options.hasCoreModules === undefined ? true : options.hasCoreModules,
      moduleDirectories: options.moduleDirectories || ['node_modules'],
      moduleNameMapper: options.moduleNameMapper,
      modulePaths: options.modulePaths,
      platforms: options.platforms,
      resolver: options.resolver,
      rootDir: options.rootDir
    };
    this._moduleMap = moduleMap;
    this._moduleIDCache = Object.create(null);
    this._moduleNameCache = Object.create(null);
    this._modulePathCache = Object.create(null);
  }

  static findNodeModule(path, options) {
    const resolver = options.resolver ? /* $FlowFixMe */
    require(options.resolver) : (_default_resolver || _load_default_resolver()).default;
    const paths = options.paths;

    try {
      return resolver(path, {
        basedir: options.basedir,
        browser: options.browser,
        extensions: options.extensions,
        moduleDirectory: options.moduleDirectory,
        paths: paths ? (nodePaths || []).concat(paths) : nodePaths,
        rootDir: options.rootDir
      });
    } catch (e) {}
    return null;
  }

  resolveModule(from, moduleName, options) {
    const dirname = (_path || _load_path()).default.dirname(from);
    const paths = this._options.modulePaths;
    const moduleDirectory = this._options.moduleDirectories;
    const key = dirname + (_path || _load_path()).default.delimiter + moduleName;
    const defaultPlatform = this._options.defaultPlatform;
    const extensions = this._options.extensions.slice();
    if (this._supportsNativePlatform()) {
      extensions.unshift.apply(extensions, _toConsumableArray(this._options.extensions.map(ext => '.' + NATIVE_PLATFORM + ext)));
    }
    if (defaultPlatform) {
      extensions.unshift.apply(extensions, _toConsumableArray(this._options.extensions.map(ext => '.' + defaultPlatform + ext)));
    }

    // 0. If we have already resolved this module for this directory name,
    //    return a value from the cache.
    if (this._moduleNameCache[key]) {
      return this._moduleNameCache[key];
    }

    // 1. Check if the module is a haste module.
    let module = this.getModule(moduleName);
    if (module) {
      return this._moduleNameCache[key] = module;
    }

    // 2. Check if the module is a node module and resolve it based on
    //    the node module resolution algorithm.
    // If skipNodeResolution is given we ignore all modules that look like
    // node modules (ie. are not relative requires). This enables us to speed
    // up resolution when we build a dependency graph because we don't have
    // to look at modules that may not exist and aren't mocked.
    const skipResolution = options && options.skipNodeResolution && !moduleName.includes((_path || _load_path()).default.sep);

    const resolveNodeModule = name => {
      return Resolver.findNodeModule(name, {
        basedir: dirname,
        browser: this._options.browser,
        extensions,
        moduleDirectory,
        paths,
        resolver: this._options.resolver,
        rootDir: this._options.rootDir
      });
    };

    if (!skipResolution) {
      module = resolveNodeModule(moduleName);

      if (module) {
        return this._moduleNameCache[key] = module;
      }
    }

    // 3. Resolve "haste packages" which are `package.json` files outside of
    // `node_modules` folders anywhere in the file system.
    const parts = moduleName.split('/');
    const hastePackage = this.getPackage(parts.shift());
    if (hastePackage) {
      try {
        const module = (_path || _load_path()).default.join.apply((_path || _load_path()).default, [(_path || _load_path()).default.dirname(hastePackage)].concat(parts));
        // try resolving with custom resolver first to support extensions,
        // then fallback to require.resolve
        return this._moduleNameCache[key] = resolveNodeModule(module) || require.resolve(module);
      } catch (ignoredError) {}
    }

    // 4. Throw an error if the module could not be found. `resolve.sync`
    //    only produces an error based on the dirname but we have the actual
    //    current module name available.
    const relativePath = (_path || _load_path()).default.relative(dirname, from);
    const err = new Error(`Cannot find module '${moduleName}' from '${relativePath || '.'}'`);
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  isCoreModule(moduleName) {
    return this._options.hasCoreModules && (0, (_is_builtin_module || _load_is_builtin_module()).default)(moduleName);
  }

  getModule(name) {
    return this._moduleMap.getModule(name, this._options.defaultPlatform, this._supportsNativePlatform());
  }

  getModulePath(from, moduleName) {
    if (moduleName[0] !== '.' || (_path || _load_path()).default.isAbsolute(moduleName)) {
      return moduleName;
    }
    return (_path || _load_path()).default.normalize((_path || _load_path()).default.dirname(from) + '/' + moduleName);
  }

  getPackage(name) {
    return this._moduleMap.getPackage(name, this._options.defaultPlatform, this._supportsNativePlatform());
  }

  getMockModule(from, name) {
    const mock = this._moduleMap.getMockModule(name);
    if (mock) {
      return mock;
    } else {
      const moduleName = this._resolveStubModuleName(from, name);
      if (moduleName) {
        return this.getModule(moduleName) || moduleName;
      }
    }
    return null;
  }

  getModulePaths(from) {
    if (!this._modulePathCache[from]) {
      const moduleDirectory = this._options.moduleDirectories;
      const paths = (0, (_node_modules_paths || _load_node_modules_paths()).default)(from, { moduleDirectory });
      if (paths[paths.length - 1] === undefined) {
        // circumvent node-resolve bug that adds `undefined` as last item.
        paths.pop();
      }
      this._modulePathCache[from] = paths;
    }
    return this._modulePathCache[from];
  }

  getModuleID(virtualMocks, from, _moduleName) {
    const moduleName = _moduleName || '';

    const key = from + (_path || _load_path()).default.delimiter + moduleName;
    if (this._moduleIDCache[key]) {
      return this._moduleIDCache[key];
    }

    const moduleType = this._getModuleType(moduleName);
    const absolutePath = this._getAbsolutPath(virtualMocks, from, moduleName);
    const mockPath = this._getMockPath(from, moduleName);

    const sep = (_path || _load_path()).default.delimiter;
    const id = moduleType + sep + (absolutePath ? absolutePath + sep : '') + (mockPath ? mockPath + sep : '');

    return this._moduleIDCache[key] = id;
  }

  _getModuleType(moduleName) {
    return this.isCoreModule(moduleName) ? 'node' : 'user';
  }

  _getAbsolutPath(virtualMocks, from, moduleName) {
    if (this.isCoreModule(moduleName)) {
      return moduleName;
    }
    return this._isModuleResolved(from, moduleName) ? this.getModule(moduleName) : this._getVirtualMockPath(virtualMocks, from, moduleName);
  }

  _getMockPath(from, moduleName) {
    return !this.isCoreModule(moduleName) ? this.getMockModule(from, moduleName) : null;
  }

  _getVirtualMockPath(virtualMocks, from, moduleName) {
    const virtualMockPath = this.getModulePath(from, moduleName);
    return virtualMocks[virtualMockPath] ? virtualMockPath : moduleName ? this.resolveModule(from, moduleName) : from;
  }

  _isModuleResolved(from, moduleName) {
    return !!(this.getModule(moduleName) || this.getMockModule(from, moduleName));
  }

  _resolveStubModuleName(from, moduleName) {
    const dirname = (_path || _load_path()).default.dirname(from);
    const paths = this._options.modulePaths;
    const extensions = this._options.extensions;
    const moduleDirectory = this._options.moduleDirectories;
    const moduleNameMapper = this._options.moduleNameMapper;
    const resolver = this._options.resolver;

    if (moduleNameMapper) {
      for (const _ref of moduleNameMapper) {
        const mappedModuleName = _ref.moduleName;
        const regex = _ref.regex;

        if (regex.test(moduleName)) {
          // Note: once a moduleNameMapper matches the name, it must result
          // in a module, or else an error is thrown.
          const matches = moduleName.match(regex);
          const updatedName = matches ? mappedModuleName.replace(/\$([0-9]+)/g, (_, index) => matches[parseInt(index, 10)]) : mappedModuleName;

          const module = this.getModule(updatedName) || Resolver.findNodeModule(updatedName, {
            basedir: dirname,
            browser: this._options.browser,
            extensions,
            moduleDirectory,
            paths,
            resolver,
            rootDir: this._options.rootDir
          });
          if (!module) {
            const error = new Error((_chalk || _load_chalk()).default.red(`${(_chalk || _load_chalk()).default.bold('Configuration error')}:

Could not locate module ${(_chalk || _load_chalk()).default.bold(moduleName)} (mapped as ${(_chalk || _load_chalk()).default.bold(updatedName)})

Please check:

"moduleNameMapper": {
  "${regex.toString()}": "${(_chalk || _load_chalk()).default.bold(mappedModuleName)}"
},
"resolver": ${(_chalk || _load_chalk()).default.bold(resolver)}`));
            error.stack = '';
            throw error;
          }
          return module;
        }
      }
    }
    if (resolver) {
      // if moduleNameMapper didn't match anything, fallback to just the
      // regular resolver
      const module = this.getModule(moduleName) || Resolver.findNodeModule(moduleName, {
        basedir: dirname,
        browser: this._options.browser,
        extensions,
        moduleDirectory,
        paths,
        resolver,
        rootDir: this._options.rootDir
      });
      return module;
    }
    return null;
  }

  _supportsNativePlatform() {
    return (this._options.platforms || []).indexOf(NATIVE_PLATFORM) !== -1;
  }
}

module.exports = Resolver;