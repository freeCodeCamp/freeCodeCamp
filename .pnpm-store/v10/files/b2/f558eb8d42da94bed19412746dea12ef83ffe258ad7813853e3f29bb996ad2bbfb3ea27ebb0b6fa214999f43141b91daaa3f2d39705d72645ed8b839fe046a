const { parse, inspect } = require('../../lib/index.cjs');

const source = `
  /** Multi-line typedef for an options object type.
   *
   * @typedef {{
   *   prop: number
   * }} MyOptions description text
   */`;

test('name after multiline tag', () => {
  const parsed = parse(source);
  // console.log(inspect(parsed[0]));

  expect(parsed[0].problems).toEqual([]);
  expect(parsed[0].tags[0]).toMatchObject({
    tag: 'typedef',
    name: 'MyOptions',
    type: '{prop: number}',
    description: 'description text',
    problems: [],
  });
});
