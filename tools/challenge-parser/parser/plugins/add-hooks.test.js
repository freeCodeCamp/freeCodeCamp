const parseFixture = require('../__fixtures__/parse-fixture');

const addHooks = require('./add-hooks');

const beforeEachCode = `// before each code
function foo() {
  return 'bar';
}
foo();`;

const beforeAllCode = `// before all code
function foo() {
  return 'bar';
}
foo();`;

describe('add-hooks plugin', () => {
  describe('beforeAll', () => {
    let withBeforeHookAST,
      withEmptyHookAST,
      withInvalidHookAST,
      withAnotherInvalidHookAST,
      withNonJSHookAST;

    const plugin = addHooks(['beforeAll']);
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
      expect(file.data.hooks.beforeAll).toBe(beforeAllCode);
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

  // The only differences between the beforeEach and beforeAll tests are the
  // hook property and the heading that the plugin looks for. For brevity, we
  // only test those differences.
  describe('beforeEach', () => {
    let withBeforeEachAST;

    const plugin = addHooks(['beforeEach']);
    let file = { data: {} };

    beforeAll(async () => {
      withBeforeEachAST = await parseFixture('with-before-each-hook.md');
    });

    beforeEach(() => {
      file = { data: {} };
    });

    it('populates `hooks.beforeEach` with the contents of the code block', () => {
      plugin(withBeforeEachAST, file);
      expect(file.data.hooks.beforeEach).toBe(beforeEachCode);
    });

    it('should add to the hooks object, not replace it', () => {
      file.data.hooks = { beforeAll: 'before all code' };
      plugin(withBeforeEachAST, file);
      expect(file.data.hooks.beforeAll).toBe('before all code');
      expect(file.data.hooks.beforeEach).toBe(beforeEachCode);
    });
  });

  describe('all hooks', () => {
    let withBothHooksAST, withBeforeEachAST;
    const plugin = addHooks(['beforeAll', 'beforeEach']);
    let file = { data: {} };

    beforeAll(async () => {
      withBothHooksAST = await parseFixture('with-hooks.md');
      withBeforeEachAST = await parseFixture('with-before-each-hook.md');
    });

    beforeEach(() => {
      file = { data: {} };
    });

    it('populates all hooks', () => {
      plugin(withBothHooksAST, file);
      expect(file.data.hooks).toStrictEqual({
        beforeAll: beforeAllCode,
        beforeEach: beforeEachCode
      });
    });

    it('handles empty hooks', () => {
      plugin(withBeforeEachAST, file);
      expect(file.data.hooks).toStrictEqual({
        beforeEach: beforeEachCode
      });
    });
  });
});
