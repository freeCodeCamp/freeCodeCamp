const yaml = require('js-yaml');

module.exports = {
  names: ['yaml-linter'],
  description: 'YAML code blocks should be valid',
  tags: ['yaml'],
  function: function rule(params, onError) {
    params.tokens
      .filter(param => param.type === 'fence')
      .filter(param => param.info === 'yml' || param.info === 'yaml')
      // TODO since the parser only looks for yml, should we reject yaml blocks?
      .forEach(codeBlock => {
        try {
          yaml.safeLoad(codeBlock.content);
        } catch (e) {
          onError({
            lineNumber: codeBlock.lineNumber,
            detail: e.message,
            context: codeBlock.line
          });
        }
      });
  }
};
