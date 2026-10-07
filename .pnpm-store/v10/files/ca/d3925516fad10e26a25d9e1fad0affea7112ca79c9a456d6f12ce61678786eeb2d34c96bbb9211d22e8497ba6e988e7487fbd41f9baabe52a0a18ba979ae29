'use strict';

var CONSTRUCTORS = {
  Object: Object,
  Array: Array,
  Function: Function,
  Number: Number,
  String: String,
  Date: Date,
  RegExp: RegExp
};

module.exports = function defFunc(ajv) {
  /* istanbul ignore else */
  if (typeof Buffer != 'undefined')
    CONSTRUCTORS.Buffer = Buffer;

  /* istanbul ignore else */
  if (typeof Promise != 'undefined')
    CONSTRUCTORS.Promise = Promise;

  defFunc.definition = {
    compile: function (schema) {
      if (typeof schema == 'string') {
        var Constructor = getConstructor(schema);
        return function (data) {
          return data instanceof Constructor;
        };
      }

      var constructors = schema.map(getConstructor);
      return function (data) {
        for (var i=0; i<constructors.length; i++)
          if (data instanceof constructors[i]) return true;
        return false;
      };
    },
    CONSTRUCTORS: CONSTRUCTORS,
    metaSchema: {
      anyOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' }
        }
      ]
    }
  };

  ajv.addKeyword('instanceof', defFunc.definition);
  return ajv;

  function getConstructor(c) {
    var Constructor = CONSTRUCTORS[c];
    if (Constructor) return Constructor;
    throw new Error('invalid "instanceof" keyword value ' + c);
  }
};
