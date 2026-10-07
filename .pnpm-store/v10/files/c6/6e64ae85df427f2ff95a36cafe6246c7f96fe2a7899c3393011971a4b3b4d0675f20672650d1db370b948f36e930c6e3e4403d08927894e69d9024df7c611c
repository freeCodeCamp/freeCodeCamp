'use strict';

exports.name = 'removeXMLNS';

exports.type = 'perItem';

exports.active = false;

exports.description =
  'removes xmlns attribute (for inline svg, disabled by default)';

/**
 * Remove the xmlns attribute when present.
 *
 * @example
 * <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
 *   ↓
 * <svg viewBox="0 0 100 50">
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if true, xmlns will be filtered out
 *
 * @author Ricardo Tomasi
 */
exports.fn = function (item) {
  if (item.type === 'element' && item.name === 'svg') {
    delete item.attributes.xmlns;
    delete item.attributes['xmlns:xlink'];
  }
};
