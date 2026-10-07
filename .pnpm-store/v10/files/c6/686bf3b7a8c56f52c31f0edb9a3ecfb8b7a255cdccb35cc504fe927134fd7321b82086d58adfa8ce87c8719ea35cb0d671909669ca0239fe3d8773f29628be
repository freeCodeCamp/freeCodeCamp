"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _builtins = _interopRequireWildcard(require("./builtins"));

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _module() {
  const data = _interopRequireDefault(require("module"));

  _module = function () {
    return data;
  };

  return data;
}

function _url2() {
  const data = require("url");

  _url2 = function () {
    return data;
  };

  return data;
}

function _semver() {
  const data = _interopRequireDefault(require("semver"));

  _semver = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EMPTY_SHIM = require.resolve('./_empty');

/**
 * This resolver implements a modified version of the node_modules resolution algorithm:
 * https://nodejs.org/api/modules.html#modules_all_together
 *
 * In addition to the standard algorithm, Parcel supports:
 *   - All file extensions supported by Parcel.
 *   - Glob file paths
 *   - Absolute paths (e.g. /foo) resolved relative to the project root.
 *   - Tilde paths (e.g. ~/foo) resolved relative to the nearest module root in node_modules.
 *   - The package.json module, jsnext:main, and browser field as replacements for package.main.
 *   - The package.json browser and alias fields as an alias map within a local module.
 *   - The package.json alias field in the root package for global aliases across all modules.
 */
class NodeResolver {
  constructor(opts) {
    var _opts$shouldAutoInsta;

    this.extensions = opts.extensions.map(ext => ext.startsWith('.') ? ext : '.' + ext);
    this.mainFields = opts.mainFields;
    this.fs = opts.fs;
    this.projectRoot = opts.projectRoot;
    this.packageCache = new Map();
    this.rootPackage = null;
    this.packageManager = opts.packageManager;
    this.shouldAutoInstall = (_opts$shouldAutoInsta = opts.shouldAutoInstall) !== null && _opts$shouldAutoInsta !== void 0 ? _opts$shouldAutoInsta : false;
    this.logger = opts.logger;
  }

  async resolve({
    filename,
    parent,
    specifierType,
    range,
    env,
    sourcePath,
    loc
  }) {
    let ctx = {
      invalidateOnFileCreate: [],
      invalidateOnFileChange: new Set(),
      specifierType,
      range,
      loc
    }; // Get file extensions to search

    let extensions = this.extensions.slice();

    if (parent) {
      // parent's extension given high priority
      let parentExt = _path().default.extname(parent);

      extensions = [parentExt, ...extensions.filter(ext => ext !== parentExt)];
    }

    extensions.unshift('');

    try {
      // Resolve the module directory or local file path
      let module = await this.resolveModule({
        filename,
        parent,
        env,
        ctx,
        sourcePath
      });

      if (!module) {
        return {
          isExcluded: true
        };
      }

      let resolved;

      if (module.moduleDir) {
        resolved = await this.loadNodeModules(module, extensions, env, ctx);
      } else if (module.filePath) {
        if (module.code != null) {
          return {
            filePath: await this.fs.realpath(module.filePath),
            code: module.code,
            invalidateOnFileCreate: ctx.invalidateOnFileCreate,
            invalidateOnFileChange: [...ctx.invalidateOnFileChange],
            query: module.query
          };
        }

        resolved = await this.loadRelative(module.filePath, extensions, env, parent ? _path().default.dirname(parent) : this.projectRoot, ctx);
      }

      if (resolved) {
        let _resolved = resolved; // For Flow

        return {
          filePath: await this.fs.realpath(_resolved.path),
          sideEffects: _resolved.pkg && !this.hasSideEffects(_resolved.path, _resolved.pkg) ? false : undefined,
          invalidateOnFileCreate: ctx.invalidateOnFileCreate,
          invalidateOnFileChange: [...ctx.invalidateOnFileChange],
          query: module.query
        };
      }
    } catch (err) {
      if (err instanceof _diagnostic().default) {
        return {
          diagnostics: err.diagnostics,
          invalidateOnFileCreate: ctx.invalidateOnFileCreate,
          invalidateOnFileChange: [...ctx.invalidateOnFileChange]
        };
      } else {
        throw err;
      }
    }

    return null;
  }

  async resolveModule({
    filename,
    parent,
    env,
    ctx,
    sourcePath
  }) {
    let specifier = filename;

    let sourceFile = parent || _path().default.join(this.projectRoot, 'index');

    let query; // If this isn't the entrypoint, resolve the input file to an absolute path

    if (parent) {
      let res = await this.resolveFilename(filename, _path().default.dirname(sourceFile), ctx.specifierType);

      if (!res) {
        return null;
      }

      filename = res.filePath;
      query = res.query;
    } // Resolve aliases in the parent module for this file.


    let alias = await this.loadAlias(filename, sourceFile, env, ctx);

    if (alias) {
      if (alias.type === 'global') {
        return {
          filePath: _path().default.join(this.projectRoot, `${alias.resolved}.js`),
          code: `module.exports=${alias.resolved};`,
          query
        };
      }

      filename = alias.resolved;
    } // Return just the file path if this is a file, not in node_modules


    if (_path().default.isAbsolute(filename)) {
      return {
        filePath: filename,
        query
      };
    }

    let builtin = this.findBuiltin(filename, env);

    if (builtin === null) {
      return null;
    } else if (builtin && builtin.name === _builtins.empty) {
      return {
        filePath: _builtins.empty
      };
    } else if (builtin !== undefined) {
      filename = builtin.name;
    }

    if (this.shouldIncludeNodeModule(env, filename) === false) {
      if (sourcePath && env.isLibrary && !builtin) {
        await this.checkExcludedDependency(sourcePath, filename, ctx);
      }

      return null;
    } // Resolve the module in node_modules


    let resolved;

    try {
      resolved = this.findNodeModulePath(filename, !builtin ? sourceFile : _path().default.join(this.projectRoot, 'index'), ctx);
    } catch (err) {// ignore
    } // Autoinstall/verify version of builtin polyfills


    if ((builtin === null || builtin === void 0 ? void 0 : builtin.range) != null) {
      // This assumes that there are no polyfill packages that are scoped
      // Append '/' to force this.packageManager to look up the package in node_modules
      let packageName = builtin.name.split('/')[0] + '/';
      let packageManager = this.packageManager;

      if (resolved == null) {
        // Auto install the Node builtin polyfills
        if (this.shouldAutoInstall && packageManager) {
          var _this$logger, _ctx$loc$filePath, _ctx$loc;

          (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.warn({
            message: (0, _diagnostic().md)`Auto installing polyfill for Node builtin module "${specifier}"...`,
            codeFrames: [{
              filePath: (_ctx$loc$filePath = (_ctx$loc = ctx.loc) === null || _ctx$loc === void 0 ? void 0 : _ctx$loc.filePath) !== null && _ctx$loc$filePath !== void 0 ? _ctx$loc$filePath : sourceFile,
              codeHighlights: ctx.loc ? [{
                message: 'used here',
                start: ctx.loc.start,
                end: ctx.loc.end
              }] : []
            }],
            documentationURL: 'https://parceljs.org/features/node-emulation/#polyfilling-%26-excluding-builtin-node-modules'
          });
          await packageManager.resolve(packageName, this.projectRoot + '/index', {
            saveDev: true,
            shouldAutoInstall: true,
            range: builtin.range
          }); // Re-resolve

          try {
            resolved = this.findNodeModulePath(filename, this.projectRoot + '/index', ctx);
          } catch (err) {// ignore
          }
        } else {
          var _ctx$loc$filePath2, _ctx$loc2;

          throw new (_diagnostic().default)({
            diagnostic: {
              message: (0, _diagnostic().md)`Node builtin polyfill "${packageName}" is not installed, but auto install is disabled.`,
              codeFrames: [{
                filePath: (_ctx$loc$filePath2 = (_ctx$loc2 = ctx.loc) === null || _ctx$loc2 === void 0 ? void 0 : _ctx$loc2.filePath) !== null && _ctx$loc$filePath2 !== void 0 ? _ctx$loc$filePath2 : sourceFile,
                codeHighlights: ctx.loc ? [{
                  message: 'used here',
                  start: ctx.loc.start,
                  end: ctx.loc.end
                }] : []
              }],
              documentationURL: 'https://parceljs.org/features/node-emulation/#polyfilling-%26-excluding-builtin-node-modules',
              hints: [(0, _diagnostic().md)`Install the "${packageName}" package with your package manager, and run Parcel again.`]
            }
          });
        }
      } else if (builtin.range != null) {
        // Assert correct version
        try {
          // TODO packageManager can be null for backwards compatibility, but that could cause invalid
          // resolutions in monorepos
          await (packageManager === null || packageManager === void 0 ? void 0 : packageManager.resolve(packageName, this.projectRoot + '/index', {
            saveDev: true,
            shouldAutoInstall: this.shouldAutoInstall,
            range: builtin.range
          }));
        } catch (e) {
          var _this$logger2;

          (_this$logger2 = this.logger) === null || _this$logger2 === void 0 ? void 0 : _this$logger2.warn((0, _diagnostic().errorToDiagnostic)(e));
        }
      }
    }

    if (resolved === undefined && process.versions.pnp != null && parent) {
      try {
        let [moduleName, subPath] = (0, _utils().getModuleParts)(filename); // $FlowFixMe[prop-missing]

        let pnp = _module().default.findPnpApi(_path().default.dirname(parent));

        let res = pnp.resolveToUnqualified(moduleName + ( // retain slash in `require('assert/')` to force loading builtin from npm
        filename[moduleName.length] === '/' ? '/' : ''), parent);
        resolved = {
          moduleName,
          subPath,
          moduleDir: res,
          filePath: _path().default.join(res, subPath || '')
        }; // Invalidate whenever the .pnp.js file changes.

        ctx.invalidateOnFileChange.add(pnp.resolveToUnqualified('pnpapi', null));
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          return null;
        }
      }
    } // If we couldn't resolve the node_modules path, just return the module name info


    if (resolved === undefined) {
      let [moduleName, subPath] = (0, _utils().getModuleParts)(filename);
      resolved = {
        moduleName,
        subPath
      };
      let alternativeModules = await (0, _utils().findAlternativeNodeModules)(this.fs, moduleName, _path().default.dirname(sourceFile));

      if (alternativeModules.length) {
        var _resolved2;

        throw new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`Cannot find module ${(0, _nullthrows().default)((_resolved2 = resolved) === null || _resolved2 === void 0 ? void 0 : _resolved2.moduleName)}`,
            hints: alternativeModules.map(r => {
              return `Did you mean '__${r}__'?`;
            })
          }
        });
      }
    }

    if (resolved != null) {
      resolved.query = query;
    }

    return resolved;
  }

  shouldIncludeNodeModule({
    includeNodeModules
  }, name) {
    if (includeNodeModules === false) {
      return false;
    }

    if (Array.isArray(includeNodeModules)) {
      let [moduleName] = (0, _utils().getModuleParts)(name);
      return includeNodeModules.includes(moduleName);
    }

    if (includeNodeModules && typeof includeNodeModules === 'object') {
      let [moduleName] = (0, _utils().getModuleParts)(name);
      let include = includeNodeModules[moduleName];

      if (include != null) {
        return !!include;
      }
    }
  }

  async checkExcludedDependency(sourceFile, name, ctx) {
    var _pkg$dependencies, _pkg$peerDependencies, _pkg$engines;

    let [moduleName] = (0, _utils().getModuleParts)(name);
    let pkg = await this.findPackage(sourceFile, ctx);

    if (!pkg) {
      return;
    }

    if (!((_pkg$dependencies = pkg.dependencies) !== null && _pkg$dependencies !== void 0 && _pkg$dependencies[moduleName]) && !((_pkg$peerDependencies = pkg.peerDependencies) !== null && _pkg$peerDependencies !== void 0 && _pkg$peerDependencies[moduleName]) && !((_pkg$engines = pkg.engines) !== null && _pkg$engines !== void 0 && _pkg$engines[moduleName])) {
      let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`External dependency "${moduleName}" is not declared in package.json.`,
          codeFrames: [{
            filePath: pkg.pkgfile,
            language: 'json',
            code: pkgContent,
            codeHighlights: pkg.dependencies ? (0, _diagnostic().generateJSONCodeHighlights)(pkgContent, [{
              key: `/dependencies`,
              type: 'key'
            }]) : [{
              start: {
                line: 1,
                column: 1
              },
              end: {
                line: 1,
                column: 1
              }
            }]
          }],
          hints: [`Add "${moduleName}" as a dependency.`]
        }
      });
    }

    if (ctx.range) {
      var _pkg$dependencies2, _pkg$peerDependencies2;

      let range = ctx.range;
      let depRange = ((_pkg$dependencies2 = pkg.dependencies) === null || _pkg$dependencies2 === void 0 ? void 0 : _pkg$dependencies2[moduleName]) || ((_pkg$peerDependencies2 = pkg.peerDependencies) === null || _pkg$peerDependencies2 === void 0 ? void 0 : _pkg$peerDependencies2[moduleName]);

      if (depRange && !_semver().default.intersects(depRange, range)) {
        var _pkg$dependencies3;

        let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
        let field = (_pkg$dependencies3 = pkg.dependencies) !== null && _pkg$dependencies3 !== void 0 && _pkg$dependencies3[moduleName] ? 'dependencies' : 'peerDependencies';
        throw new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`External dependency "${moduleName}" does not satisfy required semver range "${range}".`,
            codeFrames: [{
              filePath: pkg.pkgfile,
              language: 'json',
              code: pkgContent,
              codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(pkgContent, [{
                key: `/${field}/${(0, _diagnostic().encodeJSONKeyComponent)(moduleName)}`,
                type: 'value',
                message: 'Found this conflicting requirement.'
              }])
            }],
            hints: [`Update the dependency on "${moduleName}" to satisfy "${range}".`]
          }
        });
      }
    }
  }

  async resolveFilename(filename, dir, specifierType) {
    let url;

    switch (filename[0]) {
      case '/':
        {
          if (specifierType === 'url' && filename[1] === '/') {
            // A protocol-relative URL, e.g `url('//example.com/foo.png')`. Ignore.
            return null;
          } // Absolute path. Resolve relative to project root.


          dir = this.projectRoot;
          filename = '.' + filename;
          break;
        }

      case '~':
        {
          // Tilde path. Resolve relative to nearest node_modules directory,
          // the nearest directory with package.json or the project root - whichever comes first.
          const insideNodeModules = dir.includes('node_modules');

          while (dir !== this.projectRoot && _path().default.basename(_path().default.dirname(dir)) !== 'node_modules' && (insideNodeModules || !(await this.fs.exists(_path().default.join(dir, 'package.json'))))) {
            dir = _path().default.dirname(dir);

            if (dir === _path().default.dirname(dir)) {
              dir = this.projectRoot;
              break;
            }
          }

          filename = filename.slice(1);

          if (filename[0] === '/' || filename[0] === '\\') {
            filename = '.' + filename;
          }

          break;
        }

      case '.':
        {
          // Relative path.
          break;
        }

      case '#':
        {
          if (specifierType === 'url') {
            // An ID-only URL, e.g. `url(#clip-path)` for CSS rules. Ignore.
            return null;
          }

          break;
        }

      default:
        {
          // Bare specifier. If this is a URL, it's treated as relative,
          // otherwise as a node_modules package.
          if (specifierType === 'esm') {
            // Try parsing as a URL first in case there is a scheme.
            // Otherwise, fall back to an `npm:` specifier, parsed below.
            try {
              url = new URL(filename);
            } catch (e) {
              filename = 'npm:' + filename;
            }
          } else if (specifierType === 'commonjs') {
            return {
              filePath: filename
            };
          }
        }
    } // If this is a URL dependency or ESM specifier, parse as a URL.
    // Otherwise, if this is CommonJS, parse as a platform path.


    if (specifierType === 'url' || specifierType === 'esm') {
      var _url;

      url = (_url = url) !== null && _url !== void 0 ? _url : new URL(filename, `file:${dir}/index`);
      let filePath;

      if (url.protocol === 'npm:') {
        // The `npm:` scheme allows URLs to resolve to node_modules packages.
        filePath = decodeURIComponent(url.pathname);
      } else if (url.protocol === 'node:') {
        // Preserve the `node:` prefix for use later.
        // Node does not URL decode or support query params here.
        // See https://github.com/nodejs/node/issues/39710.
        return {
          filePath: filename
        };
      } else if (url.protocol === 'file:') {
        // $FlowFixMe
        filePath = (0, _url2().fileURLToPath)(url);
      } else if (specifierType === 'url') {
        // Don't handle other protocols like http:
        return null;
      } else {
        // Throw on unsupported url schemes in ESM dependencies.
        // We may support http: or data: urls eventually.
        throw new (_diagnostic().default)({
          diagnostic: {
            message: `Unknown url scheme or pipeline '${url.protocol}'`
          }
        });
      }

      return {
        filePath,
        query: url.search ? new URLSearchParams(url.search) : undefined
      };
    } else {
      // CommonJS specifier. Query params are not supported.
      return {
        filePath: _path().default.resolve(dir, filename)
      };
    }
  }

  async loadRelative(filename, extensions, env, parentdir, ctx) {
    // Find a package.json file in the current package.
    let pkg = await this.findPackage(filename, ctx); // First try as a file, then as a directory.

    let resolvedFile = await this.loadAsFile({
      file: filename,
      extensions,
      env,
      pkg,
      ctx
    }); // Don't load as a directory if this is a URL dependency.

    if (!resolvedFile && ctx.specifierType !== 'url') {
      resolvedFile = await this.loadDirectory({
        dir: filename,
        extensions,
        env,
        ctx,
        pkg
      });
    }

    if (!resolvedFile) {
      // If we can't load the file do a fuzzySearch for potential hints
      let relativeFileSpecifier = (0, _utils().relativePath)(parentdir, filename);
      let potentialFiles = await (0, _utils().findAlternativeFiles)(this.fs, relativeFileSpecifier, parentdir, this.projectRoot, true, ctx.specifierType !== 'url', extensions.length === 0);
      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`Cannot load file '${relativeFileSpecifier}' in '${(0, _utils().relativePath)(this.projectRoot, parentdir)}'.`,
          hints: potentialFiles.map(r => {
            return `Did you mean '__${r}__'?`;
          })
        }
      });
    }

    return resolvedFile;
  }

  findBuiltin(filename, env) {
    const isExplicitNode = filename.startsWith('node:');

    if (isExplicitNode || _builtins.default[filename]) {
      if (env.isNode()) {
        return null;
      }

      if (isExplicitNode) {
        filename = filename.substr(5);
      } // By default, exclude node builtins from libraries unless explicitly opted in.


      if (env.isLibrary && this.shouldIncludeNodeModule(env, filename) !== true) {
        return null;
      }

      return _builtins.default[filename] || _builtins.empty;
    }

    if (env.isElectron() && filename === 'electron') {
      return null;
    }
  }

  findNodeModulePath(filename, sourceFile, ctx) {
    let [moduleName, subPath] = (0, _utils().getModuleParts)(filename);
    ctx.invalidateOnFileCreate.push({
      fileName: `node_modules/${moduleName}`,
      aboveFilePath: sourceFile
    });

    let dir = _path().default.dirname(sourceFile);

    let moduleDir = this.fs.findNodeModule(moduleName, dir);

    if (moduleDir) {
      return {
        moduleName,
        subPath,
        moduleDir,
        filePath: subPath ? _path().default.join(moduleDir, subPath) : moduleDir
      };
    }

    return undefined;
  }

  async loadNodeModules(module, extensions, env, ctx) {
    // If a module was specified as a module sub-path (e.g. some-module/some/path),
    // it is likely a file. Try loading it as a file first.
    if (module.subPath && module.moduleDir) {
      let pkg = await this.readPackage(module.moduleDir, ctx);
      let res = await this.loadAsFile({
        file: (0, _nullthrows().default)(module.filePath),
        extensions,
        env,
        pkg,
        ctx
      });

      if (res) {
        return res;
      }
    } // Otherwise, load as a directory.


    return this.loadDirectory({
      dir: (0, _nullthrows().default)(module.filePath),
      extensions,
      env,
      ctx
    });
  }

  async loadDirectory({
    dir,
    extensions,
    env,
    ctx,
    pkg
  }) {
    var _pkg;

    let failedEntry;

    try {
      pkg = await this.readPackage(dir, ctx);

      if (pkg) {
        // Get a list of possible package entry points.
        let entries = this.getPackageEntries(pkg, env);

        for (let entry of entries) {
          // First try loading package.main as a file, then try as a directory.
          let res = (await this.loadAsFile({
            file: entry.filename,
            extensions,
            env,
            pkg,
            ctx
          })) || (await this.loadDirectory({
            dir: entry.filename,
            extensions,
            env,
            pkg,
            ctx
          }));

          if (res) {
            return res;
          } else {
            failedEntry = entry;
            throw new Error('');
          }
        }
      }
    } catch (e) {
      if (failedEntry && pkg) {
        // If loading the entry failed, try to load an index file, and fall back
        // to it if it exists.
        let indexFallback = await this.loadAsFile({
          file: _path().default.join(dir, 'index'),
          extensions,
          env,
          pkg,
          ctx
        });

        if (indexFallback != null) {
          return indexFallback;
        }

        let fileSpecifier = (0, _utils().relativePath)(dir, failedEntry.filename);
        let alternatives = await (0, _utils().findAlternativeFiles)(this.fs, fileSpecifier, pkg.pkgdir, this.projectRoot);
        let alternative = alternatives[0];
        let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
        throw new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`Could not load '${fileSpecifier}' from module '${pkg.name}' found in package.json#${failedEntry.field}`,
            codeFrames: [{
              filePath: pkg.pkgfile,
              language: 'json',
              code: pkgContent,
              codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(pkgContent, [{
                key: `/${failedEntry.field}`,
                type: 'value',
                message: (0, _diagnostic().md)`'${fileSpecifier}' does not exist${alternative ? `, did you mean '${alternative}'?` : ''}'`
              }])
            }]
          }
        });
      }
    } // Skip index fallback unless this is actually a directory.


    try {
      if (!(await this.fs.stat(dir)).isDirectory()) {
        return;
      }
    } catch (err) {
      return;
    } // Fall back to an index file inside the directory.


    return this.loadAsFile({
      file: _path().default.join(dir, 'index'),
      extensions,
      env,
      pkg: (_pkg = pkg) !== null && _pkg !== void 0 ? _pkg : await this.findPackage(_path().default.join(dir, 'index'), ctx),
      ctx
    });
  }

  async readPackage(dir, ctx) {
    let file = _path().default.join(dir, 'package.json');

    let cached = this.packageCache.get(file);

    if (cached) {
      ctx.invalidateOnFileChange.add(cached.pkgfile);
      return cached;
    }

    let json;

    try {
      json = await this.fs.readFile(file, 'utf8');
    } catch (err) {
      // If the package.json doesn't exist, watch for it to be created.
      ctx.invalidateOnFileCreate.push({
        filePath: file
      });
      throw err;
    } // Add the invalidation *before* we try to parse the JSON in case of errors
    // so that changes are picked up if the file is edited to fix the error.


    ctx.invalidateOnFileChange.add(file);
    let pkg = JSON.parse(json);
    await this.processPackage(pkg, file, dir);
    this.packageCache.set(file, pkg);
    return pkg;
  }

  async processPackage(pkg, file, dir) {
    pkg.pkgfile = file;
    pkg.pkgdir = dir; // If the package has a `source` field, make sure
    // - the package is behind symlinks
    // - and the realpath to the packages does not includes `node_modules`.
    // Since such package is likely a pre-compiled module
    // installed with package managers, rather than including a source code.

    if (pkg.source) {
      let realpath = await this.fs.realpath(file);

      if (realpath === file || realpath.includes(`${_path().default.sep}node_modules${_path().default.sep}`)) {
        delete pkg.source;
      }
    }
  }

  getPackageEntries(pkg, env) {
    return this.mainFields.map(field => {
      if (field === 'browser' && pkg.browser != null) {
        if (!env.isBrowser()) {
          return null;
        } else if (typeof pkg.browser === 'string') {
          return {
            field,
            filename: pkg.browser
          };
        } else if (typeof pkg.browser === 'object' && pkg.browser[pkg.name]) {
          return {
            field: `browser/${pkg.name}`,
            filename: pkg.browser[pkg.name]
          };
        }
      }

      return {
        field,
        filename: pkg[field]
      };
    }).filter(entry => entry && entry.filename && typeof entry.filename === 'string').map(entry => {
      (0, _assert().default)(entry != null && typeof entry.filename === 'string'); // Current dir refers to an index file

      if (entry.filename === '.' || entry.filename === './') {
        entry.filename = 'index';
      }

      return {
        field: entry.field,
        filename: _path().default.resolve(pkg.pkgdir, entry.filename)
      };
    });
  }

  async loadAsFile({
    file,
    extensions,
    env,
    pkg,
    ctx
  }) {
    // Try all supported extensions
    let files = await this.expandFile(file, extensions, env, pkg);
    let found = this.fs.findFirstFile(files); // Add invalidations for higher priority files so we
    // re-resolve if any of them are created.

    for (let file of files) {
      if (file === found) {
        break;
      }

      ctx.invalidateOnFileCreate.push({
        filePath: file
      });
    }

    if (found) {
      return {
        path: found,
        // If this package.json isn't a sibling of found, it's possible pkg is not the
        // closest package.json to the resolved file. Reload it instead.
        pkg: pkg == null || (pkg === null || pkg === void 0 ? void 0 : pkg.pkgdir) !== _path().default.dirname(found) ? await this.findPackage(found, ctx) : pkg
      };
    }

    return null;
  }

  async expandFile(file, extensions, env, pkg, expandAliases = true) {
    // Expand extensions and aliases
    let res = [];

    for (let ext of extensions) {
      let f = file + ext;

      if (expandAliases) {
        let alias = await this.resolveAliases(f, env, pkg);
        let aliasPath;

        if (alias && alias.type === 'file') {
          aliasPath = alias.resolved;
        }

        if (aliasPath && aliasPath !== f) {
          res = res.concat(await this.expandFile(aliasPath, extensions, env, pkg, false));
        }
      }

      if (_path().default.extname(f)) {
        res.push(f);
      }
    }

    return res;
  }

  async resolveAliases(filename, env, pkg) {
    let localAliases = await this.resolvePackageAliases(filename, env, pkg);

    if (localAliases) {
      return localAliases;
    } // First resolve local package aliases, then project global ones.


    return this.resolvePackageAliases(filename, env, this.rootPackage);
  }

  async resolvePackageAliases(filename, env, pkg) {
    if (!pkg) {
      return null;
    }

    if (pkg.source && !Array.isArray(pkg.source)) {
      let alias = await this.getAlias(filename, pkg, pkg.source);

      if (alias != null) {
        return alias;
      }
    }

    if (pkg.alias) {
      let alias = await this.getAlias(filename, pkg, pkg.alias);

      if (alias != null) {
        return alias;
      }
    }

    if (pkg.browser && env.isBrowser()) {
      let alias = await this.getAlias(filename, pkg, pkg.browser);

      if (alias != null) {
        return alias;
      }
    }

    return null;
  }

  async getAlias(filename, pkg, aliases) {
    if (!filename || !aliases || typeof aliases !== 'object') {
      return null;
    }

    let dir = pkg.pkgdir;
    let alias; // If filename is an absolute path, get one relative to the package.json directory.

    if (_path().default.isAbsolute(filename)) {
      filename = (0, _utils().relativePath)(dir, filename);
      alias = this.lookupAlias(aliases, filename);
    } else {
      // It is a node_module. First try the entire filename as a key.
      alias = this.lookupAlias(aliases, (0, _utils().normalizeSeparators)(filename));

      if (alias == null) {
        // If it didn't match, try only the module name.
        let [moduleName, subPath] = (0, _utils().getModuleParts)(filename);
        alias = this.lookupAlias(aliases, moduleName);

        if (typeof alias === 'string' && subPath) {
          let isRelative = alias.startsWith('./'); // Append the filename back onto the aliased module.

          alias = _path().default.posix.join(alias, subPath); // because of path.join('./nested', 'sub') === 'nested/sub'

          if (isRelative) alias = './' + alias;
        }
      }
    } // If the alias is set to `false`, return an empty file.


    if (alias === false) {
      return {
        type: 'file',
        sourcePath: pkg.pkgfile,
        resolved: EMPTY_SHIM
      };
    }

    if (alias && typeof alias === 'object') {
      if (alias.global) {
        if (typeof alias.global !== 'string' || alias.global.length === 0) {
          throw new (_diagnostic().default)({
            diagnostic: {
              message: (0, _diagnostic().md)`The global alias for ${filename} is invalid.`,
              hints: [`Only nonzero-length strings are valid global aliases.`]
            }
          });
        }

        return {
          type: 'global',
          sourcePath: pkg.pkgfile,
          resolved: alias.global
        };
      }
    }

    if (typeof alias === 'string') {
      // Assume file
      let resolved = await this.resolveFilename(alias, dir, 'commonjs');

      if (!resolved) {
        return null;
      }

      return {
        type: 'file',
        sourcePath: pkg.pkgfile,
        resolved: resolved.filePath
      };
    }

    return null;
  }

  lookupAlias(aliases, filename) {
    if (typeof aliases !== 'object') {
      return null;
    } // First, try looking up the exact filename


    let alias = aliases[filename];

    if (alias == null) {
      // Otherwise, try replacing glob keys
      for (let key in aliases) {
        let val = aliases[key];

        if (typeof val === 'string' && (0, _utils().isGlob)(key)) {
          // https://github.com/micromatch/picomatch/issues/77
          if (filename.startsWith('./')) {
            filename = filename.slice(2);
          }

          let re = (0, _utils().globToRegex)(key, {
            capture: true
          });

          if (re.test(filename)) {
            alias = filename.replace(re, val);
            break;
          }
        }
      }
    }

    return alias;
  }

  async findPackage(sourceFile, ctx) {
    ctx.invalidateOnFileCreate.push({
      fileName: 'package.json',
      aboveFilePath: sourceFile
    }); // Find the nearest package.json file within the current node_modules folder

    let res = await (0, _utils().loadConfig)(this.fs, sourceFile, ['package.json'], this.projectRoot, // By default, loadConfig uses JSON5. Use normal JSON for package.json files
    // since they don't support comments and JSON.parse is faster.
    {
      parser: (...args) => JSON.parse(...args)
    });

    if (res != null) {
      let file = res.files[0].filePath;

      let dir = _path().default.dirname(file);

      ctx.invalidateOnFileChange.add(file);
      let pkg = res.config;
      await this.processPackage(pkg, file, dir);
      return pkg;
    }

    return null;
  }

  async loadAlias(filename, sourceFile, env, ctx) {
    // Load the root project's package.json file if we haven't already
    if (!this.rootPackage) {
      this.rootPackage = await this.findPackage(_path().default.join(this.projectRoot, 'index'), ctx);
    } // Load the local package, and resolve aliases


    let pkg = await this.findPackage(sourceFile, ctx);
    return this.resolveAliases(filename, env, pkg);
  }

  hasSideEffects(filePath, pkg) {
    switch (typeof pkg.sideEffects) {
      case 'boolean':
        return pkg.sideEffects;

      case 'string':
        {
          let glob = pkg.sideEffects;
          (0, _assert().default)(typeof glob === 'string');

          let relative = _path().default.relative(pkg.pkgdir, filePath);

          if (!glob.includes('/')) {
            glob = `**/${glob}`;
          } // Trim off "./" to make micromatch behave correctly,
          // `path.relative` never returns a leading "./"


          if (glob.startsWith('./')) {
            glob = glob.substr(2);
          }

          return (0, _utils().isGlobMatch)(relative, glob, {
            dot: true
          });
        }

      case 'object':
        return pkg.sideEffects.some(sideEffects => this.hasSideEffects(filePath, { ...pkg,
          sideEffects
        }));
    }

    return true;
  }

}

exports.default = NodeResolver;