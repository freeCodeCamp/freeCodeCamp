'use strict';

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.patternRequired)
    return console.warn('Keyword patternRequired is already defined');

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
