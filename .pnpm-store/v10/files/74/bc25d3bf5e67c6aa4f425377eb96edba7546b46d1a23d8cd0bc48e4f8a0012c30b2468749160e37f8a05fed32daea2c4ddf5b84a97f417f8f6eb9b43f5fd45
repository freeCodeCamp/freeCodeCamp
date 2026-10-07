'use strict';

module.exports = {
  metaSchemaRef: metaSchemaRef
};

var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

function metaSchemaRef(ajv) {
  var defaultMeta = ajv._opts.defaultMeta;
  if (typeof defaultMeta == 'string') return { $ref: defaultMeta };
  if (ajv.getSchema(META_SCHEMA_ID)) return { $ref: META_SCHEMA_ID };
  console.warn('meta schema not defined');
  return {};
}
