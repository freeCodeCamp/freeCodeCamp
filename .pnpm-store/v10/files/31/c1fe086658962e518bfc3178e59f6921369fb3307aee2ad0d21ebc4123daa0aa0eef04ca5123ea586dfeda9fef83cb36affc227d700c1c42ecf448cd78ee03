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

var _require = require('../core/Schema'),
    create = _require.create;

var schemaCache = new Map();

function getSchemaInstance(getSchemaSource, getSchemaExtensions, schemaExtensions) {
  var source = getSchemaSource();
  var schema = schemaCache.get(source);

  if (schema == null) {
    schema = create(source, getSchemaExtensions(), schemaExtensions);
    schemaCache.set(source, schema);
  }

  return schema;
}

module.exports = getSchemaInstance;