import indent from '../../src/transforms/indent.js';
import getParser from '../../src/parser/index.js';
import getStringifier from '../../src/stringifier/index.js';

test('push', () => {
  const source = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   * 
* @my-tag {my.type} my-name description line 1
      description line 2
      * description line 3
   */`;

  const expected = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * 
  * @my-tag {my.type} my-name description line 1
        description line 2
        * description line 3
     */`;

  const parsed = getParser()(source);
  const out = getStringifier()(indent(4)(parsed[0]));
  expect(out).toBe(expected.slice(1));
});

test('pull', () => {
  const source = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * 
  * @my-tag {my.type} my-name description line 1
        description line 2
        * description line 3
     */`;

  const expected = `
  /**
   * Description may go
   * over multiple lines followed by @tags
   * 
* @my-tag {my.type} my-name description line 1
      description line 2
      * description line 3
   */`;

  const parsed = getParser()(source);
  const out = getStringifier()(indent(2)(parsed[0]));
  expect(out).toBe(expected.slice(1));
});

test('force pull', () => {
  const source = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     * 
  * @my-tag {my.type} my-name description line 1
        description line 2
        * description line 3
     */`;

  const expected = `
/**
 * Description may go
 * over multiple lines followed by @tags
 * 
* @my-tag {my.type} my-name description line 1
    description line 2
    * description line 3
 */`;

  const parsed = getParser()(source);
  const indented = indent(0)(parsed[0]);
  const out = getStringifier()(indented);
  expect(out).toBe(expected.slice(1));
});

test('spec source referencing', () => {
  const parsed = getParser()(`/** @tag {type} name Description */`);
  const block = indent(0)(parsed[0]);
  expect(block.tags[0].source[0] === block.source[0]).toBe(true);
});

test('block source clonning', () => {
  const parsed = getParser()(`/** @tag {type} name Description */`);
  const block = indent(0)(parsed[0]);
  parsed[0].source[0].tokens.description = 'test';
  expect(block.source[0].tokens.description).toBe('Description ');
});
