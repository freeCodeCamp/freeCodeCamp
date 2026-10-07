// @flow strict-local

import type {
  ASTGenerator,
  BundleBehavior,
  FilePath,
  GenerateOutput,
  Meta,
  PackageName,
  Stats,
  Symbol,
  SourceLocation,
  Transformer,
} from '@parcel/types';
import type {
  Asset,
  RequestInvalidation,
  Dependency,
  Environment,
  ParcelOptions,
} from './types';

import {Readable} from 'stream';
import {PluginLogger} from '@parcel/logger';
import nullthrows from 'nullthrows';
import CommittedAsset from './CommittedAsset';
import UncommittedAsset from './UncommittedAsset';
import loadPlugin from './loadParcelPlugin';
import {Asset as PublicAsset} from './public/Asset';
import PluginOptions from './public/PluginOptions';
import {blobToStream, hashFile} from '@parcel/utils';
import {hashFromOption, toInternalSourceLocation} from './utils';
import {createBuildCache} from './buildCache';
import {
  type ProjectPath,
  fromProjectPath,
  fromProjectPathRelative,
} from './projectPath';
import {hashString} from '@parcel/hash';
import {BundleBehavior as BundleBehaviorMap} from './types';

type AssetOptions = {|
  id?: string,
  committed?: boolean,
  hash?: ?string,
  idBase?: ?string,
  filePath: ProjectPath,
  query?: ?string,
  type: string,
  contentKey?: ?string,
  mapKey?: ?string,
  astKey?: ?string,
  astGenerator?: ?ASTGenerator,
  dependencies?: Map<string, Dependency>,
  bundleBehavior?: ?BundleBehavior,
  isBundleSplittable?: ?boolean,
  isSource: boolean,
  env: Environment,
  meta?: Meta,
  outputHash?: ?string,
  pipeline?: ?string,
  stats: Stats,
  symbols?: ?Map<Symbol, {|local: Symbol, loc: ?SourceLocation, meta?: ?Meta|}>,
  sideEffects?: boolean,
  uniqueKey?: ?string,
  plugin?: PackageName,
  configPath?: ProjectPath,
  configKeyPath?: string,
|};

export function createAssetIdFromOptions(options: AssetOptions): string {
  let uniqueKey = options.uniqueKey ?? '';
  let idBase =
    options.idBase != null
      ? options.idBase
      : fromProjectPathRelative(options.filePath);

  return hashString(
    idBase +
      options.type +
      options.env.id +
      uniqueKey +
      ':' +
      (options.pipeline ?? '') +
      ':' +
      (options.query ?? ''),
  );
}

export function createAsset(
  projectRoot: FilePath,
  options: AssetOptions,
): Asset {
  return {
    id: options.id != null ? options.id : createAssetIdFromOptions(options),
    committed: options.committed ?? false,
    hash: options.hash,
    filePath: options.filePath,
    query: options.query,
    bundleBehavior: options.bundleBehavior
      ? BundleBehaviorMap[options.bundleBehavior]
      : null,
    isBundleSplittable: options.isBundleSplittable ?? true,
    type: options.type,
    contentKey: options.contentKey,
    mapKey: options.mapKey,
    astKey: options.astKey,
    astGenerator: options.astGenerator,
    dependencies: options.dependencies || new Map(),
    isSource: options.isSource,
    outputHash: options.outputHash,
    pipeline: options.pipeline,
    env: options.env,
    meta: options.meta || {},
    stats: options.stats,
    symbols:
      options.symbols &&
      new Map(
        [...options.symbols].map(([k, v]) => [
          k,
          {
            local: v.local,
            meta: v.meta,
            loc: toInternalSourceLocation(projectRoot, v.loc),
          },
        ]),
      ),
    sideEffects: options.sideEffects ?? true,
    uniqueKey: options.uniqueKey,
    plugin: options.plugin,
    configPath: options.configPath,
    configKeyPath: options.configKeyPath,
  };
}

const generateResults: WeakMap<Asset, Promise<GenerateOutput>> = new WeakMap();

export function generateFromAST(
  asset: CommittedAsset | UncommittedAsset,
): Promise<GenerateOutput> {
  let output = generateResults.get(asset.value);
  if (output == null) {
    output = _generateFromAST(asset);
    generateResults.set(asset.value, output);
  }
  return output;
}

async function _generateFromAST(asset: CommittedAsset | UncommittedAsset) {
  let ast = await asset.getAST();
  if (ast == null) {
    throw new Error('Asset has no AST');
  }

  let pluginName = nullthrows(asset.value.plugin);
  let {plugin} = await loadPlugin<Transformer<mixed>>(
    pluginName,
    fromProjectPath(
      asset.options.projectRoot,
      nullthrows(asset.value.configPath),
    ),
    nullthrows(asset.value.configKeyPath),
    asset.options,
  );
  let generate = plugin.generate?.bind(plugin);
  if (!generate) {
    throw new Error(`${pluginName} does not have a generate method`);
  }

  let {content, map} = await generate({
    asset: new PublicAsset(asset),
    ast,
    options: new PluginOptions(asset.options),
    logger: new PluginLogger({origin: pluginName}),
  });

  let mapBuffer = map?.toBuffer();
  // Store the results in the cache so we can avoid generating again next time
  await Promise.all([
    asset.options.cache.setStream(
      nullthrows(asset.value.contentKey),
      blobToStream(content),
    ),
    mapBuffer != null &&
      asset.options.cache.setBlob(nullthrows(asset.value.mapKey), mapBuffer),
  ]);

  return {
    content:
      content instanceof Readable
        ? asset.options.cache.getStream(nullthrows(asset.value.contentKey))
        : content,
    map,
  };
}

export function getInvalidationId(invalidation: RequestInvalidation): string {
  switch (invalidation.type) {
    case 'file':
      return 'file:' + fromProjectPathRelative(invalidation.filePath);
    case 'env':
      return 'env:' + invalidation.key;
    case 'option':
      return 'option:' + invalidation.key;
    default:
      throw new Error('Unknown invalidation type: ' + invalidation.type);
  }
}

const hashCache = createBuildCache();

export async function getInvalidationHash(
  invalidations: Array<RequestInvalidation>,
  options: ParcelOptions,
): Promise<string> {
  if (invalidations.length === 0) {
    return '';
  }

  let sortedInvalidations = invalidations
    .slice()
    .sort((a, b) => (getInvalidationId(a) < getInvalidationId(b) ? -1 : 1));

  let hashes = '';
  for (let invalidation of sortedInvalidations) {
    switch (invalidation.type) {
      case 'file': {
        // Only recompute the hash of this file if we haven't seen it already during this build.
        let fileHash = hashCache.get(invalidation.filePath);
        if (fileHash == null) {
          fileHash = hashFile(
            options.inputFS,
            fromProjectPath(options.projectRoot, invalidation.filePath),
          );
          hashCache.set(invalidation.filePath, fileHash);
        }
        hashes += await fileHash;
        break;
      }
      case 'env':
        hashes +=
          invalidation.key + ':' + (options.env[invalidation.key] || '');
        break;
      case 'option':
        hashes +=
          invalidation.key + ':' + hashFromOption(options[invalidation.key]);
        break;
      default:
        throw new Error('Unknown invalidation type: ' + invalidation.type);
    }
  }

  return hashString(hashes);
}
