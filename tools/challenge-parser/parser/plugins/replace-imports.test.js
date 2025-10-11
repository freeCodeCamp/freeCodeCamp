import { resolve } from 'path';
import { describe, beforeAll, beforeEach, it, expect, vi } from 'vitest';
import cloneDeep from 'lodash/cloneDeep';
import toVfile from 'to-vfile';
import { selectAll } from 'unist-util-select';
import parseFixture from '../__fixtures__/parse-fixture';

import addImports from './replace-imports';

describe('replace-imports', () => {
  let importsAST,
    importsTwoAST,
    importsExtraAST,
    simpleAST,
    markerAST,
    correctFile,
    incorrectFile;

  let originalImportsAST,
    originalImportsTwoAST,
    originalImportsExtraAST,
    originalMarkerAST,
    originalSimpleAST;

  beforeAll(async () => {
    originalImportsAST = await parseFixture('with-imports.md');
    originalImportsTwoAST = await parseFixture('with-imports-two.md');
    originalImportsExtraAST = await parseFixture('with-imports-extra.md');
    originalSimpleAST = await parseFixture('simple.md');
    originalMarkerAST = await parseFixture('with-marker-imports.md');
  });

  beforeEach(() => {
    importsAST = cloneDeep(originalImportsAST);
    importsTwoAST = cloneDeep(originalImportsTwoAST);
    importsExtraAST = cloneDeep(originalImportsExtraAST);
    simpleAST = cloneDeep(originalSimpleAST);
    markerAST = cloneDeep(originalMarkerAST);
    correctFile = toVfile(
      resolve(__dirname, '../__fixtures__/with-imports.md')
    );
    incorrectFile = toVfile(
      resolve(__dirname, '../__fixtures__/incorrect-path/with-imports.md')
    );
  });

  it('should return a function', () => {
    expect.assertions(1);
    const plugin = addImports();

    expect(typeof plugin).toEqual('function');
  });

  it('should fail when the imported file is null', () => {
    const plugin = addImports();
    const nextSpy = vi.fn();

    plugin(importsAST, null, nextSpy);
    expect(nextSpy).toHaveBeenCalledWith(
      'replace-imports must be passed a file'
    );
  });

  it('should proceed when the imported file exists', async () => {
    const plugin = addImports();

    await expect(
      new Promise(resolve => {
        plugin(importsAST, correctFile, resolve);
      })
    ).resolves.toBeUndefined();
  });

  it('should fail when the imported file cannot be found', async () => {
    expect.assertions(2);
    console.error = vi.fn();
    const plugin = addImports();

    await expect(
      new Promise((resolve, reject) => {
        plugin(importsAST, incorrectFile, err => {
          if (err) {
            expect(console.error).toHaveBeenCalledTimes(2);
            resolve();
          } else {
            reject('An error should have been thrown by addImports');
          }
        });
      })
    ).resolves.toBeUndefined();
  });

  it('should modify the tree when there are imports', async () => {
    expect.assertions(1);
    const plugin = addImports();

    await new Promise(resolve => {
      plugin(importsAST, correctFile, resolve);
    });

    expect(importsAST).not.toEqual(originalImportsAST);
  });

  it('should NOT modify the tree when there are NO imports', async () => {
    expect.assertions(1);
    const plugin = addImports();

    await new Promise(resolve => {
      plugin(simpleAST, correctFile, resolve);
    });

    expect(simpleAST).toEqual(originalSimpleAST);
  });

  it('should remove all import statements', async () => {
    expect.assertions(2);
    const selector = 'leafDirective[name=import]';
    const plugin = addImports();
    const importNodes = selectAll(selector, importsAST);

    expect(importNodes.length).toBe(1);

    await new Promise(resolve => {
      plugin(importsAST, correctFile, resolve);
    });

    const importNodesAfter = selectAll(selector, importsAST);
    expect(importNodesAfter.length).toBe(0);
  });

  it('should not remove an ::import without the required attributes', async () => {
    expect.assertions(2);
    const selector = 'leafDirective[name=import]';
    const plugin = addImports();
    const importNodes = selectAll(selector, importsExtraAST);

    expect(importNodes.length).toBe(3);

    await new Promise(resolve => {
      plugin(importsExtraAST, correctFile, resolve);
    });

    const importNodesAfter = selectAll(selector, importsExtraAST);
    expect(importNodesAfter.length).toBe(1);
  });

  it('should remove all matching ::use statements', async () => {
    expect.assertions(2);
    const selector = 'leafDirective[name=use]';
    const plugin = addImports();
    const components = selectAll(selector, importsAST);

    // one matching component and two other jsx nodes
    expect(components.length).toBe(1);

    await new Promise(resolve => {
      plugin(importsAST, correctFile, resolve);
    });

    const componentsAfter = selectAll(selector, importsAST);
    expect(componentsAfter.length).toBe(0);
  });

  it('should replace the ::use statement with the imported content', async () => {
    // checks the contents of script.md are there after the import step
    expect.assertions(2);
    const plugin = addImports();

    await new Promise(resolve => {
      plugin(importsAST, correctFile, resolve);
    });

    const jsNodes = selectAll('code[lang=js]', importsAST);
    expect(jsNodes.length).toBe(4);

    const codeValues = jsNodes.map(({ value }) => value);
    expect(codeValues).toEqual(
      expect.arrayContaining([
        `for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // imported from script.md
}`
      ])
    );
  });

  it('should handle multiple import statements', async () => {
    // checks the contents of script.md are there after the import step
    expect.assertions(4);
    const plugin = addImports();

    await new Promise(resolve => {
      plugin(importsTwoAST, correctFile, resolve);
    });

    const jsNodes = selectAll('code[lang=js]', importsTwoAST);
    expect(jsNodes.length).toBe(4);

    const codeValues = jsNodes.map(({ value }) => value);
    expect(codeValues).toEqual(
      expect.arrayContaining([
        `for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // imported from script.md
}`
      ])
    );
    const cssNodes = selectAll('code[lang=css]', importsTwoAST);
    expect(cssNodes.length).toBe(2);

    const cssValues = cssNodes.map(({ value }) => value);
    expect(cssValues).toEqual(
      expect.arrayContaining([
        `div {
  background: red
}`
      ])
    );
  });

  it('should reject imported files with editable region markers', async () => {
    expect.assertions(2); // One inside the callback and one for the outer expect
    console.error = vi.fn();
    const plugin = addImports();

    await expect(
      new Promise((resolve, reject) => {
        plugin(markerAST, correctFile, err => {
          if (err) {
            expect(console.error).toHaveBeenCalledTimes(2);
          } else {
            reject('An error should have been thrown by addImports');
          }
          resolve();
        });
      })
    ).resolves.toBeUndefined();
  });

  it('should have an output to match the snapshot', async () => {
    const plugin = addImports();

    await new Promise(resolve => {
      plugin(importsAST, correctFile, resolve);
    });

    expect(importsAST).toMatchSnapshot();
  });
});
