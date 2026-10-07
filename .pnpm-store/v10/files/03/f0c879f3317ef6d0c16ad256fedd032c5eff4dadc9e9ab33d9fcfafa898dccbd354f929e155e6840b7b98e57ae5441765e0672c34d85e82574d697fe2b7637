import align from '../../src/transforms/align.js';
import getParser, { Parser } from '../../src/parser/index.js';
import getStringifier, { Stringifier } from '../../src/stringifier/index.js';

let parse: Parser;
let stringify: Stringifier;

beforeEach(() => {
  parse = getParser();
  stringify = getStringifier();
});

test('multiline', () => {
  const source = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   *
* @some-tag {some-type} some-name description line 1
* @another-tag {another-type} another-name description line 1
      description line 2
      * description line 3
   */`;

  const expected = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   *
   * @some-tag    {some-type}    some-name    description line 1
   * @another-tag {another-type} another-name description line 1
                                              description line 2
   *                                          description line 3
   */`.slice(1);

  const parsed = parse(source);
  const aligned = align()(parsed[0]);
  const out = stringify(aligned);

  // console.log(inspect(aligned));
  expect(out).toBe(expected);
});

test('one-liner', () => {
  const source = `  /** @tag {type} name description */`;
  const parsed = parse(source);
  const out = stringify(align()(parsed[0]));

  expect(out).toBe(source);
});

test('same line open', () => {
  const source = `
  /** @tag {type} name description
   */`.slice(1);
  const parsed = parse(source);
  const out = stringify(align()(parsed[0]));

  expect(out).toBe(source);
});

test('same line close', () => {
  const source = `
  /**
   * @tag {type} name description */`;

  const expected = `
  /**
   * @tag {type} name description */`.slice(1);

  const parsed = parse(source);
  const aligned = align()(parsed[0]);
  const out = stringify(aligned);

  expect(out).toBe(expected);
});

test('spec source referencing', () => {
  const parsed = parse(`/** @tag {type} name Description */`);
  const block = align()(parsed[0]);
  expect(block.tags[0].source[0] === block.source[0]).toBe(true);
});

test('block source clonning', () => {
  const parsed = parse(`/** @tag {type} name Description */`);
  const block = align()(parsed[0]);
  parsed[0].source[0].tokens.description = 'test';
  expect(block.source[0].tokens.description).toBe('Description ');
});

test('ignore right whitespace', () => {
  const source = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * @private
     * @param {string} name
     * @param {any} value the value parameter
     *
     */`.slice(1);

  const expected = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * @private
     * @param   {string} name
     * @param   {any}    value the value parameter
     *
     */`.slice(1);

  const parsed = parse(source);
  const aligned = align()(parsed[0]);
  const stringified = stringify(aligned);

  expect(stringified).toEqual(expected);
});

test('collapse postDelimiter', () => {
  const source = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     *  @param {string} name the name parameter
     *     @param {any} value the value parameter
     */`.slice(1);

  const expected = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * @param {string} name  the name parameter
     * @param {any}    value the value parameter
     */`.slice(1);

  const parsed = parse(source);
  const aligned = align()(parsed[0]);
  const stringified = stringify(aligned);

  expect(stringified).toEqual(expected);
});

test('keep carriage returns', () => {
  const source = `
     /**\r\r
      * Description may go\r
      * over multiple lines followed by @tags\r
      * @param {string} name the name parameter\r
      * @param {any} value\r
      */\r`.slice(1);

  const expected = `
     /**\r\r
      * Description may go\r
      * over multiple lines followed by @tags\r
      * @param {string} name  the name parameter\r
      * @param {any}    value\r
      */\r`.slice(1);

  const parsed = parse(source);
  const aligned = align()(parsed[0]);
  const stringified = stringify(aligned);

  expect(stringified).toEqual(expected);
});
