import {
  hasCR,
  isSpace,
  seedTokens,
  seedBlock,
  splitLines,
  splitSpace,
  seedSpec,
} from '../../src/util.js';

test.each([
  ['beginning', '\r to end', false],
  ['middle', 'has \r in middle', false],
  ['ending', 'only at end \r', true],
  ['none', 'no carriage returns', false],
])('carriage returns - %s', (name, source, boolResult) => {
  expect(hasCR(source)).toEqual(boolResult);
});

test.each([
  ['win', 'a\r\nb\r\nc', ['a\r', 'b\r', 'c']],
  ['unix', 'a\nb\nc', ['a', 'b', 'c']],
  ['mixed', 'a\nb\r\nc', ['a', 'b\r', 'c']],
  ['none', 'abc', ['abc']],
])('spliLines - %s', (name, source, parsed) =>
  expect(splitLines(source)).toEqual(parsed)
);

test.each([
  ['pre', '  abc', ['  ', 'abc']],
  ['pre', 'abc  ', ['', 'abc  ']],
  ['pre+post', '  abc  ', ['  ', 'abc  ']],
  ['none', 'abc', ['', 'abc']],
])('spliSpace - %s', (name, source, parsed) =>
  expect(splitSpace(source)).toEqual(parsed)
);

test.each([
  ['space', ' ', true],
  ['spaces', '  ', true],
  ['tab', '\t', true],
  ['tabs', '\t\t', true],
  ['line end', '\n', true],
  ['line ends', '\n\n', true],
  ['line return', '\r', true],
  ['line returns', '\r\r', true],
  ['mixed space', '\n\r\t', true],
  ['mixed', '\naba', false],
  ['alpahnumeric', '1abcd34', false],
  ['symbols', '*', false],
  ['empty', '', false],
])('isSpace - %s', (name, source, result) =>
  expect(isSpace(source)).toBe(result)
);

test('seedTokens defaults', () => {
  expect(seedTokens()).toEqual({
    start: '',
    delimiter: '',
    postDelimiter: '',
    tag: '',
    postTag: '',
    name: '',
    postName: '',
    type: '',
    postType: '',
    description: '',
    end: '',
    lineEnd: '',
  });
});

test('seedTokens overrides', () => {
  expect(seedTokens({ description: 'abc' })).toEqual({
    start: '',
    delimiter: '',
    postDelimiter: '',
    tag: '',
    postTag: '',
    name: '',
    postName: '',
    type: '',
    postType: '',
    description: 'abc',
    end: '',
    lineEnd: '',
  });
});

test('seedBlock defaults', () => {
  expect(seedBlock()).toEqual({
    description: '',
    tags: [],
    source: [],
    problems: [],
  });
});

test('seedBlock overrides', () => {
  expect(seedBlock({ description: 'abc' })).toEqual({
    description: 'abc',
    tags: [],
    source: [],
    problems: [],
  });
});

test('seedSpec defaults', () => {
  expect(seedSpec()).toEqual({
    tag: '',
    name: '',
    type: '',
    optional: false,
    description: '',
    problems: [],
    source: [],
  });
});

test('seedSpec overrides', () => {
  expect(seedSpec({ description: 'abc' })).toEqual({
    tag: '',
    name: '',
    type: '',
    optional: false,
    description: 'abc',
    problems: [],
    source: [],
  });
});
