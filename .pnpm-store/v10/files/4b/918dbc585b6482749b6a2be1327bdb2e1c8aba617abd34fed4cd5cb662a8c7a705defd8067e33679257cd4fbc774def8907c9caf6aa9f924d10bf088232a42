'use strict';
const path = require('path');
const valueParser = require('postcss-value-parser');
const normalize = require('normalize-url');

const multiline = /\\[\r\n]/;
// eslint-disable-next-line no-useless-escape
const escapeChars = /([\s\(\)"'])/g;

// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/;

/**
 * Originally in sindresorhus/is-absolute-url
 *
 * @param {string} url
 */
function isAbsolute(url) {
  if (WINDOWS_PATH_REGEX.test(url)) {
    return false;
  }
  return ABSOLUTE_URL_REGEX.test(url);
}

/**
 * @param {string} url
 * @param {normalize.Options} options
 * @return {string}
 */
function convert(url, options) {
  if (isAbsolute(url) || url.startsWith('//')) {
    let normalizedURL;

    try {
      normalizedURL = normalize(url, options);
    } catch (e) {
      normalizedURL = url;
    }

    return normalizedURL;
  }

  // `path.normalize` always returns backslashes on Windows, need replace in `/`
  return path.normalize(url).replace(new RegExp('\\' + path.sep, 'g'), '/');
}

/**
 * @param {import('postcss').AtRule} rule
 * @return {void}
 */
function transformNamespace(rule) {
  rule.params = valueParser(rule.params)
    .walk((node) => {
      if (
        node.type === 'function' &&
        node.value.toLowerCase() === 'url' &&
        node.nodes.length
      ) {
        /** @type {valueParser.Node} */ (node).type = 'string';
        /** @type {any} */ (node).quote =
          node.nodes[0].type === 'string' ? node.nodes[0].quote : '"';
        node.value = node.nodes[0].value;
      }
      if (node.type === 'string') {
        node.value = node.value.trim();
      }
      return false;
    })
    .toString();
}

/**
 * @param {import('postcss').Declaration} decl
 * @param {normalize.Options} opts
 * @return {void}
 */
function transformDecl(decl, opts) {
  decl.value = valueParser(decl.value)
    .walk((node) => {
      if (node.type !== 'function' || node.value.toLowerCase() !== 'url') {
        return false;
      }

      node.before = node.after = '';

      if (!node.nodes.length) {
        return false;
      }
      let url = node.nodes[0];
      let escaped;

      url.value = url.value.trim().replace(multiline, '');

      // Skip empty URLs
      // Empty URL function equals request to current stylesheet where it is declared
      if (url.value.length === 0) {
        /** @type {any} */ (url).quote = '';

        return false;
      }

      if (/^data:(.*)?,/i.test(url.value)) {
        return false;
      }

      if (!/^.+-extension:\//i.test(url.value)) {
        url.value = convert(url.value, opts);
      }

      if (escapeChars.test(url.value) && url.type === 'string') {
        escaped = url.value.replace(escapeChars, '\\$1');

        if (escaped.length < url.value.length + 2) {
          url.value = escaped;
          /** @type {valueParser.Node} */ (url).type = 'word';
        }
      } else {
        url.type = 'word';
      }

      return false;
    })
    .toString();
}

/** @typedef {normalize.Options} Options */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts) {
  opts = Object.assign(
    {},
    {
      normalizeProtocol: false,
      sortQueryParameters: false,
      stripHash: false,
      stripWWW: false,
      stripTextFragment: false,
    },
    opts
  );

  return {
    postcssPlugin: 'postcss-normalize-url',

    OnceExit(css) {
      css.walk((node) => {
        if (node.type === 'decl') {
          return transformDecl(node, opts);
        } else if (
          node.type === 'atrule' &&
          node.name.toLowerCase() === 'namespace'
        ) {
          return transformNamespace(node);
        }
      });
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
