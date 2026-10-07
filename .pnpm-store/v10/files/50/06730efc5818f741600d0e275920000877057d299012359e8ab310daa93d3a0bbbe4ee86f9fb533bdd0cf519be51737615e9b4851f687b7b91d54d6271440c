// @flow strict-local

import type {ReporterEvent, Reporter} from '@parcel/types';
import type {WorkerApi} from '@parcel/workers';
import type {Bundle as InternalBundle, ParcelOptions} from './types';
import type {LoadedPlugin} from './ParcelConfig';

import invariant from 'assert';
import {
  bundleToInternalBundle,
  bundleToInternalBundleGraph,
  NamedBundle,
} from './public/Bundle';
import WorkerFarm, {bus} from '@parcel/workers';
import ParcelConfig from './ParcelConfig';
import logger, {
  patchConsole,
  unpatchConsole,
  PluginLogger,
  INTERNAL_ORIGINAL_CONSOLE,
} from '@parcel/logger';
import PluginOptions from './public/PluginOptions';
import BundleGraph from './BundleGraph';

type Opts = {|
  config: ParcelConfig,
  options: ParcelOptions,
  workerFarm: WorkerFarm,
|};

const instances: Set<ReporterRunner> = new Set();

export default class ReporterRunner {
  workerFarm: WorkerFarm;
  config: ParcelConfig;
  options: ParcelOptions;
  pluginOptions: PluginOptions;
  reporters: Array<LoadedPlugin<Reporter>>;

  constructor(opts: Opts) {
    this.config = opts.config;
    this.options = opts.options;
    this.workerFarm = opts.workerFarm;
    this.pluginOptions = new PluginOptions(this.options);

    logger.onLog(event => this.report(event));

    bus.on('reporterEvent', this.eventHandler);
    instances.add(this);

    if (this.options.shouldPatchConsole) {
      patchConsole();
    } else {
      unpatchConsole();
    }
  }

  eventHandler: ReporterEvent => void = (event): void => {
    if (
      event.type === 'buildProgress' &&
      (event.phase === 'optimizing' || event.phase === 'packaging') &&
      !(event.bundle instanceof NamedBundle)
    ) {
      // $FlowFixMe[prop-missing]
      let bundleGraphRef = event.bundleGraphRef;
      // $FlowFixMe[incompatible-exact]
      let bundle: InternalBundle = event.bundle;
      // Convert any internal bundles back to their public equivalents as reporting
      // is public api
      let bundleGraph = this.workerFarm.workerApi.getSharedReference(
        // $FlowFixMe
        bundleGraphRef,
      );
      invariant(bundleGraph instanceof BundleGraph);
      // $FlowFixMe[incompatible-call]
      this.report({
        ...event,
        bundle: NamedBundle.get(bundle, bundleGraph, this.options),
      });
      return;
    }

    this.report(event);
  };

  async report(event: ReporterEvent) {
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
            logger: new PluginLogger({origin: reporter.name}),
          });
        } catch (reportError) {
          INTERNAL_ORIGINAL_CONSOLE.error(reportError);
        }
      }
    } catch (err) {
      INTERNAL_ORIGINAL_CONSOLE.error(err);
    }
  }

  dispose() {
    bus.off('reporterEvent', this.eventHandler);
    instances.delete(this);
  }
}

export function reportWorker(workerApi: WorkerApi, event: ReporterEvent) {
  if (
    event.type === 'buildProgress' &&
    (event.phase === 'optimizing' || event.phase === 'packaging')
  ) {
    // Convert any public api bundles to their internal equivalents for
    // easy serialization
    bus.emit('reporterEvent', {
      ...event,
      bundle: bundleToInternalBundle(event.bundle),
      bundleGraphRef: workerApi.resolveSharedReference(
        bundleToInternalBundleGraph(event.bundle),
      ),
    });
    return;
  }

  bus.emit('reporterEvent', event);
}

export async function report(event: ReporterEvent): Promise<void> {
  await Promise.all([...instances].map(instance => instance.report(event)));
}
