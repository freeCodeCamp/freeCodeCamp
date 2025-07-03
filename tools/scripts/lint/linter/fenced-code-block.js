module.exports = {
  names: ['closed-code-blocks'],
  description: 'Code blocks must have closing triple backticks',
  tags: ['code'],
  function: function rule(params, onError) {
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
};
