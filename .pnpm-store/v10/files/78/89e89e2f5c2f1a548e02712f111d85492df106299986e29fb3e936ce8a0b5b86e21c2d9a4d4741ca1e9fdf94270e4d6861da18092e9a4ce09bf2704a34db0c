'use strict';

exports.name = 'removeNonInheritableGroupAttrs';

exports.type = 'perItem';

exports.active = true;

exports.description =
  'removes non-inheritable group’s presentational attributes';

const {
  inheritableAttrs,
  attrsGroups,
  presentationNonInheritableGroupAttrs,
} = require('./_collections');

/**
 * Remove non-inheritable group's "presentation" attributes.
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Kir Belevich
 */
exports.fn = function (item) {
  if (item.type === 'element' && item.name === 'g') {
    for (const name of Object.keys(item.attributes)) {
      if (
        attrsGroups.presentation.includes(name) === true &&
        inheritableAttrs.includes(name) === false &&
        presentationNonInheritableGroupAttrs.includes(name) === false
      ) {
        delete item.attributes[name];
      }
    }
  }
};
