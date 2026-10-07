const { SourceMapGenerator } = require('source-map');

/**
 * Generates an identity source map from a source file.
 * @param {string} source The content of the source file.
 * @param {string} resourcePath The name of the source file.
 * @returns {import('source-map').RawSourceMap} The identity source map.
 */
function getIdentitySourceMap(source, resourcePath) {
  const sourceMap = new SourceMapGenerator();
  sourceMap.setSourceContent(resourcePath, source);

  source.split('\n').forEach((line, index) => {
    sourceMap.addMapping({
      source: resourcePath,
      original: {
        line: index + 1,
        column: 0,
      },
      generated: {
        line: index + 1,
        column: 0,
      },
    });
  });

  return sourceMap.toJSON();
}

module.exports = getIdentitySourceMap;
