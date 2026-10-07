'use strict';

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: require('./dotjs/patternRequired'),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'regex'
      },
      uniqueItems: true
    }
  };

  ajv.addKeyword('patternRequired', defFunc.definition);
  return ajv;
};
