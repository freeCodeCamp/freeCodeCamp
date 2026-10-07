// @flow

import type {FilePath, DependencySpecifier, PackageJSON} from '@parcel/types';
import type {ResolverContext} from './NodeResolverBase';
import type {ResolveResult} from './types';

import path from 'path';
import {NodeResolverBase} from './NodeResolverBase';

export class NodeResolverSync extends NodeResolverBase<ResolveResult> {
  resolve(id: DependencySpecifier, from: FilePath): ResolveResult {
    let ctx = {
      invalidateOnFileCreate: [],
      invalidateOnFileChange: new Set(),
    };

    if (id[0] === '.') {
      id = path.resolve(path.dirname(from), id);
    }

    let res = path.isAbsolute(id)
      ? this.loadRelative(id, ctx)
      : this.loadNodeModules(id, from, ctx);

    if (!res) {
      let e = new Error(`Could not resolve module "${id}" from "${from}"`);
      // $FlowFixMe
      e.code = 'MODULE_NOT_FOUND';
      throw e;
    }

    if (path.isAbsolute(res.resolved)) {
      res.resolved = this.fs.realpathSync(res.resolved);
    }

    return res;
  }

  loadRelative(id: FilePath, ctx: ResolverContext): ?ResolveResult {
    // First try as a file, then as a directory.
    return this.loadAsFile(id, null, ctx) || this.loadDirectory(id, null, ctx);
  }

  findPackage(sourceFile: FilePath, ctx: ResolverContext): ?PackageJSON {
    // If in node_modules, take a shortcut to find the package.json in the root of the package.
    let pkgPath = this.getNodeModulesPackagePath(sourceFile);
    if (pkgPath) {
      return this.readPackage(pkgPath, ctx);
    }

    // Find the nearest package.json file within the current node_modules folder
    let dir = path.dirname(sourceFile);
    let pkgFile = this.fs.findAncestorFile(
      ['package.json'],
      dir,
      this.projectRoot,
    );
    if (pkgFile != null) {
      return this.readPackage(pkgFile, ctx);
    }
  }

  readPackage(file: FilePath, ctx: ResolverContext): PackageJSON {
    let cached = this.packageCache.get(file);

    if (cached) {
      ctx.invalidateOnFileChange.add(file);
      return cached;
    }

    let json;
    try {
      json = this.fs.readFileSync(file, 'utf8');
    } catch (err) {
      ctx.invalidateOnFileCreate.push({
        filePath: file,
      });
      throw err;
    }

    // Add the invalidation *before* we try to parse the JSON in case of errors
    // so that changes are picked up if the file is edited to fix the error.
    ctx.invalidateOnFileChange.add(file);

    let pkg = JSON.parse(json);

    this.packageCache.set(file, pkg);
    return pkg;
  }

  loadAsFile(
    file: FilePath,
    pkg: ?PackageJSON,
    ctx: ResolverContext,
  ): ?ResolveResult {
    // Try all supported extensions
    let files = this.expandFile(file);
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
        resolved: this.fs.realpathSync(found),
        // Find a package.json file in the current package.
        pkg: pkg ?? this.findPackage(file, ctx),
        invalidateOnFileCreate: ctx.invalidateOnFileCreate,
        invalidateOnFileChange: ctx.invalidateOnFileChange,
      };
    }

    return null;
  }

  loadDirectory(
    dir: FilePath,
    pkg: ?PackageJSON = null,
    ctx: ResolverContext,
  ): ?ResolveResult {
    try {
      pkg = this.readPackage(path.join(dir, 'package.json'), ctx);

      // Get a list of possible package entry points.
      let entries = this.getPackageEntries(dir, pkg);

      for (let file of entries) {
        // First try loading package.main as a file, then try as a directory.
        const res =
          this.loadAsFile(file, pkg, ctx) || this.loadDirectory(file, pkg, ctx);
        if (res) {
          return res;
        }
      }
    } catch (err) {
      // ignore
    }

    // Fall back to an index file inside the directory.
    return this.loadAsFile(path.join(dir, 'index'), pkg, ctx);
  }

  loadNodeModules(
    id: DependencySpecifier,
    from: FilePath,
    ctx: ResolverContext,
  ): ?ResolveResult {
    try {
      let module = this.findNodeModulePath(id, from, ctx);
      if (!module || module.resolved) {
        return module;
      }

      // If a module was specified as a module sub-path (e.g. some-module/some/path),
      // it is likely a file. Try loading it as a file first.
      if (module.subPath) {
        let pkg = this.readPackage(
          path.join(module.moduleDir, 'package.json'),
          ctx,
        );
        let res = this.loadAsFile(module.filePath, pkg, ctx);
        if (res) {
          return res;
        }
      }

      // Otherwise, load as a directory.
      if (module.filePath) {
        return this.loadDirectory(module.filePath, null, ctx);
      }
    } catch (e) {
      // ignore
    }
  }
}
