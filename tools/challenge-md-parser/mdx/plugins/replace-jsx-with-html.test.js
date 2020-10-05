/* global describe it expect */
const selectAll = require('unist-util-select').selectAll;
const cloneDeep = require('lodash/cloneDeep');
const jsxToHtml = require('./replace-jsx-with-html');

const originalAst = require('../__fixtures__/ast-with-jsx.json');
const originalJsxParagraphAst = require('../__fixtures__/ast-md-in-html.json');
const mdastToHTML = require('./utils/mdast-to-html');

describe('replace-jsx-with-html', () => {
  let astWithJsx;
  const descriptionId = 'description';
  const instructionsId = 'instructions';

  beforeEach(() => {
    astWithJsx = cloneDeep(originalAst);
  });

  it('should return a function', () => {
    const plugin = jsxToHtml(['id']);

    expect(typeof plugin).toEqual('function');
  });

  it('throws when no argument or the incorrect argument is supplied', () => {
    expect.assertions(5);
    const expectedError =
      'jsxToHtml must have an array of section ids supplied';
    expect(() => {
      jsxToHtml();
    }).toThrow(expectedError);
    expect(() => {
      jsxToHtml('');
    }).toThrow(expectedError);
    expect(() => {
      jsxToHtml({});
    }).toThrow(expectedError);
    expect(() => {
      jsxToHtml(1);
    }).toThrow(expectedError);
    expect(() => {
      jsxToHtml([]);
    }).toThrow(expectedError);
  });

  it('should replace jsx elements with html', () => {
    expect.assertions(4);
    const plugin = jsxToHtml([descriptionId, instructionsId]);
    const nodesBefore = cloneDeep(selectAll('jsx', astWithJsx));

    plugin(astWithJsx);
    const nodesAfter = selectAll('html', astWithJsx);

    expect(nodesAfter.length > 0).toBe(true);
    expect(nodesAfter.length).toEqual(nodesBefore.length);

    expect(nodesBefore).not.toEqual(nodesAfter);
    expect(nodesBefore).toEqual(
      nodesAfter.map(node => ({ ...node, type: 'jsx' }))
    );
  });

  it('should only replace jsx in the specified sections', () => {
    expect.assertions(6);
    const plugin = jsxToHtml([descriptionId]);
    const nodesBefore = cloneDeep(selectAll('jsx', astWithJsx));

    plugin(astWithJsx);
    const nodesAfter = selectAll('html', astWithJsx);
    const jsxNodesAfter = selectAll('jsx', astWithJsx);

    expect(nodesAfter.length > 0).toBe(true);
    expect(nodesAfter.length < nodesBefore.length).toBe(true);
    expect(nodesAfter.length + jsxNodesAfter.length).toBe(nodesBefore.length);

    expect(nodesBefore).not.toEqual(nodesAfter);
    expect(nodesBefore).not.toEqual(nodesAfter.concat(jsxNodesAfter));
    expect(nodesBefore).toEqual(
      nodesAfter.map(node => ({ ...node, type: 'jsx' })).concat(jsxNodesAfter)
    );
  });

  it('should re-parse jsx nodes if they contain more than a single tag', () => {
    expect.assertions(5);
    const astWithJsxParagraph = cloneDeep(originalJsxParagraphAst);
    const plugin = jsxToHtml([descriptionId]);

    const jsxNodesBefore = selectAll('jsx', astWithJsxParagraph);
    const paragraphsBefore = selectAll('paragraph', astWithJsxParagraph);

    expect(jsxNodesBefore.length).toBe(1);
    expect(paragraphsBefore.length).toBe(0);

    plugin(astWithJsxParagraph);

    const jsxNodesAfter = selectAll('jsx', astWithJsxParagraph);
    const paragraphsAfter = selectAll('paragraph', astWithJsxParagraph);

    expect(jsxNodesAfter.length).toBe(0);
    expect(paragraphsAfter.length).toBe(1);

    expect(mdastToHTML(paragraphsAfter)).toBe(
      '<p><code> code in </code> code tags <em>emphasis</em> followed by ' +
        '<div><span>some nested html </span></div></p>'
    );
  });

  it('should have an output to match the snapshot', () => {
    const plugin = jsxToHtml([instructionsId]);
    plugin(astWithJsx);
    expect(astWithJsx).toMatchSnapshot();
  });
});
