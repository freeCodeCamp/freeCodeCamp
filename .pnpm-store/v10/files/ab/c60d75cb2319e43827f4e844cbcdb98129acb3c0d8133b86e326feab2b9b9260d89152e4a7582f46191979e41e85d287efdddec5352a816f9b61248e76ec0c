'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var symbols = require('@redux-saga/symbols');

var undef = function undef(v) {
  return v === null || v === undefined;
};
var notUndef = function notUndef(v) {
  return v !== null && v !== undefined;
};
var func = function func(f) {
  return typeof f === 'function';
};
var number = function number(n) {
  return typeof n === 'number';
};
var string = function string(s) {
  return typeof s === 'string';
};
var array = Array.isArray;
var object = function object(obj) {
  return obj && !array(obj) && typeof obj === 'object';
};
var promise = function promise(p) {
  return p && func(p.then);
};
var iterator = function iterator(it) {
  return it && func(it.next) && func(it.throw);
};
var iterable = function iterable(it) {
  return it && func(Symbol) ? func(it[Symbol.iterator]) : array(it);
};
var task = function task(t) {
  return t && t[symbols.TASK];
};
var sagaAction = function sagaAction(a) {
  return Boolean(a && a[symbols.SAGA_ACTION]);
};
var observable = function observable(ob) {
  return ob && func(ob.subscribe);
};
var buffer = function buffer(buf) {
  return buf && func(buf.isEmpty) && func(buf.take) && func(buf.put);
};
var _pattern = function pattern(pat) {
  return pat && (string(pat) || symbol(pat) || func(pat) || array(pat) && pat.every(_pattern));
};
var channel = function channel(ch) {
  return ch && func(ch.take) && func(ch.close);
};
var stringableFunc = function stringableFunc(f) {
  return func(f) && f.hasOwnProperty('toString');
};
var symbol = function symbol(sym) {
  return Boolean(sym) && typeof Symbol === 'function' && sym.constructor === Symbol && sym !== Symbol.prototype;
};
var multicast = function multicast(ch) {
  return channel(ch) && ch[symbols.MULTICAST];
};
var effect = function effect(eff) {
  return eff && eff[symbols.IO];
};

exports.array = array;
exports.buffer = buffer;
exports.channel = channel;
exports.effect = effect;
exports.func = func;
exports.iterable = iterable;
exports.iterator = iterator;
exports.multicast = multicast;
exports.notUndef = notUndef;
exports.number = number;
exports.object = object;
exports.observable = observable;
exports.pattern = _pattern;
exports.promise = promise;
exports.sagaAction = sagaAction;
exports.string = string;
exports.stringableFunc = stringableFunc;
exports.symbol = symbol;
exports.task = task;
exports.undef = undef;
