// @flow strict-local
import type {BundleGraph, PluginOptions, NamedBundle} from '@parcel/types';

import {
  PromiseQueue,
  relativeBundlePath,
  countLines,
  normalizeSeparators,
} from '@parcel/utils';
import SourceMap from '@parcel/source-map';
import invariant from 'assert';
import path from 'path';
import fs from 'fs';
import {replaceScriptDependencies, getSpecifier} from './utils';

const PRELUDE = fs
  .readFileSync(path.join(__dirname, 'dev-prelude.js'), 'utf8')
  .trim()
  .replace(/;$/, '');

export class DevPackager {
  options: PluginOptions;
  bundleGraph: BundleGraph<NamedBundle>;
  bundle: NamedBundle;
  parcelRequireName: string;

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
  }

  async package(): Promise<{|contents: string, map: ?SourceMap|}> {
    // Load assets
    let queue = new PromiseQueue({maxConcurrent: 32});
    this.bundle.traverseAssets(asset => {
      queue.add(async () => {
        let [code, mapBuffer] = await Promise.all([
          asset.getCode(),
          this.bundle.env.sourceMap && asset.getMapBuffer(),
        ]);
        return {code, mapBuffer};
      });
    });

    let results = await queue.run();

    let assets = '';
    let i = 0;
    let first = true;
    let map = new SourceMap(this.options.projectRoot);

    let prefix = this.getPrefix();
    let lineOffset = countLines(prefix);
    let script: ?{|code: string, mapBuffer: ?Buffer|} = null;

    this.bundle.traverse(node => {
      let wrapped = first ? '' : ',';

      if (node.type === 'dependency') {
        let resolved = this.bundleGraph.getResolvedAsset(
          node.value,
          this.bundle,
        );
        if (resolved && resolved.type !== 'js') {
          // if this is a reference to another javascript asset, we should not include
          // its output, as its contents should already be loaded.
          invariant(!this.bundle.hasAsset(resolved));
          wrapped +=
            JSON.stringify(this.bundleGraph.getAssetPublicId(resolved)) +
            ':[function() {},{}]';
        } else {
          return;
        }
      }

      if (node.type === 'asset') {
        let asset = node.value;
        invariant(
          asset.type === 'js',
          'all assets in a js bundle must be js assets',
        );

        // If this is the main entry of a script rather than a module, we need to hoist it
        // outside the bundle wrapper function so that its variables are exposed as globals.
        if (
          this.bundle.env.sourceType === 'script' &&
          asset === this.bundle.getMainEntry()
        ) {
          script = results[i++];
          return;
        }

        let deps = {};
        let dependencies = this.bundleGraph.getDependencies(asset);
        for (let dep of dependencies) {
          let resolved = this.bundleGraph.getResolvedAsset(dep, this.bundle);
          if (this.bundleGraph.isDependencySkipped(dep)) {
            deps[getSpecifier(dep)] = false;
          } else if (resolved) {
            deps[getSpecifier(dep)] =
              this.bundleGraph.getAssetPublicId(resolved);
          } else {
            // An external module - map placeholder to original specifier.
            deps[getSpecifier(dep)] = dep.specifier;
          }
        }

        let {code, mapBuffer} = results[i];
        let output = code || '';
        wrapped +=
          JSON.stringify(this.bundleGraph.getAssetPublicId(asset)) +
          ':[function(require,module,exports) {\n' +
          output +
          '\n},';
        wrapped += JSON.stringify(deps);
        wrapped += ']';

        if (
          this.bundle.env.isNode() &&
          asset.meta.has_node_replacements === true
        ) {
          const relPath = normalizeSeparators(
            path.relative(
              this.bundle.target.distDir,
              path.dirname(asset.filePath),
            ),
          );
          wrapped = wrapped.replace('$parcel$dirnameReplace', relPath);
          wrapped = wrapped.replace('$parcel$filenameReplace', relPath);
        }

        if (this.bundle.env.sourceMap) {
          if (mapBuffer) {
            map.addBuffer(mapBuffer, lineOffset);
          } else {
            map.addEmptyMap(
              path
                .relative(this.options.projectRoot, asset.filePath)
                .replace(/\\+/g, '/'),
              output,
              lineOffset,
            );
          }

          lineOffset += countLines(output) + 1;
        }
        i++;
      }

      assets += wrapped;
      first = false;
    });

    let entries = this.bundle.getEntryAssets();
    let mainEntry = this.bundle.getMainEntry();
    if (
      (!this.isEntry() && this.bundle.env.outputFormat === 'global') ||
      this.bundle.env.sourceType === 'script'
    ) {
      // In async bundles we don't want the main entry to execute until we require it
      // as there might be dependencies in a sibling bundle that hasn't loaded yet.
      entries = entries.filter(a => a.id !== mainEntry?.id);
      mainEntry = null;
    }

    let contents =
      prefix +
      '({' +
      assets +
      '},' +
      JSON.stringify(
        entries.map(asset => this.bundleGraph.getAssetPublicId(asset)),
      ) +
      ', ' +
      JSON.stringify(
        mainEntry ? this.bundleGraph.getAssetPublicId(mainEntry) : null,
      ) +
      ', ' +
      JSON.stringify(this.parcelRequireName) +
      ')' +
      '\n';

    // The entry asset of a script bundle gets hoisted outside the bundle wrapper function
    // so that its variables become globals. We need to replace any require calls for
    // runtimes with a parcelRequire call.
    if (this.bundle.env.sourceType === 'script' && script) {
      let entryMap;
      let mapBuffer = script.mapBuffer;
      if (mapBuffer) {
        entryMap = new SourceMap(this.options.projectRoot, mapBuffer);
      }
      contents += replaceScriptDependencies(
        this.bundleGraph,
        this.bundle,
        script.code,
        entryMap,
        this.parcelRequireName,
      );
      if (this.bundle.env.sourceMap && entryMap) {
        map.addSourceMap(entryMap, lineOffset);
      }
    }

    return {
      contents,
      map,
    };
  }

  getPrefix(): string {
    let interpreter: ?string;
    let mainEntry = this.bundle.getMainEntry();
    if (mainEntry && this.isEntry() && !this.bundle.target.env.isBrowser()) {
      let _interpreter = mainEntry.meta.interpreter;
      invariant(_interpreter == null || typeof _interpreter === 'string');
      interpreter = _interpreter;
    }

    let importScripts = '';
    if (this.bundle.env.isWorker()) {
      let bundles = this.bundleGraph.getReferencedBundles(this.bundle);
      for (let b of bundles) {
        importScripts += `importScripts("${relativeBundlePath(
          this.bundle,
          b,
        )}");\n`;
      }
    }

    return (
      // If the entry asset included a hashbang, repeat it at the top of the bundle
      (interpreter != null ? `#!${interpreter}\n` : '') +
      importScripts +
      PRELUDE
    );
  }

  isEntry(): boolean {
    return (
      !this.bundleGraph.hasParentBundleOfType(this.bundle, 'js') ||
      this.bundle.env.isIsolated() ||
      this.bundle.bundleBehavior === 'isolated'
    );
  }
}
