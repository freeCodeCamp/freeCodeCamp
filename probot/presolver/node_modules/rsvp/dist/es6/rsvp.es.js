/*!
 * @overview RSVP - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2016 Yehuda Katz, Tom Dale, Stefan Penner and contributors
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/tildeio/rsvp.js/master/LICENSE
 * @version   3.6.2
 */

function indexOf(callbacks, callback) {
  for (let i=0, l=callbacks.length; i<l; i++) {
    if (callbacks[i] === callback) { return i; }
  }

  return -1;
}

function callbacksFor(object) {
  let callbacks = object._promiseCallbacks;

  if (!callbacks) {
    callbacks = object._promiseCallbacks = {};
  }

  return callbacks;
}

/**
  @class RSVP.EventTarget
*/
var EventTarget = {

  /**
    `RSVP.EventTarget.mixin` extends an object with EventTarget methods. For
    Example:

    ```javascript
    let object = {};

    RSVP.EventTarget.mixin(object);

    object.on('finished', function(event) {
      // handle event
    });

    object.trigger('finished', { detail: value });
    ```

    `EventTarget.mixin` also works with prototypes:

    ```javascript
    let Person = function() {};
    RSVP.EventTarget.mixin(Person.prototype);

    let yehuda = new Person();
    let tom = new Person();

    yehuda.on('poke', function(event) {
      console.log('Yehuda says OW');
    });

    tom.on('poke', function(event) {
      console.log('Tom says OW');
    });

    yehuda.trigger('poke');
    tom.trigger('poke');
    ```

    @method mixin
    @for RSVP.EventTarget
    @private
    @param {Object} object object to extend with EventTarget methods
  */
  mixin(object) {
    object['on']      = this['on'];
    object['off']     = this['off'];
    object['trigger'] = this['trigger'];
    object._promiseCallbacks = undefined;
    return object;
  },

  /**
    Registers a callback to be executed when `eventName` is triggered

    ```javascript
    object.on('event', function(eventInfo){
      // handle the event
    });

    object.trigger('event');
    ```

    @method on
    @for RSVP.EventTarget
    @private
    @param {String} eventName name of the event to listen for
    @param {Function} callback function to be called when the event is triggered.
  */
  on(eventName, callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    let allCallbacks = callbacksFor(this), callbacks;

    callbacks = allCallbacks[eventName];

    if (!callbacks) {
      callbacks = allCallbacks[eventName] = [];
    }

    if (indexOf(callbacks, callback) === -1) {
      callbacks.push(callback);
    }
  },

  /**
    You can use `off` to stop firing a particular callback for an event:

    ```javascript
    function doStuff() { // do stuff! }
    object.on('stuff', doStuff);

    object.trigger('stuff'); // doStuff will be called

    // Unregister ONLY the doStuff callback
    object.off('stuff', doStuff);
    object.trigger('stuff'); // doStuff will NOT be called
    ```

    If you don't pass a `callback` argument to `off`, ALL callbacks for the
    event will not be executed when the event fires. For example:

    ```javascript
    let callback1 = function(){};
    let callback2 = function(){};

    object.on('stuff', callback1);
    object.on('stuff', callback2);

    object.trigger('stuff'); // callback1 and callback2 will be executed.

    object.off('stuff');
    object.trigger('stuff'); // callback1 and callback2 will not be executed!
    ```

    @method off
    @for RSVP.EventTarget
    @private
    @param {String} eventName event to stop listening to
    @param {Function} callback optional argument. If given, only the function
    given will be removed from the event's callback queue. If no `callback`
    argument is given, all callbacks will be removed from the event's callback
    queue.
  */
  off(eventName, callback) {
    let allCallbacks = callbacksFor(this), callbacks, index;

    if (!callback) {
      allCallbacks[eventName] = [];
      return;
    }

    callbacks = allCallbacks[eventName];

    index = indexOf(callbacks, callback);

    if (index !== -1) { callbacks.splice(index, 1); }
  },

  /**
    Use `trigger` to fire custom events. For example:

    ```javascript
    object.on('foo', function(){
      console.log('foo event happened!');
    });
    object.trigger('foo');
    // 'foo event happened!' logged to the console
    ```

    You can also pass a value as a second argument to `trigger` that will be
    passed as an argument to all event listeners for the event:

    ```javascript
    object.on('foo', function(value){
      console.log(value.name);
    });

    object.trigger('foo', { name: 'bar' });
    // 'bar' logged to the console
    ```

    @method trigger
    @for RSVP.EventTarget
    @private
    @param {String} eventName name of the event to be triggered
    @param {*} options optional value to be passed to any event handlers for
    the given `eventName`
  */
  trigger(eventName, options, label) {
    let allCallbacks = callbacksFor(this), callbacks, callback;

    if (callbacks = allCallbacks[eventName]) {
      // Don't cache the callbacks.length since it may grow
      for (let i=0; i<callbacks.length; i++) {
        callback = callbacks[i];

        callback(options, label);
      }
    }
  }
};

const config = {
  instrument: false
};

EventTarget['mixin'](config);

function configure(name, value) {
  if (arguments.length === 2) {
    config[name] = value;
  } else {
    return config[name];
  }
}

function objectOrFunction(x) {
  let type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

function isObject(x) {
  return x !== null && typeof x === 'object';
}

function isMaybeThenable(x) {
  return x !== null && typeof x === 'object';
}

let _isArray;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = x => Object.prototype.toString.call(x) === '[object Array]';
}

const isArray = _isArray;

// Date.now is not available in browsers < IE9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Compatibility
const now = Date.now || (() => new Date().getTime());

const queue = [];

function scheduleFlush() {
  setTimeout(() => {
    for (let i = 0; i < queue.length; i++) {
      let entry = queue[i];

      let payload = entry.payload;

      payload.guid = payload.key + payload.id;
      payload.childGuid = payload.key + payload.childId;
      if (payload.error) {
        payload.stack = payload.error.stack;
      }

      config['trigger'](entry.name, entry.payload);
    }
    queue.length = 0;
  }, 50);
}

function instrument(eventName, promise, child) {
  if (1 === queue.push({
    name: eventName,
    payload: {
      key: promise._guidKey,
      id:  promise._id,
      eventName: eventName,
      detail: promise._result,
      childId: child && child._id,
      label: promise._label,
      timeStamp: now(),
      error: config["instrument-with-stack"] ? new Error(promise._label) : null
    }})) {
      scheduleFlush();
    }
  }

/**
  `RSVP.Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new RSVP.Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = RSVP.Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {*} object value that the returned promise will be resolved with
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object, label) {
  /*jshint validthis:true */
  let Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  let promise = new Constructor(noop, label);
  resolve(promise, object);
  return promise;
}

function withOwnPromise() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function noop() {}

const PENDING   = void 0;
const FULFILLED = 1;
const REJECTED  = 2;

const GET_THEN_ERROR = new ErrorObject();

function getThen(promise) {
  try {
    return promise.then;
  } catch(error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch(e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  config.async(promise => {
    let sealed = false;
    let error = tryThen(then$$1, thenable, value => {
      if (sealed) { return; }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value, undefined);
      } else {
        fulfill(promise, value);
      }
    }, reason => {
      if (sealed) { return; }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    thenable._onError = null;
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, value => {
      if (thenable !== value) {
        resolve(promise, value, undefined);
      } else {
        fulfill(promise, value);
      }
    }, reason => reject(promise, reason));
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  let isOwnThenable =
    maybeThenable.constructor === promise.constructor &&
    then$$1 === then &&
    promise.constructor.resolve === resolve$1;

  if (isOwnThenable) {
    handleOwnThenable(promise, maybeThenable);
  } else if (then$$1 === GET_THEN_ERROR) {
    reject(promise, GET_THEN_ERROR.error);
    GET_THEN_ERROR.error = null;
  } else if (isFunction(then$$1)) {
    handleForeignThenable(promise, maybeThenable, then$$1);
  } else {
    fulfill(promise, maybeThenable);
  }
}

function resolve(promise, value) {
  if (promise === value) {
    fulfill(promise, value);
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onError) {
    promise._onError(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) { return; }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length === 0) {
    if (config.instrument) {
      instrument('fulfilled', promise);
    }
  } else {
    config.async(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) { return; }
  promise._state = REJECTED;
  promise._result = reason;
  config.async(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  let subscribers = parent._subscribers;
  let length = subscribers.length;

  parent._onError = null;

  subscribers[length] = child;
  subscribers[length + FULFILLED] = onFulfillment;
  subscribers[length + REJECTED]  = onRejection;

  if (length === 0 && parent._state) {
    config.async(publish, parent);
  }
}

function publish(promise) {
  let subscribers = promise._subscribers;
  let settled = promise._state;

  if (config.instrument) {
    instrument(settled === FULFILLED ? 'fulfilled' : 'rejected', promise);
  }

  if (subscribers.length === 0) { return; }

  let child, callback, result = promise._result;

  for (let i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, result);
    } else {
      callback(result);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

const TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, result) {
  try {
    return callback(result);
  } catch(e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(state, promise, callback, result) {
  let hasCallback = isFunction(callback);
  let value, error;

  if (hasCallback) {
    value = tryCatch(callback, result);

    if (value === TRY_CATCH_ERROR) {
      error = value.error;
      value.error = null; // release
    } else if (value === promise) {
      reject(promise, withOwnPromise());
      return;
    }
  } else {
    value = result;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && error === undefined) {
    resolve(promise, value);
  } else if (error !== undefined) {
    reject(promise, error);
  } else if (state === FULFILLED) {
    fulfill(promise, value);
  } else if (state === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  let resolved = false;
  try {
    resolver(value => {
      if (resolved) { return; }
      resolved = true;
      resolve(promise, value);
    }, reason => {
      if (resolved) { return; }
      resolved = true;
      reject(promise, reason);
    });
  } catch(e) {
    reject(promise, e);
  }
}

function then(onFulfillment, onRejection, label) {
  let parent = this;
  let state = parent._state;

  if (state === FULFILLED && !onFulfillment || state === REJECTED && !onRejection) {
    config.instrument && instrument('chained', parent, parent);
    return parent;
  }

  parent._onError = null;

  let child = new parent.constructor(noop, label);
  let result = parent._result;

  config.instrument && instrument('chained', parent, child);

  if (state === PENDING) {
    subscribe(parent, child, onFulfillment, onRejection);
  } else {
    let callback = state === FULFILLED ? onFulfillment : onRejection;
    config.async(() => invokeCallback(state, child, callback, result));
  }

  return child;
}

class Enumerator {
  constructor(Constructor, input, abortOnReject, label) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop, label);
    this._abortOnReject = abortOnReject;

    this._init(...arguments);
  }

  _init(Constructor, input) {
    let len = input.length || 0;
    this.length     = len;
    this._remaining = len;
    this._result = new Array(len);

    this._enumerate(input);
    if (this._remaining === 0) {
      fulfill(this.promise, this._result);
    }
  }

  _enumerate(input) {
    let length     = this.length;
    let promise    = this.promise;

    for (let i = 0; promise._state === PENDING && i < length; i++) {
      this._eachEntry(input[i], i);
    }
  }

  _settleMaybeThenable(entry, i) {
    let c = this._instanceConstructor;
    let resolve$$1 = c.resolve;

    if (resolve$$1 === resolve$1) {
      let then$$1 = getThen(entry);

      if (then$$1 === then && entry._state !== PENDING) {
        entry._onError = null;
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof then$$1 !== 'function') {
        this._remaining--;
        this._result[i] = this._makeResult(FULFILLED, i, entry);
      } else if (c === Promise) {
        let promise = new c(noop);
        handleMaybeThenable(promise, entry, then$$1);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(resolve$$1 => resolve$$1(entry)), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  }

  _eachEntry(entry, i) {
    if (isMaybeThenable(entry)) {
      this._settleMaybeThenable(entry, i);
    } else {
      this._remaining--;
      this._result[i] = this._makeResult(FULFILLED, i, entry);
    }
  }

  _settledAt(state, i, value) {
    let promise = this.promise;

    if (promise._state === PENDING) {
      if (this._abortOnReject && state === REJECTED) {
        reject(promise, value);
      } else {
        this._remaining--;
        this._result[i] = this._makeResult(state, i, value);
        if (this._remaining === 0) {
          fulfill(promise, this._result);
        }
      }
    }
  }

  _makeResult(state, i, value) {
    return value;
  }

  _willSettleAt(promise, i) {
    let enumerator = this;

    subscribe(
      promise, undefined,
      value  => enumerator._settledAt(FULFILLED, i, value),
      reason => enumerator._settledAt(REJECTED,  i, reason)
    );
  }
}

function makeSettledResult(state, position, value) {
  if (state === FULFILLED) {
    return {
      state: 'fulfilled',
      value: value
    };
  } else {
    return {
      state: 'rejected',
      reason: value
    };
  }
}

/**
  `RSVP.Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.resolve(2);
  let promise3 = RSVP.resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  RSVP.Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `RSVP.all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.reject(new Error("2"));
  let promise3 = RSVP.reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  RSVP.Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries, label) {
  if (!isArray(entries)) {
    return this.reject(new TypeError("Promise.all must be called with an array"), label);
  }
  return new Enumerator(this, entries, true /* abort on reject */, label).promise;
}

/**
  `RSVP.Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  RSVP.Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `RSVP.Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new RSVP.Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  RSVP.Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  RSVP.Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} entries array of promises to observe
  @param {String} label optional string for describing the promise returned.
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries, label) {
  /*jshint validthis:true */
  let Constructor = this;

  let promise = new Constructor(noop, label);

  if (!isArray(entries)) {
    reject(promise, new TypeError('Promise.race must be called with an array'));
    return promise;
  }

  for (let i = 0; promise._state === PENDING && i < entries.length; i++) {
    subscribe(Constructor.resolve(entries[i]), undefined,
      value  => resolve(promise, value),
      reason => reject(promise, reason));
  }

  return promise;
}

/**
  `RSVP.Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new RSVP.Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = RSVP.Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {*} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason, label) {
  /*jshint validthis:true */
  let Constructor = this;
  let promise = new Constructor(noop, label);
  reject(promise, reason);
  return promise;
}

const guidKey = 'rsvp_' + now() + '-';
let counter = 0;

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise’s eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class RSVP.Promise
  @param {function} resolver
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @constructor
*/
class Promise {
  constructor(resolver, label) {
    this._id = counter++;
    this._label = label;
    this._state = undefined;
    this._result = undefined;
    this._subscribers = [];

    config.instrument && instrument('created', this);

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  _onError(reason) {
    config.after(() => {
      if (this._onError) {
        config.trigger('error', reason, this._label);
      }
    });
  }

/**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.

  ```js
  function findAuthor(){
    throw new Error('couldn\'t find that author');
  }

  // synchronous
  try {
    findAuthor();
  } catch(reason) {
    // something went wrong
  }

  // async with promises
  findAuthor().catch(function(reason){
    // something went wrong
  });
  ```

  @method catch
  @param {Function} onRejection
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
*/
  catch(onRejection, label) {
    return this.then(undefined, onRejection, label);
  }

/**
  `finally` will be invoked regardless of the promise's fate just as native
  try/catch/finally behaves

  Synchronous example:

  ```js
  findAuthor() {
    if (Math.random() > 0.5) {
      throw new Error();
    }
    return new Author();
  }

  try {
    return findAuthor(); // succeed or fail
  } catch(error) {
    return findOtherAuthor();
  } finally {
    // always runs
    // doesn't affect the return value
  }
  ```

  Asynchronous example:

  ```js
  findAuthor().catch(function(reason){
    return findOtherAuthor();
  }).finally(function(){
    // author was either found, or not
  });
  ```

  @method finally
  @param {Function} callback
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
*/
  finally(callback, label) {
    let promise = this;
    let constructor = promise.constructor;

    return promise.then(value => constructor.resolve(callback()).then(() => value),
                       reason => constructor.resolve(callback()).then(() => { throw reason; }), label);
  }
}

Promise.cast = resolve$1; // deprecated
Promise.all = all;
Promise.race = race;
Promise.resolve = resolve$1;
Promise.reject = reject$1;

Promise.prototype._guidKey = guidKey;

/**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.

  ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```

  Chaining
  --------

  The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.

  ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });

  findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we\'re unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we\'re unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

  ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```

  Assimilation
  ------------

  Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.

  ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```

  If the assimliated promise rejects, then the downstream promise will also reject.

  ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```

  Simple Example
  --------------

  Synchronous Example

  ```javascript
  let result;

  try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```

  Errback Example

  ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```

  Promise Example;

  ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```

  Advanced Example
  --------------

  Synchronous Example

  ```javascript
  let author, books;

  try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```

  Errback Example

  ```js

  function foundBooks(books) {

  }

  function failure(reason) {

  }

  findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```

  Promise Example;

  ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```

  @method then
  @param {Function} onFulfillment
  @param {Function} onRejection
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise}
*/
Promise.prototype.then = then;

function Result() {
  this.value = undefined;
}

const ERROR = new Result();
const GET_THEN_ERROR$1 = new Result();

function getThen$1(obj) {
  try {
   return obj.then;
  } catch(error) {
    ERROR.value= error;
    return ERROR;
  }
}


function tryApply(f, s, a) {
  try {
    f.apply(s, a);
  } catch(error) {
    ERROR.value = error;
    return ERROR;
  }
}

function makeObject(_, argumentNames) {
  let obj = {};
  let length = _.length;
  let args = new Array(length);

  for (let x = 0; x < length; x++) {
    args[x] = _[x];
  }

  for (let i = 0; i < argumentNames.length; i++) {
    let name = argumentNames[i];
    obj[name] = args[i + 1];
  }

  return obj;
}

function arrayResult(_) {
  let length = _.length;
  let args = new Array(length - 1);

  for (let i = 1; i < length; i++) {
    args[i - 1] = _[i];
  }

  return args;
}

function wrapThenable(then, promise) {
  return {
    then: function(onFulFillment, onRejection) {
      return then.call(promise, onFulFillment, onRejection);
    }
  };
}

/**
  `RSVP.denodeify` takes a 'node-style' function and returns a function that
  will return an `RSVP.Promise`. You can use `denodeify` in Node.js or the
  browser when you'd prefer to use promises over using callbacks. For example,
  `denodeify` transforms the following:

  ```javascript
  let fs = require('fs');

  fs.readFile('myfile.txt', function(err, data){
    if (err) return handleError(err);
    handleData(data);
  });
  ```

  into:

  ```javascript
  let fs = require('fs');
  let readFile = RSVP.denodeify(fs.readFile);

  readFile('myfile.txt').then(handleData, handleError);
  ```

  If the node function has multiple success parameters, then `denodeify`
  just returns the first one:

  ```javascript
  let request = RSVP.denodeify(require('request'));

  request('http://example.com').then(function(res) {
    // ...
  });
  ```

  However, if you need all success parameters, setting `denodeify`'s
  second parameter to `true` causes it to return all success parameters
  as an array:

  ```javascript
  let request = RSVP.denodeify(require('request'), true);

  request('http://example.com').then(function(result) {
    // result[0] -> res
    // result[1] -> body
  });
  ```

  Or if you pass it an array with names it returns the parameters as a hash:

  ```javascript
  let request = RSVP.denodeify(require('request'), ['res', 'body']);

  request('http://example.com').then(function(result) {
    // result.res
    // result.body
  });
  ```

  Sometimes you need to retain the `this`:

  ```javascript
  let app = require('express')();
  let render = RSVP.denodeify(app.render.bind(app));
  ```

  The denodified function inherits from the original function. It works in all
  environments, except IE 10 and below. Consequently all properties of the original
  function are available to you. However, any properties you change on the
  denodeified function won't be changed on the original function. Example:

  ```javascript
  let request = RSVP.denodeify(require('request')),
      cookieJar = request.jar(); // <- Inheritance is used here

  request('http://example.com', {jar: cookieJar}).then(function(res) {
    // cookieJar.cookies holds now the cookies returned by example.com
  });
  ```

  Using `denodeify` makes it easier to compose asynchronous operations instead
  of using callbacks. For example, instead of:

  ```javascript
  let fs = require('fs');

  fs.readFile('myfile.txt', function(err, data){
    if (err) { ... } // Handle error
    fs.writeFile('myfile2.txt', data, function(err){
      if (err) { ... } // Handle error
      console.log('done')
    });
  });
  ```

  you can chain the operations together using `then` from the returned promise:

  ```javascript
  let fs = require('fs');
  let readFile = RSVP.denodeify(fs.readFile);
  let writeFile = RSVP.denodeify(fs.writeFile);

  readFile('myfile.txt').then(function(data){
    return writeFile('myfile2.txt', data);
  }).then(function(){
    console.log('done')
  }).catch(function(error){
    // Handle error
  });
  ```

  @method denodeify
  @static
  @for RSVP
  @param {Function} nodeFunc a 'node-style' function that takes a callback as
  its last argument. The callback expects an error to be passed as its first
  argument (if an error occurred, otherwise null), and the value from the
  operation as its second argument ('function(err, value){ }').
  @param {Boolean|Array} [options] An optional paramter that if set
  to `true` causes the promise to fulfill with the callback's success arguments
  as an array. This is useful if the node function has multiple success
  paramters. If you set this paramter to an array with names, the promise will
  fulfill with a hash with these names as keys and the success parameters as
  values.
  @return {Function} a function that wraps `nodeFunc` to return an
  `RSVP.Promise`
  @static
*/
function denodeify(nodeFunc, options) {
  let fn = function() {
    let self = this;
    let l = arguments.length;
    let args = new Array(l + 1);
    let promiseInput = false;

    for (let i = 0; i < l; ++i) {
      let arg = arguments[i];

      if (!promiseInput) {
        // TODO: clean this up
        promiseInput = needsPromiseInput(arg);
        if (promiseInput === GET_THEN_ERROR$1) {
          let p = new Promise(noop);
          reject(p, GET_THEN_ERROR$1.value);
          return p;
        } else if (promiseInput && promiseInput !== true) {
          arg = wrapThenable(promiseInput, arg);
        }
      }
      args[i] = arg;
    }

    let promise = new Promise(noop);

    args[l] = function(err, val) {
      if (err)
        reject(promise, err);
      else if (options === undefined)
        resolve(promise, val);
      else if (options === true)
        resolve(promise, arrayResult(arguments));
      else if (isArray(options))
        resolve(promise, makeObject(arguments, options));
      else
        resolve(promise, val);
    };

    if (promiseInput) {
      return handlePromiseInput(promise, args, nodeFunc, self);
    } else {
      return handleValueInput(promise, args, nodeFunc, self);
    }
  };

  fn.__proto__ = nodeFunc;

  return fn;
}

function handleValueInput(promise, args, nodeFunc, self) {
  let result = tryApply(nodeFunc, self, args);
  if (result === ERROR) {
    reject(promise, result.value);
  }
  return promise;
}

function handlePromiseInput(promise, args, nodeFunc, self){
  return Promise.all(args).then(args => {
    let result = tryApply(nodeFunc, self, args);
    if (result === ERROR) {
      reject(promise, result.value);
    }
    return promise;
  });
}

function needsPromiseInput(arg) {
  if (arg && typeof arg === 'object') {
    if (arg.constructor === Promise) {
      return true;
    } else {
      return getThen$1(arg);
    }
  } else {
    return false;
  }
}

/**
  This is a convenient alias for `RSVP.Promise.all`.

  @method all
  @static
  @for RSVP
  @param {Array} array Array of promises.
  @param {String} label An optional label. This is useful
  for tooling.
*/
function all$1(array, label) {
  return Promise.all(array, label);
}

class AllSettled extends Enumerator {
  constructor(Constructor, entries, label) {
    super(Constructor, entries, false /* don't abort on reject */, label);
  }
}

AllSettled.prototype._makeResult = makeSettledResult;

  /**
  `RSVP.allSettled` is similar to `RSVP.all`, but instead of implementing
  a fail-fast method, it waits until all the promises have returned and
  shows you all the results. This is useful if you want to handle multiple
  promises' failure states together as a set.

  Returns a promise that is fulfilled when all the given promises have been
  settled. The return promise is fulfilled with an array of the states of
  the promises passed into the `promises` array argument.

  Each state object will either indicate fulfillment or rejection, and
  provide the corresponding value or reason. The states will take one of
  the following formats:

  ```javascript
  { state: 'fulfilled', value: value }
    or
  { state: 'rejected', reason: reason }
  ```

  Example:

  ```javascript
  let promise1 = RSVP.Promise.resolve(1);
  let promise2 = RSVP.Promise.reject(new Error('2'));
  let promise3 = RSVP.Promise.reject(new Error('3'));
  let promises = [ promise1, promise2, promise3 ];

  RSVP.allSettled(promises).then(function(array){
    // array == [
    //   { state: 'fulfilled', value: 1 },
    //   { state: 'rejected', reason: Error },
    //   { state: 'rejected', reason: Error }
    // ]
    // Note that for the second item, reason.message will be '2', and for the
    // third item, reason.message will be '3'.
  }, function(error) {
    // Not run. (This block would only be called if allSettled had failed,
    // for instance if passed an incorrect argument type.)
  });
  ```

  @method allSettled
  @static
  @for RSVP
  @param {Array} entries
  @param {String} label - optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled with an array of the settled
  states of the constituent promises.
  */

function allSettled(entries, label) {
  if (!isArray(entries)) {
    return Promise.reject(new TypeError("Promise.allSettled must be called with an array"), label);
  }

  return new AllSettled(Promise, entries, label).promise;
}

/**
  This is a convenient alias for `RSVP.Promise.race`.

  @method race
  @static
  @for RSVP
  @param {Array} array Array of promises.
  @param {String} label An optional label. This is useful
  for tooling.
 */
function race$1(array, label) {
  return Promise.race(array, label);
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

class PromiseHash extends Enumerator {
  constructor(Constructor, object, abortOnReject = true, label) {
    super(Constructor, object, abortOnReject, label);
  }

  _init(Constructor, object) {
    this._result = {};

    this._enumerate(object);
    if (this._remaining === 0) {
      fulfill(this.promise, this._result);
    }
  }

  _enumerate(input) {
    let promise    = this.promise;
    let results    = [];

    for (let key in input) {
      if (hasOwnProperty.call(input, key)) {
        results.push({
          position: key,
          entry: input[key]
        });
      }
    }

    let length = results.length;
    this._remaining = length;
    let result;

    for (let i = 0; promise._state === PENDING && i < length; i++) {
      result = results[i];
      this._eachEntry(result.entry, result.position);
    }
  }
}

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
function hash(object, label) {
  if (!isObject(object)) {
    return Promise.reject(new TypeError("Promise.hash must be called with an object"), label);
  }

  return new PromiseHash(Promise, object, label).promise;
}

class HashSettled extends PromiseHash {
  constructor(Constructor, object, label) {
    super(Constructor, object, false, label);
  }
}

HashSettled.prototype._makeResult = makeSettledResult;

/**
  `RSVP.hashSettled` is similar to `RSVP.allSettled`, but takes an object
  instead of an array for its `promises` argument.

  Unlike `RSVP.all` or `RSVP.hash`, which implement a fail-fast method,
  but like `RSVP.allSettled`, `hashSettled` waits until all the
  constituent promises have returned and then shows you all the results
  with their states and values/reasons. This is useful if you want to
  handle multiple promises' failure states together as a set.

  Returns a promise that is fulfilled when all the given promises have been
  settled, or rejected if the passed parameters are invalid.

  The returned promise is fulfilled with a hash that has the same key names as
  the `promises` object argument. If any of the values in the object are not
  promises, they will be copied over to the fulfilled object and marked with state
  'fulfilled'.

  Example:

  ```javascript
  let promises = {
    myPromise: RSVP.Promise.resolve(1),
    yourPromise: RSVP.Promise.resolve(2),
    theirPromise: RSVP.Promise.resolve(3),
    notAPromise: 4
  };

  RSVP.hashSettled(promises).then(function(hash){
    // hash here is an object that looks like:
    // {
    //   myPromise: { state: 'fulfilled', value: 1 },
    //   yourPromise: { state: 'fulfilled', value: 2 },
    //   theirPromise: { state: 'fulfilled', value: 3 },
    //   notAPromise: { state: 'fulfilled', value: 4 }
    // }
  });
  ```

  If any of the `promises` given to `RSVP.hash` are rejected, the state will
  be set to 'rejected' and the reason for rejection provided.

  Example:

  ```javascript
  let promises = {
    myPromise: RSVP.Promise.resolve(1),
    rejectedPromise: RSVP.Promise.reject(new Error('rejection')),
    anotherRejectedPromise: RSVP.Promise.reject(new Error('more rejection')),
  };

  RSVP.hashSettled(promises).then(function(hash){
    // hash here is an object that looks like:
    // {
    //   myPromise:              { state: 'fulfilled', value: 1 },
    //   rejectedPromise:        { state: 'rejected', reason: Error },
    //   anotherRejectedPromise: { state: 'rejected', reason: Error },
    // }
    // Note that for rejectedPromise, reason.message == 'rejection',
    // and for anotherRejectedPromise, reason.message == 'more rejection'.
  });
  ```

  An important note: `RSVP.hashSettled` is intended for plain JavaScript objects that
  are just a set of keys and values. `RSVP.hashSettled` will NOT preserve prototype
  chains.

  Example:

  ```javascript
  function MyConstructor(){
    this.example = RSVP.Promise.resolve('Example');
  }

  MyConstructor.prototype = {
    protoProperty: RSVP.Promise.resolve('Proto Property')
  };

  let myObject = new MyConstructor();

  RSVP.hashSettled(myObject).then(function(hash){
    // protoProperty will not be present, instead you will just have an
    // object that looks like:
    // {
    //   example: { state: 'fulfilled', value: 'Example' }
    // }
    //
    // hash.hasOwnProperty('protoProperty'); // false
    // 'undefined' === typeof hash.protoProperty
  });
  ```

  @method hashSettled
  @for RSVP
  @param {Object} object
  @param {String} label optional string that describes the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when when all properties of `promises`
  have been settled.
  @static
*/

function hashSettled(object, label) {
  if (!isObject(object)) {
    return Promise.reject(new TypeError("RSVP.hashSettled must be called with an object"), label);
  }

  return new HashSettled(Promise, object, false, label).promise;
}

/**
  `RSVP.rethrow` will rethrow an error on the next turn of the JavaScript event
  loop in order to aid debugging.

  Promises A+ specifies that any exceptions that occur with a promise must be
  caught by the promises implementation and bubbled to the last handler. For
  this reason, it is recommended that you always specify a second rejection
  handler function to `then`. However, `RSVP.rethrow` will throw the exception
  outside of the promise, so it bubbles up to your console if in the browser,
  or domain/cause uncaught exception in Node. `rethrow` will also throw the
  error again so the error can be handled by the promise per the spec.

  ```javascript
  function throws(){
    throw new Error('Whoops!');
  }

  let promise = new RSVP.Promise(function(resolve, reject){
    throws();
  });

  promise.catch(RSVP.rethrow).then(function(){
    // Code here doesn't run because the promise became rejected due to an
    // error!
  }, function (err){
    // handle the error here
  });
  ```

  The 'Whoops' error will be thrown on the next turn of the event loop
  and you can watch for it in your console. You can also handle it using a
  rejection handler given to `.then` or `.catch` on the returned promise.

  @method rethrow
  @static
  @for RSVP
  @param {Error} reason reason the promise became rejected.
  @throws Error
  @static
*/
function rethrow(reason) {
  setTimeout(() => {
    throw reason;
  });
  throw reason;
}

/**
  `RSVP.defer` returns an object similar to jQuery's `$.Deferred`.
  `RSVP.defer` should be used when porting over code reliant on `$.Deferred`'s
  interface. New code should use the `RSVP.Promise` constructor instead.

  The object returned from `RSVP.defer` is a plain object with three properties:

  * promise - an `RSVP.Promise`.
  * reject - a function that causes the `promise` property on this object to
    become rejected
  * resolve - a function that causes the `promise` property on this object to
    become fulfilled.

  Example:

   ```javascript
   let deferred = RSVP.defer();

   deferred.resolve("Success!");

   deferred.promise.then(function(value){
     // value here is "Success!"
   });
   ```

  @method defer
  @static
  @for RSVP
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Object}
 */

function defer(label) {
  let deferred = { resolve: undefined, reject: undefined };

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  }, label);

  return deferred;
}

/**
 `RSVP.map` is similar to JavaScript's native `map` method, except that it
  waits for all promises to become fulfilled before running the `mapFn` on
  each item in given to `promises`. `RSVP.map` returns a promise that will
  become fulfilled with the result of running `mapFn` on the values the promises
  become fulfilled with.

  For example:

  ```javascript

  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.resolve(2);
  let promise3 = RSVP.resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  let mapFn = function(item){
    return item + 1;
  };

  RSVP.map(promises, mapFn).then(function(result){
    // result is [ 2, 3, 4 ]
  });
  ```

  If any of the `promises` given to `RSVP.map` are rejected, the first promise
  that is rejected will be given as an argument to the returned promise's
  rejection handler. For example:

  ```javascript
  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.reject(new Error('2'));
  let promise3 = RSVP.reject(new Error('3'));
  let promises = [ promise1, promise2, promise3 ];

  let mapFn = function(item){
    return item + 1;
  };

  RSVP.map(promises, mapFn).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(reason) {
    // reason.message === '2'
  });
  ```

  `RSVP.map` will also wait if a promise is returned from `mapFn`. For example,
  say you want to get all comments from a set of blog posts, but you need
  the blog posts first because they contain a url to those comments.

  ```javscript

  let mapFn = function(blogPost){
    // getComments does some ajax and returns an RSVP.Promise that is fulfilled
    // with some comments data
    return getComments(blogPost.comments_url);
  };

  // getBlogPosts does some ajax and returns an RSVP.Promise that is fulfilled
  // with some blog post data
  RSVP.map(getBlogPosts(), mapFn).then(function(comments){
    // comments is the result of asking the server for the comments
    // of all blog posts returned from getBlogPosts()
  });
  ```

  @method map
  @static
  @for RSVP
  @param {Array} promises
  @param {Function} mapFn function to be called on each fulfilled promise.
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled with the result of calling
  `mapFn` on each fulfilled promise or value when they become fulfilled.
   The promise will be rejected if any of the given `promises` become rejected.
  @static
*/
function map(promises, mapFn, label) {
  if (!isArray(promises)) {
    return Promise.reject(new TypeError("RSVP.map must be called with an array"), label);
  }

  if (!isFunction(mapFn)) {
    return Promise.reject(new TypeError("RSVP.map expects a function as a second argument"), label);
  }

  return Promise.all(promises, label).then(values => {
    let length = values.length;
    let results = new Array(length);

    for (let i = 0; i < length; i++) {
      results[i] = mapFn(values[i]);
    }

    return Promise.all(results, label);
  });
}

/**
  This is a convenient alias for `RSVP.Promise.resolve`.

  @method resolve
  @static
  @for RSVP
  @param {*} value value that the returned promise will be resolved with
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$2(value, label) {
  return Promise.resolve(value, label);
}

/**
  This is a convenient alias for `RSVP.Promise.reject`.

  @method reject
  @static
  @for RSVP
  @param {*} reason value that the returned promise will be rejected with.
  @param {String} label optional string for identifying the returned promise.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$2(reason, label) {
  return Promise.reject(reason, label);
}

/**
 `RSVP.filter` is similar to JavaScript's native `filter` method, except that it
  waits for all promises to become fulfilled before running the `filterFn` on
  each item in given to `promises`. `RSVP.filter` returns a promise that will
  become fulfilled with the result of running `filterFn` on the values the
  promises become fulfilled with.

  For example:

  ```javascript

  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.resolve(2);
  let promise3 = RSVP.resolve(3);

  let promises = [promise1, promise2, promise3];

  let filterFn = function(item){
    return item > 1;
  };

  RSVP.filter(promises, filterFn).then(function(result){
    // result is [ 2, 3 ]
  });
  ```

  If any of the `promises` given to `RSVP.filter` are rejected, the first promise
  that is rejected will be given as an argument to the returned promise's
  rejection handler. For example:

  ```javascript
  let promise1 = RSVP.resolve(1);
  let promise2 = RSVP.reject(new Error('2'));
  let promise3 = RSVP.reject(new Error('3'));
  let promises = [ promise1, promise2, promise3 ];

  let filterFn = function(item){
    return item > 1;
  };

  RSVP.filter(promises, filterFn).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(reason) {
    // reason.message === '2'
  });
  ```

  `RSVP.filter` will also wait for any promises returned from `filterFn`.
  For instance, you may want to fetch a list of users then return a subset
  of those users based on some asynchronous operation:

  ```javascript

  let alice = { name: 'alice' };
  let bob   = { name: 'bob' };
  let users = [ alice, bob ];

  let promises = users.map(function(user){
    return RSVP.resolve(user);
  });

  let filterFn = function(user){
    // Here, Alice has permissions to create a blog post, but Bob does not.
    return getPrivilegesForUser(user).then(function(privs){
      return privs.can_create_blog_post === true;
    });
  };
  RSVP.filter(promises, filterFn).then(function(users){
    // true, because the server told us only Alice can create a blog post.
    users.length === 1;
    // false, because Alice is the only user present in `users`
    users[0] === bob;
  });
  ```

  @method filter
  @static
  @for RSVP
  @param {Array} promises
  @param {Function} filterFn - function to be called on each resolved value to
  filter the final results.
  @param {String} label optional string describing the promise. Useful for
  tooling.
  @return {Promise}
*/

function resolveAll(promises, label) {
  return Promise.all(promises, label);
}

function resolveSingle(promise, label) {
  return Promise.resolve(promise, label).then(function(promises){
    return resolveAll(promises, label);
  });
}

function filter(promises, filterFn, label) {
  if (!isArray(promises) && !(isObject(promises) && promises.then !== undefined )) {
    return Promise.reject(new TypeError("RSVP.filter must be called with an array or promise"), label);
  }

  if (!isFunction(filterFn)) {
    return Promise.reject(new TypeError("RSVP.filter expects function as a second argument"), label);
  }

  let promise = isArray(promises) ? resolveAll(promises, label) : resolveSingle(promises, label);
  return promise.then(values => {
    let length = values.length;
    let filtered = new Array(length);

    for (let i = 0; i < length; i++) {
      filtered[i] = filterFn(values[i]);
    }

    return resolveAll(filtered, label).then(filtered => {
      let results = new Array(length);
      let newLength = 0;

      for (let i = 0; i < length; i++) {
        if (filtered[i]) {
          results[newLength] = values[i];
          newLength++;
        }
      }

      results.length = newLength;

      return results;
    });
  });
}

let len = 0;
let vertxNext;
function asap(callback, arg) {
  queue$1[len] = callback;
  queue$1[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 1, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    scheduleFlush$1();
  }
}

const browserWindow = (typeof window !== 'undefined') ? window : undefined;
const browserGlobal = browserWindow || {};
const BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
const isNode = typeof self === 'undefined' &&
  typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
const isWorker = typeof Uint8ClampedArray !== 'undefined' &&
  typeof importScripts !== 'undefined' &&
  typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  let nextTick = process.nextTick;
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // setImmediate should be used instead instead
  let version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
  if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
    nextTick = setImmediate;
  }
  return () => nextTick(flush);
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function() {
      vertxNext(flush);
    };
  }
  return useSetTimeout();
}

function useMutationObserver() {
  let iterations = 0;
  let observer = new BrowserMutationObserver(flush);
  let node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return () => node.data = (iterations = ++iterations % 2);
}

// web worker
function useMessageChannel() {
  let channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return () => channel.port2.postMessage(0);
}

function useSetTimeout() {
  return () => setTimeout(flush, 1);
}

const queue$1 = new Array(1000);

function flush() {
  for (let i = 0; i < len; i+=2) {
    let callback = queue$1[i];
    let arg = queue$1[i+1];

    callback(arg);

    queue$1[i] = undefined;
    queue$1[i+1] = undefined;
  }

  len = 0;
}

function attemptVertex() {
  try {
    let r = require;
    let vertx = r('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch(e) {
    return useSetTimeout();
  }
}

let scheduleFlush$1;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush$1 = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush$1 = useMutationObserver();
} else if (isWorker) {
  scheduleFlush$1 = useMessageChannel();
} else if (browserWindow === undefined && typeof require === 'function') {
  scheduleFlush$1 = attemptVertex();
} else {
  scheduleFlush$1 = useSetTimeout();
}

let platform;

/* global self */
if (typeof self === 'object') {
  platform = self;

/* global global */
} else if (typeof global === 'object') {
  platform = global;
} else {
  throw new Error('no global: `self` or `global` found');
}

// defaults
config.async = asap;
config.after = cb => setTimeout(cb, 0);
const cast = resolve$2;

const async = (callback, arg) => config.async(callback, arg);

function on() {
  config['on'].apply(config, arguments);
}

function off() {
  config['off'].apply(config, arguments);
}

// Set up instrumentation through `window.__PROMISE_INTRUMENTATION__`
if (typeof window !== 'undefined' && typeof window['__PROMISE_INSTRUMENTATION__'] === 'object') {
  let callbacks = window['__PROMISE_INSTRUMENTATION__'];
  configure('instrument', true);
  for (let eventName in callbacks) {
    if (callbacks.hasOwnProperty(eventName)) {
      on(eventName, callbacks[eventName]);
    }
  }
}

// the default export here is for backwards compat:
//   https://github.com/tildeio/rsvp.js/issues/434
var rsvp = {
  asap,
  cast,
  Promise,
  EventTarget,
  all: all$1,
  allSettled,
  race: race$1,
  hash,
  hashSettled,
  rethrow,
  defer,
  denodeify,
  configure,
  on,
  off,
  resolve: resolve$2,
  reject: reject$2,
  map,
  ['async']: async, // babel seems to error if async isn't a computed prop here...
  filter
};

export { asap, cast, Promise, EventTarget, all$1 as all, allSettled, race$1 as race, hash, hashSettled, rethrow, defer, denodeify, configure, on, off, resolve$2 as resolve, reject$2 as reject, map, async, filter };export default rsvp;

//# sourceMappingURL=rsvp.es.map
