const { promises: fsPromises } = require('fs');
const path = require('path');

/** @type {Map<string, string | undefined>} */
let packageJsonTypeMap = new Map();

/**
 * Infers the current active module system from loader context and options.
 * @this {import('webpack').loader.LoaderContext}
 * @param {import('webpack').ModuleFilenameHelpers} ModuleFilenameHelpers Webpack's module filename helpers.
 * @param {import('../types').NormalizedLoaderOptions} options The normalized loader options.
 * @return {Promise<'esm' | 'cjs'>} The inferred module system.
 */
async function getModuleSystem(ModuleFilenameHelpers, options) {
  // Check loader options -
  // if `esModule` is set we don't have to do extra guess work.
  switch (typeof options.esModule) {
    case 'boolean': {
      return options.esModule ? 'esm' : 'cjs';
    }
    case 'object': {
      if (
        options.esModule.include &&
        ModuleFilenameHelpers.matchPart(this.resourcePath, options.esModule.include)
      ) {
        return 'esm';
      }
      if (
        options.esModule.exclude &&
        ModuleFilenameHelpers.matchPart(this.resourcePath, options.esModule.exclude)
      ) {
        return 'cjs';
      }

      break;
    }
    default: // Do nothing
  }

  // Check current resource's extension
  if (/\.mjs$/.test(this.resourcePath)) return 'esm';
  if (/\.cjs$/.test(this.resourcePath)) return 'cjs';

  if (typeof this.addMissingDependency !== 'function') {
    // This is Webpack 4 which does not support `import.meta`.
    // We assume `.js` files are CommonJS because the output cannot be ESM anyway.
    return 'cjs';
  }

  // We will assume CommonJS if we cannot determine otherwise
  let packageJsonType = '';

  // We begin our search for relevant `package.json` files,
  // at the directory of the resource being loaded.
  // These paths should already be resolved,
  // but we resolve them again to ensure we are dealing with an aboslute path.
  const resourceContext = path.dirname(this.resourcePath);
  let searchPath = resourceContext;
  let previousSearchPath = '';
  // We start our search just above the root context of the webpack compilation
  const stopPath = path.dirname(this.rootContext);

  // If the module context is a resolved symlink outside the `rootContext` path,
  // then we will never find the `stopPath` - so we also halt when we hit the root.
  // Note that there is a potential that the wrong `package.json` is found in some pathalogical cases,
  // such as a folder that is conceptually a package + does not have an ancestor `package.json`,
  // but there exists a `package.json` higher up.
  // This might happen if you have a folder of utility JS files that you symlink but did not organize as a package.
  // We consider this an unsupported edge case for now.
  while (searchPath !== stopPath && searchPath !== previousSearchPath) {
    // If we have already determined the `package.json` type for this path we can stop searching.
    // We do however still need to cache the found value,
    // from the `resourcePath` folder up to the matching `searchPath`,
    // to avoid retracing these steps when processing sibling resources.
    if (packageJsonTypeMap.has(searchPath)) {
      packageJsonType = packageJsonTypeMap.get(searchPath);

      let currentPath = resourceContext;
      while (currentPath !== searchPath) {
        // We set the found type at least level from `resourcePath` folder up to the matching `searchPath`
        packageJsonTypeMap.set(currentPath, packageJsonType);
        currentPath = path.dirname(currentPath);
      }
      break;
    }

    let packageJsonPath = path.join(searchPath, 'package.json');
    try {
      const packageSource = await fsPromises.readFile(packageJsonPath, 'utf-8');
      try {
        const packageObject = JSON.parse(packageSource);

        // Any package.json is sufficient as long as it can be parsed.
        // If it does not explicitly have a `type: "module"` it will be assumed to be CommonJS.
        packageJsonType = typeof packageObject.type === 'string' ? packageObject.type : '';
        packageJsonTypeMap.set(searchPath, packageJsonType);

        // We set the type in the cache for all paths from the `resourcePath` folder,
        // up to the matching `searchPath` to avoid retracing these steps when processing sibling resources.
        let currentPath = resourceContext;
        while (currentPath !== searchPath) {
          packageJsonTypeMap.set(currentPath, packageJsonType);
          currentPath = path.dirname(currentPath);
        }
      } catch (e) {
        // `package.json` exists but could not be parsed.
        // We track it as a dependency so we can reload if this file changes.
      }

      this.addDependency(packageJsonPath);
      break;
    } catch (e) {
      // `package.json` does not exist.
      // We track it as a missing dependency so we can reload if this file is added.
      this.addMissingDependency(packageJsonPath);
    }

    // Try again at the next level up
    previousSearchPath = searchPath;
    searchPath = path.dirname(searchPath);
  }

  // Check `package.json` for the `type` field -
  // fallback to use `cjs` for anything ambiguous.
  return packageJsonType === 'module' ? 'esm' : 'cjs';
}

module.exports = getModuleSystem;
