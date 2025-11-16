import { describe, it, expect } from 'vitest';
import { createMdastToHtml, parseHanziPinyinPairs } from './i18n-stringify';

describe('parseHanziPinyinPairs', () => {
  it('should parse single hanzi-pinyin pair', () => {
    const result = parseHanziPinyinPairs('你好 (nǐ hǎo)');
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('should parse multiple hanzi-pinyin pairs', () => {
    const result = parseHanziPinyinPairs(
      '你好 (nǐ hǎo)，我是王华 (wǒ shì Wang Hua)'
    );
    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
    expect(result[1]).toMatchObject({
      hanzi: '我是王华',
      pinyin: 'wǒ shì Wang Hua'
    });
  });

  it('should handle pairs with BLANK tokens', () => {
    const result = parseHanziPinyinPairs('请问BLANK (qǐng wèn BLANK)');
    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      hanzi: '请问BLANK',
      pinyin: 'qǐng wèn BLANK'
    });
  });

  it('should return empty array for text without pairs', () => {
    const result = parseHanziPinyinPairs('你好');
    expect(result).toHaveLength(0);
  });
});

describe('createMdastToHtml', () => {
  it('should render Chinese inline code as ruby when lang is zh-CN', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: 'This is ' },
          { type: 'inlineCode', value: '请问 (qǐng wèn)' },
          { type: 'text', value: '.' }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p>This is <ruby>请问<rp>(</rp><rt>qǐng wèn</rt><rp>)</rp></ruby>.</p>'
    );
  });

  it('should render Chinese inline code as ruby with or without space before parenthesis', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodesWithSpace = [
      {
        type: 'paragraph',
        children: [{ type: 'inlineCode', value: '你好 (nǐ hǎo)' }]
      }
    ];
    const nodesWithoutSpace = [
      {
        type: 'paragraph',
        children: [{ type: 'inlineCode', value: '你好(nǐ hǎo)' }]
      }
    ];
    const expected =
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby></p>';
    expect(toHtml(nodesWithSpace)).toBe(expected);
    expect(toHtml(nodesWithoutSpace)).toBe(expected);
  });

  it('should handle multiple Chinese inline codes in one paragraph', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          { type: 'inlineCode', value: '你好 (nǐ hǎo)' },
          { type: 'text', value: ' and ' },
          { type: 'inlineCode', value: '再见 (zài jiàn)' }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby> and <ruby>再见<rp>(</rp><rt>zài jiàn</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should handle multiple hanzi-pinyin pairs inside a single inline code', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value: '你好 (nǐ hǎo)，我是王华 (wǒ shì Wang Hua)'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>我是王华<rp>(</rp><rt>wǒ shì Wang Hua</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should handle BLANK between hanzi-pinyin pairs (natural authoring)', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value: '请问你 (qǐng wèn nǐ) BLANK 什么名字 (shén me míng zi)'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby>BLANK<ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should handle multiple pairs with trailing punctuation', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value: '你好 (nǐ hǎo)，我是王华 (wǒ shì Wang Hua)？'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>我是王华<rp>(</rp><rt>wǒ shì Wang Hua</rt><rp>)</rp></ruby>？</p>'
    );
  });

  it('should handle complex sentence with multiple pairs, BLANK, and punctuation', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value:
              '你好 (nǐ hǎo)，我是王华 (wǒ shì Wang Hua)，请问你 (qǐng wèn nǐ) BLANK 什么名字 (shén me míng zi)？'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>我是王华<rp>(</rp><rt>wǒ shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby>BLANK<ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby>？</p>'
    );
  });

  it('should fallback to code element if pattern does not match', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          { type: 'inlineCode', value: '你好' },
          { type: 'text', value: ' and ' },
          { type: 'inlineCode', value: 'nǐ hǎo' }
        ]
      }
    ];
    const actual = toHtml(nodes, { lang: 'zh-CN' });
    expect(actual).toBe('<p><code>你好</code> and <code>nǐ hǎo</code></p>');
  });

  it('should render as regular code when lang is not zh-CN', () => {
    const toHtml = createMdastToHtml('zh');
    const nodes = [
      {
        type: 'paragraph',
        children: [{ type: 'inlineCode', value: '请问 (qǐng wèn)' }]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe('<p><code>请问 (qǐng wèn)</code></p>');
  });
});
