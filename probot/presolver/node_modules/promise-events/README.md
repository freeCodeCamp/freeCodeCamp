# Promise Events
[![Build Status](https://travis-ci.org/yanickrochon/promise-events.svg?branch=master)](https://travis-ci.org/yanickrochon/promise-events) [![Coverage Status](https://coveralls.io/repos/yanickrochon/promise-events/badge.svg)](https://coveralls.io/r/yanickrochon/promise-events)

[![NPM](https://nodei.co/npm/promise-events.png?compact=true)](https://nodei.co/npm/promise-events/)

An asynchronous event listener for Promise/A+ implementations. This module inherits Node's built-in `EventEmitter` interface, except that selected methods are overridden to return a promise for easy workflow.

In essence, replacing existing code with this emitter should have no impact whatsoever, added that this emitter can work either synchronously or asynchrnously, except that *all* events are emitted asynchronously.

**NOTE:** Modules that expect event emitting to be synchronous should be refactored to wait for the promise resolution instead.


### Usage

```javascript
const EventEmitter = require('promise-events');

var events = new EventEmitter();

// synchronous
events.on('syncEvent', hello => {
  console.log(hello);
});

events.emit('syncEvent', 'hello!');


// asynchronous
Promise.all([
  events.on('asyncEvent', hello => {
    console.log('Handler 1', hello);
    return 'Bye!';
  }),
  events.on('asyncEvent', hello => {
    console.log('Handler 2', hello);
  })
]).then(() => {
  console.log("Event added and any newListener listeners emitted!");
}).then(() => {

  events.emit('asyncEvent', 'Hello async!').then(results => {
    console.log(results);
    // results = [ 'Bye!', undefined ]
  });

});

// using async/await
await events.on('asyncEvent', hello => {
  console.log('Handler 1', hello);
  return 'Bye!';
});
await events.on('asyncEvent', hello => {
  console.log('Handler 2', hello);
});

console.log("Event added and any newListener listeners emitted!");

const results = await events.emit('asyncEvent', 'Hello async!');

console.log(results);
// results = [ 'Bye!', undefined ]
```

All listeners are executed using [`Promise.all`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise.all).

A call to `events.emit` will always resolve with an array if successful, or a single value--usually an `Error`--otherwise from any listener; the first error thrown, or failure/rejection, will be passed to the rejection callback and all subsequent listeners' resturned values will be ignored.

If necessary, a filter function may be specified for the array of return values using `events.setResultFilter(filter)` (resp. `events.getResultFilter()` and `EventEmitter.defaultResultFilter`, analogous to `EventEmitter.defaultMaxListeners`). Because listeners are called asynchronously, the order of the items in `results` is undefined. Therefore, the amount of listeners, for a given event, and their added order to an emitter is not an indicator of the length of `results` or even the order of values returned when emitting that event. In other words, do not rely on `results` to determine a particular listener's return value.

This module also provides a sugar overload of `.once()` for a Promise-based version of `.once()` which will guarantee to be called *after* all listeners have been emitted, regardless when the listeners were added.

```javascript
// nearly equivalent to events.once('foo', () => console.log('foo!'));
events.once('foo').then(() => console.log('Done!'));
// IMPORTANT : Do not use await on this method unless you know the event will
//             be emitted from another asynchronous function!

events.on('foo', () => console.log('foo'));

events.emit('foo');
// => foo
// => Done!
events.emit('foo');
// => foo
```

## API

Most of the implementation is fully compatible with the standard `EventEmitter`. Any extension and overrides are in **bold**, and differences are annotated.

* [Event: 'newListener'](https://nodejs.org/api/events.html#events_event_newlistener)
* [Event: 'removeListener'](https://nodejs.org/api/events.html#events_event_removelistener)
* [EventEmitter.listenerCount(emitter, eventName)](https://nodejs.org/api/events.html#events_eventemitter_listenercount_emitter_eventname) *deprecated*
* [EventEmitter.defaultMaxListeners](https://nodejs.org/api/events.html#events_eventemitter_defaultmaxlisteners)
* **EventEmitter.defaultResultFilter**
* [emitter.addListener(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_addlistener_eventname_listener)
  Returns a `Promise` resolving when all `newListener` events have been emitted.
* [emitter.emit(eventName[, ...args])](https://nodejs.org/api/events.html#events_emitter_emit_eventname_args)
  Returns a `Promise`.
* [emitter.eventNames()](https://nodejs.org/api/events.html#events_emitter_eventnames)
* [emitter.getMaxListeners()](https://nodejs.org/api/events.html#events_emitter_getmaxlisteners)
* **emitter.getResultFilter()**
  Return the result filter function.
* [emitter.listenerCount(eventName)](https://nodejs.org/api/events.html#events_emitter_listenercount_eventname)
* [emitter.listeners(eventName)](https://nodejs.org/api/events.html#events_emitter_listeners_eventname)
* **emitter.maxListeners**
  Alias for `emitter.getMaxListeners()` and `emitter.setMaxListeners()`.
* [emitter.on(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_on_eventname_listener)
  Returns a `Promise` resolving when all `newListener` events have been emitted.
* **emitter.once(eventName)**
  Returns a `Promise` that is resolved once *only after* all listeners for the specified event have been called for the given event. (Any `newListener` event will be emitted.)
* [emitter.prependListener(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_prependlistener_eventname_listener)
  Returns a `Promise` resolving when all `newListener` events have been emitted.
* **emitter.prependOnceListener(eventName)**
  Returns a `Promise` that is resolved once *only before* all listeners for the specified event have been called for the given event. (Any `newListener` event will be emitted.)
* [emitter.removeAllListeners([eventName])](https://nodejs.org/api/events.html#events_emitter_removealllisteners_eventname)
  Returns a `Promise` resolving when all `removeListener` events have been emitted.
* [emitter.removeListener(eventName, listener)](https://nodejs.org/api/events.html#events_emitter_removelistener_eventname_listener)
  Returns a `Promise` resolving when all `removeListener` events have been emitted.
* **emitter.resultFilter**
  Alias for `emitter.getResultFilter()` and `emitter.setResultFilter()`.
* [emitter.setMaxListeners(n)](https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n)
* **emitter.setResultFilter()**
  Set the result filter function.


## Contribution

All contributions welcome! Every PR **must** be accompanied by their associated
unit tests!


## License

MIT
