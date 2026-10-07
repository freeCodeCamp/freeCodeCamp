// @flow
import assert from 'assert';

import {escapeMarkdown, md} from '../src/diagnostic';

describe('escapeMarkdown', () => {
  it('returns an escaped string 01', () => {
    assert.strictEqual('\\*test\\*', escapeMarkdown('*test*'));
  });

  it('returns an escaped string 02', () => {
    assert.strictEqual('\\_test\\_', escapeMarkdown('_test_'));
  });

  it('returns an escaped string 03', () => {
    assert.strictEqual('\\~test\\~', escapeMarkdown('~test~'));
  });

  it('returns an escaped string 04', () => {
    assert.strictEqual('\\*\\_\\~test\\~\\_\\*', escapeMarkdown('*_~test~_*'));
  });

  it('returns an escaped string with backslash 01', () => {
    assert.strictEqual('\\\\test\\\\', escapeMarkdown('\\test\\'));
  });

  it('returns an escaped string with backslash 02', () => {
    assert.strictEqual('\\\\\\*test\\*\\\\', escapeMarkdown('\\*test*\\'));
  });
});

describe('md tagged template literal', () => {
  it('bold placeholder', () => {
    assert.strictEqual(
      '*Test*: **\\_abc\\_**',
      md`*Test*: ${md.bold('_abc_')}`,
    );
  });

  it('italic placeholder', () => {
    assert.strictEqual(
      '*Test*: _\\_abc\\__',
      md`*Test*: ${md.italic('_abc_')}`,
    );
  });

  it('underline placeholder', () => {
    assert.strictEqual(
      '*Test*: __\\_abc\\___',
      md`*Test*: ${md.underline('_abc_')}`,
    );
  });

  it('strikethrough placeholder', () => {
    assert.strictEqual(
      '*Test*: ~~\\_abc\\_~~',
      md`*Test*: ${md.strikethrough('_abc_')}`,
    );
  });

  it('escapes only placeholders', () => {
    assert.strictEqual('*Test*: \\_abc\\_', md`*Test*: ${'_abc_'}`);
  });

  it('behaves like native template literal', () => {
    let v = {
      toString() {
        return 'a';
      },
      // $FlowFixMe[invalid-computed-prop]
      [Symbol.toPrimitive]() {
        return 'b';
      },
    };
    assert.strictEqual('Test: b', md`Test: ${v}`);
  });

  it('supports null and undefined', () => {
    assert.strictEqual('Test: undefined null', md`Test: ${undefined} ${null}`);
  });
});
