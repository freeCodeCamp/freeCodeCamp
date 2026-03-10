import jsYaml from 'js-yaml';

export const names = ['yaml-linter'];
export const description = 'YAML code blocks should be valid';
export const tags = ['yaml'];
function rule(params, onError) {
  params.tokens
    .filter(param => param.type === 'fence')
    .filter(param => param.info === 'yml' || param.info === 'yaml')
    // TODO since the parser only looks for yml, should we reject yaml blocks?
    .forEach(codeBlock => {
      try {
        jsYaml.safeLoad(codeBlock.content);
      } catch (e) {
        onError({
          lineNumber: codeBlock.lineNumber,
          detail: e.message,
          context: codeBlock.line
        });
      }
    });
}

export { rule as function };
