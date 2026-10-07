'use strict';

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema, parentSchema) {
      if (!schema) return true;
      var properties = Object.keys(parentSchema.properties);
      if (properties.length == 0) return true;
      return {required: properties};
    },
    metaSchema: {type: 'boolean'},
    dependencies: ['properties']
  };

  ajv.addKeyword('allRequired', defFunc.definition);
  return ajv;
};
