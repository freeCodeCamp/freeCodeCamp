'use strict';
const BasePlugin = require('../plugin');
const { IE_5_5, IE_6, IE_7 } = require('../dictionary/browsers');
const { PROPERTY } = require('../dictionary/identifiers');
const { ATRULE, DECL } = require('../dictionary/postcss');

const hacks = '!_$_&_*_)_=_%_+_,_._/_`_]_#_~_?_:_|'.split('_');

module.exports = class LeadingStar extends BasePlugin {
  /** @param {import('postcss').Result=} result */
  constructor(result) {
    super([IE_5_5, IE_6, IE_7], [ATRULE, DECL], result);
  }

  /**
   * @param {import('postcss').Declaration | import('postcss').AtRule} node
   * @return {void}
   */
  detect(node) {
    if (node.type === DECL) {
      // some values are not picked up by before, so ensure they are
      // at the beginning of the value
      hacks.forEach((hack) => {
        if (!node.prop.indexOf(hack)) {
          this.push(node, {
            identifier: PROPERTY,
            hack: node.prop,
          });
        }
      });
      const { before } = node.raws;
      if (!before) {
        return;
      }
      hacks.forEach((hack) => {
        if (before.includes(hack)) {
          this.push(node, {
            identifier: PROPERTY,
            hack: `${before.trim()}${node.prop}`,
          });
        }
      });
    } else {
      // test for the @property: value; hack
      const { name } = node;
      const len = name.length - 1;
      if (name.lastIndexOf(':') === len) {
        this.push(node, {
          identifier: PROPERTY,
          hack: `@${name.substr(0, len)}`,
        });
      }
    }
  }
};
