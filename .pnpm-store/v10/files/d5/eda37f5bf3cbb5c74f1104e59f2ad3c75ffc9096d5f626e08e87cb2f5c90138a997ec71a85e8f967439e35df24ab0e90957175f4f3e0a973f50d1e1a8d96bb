"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.pluginSymbol = exports.pluginName = void 0;

var _schemaUtils = require("schema-utils");

var _pluginOptions = _interopRequireDefault(require("./plugin-options.json"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable class-methods-use-this */
const pluginName = 'mini-css-extract-plugin';
exports.pluginName = pluginName;
const pluginSymbol = Symbol(pluginName);
exports.pluginSymbol = pluginSymbol;
const REGEXP_CHUNKHASH = /\[chunkhash(?::(\d+))?\]/i;
const REGEXP_CONTENTHASH = /\[contenthash(?::(\d+))?\]/i;
const REGEXP_NAME = /\[name\]/i;
const DEFAULT_FILENAME = '[name].css';
const TYPES = new Set([_utils.MODULE_TYPE]);
const CODE_GENERATION_RESULT = {
  sources: new Map(),
  runtimeRequirements: new Set()
};
/**
 * @type WeakMap<webpack, CssModule>
 */

const cssModuleCache = new WeakMap();
/**
 * @type WeakMap<webpack, CssDependency>
 */

const cssDependencyCache = new WeakMap();
const registered = new WeakSet();

class MiniCssExtractPlugin {
  static getCssModule(webpack) {
    /**
     * Prevent creation of multiple CssModule classes to allow other integrations to get the current CssModule.
     */
    if (cssModuleCache.has(webpack)) {
      return cssModuleCache.get(webpack);
    }

    class CssModule extends webpack.Module {
      constructor({
        context,
        identifier,
        identifierIndex,
        content,
        media,
        sourceMap,
        assets,
        assetsInfo
      }) {
        super(_utils.MODULE_TYPE, context);
        this.id = '';
        this._context = context;
        this._identifier = identifier;
        this._identifierIndex = identifierIndex;
        this.content = content;
        this.media = media;
        this.sourceMap = sourceMap;
        this.assets = assets;
        this.assetsInfo = assetsInfo;
        this._needBuild = true;
      } // no source() so webpack 4 doesn't do add stuff to the bundle


      size() {
        return this.content.length;
      }

      identifier() {
        return `css|${this._identifier}|${this._identifierIndex}`;
      }

      readableIdentifier(requestShortener) {
        return `css ${requestShortener.shorten(this._identifier)}${this._identifierIndex ? ` (${this._identifierIndex})` : ''}`;
      } // eslint-disable-next-line class-methods-use-this


      getSourceTypes() {
        return TYPES;
      } // eslint-disable-next-line class-methods-use-this


      codeGeneration() {
        return CODE_GENERATION_RESULT;
      }

      nameForCondition() {
        const resource = this._identifier.split('!').pop();

        const idx = resource.indexOf('?');

        if (idx >= 0) {
          return resource.substring(0, idx);
        }

        return resource;
      }

      updateCacheModule(module) {
        if (this.content !== module.content || this.media !== module.media || this.sourceMap !== module.sourceMap || this.assets !== module.assets || this.assetsInfo !== module.assetsInfo) {
          this._needBuild = true;
          this.content = module.content;
          this.media = module.media;
          this.sourceMap = module.sourceMap;
          this.assets = module.assets;
          this.assetsInfo = module.assetsInfo;
        }
      } // eslint-disable-next-line class-methods-use-this


      needRebuild() {
        return this._needBuild;
      } // eslint-disable-next-line class-methods-use-this


      needBuild(context, callback) {
        callback(null, this._needBuild);
      }

      build(options, compilation, resolver, fileSystem, callback) {
        this.buildInfo = {
          assets: this.assets,
          assetsInfo: this.assetsInfo,
          cacheable: true,
          hash: this._computeHash(compilation.outputOptions.hashFunction)
        };
        this.buildMeta = {};
        this._needBuild = false;
        callback();
      }

      _computeHash(hashFunction) {
        const hash = webpack.util.createHash(hashFunction);
        hash.update(this.content);
        hash.update(this.media || '');
        hash.update(this.sourceMap || '');
        return hash.digest('hex');
      }

      updateHash(hash, context) {
        super.updateHash(hash, context);
        hash.update(this.buildInfo.hash);
      }

      serialize(context) {
        const {
          write
        } = context;
        write(this._context);
        write(this._identifier);
        write(this._identifierIndex);
        write(this.content);
        write(this.media);
        write(this.sourceMap);
        write(this.assets);
        write(this.assetsInfo);
        write(this._needBuild);
        super.serialize(context);
      }

      deserialize(context) {
        this._needBuild = context.read();
        super.deserialize(context);
      }

    }

    cssModuleCache.set(webpack, CssModule);

    if (webpack.util && webpack.util.serialization && webpack.util.serialization.register) {
      webpack.util.serialization.register(CssModule, 'mini-css-extract-plugin/dist/CssModule', null, {
        serialize(instance, context) {
          instance.serialize(context);
        },

        deserialize(context) {
          const {
            read
          } = context;
          const contextModule = read();
          const identifier = read();
          const identifierIndex = read();
          const content = read();
          const media = read();
          const sourceMap = read();
          const assets = read();
          const assetsInfo = read();
          const dep = new CssModule({
            context: contextModule,
            identifier,
            identifierIndex,
            content,
            media,
            sourceMap,
            assets,
            assetsInfo
          });
          dep.deserialize(context);
          return dep;
        }

      });
    }

    return CssModule;
  }

  static getCssDependency(webpack) {
    /**
     * Prevent creation of multiple CssDependency classes to allow other integrations to get the current CssDependency.
     */
    if (cssDependencyCache.has(webpack)) {
      return cssDependencyCache.get(webpack);
    } // eslint-disable-next-line no-shadow


    class CssDependency extends webpack.Dependency {
      constructor({
        identifier,
        content,
        media,
        sourceMap
      }, context, identifierIndex) {
        super();
        this.identifier = identifier;
        this.identifierIndex = identifierIndex;
        this.content = content;
        this.media = media;
        this.sourceMap = sourceMap;
        this.context = context; // eslint-disable-next-line no-undefined

        this.assets = undefined; // eslint-disable-next-line no-undefined

        this.assetsInfo = undefined;
      }

      getResourceIdentifier() {
        return `css-module-${this.identifier}-${this.identifierIndex}`;
      } // eslint-disable-next-line class-methods-use-this


      getModuleEvaluationSideEffectsState() {
        return webpack.ModuleGraphConnection.TRANSITIVE_ONLY;
      }

      serialize(context) {
        const {
          write
        } = context;
        write(this.identifier);
        write(this.content);
        write(this.media);
        write(this.sourceMap);
        write(this.context);
        write(this.identifierIndex);
        write(this.assets);
        write(this.assetsInfo);
        super.serialize(context);
      }

      deserialize(context) {
        super.deserialize(context);
      }

    }

    cssDependencyCache.set(webpack, CssDependency);

    if (webpack.util && webpack.util.serialization && webpack.util.serialization.register) {
      webpack.util.serialization.register(CssDependency, 'mini-css-extract-plugin/dist/CssDependency', null, {
        serialize(instance, context) {
          instance.serialize(context);
        },

        deserialize(context) {
          const {
            read
          } = context;
          const dep = new CssDependency({
            identifier: read(),
            content: read(),
            media: read(),
            sourceMap: read()
          }, read(), read());
          const assets = read();
          const assetsInfo = read();
          dep.assets = assets;
          dep.assetsInfo = assetsInfo;
          dep.deserialize(context);
          return dep;
        }

      });
    }

    return CssDependency;
  }

  constructor(options = {}) {
    (0, _schemaUtils.validate)(_pluginOptions.default, options, {
      name: 'Mini CSS Extract Plugin',
      baseDataPath: 'options'
    });
    this._sortedModulesCache = new WeakMap();
    this.options = Object.assign({
      filename: DEFAULT_FILENAME,
      ignoreOrder: false,
      experimentalUseImportModule: false
    }, options);
    this.runtimeOptions = {
      insert: options.insert,
      linkType: // Todo in next major release set default to "false"
      options.linkType === true || typeof options.linkType === 'undefined' ? 'text/css' : options.linkType,
      attributes: options.attributes
    };

    if (!this.options.chunkFilename) {
      const {
        filename
      } = this.options;

      if (typeof filename !== 'function') {
        const hasName = filename.includes('[name]');
        const hasId = filename.includes('[id]');
        const hasChunkHash = filename.includes('[chunkhash]');
        const hasContentHash = filename.includes('[contenthash]'); // Anything changing depending on chunk is fine

        if (hasChunkHash || hasContentHash || hasName || hasId) {
          this.options.chunkFilename = filename;
        } else {
          // Otherwise prefix "[id]." in front of the basename to make it changing
          this.options.chunkFilename = filename.replace(/(^|\/)([^/]*(?:\?|$))/, '$1[id].$2');
        }
      } else {
        this.options.chunkFilename = '[id].css';
      }
    }
  }
  /** @param {import("webpack").Compiler} compiler */


  apply(compiler) {
    const webpack = compiler.webpack ? compiler.webpack : // eslint-disable-next-line global-require
    require('webpack');

    if (this.options.experimentalUseImportModule) {
      if (!compiler.options.experiments) {
        throw new Error('experimentalUseImportModule is only support for webpack >= 5.33.2');
      }

      if (typeof compiler.options.experiments.executeModule === 'undefined') {
        // eslint-disable-next-line no-param-reassign
        compiler.options.experiments.executeModule = true;
      }
    } // TODO bug in webpack, remove it after it will be fixed
    // webpack tries to `require` loader firstly when serializer doesn't found


    if (webpack.util && webpack.util.serialization && webpack.util.serialization.registerLoader && !registered.has(webpack)) {
      registered.add(webpack);
      webpack.util.serialization.registerLoader(/^mini-css-extract-plugin\//, _utils.trueFn);
    }

    const isWebpack4 = compiler.webpack ? false : typeof compiler.resolvers !== 'undefined';

    if (!isWebpack4) {
      const {
        splitChunks
      } = compiler.options.optimization;

      if (splitChunks) {
        if (splitChunks.defaultSizeTypes.includes('...')) {
          splitChunks.defaultSizeTypes.push(_utils.MODULE_TYPE);
        }
      }
    }

    const CssModule = MiniCssExtractPlugin.getCssModule(webpack);
    const CssDependency = MiniCssExtractPlugin.getCssDependency(webpack);
    const NormalModule = compiler.webpack && compiler.webpack.NormalModule ? compiler.webpack.NormalModule : // eslint-disable-next-line global-require
    require('webpack/lib/NormalModule');
    compiler.hooks.compilation.tap(pluginName, compilation => {
      const normalModuleHook = typeof NormalModule.getCompilationHooks !== 'undefined' ? NormalModule.getCompilationHooks(compilation).loader : compilation.hooks.normalModuleLoader;
      normalModuleHook.tap(pluginName, loaderContext => {
        // eslint-disable-next-line no-param-reassign
        loaderContext[pluginSymbol] = {
          experimentalUseImportModule: this.options.experimentalUseImportModule
        };
      });
    });
    compiler.hooks.thisCompilation.tap(pluginName, compilation => {
      class CssModuleFactory {
        // eslint-disable-next-line class-methods-use-this
        create({
          dependencies: [dependency]
        }, callback) {
          callback(null, new CssModule(dependency));
        }

      }

      compilation.dependencyFactories.set(CssDependency, new CssModuleFactory());

      class CssDependencyTemplate {
        // eslint-disable-next-line class-methods-use-this
        apply() {}

      }

      compilation.dependencyTemplates.set(CssDependency, new CssDependencyTemplate());

      if (isWebpack4) {
        compilation.mainTemplate.hooks.renderManifest.tap(pluginName, (result, {
          chunk
        }) => {
          const {
            chunkGraph
          } = compilation;
          const renderedModules = Array.from(this.getChunkModules(chunk, chunkGraph)).filter(module => module.type === _utils.MODULE_TYPE);
          const filenameTemplate = chunk.filenameTemplate || this.options.filename;

          if (renderedModules.length > 0) {
            result.push({
              render: () => this.renderContentAsset(compiler, compilation, chunk, renderedModules, compilation.runtimeTemplate.requestShortener),
              filenameTemplate,
              pathOptions: {
                chunk,
                contentHashType: _utils.MODULE_TYPE
              },
              identifier: `${pluginName}.${chunk.id}`,
              hash: chunk.contentHash[_utils.MODULE_TYPE]
            });
          }
        });
        compilation.chunkTemplate.hooks.renderManifest.tap(pluginName, (result, {
          chunk
        }) => {
          const {
            chunkGraph
          } = compilation;
          const renderedModules = Array.from(this.getChunkModules(chunk, chunkGraph)).filter(module => module.type === _utils.MODULE_TYPE);
          const filenameTemplate = chunk.filenameTemplate || this.options.chunkFilename;

          if (renderedModules.length > 0) {
            result.push({
              render: () => this.renderContentAsset(compiler, compilation, chunk, renderedModules, compilation.runtimeTemplate.requestShortener),
              filenameTemplate,
              pathOptions: {
                chunk,
                contentHashType: _utils.MODULE_TYPE
              },
              identifier: `${pluginName}.${chunk.id}`,
              hash: chunk.contentHash[_utils.MODULE_TYPE]
            });
          }
        });
      } else {
        compilation.hooks.renderManifest.tap(pluginName, (result, {
          chunk
        }) => {
          const {
            chunkGraph
          } = compilation;
          const {
            HotUpdateChunk
          } = webpack; // We don't need hot update chunks for css
          // We will use the real asset instead to update

          if (chunk instanceof HotUpdateChunk) {
            return;
          }

          const renderedModules = Array.from(this.getChunkModules(chunk, chunkGraph)).filter(module => module.type === _utils.MODULE_TYPE);
          const filenameTemplate = chunk.canBeInitial() ? this.options.filename : this.options.chunkFilename;

          if (renderedModules.length > 0) {
            result.push({
              render: () => this.renderContentAsset(compiler, compilation, chunk, renderedModules, compilation.runtimeTemplate.requestShortener),
              filenameTemplate,
              pathOptions: {
                chunk,
                contentHashType: _utils.MODULE_TYPE
              },
              identifier: `${pluginName}.${chunk.id}`,
              hash: chunk.contentHash[_utils.MODULE_TYPE]
            });
          }
        });
      }
      /*
       * For webpack 5 this will be unneeded once the logic uses a RuntimeModule
       * as the content of runtime modules is hashed and added to the chunk hash automatically
       * */


      if (isWebpack4) {
        compilation.mainTemplate.hooks.hashForChunk.tap(pluginName, (hash, chunk) => {
          const {
            chunkFilename
          } = this.options;

          if (REGEXP_CHUNKHASH.test(chunkFilename)) {
            hash.update(JSON.stringify(chunk.getChunkMaps(true).hash));
          }

          if (REGEXP_CONTENTHASH.test(chunkFilename)) {
            hash.update(JSON.stringify(chunk.getChunkMaps(true).contentHash[_utils.MODULE_TYPE] || {}));
          }

          if (REGEXP_NAME.test(chunkFilename)) {
            hash.update(JSON.stringify(chunk.getChunkMaps(true).name));
          }
        });
      }

      compilation.hooks.contentHash.tap(pluginName, chunk => {
        const {
          outputOptions,
          chunkGraph
        } = compilation;
        const modules = isWebpack4 ? Array.from(this.getChunkModules(chunk, chunkGraph)).filter(module => module.type === _utils.MODULE_TYPE) : this.sortModules(compilation, chunk, chunkGraph.getChunkModulesIterableBySourceType(chunk, _utils.MODULE_TYPE), compilation.runtimeTemplate.requestShortener);

        if (modules) {
          const {
            hashFunction,
            hashDigest,
            hashDigestLength
          } = outputOptions;
          const createHash = compiler.webpack ? compiler.webpack.util.createHash : webpack.util.createHash;
          const hash = createHash(hashFunction);

          if (isWebpack4) {
            for (const m of modules) {
              m.updateHash(hash);
            }
          } else {
            for (const m of modules) {
              hash.update(chunkGraph.getModuleHash(m, chunk.runtime));
            }
          } // eslint-disable-next-line no-param-reassign


          chunk.contentHash[_utils.MODULE_TYPE] = hash.digest(hashDigest).substring(0, hashDigestLength);
        }
      });
      const {
        Template
      } = webpack;
      const {
        mainTemplate
      } = compilation;

      if (isWebpack4) {
        mainTemplate.hooks.localVars.tap(pluginName, (source, chunk) => {
          const chunkMap = this.getCssChunkObject(chunk, compilation);

          if (Object.keys(chunkMap).length > 0) {
            return Template.asString([source, '', '// object to store loaded CSS chunks', 'var installedCssChunks = {', Template.indent(chunk.ids.map(id => `${JSON.stringify(id)}: 0`).join(',\n')), '};']);
          }

          return source;
        });
        mainTemplate.hooks.requireEnsure.tap(pluginName, (source, chunk, hash) => {
          const chunkMap = this.getCssChunkObject(chunk, compilation);

          if (Object.keys(chunkMap).length > 0) {
            const chunkMaps = chunk.getChunkMaps();
            const {
              crossOriginLoading
            } = mainTemplate.outputOptions;
            const linkHrefPath = mainTemplate.getAssetPath(JSON.stringify(this.options.chunkFilename), {
              hash: `" + ${mainTemplate.renderCurrentHashCode(hash)} + "`,
              hashWithLength: length => `" + ${mainTemplate.renderCurrentHashCode(hash, length)} + "`,
              chunk: {
                id: '" + chunkId + "',
                hash: `" + ${JSON.stringify(chunkMaps.hash)}[chunkId] + "`,

                hashWithLength(length) {
                  const shortChunkHashMap = Object.create(null);

                  for (const chunkId of Object.keys(chunkMaps.hash)) {
                    if (typeof chunkMaps.hash[chunkId] === 'string') {
                      shortChunkHashMap[chunkId] = chunkMaps.hash[chunkId].substring(0, length);
                    }
                  }

                  return `" + ${JSON.stringify(shortChunkHashMap)}[chunkId] + "`;
                },

                contentHash: {
                  [_utils.MODULE_TYPE]: `" + ${JSON.stringify(chunkMaps.contentHash[_utils.MODULE_TYPE])}[chunkId] + "`
                },
                contentHashWithLength: {
                  [_utils.MODULE_TYPE]: length => {
                    const shortContentHashMap = {};
                    const contentHash = chunkMaps.contentHash[_utils.MODULE_TYPE];

                    for (const chunkId of Object.keys(contentHash)) {
                      if (typeof contentHash[chunkId] === 'string') {
                        shortContentHashMap[chunkId] = contentHash[chunkId].substring(0, length);
                      }
                    }

                    return `" + ${JSON.stringify(shortContentHashMap)}[chunkId] + "`;
                  }
                },
                name: `" + (${JSON.stringify(chunkMaps.name)}[chunkId]||chunkId) + "`
              },
              contentHashType: _utils.MODULE_TYPE
            });
            return Template.asString([source, '', `// ${pluginName} CSS loading`, `var cssChunks = ${JSON.stringify(chunkMap)};`, 'if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);', 'else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {', Template.indent(['promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {', Template.indent([`var href = ${linkHrefPath};`, `var fullhref = ${mainTemplate.requireFn}.p + href;`, 'var existingLinkTags = document.getElementsByTagName("link");', 'for(var i = 0; i < existingLinkTags.length; i++) {', Template.indent(['var tag = existingLinkTags[i];', 'var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");', 'if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();']), '}', 'var existingStyleTags = document.getElementsByTagName("style");', 'for(var i = 0; i < existingStyleTags.length; i++) {', Template.indent(['var tag = existingStyleTags[i];', 'var dataHref = tag.getAttribute("data-href");', 'if(dataHref === href || dataHref === fullhref) return resolve();']), '}', 'var linkTag = document.createElement("link");', this.runtimeOptions.attributes ? Template.asString(Object.entries(this.runtimeOptions.attributes).map(entry => {
              const [key, value] = entry;
              return `linkTag.setAttribute(${JSON.stringify(key)}, ${JSON.stringify(value)});`;
            })) : '', 'linkTag.rel = "stylesheet";', this.runtimeOptions.linkType ? `linkTag.type = ${JSON.stringify(this.runtimeOptions.linkType)};` : '', 'var onLinkComplete = function (event) {', Template.indent(['// avoid mem leaks.', 'linkTag.onerror = linkTag.onload = null;', "if (event.type === 'load') {", Template.indent(['resolve();']), '} else {', Template.indent(["var errorType = event && (event.type === 'load' ? 'missing' : event.type);", 'var realHref = event && event.target && event.target.href || fullhref;', 'var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");', 'err.code = "CSS_CHUNK_LOAD_FAILED";', 'err.type = errorType;', 'err.request = realHref;', 'delete installedCssChunks[chunkId]', 'linkTag.parentNode.removeChild(linkTag)', 'reject(err);']), '}']), '};', 'linkTag.onerror = linkTag.onload = onLinkComplete;', 'linkTag.href = fullhref;', crossOriginLoading ? Template.asString([`if (linkTag.href.indexOf(window.location.origin + '/') !== 0) {`, Template.indent(`linkTag.crossOrigin = ${JSON.stringify(crossOriginLoading)};`), '}']) : '', typeof this.runtimeOptions.insert !== 'undefined' ? typeof this.runtimeOptions.insert === 'function' ? `(${this.runtimeOptions.insert.toString()})(linkTag)` : Template.asString([`var target = document.querySelector("${this.runtimeOptions.insert}");`, `target.parentNode.insertBefore(linkTag, target.nextSibling);`]) : Template.asString(['document.head.appendChild(linkTag);'])]), '}).then(function() {', Template.indent(['installedCssChunks[chunkId] = 0;']), '}));']), '}']);
          }

          return source;
        });
      } else {
        const {
          RuntimeGlobals,
          runtime
        } = webpack; // eslint-disable-next-line no-shadow

        const getCssChunkObject = (mainChunk, compilation) => {
          const obj = {};
          const {
            chunkGraph
          } = compilation;

          for (const chunk of mainChunk.getAllAsyncChunks()) {
            const modules = chunkGraph.getOrderedChunkModulesIterable(chunk, _utils.compareModulesByIdentifier);

            for (const module of modules) {
              if (module.type === _utils.MODULE_TYPE) {
                obj[chunk.id] = 1;
                break;
              }
            }
          }

          return obj;
        };

        const {
          RuntimeModule
        } = webpack;

        class CssLoadingRuntimeModule extends RuntimeModule {
          constructor(runtimeRequirements, runtimeOptions) {
            super('css loading', 10);
            this.runtimeRequirements = runtimeRequirements;
            this.runtimeOptions = runtimeOptions;
          }

          generate() {
            const {
              chunk,
              runtimeRequirements
            } = this;
            const {
              runtimeTemplate,
              outputOptions: {
                crossOriginLoading
              }
            } = this.compilation;
            const chunkMap = getCssChunkObject(chunk, this.compilation);
            const withLoading = runtimeRequirements.has(RuntimeGlobals.ensureChunkHandlers) && Object.keys(chunkMap).length > 0;
            const withHmr = runtimeRequirements.has(RuntimeGlobals.hmrDownloadUpdateHandlers);

            if (!withLoading && !withHmr) {
              return null;
            }

            return Template.asString([`var createStylesheet = ${runtimeTemplate.basicFunction('chunkId, fullhref, resolve, reject', ['var linkTag = document.createElement("link");', this.runtimeOptions.attributes ? Template.asString(Object.entries(this.runtimeOptions.attributes).map(entry => {
              const [key, value] = entry;
              return `linkTag.setAttribute(${JSON.stringify(key)}, ${JSON.stringify(value)});`;
            })) : '', 'linkTag.rel = "stylesheet";', this.runtimeOptions.linkType ? `linkTag.type = ${JSON.stringify(this.runtimeOptions.linkType)};` : '', `var onLinkComplete = ${runtimeTemplate.basicFunction('event', ['// avoid mem leaks.', 'linkTag.onerror = linkTag.onload = null;', "if (event.type === 'load') {", Template.indent(['resolve();']), '} else {', Template.indent(["var errorType = event && (event.type === 'load' ? 'missing' : event.type);", 'var realHref = event && event.target && event.target.href || fullhref;', 'var err = new Error("Loading CSS chunk " + chunkId + " failed.\\n(" + realHref + ")");', 'err.code = "CSS_CHUNK_LOAD_FAILED";', 'err.type = errorType;', 'err.request = realHref;', 'linkTag.parentNode.removeChild(linkTag)', 'reject(err);']), '}'])}`, 'linkTag.onerror = linkTag.onload = onLinkComplete;', 'linkTag.href = fullhref;', crossOriginLoading ? Template.asString([`if (linkTag.href.indexOf(window.location.origin + '/') !== 0) {`, Template.indent(`linkTag.crossOrigin = ${JSON.stringify(crossOriginLoading)};`), '}']) : '', typeof this.runtimeOptions.insert !== 'undefined' ? typeof this.runtimeOptions.insert === 'function' ? `(${this.runtimeOptions.insert.toString()})(linkTag)` : Template.asString([`var target = document.querySelector("${this.runtimeOptions.insert}");`, `target.parentNode.insertBefore(linkTag, target.nextSibling);`]) : Template.asString(['document.head.appendChild(linkTag);']), 'return linkTag;'])};`, `var findStylesheet = ${runtimeTemplate.basicFunction('href, fullhref', ['var existingLinkTags = document.getElementsByTagName("link");', 'for(var i = 0; i < existingLinkTags.length; i++) {', Template.indent(['var tag = existingLinkTags[i];', 'var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");', 'if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;']), '}', 'var existingStyleTags = document.getElementsByTagName("style");', 'for(var i = 0; i < existingStyleTags.length; i++) {', Template.indent(['var tag = existingStyleTags[i];', 'var dataHref = tag.getAttribute("data-href");', 'if(dataHref === href || dataHref === fullhref) return tag;']), '}'])};`, `var loadStylesheet = ${runtimeTemplate.basicFunction('chunkId', `return new Promise(${runtimeTemplate.basicFunction('resolve, reject', [`var href = ${RuntimeGlobals.require}.miniCssF(chunkId);`, `var fullhref = ${RuntimeGlobals.publicPath} + href;`, 'if(findStylesheet(href, fullhref)) return resolve();', 'createStylesheet(chunkId, fullhref, resolve, reject);'])});`)}`, withLoading ? Template.asString(['// object to store loaded CSS chunks', 'var installedCssChunks = {', Template.indent(chunk.ids.map(id => `${JSON.stringify(id)}: 0`).join(',\n')), '};', '', `${RuntimeGlobals.ensureChunkHandlers}.miniCss = ${runtimeTemplate.basicFunction('chunkId, promises', [`var cssChunks = ${JSON.stringify(chunkMap)};`, 'if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);', 'else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {', Template.indent([`promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(${runtimeTemplate.basicFunction('', 'installedCssChunks[chunkId] = 0;')}, ${runtimeTemplate.basicFunction('e', ['delete installedCssChunks[chunkId];', 'throw e;'])}));`]), '}'])};`]) : '// no chunk loading', '', withHmr ? Template.asString(['var oldTags = [];', 'var newTags = [];', `var applyHandler = ${runtimeTemplate.basicFunction('options', [`return { dispose: ${runtimeTemplate.basicFunction('', ['for(var i = 0; i < oldTags.length; i++) {', Template.indent(['var oldTag = oldTags[i];', 'if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);']), '}', 'oldTags.length = 0;'])}, apply: ${runtimeTemplate.basicFunction('', ['for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";', 'newTags.length = 0;'])} };`])}`, `${RuntimeGlobals.hmrDownloadUpdateHandlers}.miniCss = ${runtimeTemplate.basicFunction('chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList', ['applyHandlers.push(applyHandler);', `chunkIds.forEach(${runtimeTemplate.basicFunction('chunkId', [`var href = ${RuntimeGlobals.require}.miniCssF(chunkId);`, `var fullhref = ${RuntimeGlobals.publicPath} + href;`, 'var oldTag = findStylesheet(href, fullhref);', 'if(!oldTag) return;', `promises.push(new Promise(${runtimeTemplate.basicFunction('resolve, reject', [`var tag = createStylesheet(chunkId, fullhref, ${runtimeTemplate.basicFunction('', ['tag.as = "style";', 'tag.rel = "preload";', 'resolve();'])}, reject);`, 'oldTags.push(oldTag);', 'newTags.push(tag);'])}));`])});`])}`]) : '// no hmr']);
          }

        }

        const enabledChunks = new WeakSet();

        const handler = (chunk, set) => {
          if (enabledChunks.has(chunk)) {
            return;
          }

          enabledChunks.add(chunk);

          if (typeof this.options.chunkFilename === 'string' && /\[(full)?hash(:\d+)?\]/.test(this.options.chunkFilename)) {
            set.add(RuntimeGlobals.getFullHash);
          }

          set.add(RuntimeGlobals.publicPath);
          compilation.addRuntimeModule(chunk, new runtime.GetChunkFilenameRuntimeModule(_utils.MODULE_TYPE, 'mini-css', `${RuntimeGlobals.require}.miniCssF`, referencedChunk => {
            if (!referencedChunk.contentHash[_utils.MODULE_TYPE]) {
              return false;
            }

            return referencedChunk.canBeInitial() ? this.options.filename : this.options.chunkFilename;
          }, true));
          compilation.addRuntimeModule(chunk, new CssLoadingRuntimeModule(set, this.runtimeOptions));
        };

        compilation.hooks.runtimeRequirementInTree.for(RuntimeGlobals.ensureChunkHandlers).tap(pluginName, handler);
        compilation.hooks.runtimeRequirementInTree.for(RuntimeGlobals.hmrDownloadUpdateHandlers).tap(pluginName, handler);
      }
    });
  }

  getChunkModules(chunk, chunkGraph) {
    return typeof chunkGraph !== 'undefined' ? chunkGraph.getOrderedChunkModulesIterable(chunk, _utils.compareModulesByIdentifier) : chunk.modulesIterable;
  }

  getCssChunkObject(mainChunk, compilation) {
    const obj = {};
    const {
      chunkGraph
    } = compilation;

    for (const chunk of mainChunk.getAllAsyncChunks()) {
      for (const module of this.getChunkModules(chunk, chunkGraph)) {
        if (module.type === _utils.MODULE_TYPE) {
          obj[chunk.id] = 1;
          break;
        }
      }
    }

    return obj;
  }

  sortModules(compilation, chunk, modules, requestShortener) {
    let usedModules = this._sortedModulesCache.get(chunk);

    if (usedModules || !modules) {
      return usedModules;
    }

    const modulesList = [...modules];
    const [chunkGroup] = chunk.groupsIterable;
    const moduleIndexFunctionName = typeof compilation.chunkGraph !== 'undefined' ? 'getModulePostOrderIndex' : 'getModuleIndex2';

    if (typeof chunkGroup[moduleIndexFunctionName] === 'function') {
      // Store dependencies for modules
      const moduleDependencies = new Map(modulesList.map(m => [m, new Set()]));
      const moduleDependenciesReasons = new Map(modulesList.map(m => [m, new Map()])); // Get ordered list of modules per chunk group
      // This loop also gathers dependencies from the ordered lists
      // Lists are in reverse order to allow to use Array.pop()

      const modulesByChunkGroup = Array.from(chunk.groupsIterable, cg => {
        const sortedModules = modulesList.map(m => {
          return {
            module: m,
            index: cg[moduleIndexFunctionName](m)
          };
        }) // eslint-disable-next-line no-undefined
        .filter(item => item.index !== undefined).sort((a, b) => b.index - a.index).map(item => item.module);

        for (let i = 0; i < sortedModules.length; i++) {
          const set = moduleDependencies.get(sortedModules[i]);
          const reasons = moduleDependenciesReasons.get(sortedModules[i]);

          for (let j = i + 1; j < sortedModules.length; j++) {
            const module = sortedModules[j];
            set.add(module);
            const reason = reasons.get(module) || new Set();
            reason.add(cg);
            reasons.set(module, reason);
          }
        }

        return sortedModules;
      }); // set with already included modules in correct order

      usedModules = new Set();

      const unusedModulesFilter = m => !usedModules.has(m);

      while (usedModules.size < modulesList.length) {
        let success = false;
        let bestMatch;
        let bestMatchDeps; // get first module where dependencies are fulfilled

        for (const list of modulesByChunkGroup) {
          // skip and remove already added modules
          while (list.length > 0 && usedModules.has(list[list.length - 1])) {
            list.pop();
          } // skip empty lists


          if (list.length !== 0) {
            const module = list[list.length - 1];
            const deps = moduleDependencies.get(module); // determine dependencies that are not yet included

            const failedDeps = Array.from(deps).filter(unusedModulesFilter); // store best match for fallback behavior

            if (!bestMatchDeps || bestMatchDeps.length > failedDeps.length) {
              bestMatch = list;
              bestMatchDeps = failedDeps;
            }

            if (failedDeps.length === 0) {
              // use this module and remove it from list
              usedModules.add(list.pop());
              success = true;
              break;
            }
          }
        }

        if (!success) {
          // no module found => there is a conflict
          // use list with fewest failed deps
          // and emit a warning
          const fallbackModule = bestMatch.pop();

          if (!this.options.ignoreOrder) {
            const reasons = moduleDependenciesReasons.get(fallbackModule);
            compilation.warnings.push(new Error([`chunk ${chunk.name || chunk.id} [${pluginName}]`, 'Conflicting order. Following module has been added:', ` * ${fallbackModule.readableIdentifier(requestShortener)}`, 'despite it was not able to fulfill desired ordering with these modules:', ...bestMatchDeps.map(m => {
              const goodReasonsMap = moduleDependenciesReasons.get(m);
              const goodReasons = goodReasonsMap && goodReasonsMap.get(fallbackModule);
              const failedChunkGroups = Array.from(reasons.get(m), cg => cg.name).join(', ');
              const goodChunkGroups = goodReasons && Array.from(goodReasons, cg => cg.name).join(', ');
              return [` * ${m.readableIdentifier(requestShortener)}`, `   - couldn't fulfill desired order of chunk group(s) ${failedChunkGroups}`, goodChunkGroups && `   - while fulfilling desired order of chunk group(s) ${goodChunkGroups}`].filter(Boolean).join('\n');
            })].join('\n')));
          }

          usedModules.add(fallbackModule);
        }
      }
    } else {
      // fallback for older webpack versions
      // (to avoid a breaking change)
      // TODO remove this in next major version
      // and increase minimum webpack version to 4.12.0
      modulesList.sort((a, b) => a.index2 - b.index2);
      usedModules = modulesList;
    }

    this._sortedModulesCache.set(chunk, usedModules);

    return usedModules;
  }

  renderContentAsset(compiler, compilation, chunk, modules, requestShortener) {
    const usedModules = this.sortModules(compilation, chunk, modules, requestShortener); // TODO remove after drop webpack v4

    const {
      ConcatSource,
      SourceMapSource,
      RawSource
    } = compiler.webpack ? compiler.webpack.sources : // eslint-disable-next-line global-require
    require('webpack-sources');
    const source = new ConcatSource();
    const externalsSource = new ConcatSource();

    for (const m of usedModules) {
      let content = m.content.toString();

      if (/^@import url/.test(content)) {
        // HACK for IE
        // http://stackoverflow.com/a/14676665/1458162
        if (m.media) {
          // insert media into the @import
          // this is rar
          // TODO improve this and parse the CSS to support multiple medias
          content = content.replace(/;|\s*$/, m.media);
        }

        externalsSource.add(content);
        externalsSource.add('\n');
      } else {
        if (m.media) {
          source.add(`@media ${m.media} {\n`);
        }

        if (m.sourceMap) {
          source.add(new SourceMapSource(content, m.readableIdentifier(requestShortener), m.sourceMap.toString()));
        } else {
          source.add(new RawSource(content, m.readableIdentifier(requestShortener)));
        }

        source.add('\n');

        if (m.media) {
          source.add('}\n');
        }
      }
    }

    return new ConcatSource(externalsSource, source);
  }

}

MiniCssExtractPlugin.loader = require.resolve('./loader');
var _default = MiniCssExtractPlugin;
exports.default = _default;