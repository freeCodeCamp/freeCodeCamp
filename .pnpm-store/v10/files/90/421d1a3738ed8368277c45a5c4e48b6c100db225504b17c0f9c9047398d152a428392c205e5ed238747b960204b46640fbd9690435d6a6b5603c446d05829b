import getParser from '../../src/parser/index.js';
import inspect from '../../src/stringifier/inspect.js';
import { seedBlock } from '../../src/util.js';

test('multiple lines', () => {
  const source = `
  /**
   * Description may go\r\r
   * over few lines followed by @tags\r
   * @param {string} name name parameter
   * @param {any} value value of any type
   */`.slice(1);

  const parsed = getParser()(source);
  const expected = `
|line|start|delimiter|postDelimiter|tag   |postTag|name |postName|type    |postType|description                     |end|CR |
|----|-----|---------|-------------|------|-------|-----|--------|--------|--------|--------------------------------|---|---|
|   0|{2}  |/**      |             |      |       |     |        |        |        |                                |   |   |
|   1|{3}  |*        |{1}          |      |       |     |        |        |        |Description may go              |   |{2}|
|   2|{3}  |*        |{1}          |      |       |     |        |        |        |over few lines followed by @tags|   |{1}|
|   3|{3}  |*        |{1}          |@param|{1}    |name |{1}     |{string}|{1}     |name parameter                  |   |   |
|   4|{3}  |*        |{1}          |@param|{1}    |value|{1}     |{any}   |{1}     |value of any type               |   |   |
|   5|{3}  |         |             |      |       |     |        |        |        |                                |*/ |   |`;

  expect(inspect(parsed[0])).toEqual(expected.slice(1));
});

test('single line', () => {
  const source = '/** @param {string} name name parameter */';
  const parsed = getParser({ startLine: 12345 })(source);
  const expected = `
|line |start|delimiter|postDelimiter|tag   |postTag|name|postName|type    |postType|description    |end|CR|
|-----|-----|---------|-------------|------|-------|----|--------|--------|--------|---------------|---|--|
|12345|     |/**      |{1}          |@param|{1}    |name|{1}     |{string}|{1}     |name parameter |*/ |  |`;

  expect(inspect(parsed[0])).toEqual(expected.slice(1));
});

test('empty', () => {
  const expected = '';

  expect(inspect(seedBlock())).toEqual(expected.slice(1));
});
