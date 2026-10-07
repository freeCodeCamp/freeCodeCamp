const {
  parse,
  stringify,
  transforms: { align },
} = require('../../lib/index.cjs');

test('align - collapse postDelim', () => {
  const source = `
    /**
     * Description may go
     * over multiple lines followed by @tags
     *        @param {string} name the name parameter
     * @param {any} value the value parameter
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
