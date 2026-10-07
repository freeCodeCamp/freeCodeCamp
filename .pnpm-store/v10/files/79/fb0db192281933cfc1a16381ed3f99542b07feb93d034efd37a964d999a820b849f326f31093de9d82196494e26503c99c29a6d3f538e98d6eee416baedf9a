"use strict";

exports.__esModule = true;
exports.clearCache = clearCache;
exports.getScriptsAndStylesForTemplate = getScriptsAndStylesForTemplate;
exports.readWebpackStats = readWebpackStats;
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const {
  join
} = path.posix;
const inlineCssPromiseCache = new Map();
async function readWebpackStats(publicDir) {
  const filePath = join(publicDir, `webpack.stats.json`);
  const rawPageData = await fs.readFile(filePath, `utf-8`);
  return JSON.parse(rawPageData);
}
async function getScriptsAndStylesForTemplate(componentChunkName, webpackStats) {
  const uniqScripts = new Map();
  const uniqStyles = new Map();

  /**
   * Add script or style to correct bucket. Make sure those are unique (no duplicates) and that "preload" will win over any other "rel"
   */
  function handleAsset(name, rel, shouldGenerateLink = false) {
    let uniqueAssetsMap;

    // pick correct map depending on asset type
    if (name.endsWith(`.js`)) {
      uniqueAssetsMap = uniqScripts;
    } else if (name.endsWith(`.css`)) {
      uniqueAssetsMap = uniqStyles;
    }
    if (uniqueAssetsMap) {
      const existingAsset = uniqueAssetsMap.get(name);
      if (existingAsset && rel === `preload` && existingAsset.rel !== `preload`) {
        // if we already track this asset, but it's not preload - make sure we make it preload
        // as it has higher priority
        existingAsset.rel = `preload`;
      } else if (!existingAsset) {
        uniqueAssetsMap.set(name, {
          name,
          rel,
          shouldGenerateLink
        });
      }
    }
  }

  // Pick up scripts and styles that are used by a template using webpack.stats.json
  for (const chunkName of [`app`, componentChunkName]) {
    let assets = webpackStats.assetsByChunkName[chunkName];
    if (!assets) {
      continue;
    }

    // Remove JS asset for templates
    if (chunkName !== `app`) {
      assets = assets.filter(asset => !asset.endsWith(`.js`));
    }
    for (const asset of assets) {
      if (asset === `/`) {
        continue;
      }
      handleAsset(asset, `preload`);
    }

    // Handling for webpack magic comments, for example:
    // import(/* webpackChunkName: "<chunk_name>", webpackPrefetch: true */ `<path_to_module>`)
    // Shape of webpackStats.childAssetsByChunkName:
    // {
    //   childAssetsByChunkName: {
    //     <name_of_top_level_chunk>: {
    //       prefetch: [
    //         "<chunk_name>-<chunk_hash>.js",
    //       ]
    //     }
    //   }
    // }

    const childAssets = webpackStats.childAssetsByChunkName[chunkName];
    if (!childAssets) {
      continue;
    }
    for (let [rel, assets] of Object.entries(childAssets)) {
      // Remove JS asset for templates(magic comments)
      if (chunkName !== `app`) {
        // @ts-ignore TS doesn't like that assets is not typed and especially that it doesn't know that it's Iterable
        assets = assets.filter(asset => !asset.endsWith(`.js`));
      }

      // @ts-ignore TS doesn't like that assets is not typed and especially that it doesn't know that it's Iterable
      for (const asset of assets) {
        // Use shouldGenerateLink to determines if  we should append link for magic comment asset(preload|prefetch) to head
        const shouldGenerateLink = chunkName == `app` ? true : false;
        handleAsset(asset, rel, shouldGenerateLink);
      }
    }
  }

  // create scripts array, making sure "preload" scripts have priority
  const scripts = [];
  for (const scriptAsset of uniqScripts.values()) {
    if (scriptAsset.rel === `preload`) {
      // give priority to preload
      scripts.unshift(scriptAsset);
    } else {
      scripts.push(scriptAsset);
    }
  }

  // create styles array, making sure "preload" styles have priority and that we read .css content for non-prefetch "rel"s for inlining
  const styles = [];
  for (const styleAsset of uniqStyles.values()) {
    if (styleAsset.rel !== `prefetch`) {
      let getInlineCssPromise = inlineCssPromiseCache.get(styleAsset.name);
      if (!getInlineCssPromise) {
        getInlineCssPromise = fs.readFile(join(process.cwd(), `public`, styleAsset.name), `utf-8`);
        inlineCssPromiseCache.set(styleAsset.name, getInlineCssPromise);
      }
      styleAsset.content = await getInlineCssPromise;
    }
    if (styleAsset.rel === `preload`) {
      // give priority to preload
      styles.unshift(styleAsset);
    } else {
      styles.push(styleAsset);
    }
  }
  return {
    scripts,
    styles,
    reversedStyles: styles.slice(0).reverse(),
    reversedScripts: scripts.slice(0).reverse()
  };
}
function clearCache() {}
//# sourceMappingURL=client-assets-for-template.js.map