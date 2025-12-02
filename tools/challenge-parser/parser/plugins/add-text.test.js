import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from '../__fixtures__/parse-fixture';
import addText from './add-text';

describe('add-text', () => {
  let realisticAST,
    mockAST,
    withSubSectionAST,
    withNestedInstructionsAST,
    withChineseAST;
  const descriptionId = 'description';
  const instructionsId = 'instructions';
  const missingId = 'missing';
  let file = { data: {} };

  beforeAll(async () => {
    realisticAST = await parseFixture('realistic.md');
    mockAST = await parseFixture('simple.md');
    withSubSectionAST = await parseFixture('with-subsection.md');
    withNestedInstructionsAST = await parseFixture(
      'with-nested-instructions.md'
    );
    withChineseAST = await parseFixture('with-chinese-mcq.md');
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('should return a function', () => {
    const plugin = addText(['section']);

    expect(typeof plugin).toEqual('function');
  });

  it('throws when no argument or the incorrect argument is supplied', () => {
    expect.assertions(5);
    const expectedError = 'addText must have an array of section ids supplied';
    expect(() => {
      addText();
    }).toThrow(expectedError);
    expect(() => {
      addText('');
    }).toThrow(expectedError);
    expect(() => {
      addText({});
    }).toThrow(expectedError);
    expect(() => {
      addText(1);
    }).toThrow(expectedError);
    expect(() => {
      addText([]);
    }).toThrow(expectedError);
  });

  it('throws when there is a sub-section in one of the sections', () => {
    const plugin = addText([instructionsId, descriptionId]);

    expect(() => {
      plugin(withSubSectionAST, file);
    }).toThrow(
      'The --description-- section should not have any subsections. Found subsection --not-allowed--'
    );
  });

  it('should add a string relating to the section id to `file.data`', () => {
    const plugin = addText([descriptionId]);
    plugin(mockAST, file);
    const expectedText = 'Paragraph 1';
    expect(file.data[descriptionId]).toEqual(
      expect.stringContaining(expectedText)
    );
  });

  it('should not add a string relating a different id to `file.data`', () => {
    const plugin = addText([descriptionId]);
    plugin(mockAST, file);
    // the following text is in the AST, but is associated with a different
    // marker (instructions)
    const expectedText = 'Paragraph 0';
    expect(file.data[descriptionId]).not.toEqual(
      expect.stringContaining(expectedText)
    );
  });

  // TODO: do we need to add the ids to the section tags? Why not just have
  // <section>?
  it('should embed the text in sections with appropriate ids', () => {
    const plugin = addText([descriptionId, instructionsId]);
    plugin(mockAST, file);
    // the following text is in the AST, but is associated with a different
    // marker (instructions)
    const descriptionSectionText = `<section id="description">
<p>Paragraph 1</p>
<pre><code class="language-html">code example
</code></pre>
</section>`;
    expect(file.data[descriptionId]).toEqual(descriptionSectionText);
    const instructionsSectionText = `<section id="instructions">
<p>Paragraph 0</p>
<pre><code class="language-html">code example 0
</code></pre>
</section>`;
    expect(file.data[instructionsId]).toBe(instructionsSectionText);
  });

  it('should add nothing if a section id does not appear in the md', () => {
    const plugin = addText([missingId]);
    plugin(mockAST, file);
    expect(file.data[descriptionId]).toBeUndefined();
  });

  it('should not escape html', () => {
    const plugin = addText([descriptionId]);
    plugin(realisticAST, file);
    const expected = `last <code>h2</code> element`;
    expect(file.data[descriptionId]).toEqual(expect.stringContaining(expected));
  });

  it('should preserve nested html', () => {
    const plugin = addText([descriptionId]);
    plugin(realisticAST, file);
    const expected = `<blockquote>
  <p>Some text in a blockquote</p>
  <p>
    Some text in a blockquote, with <code>code</code>
  </p>
</blockquote>`;
    expect(file.data[descriptionId]).toEqual(expect.stringContaining(expected));
  });

  it('should not add paragraphs when html elements are separated by whitespace', () => {
    const plugin = addText([instructionsId]);
    plugin(realisticAST, file);
    const expectedText1 = `<code>code</code> <tag>with more after a space</tag>`;
    const expectedText2 = `another pair of <strong>elements</strong> <em>with a space</em>`;
    expect(file.data[instructionsId]).toEqual(
      expect.stringContaining(expectedText1)
    );
    expect(file.data[instructionsId]).toEqual(
      expect.stringContaining(expectedText2)
    );
  });

  it('should ignore --instructions-- markers that are not at depth 1', () => {
    const plugin = addText([instructionsId]);
    plugin(withNestedInstructionsAST, file);

    // Should only include the depth 1 instructions, not the nested ones
    const expectedText = `<section id="instructions">
<p>These are the main instructions at depth 1.</p>
<pre><code class="language-html">&#x3C;div>Main instructions code&#x3C;/div>
</code></pre>
</section>`;

    expect(file.data[instructionsId]).toEqual(expectedText);
  });

  it('should have an output to match the snapshot', () => {
    const plugin = addText([descriptionId, instructionsId]);
    plugin(mockAST, file);
    expect(file.data).toMatchSnapshot();
  });

  it('should render Chinese inline code as ruby when lang is zh-CN', () => {
    const plugin = addText(['instructions', 'explanation']);

    const zhFile = { data: { lang: 'zh-CN' } };
    plugin(withChineseAST, zhFile);

    expect(zhFile.data.instructions).toBe(
      '<section id="instructions">\n<p>Instructions containing <ruby>汉字<rp>(</rp><rt>hàn zì</rt><rp>)</rp></ruby>.</p>\n</section>'
    );
    expect(zhFile.data.explanation).toBe(
      '<section id="explanation">\n<p><ruby>我是<rp>(</rp><rt>wǒ shì</rt><rp>)</rp></ruby> Web <ruby>开发者<rp>(</rp><rt>kāi fā zhě</rt><rp>)</rp></ruby>。 – I am a web developer.</p>\n<p><ruby>你好<rp>(</rp><rt>nǐ hǎo</rt><rp>)</rp></ruby>，<ruby>我是王华<rp>(</rp><rt>wǒ shì Wang Hua</rt><rp>)</rp></ruby>，<ruby>请问你叫什么名字<rp>(</rp><rt>qǐng wèn nǐ jiào shén me míng zi</rt><rp>)</rp></ruby>？ – Hello, I am Wang Hua, may I ask what your name is?</p>\n</section>'
    );
  });
});
