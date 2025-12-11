import { describe, it, expect } from 'vitest';
import { createMdastToHtml, parseHanziPinyinPairs } from './i18n-stringify';

describe('parseHanziPinyinPairs', () => {
  it('should parse single hanzi-pinyin pair', () => {
    const withSpaceSeparator = parseHanziPinyinPairs('你好 (nǐ hǎo)');

    expect(withSpaceSeparator).toHaveLength(1);
    expect(withSpaceSeparator[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });

    const withoutSpaceSeparator = parseHanziPinyinPairs('你好(nǐ hǎo)');

    expect(withoutSpaceSeparator).toHaveLength(1);
    expect(withoutSpaceSeparator[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
  });

  it('should parse multiple hanzi-pinyin pairs', () => {
    const withSpaceSeparator = parseHanziPinyinPairs(
      '你好 (nǐ hǎo)，我是王华 (wǒ shì Wang Hua)'
    );
    expect(withSpaceSeparator).toHaveLength(2);
    expect(withSpaceSeparator[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
    expect(withSpaceSeparator[1]).toMatchObject({
      hanzi: '我是王华',
      pinyin: 'wǒ shì Wang Hua'
    });

    const withoutSpaceSeparator = parseHanziPinyinPairs(
      '你好(nǐ hǎo)，我是王华(wǒ shì Wang Hua)'
    );
    expect(withoutSpaceSeparator).toHaveLength(2);
    expect(withoutSpaceSeparator[0]).toMatchObject({
      hanzi: '你好',
      pinyin: 'nǐ hǎo'
    });
    expect(withoutSpaceSeparator[1]).toMatchObject({
      hanzi: '我是王华',
      pinyin: 'wǒ shì Wang Hua'
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

  it('should render BLANK tokens and punctuation marks as plain text', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const withoutSpacesAroundBlanks = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value:
              '你好 (nǐ hǎo)，BLANK是王华 (shì Wang Hua)，请问你 (qǐng wèn nǐ)BLANK什么名字 (shén me míng zi)？'
          }
        ]
      }
    ];
    expect(toHtml(withoutSpacesAroundBlanks)).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，BLANK<ruby>是王华<rp>(</rp><rt>shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby>BLANK<ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby>？</p>'
    );

    const withSpacesAroundBlanks = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value:
              '你好 (nǐ hǎo)， BLANK 是王华 (shì Wang Hua)，请问你 (qǐng wèn nǐ) BLANK 什么名字 (shén me míng zi)？'
          }
        ]
      }
    ];
    expect(toHtml(withSpacesAroundBlanks)).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>， BLANK <ruby>是王华<rp>(</rp><rt>shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你<rp>(</rp><rt>qǐng wèn nǐ</rt><rp>)</rp></ruby> BLANK <ruby>什么名字<rp>(</rp><rt>shén me míng zi</rt><rp>)</rp></ruby>？</p>'
    );
  });

  it('should render Latin words as plain text while applying ruby to hanzi-pinyin pairs', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value: '我是 (wǒ shì) UI 设计师 (shè jì shī)'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>我是<rp>(</rp><rt>wǒ shì</rt><rp>)</rp></ruby> UI <ruby>设计师<rp>(</rp><rt>shè jì shī</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should handle BLANK token and Latin word mix', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [
          {
            type: 'inlineCode',
            value: '我 (wǒ) BLANK UI 设计师 (shè jì shī)'
          }
        ]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p><ruby>我<rp>(</rp><rt>wǒ</rt><rp>)</rp></ruby> BLANK UI <ruby>设计师<rp>(</rp><rt>shè jì shī</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should render multiple adjacent BLANK tokens in Chinese sentence', () => {
    const toHtml = createMdastToHtml('zh-CN');
    const nodes = [
      {
        type: 'paragraph',
        children: [{ type: 'inlineCode', value: 'BLANK BLANK，你好 (nǐ hǎo)' }]
      }
    ];
    const actual = toHtml(nodes);
    expect(actual).toBe(
      '<p>BLANK BLANK，<ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby></p>'
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

  it('should render as regular code when lang is not defined', () => {
    const toHtml = createMdastToHtml();
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
