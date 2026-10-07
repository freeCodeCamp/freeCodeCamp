"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetResolver = void 0;
exports.default = createTargetRequest;
exports.skipTarget = skipTarget;

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
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

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

var _Environment = require("../Environment");

var _ParcelConfigRequest = _interopRequireWildcard(require("./ParcelConfigRequest"));

function _browserslist() {
  const data = _interopRequireDefault(require("browserslist"));

  _browserslist = function () {
    return data;
  };

  return data;
}

function _jsonSourcemap() {
  const data = require("@mischnic/json-sourcemap");

  _jsonSourcemap = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

var _TargetDescriptor = require("../TargetDescriptor.schema");

var _Environment2 = require("../public/Environment");

var _utils2 = require("../utils");

var _projectPath = require("../projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// $FlowFixMe
const DEFAULT_DIST_DIRNAME = 'dist';
const JS_RE = /\.[mc]?js$/;
const JS_EXTENSIONS = ['.js', '.mjs', '.cjs'];
const COMMON_TARGETS = {
  main: {
    match: JS_RE,
    extensions: JS_EXTENSIONS
  },
  module: {
    // module field is always ESM. Don't allow .cjs extension here.
    match: /\.m?js$/,
    extensions: ['.js', '.mjs']
  },
  browser: {
    match: JS_RE,
    extensions: JS_EXTENSIONS
  },
  types: {
    match: /\.d\.ts$/,
    extensions: ['.d.ts']
  }
};
const DEFAULT_ENGINES = {
  node: 'current',
  browsers: ['last 1 Chrome version', 'last 1 Safari version', 'last 1 Firefox version', 'last 1 Edge version']
};
const type = 'target_request';

function createTargetRequest(input) {
  return {
    id: `${type}:${(0, _utils().hashObject)(input)}`,
    type,
    run,
    input
  };
}

function skipTarget(targetName, exclusiveTarget, descriptorSource) {
  //  We skip targets if they have a descriptor.source and don't match the current exclusiveTarget
  //  They will be handled by a separate resolvePackageTargets call from their Entry point
  //  but with exclusiveTarget set.
  return exclusiveTarget == null ? descriptorSource != null : targetName !== exclusiveTarget;
}

async function run({
  input,
  api,
  options
}) {
  let targetResolver = new TargetResolver(api, (0, _utils2.optionsProxy)(options, api.invalidateOnOptionChange));
  let targets = await targetResolver.resolve((0, _projectPath.fromProjectPath)(options.projectRoot, input.packagePath), input.target);
  assertTargetsAreNotEntries(targets, input, options);
  let configResult = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
  let parcelConfig = (0, _ParcelConfigRequest.getCachedParcelConfig)(configResult, options); // Find named pipelines for each target.

  let pipelineNames = new Set(parcelConfig.getNamedPipelines());

  for (let target of targets) {
    if (pipelineNames.has(target.name)) {
      target.pipeline = target.name;
    }
  }

  if (options.logLevel === 'verbose') {
    await debugResolvedTargets(input, targets, targetResolver.targetInfo, options);
  }

  return targets;
}

class TargetResolver {
  constructor(api, options) {
    this.api = api;
    this.fs = options.inputFS;
    this.options = options;
    this.targetInfo = new Map();
  }

  async resolve(rootDir, exclusiveTarget) {
    let optionTargets = this.options.targets;

    if (exclusiveTarget != null && optionTargets == null) {
      optionTargets = [exclusiveTarget];
    }

    let packageTargets = await this.resolvePackageTargets(rootDir, exclusiveTarget);
    let targets;

    if (optionTargets) {
      if (Array.isArray(optionTargets)) {
        if (optionTargets.length === 0) {
          throw new (_diagnostic().default)({
            diagnostic: {
              message: `Targets option is an empty array`,
              origin: '@parcel/core'
            }
          });
        } // Only build the intersection of the exclusive target and option targets.


        if (exclusiveTarget != null) {
          optionTargets = optionTargets.filter(target => target === exclusiveTarget);
        } // If an array of strings is passed, it's a filter on the resolved package
        // targets. Load them, and find the matching targets.


        targets = optionTargets.map(target => {
          // null means skipped.
          if (!packageTargets.has(target)) {
            throw new (_diagnostic().default)({
              diagnostic: {
                message: (0, _diagnostic().md)`Could not find target with name "${target}"`,
                origin: '@parcel/core'
              }
            });
          }

          return packageTargets.get(target);
        }).filter(Boolean);
      } else {
        // Otherwise, it's an object map of target descriptors (similar to those
        // in package.json). Adapt them to native targets.
        targets = Object.entries(optionTargets).map(([name, _descriptor]) => {
          var _descriptor$publicUrl, _descriptor$isLibrary, _descriptor$outputFor;

          let {
            distDir,
            ...descriptor
          } = parseDescriptor(name, _descriptor, null, JSON.stringify({
            targets: optionTargets
          }, null, '\t'));

          if (distDir == null) {
            let optionTargetsString = JSON.stringify(optionTargets, null, '\t');
            throw new (_diagnostic().default)({
              diagnostic: {
                message: (0, _diagnostic().md)`Missing distDir for target "${name}"`,
                origin: '@parcel/core',
                codeFrames: [{
                  code: optionTargetsString,
                  codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(optionTargetsString || '', [{
                    key: `/${name}`,
                    type: 'value'
                  }])
                }]
              }
            });
          }

          let target = {
            name,
            distDir: (0, _projectPath.toProjectPath)(this.options.projectRoot, _path().default.resolve(this.fs.cwd(), distDir)),
            publicUrl: (_descriptor$publicUrl = descriptor.publicUrl) !== null && _descriptor$publicUrl !== void 0 ? _descriptor$publicUrl : this.options.defaultTargetOptions.publicUrl,
            env: (0, _Environment.createEnvironment)({
              engines: descriptor.engines,
              context: descriptor.context,
              isLibrary: (_descriptor$isLibrary = descriptor.isLibrary) !== null && _descriptor$isLibrary !== void 0 ? _descriptor$isLibrary : this.options.defaultTargetOptions.isLibrary,
              includeNodeModules: descriptor.includeNodeModules,
              outputFormat: (_descriptor$outputFor = descriptor.outputFormat) !== null && _descriptor$outputFor !== void 0 ? _descriptor$outputFor : this.options.defaultTargetOptions.outputFormat,
              shouldOptimize: this.options.defaultTargetOptions.shouldOptimize && descriptor.optimize !== false,
              shouldScopeHoist: this.options.defaultTargetOptions.shouldScopeHoist && descriptor.scopeHoist !== false,
              sourceMap: normalizeSourceMap(this.options, descriptor.sourceMap)
            })
          };

          if (descriptor.distEntry != null) {
            target.distEntry = descriptor.distEntry;
          }

          if (descriptor.source != null) {
            target.source = descriptor.source;
          }

          return target;
        }).filter(target => !skipTarget(target.name, exclusiveTarget, target.source));
      }

      let serve = this.options.serveOptions;

      if (serve && targets.length > 0) {
        // In serve mode, we only support a single browser target. If the user
        // provided more than one, or the matching target is not a browser, throw.
        if (targets.length > 1) {
          throw new (_diagnostic().default)({
            diagnostic: {
              message: `More than one target is not supported in serve mode`,
              origin: '@parcel/core'
            }
          });
        }

        if (!_Environment2.BROWSER_ENVS.has(targets[0].env.context)) {
          throw new (_diagnostic().default)({
            diagnostic: {
              message: `Only browser targets are supported in serve mode`,
              origin: '@parcel/core'
            }
          });
        }

        targets[0].distDir = (0, _projectPath.toProjectPath)(this.options.projectRoot, serve.distDir);
      }
    } else {
      // Explicit targets were not provided. Either use a modern target for server
      // mode, or simply use the package.json targets.
      if (this.options.serveOptions) {
        var _this$options$default;

        // In serve mode, we only support a single browser target. Since the user
        // hasn't specified a target, use one targeting modern browsers for development
        targets = [{
          name: 'default',
          distDir: (0, _projectPath.toProjectPath)(this.options.projectRoot, this.options.serveOptions.distDir),
          publicUrl: (_this$options$default = this.options.defaultTargetOptions.publicUrl) !== null && _this$options$default !== void 0 ? _this$options$default : '/',
          env: (0, _Environment.createEnvironment)({
            context: 'browser',
            engines: {
              browsers: DEFAULT_ENGINES.browsers
            },
            shouldOptimize: this.options.defaultTargetOptions.shouldOptimize,
            outputFormat: this.options.defaultTargetOptions.outputFormat,
            shouldScopeHoist: this.options.defaultTargetOptions.shouldScopeHoist,
            sourceMap: this.options.defaultTargetOptions.sourceMaps ? {} : undefined
          })
        }];
      } else {
        targets = Array.from(packageTargets.values()).filter(Boolean).filter(descriptor => {
          return descriptor && !skipTarget(descriptor.name, exclusiveTarget, descriptor.source);
        });
      }
    }

    return targets;
  }

  async resolvePackageTargets(rootDir, exclusiveTarget) {
    var _ref2, _pkg$browser, _pkg$browser2;

    let rootFile = _path().default.join(rootDir, 'index');

    let conf = await (0, _utils().loadConfig)(this.fs, rootFile, ['package.json'], this.options.projectRoot);
    let rootFileProject = (0, _projectPath.toProjectPath)(this.options.projectRoot, rootFile); // Invalidate whenever a package.json file is added.

    this.api.invalidateOnFileCreate({
      fileName: 'package.json',
      aboveFilePath: rootFileProject
    });
    let pkg;
    let pkgContents;
    let pkgFilePath;
    let pkgDir;
    let pkgMap;

    if (conf) {
      pkg = conf.config;
      let pkgFile = conf.files[0];

      if (pkgFile == null) {
        throw new (_diagnostic().default)({
          diagnostic: {
            message: (0, _diagnostic().md)`Expected package.json file in ${rootDir}`,
            origin: '@parcel/core'
          }
        });
      }

      let _pkgFilePath = pkgFilePath = pkgFile.filePath; // For Flow


      pkgDir = _path().default.dirname(_pkgFilePath);
      pkgContents = await this.fs.readFile(_pkgFilePath, 'utf8');
      pkgMap = (0, _jsonSourcemap().parse)(pkgContents, undefined, {
        tabWidth: 1
      });
      let pp = (0, _projectPath.toProjectPath)(this.options.projectRoot, _pkgFilePath);
      this.api.invalidateOnFileUpdate(pp);
      this.api.invalidateOnFileDelete(pp);
    } else {
      pkg = {};
      pkgDir = this.fs.cwd();
    }

    let pkgTargets = pkg.targets || {};
    let pkgEngines = parseEngines(pkg.engines, pkgFilePath, pkgContents, '/engines', 'Invalid engines in package.json') || {};
    let browsersLoc = {
      path: '/engines/browsers'
    };
    let nodeLoc = {
      path: '/engines/node'
    };

    if (pkgEngines.browsers == null) {
      var _ref, _this$options$env$BRO;

      let env = (_ref = (_this$options$env$BRO = this.options.env.BROWSERSLIST_ENV) !== null && _this$options$env$BRO !== void 0 ? _this$options$env$BRO : this.options.env.NODE_ENV) !== null && _ref !== void 0 ? _ref : this.options.mode;

      if (pkg.browserslist != null) {
        let pkgBrowserslist = pkg.browserslist;
        let browserslist = typeof pkgBrowserslist === 'object' && !Array.isArray(pkgBrowserslist) ? pkgBrowserslist[env] : pkgBrowserslist;
        pkgEngines = { ...pkgEngines,
          browsers: browserslist
        };
        browsersLoc = {
          path: '/browserslist'
        };
      } else {
        let browserslistConfig = await (0, _utils().resolveConfig)(this.fs, _path().default.join(rootDir, 'index'), ['browserslist', '.browserslistrc'], this.options.projectRoot);
        this.api.invalidateOnFileCreate({
          fileName: 'browserslist',
          aboveFilePath: rootFileProject
        });
        this.api.invalidateOnFileCreate({
          fileName: '.browserslistrc',
          aboveFilePath: rootFileProject
        });

        if (browserslistConfig != null) {
          let contents = await this.fs.readFile(browserslistConfig, 'utf8');

          let config = _browserslist().default.parseConfig(contents);

          let browserslistBrowsers = config[env] || config.defaults;
          let pp = (0, _projectPath.toProjectPath)(this.options.projectRoot, browserslistConfig);

          if ((browserslistBrowsers === null || browserslistBrowsers === void 0 ? void 0 : browserslistBrowsers.length) > 0) {
            pkgEngines = { ...pkgEngines,
              browsers: browserslistBrowsers
            };
            browsersLoc = {
              message: `(defined in ${_path().default.relative(process.cwd(), browserslistConfig)})`
            };
          } // Invalidate whenever browserslist config file or relevant environment variables change


          this.api.invalidateOnFileUpdate(pp);
          this.api.invalidateOnFileDelete(pp);
          this.api.invalidateOnEnvChange('BROWSERSLIST_ENV');
          this.api.invalidateOnEnvChange('NODE_ENV');
        }
      }
    }

    let targets = new Map();
    let node = pkgEngines.node;
    let browsers = pkgEngines.browsers;
    let defaultEngines = this.options.defaultTargetOptions.engines;
    let context = (browsers !== null && browsers !== void 0 ? browsers : node == null) ? 'browser' : 'node';

    if (context === 'browser' && pkgEngines.browsers == null) {
      var _defaultEngines$brows;

      pkgEngines = { ...pkgEngines,
        browsers: (_defaultEngines$brows = defaultEngines === null || defaultEngines === void 0 ? void 0 : defaultEngines.browsers) !== null && _defaultEngines$brows !== void 0 ? _defaultEngines$brows : DEFAULT_ENGINES.browsers
      };
      browsersLoc = {
        message: '(default)'
      };
    } else if (context === 'node' && pkgEngines.node == null) {
      var _defaultEngines$node;

      pkgEngines = { ...pkgEngines,
        node: (_defaultEngines$node = defaultEngines === null || defaultEngines === void 0 ? void 0 : defaultEngines.node) !== null && _defaultEngines$node !== void 0 ? _defaultEngines$node : DEFAULT_ENGINES.node
      };
      nodeLoc = {
        message: '(default)'
      };
    } // If there is a separate `browser` target, or an `engines.node` field but no browser targets, then
    // the `main` and `module` targets refer to node, otherwise browser.


    let mainContext = ((_ref2 = (_pkg$browser = pkg.browser) !== null && _pkg$browser !== void 0 ? _pkg$browser : pkgTargets.browser) !== null && _ref2 !== void 0 ? _ref2 : node != null && browsers == null) ? 'node' : 'browser';
    let mainContextLoc = pkg.browser != null ? {
      inferred: '/browser',
      message: '(because a browser field also exists)',
      type: 'key'
    } : pkgTargets.browser ? {
      inferred: '/targets/browser',
      message: '(because a browser target also exists)',
      type: 'key'
    } : node != null && browsers == null ? nodeLoc.path ? {
      inferred: nodeLoc.path,
      message: '(because node engines were defined)',
      type: 'key'
    } : nodeLoc : {
      message: '(default)'
    };
    let moduleContext = ((_pkg$browser2 = pkg.browser) !== null && _pkg$browser2 !== void 0 ? _pkg$browser2 : pkgTargets.browser) ? 'browser' : mainContext;
    let moduleContextLoc = pkg.browser != null ? {
      inferred: '/browser',
      message: '(because a browser field also exists)',
      type: 'key'
    } : pkgTargets.browser ? {
      inferred: '/targets/browser',
      message: '(becausea browser target also exists)',
      type: 'key'
    } : mainContextLoc;

    let getEnginesLoc = (targetName, descriptor) => {
      let enginesLoc = `/targets/${targetName}/engines`;

      switch (context) {
        case 'browser':
        case 'web-worker':
        case 'service-worker':
        case 'worklet':
          {
            if (descriptor.engines) {
              return {
                path: enginesLoc + '/browsers'
              };
            } else {
              return browsersLoc;
            }
          }

        case 'node':
          {
            if (descriptor.engines) {
              return {
                path: enginesLoc + '/node'
              };
            } else {
              return nodeLoc;
            }
          }

        case 'electron-main':
        case 'electron-renderer':
          {
            var _descriptor$engines, _pkgEngines;

            if (((_descriptor$engines = descriptor.engines) === null || _descriptor$engines === void 0 ? void 0 : _descriptor$engines.electron) != null) {
              return {
                path: enginesLoc + '/electron'
              };
            } else if (((_pkgEngines = pkgEngines) === null || _pkgEngines === void 0 ? void 0 : _pkgEngines.electron) != null) {
              return {
                path: '/engines/electron'
              };
            }
          }
      }

      return {
        message: '(default)'
      };
    };

    for (let targetName in COMMON_TARGETS) {
      let _targetDist;

      let pointer;

      if (targetName === 'browser' && pkg[targetName] != null && typeof pkg[targetName] === 'object' && pkg.name) {
        // The `browser` field can be a file path or an alias map.
        _targetDist = pkg[targetName][pkg.name];
        pointer = `/${targetName}/${(0, _diagnostic().encodeJSONKeyComponent)(pkg.name)}`;
      } else {
        _targetDist = pkg[targetName];
        pointer = `/${targetName}`;
      } // For Flow


      let targetDist = _targetDist;

      if (typeof targetDist === 'string' || pkgTargets[targetName]) {
        var _pkgTargets$targetNam, _ref3, _ref4, _descriptor$outputFor2, _descriptor$context, _descriptor$publicUrl2, _descriptor$engines2, _descriptor$includeNo;

        let distDir;
        let distEntry;
        let loc;
        (0, _assert().default)(pkgMap != null);

        let _descriptor = (_pkgTargets$targetNam = pkgTargets[targetName]) !== null && _pkgTargets$targetNam !== void 0 ? _pkgTargets$targetNam : {};

        if (typeof targetDist === 'string') {
          distDir = (0, _projectPath.toProjectPath)(this.options.projectRoot, _path().default.resolve(pkgDir, _path().default.dirname(targetDist)));
          distEntry = _path().default.basename(targetDist);
          loc = {
            filePath: (0, _nullthrows().default)(pkgFilePath),
            ...(0, _diagnostic().getJSONSourceLocation)(pkgMap.pointers[pointer], 'value')
          };
        } else {
          var _this$options$default2;

          distDir = (_this$options$default2 = this.options.defaultTargetOptions.distDir) !== null && _this$options$default2 !== void 0 ? _this$options$default2 : (0, _projectPath.toProjectPath)(this.options.projectRoot, _path().default.join(pkgDir, DEFAULT_DIST_DIRNAME, targetName));
        }

        if (_descriptor == false) {
          continue;
        }

        let descriptor = parseCommonTargetDescriptor(targetName, _descriptor, pkgFilePath, pkgContents);

        if (skipTarget(targetName, exclusiveTarget, descriptor.source)) {
          targets.set(targetName, null);
          continue;
        }

        if (distEntry != null && !COMMON_TARGETS[targetName].match.test(distEntry)) {
          var _pkgFilePath2;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t'); // $FlowFixMe

          let listFormat = new Intl.ListFormat('en-US', {
            type: 'disjunction'
          });
          let extensions = listFormat.format(COMMON_TARGETS[targetName].extensions);

          let ext = _path().default.extname(distEntry);

          throw new (_diagnostic().default)({
            diagnostic: {
              message: (0, _diagnostic().md)`Unexpected output file type ${ext} in target "${targetName}"`,
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath2 = pkgFilePath) !== null && _pkgFilePath2 !== void 0 ? _pkgFilePath2 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: pointer,
                  type: 'value',
                  message: `File extension must be ${extensions}`
                }])
              }],
              hints: [`The "${targetName}" field is meant for libraries. If you meant to output a ${ext} file, either remove the "${targetName}" field or choose a different target name.`],
              documentationURL: 'https://parceljs.org/features/targets/#library-targets'
            }
          });
        }

        if (descriptor.outputFormat === 'global') {
          var _pkgFilePath3;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t');
          throw new (_diagnostic().default)({
            diagnostic: {
              message: (0, _diagnostic().md)`The "global" output format is not supported in the "${targetName}" target.`,
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath3 = pkgFilePath) !== null && _pkgFilePath3 !== void 0 ? _pkgFilePath3 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: `/targets/${targetName}/outputFormat`,
                  type: 'value'
                }])
              }],
              hints: [`The "${targetName}" field is meant for libraries. The outputFormat must be either "commonjs" or "esmodule". Either change or remove the declared outputFormat.`],
              documentationURL: 'https://parceljs.org/features/targets/#library-targets'
            }
          });
        }

        let [inferredOutputFormat, inferredOutputFormatField] = this.inferOutputFormat(distEntry, descriptor, targetName, pkg, pkgFilePath, pkgContents);
        let outputFormat = (_ref3 = (_ref4 = (_descriptor$outputFor2 = descriptor.outputFormat) !== null && _descriptor$outputFor2 !== void 0 ? _descriptor$outputFor2 : this.options.defaultTargetOptions.outputFormat) !== null && _ref4 !== void 0 ? _ref4 : inferredOutputFormat) !== null && _ref3 !== void 0 ? _ref3 : targetName === 'module' ? 'esmodule' : 'commonjs';
        let isModule = outputFormat === 'esmodule';

        if (targetName === 'main' && outputFormat === 'esmodule' && inferredOutputFormat !== 'esmodule') {
          var _pkgFilePath4;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t');
          throw new (_diagnostic().default)({
            diagnostic: {
              // prettier-ignore
              message: (0, _diagnostic().md)`Output format "esmodule" cannot be used in the "main" target without a .mjs extension or "type": "module" field.`,
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath4 = pkgFilePath) !== null && _pkgFilePath4 !== void 0 ? _pkgFilePath4 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: `/targets/${targetName}/outputFormat`,
                  type: 'value',
                  message: 'Declared output format defined here'
                }, {
                  key: '/main',
                  type: 'value',
                  message: 'Inferred output format defined here'
                }])
              }],
              hints: [`Either change the output file extension to .mjs, add "type": "module" to package.json, or remove the declared outputFormat.`],
              documentationURL: 'https://parceljs.org/features/targets/#library-targets'
            }
          });
        }

        if (descriptor.scopeHoist === false) {
          var _pkgFilePath5;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t');
          throw new (_diagnostic().default)({
            diagnostic: {
              message: 'Scope hoisting cannot be disabled for library targets.',
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath5 = pkgFilePath) !== null && _pkgFilePath5 !== void 0 ? _pkgFilePath5 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: `/targets/${targetName}/scopeHoist`,
                  type: 'value'
                }])
              }],
              hints: [`The "${targetName}" target is meant for libraries. Either remove the "scopeHoist" option, or use a different target name.`],
              documentationURL: 'https://parceljs.org/features/targets/#library-targets'
            }
          });
        }

        let context = (_descriptor$context = descriptor.context) !== null && _descriptor$context !== void 0 ? _descriptor$context : targetName === 'browser' ? 'browser' : isModule ? moduleContext : mainContext;
        targets.set(targetName, {
          name: targetName,
          distDir,
          distEntry,
          publicUrl: (_descriptor$publicUrl2 = descriptor.publicUrl) !== null && _descriptor$publicUrl2 !== void 0 ? _descriptor$publicUrl2 : this.options.defaultTargetOptions.publicUrl,
          env: (0, _Environment.createEnvironment)({
            engines: (_descriptor$engines2 = descriptor.engines) !== null && _descriptor$engines2 !== void 0 ? _descriptor$engines2 : pkgEngines,
            context,
            includeNodeModules: (_descriptor$includeNo = descriptor.includeNodeModules) !== null && _descriptor$includeNo !== void 0 ? _descriptor$includeNo : false,
            outputFormat,
            isLibrary: true,
            shouldOptimize: this.options.defaultTargetOptions.shouldOptimize && descriptor.optimize === true,
            shouldScopeHoist: true,
            sourceMap: normalizeSourceMap(this.options, descriptor.sourceMap)
          }),
          loc: (0, _utils2.toInternalSourceLocation)(this.options.projectRoot, loc)
        });
        this.targetInfo.set(targetName, {
          output: {
            path: pointer
          },
          engines: getEnginesLoc(targetName, descriptor),
          context: descriptor.context ? {
            path: `/targets/${targetName}/context`
          } : targetName === 'browser' ? {
            message: '(inferred from target name)',
            inferred: pointer,
            type: 'key'
          } : isModule ? moduleContextLoc : mainContextLoc,
          includeNodeModules: descriptor.includeNodeModules ? {
            path: `/targets/${targetName}/includeNodeModules`,
            type: 'key'
          } : {
            message: '(default)'
          },
          outputFormat: descriptor.outputFormat ? {
            path: `/targets/${targetName}/outputFormat`
          } : inferredOutputFormatField === '/type' ? {
            message: `(inferred from package.json#type)`,
            inferred: inferredOutputFormatField
          } : inferredOutputFormatField != null ? {
            message: `(inferred from file extension)`,
            inferred: inferredOutputFormatField
          } : {
            message: '(default)'
          },
          isLibrary: {
            message: '(default)'
          },
          shouldOptimize: descriptor.optimize ? {
            path: `/targets/${targetName}/optimize`
          } : {
            message: '(default)'
          },
          shouldScopeHoist: {
            message: '(default)'
          }
        });
      }
    }

    let customTargets = Object.keys(pkgTargets).filter(targetName => !COMMON_TARGETS[targetName]); // Custom targets

    for (let targetName of customTargets) {
      let distPath = pkg[targetName];
      let distDir;
      let distEntry;
      let loc;
      let pointer;

      if (distPath == null) {
        var _fromProjectPath;

        distDir = (_fromProjectPath = (0, _projectPath.fromProjectPath)(this.options.projectRoot, this.options.defaultTargetOptions.distDir)) !== null && _fromProjectPath !== void 0 ? _fromProjectPath : _path().default.join(pkgDir, DEFAULT_DIST_DIRNAME);

        if (customTargets.length >= 2) {
          distDir = _path().default.join(distDir, targetName);
        }
      } else {
        if (typeof distPath !== 'string') {
          var _pkgFilePath6;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t');
          throw new (_diagnostic().default)({
            diagnostic: {
              message: (0, _diagnostic().md)`Invalid distPath for target "${targetName}"`,
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath6 = pkgFilePath) !== null && _pkgFilePath6 !== void 0 ? _pkgFilePath6 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: `/${targetName}`,
                  type: 'value',
                  message: 'Expected type string'
                }])
              }]
            }
          });
        }

        distDir = _path().default.resolve(pkgDir, _path().default.dirname(distPath));
        distEntry = _path().default.basename(distPath);
        (0, _assert().default)(typeof pkgFilePath === 'string');
        (0, _assert().default)(pkgMap != null);
        loc = {
          filePath: pkgFilePath,
          ...(0, _diagnostic().getJSONSourceLocation)(pkgMap.pointers[`/${targetName}`], 'value')
        };
        pointer = `/${targetName}`;
      }

      if (targetName in pkgTargets) {
        var _ref5, _descriptor$isLibrary2, _descriptor$publicUrl3, _descriptor$engines3, _ref6, _ref7, _descriptor$outputFor3;

        let descriptor = parsePackageDescriptor(targetName, pkgTargets[targetName], pkgFilePath, pkgContents);

        let pkgDir = _path().default.dirname((0, _nullthrows().default)(pkgFilePath));

        if (skipTarget(targetName, exclusiveTarget, descriptor.source)) {
          targets.set(targetName, null);
          continue;
        }

        let [inferredOutputFormat, inferredOutputFormatField] = this.inferOutputFormat(distEntry, descriptor, targetName, pkg, pkgFilePath, pkgContents);

        if (descriptor.scopeHoist === false && descriptor.isLibrary) {
          var _pkgFilePath7;

          let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
          JSON.stringify(pkgContents, null, '\t');
          throw new (_diagnostic().default)({
            diagnostic: {
              message: 'Scope hoisting cannot be disabled for library targets.',
              origin: '@parcel/core',
              codeFrames: [{
                language: 'json',
                filePath: (_pkgFilePath7 = pkgFilePath) !== null && _pkgFilePath7 !== void 0 ? _pkgFilePath7 : undefined,
                code: contents,
                codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
                  key: `/targets/${targetName}/scopeHoist`,
                  type: 'value'
                }, {
                  key: `/targets/${targetName}/isLibrary`,
                  type: 'value'
                }])
              }],
              hints: [`Either remove the "scopeHoist" or "isLibrary" option.`],
              documentationURL: 'https://parceljs.org/features/targets/#library-targets'
            }
          });
        }

        let isLibrary = (_ref5 = (_descriptor$isLibrary2 = descriptor.isLibrary) !== null && _descriptor$isLibrary2 !== void 0 ? _descriptor$isLibrary2 : this.options.defaultTargetOptions.isLibrary) !== null && _ref5 !== void 0 ? _ref5 : false;
        let shouldScopeHoist = isLibrary ? true : this.options.defaultTargetOptions.shouldScopeHoist;
        targets.set(targetName, {
          name: targetName,
          distDir: (0, _projectPath.toProjectPath)(this.options.projectRoot, descriptor.distDir != null ? _path().default.resolve(pkgDir, descriptor.distDir) : distDir),
          distEntry,
          publicUrl: (_descriptor$publicUrl3 = descriptor.publicUrl) !== null && _descriptor$publicUrl3 !== void 0 ? _descriptor$publicUrl3 : this.options.defaultTargetOptions.publicUrl,
          env: (0, _Environment.createEnvironment)({
            engines: (_descriptor$engines3 = descriptor.engines) !== null && _descriptor$engines3 !== void 0 ? _descriptor$engines3 : pkgEngines,
            context: descriptor.context,
            includeNodeModules: descriptor.includeNodeModules,
            outputFormat: (_ref6 = (_ref7 = (_descriptor$outputFor3 = descriptor.outputFormat) !== null && _descriptor$outputFor3 !== void 0 ? _descriptor$outputFor3 : this.options.defaultTargetOptions.outputFormat) !== null && _ref7 !== void 0 ? _ref7 : inferredOutputFormat) !== null && _ref6 !== void 0 ? _ref6 : undefined,
            isLibrary,
            shouldOptimize: this.options.defaultTargetOptions.shouldOptimize && ( // Libraries are not optimized by default, users must explicitly configure this.
            isLibrary ? descriptor.optimize === true : descriptor.optimize !== false),
            shouldScopeHoist: shouldScopeHoist && descriptor.scopeHoist !== false,
            sourceMap: normalizeSourceMap(this.options, descriptor.sourceMap)
          }),
          loc: (0, _utils2.toInternalSourceLocation)(this.options.projectRoot, loc)
        });
        this.targetInfo.set(targetName, {
          output: pointer != null ? {
            path: pointer
          } : {
            message: '(default)'
          },
          engines: getEnginesLoc(targetName, descriptor),
          context: descriptor.context ? {
            path: `/targets/${targetName}/context`
          } : {
            message: '(default)'
          },
          includeNodeModules: descriptor.includeNodeModules ? {
            path: `/targets/${targetName}/includeNodeModules`,
            type: 'key'
          } : {
            message: '(default)'
          },
          outputFormat: descriptor.outputFormat ? {
            path: `/targets/${targetName}/outputFormat`
          } : inferredOutputFormatField === '/type' ? {
            message: `(inferred from package.json#type)`,
            inferred: inferredOutputFormatField
          } : inferredOutputFormatField != null ? {
            message: `(inferred from file extension)`,
            inferred: inferredOutputFormatField
          } : {
            message: '(default)'
          },
          isLibrary: descriptor.isLibrary != null ? {
            path: `/targets/${targetName}/isLibrary`
          } : {
            message: '(default)'
          },
          shouldOptimize: descriptor.optimize != null ? {
            path: `/targets/${targetName}/optimize`
          } : {
            message: '(default)'
          },
          shouldScopeHoist: descriptor.scopeHoist != null ? {
            path: `/targets/${targetName}/scopeHoist`
          } : {
            message: '(default)'
          }
        });
      }
    } // If no explicit targets were defined, add a default.


    if (targets.size === 0) {
      var _this$options$default3, _this$options$default4;

      targets.set('default', {
        name: 'default',
        distDir: (_this$options$default3 = this.options.defaultTargetOptions.distDir) !== null && _this$options$default3 !== void 0 ? _this$options$default3 : (0, _projectPath.toProjectPath)(this.options.projectRoot, _path().default.join(pkgDir, DEFAULT_DIST_DIRNAME)),
        publicUrl: this.options.defaultTargetOptions.publicUrl,
        env: (0, _Environment.createEnvironment)({
          engines: pkgEngines,
          context,
          outputFormat: this.options.defaultTargetOptions.outputFormat,
          isLibrary: this.options.defaultTargetOptions.isLibrary,
          shouldOptimize: this.options.defaultTargetOptions.shouldOptimize,
          shouldScopeHoist: (_this$options$default4 = this.options.defaultTargetOptions.shouldScopeHoist) !== null && _this$options$default4 !== void 0 ? _this$options$default4 : this.options.mode === 'production' && !this.options.defaultTargetOptions.isLibrary,
          sourceMap: this.options.defaultTargetOptions.sourceMaps ? {} : undefined
        })
      });
    }

    assertNoDuplicateTargets(this.options, targets, pkgFilePath, pkgContents);
    return targets;
  }

  inferOutputFormat(distEntry, descriptor, targetName, pkg, pkgFilePath, pkgContents) {
    // Infer the outputFormat based on package.json properties.
    // If the extension is .mjs it's always a module.
    // If the extension is .cjs, it's always commonjs.
    // If the "type" field is set to "module" and the extension is .js, it's a module.
    let ext = distEntry != null ? _path().default.extname(distEntry) : null;
    let inferredOutputFormat, inferredOutputFormatField;

    switch (ext) {
      case '.mjs':
        inferredOutputFormat = 'esmodule';
        inferredOutputFormatField = `/${targetName}`;
        break;

      case '.cjs':
        inferredOutputFormat = 'commonjs';
        inferredOutputFormatField = `/${targetName}`;
        break;

      case '.js':
        if (pkg.type === 'module') {
          inferredOutputFormat = 'esmodule';
          inferredOutputFormatField = '/type';
        }

        break;
    }

    if (descriptor.outputFormat && inferredOutputFormat && descriptor.outputFormat !== inferredOutputFormat) {
      let contents = typeof pkgContents === 'string' ? pkgContents : // $FlowFixMe
      JSON.stringify(pkgContents, null, '\t');
      let expectedExtensions;

      switch (descriptor.outputFormat) {
        case 'esmodule':
          expectedExtensions = ['.mjs', '.js'];
          break;

        case 'commonjs':
          expectedExtensions = ['.cjs', '.js'];
          break;

        case 'global':
          expectedExtensions = ['.js'];
          break;
      } // $FlowFixMe


      let listFormat = new Intl.ListFormat('en-US', {
        type: 'disjunction'
      });
      throw new (_diagnostic().default)({
        diagnostic: {
          message: (0, _diagnostic().md)`Declared output format "${descriptor.outputFormat}" does not match expected output format "${inferredOutputFormat}".`,
          origin: '@parcel/core',
          codeFrames: [{
            language: 'json',
            filePath: pkgFilePath !== null && pkgFilePath !== void 0 ? pkgFilePath : undefined,
            code: contents,
            codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(contents, [{
              key: `/targets/${targetName}/outputFormat`,
              type: 'value',
              message: 'Declared output format defined here'
            }, {
              key: (0, _nullthrows().default)(inferredOutputFormatField),
              type: 'value',
              message: 'Inferred output format defined here'
            }])
          }],
          hints: [inferredOutputFormatField === '/type' ? 'Either remove the target\'s declared "outputFormat" or remove the "type" field.' : `Either remove the target's declared "outputFormat" or change the extension to ${listFormat.format(expectedExtensions)}.`],
          documentationURL: 'https://parceljs.org/features/targets/#library-targets'
        }
      });
    }

    return [inferredOutputFormat, inferredOutputFormatField];
  }

}

exports.TargetResolver = TargetResolver;

function parseEngines(engines, pkgPath, pkgContents, prependKey, message) {
  if (engines === undefined) {
    return engines;
  } else {
    _utils().validateSchema.diagnostic(_TargetDescriptor.ENGINES_SCHEMA, {
      data: engines,
      source: pkgContents,
      filePath: pkgPath,
      prependKey
    }, '@parcel/core', message); // $FlowFixMe we just verified this


    return engines;
  }
}

function parseDescriptor(targetName, descriptor, pkgPath, pkgContents) {
  _utils().validateSchema.diagnostic(_TargetDescriptor.DESCRIPTOR_SCHEMA, {
    data: descriptor,
    source: pkgContents,
    filePath: pkgPath,
    prependKey: `/targets/${targetName}`
  }, '@parcel/core', `Invalid target descriptor for target "${targetName}"`); // $FlowFixMe we just verified this


  return descriptor;
}

function parsePackageDescriptor(targetName, descriptor, pkgPath, pkgContents) {
  _utils().validateSchema.diagnostic(_TargetDescriptor.PACKAGE_DESCRIPTOR_SCHEMA, {
    data: descriptor,
    source: pkgContents,
    filePath: pkgPath,
    prependKey: `/targets/${targetName}`
  }, '@parcel/core', `Invalid target descriptor for target "${targetName}"`); // $FlowFixMe we just verified this


  return descriptor;
}

function parseCommonTargetDescriptor(targetName, descriptor, pkgPath, pkgContents) {
  _utils().validateSchema.diagnostic(_TargetDescriptor.COMMON_TARGET_DESCRIPTOR_SCHEMA, {
    data: descriptor,
    source: pkgContents,
    filePath: pkgPath,
    prependKey: `/targets/${targetName}`
  }, '@parcel/core', `Invalid target descriptor for target "${targetName}"`); // $FlowFixMe we just verified this


  return descriptor;
}

function assertNoDuplicateTargets(options, targets, pkgFilePath, pkgContents) {
  // Detect duplicate targets by destination path and provide a nice error.
  // Without this, an assertion is thrown much later after naming the bundles and finding duplicates.
  let targetsByPath = new Map();

  for (let target of targets.values()) {
    if (!target) {
      continue;
    }

    let {
      distEntry
    } = target;

    if (distEntry != null) {
      var _targetsByPath$get;

      let distPath = _path().default.join((0, _projectPath.fromProjectPath)(options.projectRoot, target.distDir), distEntry);

      if (!targetsByPath.has(distPath)) {
        targetsByPath.set(distPath, []);
      }

      (_targetsByPath$get = targetsByPath.get(distPath)) === null || _targetsByPath$get === void 0 ? void 0 : _targetsByPath$get.push(target.name);
    }
  }

  let diagnostics = [];

  for (let [targetPath, targetNames] of targetsByPath) {
    if (targetNames.length > 1 && pkgContents != null && pkgFilePath != null) {
      diagnostics.push({
        message: (0, _diagnostic().md)`Multiple targets have the same destination path "${_path().default.relative(_path().default.dirname(pkgFilePath), targetPath)}"`,
        origin: '@parcel/core',
        codeFrames: [{
          language: 'json',
          filePath: pkgFilePath || undefined,
          code: pkgContents,
          codeHighlights: (0, _diagnostic().generateJSONCodeHighlights)(pkgContents, targetNames.map(t => ({
            key: `/${t}`,
            type: 'value'
          })))
        }]
      });
    }
  }

  if (diagnostics.length > 0) {
    // Only add hints to the last diagnostic so it isn't duplicated on each one
    diagnostics[diagnostics.length - 1].hints = ['Try removing the duplicate targets, or changing the destination paths.'];
    throw new (_diagnostic().default)({
      diagnostic: diagnostics
    });
  }
}

function normalizeSourceMap(options, sourceMap) {
  if (options.defaultTargetOptions.sourceMaps) {
    if (typeof sourceMap === 'boolean') {
      return sourceMap ? {} : undefined;
    } else {
      return sourceMap !== null && sourceMap !== void 0 ? sourceMap : {};
    }
  } else {
    return undefined;
  }
}

function assertTargetsAreNotEntries(targets, input, options) {
  for (const target of targets) {
    if (target.distEntry != null && (0, _projectPath.joinProjectPath)(target.distDir, target.distEntry) === input.filePath) {
      let loc = target.loc;

      let relativeEntry = _path().default.relative(process.cwd(), (0, _projectPath.fromProjectPath)(options.projectRoot, input.filePath));

      let codeFrames = [];

      if (loc) {
        codeFrames.push({
          filePath: (0, _projectPath.fromProjectPath)(options.projectRoot, loc.filePath),
          codeHighlights: [{
            start: loc.start,
            end: loc.end,
            message: 'Target defined here'
          }]
        });
        let inputLoc = input.loc;

        if (inputLoc) {
          let highlight = {
            start: inputLoc.start,
            end: inputLoc.end,
            message: 'Entry defined here'
          };

          if (inputLoc.filePath === loc.filePath) {
            codeFrames[0].codeHighlights.push(highlight);
          } else {
            codeFrames.push({
              filePath: (0, _projectPath.fromProjectPath)(options.projectRoot, inputLoc.filePath),
              codeHighlights: [highlight]
            });
          }
        }
      }

      throw new (_diagnostic().default)({
        diagnostic: {
          origin: '@parcel/core',
          message: `Target "${target.name}" is configured to overwrite entry "${relativeEntry}".`,
          codeFrames,
          hints: [(COMMON_TARGETS[target.name] ? `The "${target.name}" field is an _output_ file path so that your build can be consumed by other tools. ` : '') + `Change the "${target.name}" field to point to an output file rather than your source code.`],
          documentationURL: 'https://parceljs.org/features/targets/'
        }
      });
    }
  }
}

async function debugResolvedTargets(input, targets, targetInfo, options) {
  for (let target of targets) {
    let info = targetInfo.get(target.name);
    let loc = target.loc;

    if (!loc || !info) {
      continue;
    }

    let output = (0, _projectPath.fromProjectPath)(options.projectRoot, target.distDir);

    if (target.distEntry != null) {
      output = _path().default.join(output, target.distEntry);
    } // Resolve relevant engines for context.


    let engines;

    switch (target.env.context) {
      case 'browser':
      case 'web-worker':
      case 'service-worker':
      case 'worklet':
        {
          let browsers = target.env.engines.browsers;
          engines = Array.isArray(browsers) ? browsers.join(', ') : browsers;
          break;
        }

      case 'node':
        engines = target.env.engines.node;
        break;

      case 'electron-main':
      case 'electron-renderer':
        engines = target.env.engines.electron;
        break;
    }

    let highlights = [];

    if (input.loc) {
      highlights.push({
        start: input.loc.start,
        end: input.loc.end,
        message: 'entry defined here'
      });
    } // Read package.json where target is defined.


    let targetFilePath = (0, _projectPath.fromProjectPath)(options.projectRoot, loc.filePath);
    let contents = await options.inputFS.readFile(targetFilePath, 'utf8'); // Builds up map of code highlights for each defined/inferred path in the package.json.

    let jsonHighlights = new Map();

    for (let key in info) {
      let keyInfo = info[key];
      let path = keyInfo.path || keyInfo.inferred;

      if (!path) {
        continue;
      }

      let type = keyInfo.type || 'value';
      let highlight = jsonHighlights.get(path);

      if (!highlight) {
        highlight = {
          type: type,
          defined: '',
          inferred: []
        };
        jsonHighlights.set(path, highlight);
      } else if (highlight.type !== type) {
        highlight.type = null;
      }

      if (keyInfo.path) {
        highlight.defined = (0, _diagnostic().md)`${key} defined here`;
      }

      if (keyInfo.inferred) {
        highlight.inferred.push((0, _diagnostic().md)`${key} to be ${JSON.stringify(target.env[key])}`);
      }
    } // $FlowFixMe


    let listFormat = new Intl.ListFormat('en-US'); // Generate human friendly messages for each field.

    let highlightsWithMessages = [...jsonHighlights].map(([k, v]) => {
      let message = v.defined;

      if (v.inferred.length > 0) {
        message += (message ? ', ' : '') + 'caused ';
        message += listFormat.format(v.inferred);
      }

      return {
        key: k,
        type: v.type,
        message
      };
    }); // Get code highlights from JSON paths.

    highlights.push(...(0, _diagnostic().generateJSONCodeHighlights)(contents, highlightsWithMessages)); // Format includeNodeModules to be human readable.

    let includeNodeModules;

    if (typeof target.env.includeNodeModules === 'boolean') {
      includeNodeModules = String(target.env.includeNodeModules);
    } else if (Array.isArray(target.env.includeNodeModules)) {
      includeNodeModules = 'only ' + listFormat.format(target.env.includeNodeModules.map(m => JSON.stringify(m)));
    } else if (target.env.includeNodeModules && typeof target.env.includeNodeModules === 'object') {
      includeNodeModules = 'all except ' + listFormat.format(Object.entries(target.env.includeNodeModules).filter(([, v]) => v === false).map(([k]) => JSON.stringify(k)));
    }

    let format = v => v.message != null ? _diagnostic().md.italic(v.message) : '';

    _logger().default.verbose({
      origin: '@parcel/core',
      message: (0, _diagnostic().md)`**Target** "${target.name}"

               **Entry**: ${_path().default.relative(process.cwd(), (0, _projectPath.fromProjectPath)(options.projectRoot, input.filePath))}
              **Output**: ${_path().default.relative(process.cwd(), output)}
              **Format**: ${target.env.outputFormat} ${format(info.outputFormat)}
             **Context**: ${target.env.context} ${format(info.context)}
             **Engines**: ${engines || ''} ${format(info.engines)}
        **Library Mode**: ${String(target.env.isLibrary)} ${format(info.isLibrary)}
**Include Node Modules**: ${includeNodeModules} ${format(info.includeNodeModules)}
            **Optimize**: ${String(target.env.shouldOptimize)} ${format(info.shouldOptimize)}`,
      codeFrames: target.loc ? [{
        filePath: targetFilePath,
        codeHighlights: highlights
      }] : []
    });
  }
}