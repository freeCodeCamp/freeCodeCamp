// @flow strict-local
import type {Diagnostic} from '@parcel/diagnostic';
import type {Async, FileCreateInvalidation, FilePath} from '@parcel/types';
import type {StaticRunOpts} from '../RequestTracker';
import type {AssetGroup, Dependency, ParcelOptions} from '../types';
import type {ConfigAndCachePath} from './ParcelConfigRequest';

import ThrowableDiagnostic, {errorToDiagnostic, md} from '@parcel/diagnostic';
import {PluginLogger} from '@parcel/logger';
import nullthrows from 'nullthrows';
import path from 'path';
import {normalizePath} from '@parcel/utils';
import {report} from '../ReporterRunner';
import PublicDependency from '../public/Dependency';
import PluginOptions from '../public/PluginOptions';
import ParcelConfig from '../ParcelConfig';
import createParcelConfigRequest, {
  getCachedParcelConfig,
} from './ParcelConfigRequest';
import {invalidateOnFileCreateToInternal} from '../utils';
import {
  fromProjectPath,
  fromProjectPathRelative,
  toProjectPath,
} from '../projectPath';
import {Priority} from '../types';

export type PathRequest = {|
  id: string,
  +type: 'path_request',
  run: (RunOpts<?AssetGroup>) => Async<?AssetGroup>,
  input: PathRequestInput,
|};

export type PathRequestInput = {|
  dependency: Dependency,
  name: string,
|};

type RunOpts<TResult> = {|
  input: PathRequestInput,
  ...StaticRunOpts<TResult>,
|};

const type = 'path_request';
const PIPELINE_REGEX = /^([a-z0-9-]+?):(.*)$/i;

export default function createPathRequest(
  input: PathRequestInput,
): PathRequest {
  return {
    id: input.dependency.id + ':' + input.name,
    type,
    run,
    input,
  };
}

async function run({input, api, options}) {
  let configResult = nullthrows(
    await api.runRequest<null, ConfigAndCachePath>(createParcelConfigRequest()),
  );
  let config = getCachedParcelConfig(configResult, options);
  let resolverRunner = new ResolverRunner({
    options,
    config,
  });
  let result: ResolverResult = await resolverRunner.resolve(input.dependency);

  if (result.invalidateOnEnvChange) {
    for (let env of result.invalidateOnEnvChange) {
      api.invalidateOnEnvChange(env);
    }
  }

  if (result.invalidateOnFileCreate) {
    for (let file of result.invalidateOnFileCreate) {
      api.invalidateOnFileCreate(
        invalidateOnFileCreateToInternal(options.projectRoot, file),
      );
    }
  }

  if (result.invalidateOnFileChange) {
    for (let filePath of result.invalidateOnFileChange) {
      let pp = toProjectPath(options.projectRoot, filePath);
      api.invalidateOnFileUpdate(pp);
      api.invalidateOnFileDelete(pp);
    }
  }

  if (result.assetGroup) {
    api.invalidateOnFileDelete(result.assetGroup.filePath);
    return result.assetGroup;
  }

  if (result.diagnostics && result.diagnostics.length > 0) {
    let err = new ThrowableDiagnostic({diagnostic: result.diagnostics});
    // $FlowFixMe[prop-missing]
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }
}

type ResolverRunnerOpts = {|
  config: ParcelConfig,
  options: ParcelOptions,
|};

type ResolverResult = {|
  assetGroup: ?AssetGroup,
  invalidateOnFileCreate?: Array<FileCreateInvalidation>,
  invalidateOnFileChange?: Array<FilePath>,
  invalidateOnEnvChange?: Array<string>,
  diagnostics?: Array<Diagnostic>,
|};

export class ResolverRunner {
  config: ParcelConfig;
  options: ParcelOptions;
  pluginOptions: PluginOptions;

  constructor({config, options}: ResolverRunnerOpts) {
    this.config = config;
    this.options = options;
    this.pluginOptions = new PluginOptions(this.options);
  }

  async getDiagnostic(
    dependency: Dependency,
    message: string,
  ): Async<Diagnostic> {
    let diagnostic: Diagnostic = {
      message,
      origin: '@parcel/core',
    };

    if (dependency.loc && dependency.sourcePath != null) {
      let filePath = fromProjectPath(
        this.options.projectRoot,
        dependency.sourcePath,
      );
      diagnostic.codeFrames = [
        {
          filePath,
          code: await this.options.inputFS.readFile(filePath, 'utf8'),
          codeHighlights: dependency.loc
            ? [{start: dependency.loc.start, end: dependency.loc.end}]
            : [],
        },
      ];
    }

    return diagnostic;
  }

  async resolve(dependency: Dependency): Promise<ResolverResult> {
    let dep = new PublicDependency(dependency, this.options);
    report({
      type: 'buildProgress',
      phase: 'resolving',
      dependency: dep,
    });

    let resolvers = await this.config.getResolvers();

    let pipeline;
    let specifier;
    let validPipelines = new Set(this.config.getNamedPipelines());
    let match = dependency.specifier.match(PIPELINE_REGEX);
    if (
      match &&
      // Don't consider absolute paths. Absolute paths are only supported for entries,
      // and include e.g. `C:\` on Windows, conflicting with pipelines.
      !path.isAbsolute(dependency.specifier)
    ) {
      [, pipeline, specifier] = match;
      if (!validPipelines.has(pipeline)) {
        // This may be a url protocol or scheme rather than a pipeline, such as
        // `url('http://example.com/foo.png')`. Pass it to resolvers to handle.
        specifier = dependency.specifier;
        pipeline = null;
      }
    } else {
      specifier = dependency.specifier;
    }

    // Entrypoints, convert ProjectPath in module specifier to absolute path
    if (dep.resolveFrom == null) {
      specifier = path.join(this.options.projectRoot, specifier);
    }
    let diagnostics: Array<Diagnostic> = [];
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
          logger: new PluginLogger({origin: resolver.name}),
        });

        if (result) {
          if (result.meta) {
            dependency.resolverMeta = result.meta;
            dependency.meta = {
              ...dependency.meta,
              ...result.meta,
            };
          }

          if (result.priority != null) {
            dependency.priority = Priority[result.priority];
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
              invalidateOnEnvChange,
            };
          }

          if (result.filePath != null) {
            let resultFilePath = result.filePath;
            if (!path.isAbsolute(resultFilePath)) {
              throw new Error(
                md`Resolvers must return an absolute path, ${resolver.name} returned: ${resultFilePath}`,
              );
            }

            return {
              assetGroup: {
                canDefer: result.canDefer,
                filePath: toProjectPath(
                  this.options.projectRoot,
                  resultFilePath,
                ),
                query: result.query?.toString(),
                sideEffects: result.sideEffects,
                code: result.code,
                env: dependency.env,
                pipeline:
                  result.pipeline === undefined
                    ? pipeline ?? dependency.pipeline
                    : result.pipeline,
                isURL: dep.specifierType === 'url',
              },
              invalidateOnFileCreate,
              invalidateOnFileChange,
              invalidateOnEnvChange,
            };
          }

          if (result.diagnostics) {
            let errorDiagnostic = errorToDiagnostic(
              new ThrowableDiagnostic({diagnostic: result.diagnostics}),
              {
                origin: resolver.name,
                filePath: specifier,
              },
            );
            diagnostics.push(...errorDiagnostic);
          }
        }
      } catch (e) {
        // Add error to error map, we'll append these to the standard error if we can't resolve the asset
        let errorDiagnostic = errorToDiagnostic(e, {
          origin: resolver.name,
          filePath: specifier,
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
        invalidateOnEnvChange,
      };
    }

    let resolveFrom = dependency.resolveFrom ?? dependency.sourcePath;
    let dir =
      resolveFrom != null
        ? normalizePath(fromProjectPathRelative(resolveFrom))
        : '';

    let diagnostic = await this.getDiagnostic(
      dependency,
      md`Failed to resolve '${dependency.specifier}' ${
        dir ? `from '${dir}'` : ''
      }`,
    );

    diagnostics.unshift(diagnostic);

    return {
      assetGroup: null,
      invalidateOnFileCreate,
      invalidateOnFileChange,
      invalidateOnEnvChange,
      diagnostics,
    };
  }
}
