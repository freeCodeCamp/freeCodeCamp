'use strict';

exports.name = 'removeDimensions';

exports.type = 'perItem';

exports.active = false;

exports.description =
  'removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)';

/**
 * Remove width/height attributes and add the viewBox attribute if it's missing
 *
 * @example
 * <svg width="100" height="50" />
 *   ↓
 * <svg viewBox="0 0 100 50" />
 *
 * @param {Object} item current iteration item
 * @return {Boolean} if true, with and height will be filtered out
 *
 * @author Benny Schudel
 */
exports.fn = function (item) {
  if (item.type === 'element' && item.name === 'svg') {
    if (item.attributes.viewBox != null) {
      delete item.attributes.width;
      delete item.attributes.height;
    } else if (
      item.attributes.width != null &&
      item.attributes.height != null &&
      Number.isNaN(Number(item.attributes.width)) === false &&
      Number.isNaN(Number(item.attributes.height)) === false
    ) {
      const width = Number(item.attributes.width);
      const height = Number(item.attributes.height);
      item.attributes.viewBox = `0 0 ${width} ${height}`;
      delete item.attributes.width;
      delete item.attributes.height;
    }
  }
};
