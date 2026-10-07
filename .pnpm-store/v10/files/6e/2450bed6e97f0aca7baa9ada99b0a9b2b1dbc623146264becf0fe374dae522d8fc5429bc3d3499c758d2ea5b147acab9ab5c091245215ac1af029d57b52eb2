import assert from 'assert';
import {
  matchSourceMappingURL,
  loadSourceMapUrl,
  loadSourceMap,
} from '../src/sourcemap';
import {NodeFS} from '@parcel/fs';
import path from 'path';

const fs = new NodeFS();

describe('loadSourceMap', () => {
  it('should not match sourceMappingURL when not at the end of the bundle', () => {
    // Code example taken from livescript.js (issue #2408 in parcel-bundler)
    // This snippet lead to JSAsset.js being mislead and incorrectly trying to
    // load (due to false-positive match) sourcemap before fix was introduced
    let code = fs.readFileSync(
      path.join(__dirname, './input/sourcemap/no-sourcemap.js'),
      'utf-8',
    );

    assert(!matchSourceMappingURL(code));
  });

  it('should match referenced-min sourceMappingURL when correctly inserted at end of the bundle', () => {
    let code = fs.readFileSync(
      path.join(__dirname, './input/sourcemap/referenced-min.js'),
      'utf-8',
    );

    assert(!!matchSourceMappingURL(code));
  });

  it('should match inline sourceMappingURL when correctly inserted at end of the bundle', () => {
    // inline source map taken from https://github.com/thlorenz/inline-source-map
    let code = fs.readFileSync(
      path.join(__dirname, './input/sourcemap/inline.js'),
      'utf-8',
    );

    assert(!!matchSourceMappingURL(code));
  });

  it('Should be able to load sourcemap data from a url reference', async () => {
    let filename = path.join(__dirname, './input/sourcemap/referenced-min.js');
    let contents = fs.readFileSync(filename, 'utf-8');

    let foundMap = await loadSourceMapUrl(fs, filename, contents);
    assert.equal(foundMap.url, 'file://referenced-min.js.map');
    assert.equal(
      foundMap.filename,
      path.join(__dirname, 'input/sourcemap/referenced-min.js.map'),
    );
    assert.deepEqual(foundMap.map, {
      version: 3,
      sources: ['./referenced.js'],
      names: ['hello', 'l', 'o', 'console', 'log'],
      mappings:
        'AAAA,SAASA,QACP,IAAIC,EAAI,QACNC,EAAI,QACNC,QAAQC,IAAIH,EAAI,IAAMC,EAAI,KAE5BF',
    });
  });

  it('Should be able to load sourcemap data from an inline url reference', async () => {
    let filename = path.join(__dirname, './input/sourcemap/inline.js');
    let contents = fs.readFileSync(filename, 'utf-8');

    let foundMap = await loadSourceMapUrl(fs, filename, contents);
    assert.equal(
      foundMap.url,
      'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmb28uanMiLCJiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1VBQ0c7Ozs7Ozs7Ozs7Ozs7O3NCQ0RIO3NCQUNBIn0=',
    );
    assert.equal(foundMap.filename, filename);
    assert.deepEqual(foundMap.map, {
      version: 3,
      file: '',
      sources: ['foo.js', 'bar.js'],
      names: [],
      mappings: ';;;;;;;;;UACG;;;;;;;;;;;;;;sBCDH;sBACA',
    });
  });

  it('Should be able to load a SourceMap instance from a file', async () => {
    let filename = path.join(__dirname, './input/sourcemap/referenced-min.js');
    let contents = fs.readFileSync(filename, 'utf-8');

    let map = await loadSourceMap(filename, contents, {
      fs,
      projectRoot: __dirname,
    });

    assert(!!map);

    let parsedMap = map.getMap();
    assert.deepEqual(parsedMap.sources, ['input/sourcemap/referenced.js']);
    assert.deepEqual(parsedMap.names, ['hello', 'l', 'o', 'console', 'log']);
    assert.deepEqual(parsedMap.mappings, [
      {
        generated: {line: 1, column: 0},
        original: {line: 1, column: 0},
        source: 0,
      },
      {
        generated: {line: 1, column: 9},
        original: {line: 1, column: 9},
        source: 0,
        name: 0,
      },
      {
        generated: {line: 1, column: 17},
        original: {line: 2, column: 2},
        source: 0,
      },
      {
        generated: {line: 1, column: 21},
        original: {line: 2, column: 6},
        source: 0,
        name: 1,
      },
      {
        generated: {line: 1, column: 23},
        original: {line: 2, column: 10},
        source: 0,
      },
      {
        generated: {line: 1, column: 31},
        original: {line: 3, column: 4},
        source: 0,
        name: 2,
      },
      {
        generated: {line: 1, column: 33},
        original: {line: 3, column: 8},
        source: 0,
      },
      {
        generated: {line: 1, column: 41},
        original: {line: 4, column: 2},
        source: 0,
        name: 3,
      },
      {
        generated: {line: 1, column: 49},
        original: {line: 4, column: 10},
        source: 0,
        name: 4,
      },
      {
        generated: {line: 1, column: 53},
        original: {line: 4, column: 14},
        source: 0,
        name: 1,
      },
      {
        generated: {line: 1, column: 55},
        original: {line: 4, column: 18},
        source: 0,
      },
      {
        generated: {line: 1, column: 59},
        original: {line: 4, column: 24},
        source: 0,
        name: 2,
      },
      {
        generated: {line: 1, column: 61},
        original: {line: 4, column: 28},
        source: 0,
      },
      {
        generated: {line: 1, column: 66},
        original: {line: 6, column: 0},
        source: 0,
        name: 0,
      },
    ]);
  });

  it('Should remap sources when using sourceRoot', async () => {
    let filename = path.join(__dirname, './input/sourcemap/referenced-min.js');
    let contents = fs.readFileSync(filename, 'utf-8');

    let map = await loadSourceMap(filename, contents, {
      fs,
      projectRoot: __dirname,
    });

    assert(!!map);

    let parsedMap = map.getMap();
    assert.deepEqual(parsedMap.sources, ['input/sourcemap/referenced.js']);
  });

  it('Should remap sources when using sourceRoot', async () => {
    let filename = path.join(__dirname, './input/sourcemap/source-root.js');
    let contents = fs.readFileSync(filename, 'utf-8');

    let map = await loadSourceMap(filename, contents, {
      fs,
      projectRoot: __dirname,
    });

    assert(!!map);

    let parsedMap = map.getMap();
    assert.deepEqual(parsedMap.sources, ['input/source.js']);
  });
});
