// @flow
import type {
  Async,
  Config as IConfig,
  PluginOptions as IPluginOptions,
  PluginLogger as IPluginLogger,
  NamedBundle as INamedBundle,
  BundleGraph as IBundleGraph,
} from '@parcel/types';
import type {
  Config,
  ParcelOptions,
  InternalFileCreateInvalidation,
} from '../types';
import type {LoadedPlugin} from '../ParcelConfig';
import type {RunAPI} from '../RequestTracker';
import type {ProjectPath} from '../projectPath';

import {serializeRaw} from '../serializer.js';
import {PluginLogger} from '@parcel/logger';
import PluginOptions from '../public/PluginOptions';
import ThrowableDiagnostic, {errorToDiagnostic} from '@parcel/diagnostic';
import PublicConfig from '../public/Config';
import {optionsProxy} from '../utils';
import {getInvalidationHash} from '../assetUtils';
import {Hash} from '@parcel/hash';

export type PluginWithLoadConfig = {
  loadConfig?: ({|
    config: IConfig,
    options: IPluginOptions,
    logger: IPluginLogger,
  |}) => Async<mixed>,
  ...
};

export type PluginWithBundleConfig = {
  loadConfig?: ({|
    config: IConfig,
    options: IPluginOptions,
    logger: IPluginLogger,
  |}) => Async<mixed>,
  loadBundleConfig?: ({|
    bundle: INamedBundle,
    bundleGraph: IBundleGraph<INamedBundle>,
    config: IConfig,
    options: IPluginOptions,
    logger: IPluginLogger,
  |}) => Async<mixed>,
  ...
};

export type ConfigRequest = {
  id: string,
  invalidateOnFileChange: Set<ProjectPath>,
  invalidateOnFileCreate: Array<InternalFileCreateInvalidation>,
  invalidateOnEnvChange: Set<string>,
  invalidateOnOptionChange: Set<string>,
  invalidateOnStartup: boolean,
  invalidateOnBuild: boolean,
  ...
};

export async function loadPluginConfig<T: PluginWithLoadConfig>(
  loadedPlugin: LoadedPlugin<T>,
  config: Config,
  options: ParcelOptions,
): Promise<void> {
  let loadConfig = loadedPlugin.plugin.loadConfig;
  if (!loadConfig) {
    return;
  }

  try {
    config.result = await loadConfig({
      config: new PublicConfig(config, options),
      options: new PluginOptions(
        optionsProxy(options, option => {
          config.invalidateOnOptionChange.add(option);
        }),
      ),
      logger: new PluginLogger({origin: loadedPlugin.name}),
    });
  } catch (e) {
    throw new ThrowableDiagnostic({
      diagnostic: errorToDiagnostic(e, {
        origin: loadedPlugin.name,
      }),
    });
  }
}

export async function runConfigRequest<TResult>(
  api: RunAPI<TResult>,
  configRequest: ConfigRequest,
) {
  let {
    invalidateOnFileChange,
    invalidateOnFileCreate,
    invalidateOnEnvChange,
    invalidateOnOptionChange,
    invalidateOnStartup,
    invalidateOnBuild,
  } = configRequest;

  // If there are no invalidations, then no need to create a node.
  if (
    invalidateOnFileChange.size === 0 &&
    invalidateOnFileCreate.length === 0 &&
    invalidateOnOptionChange.size === 0 &&
    !invalidateOnStartup &&
    !invalidateOnBuild
  ) {
    return;
  }

  await api.runRequest<null, void>({
    id: 'config_request:' + configRequest.id,
    type: 'config_request',
    run: ({api}) => {
      for (let filePath of invalidateOnFileChange) {
        api.invalidateOnFileUpdate(filePath);
        api.invalidateOnFileDelete(filePath);
      }

      for (let invalidation of invalidateOnFileCreate) {
        api.invalidateOnFileCreate(invalidation);
      }

      for (let env of invalidateOnEnvChange) {
        api.invalidateOnEnvChange(env);
      }

      for (let option of invalidateOnOptionChange) {
        api.invalidateOnOptionChange(option);
      }

      if (invalidateOnStartup) {
        api.invalidateOnStartup();
      }

      if (invalidateOnBuild) {
        api.invalidateOnBuild();
      }
    },
    input: null,
  });
}

export async function getConfigHash(
  config: Config,
  pluginName: string,
  options: ParcelOptions,
): Promise<string> {
  if (config.result == null) {
    return '';
  }

  let hash = new Hash();
  hash.writeString(config.id);

  // If there is no result hash set by the transformer, default to hashing the included
  // files if any, otherwise try to hash the config result itself.
  if (config.cacheKey == null) {
    if (config.invalidateOnFileChange.size > 0) {
      hash.writeString(
        await getInvalidationHash(
          [...config.invalidateOnFileChange].map(filePath => ({
            type: 'file',
            filePath,
          })),
          options,
        ),
      );
    } else if (config.result != null) {
      try {
        hash.writeBuffer(serializeRaw(config.result));
      } catch (err) {
        throw new ThrowableDiagnostic({
          diagnostic: {
            message:
              'Config result is not hashable because it contains non-serializable objects. Please use config.setCacheKey to set the hash manually.',
            origin: pluginName,
          },
        });
      }
    }
  } else {
    hash.writeString(config.cacheKey ?? '');
  }

  return hash.finish();
}

export function getConfigRequests(
  configs: Array<Config>,
): Array<ConfigRequest> {
  return configs
    .filter(config => {
      // No need to send to the graph if there are no invalidations.
      return (
        config.invalidateOnFileChange.size > 0 ||
        config.invalidateOnFileCreate.length > 0 ||
        config.invalidateOnEnvChange.size > 0 ||
        config.invalidateOnOptionChange.size > 0 ||
        config.invalidateOnStartup ||
        config.invalidateOnBuild
      );
    })
    .map(config => ({
      id: config.id,
      invalidateOnFileChange: config.invalidateOnFileChange,
      invalidateOnFileCreate: config.invalidateOnFileCreate,
      invalidateOnEnvChange: config.invalidateOnEnvChange,
      invalidateOnOptionChange: config.invalidateOnOptionChange,
      invalidateOnStartup: config.invalidateOnStartup,
      invalidateOnBuild: config.invalidateOnBuild,
    }));
}
