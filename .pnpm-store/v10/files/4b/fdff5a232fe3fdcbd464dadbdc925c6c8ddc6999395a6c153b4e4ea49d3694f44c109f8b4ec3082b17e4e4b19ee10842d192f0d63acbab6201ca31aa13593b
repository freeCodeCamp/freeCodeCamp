'use strict';
const parser = require('postcss-selector-parser');
const exists = require('../exists');
const isMixin = require('../isMixin');
const BasePlugin = require('../plugin');
const { OP_9 } = require('../dictionary/browsers');
const { SELECTOR } = require('../dictionary/identifiers');
const { RULE } = require('../dictionary/postcss');
const { HTML } = require('../dictionary/tags');

module.exports = class HtmlFirstChild extends BasePlugin {
  /** @param {import('postcss').Result} result */
  constructor(result) {
    super([OP_9], [RULE], result);
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
          exists(selector, 0, HTML) &&
          exists(selector, 1, ':first-child') &&
          exists(selector, 2, ' ') &&
          selector.at(3)
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
