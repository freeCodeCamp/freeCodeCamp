/**
 * Copyright 2015-present Facebook. All Rights Reserved.
 *
 * @typechecks
 * 
 */
'use strict';

var forEachObject = require("./forEachObject");
/**
 * Partitions an object given a predicate. All elements satisfying the predicate
 * are part of the first returned object, and all elements that don't are in the
 * second.
 */


function partitionObject(object, callback, context) {
  var first = {};
  var second = {};
  forEachObject(object, function (value, key) {
    if (callback.call(context, value, key, object)) {
      first[key] = value;
    } else {
      second[key] = value;
    }
  });
  return [first, second];
}

module.exports = partitionObject;