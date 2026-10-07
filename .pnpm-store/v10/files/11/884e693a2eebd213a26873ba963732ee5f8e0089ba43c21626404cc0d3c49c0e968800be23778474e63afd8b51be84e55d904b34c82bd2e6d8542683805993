'use strict';
const CommentRemover = require('./lib/commentRemover');
const commentParser = require('./lib/commentParser');

/** @typedef {object} Options
 *  @property {boolean=} removeAll
 *  @property {boolean=} removeAllButFirst
 *  @property {(s: string) => boolean=} remove
 */
/**
 * @type {import('postcss').PluginCreator<Options>}
 * @param {Options} opts
 * @return {import('postcss').Plugin}
 */
function pluginCreator(opts = {}) {
  const remover = new CommentRemover(opts);
  const matcherCache = new Map();
  const replacerCache = new Map();

  /**
   * @param {string} source
   * @return {[number, number, number][]}
   */
  function matchesComments(source) {
    if (matcherCache.has(source)) {
      return matcherCache.get(source);
    }

    const result = commentParser(source).filter(([type]) => type);

    matcherCache.set(source, result);

    return result;
  }

  /**
   * @param {string} source
   * @param {(s: string) => string[]} space
   * @return {string}
   */
  function replaceComments(source, space, separator = ' ') {
    const key = source + '@|@' + separator;

    if (replacerCache.has(key)) {
      return replacerCache.get(key);
    }
    const parsed = commentParser(source).reduce((value, [type, start, end]) => {
      const contents = source.slice(start, end);

      if (!type) {
        return value + contents;
      }

      if (remover.canRemove(contents)) {
        return value + separator;
      }

      return `${value}/*${contents}*/`;
    }, '');

    const result = space(parsed).join(' ');

    replacerCache.set(key, result);

    return result;
  }

  return {
    postcssPlugin: 'postcss-discard-comments',

    OnceExit(css, { list }) {
      css.walk((node) => {
        if (node.type === 'comment' && remover.canRemove(node.text)) {
          node.remove();

          return;
        }

        if (typeof node.raws.between === 'string') {
          node.raws.between = replaceComments(node.raws.between, list.space);
        }

        if (node.type === 'decl') {
          if (node.raws.value && node.raws.value.raw) {
            if (node.raws.value.value === node.value) {
              node.value = replaceComments(node.raws.value.raw, list.space);
            } else {
              node.value = replaceComments(node.value, list.space);
            }

            /** @type {null | {value: string, raw: string}} */ (
              node.raws.value
            ) = null;
          }

          if (node.raws.important) {
            node.raws.important = replaceComments(
              node.raws.important,
              list.space
            );

            const b = matchesComments(node.raws.important);

            node.raws.important = b.length ? node.raws.important : '!important';
          } else {
            node.value = replaceComments(node.value, list.space);
          }

          return;
        }

        if (
          node.type === 'rule' &&
          node.raws.selector &&
          node.raws.selector.raw
        ) {
          node.raws.selector.raw = replaceComments(
            node.raws.selector.raw,
            list.space,
            ''
          );

          return;
        }

        if (node.type === 'atrule') {
          if (node.raws.afterName) {
            const commentsReplaced = replaceComments(
              node.raws.afterName,
              list.space
            );

            if (!commentsReplaced.length) {
              node.raws.afterName = commentsReplaced + ' ';
            } else {
              node.raws.afterName = ' ' + commentsReplaced + ' ';
            }
          }

          if (node.raws.params && node.raws.params.raw) {
            node.raws.params.raw = replaceComments(
              node.raws.params.raw,
              list.space
            );
          }
        }
      });
    },
  };
}

pluginCreator.postcss = true;
module.exports = pluginCreator;
