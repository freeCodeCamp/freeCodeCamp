// @flow
import chalk from 'chalk';

// double char markdown matchers
const BOLD_REGEX = /\*{2}([^*]+)\*{2}/g;
const UNDERLINE_REGEX = /_{2}([^_]+)_{2}/g;
const STRIKETHROUGH_REGEX = /~{2}([^~]+)~{2}/g;

// single char markdown matchers
const ITALIC_REGEX = /(?<!\\)\*(.+)(?<!\\)\*|(?<!\\)_(.+)(?<!\\)_/g;

export default function markdownParser(input: string): string {
  input = input.replace(BOLD_REGEX, (...args) => chalk.bold(args[1]));
  input = input.replace(UNDERLINE_REGEX, (...args) => chalk.underline(args[1]));
  input = input.replace(STRIKETHROUGH_REGEX, (...args) =>
    chalk.strikethrough(args[1]),
  );
  input = input.replace(ITALIC_REGEX, (...args) =>
    chalk.italic(args[1] || args[2]),
  );
  input = input.replace(/(?<!\\)\\/g, '');

  return input;
}
