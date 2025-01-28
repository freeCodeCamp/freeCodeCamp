const parseFixture = require('../../__fixtures__/parse-fixture');
const mdastToHTML = require('./mdast-to-html');

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
});
