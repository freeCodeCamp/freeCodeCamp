var LazyWrapper = require('./_LazyWrapper'),
    copyArray = require('./_copyArray');

/**
 * Creates a clone of the lazy wrapper object.
 *
 * @private
 * @name clone
 * @memberOf LazyWrapper
 * @returns {Object} Returns the cloned `LazyWrapper` object.
 */
function lazyClone() {
  var result = new LazyWrapper(this.__wrapped__);
  result.__actions__ = copyArray(this.__actions__);
  result.__dir__ = this.__dir__;
  result.__filtered__ = this.__filtered__;
  result.__iteratees__ = copyArray(this.__iteratees__);
  result.__takeCount__ = this.__takeCount__;
  result.__views__ = copyArray(this.__views__);
  return result;
}

module.exports = lazyClone;
