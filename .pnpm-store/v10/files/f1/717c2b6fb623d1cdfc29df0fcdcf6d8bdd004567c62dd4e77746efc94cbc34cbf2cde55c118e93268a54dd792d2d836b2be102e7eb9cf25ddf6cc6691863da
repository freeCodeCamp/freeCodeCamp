// @flow strict-local

import type {PackageName, ConfigResult} from '@parcel/types';
import type {
  Config,
  Environment,
  InternalFileCreateInvalidation,
  InternalDevDepOptions,
} from './types';
import type {ProjectPath} from './projectPath';

import {fromProjectPathRelative} from './projectPath';
import {createEnvironment} from './Environment';
import {hashString} from '@parcel/hash';

type ConfigOpts = {|
  plugin: PackageName,
  searchPath: ProjectPath,
  isSource?: boolean,
  env?: Environment,
  result?: ConfigResult,
  invalidateOnFileChange?: Set<ProjectPath>,
  invalidateOnFileCreate?: Array<InternalFileCreateInvalidation>,
  invalidateOnEnvChange?: Set<string>,
  invalidateOnOptionChange?: Set<string>,
  devDeps?: Array<InternalDevDepOptions>,
  invalidateOnStartup?: boolean,
  invalidateOnBuild?: boolean,
|};

export function createConfig({
  plugin,
  isSource,
  searchPath,
  env,
  result,
  invalidateOnFileChange,
  invalidateOnFileCreate,
  invalidateOnEnvChange,
  invalidateOnOptionChange,
  devDeps,
  invalidateOnStartup,
  invalidateOnBuild,
}: ConfigOpts): Config {
  let environment = env ?? createEnvironment();
  return {
    id: hashString(
      plugin +
        fromProjectPathRelative(searchPath) +
        environment.id +
        String(isSource),
    ),
    isSource: isSource ?? false,
    searchPath,
    env: environment,
    result: result ?? null,
    cacheKey: null,
    invalidateOnFileChange: invalidateOnFileChange ?? new Set(),
    invalidateOnFileCreate: invalidateOnFileCreate ?? [],
    invalidateOnEnvChange: invalidateOnEnvChange ?? new Set(),
    invalidateOnOptionChange: invalidateOnOptionChange ?? new Set(),
    devDeps: devDeps ?? [],
    invalidateOnStartup: invalidateOnStartup ?? false,
    invalidateOnBuild: invalidateOnBuild ?? false,
  };
}
