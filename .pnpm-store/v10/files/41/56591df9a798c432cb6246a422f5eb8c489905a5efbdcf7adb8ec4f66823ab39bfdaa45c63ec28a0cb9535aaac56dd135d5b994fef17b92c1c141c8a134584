/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import {Assertion} from '../assertion.js';
import {addLengthGuard} from './addLengthGuard.js';
import {flag} from './flag.js';
import {proxify} from './proxify.js';
import {transferFlags} from './transferFlags.js';

/**
 * Module variables
 */

// Check whether `Object.setPrototypeOf` is supported
let canSetPrototype = typeof Object.setPrototypeOf === 'function';

// Without `Object.setPrototypeOf` support, this module will need to add properties to a function.
// However, some of functions' own props are not configurable and should be skipped.
let testFn = function () {};
let excludeNames = Object.getOwnPropertyNames(testFn).filter(function (name) {
  let propDesc = Object.getOwnPropertyDescriptor(testFn, name);

  // Note: PhantomJS 1.x includes `callee` as one of `testFn`'s own properties,
  // but then returns `undefined` as the property descriptor for `callee`. As a
  // workaround, we perform an otherwise unnecessary type-check for `propDesc`,
  // and then filter it out if it's not an object as it should be.
  if (typeof propDesc !== 'object') return true;

  return !propDesc.configurable;
});

// Cache `Function` properties
let call = Function.prototype.call,
  apply = Function.prototype.apply;

/**
 * ### .addChainableMethod(ctx, name, method, chainingBehavior)
 *
 * Adds a method to an object, such that the method can also be chained.
 *
 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
 *         var obj = utils.flag(this, 'object');
 *         new chai.Assertion(obj).to.be.equal(str);
 *     });
 *
 * Can also be accessed directly from `chai.Assertion`.
 *
 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
 *
 * The result can then be used as both a method assertion, executing both `method` and
 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
 *
 *     expect(fooStr).to.be.foo('bar');
 *     expect(fooStr).to.be.foo.equal('foo');
 *
 * @param {object} ctx object to which the method is added
 * @param {string} name of method to add
 * @param {Function} method function to be used for `name`, when called
 * @param {Function} chainingBehavior function to be called every time the property is accessed
 * @namespace Utils
 * @name addChainableMethod
 * @public
 */
export function addChainableMethod(ctx, name, method, chainingBehavior) {
  if (typeof chainingBehavior !== 'function') {
    chainingBehavior = function () {};
  }

  let chainableBehavior = {
    method: method,
    chainingBehavior: chainingBehavior
  };

  // save the methods so we can overwrite them later, if we need to.
  if (!ctx.__methods) {
    ctx.__methods = {};
  }
  ctx.__methods[name] = chainableBehavior;

  Object.defineProperty(ctx, name, {
    get: function chainableMethodGetter() {
      chainableBehavior.chainingBehavior.call(this);

      let chainableMethodWrapper = function () {
        // Setting the `ssfi` flag to `chainableMethodWrapper` causes this
        // function to be the starting point for removing implementation
        // frames from the stack trace of a failed assertion.
        //
        // However, we only want to use this function as the starting point if
        // the `lockSsfi` flag isn't set.
        //
        // If the `lockSsfi` flag is set, then this assertion is being
        // invoked from inside of another assertion. In this case, the `ssfi`
        // flag has already been set by the outer assertion.
        //
        // Note that overwriting a chainable method merely replaces the saved
        // methods in `ctx.__methods` instead of completely replacing the
        // overwritten assertion. Therefore, an overwriting assertion won't
        // set the `ssfi` or `lockSsfi` flags.
        if (!flag(this, 'lockSsfi')) {
          flag(this, 'ssfi', chainableMethodWrapper);
        }

        let result = chainableBehavior.method.apply(this, arguments);
        if (result !== undefined) {
          return result;
        }

        let newAssertion = new Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };

      addLengthGuard(chainableMethodWrapper, name, true);

      // Use `Object.setPrototypeOf` if available
      if (canSetPrototype) {
        // Inherit all properties from the object by replacing the `Function` prototype
        let prototype = Object.create(this);
        // Restore the `call` and `apply` methods from `Function`
        prototype.call = call;
        prototype.apply = apply;
        Object.setPrototypeOf(chainableMethodWrapper, prototype);
      }
      // Otherwise, redefine all properties (slow!)
      else {
        let asserterNames = Object.getOwnPropertyNames(ctx);
        asserterNames.forEach(function (asserterName) {
          if (excludeNames.indexOf(asserterName) !== -1) {
            return;
          }

          let pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
          Object.defineProperty(chainableMethodWrapper, asserterName, pd);
        });
      }

      transferFlags(this, chainableMethodWrapper);
      return proxify(chainableMethodWrapper);
    },
    configurable: true
  });
}
