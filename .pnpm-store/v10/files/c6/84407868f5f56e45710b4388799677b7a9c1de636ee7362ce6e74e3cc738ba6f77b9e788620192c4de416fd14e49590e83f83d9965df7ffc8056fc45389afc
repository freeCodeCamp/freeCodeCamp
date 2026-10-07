'use strict';
const valueParser = require('postcss-value-parser');
const { optimize } = require('svgo');
const { encode, decode } = require('./lib/url');

const PLUGIN = 'postcss-svgo';
const dataURI = /data:image\/svg\+xml(;((charset=)?utf-8|base64))?,/i;
const dataURIBase64 = /data:image\/svg\+xml;base64,/i;

// the following regex will globally match:
// \b([\w-]+)       --> a word (a sequence of one or more [alphanumeric|underscore|dash] characters; followed by
// \s*=\s*          --> an equal sign character (=) between optional whitespaces; followed by
// \\"([\S\s]+?)\\" --> any characters (including whitespaces and newlines) between literal escaped quotes (\")
const escapedQuotes = /\b([\w-]+)\s*=\s*\\"([\S\s]+?)\\"/g;

/**
 * @param {string} input the SVG string
 * @param {Options} opts
 * @return {{result: string, isUriEncoded: boolean}} the minification result
 */
function minifySVG(input, opts) {
  let svg = input;
  let decodedUri, isUriEncoded;
  try {
    decodedUri = decode(input);
    isUriEncoded = decodedUri !== input;
  } catch (e) {
    // Swallow exception if we cannot decode the value
    isUriEncoded = false;
  }

  if (isUriEncoded) {
    svg = /** @type {string} */ (decodedUri);
  }

  if (opts.encode !== undefined) {
    isUriEncoded = opts.encode;
  }

  // normalize all escaped quote characters from svg attributes
  // from <svg attr=\"value\"... /> to <svg attr="value"... />
  // see: https://github.com/cssnano/cssnano/issues/1194
  svg = svg.replace(escapedQuotes, '$1="$2"');

  const result = optimize(svg, opts);
  if (result.error) {
    throw new Error(result.error);
  }

  return {
    result: /** @type {import('svgo').OptimizedSvg}*/ (result).data,
    isUriEncoded,
  };
}

/**
 * @param {import('postcss').Declaration} decl
 * @param {Options} opts
 * @param {import('postcss').Result} postcssResult
 * @return {void}
 */
function minify(decl, opts, postcssResult) {
  const parsed = valueParser(decl.value);

  const minified = parsed.walk((node) => {
    if (
      node.type !== 'function' ||
      node.value.toLowerCase() !== 'url' ||
      !node.nodes.length
    ) {
      return;
    }
    let { value, quote } = /** @type {valueParser.StringNode} */ (
      node.nodes[0]
    );

    let optimizedValue;

    try {
      if (dataURIBase64.test(value)) {
        const url = new URL(value);
        const base64String = `${url.protocol}${url.pathname}`.replace(
          dataURI,
          ''
        );
        const svg = Buffer.from(base64String, 'base64').toString('utf8');
        const { result } = minifySVG(svg, opts);
        const data = Buffer.from(result).toString('base64');
        optimizedValue = 'data:image/svg+xml;base64,' + data + url.hash;
      } else if (dataURI.test(value)) {
        const svg = value.replace(dataURI, '');
        const { result, isUriEncoded } = minifySVG(svg, opts);
        let data = isUriEncoded ? encode(result) : result;
        // Should always encode # otherwise we yield a broken SVG
        // in Firefox (works in Chrome however). See this issue:
        // https://github.com/cssnano/cssnano/issues/245
        data = data.replace(/#/g, '%23');
        optimizedValue = 'data:image/svg+xml;charset=utf-8,' + data;
        quote = isUriEncoded ? '"' : "'";
      } else {
        return;
      }
    } catch (error) {
      decl.warn(postcssResult, `${error}`);
      return;
    }
    node.nodes[0] = Object.assign({}, node.nodes[0], {
      value: optimizedValue,
      quote: quote,
      type: 'string',
      before: '',
      after: '',
    });

    return false;
  });

  decl.value = minified.toString();
}
/** @typedef {{encode?: boolean, plugins?: object[]} & import('svgo').OptimizeOptions} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts = {}) {
  return {
    postcssPlugin: PLUGIN,

    OnceExit(css, { result }) {
      css.walkDecls((decl) => {
        if (!dataURI.test(decl.value)) {
          return;
        }

        minify(decl, opts, result);
      });
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
