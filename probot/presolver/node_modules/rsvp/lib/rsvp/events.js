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
export default {

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
