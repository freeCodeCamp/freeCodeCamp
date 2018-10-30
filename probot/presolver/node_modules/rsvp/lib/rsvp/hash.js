import Promise from './promise';
import PromiseHash from './promise-hash';
import { isObject } from './utils';

/**
  `RSVP.hash` is similar to `RSVP.all`, but takes an object instead of an array
  for its `promises` argument.

  Returns a promise that is fulfilled when all the given promises have been
  fulfilled, or rejected if any of them become rejected. The returned promise
  is fulfilled with a hash that has the same key names as the `promises` object
  argument. If any of the values in the object are not promises, they will
  simply be copied over to the fulfilled object.

  Example:

  ```javascript
  let promises = {
    myPromise: RSVP.resolve(1),
    yourPromise: RSVP.resolve(2),
    theirPromise: RSVP.resolve(3),
    notAPromise: 4
  };

  RSVP.hash(promises).then(function(hash){
    // hash here is an object that looks like:
    // {
    //   myPromise: 1,
    //   yourPromise: 2,
    //   theirPromise: 3,
    //   notAPromise: 4
    // }
  });
  ````

  If any of the `promises` given to `RSVP.hash` are rejected, the first promise
  that is rejected will be given as the reason to the rejection handler.

  Example:

  ```javascript
  let promises = {
    myPromise: RSVP.resolve(1),
    rejectedPromise: RSVP.reject(new Error('rejectedPromise')),
    anotherRejectedPromise: RSVP.reject(new Error('anotherRejectedPromise')),
  };

  RSVP.hash(promises).then(function(hash){
    // Code here never runs because there are rejected promises!
  }, function(reason) {
    // reason.message === 'rejectedPromise'
  });
  ```

  An important note: `RSVP.hash` is intended for plain JavaScript objects that
  are just a set of keys and values. `RSVP.hash` will NOT preserve prototype
  chains.

  Example:

  ```javascript
  function MyConstructor(){
    this.example = RSVP.resolve('Example');
  }

  MyConstructor.prototype = {
    protoProperty: RSVP.resolve('Proto Property')
  };

  let myObject = new MyConstructor();

  RSVP.hash(myObject).then(function(hash){
    // protoProperty will not be present, instead you will just have an
    // object that looks like:
    // {
    //   example: 'Example'
    // }
    //
    // hash.hasOwnProperty('protoProperty'); // false
    // 'undefined' === typeof hash.protoProperty
  });
  ```

  @method hash
  @static
  @for RSVP
  @param {Object} object
  @param {String} label optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all properties of `promises`
  have been fulfilled, or rejected if any of them become rejected.
*/
export default function hash(object, label) {
  if (!isObject(object)) {
    return Promise.reject(new TypeError("Promise.hash must be called with an object"), label);
  }

  return new PromiseHash(Promise, object, label).promise;
}
