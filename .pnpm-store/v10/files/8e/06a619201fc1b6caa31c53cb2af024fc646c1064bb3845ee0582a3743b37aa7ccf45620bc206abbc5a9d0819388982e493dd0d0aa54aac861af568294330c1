"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.builtinPlugins = void 0;
var _webpack = _interopRequireDefault(require("webpack"));
const plugin = (name, optimize, deprecationReason) => (...args) => {
  if (deprecationReason) {
    // TODO add proper deprecation function to reporter
    console.warn(`[deprecated]: ${deprecationReason}`);
  }
  const WebpackPlugin = (optimize ? _webpack.default.optimize : _webpack.default)[name];
  return new WebpackPlugin(...args);
};
const builtinPlugins = {
  normalModuleReplacement: plugin(`NormalModuleReplacementPlugin`),
  contextReplacement: plugin(`ContextReplacementPlugin`),
  ignore: plugin(`IgnorePlugin`),
  watchIgnore: plugin(`WatchIgnorePlugin`),
  banner: plugin(`BannerPlugin`),
  prefetch: plugin(`PrefetchPlugin`),
  automaticPrefetch: plugin(`AutomaticPrefetchPlugin`),
  define: plugin(`DefinePlugin`),
  provide: plugin(`ProvidePlugin`),
  hotModuleReplacement: plugin(`HotModuleReplacementPlugin`),
  sourceMapDevTool: plugin(`SourceMapDevToolPlugin`),
  evalSourceMapDevTool: plugin(`EvalSourceMapDevToolPlugin`),
  evalDevToolModule: plugin(`EvalDevToolModulePlugin`),
  cache: plugin(`CachePlugin`),
  extendedAPI: plugin(`ExtendedAPIPlugin`),
  externals: plugin(`ExternalsPlugin`),
  jsonpTemplate: plugin(`JsonpTemplatePlugin`),
  libraryTemplate: plugin(`LibraryTemplatePlugin`, false, `plugins.libraryTemplate is deprecated and has been replaced by compilation.outputOptions.library or compilation.addEntry + passing a library option`),
  loaderTarget: plugin(`LoaderTargetPlugin`),
  memoryOutputFile: plugin(`MemoryOutputFileSystem`),
  progress: plugin(`ProgressPlugin`),
  setVarMainTemplate: plugin(`SetVarMainTemplatePlugin`),
  umdMainTemplate: plugin(`UmdMainTemplatePlugin`),
  noErrors: plugin(`NoErrorsPlugin`),
  noEmitOnErrors: plugin(`NoEmitOnErrorsPlugin`),
  newWatching: plugin(`NewWatchingPlugin`),
  environment: plugin(`EnvironmentPlugin`),
  dll: plugin(`DllPlugin`),
  dllReference: plugin(`DllReferencePlugin`),
  loaderOptions: plugin(`LoaderOptionsPlugin`),
  namedModules: plugin(`NamedModulesPlugin`),
  namedChunks: plugin(`NamedChunksPlugin`),
  hashedModuleIds: plugin(`HashedModuleIdsPlugin`),
  moduleFilenameH: plugin(`ModuleFilenameHelpers`),
  aggressiveMerging: plugin(`AggressiveMergingPlugin`, true),
  aggressiveSplitting: plugin(`AggressiveSplittingPlugin`, true, `plugins.aggressiveSplitting is deprecated in favor of plugins.splitChunks.`),
  splitChunks: plugin(`SplitChunks`, true),
  chunkModuleIdRange: plugin(`ChunkModuleIdRangePlugin`, true),
  dedupe: plugin(`DedupePlugin`, true),
  limitChunkCount: plugin(`LimitChunkCountPlugin`, true),
  minChunkSize: plugin(`MinChunkSizePlugin`, true),
  occurrenceOrder: plugin(`OccurrenceOrderPlugin`, true),
  moduleConcatenation: plugin(`ModuleConcatenationPlugin`, true)
};
exports.builtinPlugins = builtinPlugins;
//# sourceMappingURL=webpack-plugins.js.map