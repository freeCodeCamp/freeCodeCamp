const {
  parse,
  stringify,
  transforms: { flow, indent, align },
} = require('../../lib/index.cjs');

test('align + indent', () => {
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
     *                           description line 3
     */`;

  const parsed = parse(source);
  const transform = flow(indent(4), align());
  const out = stringify(transform(parsed[0]));
  expect(out).toBe(expected.slice(1));
});
