const path = require('path');
const fp = require('lodash/fp');

module.exports.findAsset = (
  src,
  compilation,
  { assetsByChunkName = {} } = {}
) => {
  if (!src) {
    const chunkNames = Object.keys(assetsByChunkName);

    src = chunkNames[0];
  }

  const asset = compilation.assets[src];

  if (asset) {
    return asset;
  }

  const chunkValue = assetsByChunkName[src];

  if (!chunkValue) {
    return null;
  }
  // Webpack outputs an array for each chunk when using sourcemaps
  if (Array.isArray(chunkValue)) {
    chunkValue = chunkValue[0];
  }
  return compilation.assets[chunkValue];
};

// Shamelessly stolen from html-webpack-plugin - Thanks @ampedandwired :)
module.exports.getAssetsFromCompilation = (
  compilation,
  { assetsByChunkName = {} } = {}
) => {
  const publicPath = fp.get(compilation, 'options.output.publicPath');
  return fp.compose(
    // iterate over object key/value pairs
    fp.toPairs,
    fp.map(([ chunk, chunkValue ]) => [
      chunk,
      // Webpack outputs an array for each chunk when using sourcemaps
      Array.isArray(chunkValue) ? fp.head(chunkValue) : chunkValue
    ]),
    publicPath ?
      fp.map(([chunk, chunkValue]) => [ chunk, publicPath + chunkValue ]) :
      fp.identity,
    // turn pairs into object
    fp.fromPairs
  )(assetsByChunkName);
};

module.exports.pathToAssetName = outputPath => {
  // Remove leading slashes for webpack-dev-server
  const outputFileName = outputPath.replace(/^(\/|\\)/, '');

  if (!(/\.(js)$/i).test(outputFileName)) {
    outputFileName = path.join(outputFileName, 'index.js');
  }

  return outputFileName;
};
