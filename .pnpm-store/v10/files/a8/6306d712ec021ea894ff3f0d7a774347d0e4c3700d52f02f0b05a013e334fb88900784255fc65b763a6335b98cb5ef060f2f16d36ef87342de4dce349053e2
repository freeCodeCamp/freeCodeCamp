"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ISOLATED_ENVS = exports.BROWSER_ENVS = void 0;
exports.environmentToInternalEnvironment = environmentToInternalEnvironment;

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _browserslist() {
  const data = _interopRequireDefault(require("browserslist"));

  _browserslist = function () {
    return data;
  };

  return data;
}

function _semver() {
  const data = _interopRequireDefault(require("semver"));

  _semver = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const inspect = Symbol.for('nodejs.util.inspect.custom');
const BROWSER_ENVS = new Set(['browser', 'web-worker', 'service-worker', 'worklet', 'electron-renderer']);
exports.BROWSER_ENVS = BROWSER_ENVS;
const ELECTRON_ENVS = new Set(['electron-main', 'electron-renderer']);
const NODE_ENVS = new Set(['node', ...ELECTRON_ENVS]);
const WORKER_ENVS = new Set(['web-worker', 'service-worker']);
const ISOLATED_ENVS = new Set([...WORKER_ENVS, 'worklet']);
exports.ISOLATED_ENVS = ISOLATED_ENVS;
const ALL_BROWSERS = ['chrome', 'and_chr', 'edge', 'firefox', 'and_ff', 'safari', 'ios', 'samsung', 'opera', 'ie', 'op_mini', 'blackberry', 'op_mob', 'ie_mob', 'and_uc', 'and_qq', 'baidu', 'kaios']; // See require("caniuse-api").getSupport(<feature name>)

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
    op_mob: '64'
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
    op_mob: '64'
  },
  'worker-module': {
    edge: '80',
    chrome: '80',
    opera: '67',
    android: '81',
    and_chr: '86'
  },
  'service-worker-module': {// TODO: Safari 14.1??
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
    op_mob: '64'
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
    op_mob: '64'
  }
};
const internalEnvironmentToEnvironment = new WeakMap();

const _environmentToInternalEnvironment = new WeakMap();

function environmentToInternalEnvironment(environment) {
  return (0, _nullthrows().default)(_environmentToInternalEnvironment.get(environment));
}

class Environment {
  #environment
  /*: InternalEnvironment */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(env, options) {
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

  get id() {
    return this.#environment.id;
  }

  get context() {
    return this.#environment.context;
  }

  get engines() {
    return this.#environment.engines;
  }

  get includeNodeModules() {
    return this.#environment.includeNodeModules;
  }

  get outputFormat() {
    return this.#environment.outputFormat;
  }

  get sourceType() {
    return this.#environment.sourceType;
  }

  get isLibrary() {
    return this.#environment.isLibrary;
  }

  get shouldOptimize() {
    return this.#environment.shouldOptimize;
  }

  get shouldScopeHoist() {
    return this.#environment.shouldScopeHoist;
  }

  get sourceMap() {
    return this.#environment.sourceMap;
  }

  get loc() {
    return (0, _utils.fromInternalSourceLocation)(this.#options.projectRoot, this.#environment.loc);
  } // $FlowFixMe[unsupported-syntax]


  [inspect]() {
    return `Env(${this.#environment.context})`;
  }

  isBrowser() {
    return BROWSER_ENVS.has(this.#environment.context);
  }

  isNode() {
    return NODE_ENVS.has(this.#environment.context);
  }

  isElectron() {
    return ELECTRON_ENVS.has(this.#environment.context);
  }

  isIsolated() {
    return ISOLATED_ENVS.has(this.#environment.context);
  }

  isWorker() {
    return WORKER_ENVS.has(this.#environment.context);
  }

  isWorklet() {
    return this.#environment.context === 'worklet';
  }

  matchesEngines(minVersions, defaultValue = false) {
    // Determine if the environment matches some minimum version requirements.
    // For browsers, we run a browserslist query with and without the minimum
    // required browsers and compare the lists. For node, we just check semver.
    if (this.isBrowser() && this.engines.browsers != null) {
      let targetBrowsers = this.engines.browsers;
      let browsers = targetBrowsers != null && !Array.isArray(targetBrowsers) ? [targetBrowsers] : targetBrowsers; // If outputting esmodules, exclude browsers without support.

      if (this.outputFormat === 'esmodule') {
        browsers = [...browsers, ...getExcludedBrowsers(supportData.esmodules)];
      }

      let matchedBrowsers = (0, _browserslist().default)(browsers);

      if (matchedBrowsers.length === 0) {
        return false;
      }

      let minBrowsers = getExcludedBrowsers(minVersions);
      let withoutMinBrowsers = (0, _browserslist().default)([...browsers, ...minBrowsers]);
      return matchedBrowsers.length === withoutMinBrowsers.length;
    } else if (this.isNode() && this.engines.node != null) {
      return minVersions.node != null && !_semver().default.intersects(`< ${minVersions.node}`, this.engines.node);
    }

    return defaultValue;
  }

  supports(feature, defaultValue) {
    let engines = supportData[feature];

    if (!engines) {
      throw new Error('Unknown environment feature: ' + feature);
    }

    return this.matchesEngines(engines, defaultValue);
  }

}

exports.default = Environment;

function getExcludedBrowsers(minVersions) {
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