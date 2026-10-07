"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.GatsbyWebpackStatsExtractor = void 0;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _partialHydration = require("./webpack/plugins/partial-hydration");
var _redux = require("../redux");
var _ensureFileContent = require("./ensure-file-content");
var _manager = require("./adapter/manager");
let previousChunkMapJson;
let previousWebpackStatsJson;
class GatsbyWebpackStatsExtractor {
  constructor(publicPath) {
    this.plugin = {
      name: `GatsbyWebpackStatsExtractor`
    };
    this.publicPath = publicPath;
  }
  apply(compiler) {
    compiler.hooks.done.tapAsync(this.plugin.name, async (stats, done) => {
      const assets = {};
      const assetsMap = {};
      const childAssets = {};
      for (const chunkGroup of stats.compilation.chunkGroups) {
        if (chunkGroup.name) {
          const files = [];
          for (const chunk of chunkGroup.chunks) {
            if (chunk.chunkReason !== _partialHydration.PARTIAL_HYDRATION_CHUNK_REASON) {
              files.push(...chunk.files);
            }
          }
          assets[chunkGroup.name] = files.filter(f => f.slice(-4) !== `.map`);
          assetsMap[chunkGroup.name] = files.filter(f => {
            var _chunkGroup$name;
            return f.slice(-4) !== `.map` && f.slice(0, (_chunkGroup$name = chunkGroup.name) === null || _chunkGroup$name === void 0 ? void 0 : _chunkGroup$name.length) === chunkGroup.name;
          }).map(filename => `/${filename}`);
          for (const [rel, childChunkGroups] of Object.entries(chunkGroup.getChildrenByOrders(stats.compilation.moduleGraph, stats.compilation.chunkGraph))) {
            if (!(chunkGroup.name in childAssets)) {
              childAssets[chunkGroup.name] = {};
            }
            const childFiles = [];
            for (const childChunkGroup of childChunkGroups) {
              for (const chunk of childChunkGroup.chunks) {
                childFiles.push(...chunk.files);
              }
            }
            childAssets[chunkGroup.name][rel] = childFiles;
          }
        }
      }
      const {
        namedChunkGroups = {},
        name = ``,
        ...assetsRelatedStats
      } = stats.toJson({
        all: false,
        chunkGroups: true,
        cachedAssets: true,
        assets: true
      });
      const webpackStats = {
        name,
        namedChunkGroups,
        assetsByChunkName: assets,
        childAssetsByChunkName: childAssets
      };
      if (assetsRelatedStats.assets) {
        const assets = new Set();
        for (const asset of assetsRelatedStats.assets) {
          assets.add(asset.name);
          if (asset.info.related) {
            for (const relatedAssets of Object.values(asset.info.related)) {
              if (Array.isArray(relatedAssets)) {
                for (const relatedAsset of relatedAssets) {
                  assets.add(relatedAsset);
                }
              } else {
                assets.add(relatedAssets);
              }
            }
          }
        }
        (0, _manager.setWebpackAssets)(assets);
      }
      const newChunkMapJson = JSON.stringify(assetsMap);
      if (newChunkMapJson !== previousChunkMapJson) {
        await _fsExtra.default.writeFile(_path.default.join(`public`, `chunk-map.json`), newChunkMapJson);
        if ("5" === `5` && process.env.GATSBY_SLICES) {
          // Add chunk mapping metadata to scripts slice
          const scriptChunkMapping = `window.___chunkMapping=${JSON.stringify(newChunkMapJson)};`;
          const chunkSliceContents = `
          <script
            id="gatsby-chunk-mapping"
          >
            ${scriptChunkMapping}
          </script>
        `;
          await _fsExtra.default.ensureDir(_path.default.join(`public`, `_gatsby`, `slices`));
          const hashSliceContents = `<script>window.___webpackCompilationHash="${stats.hash}";</script>`;
          const assetSliceContents = [];
          if (`polyfill` in assets && assets.polyfill) {
            for (const asset of assets.polyfill) {
              if (asset.endsWith(`.js`)) {
                assetSliceContents.push(`<script src="${this.publicPath}/${asset}" nomodule></script>`);
              }
            }
          }
          if (`app` in assets && assets.app) {
            for (const asset of assets.app) {
              if (asset.endsWith(`.js`)) {
                assetSliceContents.push(`<script src="${this.publicPath}/${asset}" async></script>`);
              }
            }
          }
          const scriptsSliceHtmlChanged = await (0, _ensureFileContent.ensureFileContent)(_path.default.join(`public`, `_gatsby`, `slices`, `_gatsby-scripts-1.html`), chunkSliceContents + hashSliceContents + assetSliceContents.join(``));
          if (scriptsSliceHtmlChanged) {
            _redux.store.dispatch({
              type: `SLICES_SCRIPTS_REGENERATED`
            });
          }
        }
        previousChunkMapJson = newChunkMapJson;
      }
      const newWebpackStatsJson = JSON.stringify(webpackStats);
      if (newWebpackStatsJson !== previousWebpackStatsJson) {
        await _fsExtra.default.writeFile(_path.default.join(`public`, `webpack.stats.json`), newWebpackStatsJson);
        previousWebpackStatsJson = newWebpackStatsJson;
      }
      done();
    });
  }
}
exports.GatsbyWebpackStatsExtractor = GatsbyWebpackStatsExtractor;
//# sourceMappingURL=gatsby-webpack-stats-extractor.js.map