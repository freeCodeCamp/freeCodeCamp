'use strict';
const BasePlugin = require('../plugin');
const { IE_5_5, IE_6, IE_7 } = require('../dictionary/browsers');
const { MEDIA_QUERY } = require('../dictionary/identifiers');
const { ATRULE } = require('../dictionary/postcss');

module.exports = class MediaSlash9 extends BasePlugin {
  /** @param {import('postcss').Result} result */
  constructor(result) {
    super([IE_5_5, IE_6, IE_7], [ATRULE], result);
  }

  /**
   * @param {import('postcss').AtRule} rule
   * @return {void}
   */
  detect(rule) {
    const params = rule.params.trim();

    if (params.toLowerCase() === 'screen\\9') {
      this.push(rule, {
        identifier: MEDIA_QUERY,
        hack: params,
      });
    }
  }
};
