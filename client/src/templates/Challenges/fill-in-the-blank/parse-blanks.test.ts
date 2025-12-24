import { describe, it, expect } from 'vitest';
import {
  parseBlanks,
  parseHanziPinyinPairs,
  parseAnswer
} from './parse-blanks';

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
    expect(
      parseBlanks('<p>BLANK<ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby></p>')
    ).toEqual([
      [
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '好', pinyin: 'hǎo' }
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
      parseBlanks(
        '<p>BLANK<ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby>，BLANK<ruby>是王华<rp>(</rp><rt>shì Wang Hua</rt><rp>)</rp></ruby></p>'
      )
    ).toEqual([
      [
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '好', pinyin: 'hǎo' }
        },
        { type: 'text', value: '，' },
        { type: 'blank', value: 1 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '是王华', pinyin: 'shì Wang Hua' }
        }
      ]
    ]);
  });

  it('handles Chinese with multiple adjacent BLANKs', () => {
    expect(
      parseBlanks(
        '<p>BLANK BLANK<ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby></p>'
      )
    ).toEqual([
      [
        { type: 'blank', value: 0 },
        { type: 'text', value: ' ' },
        { type: 'blank', value: 1 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '好', pinyin: 'hǎo' }
        }
      ]
    ]);
  });

  it('handles Chinese with BLANK at the end', () => {
    expect(
      parseBlanks(
        '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>BLANK</p>'
      )
    ).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '你好', pinyin: 'nǐ hǎo' }
        },
        { type: 'blank', value: 0 }
      ]
    ]);
  });

  it('handles Chinese with spaces around BLANK', () => {
    expect(
      parseBlanks(
        '<p><ruby>你<rp>(</rp><rt>nǐ</rt><rp>)</rp></ruby> BLANK <ruby>我<rp>(</rp><rt>wǒ</rt><rp>)</rp></ruby></p>'
      )
    ).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '你', pinyin: 'nǐ' }
        },
        { type: 'text', value: ' ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: ' ' },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '我', pinyin: 'wǒ' }
        }
      ]
    ]);
  });

  it('handles Latin text adjacent to BLANK', () => {
    expect(
      parseBlanks(
        '<p><ruby>我<rp>(</rp><rt>wǒ</rt><rp>)</rp></ruby> BLANK UI <ruby>设计师<rp>(</rp><rt>shè jì shī</rt><rp>)</rp></ruby> 。</p>'
      )
    ).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '我', pinyin: 'wǒ' }
        },
        { type: 'text', value: ' ' },
        { type: 'blank', value: 0 },
        { type: 'text', value: ' UI ' },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '设计师', pinyin: 'shè jì shī' }
        },
        { type: 'text', value: ' 。' }
      ]
    ]);
  });

  it('handles Chinese with multiple separate groups', () => {
    expect(
      parseBlanks(
        '<p>BLANK<ruby>好<rp>(</rp><rt>hǎo</rt><rp>)</rp></ruby>，<ruby>我是王华<rp>(</rp><rt>wǒ shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby>BLANK<ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby>？</p>'
      )
    ).toEqual([
      [
        { type: 'blank', value: 0 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '好', pinyin: 'hǎo' }
        },
        { type: 'text', value: '，' },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '我是王华', pinyin: 'wǒ shì Wang Hua' }
        },
        { type: 'text', value: '，' },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '请问你', pinyin: 'qǐng wèn nǐ' }
        },
        { type: 'blank', value: 1 },
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '什么名字', pinyin: 'shén me míng zi' }
        },
        { type: 'text', value: '？' }
      ]
    ]);
  });

  it('handles Chinese ruby with trailing punctuation', () => {
    expect(
      parseBlanks(
        '<p><ruby>你是刘明吗<rp>(</rp><rt>nǐ shì Liu Ming ma</rt><rp>)</rp></ruby>？</p>'
      )
    ).toEqual([
      [
        {
          type: 'hanzi-pinyin',
          value: { hanzi: '你是刘明吗', pinyin: 'nǐ shì Liu Ming ma' }
        },
        { type: 'text', value: '？' }
      ]
    ]);
  });
});

describe('parseHanziPinyinPairs', () => {
  it('parseHanziPinyinPairs returns array with one pair for well-formed input', () => {
    const result = parseHanziPinyinPairs('你好 (nǐ hǎo)');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('parseHanziPinyinPairs handles parentheses without a space', () => {
    const result = parseHanziPinyinPairs('你好(nǐ hǎo)');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('parseHanziPinyinPairs returns empty array for non-matching input', () => {
    expect(parseHanziPinyinPairs('hello')).toEqual([]);
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
