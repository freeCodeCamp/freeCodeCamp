import ListCache from './_ListCache.js';
import stackClear from './_stackClear.js';
import stackDelete from './_stackDelete.js';
import stackGet from './_stackGet.js';
import stackHas from './_stackHas.js';
import stackSet from './_stackSet.js';

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

export default Stack;
