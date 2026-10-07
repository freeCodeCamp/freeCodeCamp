// @flow strict-local
import type {
  Environment as IEnvironment,
  EnvironmentContext,
  EnvironmentFeature,
  Engines,
  OutputFormat,
  PackageName,
  VersionMap,
  SourceLocation,
  SourceType,
  TargetSourceMapOptions,
} from '@parcel/types';
import type {Environment as InternalEnvironment, ParcelOptions} from '../types';
import nullthrows from 'nullthrows';
import browserslist from 'browserslist';
import semver from 'semver';
import {fromInternalSourceLocation} from '../utils';

const inspect = Symbol.for('nodejs.util.inspect.custom');

export const BROWSER_ENVS: Set<string> = new Set<string>([
  'browser',
  'web-worker',
  'service-worker',
  'worklet',
  'electron-renderer',
]);
const ELECTRON_ENVS = new Set(['electron-main', 'electron-renderer']);
const NODE_ENVS = new Set(['node', ...ELECTRON_ENVS]);
const WORKER_ENVS = new Set(['web-worker', 'service-worker']);
export const ISOLATED_ENVS: Set<string> = new Set([...WORKER_ENVS, 'worklet']);

const ALL_BROWSERS = [
  'chrome',
  'and_chr',
  'edge',
  'firefox',
  'and_ff',
  'safari',
  'ios',
  'samsung',
  'opera',
  'ie',
  'op_mini',
  'blackberry',
  'op_mob',
  'ie_mob',
  'and_uc',
  'and_qq',
  'baidu',
  'kaios',
];

// See require("caniuse-api").getSupport(<feature name>)
const supportData = {
  esmodules: {
    edge: '16',
    firefox: '60',
    chrome: '61',
    safari: '10.1',
    opera: '48',
    ios: '10.3',
    android: '76',
    and_chr: '76',
    and_ff: '68',
    samsung: '8.2',
    and_qq: '10.4',
    op_mob: '64',
  },
  'dynamic-import': {
    edge: '76',
    firefox: '67',
    chrome: '63',
    safari: '11.1',
    opera: '50',
    ios: '11.3',
    android: '63',
    and_chr: '63',
    and_ff: '67',
    samsung: '8',
    and_qq: '10.4',
    op_mob: '64',
  },
  'worker-module': {
    edge: '80',
    chrome: '80',
    opera: '67',
    android: '81',
    and_chr: '86',
  },
  'service-worker-module': {
    // TODO: Safari 14.1??
  },
  'import-meta-url': {
    edge: '79',
    firefox: '62',
    chrome: '64',
    safari: '11.1',
    opera: '51',
    ios: '12',
    android: '64',
    and_chr: '64',
    and_ff: '62',
    samsung: '9.2',
    and_qq: '10.4',
    op_mob: '64',
  },
  'arrow-functions': {
    chrome: '47',
    opera: '34',
    edge: '13',
    firefox: '45',
    safari: '10',
    node: '6',
    ios: '10',
    samsung: '5',
    electron: '0.36',
    android: '50',
    qq: '10.4',
    baidu: '7.12',
    kaios: '2.5',
    and_chr: '50',
    and_qq: '12.12',
    op_mob: '64',
  },
};

const internalEnvironmentToEnvironment: WeakMap<
  InternalEnvironment,
  Environment,
> = new WeakMap();
const _environmentToInternalEnvironment: WeakMap<
  IEnvironment,
  InternalEnvironment,
> = new WeakMap();
export function environmentToInternalEnvironment(
  environment: IEnvironment,
): InternalEnvironment {
  return nullthrows(_environmentToInternalEnvironment.get(environment));
}

export default class Environment implements IEnvironment {
  #environment /*: InternalEnvironment */;
  #options /*: ParcelOptions */;

  constructor(env: InternalEnvironment, options: ParcelOptions): Environment {
    let existing = internalEnvironmentToEnvironment.get(env);
    if (existing != null) {
      return existing;
    }

    this.#environment = env;
    this.#options = options;
    _environmentToInternalEnvironment.set(this, env);
    internalEnvironmentToEnvironment.set(env, this);
    return this;
  }

  get id(): string {
    return this.#environment.id;
  }

  get context(): EnvironmentContext {
    return this.#environment.context;
  }

  get engines(): Engines {
    return this.#environment.engines;
  }

  get includeNodeModules():
    | boolean
    | Array<PackageName>
    | {[PackageName]: boolean, ...} {
    return this.#environment.includeNodeModules;
  }

  get outputFormat(): OutputFormat {
    return this.#environment.outputFormat;
  }

  get sourceType(): SourceType {
    return this.#environment.sourceType;
  }

  get isLibrary(): boolean {
    return this.#environment.isLibrary;
  }

  get shouldOptimize(): boolean {
    return this.#environment.shouldOptimize;
  }

  get shouldScopeHoist(): boolean {
    return this.#environment.shouldScopeHoist;
  }

  get sourceMap(): ?TargetSourceMapOptions {
    return this.#environment.sourceMap;
  }

  get loc(): ?SourceLocation {
    return fromInternalSourceLocation(
      this.#options.projectRoot,
      this.#environment.loc,
    );
  }

  // $FlowFixMe[unsupported-syntax]
  [inspect](): string {
    return `Env(${this.#environment.context})`;
  }

  isBrowser(): boolean {
    return BROWSER_ENVS.has(this.#environment.context);
  }

  isNode(): boolean {
    return NODE_ENVS.has(this.#environment.context);
  }

  isElectron(): boolean {
    return ELECTRON_ENVS.has(this.#environment.context);
  }

  isIsolated(): boolean {
    return ISOLATED_ENVS.has(this.#environment.context);
  }

  isWorker(): boolean {
    return WORKER_ENVS.has(this.#environment.context);
  }

  isWorklet(): boolean {
    return this.#environment.context === 'worklet';
  }

  matchesEngines(
    minVersions: VersionMap,
    defaultValue?: boolean = false,
  ): boolean {
    // Determine if the environment matches some minimum version requirements.
    // For browsers, we run a browserslist query with and without the minimum
    // required browsers and compare the lists. For node, we just check semver.
    if (this.isBrowser() && this.engines.browsers != null) {
      let targetBrowsers = this.engines.browsers;
      let browsers =
        targetBrowsers != null && !Array.isArray(targetBrowsers)
          ? [targetBrowsers]
          : targetBrowsers;

      // If outputting esmodules, exclude browsers without support.
      if (this.outputFormat === 'esmodule') {
        browsers = [...browsers, ...getExcludedBrowsers(supportData.esmodules)];
      }

      let matchedBrowsers = browserslist(browsers);
      if (matchedBrowsers.length === 0) {
        return false;
      }

      let minBrowsers = getExcludedBrowsers(minVersions);
      let withoutMinBrowsers = browserslist([...browsers, ...minBrowsers]);
      return matchedBrowsers.length === withoutMinBrowsers.length;
    } else if (this.isNode() && this.engines.node != null) {
      return (
        minVersions.node != null &&
        !semver.intersects(`< ${minVersions.node}`, this.engines.node)
      );
    }

    return defaultValue;
  }

  supports(feature: EnvironmentFeature, defaultValue?: boolean): boolean {
    let engines = supportData[feature];
    if (!engines) {
      throw new Error('Unknown environment feature: ' + feature);
    }

    return this.matchesEngines(engines, defaultValue);
  }
}

function getExcludedBrowsers(minVersions: VersionMap) {
  let browsers = [];
  for (let browser of ALL_BROWSERS) {
    let version = minVersions[browser];
    if (version) {
      browsers.push(`not ${browser} < ${version}`);
    } else {
      browsers.push(`not ${browser} > 0`);
    }
  }

  return browsers;
}
