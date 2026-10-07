'use strict';
const parser = require('postcss-selector-parser');
const exists = require('../exists');
const isMixin = require('../isMixin');
const BasePlugin = require('../plugin');
const { IE_5_5, IE_6, IE_7 } = require('../dictionary/browsers');
const { SELECTOR } = require('../dictionary/identifiers');
const { RULE } = require('../dictionary/postcss');
const { BODY, HTML } = require('../dictionary/tags');

module.exports = class HtmlCombinatorCommentBody extends BasePlugin {
  /** @param {import('postcss').Result} result */
  constructor(result) {
    super([IE_5_5, IE_6, IE_7], [RULE], result);
  }

  /**
   * @param {import('postcss').Rule} rule
   * @return {void}
   */
  detect(rule) {
    if (isMixin(rule)) {
      return;
    }
    if (rule.raws.selector && rule.raws.selector.raw) {
      parser(this.analyse(rule)).processSync(rule.raws.selector.raw);
    }
  }

  /** @param {import('postcss').Rule} rule
   *  @return {parser.SyncProcessor<void>}
   */
  analyse(rule) {
    return (selectors) => {
      selectors.each((selector) => {
        if (
          exists(selector, 0, HTML) &&
          (exists(selector, 1, '>') || exists(selector, 1, '~')) &&
          selector.at(2) &&
          selector.at(2).type === 'comment' &&
          exists(selector, 3, ' ') &&
          exists(selector, 4, BODY) &&
          exists(selector, 5, ' ') &&
          selector.at(6)
        ) {
          this.push(rule, {
            identifier: SELECTOR,
            hack: selector.toString(),
          });
        }
      });
    };
  }
};
