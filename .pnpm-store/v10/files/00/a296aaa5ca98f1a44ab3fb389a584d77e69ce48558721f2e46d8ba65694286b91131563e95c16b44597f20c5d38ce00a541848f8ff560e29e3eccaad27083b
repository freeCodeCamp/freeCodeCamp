'use strict';

// Benchmark comparing performance of event emit for many listeners
// To run it, do following in memoizee package path:
//
// $ npm install eventemitter2 signals
// $ node benchmark/many-on.js

var forEach    = require('es5-ext/object/for-each')
  , pad        = require('es5-ext/string/#/pad')

  , now = Date.now

  , time, count = 1000000, i, data = {}
  , ee, native, ee2, signals, a = {}, b = {};

ee = (function () {
	var ee = require('../')();
	ee.on('test', function () { return arguments; });
	ee.on('test', function () { return arguments; });
	return ee.on('test', function () { return arguments; });
}());

native = (function () {
	var ee = require('events');
	ee = new ee.EventEmitter();
	ee.on('test', function () { return arguments; });
	ee.on('test', function () { return arguments; });
	return ee.on('test', function () { return arguments; });
}());

ee2 = (function () {
	var ee = require('eventemitter2');
	ee = new ee.EventEmitter2();
	ee.on('test', function () { return arguments; });
	ee.on('test', function () { return arguments; });
	return ee.on('test', function () { return arguments; });
}());

signals = (function () {
	var Signal = require('signals')
	  , ee = { test: new Signal() };
	ee.test.add(function () { return arguments; });
	ee.test.add(function () { return arguments; });
	ee.test.add(function () { return arguments; });
	return ee;
}());

console.log("Emit for 3 listeners", "x" + count + ":\n");

i = count;
time = now();
while (i--) {
	ee.emit('test', a, b);
}
data["event-emitter (this implementation)"] = now() - time;

i = count;
time = now();
while (i--) {
	native.emit('test', a, b);
}
data["EventEmitter (Node.js native)"] = now() - time;

i = count;
time = now();
while (i--) {
	ee2.emit('test', a, b);
}
data.EventEmitter2 = now() - time;

i = count;
time = now();
while (i--) {
	signals.test.dispatch(a, b);
}
data.Signals = now() - time;

forEach(data, function (value, name, obj, index) {
	console.log(index + 1 + ":",  pad.call(value, " ", 5), name);
}, null, function (a, b) {
	return this[a] - this[b];
});
