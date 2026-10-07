// @flow
import type {
  EnvironmentOptions,
  Environment as IEnvironment,
  FilePath,
} from '@parcel/types';
import type {Environment, InternalSourceLocation} from './types';
import {hashString} from '@parcel/hash';
import {toInternalSourceLocation} from './utils';
import PublicEnvironment from './public/Environment';
import {environmentToInternalEnvironment} from './public/Environment';

const DEFAULT_ENGINES = {
  browsers: ['> 0.25%'],
  node: '>= 8.0.0',
};

type EnvironmentOpts = {|
  ...EnvironmentOptions,
  loc?: ?InternalSourceLocation,
|};

export function createEnvironment({
  context,
  engines,
  includeNodeModules,
  outputFormat,
  sourceType = 'module',
  shouldOptimize = false,
  isLibrary = false,
  shouldScopeHoist = false,
  sourceMap,
  loc,
}: EnvironmentOpts = {
  /*::...null*/
}): Environment {
  if (context == null) {
    if (engines?.node) {
      context = 'node';
    } else if (engines?.browsers) {
      context = 'browser';
    } else {
      context = 'browser';
    }
  }

  if (engines == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
        engines = {
          node: DEFAULT_ENGINES.node,
        };
        break;
      case 'browser':
      case 'web-worker':
      case 'service-worker':
      case 'electron-renderer':
        engines = {
          browsers: DEFAULT_ENGINES.browsers,
        };
        break;
      default:
        engines = {};
    }
  }

  if (includeNodeModules == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
      case 'electron-renderer':
        includeNodeModules = false;
        break;
      case 'browser':
      case 'web-worker':
      case 'service-worker':
      default:
        includeNodeModules = true;
        break;
    }
  }

  if (outputFormat == null) {
    switch (context) {
      case 'node':
      case 'electron-main':
      case 'electron-renderer':
        outputFormat = 'commonjs';
        break;
      default:
        outputFormat = 'global';
        break;
    }
  }

  let res: Environment = {
    id: '',
    context,
    engines,
    includeNodeModules,
    outputFormat,
    sourceType,
    isLibrary,
    shouldOptimize,
    shouldScopeHoist,
    sourceMap,
    loc,
  };

  res.id = getEnvironmentHash(res);
  return res;
}

export function mergeEnvironments(
  projectRoot: FilePath,
  a: Environment,
  b: ?(EnvironmentOptions | IEnvironment),
): Environment {
  // If merging the same object, avoid copying.
  if (a === b || !b) {
    return a;
  }

  if (b instanceof PublicEnvironment) {
    return environmentToInternalEnvironment(b);
  }

  // $FlowFixMe - ignore the `id` that is already on a
  return createEnvironment({
    ...a,
    ...b,
    loc: b.loc ? toInternalSourceLocation(projectRoot, b.loc) : a.loc,
  });
}

function getEnvironmentHash(env: Environment): string {
  return hashString(
    JSON.stringify([
      env.context,
      env.engines,
      env.includeNodeModules,
      env.outputFormat,
      env.sourceType,
      env.isLibrary,
      env.shouldOptimize,
      env.shouldScopeHoist,
      env.sourceMap,
    ]),
  );
}
