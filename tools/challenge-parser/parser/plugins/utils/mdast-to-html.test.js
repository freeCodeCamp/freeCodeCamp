import { describe, beforeAll, it, expect } from 'vitest';
import parseFixture from '../../__fixtures__/parse-fixture';
import mdastToHTML from './mdast-to-html';

describe('mdast-to-html', () => {
  let mdastMixedNodes, singleNode, inlineHTMLNodes;

  beforeAll(async () => {
    const mdastMixedAST = await parseFixture('mixed-nodes.md');
    const mdastInlineHTMLAST = await parseFixture('inline-html.md');
    mdastMixedNodes = mdastMixedAST.children;
    singleNode = mdastMixedAST.children[0];
    inlineHTMLNodes = mdastInlineHTMLAST.children;
  });

  it('should return a string', () => {
    expect.assertions(1);
    const actual = mdastToHTML(mdastMixedNodes);
    expect(typeof actual).toBe('string');
  });

  it('throws if it is not passed an array', () => {
    expect.assertions(1);
    expect(() => mdastToHTML(singleNode)).toThrow(
      'mdastToHTML expects an array argument'
    );
  });

  it('should not escape html', () => {
    const actual = mdastToHTML(mdastMixedNodes);
    expect(actual).toBe(`<p>Paragraph 1</p>
<p>Third <em>hint</em> with <code>code</code> and <code>inline code</code></p>`);
  });

  it('should put inline html inside the enclosing paragraph', () => {
    const actual = mdastToHTML(inlineHTMLNodes);
    expect(actual).toBe(
      '<p><code> code in </code> code tags <em>emphasis</em> followed' +
        ' by <div><span>some nested html </span></div></p>'
    );
  });

  it('should render Chinese inline code as ruby when lang is zh-CN', () => {
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
    const actual = mdastToHTML(nodes, { lang: 'zh-CN' });
    expect(actual).toBe(
      '<p>This is <ruby>请问<rp>(</rp><rt>qǐng wèn</rt><rp>)</rp></ruby>.</p>'
    );
  });

  it('should render Chinese inline code as ruby with or without space before parenthesis', () => {
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
    expect(mdastToHTML(nodesWithSpace, { lang: 'zh-CN' })).toBe(expected);
    expect(mdastToHTML(nodesWithoutSpace, { lang: 'zh-CN' })).toBe(expected);
  });

  it('should handle multiple Chinese inline codes in one paragraph', () => {
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
    const actual = mdastToHTML(nodes, { lang: 'zh-CN' });
    expect(actual).toBe(
      '<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby> and <ruby>再见<rp>(</rp><rt>zài jiàn</rt><rp>)</rp></ruby></p>'
    );
  });

  it('should fallback to code element if pattern does not match', () => {
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
    const actual = mdastToHTML(nodes, { lang: 'zh-CN' });
    expect(actual).toBe('<p><code>你好</code> and <code>nǐ hǎo</code></p>');
  });

  it('should render as regular code when lang is not zh-CN', () => {
    const nodes = [
      {
        type: 'paragraph',
        children: [{ type: 'inlineCode', value: '请问 (qǐng wèn)' }]
      }
    ];
    const actual = mdastToHTML(nodes);
    expect(actual).toBe('<p><code>请问 (qǐng wèn)</code></p>');
  });
});
