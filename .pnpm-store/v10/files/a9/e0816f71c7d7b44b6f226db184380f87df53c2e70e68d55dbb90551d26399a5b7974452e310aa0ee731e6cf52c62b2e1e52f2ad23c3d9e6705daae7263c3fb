'use strict';

var util = require('./_util');

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.switch && ajv.RULES.keywords.if) return;

  var metaSchemaRef = util.metaSchemaRef(ajv);

  defFunc.definition = {
    inline: require('./dotjs/switch'),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        required: [ 'then' ],
        properties: {
          'if': metaSchemaRef,
          'then': {
            anyOf: [
              { type: 'boolean' },
              metaSchemaRef
            ]
          },
          'continue': { type: 'boolean' }
        },
        additionalProperties: false,
        dependencies: {
          'continue': [ 'if' ]
        }
      }
    }
  };

  ajv.addKeyword('switch', defFunc.definition);
  return ajv;
};
