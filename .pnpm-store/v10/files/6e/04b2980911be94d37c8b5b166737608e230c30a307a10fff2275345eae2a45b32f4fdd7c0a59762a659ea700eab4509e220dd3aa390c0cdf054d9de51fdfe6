# event-emitter
## Environment agnostic event emitter

### Installation

	$ npm install event-emitter

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Usage

```javascript
var ee = require('event-emitter');

var MyClass = function () { /* .. */ };
ee(MyClass.prototype); // All instances of MyClass will expose event-emitter interface

var emitter = new MyClass(), listener;

emitter.on('test', listener = function (args) {
  // … react to 'test' event
});

emitter.once('test', function (args) {
  // … react to first 'test' event (invoked only once!)
});

emitter.emit('test', arg1, arg2/*…args*/); // Two above listeners invoked
emitter.emit('test', arg1, arg2/*…args*/); // Only first listener invoked

emitter.off('test', listener);              // Removed first listener
emitter.emit('test', arg1, arg2/*…args*/); // No listeners invoked
```
### Additional utilities

#### allOff(obj) _(event-emitter/all-off)_

Removes all listeners from given event emitter object

#### hasListeners(obj[, name]) _(event-emitter/has-listeners)_

Whether object has some listeners attached to the object.
When `name` is provided, it checks listeners for specific event name

```javascript
var emitter = ee();
var hasListeners = require('event-emitter/has-listeners');
var listener = function () {};

hasListeners(emitter); // false

emitter.on('foo', listener);
hasListeners(emitter); // true
hasListeners(emitter, 'foo'); // true
hasListeners(emitter, 'bar'); // false

emitter.off('foo', listener);
hasListeners(emitter, 'foo'); // false
```

#### pipe(source, target[, emitMethodName]) _(event-emitter/pipe)_

Pipes all events from _source_ emitter onto _target_ emitter (all events from _source_ emitter will be emitted also on _target_ emitter, but not other way).  
Returns _pipe_ object which exposes `pipe.close` function. Invoke it to close configured _pipe_.  
It works internally by redefinition of `emit` method, if in your interface this method is referenced differently, provide its name (or symbol) with third argument.

#### unify(emitter1, emitter2) _(event-emitter/unify)_

Unifies event handling for two objects. Events emitted on _emitter1_ would be also emitted on _emitter2_, and other way back.  
Non reversible.

```javascript
var eeUnify = require('event-emitter/unify');

var emitter1 = ee(), listener1, listener3;
var emitter2 = ee(), listener2, listener4;

emitter1.on('test', listener1 = function () { });
emitter2.on('test', listener2 = function () { });

emitter1.emit('test'); // Invoked listener1
emitter2.emit('test'); // Invoked listener2

var unify = eeUnify(emitter1, emitter2);

emitter1.emit('test'); // Invoked listener1 and listener2
emitter2.emit('test'); // Invoked listener1 and listener2

emitter1.on('test', listener3 = function () { });
emitter2.on('test', listener4 = function () { });

emitter1.emit('test'); // Invoked listener1, listener2, listener3 and listener4
emitter2.emit('test'); // Invoked listener1, listener2, listener3 and listener4
```

### Tests [![Build Status](https://travis-ci.org/medikoo/event-emitter.png)](https://travis-ci.org/medikoo/event-emitter)

	$ npm test
