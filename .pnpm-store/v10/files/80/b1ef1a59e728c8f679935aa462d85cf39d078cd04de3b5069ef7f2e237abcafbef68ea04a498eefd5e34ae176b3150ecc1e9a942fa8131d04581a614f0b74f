/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var PREFIX = 'client:__type:';
var TYPE_SCHEMA_TYPE = '__TypeSchema';

function generateTypeID(typeName) {
  return PREFIX + typeName;
}

function isTypeID(id) {
  return id.indexOf(PREFIX) === 0;
}

module.exports = {
  generateTypeID: generateTypeID,
  isTypeID: isTypeID,
  TYPE_SCHEMA_TYPE: TYPE_SCHEMA_TYPE
};