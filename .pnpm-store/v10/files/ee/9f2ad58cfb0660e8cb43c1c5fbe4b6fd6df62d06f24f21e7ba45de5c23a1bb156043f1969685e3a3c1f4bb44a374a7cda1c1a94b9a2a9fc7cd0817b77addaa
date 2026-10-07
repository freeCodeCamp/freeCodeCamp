'use strict';

var util = require('./_util');

module.exports = function defFunc(ajv) {
  if (!ajv._opts.$data) {
    console.warn('keyword select requires $data option');
    return ajv;
  }
  var metaSchemaRef = util.metaSchemaRef(ajv);
  var compiledCaseSchemas = [];

  defFunc.definition = {
    validate: function v(schema, data, parentSchema) {
      if (parentSchema.selectCases === undefined)
        throw new Error('keyword "selectCases" is absent');
      var compiled = getCompiledSchemas(parentSchema, false);
      var validate = compiled.cases[schema];
      if (validate === undefined) validate = compiled.default;
      if (typeof validate == 'boolean') return validate;
      var valid = validate(data);
      if (!valid) v.errors = validate.errors;
      return valid;
    },
    $data: true,
    metaSchema: { type: ['string', 'number', 'boolean', 'null'] }
  };

  ajv.addKeyword('select', defFunc.definition);
  ajv.addKeyword('selectCases', {
    compile: function (schemas, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      for (var value in schemas)
        compiled.cases[value] = compileOrBoolean(schemas[value]);
      return function() { return true; };
    },
    valid: true,
    metaSchema: {
      type: 'object',
      additionalProperties: metaSchemaRef
    }
  });
  ajv.addKeyword('selectDefault', {
    compile: function (schema, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      compiled.default = compileOrBoolean(schema);
      return function() { return true; };
    },
    valid: true,
    metaSchema: metaSchemaRef
  });
  return ajv;


  function getCompiledSchemas(parentSchema, create) {
    var compiled;
    compiledCaseSchemas.some(function (c) {
      if (c.parentSchema === parentSchema) {
        compiled = c;
        return true;
      }
    });
    if (!compiled && create !== false) {
      compiled = {
        parentSchema: parentSchema,
        cases: {},
        default: true
      };
      compiledCaseSchemas.push(compiled);
    }
    return compiled;
  }

  function compileOrBoolean(schema) {
    return typeof schema == 'boolean'
            ? schema
            : ajv.compile(schema);
  }
};
