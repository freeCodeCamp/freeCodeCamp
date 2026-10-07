// @flow
import type {
  FilePath,
  FileCreateInvalidation,
  PackageJSON,
  ResolveResult,
  Environment,
  SpecifierType,
  PluginLogger,
  SourceLocation,
  SemverRange,
} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {PackageManager} from '@parcel/package-manager';

import invariant from 'assert';
import path from 'path';
import {
  isGlob,
  relativePath,
  normalizeSeparators,
  findAlternativeNodeModules,
  findAlternativeFiles,
  loadConfig,
  getModuleParts,
  globToRegex,
  isGlobMatch,
} from '@parcel/utils';
import ThrowableDiagnostic, {
  encodeJSONKeyComponent,
  errorToDiagnostic,
  generateJSONCodeHighlights,
  md,
} from '@parcel/diagnostic';
import builtins, {empty} from './builtins';
import nullthrows from 'nullthrows';
import _Module from 'module';
import {fileURLToPath} from 'url';
import semver from 'semver';

const EMPTY_SHIM = require.resolve('./_empty');

type InternalPackageJSON = PackageJSON & {pkgdir: string, pkgfile: string, ...};
type Options = {|
  fs: FileSystem,
  projectRoot: FilePath,
  extensions: Array<string>,
  mainFields: Array<string>,
  packageManager?: PackageManager,
  logger?: PluginLogger,
  shouldAutoInstall?: boolean,
|};
type ResolvedFile = {|
  path: string,
  pkg: InternalPackageJSON | null,
|};

type Aliases = string | {+[string]: string | boolean | {|global: string|}, ...};
type ResolvedAlias = {|
  type: 'file' | 'global',
  sourcePath: FilePath,
  resolved: string,
|};
type Module = {|
  moduleName?: string,
  subPath?: ?string,
  moduleDir?: FilePath,
  filePath?: FilePath,
  code?: string,
  query?: URLSearchParams,
|};

type ResolverContext = {|
  invalidateOnFileCreate: Array<FileCreateInvalidation>,
  invalidateOnFileChange: Set<FilePath>,
  specifierType: SpecifierType,
  range: ?SemverRange,
  loc: ?SourceLocation,
|};

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
export default class NodeResolver {
  fs: FileSystem;
  projectRoot: FilePath;
  extensions: Array<string>;
  mainFields: Array<string>;
  packageCache: Map<string, InternalPackageJSON>;
  rootPackage: InternalPackageJSON | null;
  packageManager: ?PackageManager;
  shouldAutoInstall: boolean;
  logger: ?PluginLogger;

  constructor(opts: Options) {
    this.extensions = opts.extensions.map(ext =>
      ext.startsWith('.') ? ext : '.' + ext,
    );
    this.mainFields = opts.mainFields;
    this.fs = opts.fs;
    this.projectRoot = opts.projectRoot;
    this.packageCache = new Map();
    this.rootPackage = null;
    this.packageManager = opts.packageManager;
    this.shouldAutoInstall = opts.shouldAutoInstall ?? false;
    this.logger = opts.logger;
  }

  async resolve({
    filename,
    parent,
    specifierType,
    range,
    env,
    sourcePath,
    loc,
  }: {|
    filename: FilePath,
    parent: ?FilePath,
    specifierType: SpecifierType,
    range?: ?SemverRange,
    env: Environment,
    sourcePath?: ?FilePath,
    loc?: ?SourceLocation,
  |}): Promise<?ResolveResult> {
    let ctx = {
      invalidateOnFileCreate: [],
      invalidateOnFileChange: new Set(),
      specifierType,
      range,
      loc,
    };

    // Get file extensions to search
    let extensions = this.extensions.slice();

    if (parent) {
      // parent's extension given high priority
      let parentExt = path.extname(parent);
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
        sourcePath,
      });

      if (!module) {
        return {
          isExcluded: true,
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
            query: module.query,
          };
        }

        resolved = await this.loadRelative(
          module.filePath,
          extensions,
          env,
          parent ? path.dirname(parent) : this.projectRoot,
          ctx,
        );
      }

      if (resolved) {
        let _resolved = resolved; // For Flow
        return {
          filePath: await this.fs.realpath(_resolved.path),
          sideEffects:
            _resolved.pkg && !this.hasSideEffects(_resolved.path, _resolved.pkg)
              ? false
              : undefined,
          invalidateOnFileCreate: ctx.invalidateOnFileCreate,
          invalidateOnFileChange: [...ctx.invalidateOnFileChange],
          query: module.query,
        };
      }
    } catch (err) {
      if (err instanceof ThrowableDiagnostic) {
        return {
          diagnostics: err.diagnostics,
          invalidateOnFileCreate: ctx.invalidateOnFileCreate,
          invalidateOnFileChange: [...ctx.invalidateOnFileChange],
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
    sourcePath,
  }: {|
    filename: string,
    parent: ?FilePath,
    env: Environment,
    ctx: ResolverContext,
    sourcePath: ?FilePath,
  |}): Promise<?Module> {
    let specifier = filename;
    let sourceFile = parent || path.join(this.projectRoot, 'index');
    let query;

    // If this isn't the entrypoint, resolve the input file to an absolute path
    if (parent) {
      let res = await this.resolveFilename(
        filename,
        path.dirname(sourceFile),
        ctx.specifierType,
      );

      if (!res) {
        return null;
      }

      filename = res.filePath;
      query = res.query;
    }

    // Resolve aliases in the parent module for this file.
    let alias = await this.loadAlias(filename, sourceFile, env, ctx);
    if (alias) {
      if (alias.type === 'global') {
        return {
          filePath: path.join(this.projectRoot, `${alias.resolved}.js`),
          code: `module.exports=${alias.resolved};`,
          query,
        };
      }
      filename = alias.resolved;
    }

    // Return just the file path if this is a file, not in node_modules
    if (path.isAbsolute(filename)) {
      return {
        filePath: filename,
        query,
      };
    }

    let builtin = this.findBuiltin(filename, env);
    if (builtin === null) {
      return null;
    } else if (builtin && builtin.name === empty) {
      return {filePath: empty};
    } else if (builtin !== undefined) {
      filename = builtin.name;
    }

    if (this.shouldIncludeNodeModule(env, filename) === false) {
      if (sourcePath && env.isLibrary && !builtin) {
        await this.checkExcludedDependency(sourcePath, filename, ctx);
      }
      return null;
    }

    // Resolve the module in node_modules
    let resolved: ?Module;
    try {
      resolved = this.findNodeModulePath(
        filename,
        !builtin ? sourceFile : path.join(this.projectRoot, 'index'),
        ctx,
      );
    } catch (err) {
      // ignore
    }

    // Autoinstall/verify version of builtin polyfills
    if (builtin?.range != null) {
      // This assumes that there are no polyfill packages that are scoped
      // Append '/' to force this.packageManager to look up the package in node_modules
      let packageName = builtin.name.split('/')[0] + '/';
      let packageManager = this.packageManager;
      if (resolved == null) {
        // Auto install the Node builtin polyfills
        if (this.shouldAutoInstall && packageManager) {
          this.logger?.warn({
            message: md`Auto installing polyfill for Node builtin module "${specifier}"...`,
            codeFrames: [
              {
                filePath: ctx.loc?.filePath ?? sourceFile,
                codeHighlights: ctx.loc
                  ? [
                      {
                        message: 'used here',
                        start: ctx.loc.start,
                        end: ctx.loc.end,
                      },
                    ]
                  : [],
              },
            ],
            documentationURL:
              'https://parceljs.org/features/node-emulation/#polyfilling-%26-excluding-builtin-node-modules',
          });

          await packageManager.resolve(
            packageName,
            this.projectRoot + '/index',
            {
              saveDev: true,
              shouldAutoInstall: true,
              range: builtin.range,
            },
          );

          // Re-resolve
          try {
            resolved = this.findNodeModulePath(
              filename,
              this.projectRoot + '/index',
              ctx,
            );
          } catch (err) {
            // ignore
          }
        } else {
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: md`Node builtin polyfill "${packageName}" is not installed, but auto install is disabled.`,
              codeFrames: [
                {
                  filePath: ctx.loc?.filePath ?? sourceFile,
                  codeHighlights: ctx.loc
                    ? [
                        {
                          message: 'used here',
                          start: ctx.loc.start,
                          end: ctx.loc.end,
                        },
                      ]
                    : [],
                },
              ],
              documentationURL:
                'https://parceljs.org/features/node-emulation/#polyfilling-%26-excluding-builtin-node-modules',
              hints: [
                md`Install the "${packageName}" package with your package manager, and run Parcel again.`,
              ],
            },
          });
        }
      } else if (builtin.range != null) {
        // Assert correct version
        try {
          // TODO packageManager can be null for backwards compatibility, but that could cause invalid
          // resolutions in monorepos
          await packageManager?.resolve(
            packageName,
            this.projectRoot + '/index',
            {
              saveDev: true,
              shouldAutoInstall: this.shouldAutoInstall,
              range: builtin.range,
            },
          );
        } catch (e) {
          this.logger?.warn(errorToDiagnostic(e));
        }
      }
    }

    if (resolved === undefined && process.versions.pnp != null && parent) {
      try {
        let [moduleName, subPath] = getModuleParts(filename);
        // $FlowFixMe[prop-missing]
        let pnp = _Module.findPnpApi(path.dirname(parent));

        let res = pnp.resolveToUnqualified(
          moduleName +
            // retain slash in `require('assert/')` to force loading builtin from npm
            (filename[moduleName.length] === '/' ? '/' : ''),
          parent,
        );

        resolved = {
          moduleName,
          subPath,
          moduleDir: res,
          filePath: path.join(res, subPath || ''),
        };

        // Invalidate whenever the .pnp.js file changes.
        ctx.invalidateOnFileChange.add(
          pnp.resolveToUnqualified('pnpapi', null),
        );
      } catch (e) {
        if (e.code !== 'MODULE_NOT_FOUND') {
          return null;
        }
      }
    }

    // If we couldn't resolve the node_modules path, just return the module name info
    if (resolved === undefined) {
      let [moduleName, subPath] = getModuleParts(filename);
      resolved = ({
        moduleName,
        subPath,
      }: Module);

      let alternativeModules = await findAlternativeNodeModules(
        this.fs,
        moduleName,
        path.dirname(sourceFile),
      );

      if (alternativeModules.length) {
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`Cannot find module ${nullthrows(resolved?.moduleName)}`,
            hints: alternativeModules.map(r => {
              return `Did you mean '__${r}__'?`;
            }),
          },
        });
      }
    }

    if (resolved != null) {
      resolved.query = query;
    }

    return resolved;
  }

  shouldIncludeNodeModule(
    {includeNodeModules}: Environment,
    name: string,
  ): ?boolean {
    if (includeNodeModules === false) {
      return false;
    }

    if (Array.isArray(includeNodeModules)) {
      let [moduleName] = getModuleParts(name);
      return includeNodeModules.includes(moduleName);
    }

    if (includeNodeModules && typeof includeNodeModules === 'object') {
      let [moduleName] = getModuleParts(name);
      let include = includeNodeModules[moduleName];
      if (include != null) {
        return !!include;
      }
    }
  }

  async checkExcludedDependency(
    sourceFile: FilePath,
    name: string,
    ctx: ResolverContext,
  ) {
    let [moduleName] = getModuleParts(name);
    let pkg = await this.findPackage(sourceFile, ctx);
    if (!pkg) {
      return;
    }

    if (
      !pkg.dependencies?.[moduleName] &&
      !pkg.peerDependencies?.[moduleName] &&
      !pkg.engines?.[moduleName]
    ) {
      let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
      throw new ThrowableDiagnostic({
        diagnostic: {
          message: md`External dependency "${moduleName}" is not declared in package.json.`,
          codeFrames: [
            {
              filePath: pkg.pkgfile,
              language: 'json',
              code: pkgContent,
              codeHighlights: pkg.dependencies
                ? generateJSONCodeHighlights(pkgContent, [
                    {
                      key: `/dependencies`,
                      type: 'key',
                    },
                  ])
                : [
                    {
                      start: {
                        line: 1,
                        column: 1,
                      },
                      end: {
                        line: 1,
                        column: 1,
                      },
                    },
                  ],
            },
          ],
          hints: [`Add "${moduleName}" as a dependency.`],
        },
      });
    }

    if (ctx.range) {
      let range = ctx.range;
      let depRange =
        pkg.dependencies?.[moduleName] || pkg.peerDependencies?.[moduleName];
      if (depRange && !semver.intersects(depRange, range)) {
        let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
        let field = pkg.dependencies?.[moduleName]
          ? 'dependencies'
          : 'peerDependencies';
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`External dependency "${moduleName}" does not satisfy required semver range "${range}".`,
            codeFrames: [
              {
                filePath: pkg.pkgfile,
                language: 'json',
                code: pkgContent,
                codeHighlights: generateJSONCodeHighlights(pkgContent, [
                  {
                    key: `/${field}/${encodeJSONKeyComponent(moduleName)}`,
                    type: 'value',
                    message: 'Found this conflicting requirement.',
                  },
                ]),
              },
            ],
            hints: [
              `Update the dependency on "${moduleName}" to satisfy "${range}".`,
            ],
          },
        });
      }
    }
  }

  async resolveFilename(
    filename: string,
    dir: string,
    specifierType: SpecifierType,
  ): Promise<?{|filePath: string, query?: URLSearchParams|}> {
    let url;
    switch (filename[0]) {
      case '/': {
        if (specifierType === 'url' && filename[1] === '/') {
          // A protocol-relative URL, e.g `url('//example.com/foo.png')`. Ignore.
          return null;
        }

        // Absolute path. Resolve relative to project root.
        dir = this.projectRoot;
        filename = '.' + filename;
        break;
      }

      case '~': {
        // Tilde path. Resolve relative to nearest node_modules directory,
        // the nearest directory with package.json or the project root - whichever comes first.
        const insideNodeModules = dir.includes('node_modules');

        while (
          dir !== this.projectRoot &&
          path.basename(path.dirname(dir)) !== 'node_modules' &&
          (insideNodeModules ||
            !(await this.fs.exists(path.join(dir, 'package.json'))))
        ) {
          dir = path.dirname(dir);

          if (dir === path.dirname(dir)) {
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

      case '.': {
        // Relative path.
        break;
      }

      case '#': {
        if (specifierType === 'url') {
          // An ID-only URL, e.g. `url(#clip-path)` for CSS rules. Ignore.
          return null;
        }
        break;
      }

      default: {
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
            filePath: filename,
          };
        }
      }
    }

    // If this is a URL dependency or ESM specifier, parse as a URL.
    // Otherwise, if this is CommonJS, parse as a platform path.
    if (specifierType === 'url' || specifierType === 'esm') {
      url = url ?? new URL(filename, `file:${dir}/index`);
      let filePath;
      if (url.protocol === 'npm:') {
        // The `npm:` scheme allows URLs to resolve to node_modules packages.
        filePath = decodeURIComponent(url.pathname);
      } else if (url.protocol === 'node:') {
        // Preserve the `node:` prefix for use later.
        // Node does not URL decode or support query params here.
        // See https://github.com/nodejs/node/issues/39710.
        return {
          filePath: filename,
        };
      } else if (url.protocol === 'file:') {
        // $FlowFixMe
        filePath = fileURLToPath(url);
      } else if (specifierType === 'url') {
        // Don't handle other protocols like http:
        return null;
      } else {
        // Throw on unsupported url schemes in ESM dependencies.
        // We may support http: or data: urls eventually.
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: `Unknown url scheme or pipeline '${url.protocol}'`,
          },
        });
      }

      return {
        filePath,
        query: url.search ? new URLSearchParams(url.search) : undefined,
      };
    } else {
      // CommonJS specifier. Query params are not supported.
      return {
        filePath: path.resolve(dir, filename),
      };
    }
  }

  async loadRelative(
    filename: string,
    extensions: Array<string>,
    env: Environment,
    parentdir: string,
    ctx: ResolverContext,
  ): Promise<?ResolvedFile> {
    // Find a package.json file in the current package.
    let pkg = await this.findPackage(filename, ctx);

    // First try as a file, then as a directory.
    let resolvedFile = await this.loadAsFile({
      file: filename,
      extensions,
      env,
      pkg,
      ctx,
    });

    // Don't load as a directory if this is a URL dependency.
    if (!resolvedFile && ctx.specifierType !== 'url') {
      resolvedFile = await this.loadDirectory({
        dir: filename,
        extensions,
        env,
        ctx,
        pkg,
      });
    }

    if (!resolvedFile) {
      // If we can't load the file do a fuzzySearch for potential hints
      let relativeFileSpecifier = relativePath(parentdir, filename);
      let potentialFiles = await findAlternativeFiles(
        this.fs,
        relativeFileSpecifier,
        parentdir,
        this.projectRoot,
        true,
        ctx.specifierType !== 'url',
        extensions.length === 0,
      );

      throw new ThrowableDiagnostic({
        diagnostic: {
          message: md`Cannot load file '${relativeFileSpecifier}' in '${relativePath(
            this.projectRoot,
            parentdir,
          )}'.`,
          hints: potentialFiles.map(r => {
            return `Did you mean '__${r}__'?`;
          }),
        },
      });
    }

    return resolvedFile;
  }

  findBuiltin(
    filename: string,
    env: Environment,
  ): ?{|name: string, range: ?string|} {
    const isExplicitNode = filename.startsWith('node:');
    if (isExplicitNode || builtins[filename]) {
      if (env.isNode()) {
        return null;
      }

      if (isExplicitNode) {
        filename = filename.substr(5);
      }

      // By default, exclude node builtins from libraries unless explicitly opted in.
      if (
        env.isLibrary &&
        this.shouldIncludeNodeModule(env, filename) !== true
      ) {
        return null;
      }

      return builtins[filename] || empty;
    }

    if (env.isElectron() && filename === 'electron') {
      return null;
    }
  }

  findNodeModulePath(
    filename: string,
    sourceFile: FilePath,
    ctx: ResolverContext,
  ): ?Module {
    let [moduleName, subPath] = getModuleParts(filename);

    ctx.invalidateOnFileCreate.push({
      fileName: `node_modules/${moduleName}`,
      aboveFilePath: sourceFile,
    });

    let dir = path.dirname(sourceFile);
    let moduleDir = this.fs.findNodeModule(moduleName, dir);
    if (moduleDir) {
      return {
        moduleName,
        subPath,
        moduleDir,
        filePath: subPath ? path.join(moduleDir, subPath) : moduleDir,
      };
    }

    return undefined;
  }

  async loadNodeModules(
    module: Module,
    extensions: Array<string>,
    env: Environment,
    ctx: ResolverContext,
  ): Promise<?ResolvedFile> {
    // If a module was specified as a module sub-path (e.g. some-module/some/path),
    // it is likely a file. Try loading it as a file first.
    if (module.subPath && module.moduleDir) {
      let pkg = await this.readPackage(module.moduleDir, ctx);
      let res = await this.loadAsFile({
        file: nullthrows(module.filePath),
        extensions,
        env,
        pkg,
        ctx,
      });
      if (res) {
        return res;
      }
    }

    // Otherwise, load as a directory.
    return this.loadDirectory({
      dir: nullthrows(module.filePath),
      extensions,
      env,
      ctx,
    });
  }

  async loadDirectory({
    dir,
    extensions,
    env,
    ctx,
    pkg,
  }: {|
    dir: string,
    extensions: Array<string>,
    env: Environment,
    ctx: ResolverContext,
    pkg?: InternalPackageJSON | null,
  |}): Promise<?ResolvedFile> {
    let failedEntry;
    try {
      pkg = await this.readPackage(dir, ctx);

      if (pkg) {
        // Get a list of possible package entry points.
        let entries = this.getPackageEntries(pkg, env);

        for (let entry of entries) {
          // First try loading package.main as a file, then try as a directory.
          let res =
            (await this.loadAsFile({
              file: entry.filename,
              extensions,
              env,
              pkg,
              ctx,
            })) ||
            (await this.loadDirectory({
              dir: entry.filename,
              extensions,
              env,
              pkg,
              ctx,
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
          file: path.join(dir, 'index'),
          extensions,
          env,
          pkg,
          ctx,
        });
        if (indexFallback != null) {
          return indexFallback;
        }

        let fileSpecifier = relativePath(dir, failedEntry.filename);
        let alternatives = await findAlternativeFiles(
          this.fs,
          fileSpecifier,
          pkg.pkgdir,
          this.projectRoot,
        );

        let alternative = alternatives[0];
        let pkgContent = await this.fs.readFile(pkg.pkgfile, 'utf8');
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`Could not load '${fileSpecifier}' from module '${pkg.name}' found in package.json#${failedEntry.field}`,
            codeFrames: [
              {
                filePath: pkg.pkgfile,
                language: 'json',
                code: pkgContent,
                codeHighlights: generateJSONCodeHighlights(pkgContent, [
                  {
                    key: `/${failedEntry.field}`,
                    type: 'value',
                    message: md`'${fileSpecifier}' does not exist${
                      alternative ? `, did you mean '${alternative}'?` : ''
                    }'`,
                  },
                ]),
              },
            ],
          },
        });
      }
    }

    // Skip index fallback unless this is actually a directory.
    try {
      if (!(await this.fs.stat(dir)).isDirectory()) {
        return;
      }
    } catch (err) {
      return;
    }

    // Fall back to an index file inside the directory.
    return this.loadAsFile({
      file: path.join(dir, 'index'),
      extensions,
      env,
      pkg: pkg ?? (await this.findPackage(path.join(dir, 'index'), ctx)),
      ctx,
    });
  }

  async readPackage(
    dir: string,
    ctx: ResolverContext,
  ): Promise<InternalPackageJSON> {
    let file = path.join(dir, 'package.json');
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
        filePath: file,
      });
      throw err;
    }

    // Add the invalidation *before* we try to parse the JSON in case of errors
    // so that changes are picked up if the file is edited to fix the error.
    ctx.invalidateOnFileChange.add(file);
    let pkg = JSON.parse(json);

    await this.processPackage(pkg, file, dir);

    this.packageCache.set(file, pkg);
    return pkg;
  }

  async processPackage(pkg: InternalPackageJSON, file: string, dir: string) {
    pkg.pkgfile = file;
    pkg.pkgdir = dir;

    // If the package has a `source` field, make sure
    // - the package is behind symlinks
    // - and the realpath to the packages does not includes `node_modules`.
    // Since such package is likely a pre-compiled module
    // installed with package managers, rather than including a source code.
    if (pkg.source) {
      let realpath = await this.fs.realpath(file);
      if (
        realpath === file ||
        realpath.includes(`${path.sep}node_modules${path.sep}`)
      ) {
        delete pkg.source;
      }
    }
  }

  getPackageEntries(
    pkg: InternalPackageJSON,
    env: Environment,
  ): Array<{|
    filename: string,
    field: string,
  |}> {
    return this.mainFields
      .map(field => {
        if (field === 'browser' && pkg.browser != null) {
          if (!env.isBrowser()) {
            return null;
          } else if (typeof pkg.browser === 'string') {
            return {field, filename: pkg.browser};
          } else if (typeof pkg.browser === 'object' && pkg.browser[pkg.name]) {
            return {
              field: `browser/${pkg.name}`,
              filename: pkg.browser[pkg.name],
            };
          }
        }

        return {
          field,
          filename: pkg[field],
        };
      })
      .filter(
        entry => entry && entry.filename && typeof entry.filename === 'string',
      )
      .map(entry => {
        invariant(entry != null && typeof entry.filename === 'string');

        // Current dir refers to an index file
        if (entry.filename === '.' || entry.filename === './') {
          entry.filename = 'index';
        }

        return {
          field: entry.field,
          filename: path.resolve(pkg.pkgdir, entry.filename),
        };
      });
  }

  async loadAsFile({
    file,
    extensions,
    env,
    pkg,
    ctx,
  }: {|
    file: string,
    extensions: Array<string>,
    env: Environment,
    pkg: InternalPackageJSON | null,
    ctx: ResolverContext,
  |}): Promise<?ResolvedFile> {
    // Try all supported extensions
    let files = await this.expandFile(file, extensions, env, pkg);
    let found = this.fs.findFirstFile(files);

    // Add invalidations for higher priority files so we
    // re-resolve if any of them are created.
    for (let file of files) {
      if (file === found) {
        break;
      }

      ctx.invalidateOnFileCreate.push({
        filePath: file,
      });
    }

    if (found) {
      return {
        path: found,
        // If this package.json isn't a sibling of found, it's possible pkg is not the
        // closest package.json to the resolved file. Reload it instead.
        pkg:
          pkg == null || pkg?.pkgdir !== path.dirname(found)
            ? await this.findPackage(found, ctx)
            : pkg,
      };
    }

    return null;
  }

  async expandFile(
    file: string,
    extensions: Array<string>,
    env: Environment,
    pkg: InternalPackageJSON | null,
    expandAliases?: boolean = true,
  ): Promise<Array<string>> {
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
          res = res.concat(
            await this.expandFile(aliasPath, extensions, env, pkg, false),
          );
        }
      }

      if (path.extname(f)) {
        res.push(f);
      }
    }

    return res;
  }

  async resolveAliases(
    filename: string,
    env: Environment,
    pkg: InternalPackageJSON | null,
  ): Promise<?ResolvedAlias> {
    let localAliases = await this.resolvePackageAliases(filename, env, pkg);
    if (localAliases) {
      return localAliases;
    }

    // First resolve local package aliases, then project global ones.
    return this.resolvePackageAliases(filename, env, this.rootPackage);
  }

  async resolvePackageAliases(
    filename: string,
    env: Environment,
    pkg: InternalPackageJSON | null,
  ): Promise<?ResolvedAlias> {
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

  async getAlias(
    filename: FilePath,
    pkg: InternalPackageJSON,
    aliases: ?Aliases,
  ): Promise<?ResolvedAlias> {
    if (!filename || !aliases || typeof aliases !== 'object') {
      return null;
    }

    let dir = pkg.pkgdir;
    let alias;

    // If filename is an absolute path, get one relative to the package.json directory.
    if (path.isAbsolute(filename)) {
      filename = relativePath(dir, filename);
      alias = this.lookupAlias(aliases, filename);
    } else {
      // It is a node_module. First try the entire filename as a key.
      alias = this.lookupAlias(aliases, normalizeSeparators(filename));
      if (alias == null) {
        // If it didn't match, try only the module name.
        let [moduleName, subPath] = getModuleParts(filename);
        alias = this.lookupAlias(aliases, moduleName);
        if (typeof alias === 'string' && subPath) {
          let isRelative = alias.startsWith('./');
          // Append the filename back onto the aliased module.
          alias = (path.posix.join(alias, subPath): string);
          // because of path.join('./nested', 'sub') === 'nested/sub'
          if (isRelative) alias = './' + alias;
        }
      }
    }

    // If the alias is set to `false`, return an empty file.
    if (alias === false) {
      return {
        type: 'file',
        sourcePath: pkg.pkgfile,
        resolved: EMPTY_SHIM,
      };
    }

    if (alias && typeof alias === 'object') {
      if (alias.global) {
        if (typeof alias.global !== 'string' || alias.global.length === 0) {
          throw new ThrowableDiagnostic({
            diagnostic: {
              message: md`The global alias for ${filename} is invalid.`,
              hints: [`Only nonzero-length strings are valid global aliases.`],
            },
          });
        }

        return {
          type: 'global',
          sourcePath: pkg.pkgfile,
          resolved: alias.global,
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
        resolved: resolved.filePath,
      };
    }

    return null;
  }

  lookupAlias(
    aliases: Aliases,
    filename: FilePath,
  ): null | boolean | string | {|global: string|} {
    if (typeof aliases !== 'object') {
      return null;
    }

    // First, try looking up the exact filename
    let alias = aliases[filename];
    if (alias == null) {
      // Otherwise, try replacing glob keys
      for (let key in aliases) {
        let val = aliases[key];
        if (typeof val === 'string' && isGlob(key)) {
          // https://github.com/micromatch/picomatch/issues/77
          if (filename.startsWith('./')) {
            filename = filename.slice(2);
          }
          let re = globToRegex(key, {capture: true});
          if (re.test(filename)) {
            alias = filename.replace(re, val);
            break;
          }
        }
      }
    }
    return alias;
  }

  async findPackage(
    sourceFile: string,
    ctx: ResolverContext,
  ): Promise<InternalPackageJSON | null> {
    ctx.invalidateOnFileCreate.push({
      fileName: 'package.json',
      aboveFilePath: sourceFile,
    });

    // Find the nearest package.json file within the current node_modules folder
    let res = await loadConfig(
      this.fs,
      sourceFile,
      ['package.json'],
      this.projectRoot,
      // By default, loadConfig uses JSON5. Use normal JSON for package.json files
      // since they don't support comments and JSON.parse is faster.
      {parser: (...args) => JSON.parse(...args)},
    );

    if (res != null) {
      let file = res.files[0].filePath;
      let dir = path.dirname(file);
      ctx.invalidateOnFileChange.add(file);
      let pkg = res.config;
      await this.processPackage(pkg, file, dir);
      return pkg;
    }

    return null;
  }

  async loadAlias(
    filename: string,
    sourceFile: FilePath,
    env: Environment,
    ctx: ResolverContext,
  ): Promise<?ResolvedAlias> {
    // Load the root project's package.json file if we haven't already
    if (!this.rootPackage) {
      this.rootPackage = await this.findPackage(
        path.join(this.projectRoot, 'index'),
        ctx,
      );
    }

    // Load the local package, and resolve aliases
    let pkg = await this.findPackage(sourceFile, ctx);
    return this.resolveAliases(filename, env, pkg);
  }

  hasSideEffects(filePath: FilePath, pkg: InternalPackageJSON): boolean {
    switch (typeof pkg.sideEffects) {
      case 'boolean':
        return pkg.sideEffects;
      case 'string': {
        let glob = pkg.sideEffects;
        invariant(typeof glob === 'string');

        let relative = path.relative(pkg.pkgdir, filePath);
        if (!glob.includes('/')) {
          glob = `**/${glob}`;
        }

        // Trim off "./" to make micromatch behave correctly,
        // `path.relative` never returns a leading "./"
        if (glob.startsWith('./')) {
          glob = glob.substr(2);
        }

        return isGlobMatch(relative, glob, {dot: true});
      }
      case 'object':
        return pkg.sideEffects.some(sideEffects =>
          this.hasSideEffects(filePath, {...pkg, sideEffects}),
        );
    }

    return true;
  }
}
