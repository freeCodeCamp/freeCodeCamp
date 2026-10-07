// @flow strict-local
import type {Async} from '@parcel/types';
import type SourceMap from '@parcel/source-map';
import {Packager} from '@parcel/plugin';
import {replaceInlineReferences, replaceURLReferences} from '@parcel/utils';
import {hashString} from '@parcel/hash';
import path from 'path';
import nullthrows from 'nullthrows';
import {DevPackager} from './DevPackager';
import {ScopeHoistingPackager} from './ScopeHoistingPackager';

export default (new Packager({
  async loadConfig({config, options}) {
    // Generate a name for the global parcelRequire function that is unique to this project.
    // This allows multiple parcel builds to coexist on the same page.
    let pkg = await config.getConfigFrom(
      path.join(options.projectRoot, 'index'),
      ['package.json'],
    );
    let name = pkg?.contents?.name ?? '';
    return {
      parcelRequireName: 'parcelRequire' + hashString(name).slice(-4),
    };
  },
  async package({
    bundle,
    bundleGraph,
    getInlineBundleContents,
    getSourceMapReference,
    config,
    options,
  }) {
    // If this is a non-module script, and there is only one asset with no dependencies,
    // then we don't need to package at all and can pass through the original code un-wrapped.
    let contents, map;
    if (bundle.env.sourceType === 'script') {
      let entries = bundle.getEntryAssets();
      if (
        entries.length === 1 &&
        bundleGraph.getDependencies(entries[0]).length === 0
      ) {
        contents = await entries[0].getCode();
        map = await entries[0].getMap();
      }
    }

    if (contents == null) {
      let packager = bundle.env.shouldScopeHoist
        ? new ScopeHoistingPackager(
            options,
            bundleGraph,
            bundle,
            nullthrows(config).parcelRequireName,
          )
        : new DevPackager(
            options,
            bundleGraph,
            bundle,
            nullthrows(config).parcelRequireName,
          );

      ({contents, map} = await packager.package());
    }

    contents += '\n' + (await getSourceMapSuffix(getSourceMapReference, map));

    // For library builds, we need to replace URL references with their final resolved paths.
    // For non-library builds, this is handled in the JS runtime.
    if (bundle.env.isLibrary) {
      ({contents, map} = replaceURLReferences({
        bundle,
        bundleGraph,
        contents,
        map,
        getReplacement: s => JSON.stringify(s).slice(1, -1),
      }));
    }

    return replaceInlineReferences({
      bundle,
      bundleGraph,
      contents,
      getInlineReplacement: (dependency, inlineType, content) => ({
        from: `"${dependency.id}"`,
        to: inlineType === 'string' ? JSON.stringify(content) : content,
      }),
      getInlineBundleContents,
      map,
    });
  },
}): Packager);

async function getSourceMapSuffix(
  getSourceMapReference: (?SourceMap) => Async<?string>,
  map: ?SourceMap,
): Promise<string> {
  let sourcemapReference = await getSourceMapReference(map);
  if (sourcemapReference != null) {
    return '//# sourceMappingURL=' + sourcemapReference + '\n';
  } else {
    return '';
  }
}
