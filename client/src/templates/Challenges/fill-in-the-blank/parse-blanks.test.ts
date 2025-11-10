import { describe, it, expect } from 'vitest';
import { parseBlanks, parseChinesePattern, parseAnswer } from './parse-blanks';

describe('parseBlanks', () => {
  it('handles strings without blanks', () => {
    expect(parseBlanks('<p>hello world</p>')).toEqual([
      [{ type: 'text', value: 'hello world' }]
    ]);
  });

  it('handles strings without blanks and with multiple paragraphs', () => {
    expect(parseBlanks('<p>hello world</p><p>dlrow olleh</p>')).toEqual([
      [{ type: 'text', value: 'hello world' }],
      [{ type: 'text', value: 'dlrow olleh' }]
    ]);
  });

  it('handles strings with blanks', () => {
    expect(parseBlanks('<p>hello BLANK!</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ]
    ]);

    expect(parseBlanks('<p>hello BLANK! Nice BLANK to meet you.</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '! Nice ' },
        { type: 'blank', value: 1 },
        { type: 'text', value: ' to meet you.' }
      ]
    ]);
  });

  it('handles paragraphs with a leading blank', () => {
    expect(parseBlanks('<p>BLANK hello</p>')).toEqual([
      [
        { type: 'blank', value: 0 },
        { type: 'text', value: ' hello' }
      ]
    ]);
  });

  it('removes trailing empty strings', () => {
    expect(parseBlanks('<p>hello BLANK</p>')).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 }
      ]
    ]);
  });

  it('handles strings with blanks and multiple paragraphs', () => {
    expect(parseBlanks(`<p>hello BLANK!</p><p>dlrow BLANK</p>`)).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 }
      ]
    ]);
  });

  it('ignores newlines between paragraphs', () => {
    expect(
      parseBlanks(`<p>hello BLANK!</p>

<p>dlrow BLANK</p>`)
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 }
      ]
    ]);
  });

  it('ignores whitespace surrounding the input', () => {
    expect(
      parseBlanks(` <p>hello BLANK!</p>
    `)
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ]
    ]);
  });

  it('counts blanks across multiple paragraphs', () => {
    expect(
      parseBlanks(
        `<p>hello BLANK!</p><p>dlrow BLANK BLANK</p><p> even BLANK more BLANK</p>`
      )
    ).toEqual([
      [
        { type: 'text', value: 'hello ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '!' }
      ],
      [
        { type: 'text', value: 'dlrow ' },
        { type: 'blank', value: 1 },
        { type: 'text', value: ' ' },
        { type: 'blank', value: 2 }
      ],
      [
        { type: 'text', value: ' even ' },
        { type: 'blank', value: 3 },
        { type: 'text', value: ' more ' },
        { type: 'blank', value: 4 }
      ]
    ]);
  });

  it('throws if the string is not wrapped in p tags', () => {
    expect(() => parseBlanks('hello BLANK!')).toThrow();
    expect(() => parseBlanks('<p>hello BLANK!</p>hello BLANK!')).toThrow();
    expect(() => parseBlanks('hello BLANK!<p>hello</p>')).toThrow();
  });

  it('handles Chinese with single BLANK', () => {
    expect(parseBlanks('<p>BLANK好 (BLANK hǎo)</p>')).toEqual([
      [
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '好',
            pinyin: 'hǎo'
          }
        }
      ]
    ]);
  });

  it('handles Chinese without pinyin', () => {
    expect(parseBlanks('<p>你BLANK好</p>')).toEqual([
      [
        { type: 'text', value: '你' },
        { type: 'blank', value: 0 },
        { type: 'text', value: '好' }
      ]
    ]);
  });

  it('handles Chinese with multiple BLANKs', () => {
    expect(
      parseBlanks('<p>BLANK好，BLANK是王华 (BLANK hǎo BLANK shì Wang Hua)</p>')
    ).toEqual([
      [
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '好，',
            pinyin: 'hǎo'
          }
        },
        { type: 'blank', value: 1 },
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '是王华',
            pinyin: 'shì Wang Hua'
          }
        }
      ]
    ]);
  });

  it('handles Chinese with BLANK at the end', () => {
    expect(parseBlanks('<p>你好BLANK (nǐ hǎo BLANK)</p>')).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '你好',
            pinyin: 'nǐ hǎo'
          }
        },
        { type: 'blank', value: 0 }
      ]
    ]);
  });

  it('handles Chinese with spaces around BLANK', () => {
    expect(parseBlanks('<p>你 BLANK 我 (nǐ BLANK wǒ)</p>')).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '你',
            pinyin: 'nǐ'
          }
        },
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: {
            hanzi: '我',
            pinyin: 'wǒ'
          }
        }
      ]
    ]);
  });
});

describe('parseChinesePattern', () => {
  it('parseChinesePattern returns hanzi and pinyin for well-formed input', () => {
    expect(parseChinesePattern('你好 (nǐ hǎo)')).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('parseChinesePattern handles parentheses without a space', () => {
    expect(parseChinesePattern('你好(nǐ hǎo)')).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('parseChinesePattern returns null for non-matching input', () => {
    expect(parseChinesePattern('hello')).toBeNull();
  });

  it('parseAnswer returns parsed object when pattern matches', () => {
    expect(parseAnswer('你好 (nǐ hǎo)')).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });
});

describe('parseAnswer', () => {
  it('parseAnswer returns hanzi-pinyin string when pattern matches', () => {
    expect(parseAnswer('你好(nǐ hǎo)')).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('parseAnswer returns original string when pattern does not match', () => {
    expect(parseAnswer('just some text')).toBe('just some text');
  });
});
