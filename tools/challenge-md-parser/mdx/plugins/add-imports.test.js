/* global describe it expect */
const path = require('path');
const cloneDeep = require('lodash/cloneDeep');
const toVfile = require('to-vfile');
const selectAll = require('unist-util-select').selectAll;

const addImports = require('./add-imports');
const originalImportsAST = require('../__fixtures__/ast-imports.json');
const originalSimpleAST = require('../__fixtures__/ast-simple.json');
const originalMarkerAST = require('../__fixtures__/ast-marker-imports.json');

describe('add-imports', () => {
  let importsAST;
  let simpleAST;
  let markerAST;
  let correctFile;
  let incorrectFile;

  beforeEach(() => {
    importsAST = cloneDeep(originalImportsAST);
    simpleAST = cloneDeep(originalSimpleAST);
    markerAST = cloneDeep(originalMarkerAST);
    correctFile = toVfile(
      path.resolve(__dirname, '../__fixtures__/with-imports.mdx')
    );
    incorrectFile = toVfile(
      path.resolve(__dirname, '../__fixtures__/incorrect-path/with-imports.mdx')
    );
  });

  it('should return a function', () => {
    const plugin = addImports();

    expect(typeof plugin).toEqual('function');
  });

  it('should fail when the imported file is null', done => {
    const plugin = addImports();
    const next = err => {
      if (err) {
        done();
      } else {
        done('An error should have been thrown by addImports');
      }
    };
    plugin(importsAST, null, next);
  });

  it('should proceed when the imported file exists', done => {
    const plugin = addImports();
    plugin(importsAST, correctFile, done);
  });

  it('should fail when the imported file cannot be found', done => {
    const plugin = addImports();

    // we have to rely on the next callback, because that is how you get error
    // messages out of transformers
    const next = err => {
      if (err) {
        done();
      } else {
        done('An error should have been thrown by addImports');
      }
    };
    plugin(importsAST, incorrectFile, next);
  });

  it('should modify the tree when there are imports', done => {
    expect.assertions(1);
    const plugin = addImports();
    const next = err => {
      if (err) {
        done(err);
      } else {
        expect(importsAST).not.toEqual(originalImportsAST);
        done();
      }
    };
    plugin(importsAST, correctFile, next);
  });

  it('should NOT modify the tree when there are NO imports', done => {
    expect.assertions(1);
    const plugin = addImports();
    const next = err => {
      if (err) {
        done(err);
      } else {
        expect(simpleAST).toEqual(originalSimpleAST);
        done();
      }
    };
    plugin(simpleAST, correctFile, next);
  });

  it('should remove all import statements', done => {
    expect.assertions(2);
    const plugin = addImports();
    const importNodes = selectAll('import', importsAST);

    expect(importNodes.length).toBe(1);

    const next = err => {
      if (err) {
        done(err);
      } else {
        const importNodes = selectAll('import', importsAST);
        expect(importNodes.length).toBe(0);
        done();
      }
    };
    plugin(importsAST, correctFile, next);
  });

  it('should remove all matching <Components>', done => {
    expect.assertions(2);
    const plugin = addImports();
    const jsxNodes = selectAll('jsx', importsAST);

    // one matching component and two other jsx nodes
    expect(jsxNodes.length).toBe(3);

    const next = err => {
      if (err) {
        done(err);
      } else {
        const jsxNodes = selectAll('jsx', importsAST);
        expect(jsxNodes.length).toBe(2);
        done();
      }
    };
    plugin(importsAST, correctFile, next);
  });

  it('should replace the <Components> with the imported content', done => {
    // checks the contents of script.mdx are there after the import step
    expect.assertions(2);
    const plugin = addImports();

    const next = err => {
      if (err) {
        done(err);
      } else {
        const jsNodes = selectAll('code[lang=js]', importsAST);
        expect(jsNodes.length).toBe(4);

        const codeValues = jsNodes.map(({ value }) => value);
        expect(codeValues).toEqual(
          expect.arrayContaining([
            `for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // imported from script.mdx
}`
          ])
        );
        done();
      }
    };
    plugin(importsAST, correctFile, next);
  });

  it('should reject imported files with editable region markers', done => {
    const plugin = addImports();
    const next = err => {
      if (err) {
        done();
      } else {
        done('An error should have been thrown by addImports');
      }
    };
    plugin(markerAST, correctFile, next);
  });

  it('should have an output to match the snapshot', done => {
    const plugin = addImports();
    const next = err => {
      if (err) {
        done(err);
      } else {
        expect(importsAST).toMatchSnapshot();
        done();
      }
    };
    plugin(importsAST, correctFile, next);
  });
});
