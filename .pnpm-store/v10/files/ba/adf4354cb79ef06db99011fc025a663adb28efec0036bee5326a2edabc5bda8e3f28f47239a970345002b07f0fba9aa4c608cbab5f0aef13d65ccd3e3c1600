'use strict';
const BasePlugin = require('../plugin');
const { IE_5_5, IE_6, IE_7 } = require('../dictionary/browsers');
const { DECL } = require('../dictionary/postcss');

module.exports = class Important extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_5_5, IE_6, IE_7], [DECL], result);
  }
  /**
   * @param {import('postcss').Declaration} decl
   * @return {void}
   */
  detect(decl) {
    const match = decl.value.match(/!\w/);
    if (match && match.index) {
      const hack = decl.value.substr(match.index, decl.value.length - 1);
      this.push(decl, {
        identifier: '!important',
        hack,
      });
    }
  }
};
