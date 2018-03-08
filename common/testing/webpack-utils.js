const path = require('path');
const _ = require('lodash/fp');

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

  let chunkValue = assetsByChunkName[src];

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
  const publicPath = _.get(compilation, 'options.output.publicPath');
  return _.flow(
    // iterate over object key/value pairs
    _.toPairs,
    _.map(([ chunk, chunkValue ]) => [
      chunk,
      // Webpack outputs an array for each chunk when using sourcemaps
      Array.isArray(chunkValue) ? _.head(chunkValue) : chunkValue
    ]),
    publicPath ?
      _.map(([chunk, chunkValue]) => [
        chunk,
        publicPath + chunkValue
      ]) :
      _.identity,
    // turn pairs into object
    _.fromPairs
  )(assetsByChunkName);
};

module.exports.pathToAssetName = outputPath => {
  // Remove leading slashes for webpack-dev-server
  let outputFileName = outputPath.replace(/^(\/|\\)/, '');

  if (!(/\.js(on)?$/i).test(outputFileName)) {
    outputFileName = path.join(outputFileName, 'index.js');
  }

  return outputFileName;
};
