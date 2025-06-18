const parseFixture = require('../__fixtures__/parse-fixture');

const addBeforeHook = require('./add-before-hook');

describe('add-before-hook plugin', () => {
  let withBeforeHookAST,
    withInvalidHookAST,
    withAnotherInvalidHookAST,
    withNonJSHookAST,
    withBeforeEachHookAST,
    withInvalidBeforeEachHookAST,
    withAnotherInvalidBeforeEachHookAST,
    withNonJSBeforeEachHookAST;

  const plugin = addBeforeHook();
  let file = { data: {} };

  beforeAll(async () => {
    withBeforeHookAST = await parseFixture('with-before-hook.md');
    withInvalidHookAST = await parseFixture('with-invalid-before-hook.md');
    withAnotherInvalidHookAST = await parseFixture(
      'with-another-invalid-before-hook.md'
    );
    withNonJSHookAST = await parseFixture('with-non-js-before-hook.md');
    withBeforeEachHookAST = await parseFixture('with-before-each-hook.md');
    withInvalidBeforeEachHookAST = await parseFixture(
      'with-invalid-before-each-hook.md'
    );
    withAnotherInvalidBeforeEachHookAST = await parseFixture(
      'with-another-invalid-before-each-hook.md'
    );
    withNonJSBeforeEachHookAST = await parseFixture(
      'with-non-js-before-each-hook.md'
    );
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

  it('populates `hooks.beforeEach` with the contents of the code block', () => {
    plugin(withBeforeEachHookAST, file);
    expect(file.data.hooks.beforeEach).toBe(`// before each code
function setup() {
  return 'initialized';
}
setup();`);
  });

  it('should throw an error if the beforeEach section has more than one child', () => {
    expect(() => plugin(withInvalidBeforeEachHookAST, file)).toThrow(
      `#--before-each-- section must only contain a single code block`
    );
  });

  it('should throw an error if the beforeEach section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidBeforeEachHookAST, file)).toThrow(
      `#--before-each-- section must contain a code block`
    );
  });

  it('should throw an error if the beforeEach code language is not javascript', () => {
    expect(() => plugin(withNonJSBeforeEachHookAST, file)).toThrow(
      `#--before-each-- hook must be written in JavaScript`
    );
  });
});
