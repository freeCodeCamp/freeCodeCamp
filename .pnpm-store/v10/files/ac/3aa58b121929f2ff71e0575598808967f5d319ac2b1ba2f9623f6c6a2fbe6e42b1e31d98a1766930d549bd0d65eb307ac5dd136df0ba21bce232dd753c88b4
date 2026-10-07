const { parse, stringify } = require('../../lib/index.cjs');

test('preserve formatting', () => {
  const source = `
  /**
* @my-tag {my.type} my-name description line 1
      description line 2
    * description line 3
   */`;
  const parsed = parse(source);
  const out = stringify(parsed[0]);
  expect(out).toBe(source.slice(1));
});
