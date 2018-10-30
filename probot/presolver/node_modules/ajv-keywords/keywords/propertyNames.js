'use strict';

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    compile: function(schema) {
      var validate = ajv.compile(schema);
      return ajv._opts.allErrors ? vAllErrors : vBreakOnError;

      function vBreakOnError(data) {
        for (var prop in data) {
          if (!validate(prop)) {
            vBreakOnError.errors = validate.errors;
            addPropertyNameError(vBreakOnError.errors, prop);
            return false;
          }
        }
        return true;
      }

      function vAllErrors(data) {
        var errors = [];
        for (var prop in data) {
          if (!validate(prop)) {
            errors = errors.concat(validate.errors);
            addPropertyNameError(errors, prop);
          }
        }
        if (errors.length) vAllErrors.errors = errors;
        return errors.length == 0;
      }

      function addPropertyNameError(errors, propName) {
        errors.push({
          keyword: 'propertyNames',
          params: { propertyName: propName },
          message: 'should have valid property name of "' + propName + '"'
        });
      }
    },
    metaSchema: {
      $ref: ajv._opts.v5
            ? 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#'
            : 'http://json-schema.org/draft-04/schema#'
    },
    errors: true
  };

  ajv.addKeyword('propertyNames', defFunc.definition);
  return ajv;
};
