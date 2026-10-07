// @flow

import type {
  Asset,
  BundleGraph,
  Dependency,
  PluginOptions,
  NamedBundle,
} from '@parcel/types';

import {
  DefaultMap,
  PromiseQueue,
  relativeBundlePath,
  countLines,
  normalizeSeparators,
} from '@parcel/utils';
import SourceMap from '@parcel/source-map';
import nullthrows from 'nullthrows';
import invariant from 'assert';
import ThrowableDiagnostic from '@parcel/diagnostic';
import globals from 'globals';
import path from 'path';

import {ESMOutputFormat} from './ESMOutputFormat';
import {CJSOutputFormat} from './CJSOutputFormat';
import {GlobalOutputFormat} from './GlobalOutputFormat';
import {prelude, helpers} from './helpers';
import {replaceScriptDependencies, getSpecifier} from './utils';

// https://262.ecma-international.org/6.0/#sec-names-and-keywords
const IDENTIFIER_RE = /^[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}]*$/u;
const ID_START_RE = /^[$_\p{ID_Start}]/u;
const NON_ID_CONTINUE_RE = /[^$_\u200C\u200D\p{ID_Continue}]/gu;

// General regex used to replace imports with the resolved code, references with resolutions,
// and count the number of newlines in the file for source maps.
const REPLACEMENT_RE =
  /\n|import\s+"([0-9a-f]{16}:.+?)";|(?:\$[0-9a-f]{16}\$exports)|(?:\$[0-9a-f]{16}\$(?:import|importAsync|require)\$[0-9a-f]+(?:\$[0-9a-f]+)?)/g;

const BUILTINS = Object.keys(globals.builtin);
const GLOBALS_BY_CONTEXT = {
  browser: new Set([...BUILTINS, ...Object.keys(globals.browser)]),
  'web-worker': new Set([...BUILTINS, ...Object.keys(globals.worker)]),
  'service-worker': new Set([
    ...BUILTINS,
    ...Object.keys(globals.serviceworker),
  ]),
  worklet: new Set([...BUILTINS]),
  node: new Set([...BUILTINS, ...Object.keys(globals.node)]),
  'electron-main': new Set([...BUILTINS, ...Object.keys(globals.node)]),
  'electron-renderer': new Set([
    ...BUILTINS,
    ...Object.keys(globals.node),
    ...Object.keys(globals.browser),
  ]),
};

const OUTPUT_FORMATS = {
  esmodule: ESMOutputFormat,
  commonjs: CJSOutputFormat,
  global: GlobalOutputFormat,
};

export interface OutputFormat {
  buildBundlePrelude(): [string, number];
  buildBundlePostlude(): [string, number];
}

export class ScopeHoistingPackager {
  options: PluginOptions;
  bundleGraph: BundleGraph<NamedBundle>;
  bundle: NamedBundle;
  parcelRequireName: string;
  outputFormat: OutputFormat;
  isAsyncBundle: boolean;
  globalNames: $ReadOnlySet<string>;
  assetOutputs: Map<string, {|code: string, map: ?Buffer|}>;
  exportedSymbols: Map<
    string,
    {|
      asset: Asset,
      exportSymbol: string,
      local: string,
      exportAs: Array<string>,
    |},
  > = new Map();
  externals: Map<string, Map<string, string>> = new Map();
  topLevelNames: Map<string, number> = new Map();
  seenAssets: Set<string> = new Set();
  wrappedAssets: Set<string> = new Set();
  hoistedRequires: Map<string, Map<string, string>> = new Map();
  needsPrelude: boolean = false;
  usedHelpers: Set<string> = new Set();

  constructor(
    options: PluginOptions,
    bundleGraph: BundleGraph<NamedBundle>,
    bundle: NamedBundle,
    parcelRequireName: string,
  ) {
    this.options = options;
    this.bundleGraph = bundleGraph;
    this.bundle = bundle;
    this.parcelRequireName = parcelRequireName;

    let OutputFormat = OUTPUT_FORMATS[this.bundle.env.outputFormat];
    this.outputFormat = new OutputFormat(this);

    this.isAsyncBundle =
      this.bundleGraph.hasParentBundleOfType(this.bundle, 'js') &&
      !this.bundle.env.isIsolated() &&
      this.bundle.bundleBehavior !== 'isolated';

    this.globalNames = GLOBALS_BY_CONTEXT[bundle.env.context];
  }

  async package(): Promise<{|contents: string, map: ?SourceMap|}> {
    let wrappedAssets = await this.loadAssets();
    this.buildExportedSymbols();

    // If building a library, the target is actually another bundler rather
    // than the final output that could be loaded in a browser. So, loader
    // runtimes are excluded, and instead we add imports into the entry bundle
    // of each bundle group pointing at the sibling bundles. These can be
    // picked up by another bundler later at which point runtimes will be added.
    if (
      this.bundle.env.isLibrary ||
      this.bundle.env.outputFormat === 'commonjs'
    ) {
      let bundles = this.bundleGraph.getReferencedBundles(this.bundle);
      for (let b of bundles) {
        this.externals.set(relativeBundlePath(this.bundle, b), new Map());
      }
    }

    let res = '';
    let lineCount = 0;
    let sourceMap = null;
    let processAsset = asset => {
      let [content, map, lines] = this.visitAsset(asset);
      if (sourceMap && map) {
        sourceMap.addSourceMap(map, lineCount);
      } else if (this.bundle.env.sourceMap) {
        sourceMap = map;
      }

      res += content + '\n';
      lineCount += lines + 1;
    };

    // Hoist wrapped asset to the top of the bundle to ensure that they are registered
    // before they are used.
    for (let asset of wrappedAssets) {
      if (!this.seenAssets.has(asset.id)) {
        processAsset(asset);
      }
    }

    // Add each asset that is directly connected to the bundle. Dependencies will be handled
    // by replacing `import` statements in the code.
    this.bundle.traverseAssets((asset, _, actions) => {
      if (this.seenAssets.has(asset.id)) {
        actions.skipChildren();
        return;
      }

      processAsset(asset);
      actions.skipChildren();
    });

    let [prelude, preludeLines] = this.buildBundlePrelude();
    res = prelude + res;
    lineCount += preludeLines;
    sourceMap?.offsetLines(1, preludeLines);

    let entries = this.bundle.getEntryAssets();
    let mainEntry = this.bundle.getMainEntry();
    if (this.isAsyncBundle) {
      // In async bundles we don't want the main entry to execute until we require it
      // as there might be dependencies in a sibling bundle that hasn't loaded yet.
      entries = entries.filter(a => a.id !== mainEntry?.id);
      mainEntry = null;
    }

    // If any of the entry assets are wrapped, call parcelRequire so they are executed.
    for (let entry of entries) {
      if (this.wrappedAssets.has(entry.id) && !this.isScriptEntry(entry)) {
        let parcelRequire = `parcelRequire(${JSON.stringify(
          this.bundleGraph.getAssetPublicId(entry),
        )});\n`;

        let entryExports = entry.symbols.get('*')?.local;
        if (
          entryExports &&
          entry === mainEntry &&
          this.exportedSymbols.has(entryExports)
        ) {
          res += `\nvar ${entryExports} = ${parcelRequire}`;
        } else {
          res += `\n${parcelRequire}`;
        }

        lineCount += 2;
      }
    }

    let [postlude, postludeLines] = this.outputFormat.buildBundlePostlude();
    res += postlude;
    lineCount += postludeLines;

    // The entry asset of a script bundle gets hoisted outside the bundle wrapper so that
    // its top-level variables become globals like a real browser script. We need to replace
    // all dependency references for runtimes with a parcelRequire call.
    if (
      this.bundle.env.outputFormat === 'global' &&
      this.bundle.env.sourceType === 'script'
    ) {
      res += '\n';
      lineCount++;

      let mainEntry = nullthrows(this.bundle.getMainEntry());
      let {code, map: mapBuffer} = nullthrows(
        this.assetOutputs.get(mainEntry.id),
      );
      let map;
      if (mapBuffer) {
        map = new SourceMap(this.options.projectRoot, mapBuffer);
      }
      res += replaceScriptDependencies(
        this.bundleGraph,
        this.bundle,
        code,
        map,
        this.parcelRequireName,
      );
      if (sourceMap && map) {
        sourceMap.addSourceMap(map, lineCount);
      }
    }

    return {
      contents: res,
      map: sourceMap,
    };
  }

  async loadAssets(): Promise<Array<Asset>> {
    let queue = new PromiseQueue({maxConcurrent: 32});
    let wrapped = [];
    this.bundle.traverseAssets(asset => {
      queue.add(async () => {
        let [code, map] = await Promise.all([
          asset.getCode(),
          this.bundle.env.sourceMap ? asset.getMapBuffer() : null,
        ]);
        return [asset.id, {code, map}];
      });

      if (
        asset.meta.shouldWrap ||
        this.isAsyncBundle ||
        this.bundle.env.sourceType === 'script' ||
        this.bundleGraph.isAssetReferenced(this.bundle, asset) ||
        this.bundleGraph
          .getIncomingDependencies(asset)
          .some(dep => dep.meta.shouldWrap && dep.specifierType !== 'url')
      ) {
        this.wrappedAssets.add(asset.id);
        wrapped.push(asset);
      }
    });

    for (let wrappedAssetRoot of [...wrapped]) {
      this.bundle.traverseAssets((asset, _, actions) => {
        if (asset === wrappedAssetRoot) {
          return;
        }

        if (this.wrappedAssets.has(asset.id)) {
          actions.skipChildren();
          return;
        }

        this.wrappedAssets.add(asset.id);
        wrapped.push(asset);
      }, wrappedAssetRoot);
    }

    this.assetOutputs = new Map(await queue.run());
    return wrapped;
  }

  buildExportedSymbols() {
    if (
      this.isAsyncBundle ||
      !this.bundle.env.isLibrary ||
      this.bundle.env.outputFormat !== 'esmodule'
    ) {
      return;
    }

    // TODO: handle ESM exports of wrapped entry assets...
    let entry = this.bundle.getMainEntry();
    if (entry && !this.wrappedAssets.has(entry.id)) {
      for (let {
        asset,
        exportAs,
        symbol,
        exportSymbol,
      } of this.bundleGraph.getExportedSymbols(entry)) {
        if (typeof symbol === 'string') {
          let symbols = this.exportedSymbols.get(
            symbol === '*' ? nullthrows(entry.symbols.get('*')?.local) : symbol,
          )?.exportAs;

          if (!symbols) {
            symbols = [];
            this.exportedSymbols.set(symbol, {
              asset,
              exportSymbol,
              local: symbol,
              exportAs: symbols,
            });
          }

          if (exportAs === '*') {
            exportAs = 'default';
          }

          symbols.push(exportAs);
        } else if (symbol === null) {
          // TODO `meta.exportsIdentifier[exportSymbol]` should be exported
          // let relativePath = relative(options.projectRoot, asset.filePath);
          // throw getThrowableDiagnosticForNode(
          //   md`${relativePath} couldn't be statically analyzed when importing '${exportSymbol}'`,
          //   entry.filePath,
          //   loc,
          // );
        } else if (symbol !== false) {
          // let relativePath = relative(options.projectRoot, asset.filePath);
          // throw getThrowableDiagnosticForNode(
          //   md`${relativePath} does not export '${exportSymbol}'`,
          //   entry.filePath,
          //   loc,
          // );
        }
      }
    }
  }

  getTopLevelName(name: string): string {
    name = name.replace(NON_ID_CONTINUE_RE, '');
    if (!ID_START_RE.test(name) || this.globalNames.has(name)) {
      name = '_' + name;
    }

    let count = this.topLevelNames.get(name);
    if (count == null) {
      this.topLevelNames.set(name, 1);
      return name;
    }

    this.topLevelNames.set(name, count + 1);
    return name + count;
  }

  getPropertyAccess(obj: string, property: string): string {
    if (IDENTIFIER_RE.test(property)) {
      return `${obj}.${property}`;
    }

    return `${obj}[${JSON.stringify(property)}]`;
  }

  visitAsset(asset: Asset): [string, ?SourceMap, number] {
    invariant(!this.seenAssets.has(asset.id), 'Already visited asset');
    this.seenAssets.add(asset.id);

    let {code, map} = nullthrows(this.assetOutputs.get(asset.id));
    return this.buildAsset(asset, code, map);
  }

  buildAsset(
    asset: Asset,
    code: string,
    map: ?Buffer,
  ): [string, ?SourceMap, number] {
    let shouldWrap = this.wrappedAssets.has(asset.id);
    let deps = this.bundleGraph.getDependencies(asset);

    let sourceMap =
      this.bundle.env.sourceMap && map
        ? new SourceMap(this.options.projectRoot, map)
        : null;

    // If this asset is skipped, just add dependencies and not the asset's content.
    if (this.shouldSkipAsset(asset)) {
      let depCode = '';
      let lineCount = 0;
      for (let dep of deps) {
        let resolved = this.bundleGraph.getResolvedAsset(dep, this.bundle);
        let skipped = this.bundleGraph.isDependencySkipped(dep);
        if (skipped) {
          continue;
        }

        if (!resolved) {
          if (!dep.isOptional) {
            this.addExternal(dep);
          }

          continue;
        }

        if (
          this.bundle.hasAsset(resolved) &&
          !this.seenAssets.has(resolved.id)
        ) {
          let [code, map, lines] = this.visitAsset(resolved);
          depCode += code + '\n';
          if (sourceMap && map) {
            sourceMap.addSourceMap(map, lineCount);
          }
          lineCount += lines + 1;
        }
      }

      return [depCode, sourceMap, lineCount];
    }

    // TODO: maybe a meta prop?
    if (code.includes('$parcel$global')) {
      this.usedHelpers.add('$parcel$global');
    }

    if (this.bundle.env.isNode() && asset.meta.has_node_replacements) {
      const relPath = normalizeSeparators(
        path.relative(this.bundle.target.distDir, path.dirname(asset.filePath)),
      );
      code = code.replace('$parcel$dirnameReplace', relPath);
      code = code.replace('$parcel$filenameReplace', relPath);
    }

    let [depMap, replacements] = this.buildReplacements(asset, deps);
    let [prepend, prependLines, append] = this.buildAssetPrelude(asset, deps);
    if (prependLines > 0) {
      sourceMap?.offsetLines(1, prependLines);
      code = prepend + code;
    }

    code += append;

    let lineCount = 0;
    let depContent = [];
    if (depMap.size === 0 && replacements.size === 0) {
      // If there are no dependencies or replacements, use a simple function to count the number of lines.
      lineCount = countLines(code) - 1;
    } else {
      // Otherwise, use a regular expression to perform replacements.
      // We need to track how many newlines there are for source maps, replace
      // all import statements with dependency code, and perform inline replacements
      // of all imported symbols with their resolved export symbols. This is all done
      // in a single regex so that we only do one pass over the whole code.
      let offset = 0;
      let columnStartIndex = 0;
      code = code.replace(REPLACEMENT_RE, (m, d, i) => {
        if (m === '\n') {
          columnStartIndex = i + offset + 1;
          lineCount++;
          return '\n';
        }

        // If we matched an import, replace with the source code for the dependency.
        if (d != null) {
          let deps = depMap.get(d);
          if (!deps) {
            return m;
          }

          let replacement = '';

          // A single `${id}:${specifier}:esm` might have been resolved to multiple assets due to
          // reexports.
          for (let dep of deps) {
            let resolved = this.bundleGraph.getResolvedAsset(dep, this.bundle);
            let skipped = this.bundleGraph.isDependencySkipped(dep);
            if (resolved && !skipped) {
              // Hoist variable declarations for the referenced parcelRequire dependencies
              // after the dependency is declared. This handles the case where the resulting asset
              // is wrapped, but the dependency in this asset is not marked as wrapped. This means
              // that it was imported/required at the top-level, so its side effects should run immediately.
              let [res, lines] = this.getHoistedParcelRequires(
                asset,
                dep,
                resolved,
              );
              let map;
              if (
                this.bundle.hasAsset(resolved) &&
                !this.seenAssets.has(resolved.id)
              ) {
                // If this asset is wrapped, we need to hoist the code for the dependency
                // outside our parcelRequire.register wrapper. This is safe because all
                // assets referenced by this asset will also be wrapped. Otherwise, inline the
                // asset content where the import statement was.
                if (shouldWrap) {
                  depContent.push(this.visitAsset(resolved));
                } else {
                  let [depCode, depMap, depLines] = this.visitAsset(resolved);
                  res = depCode + '\n' + res;
                  lines += 1 + depLines;
                  map = depMap;
                }
              }

              // Push this asset's source mappings down by the number of lines in the dependency
              // plus the number of hoisted parcelRequires. Then insert the source map for the dependency.
              if (sourceMap) {
                if (lines > 0) {
                  sourceMap.offsetLines(lineCount + 1, lines);
                }

                if (map) {
                  sourceMap.addSourceMap(map, lineCount);
                }
              }

              replacement += res;
              lineCount += lines;
            }
          }
          return replacement;
        }

        // If it wasn't a dependency, then it was an inline replacement (e.g. $id$import$foo -> $id$export$foo).
        let replacement = replacements.get(m) ?? m;
        if (sourceMap) {
          // Offset the source map columns for this line if the replacement was a different length.
          // This assumes that the match and replacement both do not contain any newlines.
          let lengthDifference = replacement.length - m.length;
          if (lengthDifference !== 0) {
            sourceMap.offsetColumns(
              lineCount + 1,
              i + offset - columnStartIndex + m.length,
              lengthDifference,
            );
            offset += lengthDifference;
          }
        }
        return replacement;
      });
    }

    // If the asset is wrapped, we need to insert the dependency code outside the parcelRequire.register
    // wrapper. Dependencies must be inserted AFTER the asset is registered so that circular dependencies work.
    if (shouldWrap) {
      // Offset by one line for the parcelRequire.register wrapper.
      sourceMap?.offsetLines(1, 1);
      lineCount++;

      code = `parcelRequire.register(${JSON.stringify(
        this.bundleGraph.getAssetPublicId(asset),
      )}, function(module, exports) {
${code}
});
`;

      lineCount += 2;

      for (let [depCode, map, lines] of depContent) {
        if (!depCode) continue;
        code += depCode + '\n';
        if (sourceMap && map) {
          sourceMap.addSourceMap(map, lineCount);
        }
        lineCount += lines + 1;
      }

      this.needsPrelude = true;
    }

    return [code, sourceMap, lineCount];
  }

  buildReplacements(
    asset: Asset,
    deps: Array<Dependency>,
  ): [Map<string, Array<Dependency>>, Map<string, string>] {
    let assetId = asset.meta.id;
    invariant(typeof assetId === 'string');

    // Build two maps: one of import specifiers, and one of imported symbols to replace.
    // These will be used to build a regex below.
    let depMap = new DefaultMap<string, Array<Dependency>>(() => []);
    let replacements = new Map();
    for (let dep of deps) {
      let specifierType =
        dep.specifierType === 'esm' ? `:${dep.specifierType}` : '';
      depMap
        .get(
          `${assetId}:${getSpecifier(dep)}${
            !dep.meta.placeholder ? specifierType : ''
          }`,
        )
        .push(dep);

      let asyncResolution = this.bundleGraph.resolveAsyncDependency(
        dep,
        this.bundle,
      );
      let resolved =
        asyncResolution?.type === 'asset'
          ? // Prefer the underlying asset over a runtime to load it. It will
            // be wrapped in Promise.resolve() later.
            asyncResolution.value
          : this.bundleGraph.getResolvedAsset(dep, this.bundle);
      if (
        !resolved &&
        !dep.isOptional &&
        !this.bundleGraph.isDependencySkipped(dep)
      ) {
        this.addExternal(dep, replacements);
      }

      if (!resolved) {
        continue;
      }

      for (let [imported, {local}] of dep.symbols) {
        if (local === '*') {
          continue;
        }

        let symbol = this.getSymbolResolution(asset, resolved, imported, dep);
        replacements.set(
          local,
          // If this was an internalized async asset, wrap in a Promise.resolve.
          asyncResolution?.type === 'asset'
            ? `Promise.resolve(${symbol})`
            : symbol,
        );
      }

      // Async dependencies need a namespace object even if all used symbols were statically analyzed.
      // This is recorded in the promiseSymbol meta property set by the transformer rather than in
      // symbols so that we don't mark all symbols as used.
      if (dep.priority === 'lazy' && dep.meta.promiseSymbol) {
        let promiseSymbol = dep.meta.promiseSymbol;
        invariant(typeof promiseSymbol === 'string');
        let symbol = this.getSymbolResolution(asset, resolved, '*', dep);
        replacements.set(
          promiseSymbol,
          asyncResolution?.type === 'asset'
            ? `Promise.resolve(${symbol})`
            : symbol,
        );
      }
    }

    // If this asset is wrapped, we need to replace the exports namespace with `module.exports`,
    // which will be provided to us by the wrapper.
    if (
      this.wrappedAssets.has(asset.id) ||
      (this.bundle.env.outputFormat === 'commonjs' &&
        asset === this.bundle.getMainEntry())
    ) {
      let exportsName = asset.symbols.get('*')?.local || `$${assetId}$exports`;
      replacements.set(exportsName, 'module.exports');
    }

    return [depMap, replacements];
  }

  addExternal(dep: Dependency, replacements?: Map<string, string>) {
    if (this.bundle.env.outputFormat === 'global') {
      throw new ThrowableDiagnostic({
        diagnostic: {
          message:
            'External modules are not supported when building for browser',
          codeFrames: [
            {
              filePath: nullthrows(dep.sourcePath),
              codeHighlights: dep.loc
                ? [
                    {
                      start: dep.loc.start,
                      end: dep.loc.end,
                    },
                  ]
                : [],
            },
          ],
        },
      });
    }

    // Map of DependencySpecifier -> Map<ExportedSymbol, Identifier>>
    let external = this.externals.get(dep.specifier);
    if (!external) {
      external = new Map();
      this.externals.set(dep.specifier, external);
    }

    for (let [imported, {local}] of dep.symbols) {
      // If already imported, just add the already renamed variable to the mapping.
      let renamed = external.get(imported);
      if (renamed && local !== '*' && replacements) {
        replacements.set(local, renamed);
        continue;
      }

      // For CJS output, always use a property lookup so that exports remain live.
      // For ESM output, use named imports which are always live.
      if (this.bundle.env.outputFormat === 'commonjs') {
        renamed = external.get('*');
        if (!renamed) {
          renamed = this.getTopLevelName(
            `$${this.bundle.publicId}$${dep.specifier}`,
          );

          external.set('*', renamed);
        }

        if (local !== '*' && replacements) {
          let replacement;
          if (imported === '*') {
            replacement = renamed;
          } else if (imported === 'default') {
            replacement = `($parcel$interopDefault(${renamed}))`;
            this.usedHelpers.add('$parcel$interopDefault');
          } else {
            replacement = this.getPropertyAccess(renamed, imported);
          }

          replacements.set(local, replacement);
        }
      } else {
        // Rename the specifier so that multiple local imports of the same imported specifier
        // are deduplicated. We have to prefix the imported name with the bundle id so that
        // local variables do not shadow it.
        if (this.exportedSymbols.has(local)) {
          renamed = local;
        } else if (imported === 'default' || imported === '*') {
          renamed = this.getTopLevelName(
            `$${this.bundle.publicId}$${dep.specifier}`,
          );
        } else {
          renamed = this.getTopLevelName(
            `$${this.bundle.publicId}$${imported}`,
          );
        }

        external.set(imported, renamed);
        if (local !== '*' && replacements) {
          replacements.set(local, renamed);
        }
      }
    }
  }

  getSymbolResolution(
    parentAsset: Asset,
    resolved: Asset,
    imported: string,
    dep?: Dependency,
  ): string {
    let {
      asset: resolvedAsset,
      exportSymbol,
      symbol,
    } = this.bundleGraph.getSymbolResolution(resolved, imported, this.bundle);

    if (
      resolvedAsset.type !== 'js' ||
      (dep && this.bundleGraph.isDependencySkipped(dep))
    ) {
      // Graceful fallback for non-js imports or when trying to resolve a symbol
      // that is actually unused but we still need a placeholder value.
      return '{}';
    }

    let isWrapped =
      !this.bundle.hasAsset(resolvedAsset) ||
      (this.wrappedAssets.has(resolvedAsset.id) &&
        resolvedAsset !== parentAsset);
    let staticExports = resolvedAsset.meta.staticExports !== false;
    let publicId = this.bundleGraph.getAssetPublicId(resolvedAsset);

    // If the resolved asset is wrapped, but imported at the top-level by this asset,
    // then we hoist parcelRequire calls to the top of this asset so side effects run immediately.
    if (
      isWrapped &&
      dep &&
      !dep?.meta.shouldWrap &&
      symbol !== false &&
      // Only do this if the asset is part of a different bundle (so it was definitely
      // parcelRequire.register'ed there), or if it is indeed registered in this bundle.
      (!this.bundle.hasAsset(resolvedAsset) ||
        !this.shouldSkipAsset(resolvedAsset))
    ) {
      let hoisted = this.hoistedRequires.get(dep.id);
      if (!hoisted) {
        hoisted = new Map();
        this.hoistedRequires.set(dep.id, hoisted);
      }

      hoisted.set(
        resolvedAsset.id,
        `var $${publicId} = parcelRequire(${JSON.stringify(publicId)});`,
      );
    }

    if (isWrapped) {
      this.needsPrelude = true;
    }

    // If this is an ESM default import of a CJS module with a `default` symbol,
    // and no __esModule flag, we need to resolve to the namespace instead.
    let isDefaultInterop =
      exportSymbol === 'default' &&
      staticExports &&
      !isWrapped &&
      (dep?.meta.kind === 'Import' || dep?.meta.kind === 'Export') &&
      resolvedAsset.symbols.hasExportSymbol('*') &&
      resolvedAsset.symbols.hasExportSymbol('default') &&
      !resolvedAsset.symbols.hasExportSymbol('__esModule');

    // Find the namespace object for the resolved module. If wrapped and this
    // is an inline require (not top-level), use a parcelRequire call, otherwise
    // the hoisted variable declared above. Otherwise, if not wrapped, use the
    // namespace export symbol.
    let assetId = resolvedAsset.meta.id;
    invariant(typeof assetId === 'string');
    let obj =
      isWrapped && (!dep || dep?.meta.shouldWrap)
        ? // Wrap in extra parenthesis to not change semantics, e.g.`new (parcelRequire("..."))()`.
          `(parcelRequire(${JSON.stringify(publicId)}))`
        : isWrapped && dep
        ? `$${publicId}`
        : resolvedAsset.symbols.get('*')?.local || `$${assetId}$exports`;

    if (imported === '*' || exportSymbol === '*' || isDefaultInterop) {
      // Resolve to the namespace object if requested or this is a CJS default interop reqiure.
      if (
        parentAsset === resolvedAsset &&
        this.wrappedAssets.has(resolvedAsset.id)
      ) {
        // Directly use module.exports for wrapped assets importing themselves.
        return 'module.exports';
      } else {
        return obj;
      }
    } else if (
      (!staticExports || isWrapped || !symbol) &&
      resolvedAsset !== parentAsset
    ) {
      // If the resolved asset is wrapped or has non-static exports,
      // we need to use a member access off the namespace object rather
      // than a direct reference. If importing default from a CJS module,
      // use a helper to check the __esModule flag at runtime.
      let kind = dep?.meta.kind;
      if (
        (!dep || kind === 'Import' || kind === 'Export') &&
        exportSymbol === 'default' &&
        resolvedAsset.symbols.hasExportSymbol('*') &&
        this.needsDefaultInterop(resolvedAsset)
      ) {
        this.usedHelpers.add('$parcel$interopDefault');
        return `(/*@__PURE__*/$parcel$interopDefault(${obj}))`;
      } else {
        return this.getPropertyAccess(obj, exportSymbol);
      }
    } else if (!symbol) {
      invariant(false, 'Asset was skipped or not found.');
    } else {
      return symbol;
    }
  }

  getHoistedParcelRequires(
    parentAsset: Asset,
    dep: Dependency,
    resolved: Asset,
  ): [string, number] {
    if (resolved.type !== 'js') {
      return ['', 0];
    }

    let hoisted = this.hoistedRequires.get(dep.id);
    let res = '';
    let lineCount = 0;
    let isWrapped =
      !this.bundle.hasAsset(resolved) ||
      (this.wrappedAssets.has(resolved.id) && resolved !== parentAsset);

    // If the resolved asset is wrapped and is imported in the top-level by this asset,
    // we need to run side effects when this asset runs. If the resolved asset is not
    // the first one in the hoisted requires, we need to insert a parcelRequire here
    // so it runs first.
    if (
      isWrapped &&
      !dep.meta.shouldWrap &&
      (!hoisted || hoisted.keys().next().value !== resolved.id) &&
      !this.bundleGraph.isDependencySkipped(dep) &&
      !this.shouldSkipAsset(resolved)
    ) {
      this.needsPrelude = true;
      res += `parcelRequire(${JSON.stringify(
        this.bundleGraph.getAssetPublicId(resolved),
      )});`;
    }

    if (hoisted) {
      this.needsPrelude = true;
      res += '\n' + [...hoisted.values()].join('\n');
      lineCount += hoisted.size;
    }

    return [res, lineCount];
  }

  buildAssetPrelude(
    asset: Asset,
    deps: Array<Dependency>,
  ): [string, number, string] {
    let prepend = '';
    let prependLineCount = 0;
    let append = '';

    let shouldWrap = this.wrappedAssets.has(asset.id);
    let usedSymbols = nullthrows(this.bundleGraph.getUsedSymbols(asset));
    let assetId = asset.meta.id;
    invariant(typeof assetId === 'string');

    // If the asset has a namespace export symbol, it is CommonJS.
    // If there's no __esModule flag, and default is a used symbol, we need
    // to insert an interop helper.
    let defaultInterop =
      asset.symbols.hasExportSymbol('*') &&
      usedSymbols.has('default') &&
      !asset.symbols.hasExportSymbol('__esModule');

    let usedNamespace =
      // If the asset has * in its used symbols, we might need the exports namespace.
      // The one case where this isn't true is in ESM library entries, where the only
      // dependency on * is the entry dependency. In this case, we will use ESM exports
      // instead of the namespace object.
      (usedSymbols.has('*') &&
        (this.bundle.env.outputFormat !== 'esmodule' ||
          !this.bundle.env.isLibrary ||
          asset !== this.bundle.getMainEntry() ||
          this.bundleGraph
            .getIncomingDependencies(asset)
            .some(
              dep =>
                !dep.isEntry &&
                nullthrows(this.bundleGraph.getUsedSymbols(dep)).has('*'),
            ))) ||
      // If a symbol is imported (used) from a CJS asset but isn't listed in the symbols,
      // we fallback on the namespace object.
      (asset.symbols.hasExportSymbol('*') &&
        [...usedSymbols].some(s => !asset.symbols.hasExportSymbol(s))) ||
      // If the exports has this asset's namespace (e.g. ESM output from CJS input),
      // include the namespace object for the default export.
      this.exportedSymbols.has(`$${assetId}$exports`);

    // If the asset doesn't have static exports, should wrap, the namespace is used,
    // or we need default interop, then we need to synthesize a namespace object for
    // this asset.
    if (
      asset.meta.staticExports === false ||
      shouldWrap ||
      usedNamespace ||
      defaultInterop
    ) {
      // Insert a declaration for the exports namespace object. If the asset is wrapped
      // we don't need to do this, because we'll use the `module.exports` object provided
      // by the wrapper instead. This is also true of CommonJS entry assets, which will use
      // the `module.exports` object provided by CJS.
      if (
        !shouldWrap &&
        (this.bundle.env.outputFormat !== 'commonjs' ||
          asset !== this.bundle.getMainEntry())
      ) {
        prepend += `var $${assetId}$exports = {};\n`;
        prependLineCount++;
      }

      // Insert the __esModule interop flag for this module if it has a `default` export
      // and the namespace symbol is used.
      // TODO: only if required by CJS?
      if (asset.symbols.hasExportSymbol('default') && usedSymbols.has('*')) {
        prepend += `\n$parcel$defineInteropFlag($${assetId}$exports);\n`;
        prependLineCount += 2;
        this.usedHelpers.add('$parcel$defineInteropFlag');
      }

      // Find wildcard re-export dependencies, and make sure their exports are also included in
      // ours. Importantly, add them before the asset's own exports so that wildcard exports get
      // correctly overwritten by own exports of the same name.
      for (let dep of deps) {
        let resolved = this.bundleGraph.getResolvedAsset(dep, this.bundle);
        if (dep.isOptional || this.bundleGraph.isDependencySkipped(dep)) {
          continue;
        }

        let isWrapped = resolved && resolved.meta.shouldWrap;

        for (let [imported, {local}] of dep.symbols) {
          if (imported === '*' && local === '*') {
            if (!resolved) {
              // Re-exporting an external module. This should have already been handled in buildReplacements.
              let external = nullthrows(
                nullthrows(this.externals.get(dep.specifier)).get('*'),
              );
              append += `$parcel$exportWildcard($${assetId}$exports, ${external});\n`;
              this.usedHelpers.add('$parcel$exportWildcard');
              continue;
            }

            // If the resolved asset has an exports object, use the $parcel$exportWildcard helper
            // to re-export all symbols. Otherwise, if there's no namespace object available, add
            // $parcel$export calls for each used symbol of the dependency.
            if (
              isWrapped ||
              resolved.meta.staticExports === false ||
              nullthrows(this.bundleGraph.getUsedSymbols(resolved)).has('*') ||
              // an empty asset
              (!resolved.meta.hasCJSExports &&
                resolved.symbols.hasExportSymbol('*'))
            ) {
              let obj = this.getSymbolResolution(asset, resolved, '*', dep);
              append += `$parcel$exportWildcard($${assetId}$exports, ${obj});\n`;
              this.usedHelpers.add('$parcel$exportWildcard');
            } else {
              for (let symbol of nullthrows(
                this.bundleGraph.getUsedSymbols(dep),
              )) {
                if (
                  symbol === 'default' || // `export * as ...` does not include the default export
                  symbol === '__esModule'
                ) {
                  continue;
                }

                let resolvedSymbol = this.getSymbolResolution(
                  asset,
                  resolved,
                  symbol,
                );
                let get = this.buildFunctionExpression([], resolvedSymbol);
                let set = asset.meta.hasCJSExports
                  ? ', ' +
                    this.buildFunctionExpression(['v'], `${resolvedSymbol} = v`)
                  : '';
                prepend += `$parcel$export($${assetId}$exports, ${JSON.stringify(
                  symbol,
                )}, ${get}${set});\n`;
                this.usedHelpers.add('$parcel$export');
                prependLineCount++;
              }
            }
          }
        }
      }

      // Find the used exports of this module. This is based on the used symbols of
      // incoming dependencies rather than the asset's own used exports so that we include
      // re-exported symbols rather than only symbols declared in this asset.
      let incomingDeps = this.bundleGraph.getIncomingDependencies(asset);
      let usedExports = [...asset.symbols.exportSymbols()].filter(symbol => {
        if (symbol === '*') {
          return false;
        }

        // If we need default interop, then all symbols are needed because the `default`
        // symbol really maps to the whole namespace.
        if (defaultInterop) {
          return true;
        }

        let unused = incomingDeps.every(d => {
          let symbols = nullthrows(this.bundleGraph.getUsedSymbols(d));
          return !symbols.has(symbol) && !symbols.has('*');
        });
        return !unused;
      });

      if (usedExports.length > 0) {
        // Insert $parcel$export calls for each of the used exports. This creates a getter/setter
        // for the symbol so that when the value changes the object property also changes. This is
        // required to simulate ESM live bindings. It's easier to do it this way rather than inserting
        // additional assignments after each mutation of the original binding.
        prepend += `\n${usedExports
          .map(exp => {
            let resolved = this.getSymbolResolution(asset, asset, exp);
            let get = this.buildFunctionExpression([], resolved);
            let set = asset.meta.hasCJSExports
              ? ', ' + this.buildFunctionExpression(['v'], `${resolved} = v`)
              : '';
            return `$parcel$export($${assetId}$exports, ${JSON.stringify(
              exp,
            )}, ${get}${set});`;
          })
          .join('\n')}\n`;
        this.usedHelpers.add('$parcel$export');
        prependLineCount += 1 + usedExports.length;
      }
    }

    return [prepend, prependLineCount, append];
  }

  buildBundlePrelude(): [string, number] {
    let enableSourceMaps = this.bundle.env.sourceMap;
    let res = '';
    let lines = 0;

    // Add hashbang if the entry asset recorded an interpreter.
    let mainEntry = this.bundle.getMainEntry();
    if (
      mainEntry &&
      !this.isAsyncBundle &&
      !this.bundle.target.env.isBrowser()
    ) {
      let interpreter = mainEntry.meta.interpreter;
      invariant(interpreter == null || typeof interpreter === 'string');
      if (interpreter != null) {
        res += `#!${interpreter}\n`;
        lines++;
      }
    }

    // The output format may have specific things to add at the start of the bundle (e.g. imports).
    let [outputFormatPrelude, outputFormatLines] =
      this.outputFormat.buildBundlePrelude();
    res += outputFormatPrelude;
    lines += outputFormatLines;

    // Add used helpers.
    if (this.needsPrelude) {
      this.usedHelpers.add('$parcel$global');
    }

    for (let helper of this.usedHelpers) {
      res += helpers[helper];
      if (enableSourceMaps) {
        lines += countLines(helpers[helper]) - 1;
      }
    }

    if (this.needsPrelude) {
      // Add the prelude if this is potentially the first JS bundle to load in a
      // particular context (e.g. entry scripts in HTML, workers, etc.).
      let parentBundles = this.bundleGraph.getParentBundles(this.bundle);
      let mightBeFirstJS =
        parentBundles.length === 0 ||
        parentBundles.some(b => b.type !== 'js') ||
        this.bundleGraph
          .getBundleGroupsContainingBundle(this.bundle)
          .some(g => this.bundleGraph.isEntryBundleGroup(g)) ||
        this.bundle.env.isIsolated() ||
        this.bundle.bundleBehavior === 'isolated';

      if (mightBeFirstJS) {
        let preludeCode = prelude(this.parcelRequireName);
        res += preludeCode;
        if (enableSourceMaps) {
          lines += countLines(preludeCode) - 1;
        }
      } else {
        // Otherwise, get the current parcelRequire global.
        res += `var parcelRequire = $parcel$global[${JSON.stringify(
          this.parcelRequireName,
        )}];\n`;
        lines++;
      }
    }

    // Add importScripts for sibling bundles in workers.
    if (this.bundle.env.isWorker() || this.bundle.env.isWorklet()) {
      let importScripts = '';
      let bundles = this.bundleGraph.getReferencedBundles(this.bundle);
      for (let b of bundles) {
        if (this.bundle.env.outputFormat === 'esmodule') {
          // importScripts() is not allowed in native ES module workers.
          importScripts += `import "${relativeBundlePath(this.bundle, b)}";\n`;
        } else {
          importScripts += `importScripts("${relativeBundlePath(
            this.bundle,
            b,
          )}");\n`;
        }
      }

      res += importScripts;
      lines += bundles.length;
    }

    return [res, lines];
  }

  needsDefaultInterop(asset: Asset): boolean {
    if (
      asset.symbols.hasExportSymbol('*') &&
      !asset.symbols.hasExportSymbol('default')
    ) {
      let deps = this.bundleGraph.getIncomingDependencies(asset);
      return deps.some(
        dep =>
          this.bundle.hasDependency(dep) &&
          // dep.meta.isES6Module &&
          dep.symbols.hasExportSymbol('default'),
      );
    }

    return false;
  }

  shouldSkipAsset(asset: Asset): boolean {
    if (this.isScriptEntry(asset)) {
      return true;
    }

    return (
      asset.sideEffects === false &&
      nullthrows(this.bundleGraph.getUsedSymbols(asset)).size == 0 &&
      !this.bundleGraph.isAssetReferenced(this.bundle, asset)
    );
  }

  isScriptEntry(asset: Asset): boolean {
    return (
      this.bundle.env.outputFormat === 'global' &&
      this.bundle.env.sourceType === 'script' &&
      asset === this.bundle.getMainEntry()
    );
  }

  buildFunctionExpression(args: Array<string>, expr: string): string {
    return this.bundle.env.supports('arrow-functions', true)
      ? `(${args.join(', ')}) => ${expr}`
      : `function (${args.join(', ')}) { return ${expr}; }`;
  }
}
