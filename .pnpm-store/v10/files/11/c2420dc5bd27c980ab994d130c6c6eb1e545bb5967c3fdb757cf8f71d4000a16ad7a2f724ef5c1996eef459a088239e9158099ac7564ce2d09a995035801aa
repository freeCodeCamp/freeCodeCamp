// @flow

import type {FilePath, PackagedBundle} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import SourceMap from '@parcel/source-map';
import nullthrows from 'nullthrows';
import path from 'path';
import {loadSourceMapUrl} from './';

export type AssetStats = {|
  filePath: string,
  size: number,
  originalSize: number,
  time: number,
|};

export type BundleStats = {|
  filePath: string,
  size: number,
  time: number,
  assets: Array<AssetStats>,
|};

export type BuildMetrics = {|
  bundles: Array<BundleStats>,
|};

async function getSourcemapSizes(
  filePath: FilePath,
  fs: FileSystem,
  projectRoot: FilePath,
): Promise<?Map<string, number>> {
  let bundleContents = await fs.readFile(filePath, 'utf-8');
  let mapUrlData = await loadSourceMapUrl(fs, filePath, bundleContents);
  if (!mapUrlData) {
    return null;
  }

  let rawMap = mapUrlData.map;
  let sourceMap = new SourceMap(projectRoot);
  sourceMap.addVLQMap(rawMap);
  let parsedMapData = sourceMap.getMap();

  if (parsedMapData.mappings.length > 2) {
    let sources = parsedMapData.sources.map(s =>
      path.normalize(path.join(projectRoot, s)),
    );
    let currLine = 1;
    let currColumn = 0;
    let currMappingIndex = 0;
    let currMapping = parsedMapData.mappings[currMappingIndex];
    let nextMapping = parsedMapData.mappings[currMappingIndex + 1];
    let sourceSizes = new Array(sources.length).fill(0);
    let unknownOrigin: number = 0;
    for (let i = 0; i < bundleContents.length; i++) {
      let character = bundleContents[i];

      while (
        nextMapping &&
        nextMapping.generated.line === currLine &&
        nextMapping.generated.column <= currColumn
      ) {
        currMappingIndex++;
        currMapping = parsedMapData.mappings[currMappingIndex];
        nextMapping = parsedMapData.mappings[currMappingIndex + 1];
      }

      let currentSource = currMapping.source;
      let charSize = Buffer.byteLength(character, 'utf8');
      if (
        currentSource != null &&
        currMapping.generated.line === currLine &&
        currMapping.generated.column <= currColumn
      ) {
        sourceSizes[currentSource] += charSize;
      } else {
        unknownOrigin += charSize;
      }

      if (character === '\n') {
        currColumn = 0;
        currLine++;
      } else {
        currColumn++;
      }
    }

    let sizeMap = new Map();
    for (let i = 0; i < sourceSizes.length; i++) {
      sizeMap.set(sources[i], sourceSizes[i]);
    }

    sizeMap.set('', unknownOrigin);

    return sizeMap;
  }
}

async function createBundleStats(
  bundle: PackagedBundle,
  fs: FileSystem,
  projectRoot: FilePath,
) {
  let filePath = bundle.filePath;
  let sourcemapSizes = await getSourcemapSizes(filePath, fs, projectRoot);

  let assets: Map<string, AssetStats> = new Map();
  bundle.traverseAssets(asset => {
    let filePath = path.normalize(asset.filePath);
    assets.set(filePath, {
      filePath,
      size: asset.stats.size,
      originalSize: asset.stats.size,
      time: asset.stats.time,
    });
  });

  let assetsReport: Array<AssetStats> = [];
  if (sourcemapSizes && sourcemapSizes.size) {
    assetsReport = Array.from(sourcemapSizes.keys()).map((filePath: string) => {
      let foundSize = sourcemapSizes.get(filePath) || 0;
      let stats = assets.get(filePath) || {
        filePath,
        size: foundSize,
        originalSize: foundSize,
        time: 0,
      };

      return {
        ...stats,
        size: foundSize,
      };
    });
  } else {
    assetsReport = Array.from(assets.values());
  }

  return {
    filePath: nullthrows(bundle.filePath),
    size: bundle.stats.size,
    time: bundle.stats.time,
    assets: assetsReport.sort((a, b) => b.size - a.size),
  };
}

export default async function generateBuildMetrics(
  bundles: Array<PackagedBundle>,
  fs: FileSystem,
  projectRoot: FilePath,
): Promise<BuildMetrics> {
  bundles.sort((a, b) => b.stats.size - a.stats.size).filter(b => !!b.filePath);

  return {
    bundles: (
      await Promise.all(bundles.map(b => createBundleStats(b, fs, projectRoot)))
    ).filter(e => !!e),
  };
}
