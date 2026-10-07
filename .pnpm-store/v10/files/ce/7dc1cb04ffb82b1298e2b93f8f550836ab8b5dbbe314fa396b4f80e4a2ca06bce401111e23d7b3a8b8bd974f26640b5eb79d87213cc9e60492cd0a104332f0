'use strict';
const BasePlugin = require('../plugin.js');
const { IE_6, IE_7, IE_8 } = require('../dictionary/browsers');
const { VALUE } = require('../dictionary/identifiers');
const { DECL } = require('../dictionary/postcss');

module.exports = class Slash9 extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_6, IE_7, IE_8], [DECL], result);
  }

  /**
   * @param {import('postcss').Declaration} decl
   * @return {void}
   */
  detect(decl) {
    let v = decl.value;
    if (v && v.length > 2 && v.indexOf('\\9') === v.length - 2) {
      this.push(decl, {
        identifier: VALUE,
        hack: v,
      });
    }
  }
};
