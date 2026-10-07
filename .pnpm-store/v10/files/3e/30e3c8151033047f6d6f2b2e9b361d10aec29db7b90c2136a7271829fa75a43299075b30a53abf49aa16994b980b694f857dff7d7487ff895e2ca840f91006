var arrayEvery = require('./_arrayEvery'),
    createOver = require('./_createOver');

/**
 * Creates a function that checks if **all** of the `predicates` return
 * truthy when invoked with the arguments it receives.
 *
 * Following shorthands are possible for providing predicates.
 * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
 * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {...(Function|Function[])} [predicates=[_.identity]]
 *  The predicates to check.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var func = _.overEvery([Boolean, isFinite]);
 *
 * func('1');
 * // => true
 *
 * func(null);
 * // => false
 *
 * func(NaN);
 * // => false
 */
var overEvery = createOver(arrayEvery);

module.exports = overEvery;
