// @flow strict-local

import type {WorkerApi} from '@parcel/workers';
import type {AssetGroup, ParcelOptions, ReportFn} from './types';
import type {Validator, ValidateResult} from '@parcel/types';
import type {Diagnostic} from '@parcel/diagnostic';

import path from 'path';
import {resolveConfig} from '@parcel/utils';
import logger, {PluginLogger} from '@parcel/logger';
import ThrowableDiagnostic, {errorToDiagnostic} from '@parcel/diagnostic';
import ParcelConfig from './ParcelConfig';
import UncommittedAsset from './UncommittedAsset';
import {createAsset} from './assetUtils';
import {Asset} from './public/Asset';
import PluginOptions from './public/PluginOptions';
import summarizeRequest from './summarizeRequest';
import {fromProjectPath, fromProjectPathRelative} from './projectPath';

export type ValidationOpts = {|
  config: ParcelConfig,
  /**
   * If true, this Validation instance will run all validators that implement the single-threaded "validateAll" method.
   * If falsy, it will run validators that implement the one-asset-at-a-time "validate" method.
   */
  dedicatedThread?: boolean,
  options: ParcelOptions,
  requests: AssetGroup[],
  report: ReportFn,
  workerApi?: WorkerApi,
|};

export default class Validation {
  allAssets: {[validatorName: string]: UncommittedAsset[], ...} = {};
  allValidators: {[validatorName: string]: Validator, ...} = {};
  dedicatedThread: boolean;
  impactfulOptions: $Shape<ParcelOptions>;
  options: ParcelOptions;
  parcelConfig: ParcelConfig;
  report: ReportFn;
  requests: AssetGroup[];
  workerApi: ?WorkerApi;

  constructor({
    config,
    dedicatedThread,
    options,
    requests,
    report,
    workerApi,
  }: ValidationOpts) {
    this.dedicatedThread = dedicatedThread ?? false;
    this.options = options;
    this.parcelConfig = config;
    this.report = report;
    this.requests = requests;
    this.workerApi = workerApi;
  }

  async run(): Promise<void> {
    let pluginOptions = new PluginOptions(this.options);
    await this.buildAssetsAndValidators();
    await Promise.all(
      Object.keys(this.allValidators).map(async validatorName => {
        let assets = this.allAssets[validatorName];
        if (assets) {
          let plugin = this.allValidators[validatorName];
          let validatorLogger = new PluginLogger({origin: validatorName});
          let validatorResults: Array<?ValidateResult> = [];
          try {
            // If the plugin supports the single-threading validateAll method, pass all assets to it.
            if (plugin.validateAll && this.dedicatedThread) {
              validatorResults = await plugin.validateAll({
                assets: assets.map(asset => new Asset(asset)),
                options: pluginOptions,
                logger: validatorLogger,
                resolveConfigWithPath: (
                  configNames: Array<string>,
                  assetFilePath: string,
                ) =>
                  resolveConfig(
                    this.options.inputFS,
                    assetFilePath,
                    configNames,
                    this.options.projectRoot,
                  ),
              });
            }

            // Otherwise, pass the assets one-at-a-time
            else if (plugin.validate && !this.dedicatedThread) {
              await Promise.all(
                assets.map(async input => {
                  let config = null;
                  let publicAsset = new Asset(input);
                  if (plugin.getConfig) {
                    config = await plugin.getConfig({
                      asset: publicAsset,
                      options: pluginOptions,
                      logger: validatorLogger,
                      resolveConfig: (configNames: Array<string>) =>
                        resolveConfig(
                          this.options.inputFS,
                          publicAsset.filePath,
                          configNames,
                          this.options.projectRoot,
                        ),
                    });
                  }

                  let validatorResult = await plugin.validate({
                    asset: publicAsset,
                    options: pluginOptions,
                    config,
                    logger: validatorLogger,
                  });
                  validatorResults.push(validatorResult);
                }),
              );
            }
            this.handleResults(validatorResults);
          } catch (e) {
            throw new ThrowableDiagnostic({
              diagnostic: errorToDiagnostic(e, {
                origin: validatorName,
              }),
            });
          }
        }
      }),
    );
  }

  async buildAssetsAndValidators() {
    // Figure out what validators need to be run, and group the assets by the relevant validators.
    await Promise.all(
      this.requests.map(async request => {
        this.report({
          type: 'validation',
          filePath: fromProjectPath(this.options.projectRoot, request.filePath),
        });

        let asset = await this.loadAsset(request);

        let validators = await this.parcelConfig.getValidators(
          request.filePath,
        );

        for (let validator of validators) {
          this.allValidators[validator.name] = validator.plugin;
          if (this.allAssets[validator.name]) {
            this.allAssets[validator.name].push(asset);
          } else {
            this.allAssets[validator.name] = [asset];
          }
        }
      }),
    );
  }

  handleResults(validatorResults: Array<?ValidateResult>) {
    let warnings: Array<Diagnostic> = [];
    let errors: Array<Diagnostic> = [];
    validatorResults.forEach(result => {
      if (result) {
        warnings.push(...result.warnings);
        errors.push(...result.errors);
      }
    });

    if (errors.length > 0) {
      throw new ThrowableDiagnostic({
        diagnostic: errors,
      });
    }

    if (warnings.length > 0) {
      logger.warn(warnings);
    }
  }

  async loadAsset(request: AssetGroup): Promise<UncommittedAsset> {
    let {filePath, env, code, sideEffects, query} = request;
    let {content, size, hash, isSource} = await summarizeRequest(
      this.options.inputFS,
      {
        filePath: fromProjectPath(this.options.projectRoot, request.filePath),
      },
    );

    // If the transformer request passed code rather than a filename,
    // use a hash as the base for the id to ensure it is unique.
    let idBase = code != null ? hash : fromProjectPathRelative(filePath);
    return new UncommittedAsset({
      idBase,
      value: createAsset(this.options.projectRoot, {
        idBase,
        filePath: filePath,
        isSource,
        type: path.extname(fromProjectPathRelative(filePath)).slice(1),
        hash,
        query,
        env: env,
        stats: {
          time: 0,
          size,
        },
        sideEffects: sideEffects,
      }),
      options: this.options,
      content,
    });
  }
}
