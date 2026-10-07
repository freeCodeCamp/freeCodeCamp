"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _sourceMap() {
  const data = _interopRequireDefault(require("@parcel/source-map"));

  _sourceMap = function () {
    return data;
  };

  return data;
}

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
    return data;
  };

  return data;
}

var _native = require("../native");

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _browserslist() {
  const data = _interopRequireDefault(require("browserslist"));

  _browserslist = function () {
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

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
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

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _workers() {
  const data = _interopRequireDefault(require("@parcel/workers"));

  _workers = function () {
    return data;
  };

  return data;
}

var _package = _interopRequireDefault(require("../package.json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JSX_EXTENSIONS = {
  jsx: true,
  tsx: true
};
const JSX_PRAGMA = {
  react: {
    pragma: 'React.createElement',
    pragmaFrag: 'React.Fragment',
    automatic: '>= 17.0.0 || ^16.14.0 || >= 0.0.0-0 < 0.0.0'
  },
  preact: {
    pragma: 'h',
    pragmaFrag: 'Fragment',
    automatic: '>= 10.5.0'
  },
  nervjs: {
    pragma: 'Nerv.createElement',
    pragmaFrag: undefined,
    automatic: undefined
  },
  hyperapp: {
    pragma: 'h',
    pragmaFrag: undefined,
    automatic: undefined
  }
};
const BROWSER_MAPPING = {
  and_chr: 'chrome',
  and_ff: 'firefox',
  ie_mob: 'ie',
  ios_saf: 'ios',
  op_mob: 'opera',
  and_qq: null,
  and_uc: null,
  baidu: null,
  bb: null,
  kaios: null,
  op_mini: null
}; // List of browsers to exclude when the esmodule target is specified.
// Based on https://caniuse.com/#feat=es6-module

const ESMODULE_BROWSERS = ['not ie <= 11', 'not edge < 16', 'not firefox < 60', 'not chrome < 61', 'not safari < 11', 'not opera < 48', 'not ios_saf < 11', 'not op_mini all', 'not android < 76', 'not blackberry > 0', 'not op_mob > 0', 'not and_chr < 76', 'not and_ff < 68', 'not ie_mob > 0', 'not and_uc > 0', 'not samsung < 8.2', 'not and_qq > 0', 'not baidu > 0', 'not kaios > 0'];
const CONFIG_SCHEMA = {
  type: 'object',
  properties: {
    inlineFS: {
      type: 'boolean'
    },
    inlineEnvironment: {
      oneOf: [{
        type: 'boolean'
      }, {
        type: 'array',
        items: {
          type: 'string'
        }
      }]
    }
  },
  additionalProperties: false
};
const SCRIPT_ERRORS = {
  browser: {
    message: 'Browser scripts cannot have imports or exports.',
    hint: 'Add the type="module" attribute to the <script> tag.'
  },
  'web-worker': {
    message: 'Web workers cannot have imports or exports without the `type: "module"` option.',
    hint: "Add {type: 'module'} as a second argument to the Worker constructor."
  },
  'service-worker': {
    message: 'Service workers cannot have imports or exports without the `type: "module"` option.',
    hint: "Add {type: 'module'} as a second argument to the navigator.serviceWorker.register() call."
  }
};

var _default = new (_plugin().Transformer)({
  async loadConfig({
    config,
    options
  }) {
    let pkg = await config.getPackage();
    let isJSX, pragma, pragmaFrag, jsxImportSource, automaticJSXRuntime, reactRefresh, decorators, useDefineForClassFields;

    if (config.isSource) {
      var _pkg$dependencies2, _pkg$devDependencies2, _pkg$peerDependencies2, _tsconfig$contents;

      let reactLib;

      if (pkg !== null && pkg !== void 0 && pkg.alias && pkg.alias['react']) {
        // e.g.: `{ alias: { "react": "preact/compat" } }`
        reactLib = 'react';
      } else {
        // Find a dependency that we can map to a JSX pragma
        reactLib = Object.keys(JSX_PRAGMA).find(libName => {
          var _pkg$dependencies, _pkg$devDependencies, _pkg$peerDependencies;

          return (pkg === null || pkg === void 0 ? void 0 : (_pkg$dependencies = pkg.dependencies) === null || _pkg$dependencies === void 0 ? void 0 : _pkg$dependencies[libName]) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$devDependencies = pkg.devDependencies) === null || _pkg$devDependencies === void 0 ? void 0 : _pkg$devDependencies[libName]) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$peerDependencies = pkg.peerDependencies) === null || _pkg$peerDependencies === void 0 ? void 0 : _pkg$peerDependencies[libName]);
        });
      }

      reactRefresh = options.hmrOptions && options.mode === 'development' && Boolean((pkg === null || pkg === void 0 ? void 0 : (_pkg$dependencies2 = pkg.dependencies) === null || _pkg$dependencies2 === void 0 ? void 0 : _pkg$dependencies2.react) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$devDependencies2 = pkg.devDependencies) === null || _pkg$devDependencies2 === void 0 ? void 0 : _pkg$devDependencies2.react) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$peerDependencies2 = pkg.peerDependencies) === null || _pkg$peerDependencies2 === void 0 ? void 0 : _pkg$peerDependencies2.react));
      let tsconfig = await config.getConfigFrom(options.projectRoot + '/index', ['tsconfig.json', 'jsconfig.json']);
      let compilerOptions = tsconfig === null || tsconfig === void 0 ? void 0 : (_tsconfig$contents = tsconfig.contents) === null || _tsconfig$contents === void 0 ? void 0 : _tsconfig$contents.compilerOptions; // Use explicitly defined JSX options in tsconfig.json over inferred values from dependencies.

      pragma = (compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsxFactory) || (reactLib ? JSX_PRAGMA[reactLib].pragma : undefined);
      pragmaFrag = (compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsxFragmentFactory) || (reactLib ? JSX_PRAGMA[reactLib].pragmaFrag : undefined);

      if ((compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsx) === 'react-jsx' || (compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsx) === 'react-jsxdev' || compilerOptions !== null && compilerOptions !== void 0 && compilerOptions.jsxImportSource) {
        jsxImportSource = compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsxImportSource;
        automaticJSXRuntime = true;
      } else if (reactLib) {
        var _JSX_PRAGMA$effective, _pkg$dependencies3, _pkg$devDependencies3, _pkg$peerDependencies3, _semver$minVersion;

        let effectiveReactLib = pkg !== null && pkg !== void 0 && pkg.alias && pkg.alias['react'] === 'preact/compat' ? 'preact' : reactLib;
        let automaticVersion = (_JSX_PRAGMA$effective = JSX_PRAGMA[effectiveReactLib]) === null || _JSX_PRAGMA$effective === void 0 ? void 0 : _JSX_PRAGMA$effective.automatic;
        let reactLibVersion = (pkg === null || pkg === void 0 ? void 0 : (_pkg$dependencies3 = pkg.dependencies) === null || _pkg$dependencies3 === void 0 ? void 0 : _pkg$dependencies3[effectiveReactLib]) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$devDependencies3 = pkg.devDependencies) === null || _pkg$devDependencies3 === void 0 ? void 0 : _pkg$devDependencies3[effectiveReactLib]) || (pkg === null || pkg === void 0 ? void 0 : (_pkg$peerDependencies3 = pkg.peerDependencies) === null || _pkg$peerDependencies3 === void 0 ? void 0 : _pkg$peerDependencies3[effectiveReactLib]);
        reactLibVersion = reactLibVersion ? _semver().default.validRange(reactLibVersion) : null;
        let minReactLibVersion = reactLibVersion !== null && reactLibVersion !== '*' ? (_semver$minVersion = _semver().default.minVersion(reactLibVersion)) === null || _semver$minVersion === void 0 ? void 0 : _semver$minVersion.toString() : null;
        automaticJSXRuntime = automaticVersion && !(compilerOptions !== null && compilerOptions !== void 0 && compilerOptions.jsxFactory) && minReactLibVersion != null && _semver().default.satisfies(minReactLibVersion, automaticVersion, {
          includePrerelease: true
        });

        if (automaticJSXRuntime) {
          jsxImportSource = reactLib;
        }
      }

      isJSX = Boolean((compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.jsx) || pragma);
      decorators = compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.experimentalDecorators;
      useDefineForClassFields = compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.useDefineForClassFields;
    } // Check if we should ignore fs calls
    // See https://github.com/defunctzombie/node-browser-resolve#skip


    let ignoreFS = pkg && pkg.browser && typeof pkg.browser === 'object' && pkg.browser.fs === false;
    let result = await config.getConfigFrom(_path().default.join(options.projectRoot, 'index'), ['package.json']);
    let rootPkg = result === null || result === void 0 ? void 0 : result.contents;
    let inlineEnvironment = config.isSource;
    let inlineFS = !ignoreFS;

    if (result && rootPkg !== null && rootPkg !== void 0 && rootPkg['@parcel/transformer-js']) {
      var _rootPkg$ParcelTran, _rootPkg$ParcelTran2, _rootPkg$ParcelTran3, _rootPkg$ParcelTran4;

      _utils().validateSchema.diagnostic(CONFIG_SCHEMA, {
        data: rootPkg['@parcel/transformer-js'],
        // FIXME
        source: await options.inputFS.readFile(result.filePath, 'utf8'),
        filePath: result.filePath,
        prependKey: `/${(0, _diagnostic().encodeJSONKeyComponent)('@parcel/transformer-js')}`
      }, // FIXME
      '@parcel/transformer-js', 'Invalid config for @parcel/transformer-js');

      inlineEnvironment = (_rootPkg$ParcelTran = (_rootPkg$ParcelTran2 = rootPkg['@parcel/transformer-js']) === null || _rootPkg$ParcelTran2 === void 0 ? void 0 : _rootPkg$ParcelTran2.inlineEnvironment) !== null && _rootPkg$ParcelTran !== void 0 ? _rootPkg$ParcelTran : inlineEnvironment;
      inlineFS = (_rootPkg$ParcelTran3 = (_rootPkg$ParcelTran4 = rootPkg['@parcel/transformer-js']) === null || _rootPkg$ParcelTran4 === void 0 ? void 0 : _rootPkg$ParcelTran4.inlineFS) !== null && _rootPkg$ParcelTran3 !== void 0 ? _rootPkg$ParcelTran3 : inlineFS;
    }

    return {
      isJSX,
      automaticJSXRuntime,
      jsxImportSource,
      pragma,
      pragmaFrag,
      inlineEnvironment,
      inlineFS,
      reactRefresh,
      decorators,
      useDefineForClassFields
    };
  },

  async transform({
    asset,
    config,
    options,
    logger
  }) {
    let [code, originalMap] = await Promise.all([asset.getBuffer(), asset.getMap(), _native.init, loadOnMainThreadIfNeeded()]);
    let targets;

    if (asset.env.isElectron() && asset.env.engines.electron) {
      var _semver$minVersion2;

      targets = {
        electron: (_semver$minVersion2 = _semver().default.minVersion(asset.env.engines.electron)) === null || _semver$minVersion2 === void 0 ? void 0 : _semver$minVersion2.toString()
      };
    } else if (asset.env.isBrowser() && asset.env.engines.browsers) {
      targets = {};
      let browsers = Array.isArray(asset.env.engines.browsers) ? asset.env.engines.browsers : [asset.env.engines.browsers]; // If the output format is esmodule, exclude browsers
      // that support them natively so that we transpile less.

      if (asset.env.outputFormat === 'esmodule') {
        browsers = [...browsers, ...ESMODULE_BROWSERS];
      }

      browsers = (0, _browserslist().default)(browsers);

      for (let browser of browsers) {
        let [name, version] = browser.split(' ');

        if (BROWSER_MAPPING.hasOwnProperty(name)) {
          name = BROWSER_MAPPING[name];

          if (!name) {
            continue;
          }
        }

        let [major, minor = '0', patch = '0'] = version.split('-')[0].split('.');

        if (isNaN(major) || isNaN(minor) || isNaN(patch)) {
          continue;
        }

        let semverVersion = `${major}.${minor}.${patch}`;

        if (targets[name] == null || _semver().default.gt(targets[name], semverVersion)) {
          targets[name] = semverVersion;
        }
      }
    } else if (asset.env.isNode() && asset.env.engines.node) {
      var _semver$minVersion3;

      targets = {
        node: (_semver$minVersion3 = _semver().default.minVersion(asset.env.engines.node)) === null || _semver$minVersion3 === void 0 ? void 0 : _semver$minVersion3.toString()
      };
    }

    let env = {};

    if (!(config !== null && config !== void 0 && config.inlineEnvironment)) {
      if (options.env.NODE_ENV != null) {
        env.NODE_ENV = options.env.NODE_ENV;
      }
    } else if (Array.isArray(config === null || config === void 0 ? void 0 : config.inlineEnvironment)) {
      for (let key in options.env) {
        if ((0, _utils().isGlobMatch)(key, config.inlineEnvironment)) {
          env[key] = String(options.env[key]);
        }
      }
    } else {
      for (let key in options.env) {
        if (!key.startsWith('npm_')) {
          env[key] = String(options.env[key]);
        }
      }
    }

    let supportsModuleWorkers = asset.env.shouldScopeHoist && asset.env.supports('worker-module', true);
    let isJSX = Boolean(config === null || config === void 0 ? void 0 : config.isJSX);

    if (asset.isSource) {
      if (asset.type === 'ts') {
        isJSX = false;
      } else if (!isJSX) {
        isJSX = Boolean(JSX_EXTENSIONS[asset.type]);
      }
    }

    let {
      dependencies,
      code: compiledCode,
      map,
      shebang,
      hoist_result,
      symbol_result,
      needs_esm_helpers,
      diagnostics,
      used_env,
      has_node_replacements
    } = (0, _native.transform)({
      filename: asset.filePath,
      code,
      module_id: asset.id,
      project_root: options.projectRoot,
      replace_env: !asset.env.isNode(),
      inline_fs: Boolean(config === null || config === void 0 ? void 0 : config.inlineFS) && !asset.env.isNode(),
      insert_node_globals: !asset.env.isNode() && asset.env.sourceType !== 'script',
      node_replacer: asset.env.isNode(),
      is_browser: asset.env.isBrowser(),
      is_worker: asset.env.isWorker(),
      env,
      is_type_script: asset.type === 'ts' || asset.type === 'tsx',
      is_jsx: isJSX,
      jsx_pragma: config === null || config === void 0 ? void 0 : config.pragma,
      jsx_pragma_frag: config === null || config === void 0 ? void 0 : config.pragmaFrag,
      automatic_jsx_runtime: Boolean(config === null || config === void 0 ? void 0 : config.automaticJSXRuntime),
      jsx_import_source: config === null || config === void 0 ? void 0 : config.jsxImportSource,
      is_development: options.mode === 'development',
      react_refresh: asset.env.isBrowser() && !asset.env.isLibrary && !asset.env.isWorker() && !asset.env.isWorklet() && Boolean(config === null || config === void 0 ? void 0 : config.reactRefresh),
      decorators: Boolean(config === null || config === void 0 ? void 0 : config.decorators),
      use_define_for_class_fields: Boolean(config === null || config === void 0 ? void 0 : config.useDefineForClassFields),
      targets,
      source_maps: !!asset.env.sourceMap,
      scope_hoist: asset.env.shouldScopeHoist && asset.env.sourceType !== 'script',
      source_type: asset.env.sourceType === 'script' ? 'Script' : 'Module',
      supports_module_workers: supportsModuleWorkers,
      is_library: asset.env.isLibrary,
      is_esm_output: asset.env.outputFormat === 'esmodule',
      trace_bailouts: options.logLevel === 'verbose',
      is_swc_helpers: /@swc[/\\]helpers/.test(asset.filePath)
    });

    let convertLoc = loc => {
      var _asset$meta$startLine, _asset$meta$startLine2;

      let location = {
        filePath: asset.filePath,
        start: {
          line: loc.start_line + Number((_asset$meta$startLine = asset.meta.startLine) !== null && _asset$meta$startLine !== void 0 ? _asset$meta$startLine : 1) - 1,
          column: loc.start_col
        },
        end: {
          line: loc.end_line + Number((_asset$meta$startLine2 = asset.meta.startLine) !== null && _asset$meta$startLine2 !== void 0 ? _asset$meta$startLine2 : 1) - 1,
          column: loc.end_col
        }
      }; // If there is an original source map, use it to remap to the original source location.

      if (originalMap) {
        location = (0, _utils().remapSourceLocation)(location, originalMap);
      }

      return location;
    };

    if (diagnostics) {
      let errors = diagnostics.filter(d => d.severity === 'Error' || d.severity === 'SourceError' && asset.isSource);
      let warnings = diagnostics.filter(d => d.severity === 'Warning' || d.severity === 'SourceError' && !asset.isSource);

      let convertDiagnostic = diagnostic => {
        var _diagnostic$code_high;

        let message = diagnostic.message;

        if (message === 'SCRIPT_ERROR') {
          let err = SCRIPT_ERRORS[asset.env.context];
          message = (err === null || err === void 0 ? void 0 : err.message) || SCRIPT_ERRORS.browser.message;
        }

        let res = {
          message,
          codeFrames: [{
            filePath: asset.filePath,
            codeHighlights: (_diagnostic$code_high = diagnostic.code_highlights) === null || _diagnostic$code_high === void 0 ? void 0 : _diagnostic$code_high.map(highlight => {
              let {
                start,
                end
              } = convertLoc(highlight.loc);
              return {
                message: highlight.message,
                start,
                end
              };
            })
          }],
          hints: diagnostic.hints
        };

        if (diagnostic.documentation_url) {
          res.documentationURL = diagnostic.documentation_url;
        }

        if (diagnostic.show_environment) {
          if (asset.env.loc && asset.env.loc.filePath !== asset.filePath) {
            var _res$codeFrames;

            (_res$codeFrames = res.codeFrames) === null || _res$codeFrames === void 0 ? void 0 : _res$codeFrames.push({
              filePath: asset.env.loc.filePath,
              codeHighlights: [{
                start: asset.env.loc.start,
                end: asset.env.loc.end,
                message: 'The environment was originally created here'
              }]
            });
          }

          let err = SCRIPT_ERRORS[asset.env.context];

          if (err) {
            if (!res.hints) {
              res.hints = [err.hint];
            } else {
              res.hints.push(err.hint);
            }
          }
        }

        return res;
      };

      if (errors.length > 0) {
        throw new (_diagnostic().default)({
          diagnostic: errors.map(convertDiagnostic)
        });
      }

      logger.warn(warnings.map(convertDiagnostic));
    }

    if (shebang) {
      asset.meta.interpreter = shebang;
    }

    if (has_node_replacements) {
      asset.meta.has_node_replacements = has_node_replacements;
    }

    for (let env of used_env) {
      asset.invalidateOnEnvChange(env);
    }

    for (let dep of dependencies) {
      if (dep.kind === 'WebWorker') {
        // Use native ES module output if the worker was created with `type: 'module'` and all targets
        // support native module workers. Only do this if parent asset output format is also esmodule so that
        // assets can be shared between workers and the main thread in the global output format.
        let outputFormat;

        if (asset.env.outputFormat === 'esmodule' && dep.source_type === 'Module' && supportsModuleWorkers) {
          outputFormat = 'esmodule';
        } else {
          outputFormat = asset.env.outputFormat === 'commonjs' ? 'commonjs' : 'global';
        }

        let loc = convertLoc(dep.loc);
        asset.addURLDependency(dep.specifier, {
          loc,
          env: {
            context: 'web-worker',
            sourceType: dep.source_type === 'Module' ? 'module' : 'script',
            outputFormat,
            loc
          },
          meta: {
            webworker: true,
            placeholder: dep.placeholder
          }
        });
      } else if (dep.kind === 'ServiceWorker') {
        let loc = convertLoc(dep.loc);
        asset.addURLDependency(dep.specifier, {
          loc,
          needsStableName: true,
          env: {
            context: 'service-worker',
            sourceType: dep.source_type === 'Module' ? 'module' : 'script',
            outputFormat: 'global',
            // TODO: module service worker support
            loc
          },
          meta: {
            placeholder: dep.placeholder
          }
        });
      } else if (dep.kind === 'Worklet') {
        let loc = convertLoc(dep.loc);
        asset.addURLDependency(dep.specifier, {
          loc,
          env: {
            context: 'worklet',
            sourceType: 'module',
            outputFormat: 'esmodule',
            // Worklets require ESM
            loc
          },
          meta: {
            placeholder: dep.placeholder
          }
        });
      } else if (dep.kind === 'Url') {
        asset.addURLDependency(dep.specifier, {
          bundleBehavior: 'isolated',
          loc: convertLoc(dep.loc),
          meta: {
            placeholder: dep.placeholder
          }
        });
      } else if (dep.kind === 'File') {
        asset.invalidateOnFileChange(dep.specifier);
      } else {
        let meta = {
          kind: dep.kind
        };

        if (dep.attributes) {
          meta.importAttributes = dep.attributes;
        }

        if (dep.placeholder) {
          meta.placeholder = dep.placeholder;
        }

        let env;

        if (dep.kind === 'DynamicImport') {
          // https://html.spec.whatwg.org/multipage/webappapis.html#hostimportmoduledynamically(referencingscriptormodule,-modulerequest,-promisecapability)
          if (asset.env.isWorklet() || asset.env.context === 'service-worker') {
            let loc = convertLoc(dep.loc);
            let diagnostic = {
              message: `import() is not allowed in ${asset.env.isWorklet() ? 'worklets' : 'service workers'}.`,
              codeFrames: [{
                filePath: asset.filePath,
                codeHighlights: [{
                  start: loc.start,
                  end: loc.end
                }]
              }],
              hints: ['Try using a static `import`.']
            };

            if (asset.env.loc) {
              diagnostic.codeFrames.push({
                filePath: asset.env.loc.filePath,
                codeHighlights: [{
                  start: asset.env.loc.start,
                  end: asset.env.loc.end,
                  message: 'The environment was originally created here'
                }]
              });
            }

            throw new (_diagnostic().default)({
              diagnostic
            });
          } // If all of the target engines support dynamic import natively,
          // we can output native ESM if scope hoisting is enabled.
          // Only do this for scripts, rather than modules in the global
          // output format so that assets can be shared between the bundles.


          let outputFormat = asset.env.outputFormat;

          if (asset.env.sourceType === 'script' && asset.env.shouldScopeHoist && asset.env.supports('dynamic-import', true)) {
            outputFormat = 'esmodule';
          }

          env = {
            sourceType: 'module',
            outputFormat,
            loc: convertLoc(dep.loc)
          };
        } // Always bundle helpers, even with includeNodeModules: false, except if this is a library.


        let isHelper = dep.is_helper && !(dep.specifier.endsWith('/jsx-runtime') || dep.specifier.endsWith('/jsx-dev-runtime'));

        if (isHelper && !asset.env.isLibrary) {
          env = { ...env,
            includeNodeModules: true
          };
        } // Add required version range for helpers.


        let range;

        if (isHelper) {
          let idx = dep.specifier.indexOf('/');

          if (dep.specifier[0] === '@') {
            idx = dep.specifier.indexOf('/', idx + 1);
          }

          let module = idx >= 0 ? dep.specifier.slice(0, idx) : dep.specifier;
          range = _package.default.dependencies[module];
        }

        asset.addDependency({
          specifier: dep.specifier,
          specifierType: dep.kind === 'Require' ? 'commonjs' : 'esm',
          loc: convertLoc(dep.loc),
          priority: dep.kind === 'DynamicImport' ? 'lazy' : 'sync',
          isOptional: dep.is_optional,
          meta,
          resolveFrom: isHelper ? __filename : undefined,
          range,
          env
        });
      }
    }

    asset.meta.id = asset.id;

    if (hoist_result) {
      asset.symbols.ensure();

      for (let {
        exported,
        local,
        loc
      } of hoist_result.exported_symbols) {
        asset.symbols.set(exported, local, convertLoc(loc));
      } // deps is a map of dependencies that are keyed by placeholder or specifier
      // If a placeholder is present, that is used first since placeholders are
      // hashed with DependencyKind's.
      // If not, the specifier is used along with its specifierType appended to
      // it to separate dependencies with the same specifier.


      let deps = new Map(asset.getDependencies().map(dep => {
        var _dep$meta$placeholder;

        return [(_dep$meta$placeholder = dep.meta.placeholder) !== null && _dep$meta$placeholder !== void 0 ? _dep$meta$placeholder : dep.specifier, dep];
      }));

      for (let dep of deps.values()) {
        dep.symbols.ensure();
      }

      for (let {
        source,
        local,
        imported,
        loc
      } of hoist_result.imported_symbols) {
        let dep = deps.get(source);
        if (!dep) continue;
        dep.symbols.set(imported, local, convertLoc(loc));
      }

      for (let {
        source,
        local,
        imported,
        loc
      } of hoist_result.re_exports) {
        let dep = deps.get(source);
        if (!dep) continue;

        if (local === '*' && imported === '*') {
          dep.symbols.set('*', '*', convertLoc(loc), true);
        } else {
          var _dep$symbols$get$loca, _dep$symbols$get;

          let reExportName = (_dep$symbols$get$loca = (_dep$symbols$get = dep.symbols.get(imported)) === null || _dep$symbols$get === void 0 ? void 0 : _dep$symbols$get.local) !== null && _dep$symbols$get$loca !== void 0 ? _dep$symbols$get$loca : `$${asset.id}$re_export$${local}`;
          asset.symbols.set(local, reExportName);
          dep.symbols.set(imported, reExportName, convertLoc(loc), true);
        }
      }

      for (let specifier of hoist_result.wrapped_requires) {
        let dep = deps.get(specifier);
        if (!dep) continue;
        dep.meta.shouldWrap = true;
      }

      for (let name in hoist_result.dynamic_imports) {
        let dep = deps.get(hoist_result.dynamic_imports[name]);
        if (!dep) continue;
        dep.meta.promiseSymbol = name;
      }

      if (hoist_result.self_references.length > 0) {
        let symbols = new Map();

        for (let name of hoist_result.self_references) {
          // Do not create a self-reference for the `default` symbol unless we have seen an __esModule flag.
          if (name === 'default' && !asset.symbols.hasExportSymbol('__esModule')) {
            continue;
          }

          let local = (0, _nullthrows().default)(asset.symbols.get(name)).local;
          symbols.set(name, {
            local,
            isWeak: false,
            loc: null
          });
        }

        asset.addDependency({
          specifier: `./${_path().default.basename(asset.filePath)}`,
          specifierType: 'esm',
          symbols
        });
      } // Add * symbol if there are CJS exports, no imports/exports at all, or the asset is wrapped.
      // This allows accessing symbols that don't exist without errors in symbol propagation.


      if (hoist_result.has_cjs_exports || !hoist_result.is_esm && deps.size === 0 && Object.keys(hoist_result.exported_symbols).length === 0 || hoist_result.should_wrap && !asset.symbols.hasExportSymbol('*')) {
        asset.symbols.set('*', `$${asset.id}$exports`);
      }

      asset.meta.hasCJSExports = hoist_result.has_cjs_exports;
      asset.meta.staticExports = hoist_result.static_cjs_exports;
      asset.meta.shouldWrap = hoist_result.should_wrap;
    } else {
      if (symbol_result) {
        let deps = new Map(asset.getDependencies().map(dep => {
          var _dep$meta$placeholder2;

          return [(_dep$meta$placeholder2 = dep.meta.placeholder) !== null && _dep$meta$placeholder2 !== void 0 ? _dep$meta$placeholder2 : dep.specifier, dep];
        }));
        asset.symbols.ensure();

        for (let {
          exported,
          local,
          loc,
          source
        } of symbol_result.exports) {
          var _dep$id;

          let dep = source ? deps.get(source) : undefined;
          asset.symbols.set(exported, `${(_dep$id = dep === null || dep === void 0 ? void 0 : dep.id) !== null && _dep$id !== void 0 ? _dep$id : ''}$${local}`, convertLoc(loc));

          if (dep != null) {
            var _dep$id2;

            dep.symbols.ensure();
            dep.symbols.set(local, `${(_dep$id2 = dep === null || dep === void 0 ? void 0 : dep.id) !== null && _dep$id2 !== void 0 ? _dep$id2 : ''}$${local}`, convertLoc(loc), true);
          }
        }

        for (let {
          source,
          local,
          imported,
          loc
        } of symbol_result.imports) {
          let dep = deps.get(source);
          if (!dep) continue;
          dep.symbols.ensure();
          dep.symbols.set(imported, local, convertLoc(loc));
        }

        for (let {
          source,
          loc
        } of symbol_result.exports_all) {
          let dep = deps.get(source);
          if (!dep) continue;
          dep.symbols.ensure();
          dep.symbols.set('*', '*', convertLoc(loc), true);
        }
      }

      if (needs_esm_helpers) {
        asset.addDependency({
          specifier: '@parcel/transformer-js/src/esmodule-helpers.js',
          specifierType: 'esm',
          resolveFrom: __filename,
          env: {
            includeNodeModules: {
              '@parcel/transformer-js': true
            }
          }
        });
      }
    }

    asset.type = 'js';
    asset.setBuffer(compiledCode);

    if (map) {
      let sourceMap = new (_sourceMap().default)(options.projectRoot);
      sourceMap.addVLQMap(JSON.parse(map));

      if (originalMap) {
        sourceMap.extends(originalMap);
      }

      asset.setMap(sourceMap);
    }

    return [asset];
  }

}); // On linux with older versions of glibc (e.g. CentOS 7), we encounter a segmentation fault
// when worker threads exit due to thread local variables used by SWC. A workaround is to
// also load the native module on the main thread, so that it is not unloaded until process exit.
// See https://github.com/rust-lang/rust/issues/91979.


exports.default = _default;
let isLoadedOnMainThread = false;

async function loadOnMainThreadIfNeeded() {
  if (!isLoadedOnMainThread && process.platform === 'linux' && _workers().default.isWorker()) {
    let {
      family,
      version
    } = require('detect-libc');

    if (family === 'glibc' && parseFloat(version) <= 2.17) {
      let api = _workers().default.getWorkerApi();

      await api.callMaster({
        location: __dirname + '/loadNative.js',
        args: []
      });
      isLoadedOnMainThread = true;
    }
  }
}