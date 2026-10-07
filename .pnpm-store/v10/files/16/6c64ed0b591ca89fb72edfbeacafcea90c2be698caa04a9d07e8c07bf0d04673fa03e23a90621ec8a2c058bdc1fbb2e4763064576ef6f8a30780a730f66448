const { parse, inspect } = require('../../lib/index.cjs');

const source = `
  /**
   * Typedef with multi-line property type.
   *
   * @typedef {object} MyType
   * @property {function(
   *   number,
   *   {x:string}
   * )} numberEater Method
   *    which takes a number.
   */`;

test('default', () => {
  const parsed = parse(source);
  // console.log(inspect(parsed[0]));
  expect(parsed[0].tags[1]).toMatchObject({
    tag: 'property',
    type: 'function(number,{x:string})',
    name: 'numberEater',
    description: 'Method which takes a number.',
    problems: [],
  });
});

test('preserve', () => {
  const parsed = parse(source, { spacing: 'preserve' });
  // console.log(inspect(parsed[0]));
  expect(parsed[0].tags[1]).toMatchObject({
    tag: 'property',
    type: 'function(\n  number,\n  {x:string}\n)',
    name: 'numberEater',
    description: 'Method\n   which takes a number.',
    problems: [],
  });
});

test('compact', () => {
  const parsed = parse(source, { spacing: 'compact' });
  // console.log(inspect(parsed[0]));
  expect(parsed[0].tags[1]).toMatchObject({
    tag: 'property',
    type: 'function(number,{x:string})',
    name: 'numberEater',
    description: 'Method which takes a number.',
    problems: [],
  });
});
