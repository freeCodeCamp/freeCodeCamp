"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.report = report;
exports.reportWorker = reportWorker;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

var _Bundle = require("./public/Bundle");

function _workers() {
  const data = _interopRequireWildcard(require("@parcel/workers"));

  _workers = function () {
    return data;
  };

  return data;
}

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

function _logger() {
  const data = _interopRequireWildcard(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

var _PluginOptions = _interopRequireDefault(require("./public/PluginOptions"));

var _BundleGraph = _interopRequireDefault(require("./BundleGraph"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const instances = new Set();

class ReporterRunner {
  constructor(opts) {
    this.config = opts.config;
    this.options = opts.options;
    this.workerFarm = opts.workerFarm;
    this.pluginOptions = new _PluginOptions.default(this.options);

    _logger().default.onLog(event => this.report(event));

    _workers().bus.on('reporterEvent', this.eventHandler);

    instances.add(this);

    if (this.options.shouldPatchConsole) {
      (0, _logger().patchConsole)();
    } else {
      (0, _logger().unpatchConsole)();
    }
  }

  eventHandler = event => {
    if (event.type === 'buildProgress' && (event.phase === 'optimizing' || event.phase === 'packaging') && !(event.bundle instanceof _Bundle.NamedBundle)) {
      // $FlowFixMe[prop-missing]
      let bundleGraphRef = event.bundleGraphRef; // $FlowFixMe[incompatible-exact]

      let bundle = event.bundle; // Convert any internal bundles back to their public equivalents as reporting
      // is public api

      let bundleGraph = this.workerFarm.workerApi.getSharedReference( // $FlowFixMe
      bundleGraphRef);
      (0, _assert().default)(bundleGraph instanceof _BundleGraph.default); // $FlowFixMe[incompatible-call]

      this.report({ ...event,
        bundle: _Bundle.NamedBundle.get(bundle, bundleGraph, this.options)
      });
      return;
    }

    this.report(event);
  };

  async report(event) {
    // We should catch all errors originating from reporter plugins to prevent infinite loops
    try {
      let reporters = this.reporters;

      if (!reporters) {
        this.reporters = await this.config.getReporters();
        reporters = this.reporters;
      }

      for (let reporter of this.reporters) {
        try {
          await reporter.plugin.report({
            event,
            options: this.pluginOptions,
            logger: new (_logger().PluginLogger)({
              origin: reporter.name
            })
          });
        } catch (reportError) {
          _logger().INTERNAL_ORIGINAL_CONSOLE.error(reportError);
        }
      }
    } catch (err) {
      _logger().INTERNAL_ORIGINAL_CONSOLE.error(err);
    }
  }

  dispose() {
    _workers().bus.off('reporterEvent', this.eventHandler);

    instances.delete(this);
  }

}

exports.default = ReporterRunner;

function reportWorker(workerApi, event) {
  if (event.type === 'buildProgress' && (event.phase === 'optimizing' || event.phase === 'packaging')) {
    // Convert any public api bundles to their internal equivalents for
    // easy serialization
    _workers().bus.emit('reporterEvent', { ...event,
      bundle: (0, _Bundle.bundleToInternalBundle)(event.bundle),
      bundleGraphRef: workerApi.resolveSharedReference((0, _Bundle.bundleToInternalBundleGraph)(event.bundle))
    });

    return;
  }

  _workers().bus.emit('reporterEvent', event);
}

async function report(event) {
  await Promise.all([...instances].map(instance => instance.report(event)));
}