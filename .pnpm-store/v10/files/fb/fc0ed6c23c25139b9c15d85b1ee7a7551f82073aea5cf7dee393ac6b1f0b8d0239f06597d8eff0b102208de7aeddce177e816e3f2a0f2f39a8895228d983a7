"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResolverRunner = void 0;
exports.default = createPathRequest;

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = require("@parcel/logger");

  _logger = function () {
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

var _ReporterRunner = require("../ReporterRunner");

var _Dependency = _interopRequireDefault(require("../public/Dependency"));

var _PluginOptions = _interopRequireDefault(require("../public/PluginOptions"));

var _ParcelConfig = _interopRequireDefault(require("../ParcelConfig"));

var _ParcelConfigRequest = _interopRequireWildcard(require("./ParcelConfigRequest"));

var _utils2 = require("../utils");

var _projectPath = require("../projectPath");

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const type = 'path_request';
const PIPELINE_REGEX = /^([a-z0-9-]+?):(.*)$/i;

function createPathRequest(input) {
  return {
    id: input.dependency.id + ':' + input.name,
    type,
    run,
    input
  };
}

async function run({
  input,
  api,
  options
}) {
  let configResult = (0, _nullthrows().default)(await api.runRequest((0, _ParcelConfigRequest.default)()));
  let config = (0, _ParcelConfigRequest.getCachedParcelConfig)(configResult, options);
  let resolverRunner = new ResolverRunner({
    options,
    config
  });
  let result = await resolverRunner.resolve(input.dependency);

  if (result.invalidateOnEnvChange) {
    for (let env of result.invalidateOnEnvChange) {
      api.invalidateOnEnvChange(env);
    }
  }

  if (result.invalidateOnFileCreate) {
    for (let file of result.invalidateOnFileCreate) {
      api.invalidateOnFileCreate((0, _utils2.invalidateOnFileCreateToInternal)(options.projectRoot, file));
    }
  }

  if (result.invalidateOnFileChange) {
    for (let filePath of result.invalidateOnFileChange) {
      let pp = (0, _projectPath.toProjectPath)(options.projectRoot, filePath);
      api.invalidateOnFileUpdate(pp);
      api.invalidateOnFileDelete(pp);
    }
  }

  if (result.assetGroup) {
    api.invalidateOnFileDelete(result.assetGroup.filePath);
    return result.assetGroup;
  }

  if (result.diagnostics && result.diagnostics.length > 0) {
    let err = new (_diagnostic().default)({
      diagnostic: result.diagnostics
    }); // $FlowFixMe[prop-missing]

    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }
}

class ResolverRunner {
  constructor({
    config,
    options
  }) {
    this.config = config;
    this.options = options;
    this.pluginOptions = new _PluginOptions.default(this.options);
  }

  async getDiagnostic(dependency, message) {
    let diagnostic = {
      message,
      origin: '@parcel/core'
    };

    if (dependency.loc && dependency.sourcePath != null) {
      let filePath = (0, _projectPath.fromProjectPath)(this.options.projectRoot, dependency.sourcePath);
      diagnostic.codeFrames = [{
        filePath,
        code: await this.options.inputFS.readFile(filePath, 'utf8'),
        codeHighlights: dependency.loc ? [{
          start: dependency.loc.start,
          end: dependency.loc.end
        }] : []
      }];
    }

    return diagnostic;
  }

  async resolve(dependency) {
    var _dependency$resolveFr;

    let dep = new _Dependency.default(dependency, this.options);
    (0, _ReporterRunner.report)({
      type: 'buildProgress',
      phase: 'resolving',
      dependency: dep
    });
    let resolvers = await this.config.getResolvers();
    let pipeline;
    let specifier;
    let validPipelines = new Set(this.config.getNamedPipelines());
    let match = dependency.specifier.match(PIPELINE_REGEX);

    if (match && // Don't consider absolute paths. Absolute paths are only supported for entries,
    // and include e.g. `C:\` on Windows, conflicting with pipelines.
    !_path().default.isAbsolute(dependency.specifier)) {
      [, pipeline, specifier] = match;

      if (!validPipelines.has(pipeline)) {
        // This may be a url protocol or scheme rather than a pipeline, such as
        // `url('http://example.com/foo.png')`. Pass it to resolvers to handle.
        specifier = dependency.specifier;
        pipeline = null;
      }
    } else {
      specifier = dependency.specifier;
    } // Entrypoints, convert ProjectPath in module specifier to absolute path


    if (dep.resolveFrom == null) {
      specifier = _path().default.join(this.options.projectRoot, specifier);
    }

    let diagnostics = [];
    let invalidateOnFileCreate = [];
    let invalidateOnFileChange = [];
    let invalidateOnEnvChange = [];

    for (let resolver of resolvers) {
      try {
        let result = await resolver.plugin.resolve({
          specifier,
          pipeline,
          dependency: dep,
          options: this.pluginOptions,
          logger: new (_logger().PluginLogger)({
            origin: resolver.name
          })
        });

        if (result) {
          if (result.meta) {
            dependency.resolverMeta = result.meta;
            dependency.meta = { ...dependency.meta,
              ...result.meta
            };
          }

          if (result.priority != null) {
            dependency.priority = _types.Priority[result.priority];
          }

          if (result.invalidateOnEnvChange) {
            invalidateOnEnvChange.push(...result.invalidateOnEnvChange);
          }

          if (result.invalidateOnFileCreate) {
            invalidateOnFileCreate.push(...result.invalidateOnFileCreate);
          }

          if (result.invalidateOnFileChange) {
            invalidateOnFileChange.push(...result.invalidateOnFileChange);
          }

          if (result.isExcluded) {
            return {
              assetGroup: null,
              invalidateOnFileCreate,
              invalidateOnFileChange,
              invalidateOnEnvChange
            };
          }

          if (result.filePath != null) {
            var _result$query, _pipeline;

            let resultFilePath = result.filePath;

            if (!_path().default.isAbsolute(resultFilePath)) {
              throw new Error((0, _diagnostic().md)`Resolvers must return an absolute path, ${resolver.name} returned: ${resultFilePath}`);
            }

            return {
              assetGroup: {
                canDefer: result.canDefer,
                filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, resultFilePath),
                query: (_result$query = result.query) === null || _result$query === void 0 ? void 0 : _result$query.toString(),
                sideEffects: result.sideEffects,
                code: result.code,
                env: dependency.env,
                pipeline: result.pipeline === undefined ? (_pipeline = pipeline) !== null && _pipeline !== void 0 ? _pipeline : dependency.pipeline : result.pipeline,
                isURL: dep.specifierType === 'url'
              },
              invalidateOnFileCreate,
              invalidateOnFileChange,
              invalidateOnEnvChange
            };
          }

          if (result.diagnostics) {
            let errorDiagnostic = (0, _diagnostic().errorToDiagnostic)(new (_diagnostic().default)({
              diagnostic: result.diagnostics
            }), {
              origin: resolver.name,
              filePath: specifier
            });
            diagnostics.push(...errorDiagnostic);
          }
        }
      } catch (e) {
        // Add error to error map, we'll append these to the standard error if we can't resolve the asset
        let errorDiagnostic = (0, _diagnostic().errorToDiagnostic)(e, {
          origin: resolver.name,
          filePath: specifier
        });

        if (Array.isArray(errorDiagnostic)) {
          diagnostics.push(...errorDiagnostic);
        } else {
          diagnostics.push(errorDiagnostic);
        }

        break;
      }
    }

    if (dep.isOptional) {
      return {
        assetGroup: null,
        invalidateOnFileCreate,
        invalidateOnFileChange,
        invalidateOnEnvChange
      };
    }

    let resolveFrom = (_dependency$resolveFr = dependency.resolveFrom) !== null && _dependency$resolveFr !== void 0 ? _dependency$resolveFr : dependency.sourcePath;
    let dir = resolveFrom != null ? (0, _utils().normalizePath)((0, _projectPath.fromProjectPathRelative)(resolveFrom)) : '';
    let diagnostic = await this.getDiagnostic(dependency, (0, _diagnostic().md)`Failed to resolve '${dependency.specifier}' ${dir ? `from '${dir}'` : ''}`);
    diagnostics.unshift(diagnostic);
    return {
      assetGroup: null,
      invalidateOnFileCreate,
      invalidateOnFileChange,
      invalidateOnEnvChange,
      diagnostics
    };
  }

}

exports.ResolverRunner = ResolverRunner;