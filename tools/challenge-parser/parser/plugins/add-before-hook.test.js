const parseFixture = require('../__fixtures__/parse-fixture');

const addBeforeHook = require('./add-before-hook');

describe('add-before-hook plugin', () => {
  let withBeforeHookAST,
    withEmptyHookAST,
    withInvalidHookAST,
    withAnotherInvalidHookAST,
    withNonJSHookAST;

  const plugin = addBeforeHook();
  let file = { data: {} };

  beforeAll(async () => {
    withBeforeHookAST = await parseFixture('with-before-hook.md');
    withEmptyHookAST = await parseFixture('with-empty-before-hook.md');
    withInvalidHookAST = await parseFixture('with-invalid-before-hook.md');
    withAnotherInvalidHookAST = await parseFixture(
      'with-another-invalid-before-hook.md'
    );
    withNonJSHookAST = await parseFixture('with-non-js-before-hook.md');
  });

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `hooks` property to `file.data`', () => {
    plugin(withBeforeHookAST, file);
    expect('hooks' in file.data).toBe(true);
  });

  it('populates `hooks.beforeAll` with the contents of the code block', () => {
    plugin(withBeforeHookAST, file);
    expect(file.data.hooks.beforeAll).toBe(`// before all code
function foo() {
  return 'bar';
}
foo();`);
  });

  it('should throw an error if the beforeAll section has more than one child', () => {
    expect(() => plugin(withInvalidHookAST, file)).toThrow(
      `#--before-all-- section must only contain a single code block`
    );
  });

  it('should throw an error if the beforeAll section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidHookAST, file)).toThrow(
      `#--before-all-- section must contain a code block`
    );
  });

  it('should throw an error if the code language is not javascript', () => {
    expect(() => plugin(withNonJSHookAST, file)).toThrow(
      `#--before-all-- hook must be written in JavaScript`
    );
  });

  it('should have an output to match the snapshot', () => {
    plugin(withBeforeHookAST, file);
    expect(file.data).toMatchSnapshot();
  });
});
