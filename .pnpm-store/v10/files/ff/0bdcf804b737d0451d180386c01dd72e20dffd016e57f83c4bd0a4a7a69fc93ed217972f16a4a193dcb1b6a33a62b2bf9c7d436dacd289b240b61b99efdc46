/**
 * class Namespace
 *
 * Simple object for storing attributes. Implements equality by attribute names
 * and values, and provides a simple string representation.
 *
 * See also [original guide][1]
 *
 * [1]:http://docs.python.org/dev/library/argparse.html#the-namespace-object
 **/
'use strict';

var $$ = require('./utils');

/**
 * new Namespace(options)
 * - options(object): predefined propertis for result object
 *
 **/
var Namespace = module.exports = function Namespace(options) {
  $$.extend(this, options);
};

/**
 * Namespace#isset(key) -> Boolean
 * - key (string|number): property name
 *
 * Tells whenever `namespace` contains given `key` or not.
 **/
Namespace.prototype.isset = function (key) {
  return $$.has(this, key);
};

/**
 * Namespace#set(key, value) -> self
 * -key (string|number|object): propery name
 * -value (mixed): new property value
 *
 * Set the property named key with value.
 * If key object then set all key properties to namespace object
 **/
Namespace.prototype.set = function (key, value) {
  if (typeof (key) === 'object') {
    $$.extend(this, key);
  } else {
    this[key] = value;
  }
  return this;
};

/**
 * Namespace#get(key, defaultValue) -> mixed
 * - key (string|number): property name
 * - defaultValue (mixed): default value
 *
 * Return the property key or defaulValue if not set
 **/
Namespace.prototype.get = function (key, defaultValue) {
  return !this[key] ? defaultValue : this[key];
};

/**
 * Namespace#unset(key, defaultValue) -> mixed
 * - key (string|number): property name
 * - defaultValue (mixed): default value
 *
 * Return data[key](and delete it) or defaultValue
 **/
Namespace.prototype.unset = function (key, defaultValue) {
  var value = this[key];
  if (value !== null) {
    delete this[key];
    return value;
  }
  return defaultValue;
};
