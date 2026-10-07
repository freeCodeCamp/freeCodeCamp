/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {Assertion} from '../assertion.js';
import {transferFlags} from './transferFlags.js';

/**
 * ### .overwriteChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Overwrites an already existing chainable method
 * and provides access to the previous function or
 * property.  Must return functions to be used for
 * name.
 *
 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'lengthOf',
 *         function (_super) {
 *         }
 *         , function (_super) {
 *         }
 *     );
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
 *
 * Then can be used as any other assertion.
 *
 *     expect(myFoo).to.have.lengthOf(3);
 *     expect(myFoo).to.have.lengthOf.above(3);
 *
 * @param {object} ctx object whose method / property is to be overwritten
 * @param {string} name of method / property to overwrite
 * @param {Function} method function that returns a function to be used for name
 * @param {Function} chainingBehavior function that returns a function to be used for property
 * @namespace Utils
 * @name overwriteChainableMethod
 * @public
 */
export function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
  let chainableBehavior = ctx.__methods[name];

  let _chainingBehavior = chainableBehavior.chainingBehavior;
  chainableBehavior.chainingBehavior =
    function overwritingChainableMethodGetter() {
      let result = chainingBehavior(_chainingBehavior).call(this);
      if (result !== undefined) {
        return result;
      }

      let newAssertion = new Assertion();
      transferFlags(this, newAssertion);
      return newAssertion;
    };

  let _method = chainableBehavior.method;
  chainableBehavior.method = function overwritingChainableMethodWrapper() {
    let result = method(_method).apply(this, arguments);
    if (result !== undefined) {
      return result;
    }

    let newAssertion = new Assertion();
    transferFlags(this, newAssertion);
    return newAssertion;
  };
}
