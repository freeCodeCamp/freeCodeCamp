"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssnanoMinify = cssnanoMinify;
exports.cssoMinify = cssoMinify;
exports.cleanCssMinify = cleanCssMinify;

/* istanbul ignore next */
async function cssnanoMinify(data, inputSourceMap, minimizerOptions = {
  preset: 'default'
}) {
  const [[name, input]] = Object.entries(data);
  const postcssOptions = {
    to: name,
    from: name,
    ...minimizerOptions.processorOptions
  };

  if (typeof postcssOptions.parser === 'string') {
    try {
      postcssOptions.parser = await load(postcssOptions.parser);
    } catch (error) {
      throw new Error(`Loading PostCSS "${postcssOptions.parser}" parser failed: ${error.message}\n\n(@${name})`);
    }
  }

  if (typeof postcssOptions.stringifier === 'string') {
    try {
      postcssOptions.stringifier = await load(postcssOptions.stringifier);
    } catch (error) {
      throw new Error(`Loading PostCSS "${postcssOptions.stringifier}" stringifier failed: ${error.message}\n\n(@${name})`);
    }
  }

  if (typeof postcssOptions.syntax === 'string') {
    try {
      postcssOptions.syntax = await load(postcssOptions.syntax);
    } catch (error) {
      throw new Error(`Loading PostCSS "${postcssOptions.syntax}" syntax failed: ${error.message}\n\n(@${name})`);
    }
  }

  if (inputSourceMap) {
    postcssOptions.map = {
      annotation: false,
      prev: inputSourceMap
    };
  } // eslint-disable-next-line global-require


  const postcss = require('postcss'); // eslint-disable-next-line global-require


  const cssnano = require('cssnano');

  const result = await postcss([cssnano(minimizerOptions)]).process(input, postcssOptions);
  return {
    code: result.css,
    map: result.map && result.map.toString(),
    warnings: result.warnings().map(String)
  };

  async function load(module) {
    let exports;

    try {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      exports = require(module);
      return exports;
    } catch (requireError) {
      let importESM;

      try {
        // eslint-disable-next-line no-new-func
        importESM = new Function('id', 'return import(id);');
      } catch (e) {
        importESM = null;
      }

      if (requireError.code === 'ERR_REQUIRE_ESM' && importESM) {
        exports = await importESM(module);
        return exports.default;
      }

      throw requireError;
    }
  }
}
/* istanbul ignore next */


async function cssoMinify(data, inputSourceMap, minimizerOptions) {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const csso = require('csso'); // eslint-disable-next-line global-require


  const sourcemap = require('source-map');

  const [[filename, input]] = Object.entries(data);
  const result = csso.minify(input, {
    filename,
    sourceMap: inputSourceMap,
    ...minimizerOptions
  });

  if (inputSourceMap) {
    result.map.applySourceMap(new sourcemap.SourceMapConsumer(inputSourceMap), filename);
  }

  return {
    code: result.css,
    map: result.map && result.map.toJSON()
  };
}
/* istanbul ignore next */


async function cleanCssMinify(data, inputSourceMap, minimizerOptions) {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const CleanCSS = require('clean-css');

  const [[name, input]] = Object.entries(data);
  const result = await new CleanCSS({
    sourceMap: inputSourceMap,
    ...minimizerOptions
  }).minify({
    [name]: {
      styles: input
    }
  });
  return {
    code: result.styles,
    map: result.sourceMap && result.sourceMap.toJSON(),
    warnings: result.warnings
  };
}