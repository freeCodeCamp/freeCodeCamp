import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import isArray from 'lodash/isArray';
import parseFixture from '../__fixtures__/parse-fixture';

import addSeed from './add-seed';

describe('add-seed plugin', () => {
  let adjacentKeysAST,
    withSeedKeysAST,
    cCodeAST,
    withErmsOnOneLineAST,
    withEmptyContentsAST,
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
    cCodeAST = await parseFixture('with-c-code.md');
    withErmsOnOneLineAST = await parseFixture(
      'with-editable-markers-on-one-line.md'
    );
    withEmptyContentsAST = await parseFixture('with-empty-contents.md');
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
    expect.assertions(11);
    plugin(simpleAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const testObject = challengeFiles.find(x => x.ext === 'js');
    expect(Object.keys(testObject).length).toEqual(5);
    expect(testObject).toHaveProperty('ext');
    expect(typeof testObject['ext']).toBe('string');
    expect(testObject).toHaveProperty('name');
    expect(typeof testObject['name']).toBe('string');
    expect(testObject).toHaveProperty('contents');
    expect(typeof testObject['contents']).toBe('string');
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

  it('throws an error if there is any code of an unsupported language', () => {
    expect.assertions(1);
    expect(() => plugin(cCodeAST, file)).toThrow(
      "On line 18 'c' is not a supported language.\n" +
        ' Please use one of js, css, html, jsx, ts, tsx or py'
    );
  });

  it('throws an error (with line number) if 2 markers appear on 1 line', () => {
    expect.assertions(1);
    expect(() => plugin(withErmsOnOneLineAST, file)).toThrow(
      `Line 53 has two markers. Each line should only have one.`
    );
  });

  it('handles jsx', () => {
    expect.assertions(1);
    plugin(withSeedKeysJSXAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const indexjsx = challengeFiles.find(x => x.ext === 'jsx');

    expect(indexjsx.contents).toBe(`var x = 'y';

/* comment */
const Button = () => {
  return <button> {/* another comment! */} text </button>;
};`);
  });

  it('handles json', () => {
    expect.assertions(1);
    plugin(simpleAST, file);
    const {
      data: { challengeFiles }
    } = file;
    const tsconfigjsonc = challengeFiles.find(x => x.ext === 'json');

    expect(tsconfigjsonc.contents).toBe(
      `{\n  "compilerOptions": {\n    "target": "ES2020"\n  }\n}`
    );
  });

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
