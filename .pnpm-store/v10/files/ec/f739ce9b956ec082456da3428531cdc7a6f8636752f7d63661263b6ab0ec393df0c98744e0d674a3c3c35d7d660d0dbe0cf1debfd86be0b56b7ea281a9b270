const { validate: validateOptions } = require('schema-utils');
const { getRefreshGlobalScope, getWebpackVersion } = require('./globals');
const {
  getAdditionalEntries,
  getIntegrationEntry,
  getRefreshGlobal,
  getSocketIntegration,
  injectRefreshEntry,
  injectRefreshLoader,
  makeRefreshRuntimeModule,
  normalizeOptions,
} = require('./utils');
const schema = require('./options.json');

class ReactRefreshPlugin {
  /**
   * @param {import('./types').ReactRefreshPluginOptions} [options] Options for react-refresh-plugin.
   */
  constructor(options = {}) {
    validateOptions(schema, options, {
      name: 'React Refresh Plugin',
      baseDataPath: 'options',
    });

    /**
     * @readonly
     * @type {import('./types').NormalizedPluginOptions}
     */
    this.options = normalizeOptions(options);
  }

  /**
   * Applies the plugin.
   * @param {import('webpack').Compiler} compiler A webpack compiler object.
   * @returns {void}
   */
  apply(compiler) {
    // Skip processing in non-development mode, but allow manual force-enabling
    if (
      // Webpack do not set process.env.NODE_ENV, so we need to check for mode.
      // Ref: https://github.com/webpack/webpack/issues/7074
      (compiler.options.mode !== 'development' ||
        // We also check for production process.env.NODE_ENV,
        // in case it was set and mode is non-development (e.g. 'none')
        (process.env.NODE_ENV && process.env.NODE_ENV === 'production')) &&
      !this.options.forceEnable
    ) {
      return;
    }

    const webpackVersion = getWebpackVersion(compiler);
    const logger = compiler.getInfrastructureLogger(this.constructor.name);

    // Get Webpack imports from compiler instance (if available) -
    // this allow mono-repos to use different versions of Webpack without conflicts.
    const webpack = compiler.webpack || require('webpack');
    const {
      DefinePlugin,
      EntryDependency,
      EntryPlugin,
      ModuleFilenameHelpers,
      NormalModule,
      ProvidePlugin,
      RuntimeGlobals,
      Template,
    } = webpack;

    // Inject react-refresh context to all Webpack entry points.
    // This should create `EntryDependency` objects when available,
    // and fallback to patching the `entry` object for legacy workflows.
    const addEntries = getAdditionalEntries({
      devServer: compiler.options.devServer,
      options: this.options,
    });
    if (EntryPlugin) {
      // Prepended entries does not care about injection order,
      // so we can utilise EntryPlugin for simpler logic.
      addEntries.prependEntries.forEach((entry) => {
        new EntryPlugin(compiler.context, entry, { name: undefined }).apply(compiler);
      });

      const integrationEntry = getIntegrationEntry(this.options.overlay.sockIntegration);
      const socketEntryData = [];
      compiler.hooks.make.tap(
        { name: this.constructor.name, stage: Number.POSITIVE_INFINITY },
        (compilation) => {
          // Exhaustively search all entries for `integrationEntry`.
          // If found, mark those entries and the index of `integrationEntry`.
          for (const [name, entryData] of compilation.entries.entries()) {
            const index = entryData.dependencies.findIndex(
              (dep) => dep.request && dep.request.includes(integrationEntry)
            );
            if (index !== -1) {
              socketEntryData.push({ name, index });
            }
          }
        }
      );

      // Overlay entries need to be injected AFTER integration's entry,
      // so we will loop through everything in `finishMake` instead of `make`.
      // This ensures we can traverse all entry points and inject stuff with the correct order.
      addEntries.overlayEntries.forEach((entry, idx, arr) => {
        compiler.hooks.finishMake.tapPromise(
          { name: this.constructor.name, stage: Number.MIN_SAFE_INTEGER + (arr.length - idx - 1) },
          (compilation) => {
            // Only hook into the current compiler
            if (compilation.compiler !== compiler) {
              return Promise.resolve();
            }

            const injectData = socketEntryData.length ? socketEntryData : [{ name: undefined }];
            return Promise.all(
              injectData.map(({ name, index }) => {
                return new Promise((resolve, reject) => {
                  const options = { name };
                  const dep = EntryPlugin.createDependency(entry, options);
                  compilation.addEntry(compiler.context, dep, options, (err) => {
                    if (err) return reject(err);

                    // If the entry is not a global one,
                    // and we have registered the index for integration entry,
                    // we will reorder all entry dependencies to our desired order.
                    // That is, to have additional entries DIRECTLY behind integration entry.
                    if (name && typeof index !== 'undefined') {
                      const entryData = compilation.entries.get(name);
                      entryData.dependencies.splice(
                        index + 1,
                        0,
                        entryData.dependencies.splice(entryData.dependencies.length - 1, 1)[0]
                      );
                    }

                    resolve();
                  });
                });
              })
            ).then(() => {});
          }
        );
      });
    } else {
      compiler.options.entry = injectRefreshEntry(compiler.options.entry, addEntries);
    }

    // Inject necessary modules and variables to bundle's global scope
    const refreshGlobal = getRefreshGlobalScope(RuntimeGlobals || {});
    /** @type {Record<string, string | boolean>}*/
    const definedModules = {
      // Mapping of react-refresh globals to Webpack runtime globals
      $RefreshReg$: `${refreshGlobal}.register`,
      $RefreshSig$: `${refreshGlobal}.signature`,
      'typeof $RefreshReg$': 'function',
      'typeof $RefreshSig$': 'function',

      // Library mode
      __react_refresh_library__: JSON.stringify(
        Template.toIdentifier(
          this.options.library ||
            compiler.options.output.uniqueName ||
            compiler.options.output.library
        )
      ),
    };
    /** @type {Record<string, string>} */
    const providedModules = {
      __react_refresh_utils__: require.resolve('./runtime/RefreshUtils'),
    };

    if (this.options.overlay === false) {
      // Stub errorOverlay module so their calls can be erased
      definedModules.__react_refresh_error_overlay__ = false;
      definedModules.__react_refresh_polyfill_url__ = false;
      definedModules.__react_refresh_socket__ = false;
    } else {
      definedModules.__react_refresh_polyfill_url__ = this.options.overlay.useURLPolyfill || false;

      if (this.options.overlay.module) {
        providedModules.__react_refresh_error_overlay__ = require.resolve(
          this.options.overlay.module
        );
      }
      if (this.options.overlay.sockIntegration) {
        providedModules.__react_refresh_socket__ = getSocketIntegration(
          this.options.overlay.sockIntegration
        );
      }
    }

    new DefinePlugin(definedModules).apply(compiler);
    new ProvidePlugin(providedModules).apply(compiler);

    const match = ModuleFilenameHelpers.matchObject.bind(undefined, this.options);
    let loggedHotWarning = false;
    compiler.hooks.compilation.tap(
      this.constructor.name,
      (compilation, { normalModuleFactory }) => {
        // Only hook into the current compiler
        if (compilation.compiler !== compiler) {
          return;
        }

        // Tap into version-specific compilation hooks
        switch (webpackVersion) {
          case 4: {
            const outputOptions = compilation.mainTemplate.outputOptions;
            compilation.mainTemplate.hooks.require.tap(
              this.constructor.name,
              // Constructs the module template for react-refresh
              (source, chunk, hash) => {
                // Check for the output filename
                // This is to ensure we are processing a JS-related chunk
                let filename = outputOptions.filename;
                if (typeof filename === 'function') {
                  // Only usage of the `chunk` property is documented by Webpack.
                  // However, some internal Webpack plugins uses other properties,
                  // so we also pass them through to be on the safe side.
                  filename = filename({
                    contentHashType: 'javascript',
                    chunk,
                    hash,
                  });
                }

                // Check whether the current compilation is outputting to JS,
                // since other plugins can trigger compilations for other file types too.
                // If we apply the transform to them, their compilation will break fatally.
                // One prominent example of this is the HTMLWebpackPlugin.
                // If filename is falsy, something is terribly wrong and there's nothing we can do.
                if (!filename || !filename.includes('.js')) {
                  return source;
                }

                // Split template source code into lines for easier processing
                const lines = source.split('\n');
                // Webpack generates this line when the MainTemplate is called
                const moduleInitializationLineNumber = lines.findIndex((line) =>
                  line.includes('modules[moduleId].call(')
                );
                // Unable to find call to module execution -
                // this happens if the current module does not call MainTemplate.
                // In this case, we will return the original source and won't mess with it.
                if (moduleInitializationLineNumber === -1) {
                  return source;
                }

                const moduleInterceptor = Template.asString([
                  `${refreshGlobal}.setup(moduleId);`,
                  'try {',
                  Template.indent(lines[moduleInitializationLineNumber]),
                  '} finally {',
                  Template.indent(`${refreshGlobal}.cleanup(moduleId);`),
                  '}',
                ]);

                return Template.asString([
                  ...lines.slice(0, moduleInitializationLineNumber),
                  '',
                  outputOptions.strictModuleExceptionHandling
                    ? Template.indent(moduleInterceptor)
                    : moduleInterceptor,
                  '',
                  ...lines.slice(moduleInitializationLineNumber + 1, lines.length),
                ]);
              }
            );

            compilation.mainTemplate.hooks.requireExtensions.tap(
              this.constructor.name,
              // Setup react-refresh globals as extensions to Webpack's require function
              (source) => {
                return Template.asString([source, '', getRefreshGlobal(Template)]);
              }
            );

            normalModuleFactory.hooks.afterResolve.tap(
              this.constructor.name,
              // Add react-refresh loader to process files that matches specified criteria
              (data) => {
                return injectRefreshLoader(data, {
                  match,
                  options: { const: false, esModule: false },
                });
              }
            );

            compilation.hooks.normalModuleLoader.tap(
              // `Number.POSITIVE_INFINITY` ensures this check will run only after all other taps
              { name: this.constructor.name, stage: Number.POSITIVE_INFINITY },
              // Check for existence of the HMR runtime -
              // it is the foundation to this plugin working correctly
              (context) => {
                if (!context.hot && !loggedHotWarning) {
                  logger.warn(
                    [
                      'Hot Module Replacement (HMR) is not enabled!',
                      'React Refresh requires HMR to function properly.',
                    ].join(' ')
                  );
                  loggedHotWarning = true;
                }
              }
            );

            break;
          }
          case 5: {
            // Set factory for EntryDependency which is used to initialise the module
            compilation.dependencyFactories.set(EntryDependency, normalModuleFactory);

            const ReactRefreshRuntimeModule = makeRefreshRuntimeModule(webpack);
            compilation.hooks.additionalTreeRuntimeRequirements.tap(
              this.constructor.name,
              // Setup react-refresh globals with a Webpack runtime module
              (chunk, runtimeRequirements) => {
                runtimeRequirements.add(RuntimeGlobals.interceptModuleExecution);
                runtimeRequirements.add(RuntimeGlobals.moduleCache);
                runtimeRequirements.add(refreshGlobal);
                compilation.addRuntimeModule(chunk, new ReactRefreshRuntimeModule());
              }
            );

            normalModuleFactory.hooks.afterResolve.tap(
              this.constructor.name,
              // Add react-refresh loader to process files that matches specified criteria
              (resolveData) => {
                injectRefreshLoader(resolveData.createData, {
                  match,
                  options: {
                    const: compilation.runtimeTemplate.supportsConst(),
                    esModule: this.options.esModule,
                  },
                });
              }
            );

            NormalModule.getCompilationHooks(compilation).loader.tap(
              // `Infinity` ensures this check will run only after all other taps
              { name: this.constructor.name, stage: Infinity },
              // Check for existence of the HMR runtime -
              // it is the foundation to this plugin working correctly
              (context) => {
                if (!context.hot && !loggedHotWarning) {
                  logger.warn(
                    [
                      'Hot Module Replacement (HMR) is not enabled!',
                      'React Refresh requires HMR to function properly.',
                    ].join(' ')
                  );
                  loggedHotWarning = true;
                }
              }
            );

            break;
          }
          default: {
            // Do nothing - this should be an impossible case
          }
        }
      }
    );
  }
}

module.exports.ReactRefreshPlugin = ReactRefreshPlugin;
module.exports = ReactRefreshPlugin;
