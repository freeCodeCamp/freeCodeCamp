'use strict';

const csstree = require('css-tree');
const { referencesProps } = require('./_collections.js');

/**
 * @typedef {import('../lib/types').XastElement} XastElement
 * @typedef {import('../lib/types').PluginInfo} PluginInfo
 */

exports.type = 'visitor';
exports.name = 'prefixIds';
exports.active = false;
exports.description = 'prefix IDs';

/**
 * extract basename from path
 * @type {(path: string) => string}
 */
const getBasename = (path) => {
  // extract everything after latest slash or backslash
  const matched = path.match(/[/\\]?([^/\\]+)$/);
  if (matched) {
    return matched[1];
  }
  return '';
};

/**
 * escapes a string for being used as ID
 * @type {(string: string) => string}
 */
const escapeIdentifierName = (str) => {
  return str.replace(/[. ]/g, '_');
};

/**
 * @type {(string: string) => string}
 */
const unquote = (string) => {
  if (
    (string.startsWith('"') && string.endsWith('"')) ||
    (string.startsWith("'") && string.endsWith("'"))
  ) {
    return string.slice(1, -1);
  }
  return string;
};

/**
 * prefix an ID
 * @type {(prefix: string, name: string) => string}
 */
const prefixId = (prefix, value) => {
  if (value.startsWith(prefix)) {
    return value;
  }
  return prefix + value;
};

/**
 * prefix an #ID
 * @type {(prefix: string, name: string) => string | null}
 */
const prefixReference = (prefix, value) => {
  if (value.startsWith('#')) {
    return '#' + prefixId(prefix, value.slice(1));
  }
  return null;
};

/**
 * Prefixes identifiers
 *
 * @author strarsis <strarsis@gmail.com>
 *
 * @type {import('../lib/types').Plugin<{
 *   prefix?: boolean | string | ((node: XastElement, info: PluginInfo) => string),
 *   delim?: string,
 *   prefixIds?: boolean,
 *   prefixClassNames?: boolean,
 * }>}
 */
exports.fn = (_root, params, info) => {
  const { delim = '__', prefixIds = true, prefixClassNames = true } = params;

  return {
    element: {
      enter: (node) => {
        /**
         * prefix, from file name or option
         * @type {string}
         */
        let prefix = 'prefix' + delim;
        if (typeof params.prefix === 'function') {
          prefix = params.prefix(node, info) + delim;
        } else if (typeof params.prefix === 'string') {
          prefix = params.prefix + delim;
        } else if (params.prefix === false) {
          prefix = '';
        } else if (info.path != null && info.path.length > 0) {
          prefix = escapeIdentifierName(getBasename(info.path)) + delim;
        }

        // prefix id/class selectors and url() references in styles
        if (node.name === 'style') {
          // skip empty <style/> elements
          if (node.children.length === 0) {
            return;
          }

          // parse styles
          let cssText = '';
          if (
            node.children[0].type === 'text' ||
            node.children[0].type === 'cdata'
          ) {
            cssText = node.children[0].value;
          }
          /**
           * @type {null | csstree.CssNode}
           */
          let cssAst = null;
          try {
            cssAst = csstree.parse(cssText, {
              parseValue: true,
              parseCustomProperty: false,
            });
          } catch {
            return;
          }

          csstree.walk(cssAst, (node) => {
            // #ID, .class selectors
            if (
              (prefixIds && node.type === 'IdSelector') ||
              (prefixClassNames && node.type === 'ClassSelector')
            ) {
              node.name = prefixId(prefix, node.name);
              return;
            }
            // url(...) references
            if (
              node.type === 'Url' &&
              node.value.value &&
              node.value.value.length > 0
            ) {
              const prefixed = prefixReference(
                prefix,
                unquote(node.value.value)
              );
              if (prefixed != null) {
                node.value.value = prefixed;
              }
            }
          });

          // update styles
          if (
            node.children[0].type === 'text' ||
            node.children[0].type === 'cdata'
          ) {
            node.children[0].value = csstree.generate(cssAst);
          }
          return;
        }

        // prefix an ID attribute value
        if (
          prefixIds &&
          node.attributes.id != null &&
          node.attributes.id.length !== 0
        ) {
          node.attributes.id = prefixId(prefix, node.attributes.id);
        }

        // prefix a class attribute value
        if (
          prefixClassNames &&
          node.attributes.class != null &&
          node.attributes.class.length !== 0
        ) {
          node.attributes.class = node.attributes.class
            .split(/\s+/)
            .map((name) => prefixId(prefix, name))
            .join(' ');
        }

        // prefix a href attribute value
        // xlink:href is deprecated, must be still supported
        for (const name of ['href', 'xlink:href']) {
          if (
            node.attributes[name] != null &&
            node.attributes[name].length !== 0
          ) {
            const prefixed = prefixReference(prefix, node.attributes[name]);
            if (prefixed != null) {
              node.attributes[name] = prefixed;
            }
          }
        }

        // prefix an URL attribute value
        for (const name of referencesProps) {
          if (
            node.attributes[name] != null &&
            node.attributes[name].length !== 0
          ) {
            node.attributes[name] = node.attributes[name].replace(
              /url\((.*?)\)/gi,
              (match, url) => {
                const prefixed = prefixReference(prefix, url);
                if (prefixed == null) {
                  return match;
                }
                return `url(${prefixed})`;
              }
            );
          }
        }

        // prefix begin/end attribute value
        for (const name of ['begin', 'end']) {
          if (
            node.attributes[name] != null &&
            node.attributes[name].length !== 0
          ) {
            const parts = node.attributes[name].split(/\s*;\s+/).map((val) => {
              if (val.endsWith('.end') || val.endsWith('.start')) {
                const [id, postfix] = val.split('.');
                return `${prefixId(prefix, id)}.${postfix}`;
              }
              return val;
            });
            node.attributes[name] = parts.join('; ');
          }
        }
      },
    },
  };
};
