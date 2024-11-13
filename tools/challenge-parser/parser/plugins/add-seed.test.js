const isArray = require('lodash/isArray');
const parseFixture = require('../__fixtures__/parse-fixture');

const addSeed = require('./add-seed');

describe('add-seed plugin', () => {
  let adjacentKeysAST,
    withSeedKeysAST,
    withBeforeAfterAST,
    cCodeAST,
    withErmsOnOneLineAST,
    withEmptyAfterAST,
    withEmptyBeforeAST,
    withEmptyContentsAST,
    withInvalidBeforeAST,
    withInvalidAfterAST,
    simpleAST,
    withEditableMarkersAST,
    withSeedKeysOrphanAST,
    withSeedKeysExtraLinesAST,
    withSeedKeysJSXAST;

  const plugin = addSeed();
  let file = { data: {} };

  beforeAll(async () => {
    adjacentKeysAST = await parseFixture('with-seed-keys-adjacent.md');
    withSeedKeysAST = await parseFixture('with-seed-keys.md');
    withBeforeAfterAST = await parseFixture('with-before-and-after.md');
    cCodeAST = await parseFixture('with-c-code.md');
    withErmsOnOneLineAST = await parseFixture(
      'with-editable-markers-on-one-line.md'
    );
    withEmptyAfterAST = await parseFixture('with-empty-after.md');
    withEmptyBeforeAST = await parseFixture('with-empty-before.md');
    withEmptyContentsAST = await parseFixture('with-empty-contents.md');
    withInvalidBeforeAST = await parseFixture('with-invalid-before.md');
    withInvalidAfterAST = await parseFixture('with-invalid-after.md');
    simpleAST = await parseFixture('simple.md');
    withEditableMarkersAST = await parseFixture('with-editable-markers.md');
    withSeedKeysOrphanAST = await parseFixture('with-seed-keys-orphan.md');
    withSeedKeysExtraLinesAST = await parseFixture(
      'with-seed-keys-extra-lines.md'
    );
    withSeedKeysJSXAST = await parseFixture('with-seed-keys-jsx.md');
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `challengeFiles` property to `file.data`', () => {
    plugin(simpleAST, file);
    expect('challengeFiles' in file.data).toBe(true);
  });

  it('ensures that the `challengeFiles` property is an array', () => {
    plugin(simpleAST, file);
    expect(isArray(file.data.challengeFiles)).toBe(true);
  });

  it('adds test objects to the challengeFiles array following a schema', () => {
    expect.assertions(15);
    plugin(simpleAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const testObject = challengeFiles.find(x => x.ext === 'js');
    expect(Object.keys(testObject).length).toEqual(7);
    expect(testObject).toHaveProperty('ext');
    expect(typeof testObject['ext']).toBe('string');
    expect(testObject).toHaveProperty('name');
    expect(typeof testObject['name']).toBe('string');
    expect(testObject).toHaveProperty('contents');
    expect(typeof testObject['contents']).toBe('string');
    expect(testObject).toHaveProperty('head');
    expect(typeof testObject['head']).toBe('string');
    expect(testObject).toHaveProperty('tail');
    expect(typeof testObject['tail']).toBe('string');
    expect(testObject).toHaveProperty('id');
    expect(typeof testObject['id']).toBe('string');
    expect(testObject).toHaveProperty('editableRegionBoundaries');
    expect(isArray(testObject['editableRegionBoundaries'])).toBe(true);
  });

  it('parses seeds without ids', () => {
    expect.assertions(3);
    plugin(simpleAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(scriptjs.contents).toBe(`var x = 'y';`);
    expect(indexhtml.contents).toBe(`<html>
  <body>
  </body>
</html>`);
    expect(stylescss.contents).toBe(`body {
  background: green;
}`);
  });

  it('removes region markers from contents', () => {
    expect.assertions(2);
    plugin(withEditableMarkersAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(stylescss.contents).not.toMatch('--fcc-editable-region--');
    expect(stylescss.editableRegionBoundaries).toEqual([1, 4]);
  });

  // TODO: can we reuse 'name'? It's always 'index', I think, which suggests
  // it could be reused as an id. Revisit this once the parser is live.
  it('parses seeds with adjacent ids, adding the id to data', () => {
    expect.assertions(3);
    plugin(withSeedKeysAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(indexhtml.id).toBe('');
    expect(stylescss.id).toBe('key-for-css');
    expect(scriptjs.id).toBe('key-for-js');
  });

  it('throws if an id is anywhere except directly before a code node', () => {
    expect.assertions(2);
    expect(() => plugin(adjacentKeysAST, file)).toThrow(
      '::id{#id}s must come before code blocks'
    );
    expect(() => plugin(withSeedKeysOrphanAST, file)).toThrow(
      '::id{#id}s must come before code blocks'
    );
  });

  it('ignores empty lines between ::id{#id}s and code blocks', () => {
    expect.assertions(1);
    plugin(withSeedKeysAST, file);
    const fileTwo = { data: {} };
    plugin(withSeedKeysExtraLinesAST, fileTwo);
    expect(file).toEqual(fileTwo);
  });

  it('gets the before-user-code for each language', () => {
    expect.assertions(3);
    plugin(withBeforeAfterAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(scriptjs.head).toBe('');
    expect(indexhtml.head).toBe(`<!-- comment -->`);
    expect(stylescss.head).toBe(`body {
  etc: ''
}`);
  });

  it('gets the after-user-code for each language', () => {
    expect.assertions(3);
    plugin(withBeforeAfterAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(scriptjs.tail).toBe(`function teardown(params) {
  // after
}`);
    expect(indexhtml.tail).toBe('');
    expect(stylescss.tail).toBe(`body {
  background: blue;
}`);
  });

  it('throws an error if there is any code of an unsupported language', () => {
    expect.assertions(1);
    expect(() => plugin(cCodeAST, file)).toThrow(
      "On line 30 'c' is not a supported language.\n" +
        ' Please use one of js, css, html, jsx or py'
    );
  });

  it('throws if there is before/after code with empty blocks', () => {
    expect.assertions(2);
    expect(() => plugin(withInvalidBeforeAST, file)).toThrow(
      'Empty code block in --before-user-code-- section'
    );
    expect(() => plugin(withInvalidAfterAST, file)).toThrow(
      'Empty code block in --after-user-code-- section'
    );
  });

  it('quietly ignores empty before sections', () => {
    expect.assertions(6);
    plugin(withEmptyBeforeAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(scriptjs.head).toBe('');
    expect(scriptjs.tail).toBe('function teardown(params) {\n  // after\n}');
    expect(indexhtml.head).toBe('');
    expect(indexhtml.tail).toBe('');
    expect(stylescss.head).toBe('');
    expect(stylescss.tail).toBe('body {\n  background: blue;\n}');
  });

  it('quietly ignores empty after sections', () => {
    expect.assertions(6);
    plugin(withEmptyAfterAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const scriptjs = challengeFiles.find(x => x.ext === 'js');
    const indexhtml = challengeFiles.find(x => x.ext === 'html');
    const stylescss = challengeFiles.find(x => x.ext === 'css');

    expect(scriptjs.head).toBe('');
    expect(scriptjs.tail).toBe('');
    expect(indexhtml.head).toBe('<!-- comment -->');
    expect(indexhtml.tail).toBe('');
    expect(stylescss.head).toBe("body {\n  etc: ''\n}");
    expect(stylescss.tail).toBe('');
  });

  it('throws an error (with line number) if 2 markers appear on 1 line', () => {
    expect.assertions(1);
    expect(() => plugin(withErmsOnOneLineAST, file)).toThrow(
      `Line 53 has two markers. Each line should only have one.`
    );
  });

  it('handles jsx', () => {
    expect.assertions(3);
    plugin(withSeedKeysJSXAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const indexjsx = challengeFiles.find(x => x.ext === 'jsx');

    expect(indexjsx.head).toBe(`function setup() {}`);
    expect(indexjsx.tail).toBe(`function teardown(params) {
  // after
}`);
    expect(indexjsx.contents).toBe(`var x = 'y';

/* comment */
const Button = () => {
  return <button> {/* another comment! */} text </button>;
};`);
  });

  /* Revisit this once we've decided what to do about multifile imports. I
  think the best approach is likely to be use the following format for .files

  it('combines all the code of a specific language into a single file', () => {

    { css: [css files],
      html: [html files],
      ...
    }

    or

     { css: {css files},
      html: {html files},
      ...
    }

    depending on what's easier to work with in graphQL

  });

  */

  it('should throw an error if a seed has no contents', () => {
    expect.assertions(1);
    expect(() => plugin(withEmptyContentsAST, file)).toThrow(
      `## --seed-contents-- must appear in # --seed-- sections`
    );
  });

  it('should have an output to match the snapshot', () => {
    plugin(simpleAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
