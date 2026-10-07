// @flow strict-local
import type {
  Config as IConfig,
  ConfigResult,
  FileCreateInvalidation,
  FilePath,
  PackageJSON,
  ConfigResultWithFilePath,
  DevDepOptions,
} from '@parcel/types';
import type {Config, ParcelOptions} from '../types';

import invariant from 'assert';
import {DefaultWeakMap, loadConfig} from '@parcel/utils';
import Environment from './Environment';
import {fromProjectPath, toProjectPath} from '../projectPath';

const internalConfigToConfig: DefaultWeakMap<
  ParcelOptions,
  WeakMap<Config, PublicConfig>,
> = new DefaultWeakMap(() => new WeakMap());

export default class PublicConfig implements IConfig {
  #config /*: Config */;
  #pkg /*: ?PackageJSON */;
  #pkgFilePath /*: ?FilePath */;
  #options /*: ParcelOptions */;

  constructor(config: Config, options: ParcelOptions): PublicConfig {
    let existing = internalConfigToConfig.get(options).get(config);
    if (existing != null) {
      return existing;
    }

    this.#config = config;
    this.#options = options;
    internalConfigToConfig.get(options).set(config, this);
    return this;
  }

  get env(): Environment {
    return new Environment(this.#config.env, this.#options);
  }

  get searchPath(): FilePath {
    return fromProjectPath(this.#options.projectRoot, this.#config.searchPath);
  }

  get result(): ConfigResult {
    return this.#config.result;
  }

  get isSource(): boolean {
    return this.#config.isSource;
  }

  // $FlowFixMe
  setResult(result: any): void {
    this.#config.result = result;
  }

  setCacheKey(cacheKey: string) {
    this.#config.cacheKey = cacheKey;
  }

  invalidateOnFileChange(filePath: FilePath) {
    this.#config.invalidateOnFileChange.add(
      toProjectPath(this.#options.projectRoot, filePath),
    );
  }

  addDevDependency(devDep: DevDepOptions) {
    this.#config.devDeps.push({
      ...devDep,
      resolveFrom: toProjectPath(this.#options.projectRoot, devDep.resolveFrom),
      additionalInvalidations: devDep.additionalInvalidations?.map(i => ({
        ...i,
        resolveFrom: toProjectPath(this.#options.projectRoot, i.resolveFrom),
      })),
    });
  }

  invalidateOnFileCreate(invalidation: FileCreateInvalidation) {
    if (invalidation.glob != null) {
      // $FlowFixMe
      this.#config.invalidateOnFileCreate.push(invalidation);
    } else if (invalidation.filePath != null) {
      this.#config.invalidateOnFileCreate.push({
        filePath: toProjectPath(
          this.#options.projectRoot,
          invalidation.filePath,
        ),
      });
    } else {
      invariant(invalidation.aboveFilePath != null);
      this.#config.invalidateOnFileCreate.push({
        // $FlowFixMe
        fileName: invalidation.fileName,
        aboveFilePath: toProjectPath(
          this.#options.projectRoot,
          invalidation.aboveFilePath,
        ),
      });
    }
  }

  invalidateOnEnvChange(env: string) {
    this.#config.invalidateOnEnvChange.add(env);
  }

  invalidateOnStartup() {
    this.#config.invalidateOnStartup = true;
  }

  invalidateOnBuild() {
    this.#config.invalidateOnBuild = true;
  }

  async getConfigFrom<T>(
    searchPath: FilePath,
    fileNames: Array<string>,
    options: ?{|
      packageKey?: string,
      parse?: boolean,
      exclude?: boolean,
    |},
  ): Promise<?ConfigResultWithFilePath<T>> {
    let packageKey = options?.packageKey;
    if (packageKey != null) {
      let pkg = await this.getConfigFrom(searchPath, ['package.json']);
      if (pkg && pkg.contents[packageKey]) {
        return {
          contents: pkg.contents[packageKey],
          filePath: pkg.filePath,
        };
      }
    }

    if (fileNames.length === 0) {
      return null;
    }

    // Invalidate when any of the file names are created above the search path.
    for (let fileName of fileNames) {
      this.invalidateOnFileCreate({
        fileName,
        aboveFilePath: searchPath,
      });
    }

    let parse = options && options.parse;
    let conf = await loadConfig(
      this.#options.inputFS,
      searchPath,
      fileNames,
      this.#options.projectRoot,
      parse == null ? null : {parse},
    );
    if (conf == null) {
      return null;
    }

    let configFilePath = conf.files[0].filePath;
    if (!options || !options.exclude) {
      this.invalidateOnFileChange(configFilePath);
    }

    return {
      contents: conf.config,
      filePath: configFilePath,
    };
  }

  getConfig<T>(
    filePaths: Array<FilePath>,
    options: ?{|
      packageKey?: string,
      parse?: boolean,
      exclude?: boolean,
    |},
  ): Promise<?ConfigResultWithFilePath<T>> {
    return this.getConfigFrom(this.searchPath, filePaths, options);
  }

  async getPackage(): Promise<?PackageJSON> {
    if (this.#pkg) {
      return this.#pkg;
    }

    let pkgConfig = await this.getConfig<PackageJSON>(['package.json']);
    if (!pkgConfig) {
      return null;
    }

    this.#pkg = pkgConfig.contents;
    this.#pkgFilePath = pkgConfig.filePath;

    return this.#pkg;
  }
}
