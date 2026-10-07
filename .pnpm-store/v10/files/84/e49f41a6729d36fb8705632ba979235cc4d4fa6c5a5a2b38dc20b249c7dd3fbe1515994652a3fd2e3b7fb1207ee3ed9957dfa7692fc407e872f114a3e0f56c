// @flow
import type {FilePath, DependencySpecifier, SemverRange} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {
  ModuleRequest,
  PackageManager,
  PackageInstaller,
  InstallOptions,
  Invalidations,
} from './types';
import type {ResolveResult} from './types';

import {registerSerializableClass} from '@parcel/core';
import ThrowableDiagnostic, {
  encodeJSONKeyComponent,
  escapeMarkdown,
  generateJSONCodeHighlights,
  md,
} from '@parcel/diagnostic';
import nativeFS from 'fs';
import Module from 'module';
import path from 'path';
import semver from 'semver';

import {getModuleParts} from '@parcel/utils';
import {getConflictingLocalDependencies} from './utils';
import {installPackage} from './installPackage';
import pkg from '../package.json';
import {NodeResolver} from './NodeResolver';
import {NodeResolverSync} from './NodeResolverSync';

// There can be more than one instance of NodePackageManager, but node has only a single module cache.
// Therefore, the resolution cache and the map of parent to child modules should also be global.
const cache = new Map<DependencySpecifier, ResolveResult>();
const children = new Map<FilePath, Set<DependencySpecifier>>();

// This implements a package manager for Node by monkey patching the Node require
// algorithm so that it uses the specified FileSystem instead of the native one.
// It also handles installing packages when they are required if not already installed.
// See https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js
// for reference to Node internals.
export class NodePackageManager implements PackageManager {
  fs: FileSystem;
  projectRoot: FilePath;
  installer: ?PackageInstaller;
  resolver: NodeResolver;
  syncResolver: NodeResolverSync;
  invalidationsCache: Map<string, Invalidations> = new Map();

  constructor(
    fs: FileSystem,
    projectRoot: FilePath,
    installer?: ?PackageInstaller,
  ) {
    this.fs = fs;
    this.projectRoot = projectRoot;
    this.installer = installer;
    this.resolver = new NodeResolver(this.fs, projectRoot);
    this.syncResolver = new NodeResolverSync(this.fs, projectRoot);
  }

  static deserialize(opts: any): NodePackageManager {
    return new NodePackageManager(opts.fs, opts.projectRoot, opts.installer);
  }

  serialize(): {|
    $$raw: boolean,
    fs: FileSystem,
    projectRoot: FilePath,
    installer: ?PackageInstaller,
  |} {
    return {
      $$raw: false,
      fs: this.fs,
      projectRoot: this.projectRoot,
      installer: this.installer,
    };
  }

  async require(
    name: DependencySpecifier,
    from: FilePath,
    opts: ?{|
      range?: ?SemverRange,
      shouldAutoInstall?: boolean,
      saveDev?: boolean,
    |},
  ): Promise<any> {
    let {resolved} = await this.resolve(name, from, opts);
    return this.load(resolved, from);
  }

  requireSync(name: DependencySpecifier, from: FilePath): any {
    let {resolved} = this.resolveSync(name, from);
    return this.load(resolved, from);
  }

  load(filePath: FilePath, from: FilePath): any {
    if (!path.isAbsolute(filePath)) {
      // Node builtin module
      // $FlowFixMe
      return require(filePath);
    }

    // $FlowFixMe[prop-missing]
    const cachedModule = Module._cache[filePath];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    // $FlowFixMe
    let m = new Module(filePath, Module._cache[from] || module.parent);
    // $FlowFixMe[prop-missing]
    Module._cache[filePath] = m;

    // Patch require within this module so it goes through our require
    m.require = id => {
      return this.requireSync(id, filePath);
    };

    // Patch `fs.readFileSync` temporarily so that it goes through our file system
    let readFileSync = nativeFS.readFileSync;
    // $FlowFixMe
    nativeFS.readFileSync = (filename, encoding) => {
      // $FlowFixMe
      nativeFS.readFileSync = readFileSync;
      return this.fs.readFileSync(filename, encoding);
    };

    try {
      m.load(filePath);
    } catch (err) {
      // $FlowFixMe[prop-missing]
      delete Module._cache[filePath];
      throw err;
    }

    return m.exports;
  }

  async resolve(
    id: DependencySpecifier,
    from: FilePath,
    options?: ?{|
      range?: ?SemverRange,
      shouldAutoInstall?: boolean,
      saveDev?: boolean,
    |},
  ): Promise<ResolveResult> {
    let basedir = path.dirname(from);
    let key = basedir + ':' + id;
    let resolved = cache.get(key);
    if (!resolved) {
      let [name] = getModuleParts(id);
      try {
        resolved = await this.resolver.resolve(id, from);
      } catch (e) {
        if (
          e.code !== 'MODULE_NOT_FOUND' ||
          options?.shouldAutoInstall !== true
        ) {
          if (
            e.code === 'MODULE_NOT_FOUND' &&
            options?.shouldAutoInstall !== true
          ) {
            let err = new ThrowableDiagnostic({
              diagnostic: {
                message: escapeMarkdown(e.message),
                hints: [
                  'Autoinstall is disabled, please install this package manually and restart Parcel.',
                ],
              },
            });
            // $FlowFixMe - needed for loadParcelPlugin
            err.code = 'MODULE_NOT_FOUND';
            throw err;
          } else {
            throw e;
          }
        }

        let conflicts = await getConflictingLocalDependencies(
          this.fs,
          name,
          from,
          this.projectRoot,
        );

        if (conflicts == null) {
          await this.install([{name, range: options?.range}], from, {
            saveDev: options?.saveDev ?? true,
          });

          return this.resolve(id, from, {
            ...options,
            shouldAutoInstall: false,
          });
        }

        throw new ThrowableDiagnostic({
          diagnostic: conflicts.fields.map(field => ({
            message: md`Could not find module "${name}", but it was listed in package.json. Run your package manager first.`,
            origin: '@parcel/package-manager',
            codeFrames: [
              {
                filePath: conflicts.filePath,
                language: 'json',
                code: conflicts.json,
                codeHighlights: generateJSONCodeHighlights(conflicts.json, [
                  {
                    key: `/${field}/${encodeJSONKeyComponent(name)}`,
                    type: 'key',
                    message: 'Defined here, but not installed',
                  },
                ]),
              },
            ],
          })),
        });
      }

      let range = options?.range;
      if (range != null) {
        let pkg = resolved.pkg;
        if (pkg == null || !semver.satisfies(pkg.version, range)) {
          let conflicts = await getConflictingLocalDependencies(
            this.fs,
            name,
            from,
            this.projectRoot,
          );

          if (conflicts == null && options?.shouldAutoInstall === true) {
            await this.install([{name, range}], from);
            return this.resolve(id, from, {
              ...options,
              shouldAutoInstall: false,
            });
          } else if (conflicts != null) {
            throw new ThrowableDiagnostic({
              diagnostic: {
                message: md`Could not find module "${name}" satisfying ${range}.`,
                origin: '@parcel/package-manager',
                codeFrames: [
                  {
                    filePath: conflicts.filePath,
                    language: 'json',
                    code: conflicts.json,
                    codeHighlights: generateJSONCodeHighlights(
                      conflicts.json,
                      conflicts.fields.map(field => ({
                        key: `/${field}/${encodeJSONKeyComponent(name)}`,
                        type: 'key',
                        message: 'Found this conflicting local requirement.',
                      })),
                    ),
                  },
                ],
              },
            });
          }

          let version = pkg?.version;
          let message = md`Could not resolve package "${name}" that satisfies ${range}.`;
          if (version != null) {
            message += md` Found ${version}.`;
          }

          throw new ThrowableDiagnostic({
            diagnostic: {
              message,
              hints: [
                'Looks like the incompatible version was installed transitively. Add this package as a direct dependency with a compatible version range.',
              ],
            },
          });
        }
      }

      cache.set(key, resolved);
      this.invalidationsCache.clear();

      // Add the specifier as a child to the parent module.
      // Don't do this if the specifier was an absolute path, as this was likely a dynamically resolved path
      // (e.g. babel uses require() to load .babelrc.js configs and we don't want them to be added  as children of babel itself).
      if (!path.isAbsolute(name)) {
        let moduleChildren = children.get(from);
        if (!moduleChildren) {
          moduleChildren = new Set();
          children.set(from, moduleChildren);
        }

        moduleChildren.add(name);
      }
    }

    return resolved;
  }

  resolveSync(name: DependencySpecifier, from: FilePath): ResolveResult {
    let basedir = path.dirname(from);
    let key = basedir + ':' + name;
    let resolved = cache.get(key);
    if (!resolved) {
      resolved = this.syncResolver.resolve(name, from);
      cache.set(key, resolved);
      this.invalidationsCache.clear();

      if (!path.isAbsolute(name)) {
        let moduleChildren = children.get(from);
        if (!moduleChildren) {
          moduleChildren = new Set();
          children.set(from, moduleChildren);
        }

        moduleChildren.add(name);
      }
    }

    return resolved;
  }

  async install(
    modules: Array<ModuleRequest>,
    from: FilePath,
    opts?: InstallOptions,
  ) {
    await installPackage(this.fs, this, modules, from, this.projectRoot, {
      packageInstaller: this.installer,
      ...opts,
    });
  }

  getInvalidations(name: DependencySpecifier, from: FilePath): Invalidations {
    let key = name + ':' + from;
    let cached = this.invalidationsCache.get(key);
    if (cached != null) {
      return cached;
    }

    let res = {
      invalidateOnFileCreate: [],
      invalidateOnFileChange: new Set(),
    };

    let seen = new Set();
    let addKey = (name, from) => {
      let basedir = path.dirname(from);
      let key = basedir + ':' + name;
      if (seen.has(key)) {
        return;
      }

      seen.add(key);
      let resolved = cache.get(key);
      if (!resolved || !path.isAbsolute(resolved.resolved)) {
        return;
      }

      res.invalidateOnFileCreate.push(...resolved.invalidateOnFileCreate);
      res.invalidateOnFileChange.add(resolved.resolved);

      for (let file of resolved.invalidateOnFileChange) {
        res.invalidateOnFileChange.add(file);
      }

      let moduleChildren = children.get(resolved.resolved);
      if (moduleChildren) {
        for (let specifier of moduleChildren) {
          addKey(specifier, resolved.resolved);
        }
      }
    };

    addKey(name, from);
    this.invalidationsCache.set(key, res);
    return res;
  }

  invalidate(name: DependencySpecifier, from: FilePath) {
    let seen = new Set();

    let invalidate = (name, from) => {
      let basedir = path.dirname(from);
      let key = basedir + ':' + name;
      if (seen.has(key)) {
        return;
      }

      seen.add(key);
      let resolved = cache.get(key);
      if (!resolved || !path.isAbsolute(resolved.resolved)) {
        return;
      }

      // $FlowFixMe
      let module = Module._cache[resolved.resolved];
      if (module) {
        // $FlowFixMe
        delete Module._cache[resolved.resolved];
      }

      let moduleChildren = children.get(resolved.resolved);
      if (moduleChildren) {
        for (let specifier of moduleChildren) {
          invalidate(specifier, resolved.resolved);
        }
      }

      children.delete(resolved.resolved);
      cache.delete(key);
      this.resolver.invalidate(resolved.resolved);
      this.syncResolver.invalidate(resolved.resolved);
    };

    invalidate(name, from);
  }
}

registerSerializableClass(
  `${pkg.version}:NodePackageManager`,
  NodePackageManager,
);
