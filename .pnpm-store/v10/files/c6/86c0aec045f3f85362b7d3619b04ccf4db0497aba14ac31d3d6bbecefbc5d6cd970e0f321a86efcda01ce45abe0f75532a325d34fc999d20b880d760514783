'use strict';

module.exports = function defFunc (ajv) {
  var transform = {
    trimLeft: function (value) {
      return value.replace(/^[\s]+/, '');
    },
    trimRight: function (value) {
      return value.replace(/[\s]+$/, '');
    },
    trim: function (value) {
      return value.trim();
    },
    toLowerCase: function (value) {
      return value.toLowerCase();
    },
    toUpperCase: function (value) {
      return value.toUpperCase();
    },
    toEnumCase: function (value, cfg) {
      return cfg.hash[makeHashTableKey(value)] || value;
    }
  };

  defFunc.definition = {
    type: 'string',
    errors: false,
    modifying: true,
    valid: true,
    compile: function (schema, parentSchema) {
      var cfg;

      if (schema.indexOf('toEnumCase') !== -1) {
        // build hash table to enum values
        cfg = {hash: {}};

        // requires `enum` in schema
        if (!parentSchema.enum)
          throw new Error('Missing enum. To use `transform:["toEnumCase"]`, `enum:[...]` is required.');
        for (var i = parentSchema.enum.length; i--; i) {
          var v = parentSchema.enum[i];
          if (typeof v !== 'string') continue;
          var k = makeHashTableKey(v);
          // requires all `enum` values have unique keys
          if (cfg.hash[k])
            throw new Error('Invalid enum uniqueness. To use `transform:["toEnumCase"]`, all values must be unique when case insensitive.');
          cfg.hash[k] = v;
        }
      }

      return function (data, dataPath, object, key) {
        // skip if value only
        if (!object) return;

        // apply transform in order provided
        for (var j = 0, l = schema.length; j < l; j++)
          data = transform[schema[j]](data, cfg);

        object[key] = data;
      };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'trimLeft', 'trimRight', 'trim',
          'toLowerCase', 'toUpperCase', 'toEnumCase'
        ]
      }
    }
  };

  ajv.addKeyword('transform', defFunc.definition);
  return ajv;

  function makeHashTableKey (value) {
    return value.toLowerCase();
  }
};
