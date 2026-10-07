'use strict';
const parser = require('postcss-selector-parser');
const exists = require('../exists');
const isMixin = require('../isMixin');
const BasePlugin = require('../plugin');
const { IE_5_5, IE_6 } = require('../dictionary/browsers');
const { SELECTOR } = require('../dictionary/identifiers');
const { RULE } = require('../dictionary/postcss');
const { HTML } = require('../dictionary/tags');

module.exports = class StarHtml extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_5_5, IE_6], [RULE], result);
  }

  /**
   * @param {import('postcss').Rule} rule
   * @return {void}
   */
  detect(rule) {
    if (isMixin(rule)) {
      return;
    }
    parser(this.analyse(rule)).processSync(rule.selector);
  }

  /**
   * @param {import('postcss').Rule} rule
   * @return {parser.SyncProcessor<void>}
   */
  analyse(rule) {
    return (selectors) => {
      selectors.each((selector) => {
        if (
          exists(selector, 0, '*') &&
          exists(selector, 1, ' ') &&
          exists(selector, 2, HTML) &&
          exists(selector, 3, ' ') &&
          selector.at(4)
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
