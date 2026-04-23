import jsYaml from 'js-yaml';

export const names = ['yaml-linter'];
export const description = 'YAML code blocks should be valid';
export const tags = ['yaml'];
export const parser = 'markdownit';
function rule(params, onError) {
  params.parsers.markdownit.tokens
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
