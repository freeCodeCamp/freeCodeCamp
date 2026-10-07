const { parse, inspect } = require('../../lib/index.cjs');

const source = `
  /**
   * @param {Function} [processor=data => data] A function to run
   */`;

test('default', () => {
  const parsed = parse(source);
  // console.log(inspect(parsed[0]));

  expect(parsed[0].problems).toEqual([]);
  expect(parsed[0].tags[0]).toMatchObject({
    name: 'processor',
    default: 'data => data',
    optional: true,
    description: 'A function to run',
    problems: [],
  });
});
