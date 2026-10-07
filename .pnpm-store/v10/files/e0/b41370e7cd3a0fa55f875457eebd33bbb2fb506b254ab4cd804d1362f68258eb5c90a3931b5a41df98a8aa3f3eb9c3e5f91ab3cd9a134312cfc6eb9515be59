// @flow strict-local

import type {
  BundleGraph,
  BundleGroup,
  Dependency,
  Environment,
  PluginOptions,
  NamedBundle,
  RuntimeAsset,
} from '@parcel/types';

import {Runtime} from '@parcel/plugin';
import {relativeBundlePath} from '@parcel/utils';
import path from 'path';
import nullthrows from 'nullthrows';

// Used for as="" in preload/prefetch
const TYPE_TO_RESOURCE_PRIORITY = {
  css: 'style',
  js: 'script',
};

const BROWSER_PRELOAD_LOADER = './helpers/browser/preload-loader';
const BROWSER_PREFETCH_LOADER = './helpers/browser/prefetch-loader';

const LOADERS = {
  browser: {
    css: './helpers/browser/css-loader',
    html: './helpers/browser/html-loader',
    js: './helpers/browser/js-loader',
    wasm: './helpers/browser/wasm-loader',
    IMPORT_POLYFILL: './helpers/browser/import-polyfill',
  },
  worker: {
    js: './helpers/worker/js-loader',
    wasm: './helpers/worker/wasm-loader',
    IMPORT_POLYFILL: false,
  },
  node: {
    css: './helpers/node/css-loader',
    html: './helpers/node/html-loader',
    js: './helpers/node/js-loader',
    wasm: './helpers/node/wasm-loader',
    IMPORT_POLYFILL: null,
  },
};

function getLoaders(
  ctx: Environment,
): ?{[string]: string, IMPORT_POLYFILL: null | false | string, ...} {
  if (ctx.isWorker()) return LOADERS.worker;
  if (ctx.isBrowser()) return LOADERS.browser;
  if (ctx.isNode()) return LOADERS.node;
  return null;
}

// This cache should be invalidated if new dependencies get added to the bundle without the bundle objects changing
// This can happen when we reuse the BundleGraph between subsequent builds
let bundleDependencies = new WeakMap<
  NamedBundle,
  {|
    asyncDependencies: Array<Dependency>,
    otherDependencies: Array<Dependency>,
  |},
>();

export default (new Runtime({
  apply({bundle, bundleGraph, options}) {
    // Dependency ids in code replaced with referenced bundle names
    // Loader runtime added for bundle groups that don't have a native loader (e.g. HTML/CSS/Worker - isURL?),
    // and which are not loaded by a parent bundle.
    // Loaders also added for modules that were moved to a separate bundle because they are a different type
    // (e.g. WASM, HTML). These should be preloaded prior to the bundle being executed. Replace the entry asset(s)
    // with the preload module.

    if (bundle.type !== 'js') {
      return;
    }

    let {asyncDependencies, otherDependencies} = getDependencies(bundle);

    let assets = [];
    for (let dependency of asyncDependencies) {
      let resolved = bundleGraph.resolveAsyncDependency(dependency, bundle);
      if (resolved == null) {
        continue;
      }

      if (resolved.type === 'asset') {
        if (!bundle.env.shouldScopeHoist) {
          // If this bundle already has the asset this dependency references,
          // return a simple runtime of `Promise.resolve(internalRequire(assetId))`.
          // The linker handles this for scope-hoisting.
          assets.push({
            filePath: __filename,
            code: `module.exports = Promise.resolve(module.bundle.root(${JSON.stringify(
              bundleGraph.getAssetPublicId(resolved.value),
            )}))`,
            dependency,
            env: {sourceType: 'module'},
          });
        }
      } else {
        // Resolve the dependency to a bundle. If inline, export the dependency id,
        // which will be replaced with the contents of that bundle later.
        let referencedBundle = bundleGraph.getReferencedBundle(
          dependency,
          bundle,
        );
        if (referencedBundle?.bundleBehavior === 'inline') {
          assets.push({
            filePath: path.join(
              __dirname,
              `/bundles/${referencedBundle.id}.js`,
            ),
            code: `module.exports = Promise.resolve(${JSON.stringify(
              dependency.id,
            )});`,
            dependency,
            env: {sourceType: 'module'},
          });
          continue;
        }

        let loaderRuntime = getLoaderRuntime({
          bundle,
          dependency,
          bundleGraph,
          bundleGroup: resolved.value,
          options,
        });

        if (loaderRuntime != null) {
          assets.push(loaderRuntime);
        }
      }
    }

    for (let dependency of otherDependencies) {
      // Resolve the dependency to a bundle. If inline, export the dependency id,
      // which will be replaced with the contents of that bundle later.
      let referencedBundle = bundleGraph.getReferencedBundle(
        dependency,
        bundle,
      );
      if (referencedBundle?.bundleBehavior === 'inline') {
        assets.push({
          filePath: path.join(__dirname, `/bundles/${referencedBundle.id}.js`),
          code: `module.exports = ${JSON.stringify(dependency.id)};`,
          dependency,
          env: {sourceType: 'module'},
        });
        continue;
      }

      // Otherwise, try to resolve the dependency to an external bundle group
      // and insert a URL to that bundle.
      let resolved = bundleGraph.resolveAsyncDependency(dependency, bundle);
      if (dependency.specifierType === 'url' && resolved == null) {
        // If a URL dependency was not able to be resolved, add a runtime that
        // exports the original specifier.
        assets.push({
          filePath: __filename,
          code: `module.exports = ${JSON.stringify(dependency.specifier)}`,
          dependency,
          env: {sourceType: 'module'},
        });
        continue;
      }

      if (resolved == null || resolved.type !== 'bundle_group') {
        continue;
      }

      let bundleGroup = resolved.value;
      let mainBundle = nullthrows(
        bundleGraph.getBundlesInBundleGroup(bundleGroup).find(b => {
          let entries = b.getEntryAssets();
          return entries.some(e => bundleGroup.entryAssetId === e.id);
        }),
      );

      // Skip URL runtimes for library builds. This is handled in packaging so that
      // the url is inlined and statically analyzable.
      if (bundle.env.isLibrary && dependency.meta?.placeholder != null) {
        continue;
      }

      // URL dependency or not, fall back to including a runtime that exports the url
      assets.push(getURLRuntime(dependency, bundle, mainBundle, options));
    }

    // In development, bundles can be created lazily. This means that the parent bundle may not
    // know about all of the sibling bundles of a child when it is written for the first time.
    // Therefore, we need to also ensure that the siblings are loaded when the child loads.
    if (options.shouldBuildLazily && bundle.env.outputFormat === 'global') {
      let referenced = bundleGraph.getReferencedBundles(bundle);
      for (let referencedBundle of referenced) {
        let loaders = getLoaders(bundle.env);
        if (!loaders) {
          continue;
        }

        let loader = loaders[referencedBundle.type];
        if (!loader) {
          continue;
        }

        let relativePathExpr = getRelativePathExpr(
          bundle,
          referencedBundle,
          options,
        );
        let loaderCode = `require(${JSON.stringify(
          loader,
        )})( ${getAbsoluteUrlExpr(relativePathExpr, bundle)})`;
        assets.push({
          filePath: __filename,
          code: loaderCode,
          isEntry: true,
          env: {sourceType: 'module'},
        });
      }
    }

    if (
      shouldUseRuntimeManifest(bundle, options) &&
      bundleGraph
        .getChildBundles(bundle)
        .some(b => b.bundleBehavior !== 'inline') &&
      isNewContext(bundle, bundleGraph)
    ) {
      assets.push({
        filePath: __filename,
        code: getRegisterCode(bundle, bundleGraph),
        isEntry: true,
        env: {sourceType: 'module'},
      });
    }

    return assets;
  },
}): Runtime);

function getDependencies(bundle: NamedBundle): {|
  asyncDependencies: Array<Dependency>,
  otherDependencies: Array<Dependency>,
|} {
  let cachedDependencies = bundleDependencies.get(bundle);

  if (cachedDependencies) {
    return cachedDependencies;
  } else {
    let asyncDependencies = [];
    let otherDependencies = [];
    bundle.traverse(node => {
      if (node.type !== 'dependency') {
        return;
      }

      let dependency = node.value;
      if (
        dependency.priority === 'lazy' &&
        dependency.specifierType !== 'url'
      ) {
        asyncDependencies.push(dependency);
      } else {
        otherDependencies.push(dependency);
      }
    });
    bundleDependencies.set(bundle, {asyncDependencies, otherDependencies});
    return {asyncDependencies, otherDependencies};
  }
}

function getLoaderRuntime({
  bundle,
  dependency,
  bundleGroup,
  bundleGraph,
  options,
}: {|
  bundle: NamedBundle,
  dependency: Dependency,
  bundleGroup: BundleGroup,
  bundleGraph: BundleGraph<NamedBundle>,
  options: PluginOptions,
|}): ?RuntimeAsset {
  let loaders = getLoaders(bundle.env);
  if (loaders == null) {
    return;
  }

  let externalBundles = bundleGraph.getBundlesInBundleGroup(bundleGroup);
  let mainBundle = nullthrows(
    externalBundles.find(
      bundle => bundle.getMainEntry()?.id === bundleGroup.entryAssetId,
    ),
  );

  // CommonJS is a synchronous module system, so there is no need to load bundles in parallel.
  // Importing of the other bundles will be handled by the bundle group entry.
  // Do the same thing in library mode for ES modules, as we are building for another bundler
  // and the imports for sibling bundles will be in the target bundle.
  // Also do this when building lazily or the runtime itself could get deduplicated and only
  // exist in the parent. This causes errors if an old version of the parent without the runtime
  // is already loaded.
  if (
    bundle.env.outputFormat === 'commonjs' ||
    bundle.env.isLibrary ||
    options.shouldBuildLazily
  ) {
    externalBundles = [mainBundle];
  } else {
    // Otherwise, load the bundle group entry after the others.
    externalBundles.splice(externalBundles.indexOf(mainBundle), 1);
    externalBundles.reverse().push(mainBundle);
  }

  // Determine if we need to add a dynamic import() polyfill, or if all target browsers support it natively.
  let needsDynamicImportPolyfill =
    !bundle.env.isLibrary && !bundle.env.supports('dynamic-import', true);

  let loaderModules = externalBundles
    .map(to => {
      let loader = loaders[to.type];
      if (!loader) {
        return;
      }

      let relativePathExpr = getRelativePathExpr(bundle, to, options);

      // Use esmodule loader if possible
      if (to.type === 'js' && to.env.outputFormat === 'esmodule') {
        if (!needsDynamicImportPolyfill) {
          return `__parcel__import__("./" + ${relativePathExpr})`;
        }

        loader = nullthrows(
          loaders.IMPORT_POLYFILL,
          `No import() polyfill available for context '${bundle.env.context}'`,
        );
      } else if (to.type === 'js' && to.env.outputFormat === 'commonjs') {
        return `Promise.resolve(__parcel__require__("./" + ${relativePathExpr}))`;
      }

      let code = `require(${JSON.stringify(loader)})(${getAbsoluteUrlExpr(
        relativePathExpr,
        bundle,
      )})`;

      // In development, clear the require cache when an error occurs so the
      // user can try again (e.g. after fixing a build error).
      if (
        options.mode === 'development' &&
        bundle.env.outputFormat === 'global'
      ) {
        code +=
          '.catch(err => {delete module.bundle.cache[module.id]; throw err;})';
      }
      return code;
    })
    .filter(Boolean);

  if (bundle.env.context === 'browser' && !options.shouldBuildLazily) {
    loaderModules.push(
      ...externalBundles
        // TODO: Allow css to preload resources as well
        .filter(to => to.type === 'js')
        .flatMap(from => {
          let {preload, prefetch} = getHintedBundleGroups(bundleGraph, from);

          return [
            ...getHintLoaders(
              bundleGraph,
              bundle,
              preload,
              BROWSER_PRELOAD_LOADER,
              options,
            ),
            ...getHintLoaders(
              bundleGraph,
              bundle,
              prefetch,
              BROWSER_PREFETCH_LOADER,
              options,
            ),
          ];
        }),
    );
  }

  if (loaderModules.length === 0) {
    return;
  }

  let loaderCode = loaderModules.join(', ');
  if (loaderModules.length > 1) {
    loaderCode = `Promise.all([${loaderCode}])`;
  } else {
    loaderCode = `(${loaderCode})`;
  }

  if (mainBundle.type === 'js') {
    let parcelRequire = bundle.env.shouldScopeHoist
      ? 'parcelRequire'
      : 'module.bundle.root';
    loaderCode += `.then(() => ${parcelRequire}('${bundleGraph.getAssetPublicId(
      bundleGraph.getAssetById(bundleGroup.entryAssetId),
    )}'))`;
  }

  return {
    filePath: __filename,
    code: `module.exports = ${loaderCode};`,
    dependency,
    env: {sourceType: 'module'},
  };
}

function getHintedBundleGroups(
  bundleGraph: BundleGraph<NamedBundle>,
  bundle: NamedBundle,
): {|preload: Array<BundleGroup>, prefetch: Array<BundleGroup>|} {
  let preload = [];
  let prefetch = [];
  let {asyncDependencies} = getDependencies(bundle);
  for (let dependency of asyncDependencies) {
    let attributes = dependency.meta?.importAttributes;
    if (
      typeof attributes === 'object' &&
      attributes != null &&
      // $FlowFixMe
      (attributes.preload || attributes.prefetch)
    ) {
      let resolved = bundleGraph.resolveAsyncDependency(dependency, bundle);
      if (resolved?.type === 'bundle_group') {
        // === true for flow
        if (attributes.preload === true) {
          preload.push(resolved.value);
        }
        if (attributes.prefetch === true) {
          prefetch.push(resolved.value);
        }
      }
    }
  }

  return {preload, prefetch};
}

function getHintLoaders(
  bundleGraph: BundleGraph<NamedBundle>,
  from: NamedBundle,
  bundleGroups: Array<BundleGroup>,
  loader: string,
  options: PluginOptions,
): Array<string> {
  let hintLoaders = [];
  for (let bundleGroupToPreload of bundleGroups) {
    let bundlesToPreload =
      bundleGraph.getBundlesInBundleGroup(bundleGroupToPreload);

    for (let bundleToPreload of bundlesToPreload) {
      let relativePathExpr = getRelativePathExpr(
        from,
        bundleToPreload,
        options,
      );
      let priority = TYPE_TO_RESOURCE_PRIORITY[bundleToPreload.type];
      hintLoaders.push(
        `require(${JSON.stringify(loader)})(${getAbsoluteUrlExpr(
          relativePathExpr,
          from,
        )}, ${priority ? JSON.stringify(priority) : 'null'}, ${JSON.stringify(
          bundleToPreload.target.env.outputFormat === 'esmodule',
        )})`,
      );
    }
  }

  return hintLoaders;
}

function isNewContext(
  bundle: NamedBundle,
  bundleGraph: BundleGraph<NamedBundle>,
): boolean {
  let parents = bundleGraph.getParentBundles(bundle);
  let isInEntryBundleGroup = bundleGraph
    .getBundleGroupsContainingBundle(bundle)
    .some(g => bundleGraph.isEntryBundleGroup(g));
  return (
    isInEntryBundleGroup ||
    parents.length === 0 ||
    parents.some(
      parent =>
        parent.env.context !== bundle.env.context || parent.type !== 'js',
    )
  );
}

function getURLRuntime(
  dependency: Dependency,
  from: NamedBundle,
  to: NamedBundle,
  options: PluginOptions,
): RuntimeAsset {
  let relativePathExpr = getRelativePathExpr(from, to, options);
  let code;

  if (dependency.meta.webworker === true && !from.env.isLibrary) {
    code = `let workerURL = require('./helpers/get-worker-url');\n`;
    if (
      from.env.outputFormat === 'esmodule' &&
      from.env.supports('import-meta-url')
    ) {
      code += `let url = new __parcel__URL__(${relativePathExpr});\n`;
      code += `module.exports = workerURL(url.toString(), url.origin, ${String(
        from.env.outputFormat === 'esmodule',
      )});`;
    } else {
      code += `let bundleURL = require('./helpers/bundle-url');\n`;
      code += `let url = bundleURL.getBundleURL('${from.publicId}') + ${relativePathExpr};`;
      code += `module.exports = workerURL(url, bundleURL.getOrigin(url), ${String(
        from.env.outputFormat === 'esmodule',
      )});`;
    }
  } else {
    code = `module.exports = ${getAbsoluteUrlExpr(relativePathExpr, from)};`;
  }

  return {
    filePath: __filename,
    code,
    dependency,
    env: {sourceType: 'module'},
  };
}

function getRegisterCode(
  entryBundle: NamedBundle,
  bundleGraph: BundleGraph<NamedBundle>,
): string {
  let idToName = {};
  bundleGraph.traverseBundles((bundle, _, actions) => {
    if (bundle.bundleBehavior === 'inline') {
      return;
    }

    idToName[bundle.publicId] = path.basename(nullthrows(bundle.name));

    if (bundle !== entryBundle && isNewContext(bundle, bundleGraph)) {
      for (let referenced of bundleGraph.getReferencedBundles(bundle)) {
        idToName[referenced.publicId] = path.basename(
          nullthrows(referenced.name),
        );
      }
      // New contexts have their own manifests, so there's no need to continue.
      actions.skipChildren();
    }
  }, entryBundle);

  return (
    "require('./helpers/bundle-manifest').register(JSON.parse(" +
    JSON.stringify(JSON.stringify(idToName)) +
    '));'
  );
}

function getRelativePathExpr(
  from: NamedBundle,
  to: NamedBundle,
  options: PluginOptions,
): string {
  let relativePath = relativeBundlePath(from, to, {leadingDotSlash: false});
  if (shouldUseRuntimeManifest(from, options)) {
    // Get the relative part of the path. This part is not in the manifest, only the basename is.
    let relativeBase = path.posix.dirname(relativePath);
    if (relativeBase === '.') {
      relativeBase = '';
    } else {
      relativeBase = `${JSON.stringify(relativeBase + '/')} + `;
    }
    return (
      relativeBase +
      `require('./helpers/bundle-manifest').resolve(${JSON.stringify(
        to.publicId,
      )})`
    );
  }

  let res = JSON.stringify(relativePath);
  if (options.hmrOptions) {
    res += ' + "?" + Date.now()';
  }

  return res;
}

function getAbsoluteUrlExpr(relativePathExpr: string, bundle: NamedBundle) {
  if (
    (bundle.env.outputFormat === 'esmodule' &&
      bundle.env.supports('import-meta-url')) ||
    bundle.env.outputFormat === 'commonjs'
  ) {
    // This will be compiled to new URL(url, import.meta.url) or new URL(url, 'file:' + __filename).
    return `new __parcel__URL__(${relativePathExpr}).toString()`;
  } else {
    return `require('./helpers/bundle-url').getBundleURL('${bundle.publicId}') + ${relativePathExpr}`;
  }
}

function shouldUseRuntimeManifest(
  bundle: NamedBundle,
  options: PluginOptions,
): boolean {
  let env = bundle.env;
  return (
    !env.isLibrary &&
    bundle.bundleBehavior !== 'inline' &&
    env.isBrowser() &&
    options.mode === 'production'
  );
}
