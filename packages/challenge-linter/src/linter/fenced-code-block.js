export const names = ['closed-code-blocks'];
export const description = 'Code blocks must have closing triple backticks';
export const tags = ['code'];
function rule(params, onError) {
  params.parsers.micromark.tokens
    .filter(token => token.type === 'codeFenced')
    .forEach(token => {
      if (token.text.trim().slice(-3) !== '```') {
        onError({
          lineNumber: token.endLine,
          detail: `Code blocks must have closing triple backticks.`
        });
      }
    });
}
export { rule as function };
