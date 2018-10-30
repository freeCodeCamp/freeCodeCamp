'use strict';

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.switch)
    return console.warn('Keyword switch is already defined');

  var metaSchemaUri = ajv._opts.v5
                      ? 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#'
                      : 'http://json-schema.org/draft-04/schema#';

  defFunc.definition = {
    inline: require('./dotjs/switch'),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        required: [ 'then' ],
        properties: {
          'if': { $ref: metaSchemaUri },
          'then': {
            anyOf: [
              { type: 'boolean' },
              { $ref: metaSchemaUri }
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
