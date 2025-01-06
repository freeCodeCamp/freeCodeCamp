const parseFixture = require('../../__fixtures__/parse-fixture');
const { getParagraphContent } = require('./get-paragraph-content');

describe('getParagraphContent', () => {
  let simpleAST;

  beforeAll(async () => {
    simpleAST = await parseFixture('simple.md');
  });

  it('should return the content of a paragraph node', () => {
    const paragraphNode = simpleAST.children[1];
    expect(paragraphNode.type).toBe('paragraph');
    expect(getParagraphContent(paragraphNode)).toEqual('Paragraph 1');
  });

  it('should return null if the node is not a paragraph', () => {
    const headingNode = simpleAST.children[0];
    expect(headingNode.type).toBe('heading');
    expect(getParagraphContent(headingNode)).toBeNull();
  });
});
