'use strict';

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema) {
      var schemas = [];
      for (var pointer in schema)
        schemas.push(getSchema(pointer, schema[pointer]));
      return { 'allOf': schemas };
    },
    metaSchema: {
      type: 'object',
      patternProperties: {
        '^(\\/([^~\\/]|~0|~1)*)*(\\/)?$': {
          $ref: ajv._opts.v5
                ? 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#'
                : 'http://json-schema.org/draft-04/schema#'
        }
      },
      additionalProperties: false
    }
  };

  ajv.addKeyword('deepProperties', defFunc.definition);
  return ajv;
};


function getSchema(jsonPointer, schema) {
  var segments = jsonPointer.split('/');
  var rootSchema = {};
  var pointerSchema = rootSchema;
  for (var i=1; i<segments.length; i++) {
    var segment = segments[i];
    var isLast = i == segments.length - 1;
    segment = unescapeJsonPointer(segment);
    var properties = pointerSchema.properties = {};
    var items = undefined;
    if (/[0-9]+/.test(segment)) {
      var count = +segment;
      items = pointerSchema.items = [];
      while (count--) items.push({});
    }
    pointerSchema = isLast ? schema : {};
    properties[segment] = pointerSchema;
    if (items) items.push(pointerSchema);
  }
  return rootSchema;
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}
