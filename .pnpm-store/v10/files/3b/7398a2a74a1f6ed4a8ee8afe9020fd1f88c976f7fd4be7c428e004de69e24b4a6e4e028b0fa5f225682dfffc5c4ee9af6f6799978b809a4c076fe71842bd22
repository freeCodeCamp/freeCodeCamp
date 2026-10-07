/**
 * Copyright 2015-present Facebook. All Rights Reserved.
 *
 * @typechecks
 * 
 */
'use strict';

var partitionObject = require("./partitionObject");
/**
 * Partitions the enumerable properties of an object into two objects, given a
 * whitelist `Set` for the first object. This is comparable to
 * `whitelistObjectKeys`, but eventually keeping all the keys. Returns a tuple
 * of objects `[first, second]`.
 */


function partitionObjectByKey(source, whitelist) {
  return partitionObject(source, function (_, key) {
    return whitelist.has(key);
  });
}

module.exports = partitionObjectByKey;