import apply from './_apply.js';
import arrayMap from './_arrayMap.js';
import baseIteratee from './_baseIteratee.js';
import baseRest from './_baseRest.js';
import baseUnary from './_baseUnary.js';
import flatRest from './_flatRest.js';

/**
 * Creates a function like `_.over`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over iteratees.
 * @returns {Function} Returns the new over function.
 */
function createOver(arrayFunc) {
  return flatRest(function(iteratees) {
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    return baseRest(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee) {
        return apply(iteratee, thisArg, args);
      });
    });
  });
}

export default createOver;
