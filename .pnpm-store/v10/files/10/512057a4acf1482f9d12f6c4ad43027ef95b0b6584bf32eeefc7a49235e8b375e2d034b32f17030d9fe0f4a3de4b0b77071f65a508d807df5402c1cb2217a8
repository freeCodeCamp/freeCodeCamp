import assert from 'assert';
import chalk from 'chalk';

import mdAnsi from '../src/markdown-ansi';

process.env.FORCE_COLOR = 3;

describe('markdown-ansi', () => {
  if (!chalk.supportsColor) return;

  it('should support asteriks for bold and italic', () => {
    let res = mdAnsi('**bold** *italic*');
    assert.equal(res, '\u001b[1mbold\u001b[22m \u001b[3mitalic\u001b[23m');
  });

  it('should support underscores for underlined and italic', () => {
    let res = mdAnsi('__underline__ _italic_');
    assert.equal(res, '\u001b[4munderline\u001b[24m \u001b[3mitalic\u001b[23m');
  });

  it('should support combination of bold and underline', () => {
    let res = mdAnsi('**bold _italic_**');
    assert.equal(res, '\u001b[1mbold \u001b[3mitalic\u001b[23m\u001b[22m');
  });

  it('should support strikethrough', () => {
    let res = mdAnsi('~~strikethrough~~');
    assert.equal(res, '\u001b[9mstrikethrough\u001b[29m');
  });

  it('should support escape character', () => {
    let res = mdAnsi('\\*\\*bold\\*\\* \\\\escape\\\\');
    assert.equal(res, '**bold** \\escape\\');
  });

  it('should support italic with escape character', () => {
    let res = mdAnsi('\\__italic_\\_');
    assert.equal(res, '_\u001b[3mitalic\u001b[23m_');
  });
});
