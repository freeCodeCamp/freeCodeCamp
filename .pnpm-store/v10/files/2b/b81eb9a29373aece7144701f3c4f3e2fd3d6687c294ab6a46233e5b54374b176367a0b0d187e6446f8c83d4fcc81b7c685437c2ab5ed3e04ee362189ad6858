// @flow strict-local

import type {Diagnostic} from '@parcel/diagnostic';
import type {FileSystem} from '@parcel/fs';
import type {
  Async,
  Engines,
  FilePath,
  PackageJSON,
  PackageTargetDescriptor,
  TargetDescriptor,
  OutputFormat,
} from '@parcel/types';
import type {StaticRunOpts, RunAPI} from '../RequestTracker';
import type {Entry, ParcelOptions, Target} from '../types';
import type {ConfigAndCachePath} from './ParcelConfigRequest';

import ThrowableDiagnostic, {
  generateJSONCodeHighlights,
  getJSONSourceLocation,
  encodeJSONKeyComponent,
  md,
} from '@parcel/diagnostic';
import path from 'path';
import {
  loadConfig,
  resolveConfig,
  hashObject,
  validateSchema,
} from '@parcel/utils';
import logger from '@parcel/logger';
import {createEnvironment} from '../Environment';
import createParcelConfigRequest, {
  getCachedParcelConfig,
} from './ParcelConfigRequest';
// $FlowFixMe
import browserslist from 'browserslist';
import {parse} from '@mischnic/json-sourcemap';
import invariant from 'assert';
import nullthrows from 'nullthrows';
import {
  COMMON_TARGET_DESCRIPTOR_SCHEMA,
  DESCRIPTOR_SCHEMA,
  PACKAGE_DESCRIPTOR_SCHEMA,
  ENGINES_SCHEMA,
} from '../TargetDescriptor.schema';
import {BROWSER_ENVS} from '../public/Environment';
import {optionsProxy, toInternalSourceLocation} from '../utils';
import {fromProjectPath, toProjectPath, joinProjectPath} from '../projectPath';

type RunOpts<TResult> = {|
  input: Entry,
  ...StaticRunOpts<TResult>,
|};

const DEFAULT_DIST_DIRNAME = 'dist';
const JS_RE = /\.[mc]?js$/;
const JS_EXTENSIONS = ['.js', '.mjs', '.cjs'];
const COMMON_TARGETS = {
  main: {
    match: JS_RE,
    extensions: JS_EXTENSIONS,
  },
  module: {
    // module field is always ESM. Don't allow .cjs extension here.
    match: /\.m?js$/,
    extensions: ['.js', '.mjs'],
  },
  browser: {
    match: JS_RE,
    extensions: JS_EXTENSIONS,
  },
  types: {
    match: /\.d\.ts$/,
    extensions: ['.d.ts'],
  },
};

const DEFAULT_ENGINES = {
  node: 'current',
  browsers: [
    'last 1 Chrome version',
    'last 1 Safari version',
    'last 1 Firefox version',
    'last 1 Edge version',
  ],
};

export type TargetRequest = {|
  id: string,
  +type: 'target_request',
  run: (RunOpts<Array<Target>>) => Async<Array<Target>>,
  input: Entry,
|};

const type = 'target_request';

export default function createTargetRequest(input: Entry): TargetRequest {
  return {
    id: `${type}:${hashObject(input)}`,
    type,
    run,
    input,
  };
}

export function skipTarget(
  targetName: string,
  exclusiveTarget?: FilePath,
  descriptorSource?: FilePath | Array<FilePath>,
): boolean {
  //  We skip targets if they have a descriptor.source and don't match the current exclusiveTarget
  //  They will be handled by a separate resolvePackageTargets call from their Entry point
  //  but with exclusiveTarget set.

  return exclusiveTarget == null
    ? descriptorSource != null
    : targetName !== exclusiveTarget;
}

async function run({input, api, options}) {
  let targetResolver = new TargetResolver(
    api,
    optionsProxy(options, api.invalidateOnOptionChange),
  );
  let targets: Array<Target> = await targetResolver.resolve(
    fromProjectPath(options.projectRoot, input.packagePath),
    input.target,
  );

  assertTargetsAreNotEntries(targets, input, options);

  let configResult = nullthrows(
    await api.runRequest<null, ConfigAndCachePath>(createParcelConfigRequest()),
  );
  let parcelConfig = getCachedParcelConfig(configResult, options);

  // Find named pipelines for each target.
  let pipelineNames = new Set(parcelConfig.getNamedPipelines());
  for (let target of targets) {
    if (pipelineNames.has(target.name)) {
      target.pipeline = target.name;
    }
  }

  if (options.logLevel === 'verbose') {
    await debugResolvedTargets(
      input,
      targets,
      targetResolver.targetInfo,
      options,
    );
  }

  return targets;
}

type TargetInfo = {|
  output: TargetKeyInfo,
  engines: TargetKeyInfo,
  context: TargetKeyInfo,
  includeNodeModules: TargetKeyInfo,
  outputFormat: TargetKeyInfo,
  isLibrary: TargetKeyInfo,
  shouldOptimize: TargetKeyInfo,
  shouldScopeHoist: TargetKeyInfo,
|};

type TargetKeyInfo =
  | {|
      path: string,
      type?: 'key' | 'value',
    |}
  | {|
      inferred: string,
      type?: 'key' | 'value',
      message: string,
    |}
  | {|
      message: string,
    |};

export class TargetResolver {
  fs: FileSystem;
  api: RunAPI<Array<Target>>;
  options: ParcelOptions;
  targetInfo: Map<string, TargetInfo>;

  constructor(api: RunAPI<Array<Target>>, options: ParcelOptions) {
    this.api = api;
    this.fs = options.inputFS;
    this.options = options;
    this.targetInfo = new Map();
  }

  async resolve(
    rootDir: FilePath,
    exclusiveTarget?: string,
  ): Promise<Array<Target>> {
    let optionTargets = this.options.targets;
    if (exclusiveTarget != null && optionTargets == null) {
      optionTargets = [exclusiveTarget];
    }

    let packageTargets: Map<string, Target | null> =
      await this.resolvePackageTargets(rootDir, exclusiveTarget);
    let targets: Array<Target>;
    if (optionTargets) {
      if (Array.isArray(optionTargets)) {
        if (optionTargets.length === 0) {
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: `Targets option is an empty array`,
              origin: '@parcel/core',
            },
          });
        }

        // Only build the intersection of the exclusive target and option targets.
        if (exclusiveTarget != null) {
          optionTargets = optionTargets.filter(
            target => target === exclusiveTarget,
          );
        }

        // If an array of strings is passed, it's a filter on the resolved package
        // targets. Load them, and find the matching targets.
        targets = optionTargets
          .map(target => {
            // null means skipped.
            if (!packageTargets.has(target)) {
              throw new ThrowableDiagnostic({
                diagnostic: {
                  message: md`Could not find target with name "${target}"`,
                  origin: '@parcel/core',
                },
              });
            }
            return packageTargets.get(target);
          })
          .filter(Boolean);
      } else {
        // Otherwise, it's an object map of target descriptors (similar to those
        // in package.json). Adapt them to native targets.
        targets = Object.entries(optionTargets)
          .map(([name, _descriptor]) => {
            let {distDir, ...descriptor} = parseDescriptor(
              name,
              _descriptor,
              null,
              JSON.stringify({targets: optionTargets}, null, '\t'),
            );
            if (distDir == null) {
              let optionTargetsString = JSON.stringify(
                optionTargets,
                null,
                '\t',
              );
              throw new ThrowableDiagnostic({
                diagnostic: {
                  message: md`Missing distDir for target "${name}"`,
                  origin: '@parcel/core',
                  codeFrames: [
                    {
                      code: optionTargetsString,
                      codeHighlights: generateJSONCodeHighlights(
                        optionTargetsString || '',
                        [
                          {
                            key: `/${name}`,
                            type: 'value',
                          },
                        ],
                      ),
                    },
                  ],
                },
              });
            }
            let target: Target = {
              name,
              distDir: toProjectPath(
                this.options.projectRoot,
                path.resolve(this.fs.cwd(), distDir),
              ),
              publicUrl:
                descriptor.publicUrl ??
                this.options.defaultTargetOptions.publicUrl,
              env: createEnvironment({
                engines: descriptor.engines,
                context: descriptor.context,
                isLibrary:
                  descriptor.isLibrary ??
                  this.options.defaultTargetOptions.isLibrary,
                includeNodeModules: descriptor.includeNodeModules,
                outputFormat:
                  descriptor.outputFormat ??
                  this.options.defaultTargetOptions.outputFormat,
                shouldOptimize:
                  this.options.defaultTargetOptions.shouldOptimize &&
                  descriptor.optimize !== false,
                shouldScopeHoist:
                  this.options.defaultTargetOptions.shouldScopeHoist &&
                  descriptor.scopeHoist !== false,
                sourceMap: normalizeSourceMap(
                  this.options,
                  descriptor.sourceMap,
                ),
              }),
            };

            if (descriptor.distEntry != null) {
              target.distEntry = descriptor.distEntry;
            }

            if (descriptor.source != null) {
              target.source = descriptor.source;
            }

            return target;
          })
          .filter(
            target => !skipTarget(target.name, exclusiveTarget, target.source),
          );
      }

      let serve = this.options.serveOptions;
      if (serve && targets.length > 0) {
        // In serve mode, we only support a single browser target. If the user
        // provided more than one, or the matching target is not a browser, throw.
        if (targets.length > 1) {
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: `More than one target is not supported in serve mode`,
              origin: '@parcel/core',
            },
          });
        }
        if (!BROWSER_ENVS.has(targets[0].env.context)) {
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: `Only browser targets are supported in serve mode`,
              origin: '@parcel/core',
            },
          });
        }
        targets[0].distDir = toProjectPath(
          this.options.projectRoot,
          serve.distDir,
        );
      }
    } else {
      // Explicit targets were not provided. Either use a modern target for server
      // mode, or simply use the package.json targets.
      if (this.options.serveOptions) {
        // In serve mode, we only support a single browser target. Since the user
        // hasn't specified a target, use one targeting modern browsers for development
        targets = [
          {
            name: 'default',
            distDir: toProjectPath(
              this.options.projectRoot,
              this.options.serveOptions.distDir,
            ),
            publicUrl: this.options.defaultTargetOptions.publicUrl ?? '/',
            env: createEnvironment({
              context: 'browser',
              engines: {
                browsers: DEFAULT_ENGINES.browsers,
              },
              shouldOptimize: this.options.defaultTargetOptions.shouldOptimize,
              outputFormat: this.options.defaultTargetOptions.outputFormat,
              shouldScopeHoist:
                this.options.defaultTargetOptions.shouldScopeHoist,
              sourceMap: this.options.defaultTargetOptions.sourceMaps
                ? {}
                : undefined,
            }),
          },
        ];
      } else {
        targets = Array.from(packageTargets.values())
          .filter(Boolean)
          .filter(descriptor => {
            return (
              descriptor &&
              !skipTarget(descriptor.name, exclusiveTarget, descriptor.source)
            );
          });
      }
    }

    return targets;
  }

  async resolvePackageTargets(
    rootDir: FilePath,
    exclusiveTarget?: string,
  ): Promise<Map<string, Target | null>> {
    let rootFile = path.join(rootDir, 'index');
    let conf = await loadConfig(
      this.fs,
      rootFile,
      ['package.json'],
      this.options.projectRoot,
    );

    let rootFileProject = toProjectPath(this.options.projectRoot, rootFile);

    // Invalidate whenever a package.json file is added.
    this.api.invalidateOnFileCreate({
      fileName: 'package.json',
      aboveFilePath: rootFileProject,
    });

    let pkg;
    let pkgContents;
    let pkgFilePath: ?FilePath;
    let pkgDir: FilePath;
    let pkgMap;
    if (conf) {
      pkg = (conf.config: PackageJSON);
      let pkgFile = conf.files[0];
      if (pkgFile == null) {
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`Expected package.json file in ${rootDir}`,
            origin: '@parcel/core',
          },
        });
      }
      let _pkgFilePath = (pkgFilePath = pkgFile.filePath); // For Flow
      pkgDir = path.dirname(_pkgFilePath);
      pkgContents = await this.fs.readFile(_pkgFilePath, 'utf8');
      pkgMap = parse(pkgContents, undefined, {tabWidth: 1});

      let pp = toProjectPath(this.options.projectRoot, _pkgFilePath);
      this.api.invalidateOnFileUpdate(pp);
      this.api.invalidateOnFileDelete(pp);
    } else {
      pkg = {};
      pkgDir = this.fs.cwd();
    }

    let pkgTargets = pkg.targets || {};
    let pkgEngines: Engines =
      parseEngines(
        pkg.engines,
        pkgFilePath,
        pkgContents,
        '/engines',
        'Invalid engines in package.json',
      ) || {};
    let browsersLoc = {path: '/engines/browsers'};
    let nodeLoc = {path: '/engines/node'};
    if (pkgEngines.browsers == null) {
      let env =
        this.options.env.BROWSERSLIST_ENV ??
        this.options.env.NODE_ENV ??
        this.options.mode;

      if (pkg.browserslist != null) {
        let pkgBrowserslist = pkg.browserslist;
        let browserslist =
          typeof pkgBrowserslist === 'object' && !Array.isArray(pkgBrowserslist)
            ? pkgBrowserslist[env]
            : pkgBrowserslist;

        pkgEngines = {
          ...pkgEngines,
          browsers: browserslist,
        };

        browsersLoc = {path: '/browserslist'};
      } else {
        let browserslistConfig = await resolveConfig(
          this.fs,
          path.join(rootDir, 'index'),
          ['browserslist', '.browserslistrc'],
          this.options.projectRoot,
        );

        this.api.invalidateOnFileCreate({
          fileName: 'browserslist',
          aboveFilePath: rootFileProject,
        });

        this.api.invalidateOnFileCreate({
          fileName: '.browserslistrc',
          aboveFilePath: rootFileProject,
        });

        if (browserslistConfig != null) {
          let contents = await this.fs.readFile(browserslistConfig, 'utf8');
          let config = browserslist.parseConfig(contents);
          let browserslistBrowsers = config[env] || config.defaults;
          let pp = toProjectPath(this.options.projectRoot, browserslistConfig);

          if (browserslistBrowsers?.length > 0) {
            pkgEngines = {
              ...pkgEngines,
              browsers: browserslistBrowsers,
            };

            browsersLoc = {
              message: `(defined in ${path.relative(
                process.cwd(),
                browserslistConfig,
              )})`,
            };
          }

          // Invalidate whenever browserslist config file or relevant environment variables change
          this.api.invalidateOnFileUpdate(pp);
          this.api.invalidateOnFileDelete(pp);
          this.api.invalidateOnEnvChange('BROWSERSLIST_ENV');
          this.api.invalidateOnEnvChange('NODE_ENV');
        }
      }
    }

    let targets: Map<string, Target | null> = new Map();
    let node = pkgEngines.node;
    let browsers = pkgEngines.browsers;

    let defaultEngines = this.options.defaultTargetOptions.engines;
    let context = browsers ?? node == null ? 'browser' : 'node';
    if (context === 'browser' && pkgEngines.browsers == null) {
      pkgEngines = {
        ...pkgEngines,
        browsers: defaultEngines?.browsers ?? DEFAULT_ENGINES.browsers,
      };
      browsersLoc = {message: '(default)'};
    } else if (context === 'node' && pkgEngines.node == null) {
      pkgEngines = {
        ...pkgEngines,
        node: defaultEngines?.node ?? DEFAULT_ENGINES.node,
      };
      nodeLoc = {message: '(default)'};
    }

    // If there is a separate `browser` target, or an `engines.node` field but no browser targets, then
    // the `main` and `module` targets refer to node, otherwise browser.
    let mainContext =
      pkg.browser ?? pkgTargets.browser ?? (node != null && browsers == null)
        ? 'node'
        : 'browser';
    let mainContextLoc: TargetKeyInfo =
      pkg.browser != null
        ? {
            inferred: '/browser',
            message: '(because a browser field also exists)',
            type: 'key',
          }
        : pkgTargets.browser
        ? {
            inferred: '/targets/browser',
            message: '(because a browser target also exists)',
            type: 'key',
          }
        : node != null && browsers == null
        ? nodeLoc.path
          ? {
              inferred: nodeLoc.path,
              message: '(because node engines were defined)',
              type: 'key',
            }
          : nodeLoc
        : {message: '(default)'};
    let moduleContext =
      pkg.browser ?? pkgTargets.browser ? 'browser' : mainContext;
    let moduleContextLoc: TargetKeyInfo =
      pkg.browser != null
        ? {
            inferred: '/browser',
            message: '(because a browser field also exists)',
            type: 'key',
          }
        : pkgTargets.browser
        ? {
            inferred: '/targets/browser',
            message: '(becausea browser target also exists)',
            type: 'key',
          }
        : mainContextLoc;

    let getEnginesLoc = (targetName, descriptor): TargetKeyInfo => {
      let enginesLoc = `/targets/${targetName}/engines`;
      switch (context) {
        case 'browser':
        case 'web-worker':
        case 'service-worker':
        case 'worklet': {
          if (descriptor.engines) {
            return {path: enginesLoc + '/browsers'};
          } else {
            return browsersLoc;
          }
        }
        case 'node': {
          if (descriptor.engines) {
            return {path: enginesLoc + '/node'};
          } else {
            return nodeLoc;
          }
        }
        case 'electron-main':
        case 'electron-renderer': {
          if (descriptor.engines?.electron != null) {
            return {path: enginesLoc + '/electron'};
          } else if (pkgEngines?.electron != null) {
            return {path: '/engines/electron'};
          }
        }
      }

      return {message: '(default)'};
    };

    for (let targetName in COMMON_TARGETS) {
      let _targetDist;
      let pointer;
      if (
        targetName === 'browser' &&
        pkg[targetName] != null &&
        typeof pkg[targetName] === 'object' &&
        pkg.name
      ) {
        // The `browser` field can be a file path or an alias map.
        _targetDist = pkg[targetName][pkg.name];
        pointer = `/${targetName}/${encodeJSONKeyComponent(pkg.name)}`;
      } else {
        _targetDist = pkg[targetName];
        pointer = `/${targetName}`;
      }

      // For Flow
      let targetDist = _targetDist;
      if (typeof targetDist === 'string' || pkgTargets[targetName]) {
        let distDir;
        let distEntry;
        let loc;

        invariant(pkgMap != null);

        let _descriptor: mixed = pkgTargets[targetName] ?? {};
        if (typeof targetDist === 'string') {
          distDir = toProjectPath(
            this.options.projectRoot,
            path.resolve(pkgDir, path.dirname(targetDist)),
          );
          distEntry = path.basename(targetDist);
          loc = {
            filePath: nullthrows(pkgFilePath),
            ...getJSONSourceLocation(pkgMap.pointers[pointer], 'value'),
          };
        } else {
          distDir =
            this.options.defaultTargetOptions.distDir ??
            toProjectPath(
              this.options.projectRoot,
              path.join(pkgDir, DEFAULT_DIST_DIRNAME, targetName),
            );
        }

        if (_descriptor == false) {
          continue;
        }

        let descriptor = parseCommonTargetDescriptor(
          targetName,
          _descriptor,
          pkgFilePath,
          pkgContents,
        );

        if (skipTarget(targetName, exclusiveTarget, descriptor.source)) {
          targets.set(targetName, null);
          continue;
        }

        if (
          distEntry != null &&
          !COMMON_TARGETS[targetName].match.test(distEntry)
        ) {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          // $FlowFixMe
          let listFormat = new Intl.ListFormat('en-US', {type: 'disjunction'});
          let extensions = listFormat.format(
            COMMON_TARGETS[targetName].extensions,
          );
          let ext = path.extname(distEntry);
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: md`Unexpected output file type ${ext} in target "${targetName}"`,
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: pointer,
                      type: 'value',
                      message: `File extension must be ${extensions}`,
                    },
                  ]),
                },
              ],
              hints: [
                `The "${targetName}" field is meant for libraries. If you meant to output a ${ext} file, either remove the "${targetName}" field or choose a different target name.`,
              ],
              documentationURL:
                'https://parceljs.org/features/targets/#library-targets',
            },
          });
        }

        if (descriptor.outputFormat === 'global') {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: md`The "global" output format is not supported in the "${targetName}" target.`,
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: `/targets/${targetName}/outputFormat`,
                      type: 'value',
                    },
                  ]),
                },
              ],
              hints: [
                `The "${targetName}" field is meant for libraries. The outputFormat must be either "commonjs" or "esmodule". Either change or remove the declared outputFormat.`,
              ],
              documentationURL:
                'https://parceljs.org/features/targets/#library-targets',
            },
          });
        }

        let [inferredOutputFormat, inferredOutputFormatField] =
          this.inferOutputFormat(
            distEntry,
            descriptor,
            targetName,
            pkg,
            pkgFilePath,
            pkgContents,
          );

        let outputFormat =
          descriptor.outputFormat ??
          this.options.defaultTargetOptions.outputFormat ??
          inferredOutputFormat ??
          (targetName === 'module' ? 'esmodule' : 'commonjs');
        let isModule = outputFormat === 'esmodule';

        if (
          targetName === 'main' &&
          outputFormat === 'esmodule' &&
          inferredOutputFormat !== 'esmodule'
        ) {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          throw new ThrowableDiagnostic({
            diagnostic: {
              // prettier-ignore
              message: md`Output format "esmodule" cannot be used in the "main" target without a .mjs extension or "type": "module" field.`,
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: `/targets/${targetName}/outputFormat`,
                      type: 'value',
                      message: 'Declared output format defined here',
                    },
                    {
                      key: '/main',
                      type: 'value',
                      message: 'Inferred output format defined here',
                    },
                  ]),
                },
              ],
              hints: [
                `Either change the output file extension to .mjs, add "type": "module" to package.json, or remove the declared outputFormat.`,
              ],
              documentationURL:
                'https://parceljs.org/features/targets/#library-targets',
            },
          });
        }

        if (descriptor.scopeHoist === false) {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: 'Scope hoisting cannot be disabled for library targets.',
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: `/targets/${targetName}/scopeHoist`,
                      type: 'value',
                    },
                  ]),
                },
              ],
              hints: [
                `The "${targetName}" target is meant for libraries. Either remove the "scopeHoist" option, or use a different target name.`,
              ],
              documentationURL:
                'https://parceljs.org/features/targets/#library-targets',
            },
          });
        }

        let context =
          descriptor.context ??
          (targetName === 'browser'
            ? 'browser'
            : isModule
            ? moduleContext
            : mainContext);

        targets.set(targetName, {
          name: targetName,
          distDir,
          distEntry,
          publicUrl:
            descriptor.publicUrl ?? this.options.defaultTargetOptions.publicUrl,
          env: createEnvironment({
            engines: descriptor.engines ?? pkgEngines,
            context,
            includeNodeModules: descriptor.includeNodeModules ?? false,
            outputFormat,
            isLibrary: true,
            shouldOptimize:
              this.options.defaultTargetOptions.shouldOptimize &&
              descriptor.optimize === true,
            shouldScopeHoist: true,
            sourceMap: normalizeSourceMap(this.options, descriptor.sourceMap),
          }),
          loc: toInternalSourceLocation(this.options.projectRoot, loc),
        });

        this.targetInfo.set(targetName, {
          output: {path: pointer},
          engines: getEnginesLoc(targetName, descriptor),
          context: descriptor.context
            ? {path: `/targets/${targetName}/context`}
            : targetName === 'browser'
            ? {
                message: '(inferred from target name)',
                inferred: pointer,
                type: 'key',
              }
            : isModule
            ? moduleContextLoc
            : mainContextLoc,
          includeNodeModules: descriptor.includeNodeModules
            ? {path: `/targets/${targetName}/includeNodeModules`, type: 'key'}
            : {message: '(default)'},
          outputFormat: descriptor.outputFormat
            ? {path: `/targets/${targetName}/outputFormat`}
            : inferredOutputFormatField === '/type'
            ? {
                message: `(inferred from package.json#type)`,
                inferred: inferredOutputFormatField,
              }
            : inferredOutputFormatField != null
            ? {
                message: `(inferred from file extension)`,
                inferred: inferredOutputFormatField,
              }
            : {message: '(default)'},
          isLibrary: {message: '(default)'},
          shouldOptimize: descriptor.optimize
            ? {path: `/targets/${targetName}/optimize`}
            : {message: '(default)'},
          shouldScopeHoist: {message: '(default)'},
        });
      }
    }

    let customTargets = (Object.keys(pkgTargets): Array<string>).filter(
      targetName => !COMMON_TARGETS[targetName],
    );

    // Custom targets
    for (let targetName of customTargets) {
      let distPath: mixed = pkg[targetName];
      let distDir;
      let distEntry;
      let loc;
      let pointer;
      if (distPath == null) {
        distDir =
          fromProjectPath(
            this.options.projectRoot,
            this.options.defaultTargetOptions.distDir,
          ) ?? path.join(pkgDir, DEFAULT_DIST_DIRNAME);
        if (customTargets.length >= 2) {
          distDir = path.join(distDir, targetName);
        }
      } else {
        if (typeof distPath !== 'string') {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: md`Invalid distPath for target "${targetName}"`,
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: `/${targetName}`,
                      type: 'value',
                      message: 'Expected type string',
                    },
                  ]),
                },
              ],
            },
          });
        }
        distDir = path.resolve(pkgDir, path.dirname(distPath));
        distEntry = path.basename(distPath);

        invariant(typeof pkgFilePath === 'string');
        invariant(pkgMap != null);
        loc = {
          filePath: pkgFilePath,
          ...getJSONSourceLocation(pkgMap.pointers[`/${targetName}`], 'value'),
        };
        pointer = `/${targetName}`;
      }

      if (targetName in pkgTargets) {
        let descriptor = parsePackageDescriptor(
          targetName,
          pkgTargets[targetName],
          pkgFilePath,
          pkgContents,
        );
        let pkgDir = path.dirname(nullthrows(pkgFilePath));
        if (skipTarget(targetName, exclusiveTarget, descriptor.source)) {
          targets.set(targetName, null);
          continue;
        }

        let [inferredOutputFormat, inferredOutputFormatField] =
          this.inferOutputFormat(
            distEntry,
            descriptor,
            targetName,
            pkg,
            pkgFilePath,
            pkgContents,
          );

        if (descriptor.scopeHoist === false && descriptor.isLibrary) {
          let contents: string =
            typeof pkgContents === 'string'
              ? pkgContents
              : // $FlowFixMe
                JSON.stringify(pkgContents, null, '\t');
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: 'Scope hoisting cannot be disabled for library targets.',
              origin: '@parcel/core',
              codeFrames: [
                {
                  language: 'json',
                  filePath: pkgFilePath ?? undefined,
                  code: contents,
                  codeHighlights: generateJSONCodeHighlights(contents, [
                    {
                      key: `/targets/${targetName}/scopeHoist`,
                      type: 'value',
                    },
                    {
                      key: `/targets/${targetName}/isLibrary`,
                      type: 'value',
                    },
                  ]),
                },
              ],
              hints: [`Either remove the "scopeHoist" or "isLibrary" option.`],
              documentationURL:
                'https://parceljs.org/features/targets/#library-targets',
            },
          });
        }

        let isLibrary =
          descriptor.isLibrary ??
          this.options.defaultTargetOptions.isLibrary ??
          false;
        let shouldScopeHoist = isLibrary
          ? true
          : this.options.defaultTargetOptions.shouldScopeHoist;

        targets.set(targetName, {
          name: targetName,
          distDir: toProjectPath(
            this.options.projectRoot,
            descriptor.distDir != null
              ? path.resolve(pkgDir, descriptor.distDir)
              : distDir,
          ),
          distEntry,
          publicUrl:
            descriptor.publicUrl ?? this.options.defaultTargetOptions.publicUrl,
          env: createEnvironment({
            engines: descriptor.engines ?? pkgEngines,
            context: descriptor.context,
            includeNodeModules: descriptor.includeNodeModules,
            outputFormat:
              descriptor.outputFormat ??
              this.options.defaultTargetOptions.outputFormat ??
              inferredOutputFormat ??
              undefined,
            isLibrary,
            shouldOptimize:
              this.options.defaultTargetOptions.shouldOptimize &&
              // Libraries are not optimized by default, users must explicitly configure this.
              (isLibrary
                ? descriptor.optimize === true
                : descriptor.optimize !== false),
            shouldScopeHoist:
              shouldScopeHoist && descriptor.scopeHoist !== false,
            sourceMap: normalizeSourceMap(this.options, descriptor.sourceMap),
          }),
          loc: toInternalSourceLocation(this.options.projectRoot, loc),
        });

        this.targetInfo.set(targetName, {
          output: pointer != null ? {path: pointer} : {message: '(default)'},
          engines: getEnginesLoc(targetName, descriptor),
          context: descriptor.context
            ? {path: `/targets/${targetName}/context`}
            : {message: '(default)'},
          includeNodeModules: descriptor.includeNodeModules
            ? {path: `/targets/${targetName}/includeNodeModules`, type: 'key'}
            : {message: '(default)'},
          outputFormat: descriptor.outputFormat
            ? {path: `/targets/${targetName}/outputFormat`}
            : inferredOutputFormatField === '/type'
            ? {
                message: `(inferred from package.json#type)`,
                inferred: inferredOutputFormatField,
              }
            : inferredOutputFormatField != null
            ? {
                message: `(inferred from file extension)`,
                inferred: inferredOutputFormatField,
              }
            : {message: '(default)'},
          isLibrary:
            descriptor.isLibrary != null
              ? {path: `/targets/${targetName}/isLibrary`}
              : {message: '(default)'},
          shouldOptimize:
            descriptor.optimize != null
              ? {path: `/targets/${targetName}/optimize`}
              : {message: '(default)'},
          shouldScopeHoist:
            descriptor.scopeHoist != null
              ? {path: `/targets/${targetName}/scopeHoist`}
              : {message: '(default)'},
        });
      }
    }

    // If no explicit targets were defined, add a default.
    if (targets.size === 0) {
      targets.set('default', {
        name: 'default',
        distDir:
          this.options.defaultTargetOptions.distDir ??
          toProjectPath(
            this.options.projectRoot,
            path.join(pkgDir, DEFAULT_DIST_DIRNAME),
          ),
        publicUrl: this.options.defaultTargetOptions.publicUrl,
        env: createEnvironment({
          engines: pkgEngines,
          context,
          outputFormat: this.options.defaultTargetOptions.outputFormat,
          isLibrary: this.options.defaultTargetOptions.isLibrary,
          shouldOptimize: this.options.defaultTargetOptions.shouldOptimize,
          shouldScopeHoist:
            this.options.defaultTargetOptions.shouldScopeHoist ??
            (this.options.mode === 'production' &&
              !this.options.defaultTargetOptions.isLibrary),
          sourceMap: this.options.defaultTargetOptions.sourceMaps
            ? {}
            : undefined,
        }),
      });
    }

    assertNoDuplicateTargets(this.options, targets, pkgFilePath, pkgContents);

    return targets;
  }

  inferOutputFormat(
    distEntry: ?FilePath,
    descriptor: PackageTargetDescriptor,
    targetName: string,
    pkg: PackageJSON,
    pkgFilePath: ?FilePath,
    pkgContents: ?string,
  ): [?OutputFormat, ?string] {
    // Infer the outputFormat based on package.json properties.
    // If the extension is .mjs it's always a module.
    // If the extension is .cjs, it's always commonjs.
    // If the "type" field is set to "module" and the extension is .js, it's a module.
    let ext = distEntry != null ? path.extname(distEntry) : null;
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

    if (
      descriptor.outputFormat &&
      inferredOutputFormat &&
      descriptor.outputFormat !== inferredOutputFormat
    ) {
      let contents: string =
        typeof pkgContents === 'string'
          ? pkgContents
          : // $FlowFixMe
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
      }
      // $FlowFixMe
      let listFormat = new Intl.ListFormat('en-US', {type: 'disjunction'});
      throw new ThrowableDiagnostic({
        diagnostic: {
          message: md`Declared output format "${descriptor.outputFormat}" does not match expected output format "${inferredOutputFormat}".`,
          origin: '@parcel/core',
          codeFrames: [
            {
              language: 'json',
              filePath: pkgFilePath ?? undefined,
              code: contents,
              codeHighlights: generateJSONCodeHighlights(contents, [
                {
                  key: `/targets/${targetName}/outputFormat`,
                  type: 'value',
                  message: 'Declared output format defined here',
                },
                {
                  key: nullthrows(inferredOutputFormatField),
                  type: 'value',
                  message: 'Inferred output format defined here',
                },
              ]),
            },
          ],
          hints: [
            inferredOutputFormatField === '/type'
              ? 'Either remove the target\'s declared "outputFormat" or remove the "type" field.'
              : `Either remove the target's declared "outputFormat" or change the extension to ${listFormat.format(
                  expectedExtensions,
                )}.`,
          ],
          documentationURL:
            'https://parceljs.org/features/targets/#library-targets',
        },
      });
    }

    return [inferredOutputFormat, inferredOutputFormatField];
  }
}

function parseEngines(
  engines: mixed,
  pkgPath: ?FilePath,
  pkgContents: ?string,
  prependKey: string,
  message: string,
): Engines | typeof undefined {
  if (engines === undefined) {
    return engines;
  } else {
    validateSchema.diagnostic(
      ENGINES_SCHEMA,
      {data: engines, source: pkgContents, filePath: pkgPath, prependKey},
      '@parcel/core',
      message,
    );
    // $FlowFixMe we just verified this
    return engines;
  }
}

function parseDescriptor(
  targetName: string,
  descriptor: mixed,
  pkgPath: ?FilePath,
  pkgContents: ?string,
): TargetDescriptor {
  validateSchema.diagnostic(
    DESCRIPTOR_SCHEMA,
    {
      data: descriptor,
      source: pkgContents,
      filePath: pkgPath,
      prependKey: `/targets/${targetName}`,
    },
    '@parcel/core',
    `Invalid target descriptor for target "${targetName}"`,
  );

  // $FlowFixMe we just verified this
  return descriptor;
}

function parsePackageDescriptor(
  targetName: string,
  descriptor: mixed,
  pkgPath: ?FilePath,
  pkgContents: ?string,
): PackageTargetDescriptor {
  validateSchema.diagnostic(
    PACKAGE_DESCRIPTOR_SCHEMA,
    {
      data: descriptor,
      source: pkgContents,
      filePath: pkgPath,
      prependKey: `/targets/${targetName}`,
    },
    '@parcel/core',
    `Invalid target descriptor for target "${targetName}"`,
  );
  // $FlowFixMe we just verified this
  return descriptor;
}

function parseCommonTargetDescriptor(
  targetName: string,
  descriptor: mixed,
  pkgPath: ?FilePath,
  pkgContents: ?string,
): PackageTargetDescriptor {
  validateSchema.diagnostic(
    COMMON_TARGET_DESCRIPTOR_SCHEMA,
    {
      data: descriptor,
      source: pkgContents,
      filePath: pkgPath,
      prependKey: `/targets/${targetName}`,
    },
    '@parcel/core',
    `Invalid target descriptor for target "${targetName}"`,
  );

  // $FlowFixMe we just verified this
  return descriptor;
}

function assertNoDuplicateTargets(options, targets, pkgFilePath, pkgContents) {
  // Detect duplicate targets by destination path and provide a nice error.
  // Without this, an assertion is thrown much later after naming the bundles and finding duplicates.
  let targetsByPath: Map<string, Array<string>> = new Map();
  for (let target of targets.values()) {
    if (!target) {
      continue;
    }

    let {distEntry} = target;
    if (distEntry != null) {
      let distPath = path.join(
        fromProjectPath(options.projectRoot, target.distDir),
        distEntry,
      );
      if (!targetsByPath.has(distPath)) {
        targetsByPath.set(distPath, []);
      }
      targetsByPath.get(distPath)?.push(target.name);
    }
  }

  let diagnostics: Array<Diagnostic> = [];
  for (let [targetPath, targetNames] of targetsByPath) {
    if (targetNames.length > 1 && pkgContents != null && pkgFilePath != null) {
      diagnostics.push({
        message: md`Multiple targets have the same destination path "${path.relative(
          path.dirname(pkgFilePath),
          targetPath,
        )}"`,
        origin: '@parcel/core',
        codeFrames: [
          {
            language: 'json',
            filePath: pkgFilePath || undefined,
            code: pkgContents,
            codeHighlights: generateJSONCodeHighlights(
              pkgContents,
              targetNames.map(t => ({
                key: `/${t}`,
                type: 'value',
              })),
            ),
          },
        ],
      });
    }
  }

  if (diagnostics.length > 0) {
    // Only add hints to the last diagnostic so it isn't duplicated on each one
    diagnostics[diagnostics.length - 1].hints = [
      'Try removing the duplicate targets, or changing the destination paths.',
    ];

    throw new ThrowableDiagnostic({
      diagnostic: diagnostics,
    });
  }
}

function normalizeSourceMap(options: ParcelOptions, sourceMap) {
  if (options.defaultTargetOptions.sourceMaps) {
    if (typeof sourceMap === 'boolean') {
      return sourceMap ? {} : undefined;
    } else {
      return sourceMap ?? {};
    }
  } else {
    return undefined;
  }
}

function assertTargetsAreNotEntries(
  targets: Array<Target>,
  input: Entry,
  options: ParcelOptions,
) {
  for (const target of targets) {
    if (
      target.distEntry != null &&
      joinProjectPath(target.distDir, target.distEntry) === input.filePath
    ) {
      let loc = target.loc;
      let relativeEntry = path.relative(
        process.cwd(),
        fromProjectPath(options.projectRoot, input.filePath),
      );
      let codeFrames = [];
      if (loc) {
        codeFrames.push({
          filePath: fromProjectPath(options.projectRoot, loc.filePath),
          codeHighlights: [
            {
              start: loc.start,
              end: loc.end,
              message: 'Target defined here',
            },
          ],
        });

        let inputLoc = input.loc;
        if (inputLoc) {
          let highlight = {
            start: inputLoc.start,
            end: inputLoc.end,
            message: 'Entry defined here',
          };

          if (inputLoc.filePath === loc.filePath) {
            codeFrames[0].codeHighlights.push(highlight);
          } else {
            codeFrames.push({
              filePath: fromProjectPath(options.projectRoot, inputLoc.filePath),
              codeHighlights: [highlight],
            });
          }
        }
      }

      throw new ThrowableDiagnostic({
        diagnostic: {
          origin: '@parcel/core',
          message: `Target "${target.name}" is configured to overwrite entry "${relativeEntry}".`,
          codeFrames,
          hints: [
            (COMMON_TARGETS[target.name]
              ? `The "${target.name}" field is an _output_ file path so that your build can be consumed by other tools. `
              : '') +
              `Change the "${target.name}" field to point to an output file rather than your source code.`,
          ],
          documentationURL: 'https://parceljs.org/features/targets/',
        },
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

    let output = fromProjectPath(options.projectRoot, target.distDir);
    if (target.distEntry != null) {
      output = path.join(output, target.distEntry);
    }

    // Resolve relevant engines for context.
    let engines;
    switch (target.env.context) {
      case 'browser':
      case 'web-worker':
      case 'service-worker':
      case 'worklet': {
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
        message: 'entry defined here',
      });
    }

    // Read package.json where target is defined.
    let targetFilePath = fromProjectPath(options.projectRoot, loc.filePath);
    let contents = await options.inputFS.readFile(targetFilePath, 'utf8');

    // Builds up map of code highlights for each defined/inferred path in the package.json.
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
          inferred: [],
        };
        jsonHighlights.set(path, highlight);
      } else if (highlight.type !== type) {
        highlight.type = null;
      }

      if (keyInfo.path) {
        highlight.defined = md`${key} defined here`;
      }

      if (keyInfo.inferred) {
        highlight.inferred.push(
          md`${key} to be ${JSON.stringify(target.env[key])}`,
        );
      }
    }

    // $FlowFixMe
    let listFormat = new Intl.ListFormat('en-US');

    // Generate human friendly messages for each field.
    let highlightsWithMessages = [...jsonHighlights].map(([k, v]) => {
      let message = v.defined;
      if (v.inferred.length > 0) {
        message += (message ? ', ' : '') + 'caused ';
        message += listFormat.format(v.inferred);
      }

      return {
        key: k,
        type: v.type,
        message,
      };
    });

    // Get code highlights from JSON paths.
    highlights.push(
      ...generateJSONCodeHighlights(contents, highlightsWithMessages),
    );

    // Format includeNodeModules to be human readable.
    let includeNodeModules;
    if (typeof target.env.includeNodeModules === 'boolean') {
      includeNodeModules = String(target.env.includeNodeModules);
    } else if (Array.isArray(target.env.includeNodeModules)) {
      includeNodeModules =
        'only ' +
        listFormat.format(
          target.env.includeNodeModules.map(m => JSON.stringify(m)),
        );
    } else if (
      target.env.includeNodeModules &&
      typeof target.env.includeNodeModules === 'object'
    ) {
      includeNodeModules =
        'all except ' +
        listFormat.format(
          Object.entries(target.env.includeNodeModules)
            .filter(([, v]) => v === false)
            .map(([k]) => JSON.stringify(k)),
        );
    }

    let format = v => (v.message != null ? md.italic(v.message) : '');
    logger.verbose({
      origin: '@parcel/core',
      message: md`**Target** "${target.name}"

               **Entry**: ${path.relative(
                 process.cwd(),
                 fromProjectPath(options.projectRoot, input.filePath),
               )}
              **Output**: ${path.relative(process.cwd(), output)}
              **Format**: ${target.env.outputFormat} ${format(
        info.outputFormat,
      )}
             **Context**: ${target.env.context} ${format(info.context)}
             **Engines**: ${engines || ''} ${format(info.engines)}
        **Library Mode**: ${String(target.env.isLibrary)} ${format(
        info.isLibrary,
      )}
**Include Node Modules**: ${includeNodeModules} ${format(
        info.includeNodeModules,
      )}
            **Optimize**: ${String(target.env.shouldOptimize)} ${format(
        info.shouldOptimize,
      )}`,
      codeFrames: target.loc
        ? [
            {
              filePath: targetFilePath,
              codeHighlights: highlights,
            },
          ]
        : [],
    });
  }
}
