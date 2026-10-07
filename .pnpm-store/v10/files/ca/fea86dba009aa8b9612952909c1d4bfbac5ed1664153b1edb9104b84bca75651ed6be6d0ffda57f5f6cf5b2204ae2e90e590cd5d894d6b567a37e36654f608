'use strict';

module.exports = async(value, prompt, context = {}) => {
  let { choices, multiple } = prompt.options;
  let { size, submitted } = prompt.state;

  let prefix = context.prefix || await prompt.prefix();
  let separator = context.separator || await prompt.separator();
  let message = context.message || await prompt.message();

  // ? Select your favorite colors >
  // ^             ^               ^
  // prefix     message        separator
  let promptLine = [prefix, message, separator].filter(Boolean).join(' ');
  prompt.state.prompt = promptLine;

  let header = context.header || await prompt.header();
  let output = context.format || await prompt.format(value);
  let help = context.help || await prompt.error() || await prompt.hint();
  let body = context.body || await prompt.body();
  let footer = context.footer || await prompt.footer();

  if (output || !help) promptLine += ' ' + output;
  if (help && !promptLine.includes(help)) promptLine += ' ' + help;

  if (submitted && choices && multiple && !output && !body) {
    promptLine += prompt.styles.danger('No items were selected');
  }

  prompt.clear(size);
  prompt.write([header, promptLine, body, footer].filter(Boolean).join('\n'));
  prompt.restore();
};
