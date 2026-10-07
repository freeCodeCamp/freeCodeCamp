'use strict';

var SCALAR_TYPES = ['number', 'integer', 'string', 'boolean', 'null'];

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'array',
    compile: function(keys, parentSchema, it) {
      var equal = it.util.equal;
      var scalar = getScalarKeys(keys, parentSchema);

      return function(data) {
        if (data.length > 1) {
          for (var k=0; k < keys.length; k++) {
            var i, key = keys[k];
            if (scalar[k]) {
              var hash = {};
              for (i = data.length; i--;) {
                if (!data[i] || typeof data[i] != 'object') continue;
                var prop = data[i][key];
                if (prop && typeof prop == 'object') continue;
                if (typeof prop == 'string') prop = '"' + prop;
                if (hash[prop]) return false;
                hash[prop] = true;
              }
            } else {
              for (i = data.length; i--;) {
                if (!data[i] || typeof data[i] != 'object') continue;
                for (var j = i; j--;) {
                  if (data[j] && typeof data[j] == 'object' && equal(data[i][key], data[j][key]))
                    return false;
                }
              }
            }
          }
        }
        return true;
      };
    },
    metaSchema: {
      type: 'array',
      items: {type: 'string'}
    }
  };

  ajv.addKeyword('uniqueItemProperties', defFunc.definition);
  return ajv;
};


function getScalarKeys(keys, schema) {
  return keys.map(function(key) {
    var properties = schema.items && schema.items.properties;
    var propType = properties && properties[key] && properties[key].type;
    return Array.isArray(propType)
            ? propType.indexOf('object') < 0 && propType.indexOf('array') < 0
            : SCALAR_TYPES.indexOf(propType) >= 0;
  });
}
