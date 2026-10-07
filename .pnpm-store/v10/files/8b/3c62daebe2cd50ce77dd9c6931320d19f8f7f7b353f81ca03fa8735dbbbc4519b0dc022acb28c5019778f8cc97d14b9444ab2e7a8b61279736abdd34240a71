// @flow strict-local

import type {Async, Bundle as IBundle, Namer} from '@parcel/types';
import type {SharedReference} from '@parcel/workers';
import type ParcelConfig, {LoadedPlugin} from '../ParcelConfig';
import type {StaticRunOpts, RunAPI} from '../RequestTracker';
import type {
  Asset,
  AssetGroup,
  Bundle as InternalBundle,
  Config,
  DevDepRequest,
  ParcelOptions,
} from '../types';
import type {ConfigAndCachePath} from './ParcelConfigRequest';
import type {AbortSignal} from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import invariant from 'assert';
import assert from 'assert';
import nullthrows from 'nullthrows';
import {PluginLogger} from '@parcel/logger';
import ThrowableDiagnostic, {errorToDiagnostic} from '@parcel/diagnostic';
import AssetGraph from '../AssetGraph';
import BundleGraph from '../public/BundleGraph';
import InternalBundleGraph, {bundleGraphEdgeTypes} from '../BundleGraph';
import MutableBundleGraph from '../public/MutableBundleGraph';
import {Bundle, NamedBundle} from '../public/Bundle';
import {report} from '../ReporterRunner';
import dumpGraphToGraphViz from '../dumpGraphToGraphViz';
import {unique} from '@parcel/utils';
import {hashString} from '@parcel/hash';
import PluginOptions from '../public/PluginOptions';
import applyRuntimes from '../applyRuntimes';
import {PARCEL_VERSION, OPTION_CHANGE} from '../constants';
import {assertSignalNotAborted, optionsProxy} from '../utils';
import createParcelConfigRequest, {
  getCachedParcelConfig,
} from './ParcelConfigRequest';
import {
  createDevDependency,
  getDevDepRequests,
  invalidateDevDeps,
  runDevDepRequest,
} from './DevDepRequest';
import {createConfig} from '../InternalConfig';
import {
  loadPluginConfig,
  runConfigRequest,
  type PluginWithLoadConfig,
} from './ConfigRequest';
import {
  joinProjectPath,
  fromProjectPathRelative,
  toProjectPathUnsafe,
} from '../projectPath';
import createAssetGraphRequest from './AssetGraphRequest';

type BundleGraphRequestInput = {|
  requestedAssetIds: Set<string>,
  signal?: AbortSignal,
  optionsRef: SharedReference,
|};

type BundleGraphRequestResult = {|
  bundleGraph: InternalBundleGraph,
|};

type RunInput = {|
  input: BundleGraphRequestInput,
  ...StaticRunOpts<BundleGraphResult>,
|};

export type BundleGraphResult = {|
  bundleGraph: InternalBundleGraph,
  changedAssets: Map<string, Asset>,
  assetRequests: Array<AssetGroup>,
|};

type BundleGraphRequest = {|
  id: string,
  +type: 'bundle_graph_request',
  run: RunInput => Async<BundleGraphResult>,
  input: BundleGraphRequestInput,
|};

export default function createBundleGraphRequest(
  input: BundleGraphRequestInput,
): BundleGraphRequest {
  return {
    type: 'bundle_graph_request',
    id: 'BundleGraph',
    run: async input => {
      let {options, api, invalidateReason} = input;
      let {optionsRef, requestedAssetIds, signal} = input.input;
      let request = createAssetGraphRequest({
        name: 'Main',
        entries: options.entries,
        optionsRef,
        shouldBuildLazily: options.shouldBuildLazily,
        requestedAssetIds,
      });
      let {assetGraph, changedAssets, assetRequests} = await api.runRequest(
        request,
        {
          force: options.shouldBuildLazily && requestedAssetIds.size > 0,
        },
      );

      assertSignalNotAborted(signal);

      // If any subrequests are invalid (e.g. dev dep requests or config requests),
      // bail on incremental bundling. We also need to invalidate for option changes,
      // which are hoisted to direct invalidations on the bundle graph request.
      let subRequestsInvalid =
        Boolean(invalidateReason & OPTION_CHANGE) ||
        input.api
          .getSubRequests()
          .some(req => !input.api.canSkipSubrequest(req.id));

      if (subRequestsInvalid) {
        assetGraph.safeToIncrementallyBundle = false;
      }

      let configResult = nullthrows(
        await input.api.runRequest<null, ConfigAndCachePath>(
          createParcelConfigRequest(),
        ),
      );

      assertSignalNotAborted(signal);

      let parcelConfig = getCachedParcelConfig(configResult, input.options);
      let {devDeps, invalidDevDeps} = await getDevDepRequests(input.api);
      invalidateDevDeps(invalidDevDeps, input.options, parcelConfig);

      let builder = new BundlerRunner(input, parcelConfig, devDeps);
      let res: BundleGraphResult = await builder.bundle({
        graph: assetGraph,
        changedAssets: changedAssets,
        assetRequests,
      });

      for (let [id, asset] of changedAssets) {
        res.changedAssets.set(id, asset);
      }

      dumpGraphToGraphViz(
        // $FlowFixMe Added in Flow 0.121.0 upgrade in #4381 (Windows only)
        res.bundleGraph._graph,
        'BundleGraph',
        bundleGraphEdgeTypes,
      );

      return res;
    },
    input,
  };
}

class BundlerRunner {
  options: ParcelOptions;
  optionsRef: SharedReference;
  config: ParcelConfig;
  pluginOptions: PluginOptions;
  api: RunAPI<BundleGraphResult>;
  previousDevDeps: Map<string, string>;
  devDepRequests: Map<string, DevDepRequest>;
  configs: Map<string, Config>;
  cacheKey: string;

  constructor(
    {input, api, options}: RunInput,
    config: ParcelConfig,
    previousDevDeps: Map<string, string>,
  ) {
    this.options = options;
    this.api = api;
    this.optionsRef = input.optionsRef;
    this.config = config;
    this.previousDevDeps = previousDevDeps;
    this.devDepRequests = new Map();
    this.configs = new Map();
    this.pluginOptions = new PluginOptions(
      optionsProxy(this.options, api.invalidateOnOptionChange),
    );
    this.cacheKey = hashString(
      `${PARCEL_VERSION}:BundleGraph:${JSON.stringify(options.entries) ?? ''}${
        options.mode
      }`,
    );
  }

  async loadConfigs() {
    // Load all configs up front so we can use them in the cache key
    let bundler = await this.config.getBundler();
    await this.loadConfig(bundler);

    let namers = await this.config.getNamers();
    for (let namer of namers) {
      await this.loadConfig(namer);
    }

    let runtimes = await this.config.getRuntimes();
    for (let runtime of runtimes) {
      await this.loadConfig(runtime);
    }
  }

  async loadConfig<T: PluginWithLoadConfig>(plugin: LoadedPlugin<T>) {
    let config = createConfig({
      plugin: plugin.name,
      searchPath: toProjectPathUnsafe('index'),
    });

    await loadPluginConfig(plugin, config, this.options);
    await runConfigRequest(this.api, config);
    for (let devDep of config.devDeps) {
      let devDepRequest = await createDevDependency(
        devDep,
        this.previousDevDeps,
        this.options,
      );
      await this.runDevDepRequest(devDepRequest);
    }

    this.configs.set(plugin.name, config);
  }

  async runDevDepRequest(devDepRequest: DevDepRequest) {
    let {specifier, resolveFrom} = devDepRequest;
    let key = `${specifier}:${fromProjectPathRelative(resolveFrom)}`;
    this.devDepRequests.set(key, devDepRequest);
    await runDevDepRequest(this.api, devDepRequest);
  }

  async bundle({
    graph,
    changedAssets,
    assetRequests,
  }: {|
    graph: AssetGraph,
    changedAssets: Map<string, Asset>,
    assetRequests: Array<AssetGroup>,
  |}): Promise<BundleGraphResult> {
    report({
      type: 'buildProgress',
      phase: 'bundling',
    });

    await this.loadConfigs();

    let plugin = await this.config.getBundler();
    let {plugin: bundler, name, resolveFrom} = plugin;

    // if a previous asset graph hash is passed in, check if the bundle graph is also available
    let previousBundleGraphResult: ?BundleGraphRequestResult;
    if (graph.safeToIncrementallyBundle) {
      try {
        previousBundleGraphResult = await this.api.getPreviousResult();
      } catch {
        // if the bundle graph had an error or was removed, don't fail the build
      }
    }
    if (previousBundleGraphResult == null) {
      graph.safeToIncrementallyBundle = false;
    }

    let internalBundleGraph;

    let logger = new PluginLogger({origin: name});

    try {
      if (previousBundleGraphResult) {
        internalBundleGraph = previousBundleGraphResult.bundleGraph;
        for (let changedAsset of changedAssets.values()) {
          internalBundleGraph.updateAsset(changedAsset);
        }
      } else {
        internalBundleGraph = InternalBundleGraph.fromAssetGraph(graph);
        invariant(internalBundleGraph != null); // ensures the graph was created

        await dumpGraphToGraphViz(
          // $FlowFixMe
          internalBundleGraph._graph,
          'before_bundle',
          bundleGraphEdgeTypes,
        );
        let mutableBundleGraph = new MutableBundleGraph(
          internalBundleGraph,
          this.options,
        );

        // this the normal bundle workflow (bundle, optimizing, run-times, naming)
        await bundler.bundle({
          bundleGraph: mutableBundleGraph,
          config: this.configs.get(plugin.name)?.result,
          options: this.pluginOptions,
          logger,
        });

        if (this.pluginOptions.mode === 'production') {
          try {
            await bundler.optimize({
              bundleGraph: mutableBundleGraph,
              config: this.configs.get(plugin.name)?.result,
              options: this.pluginOptions,
              logger,
            });
          } catch (e) {
            throw new ThrowableDiagnostic({
              diagnostic: errorToDiagnostic(e, {
                origin: plugin.name,
              }),
            });
          } finally {
            await dumpGraphToGraphViz(
              // $FlowFixMe[incompatible-call]
              internalBundleGraph._graph,
              'after_optimize',
            );
          }
        }

        // Add dev dependency for the bundler. This must be done AFTER running it due to
        // the potential for lazy require() that aren't executed until the request runs.
        let devDepRequest = await createDevDependency(
          {
            specifier: name,
            resolveFrom,
          },
          this.previousDevDeps,
          this.options,
        );
        await this.runDevDepRequest(devDepRequest);
      }
    } catch (e) {
      throw new ThrowableDiagnostic({
        diagnostic: errorToDiagnostic(e, {
          origin: name,
        }),
      });
    } finally {
      invariant(internalBundleGraph != null); // ensures the graph was created
      await dumpGraphToGraphViz(
        // $FlowFixMe[incompatible-call]
        internalBundleGraph._graph,
        'after_bundle',
        bundleGraphEdgeTypes,
      );
    }

    let changedRuntimes = new Map();
    if (!previousBundleGraphResult) {
      await this.nameBundles(internalBundleGraph);

      changedRuntimes = await applyRuntimes({
        bundleGraph: internalBundleGraph,
        api: this.api,
        config: this.config,
        options: this.options,
        optionsRef: this.optionsRef,
        pluginOptions: this.pluginOptions,
        previousDevDeps: this.previousDevDeps,
        devDepRequests: this.devDepRequests,
        configs: this.configs,
      });

      // Pre-compute the hashes for each bundle so they are only computed once and shared between workers.
      internalBundleGraph.getBundleGraphHash();
    }

    await dumpGraphToGraphViz(
      // $FlowFixMe
      internalBundleGraph._graph,
      'after_runtimes',
      bundleGraphEdgeTypes,
    );

    this.api.storeResult(
      {
        bundleGraph: internalBundleGraph,
        changedAssets: new Map(),
        assetRequests: [],
      },
      this.cacheKey,
    );

    return {
      bundleGraph: internalBundleGraph,
      changedAssets: changedRuntimes,
      assetRequests,
    };
  }

  async nameBundles(bundleGraph: InternalBundleGraph): Promise<void> {
    let namers = await this.config.getNamers();
    // inline bundles must still be named so the PackagerRunner
    // can match them to the correct packager/optimizer plugins.
    let bundles = bundleGraph.getBundles({includeInline: true});
    await Promise.all(
      bundles.map(bundle => this.nameBundle(namers, bundle, bundleGraph)),
    );

    // Add dev deps for namers, AFTER running them to account for lazy require().
    for (let namer of namers) {
      let devDepRequest = await createDevDependency(
        {
          specifier: namer.name,
          resolveFrom: namer.resolveFrom,
        },
        this.previousDevDeps,
        this.options,
      );
      await this.runDevDepRequest(devDepRequest);
    }

    let bundleNames = bundles.map(b =>
      joinProjectPath(b.target.distDir, nullthrows(b.name)),
    );
    assert.deepEqual(
      bundleNames,
      unique(bundleNames),
      'Bundles must have unique names',
    );
  }

  async nameBundle(
    namers: Array<LoadedPlugin<Namer<mixed>>>,
    internalBundle: InternalBundle,
    internalBundleGraph: InternalBundleGraph,
  ): Promise<void> {
    let bundle = Bundle.get(internalBundle, internalBundleGraph, this.options);
    let bundleGraph = new BundleGraph<IBundle>(
      internalBundleGraph,
      NamedBundle.get.bind(NamedBundle),
      this.options,
    );

    for (let namer of namers) {
      try {
        let name = await namer.plugin.name({
          bundle,
          bundleGraph,
          config: this.configs.get(namer.name)?.result,
          options: this.pluginOptions,
          logger: new PluginLogger({origin: namer.name}),
        });

        if (name != null) {
          internalBundle.name = name;
          let {hashReference} = internalBundle;
          internalBundle.displayName = name.includes(hashReference)
            ? name.replace(hashReference, '[hash]')
            : name;

          return;
        }
      } catch (e) {
        throw new ThrowableDiagnostic({
          diagnostic: errorToDiagnostic(e, {
            origin: namer.name,
          }),
        });
      }
    }

    throw new Error('Unable to name bundle');
  }
}
