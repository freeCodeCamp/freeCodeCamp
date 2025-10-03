import { describe, beforeAll, beforeEach, it, expect } from 'vitest';
import parseFixture from '../__fixtures__/parse-fixture';

import addBeforeHook from './add-hooks';

describe('add-before-hook plugin', () => {
  let withBeforeHookAST,
    withInvalidHookAST,
    withAnotherInvalidHookAST,
    withNonJSHookAST,
    withBeforeEachHookAST,
    withInvalidBeforeEachHookAST,
    withAnotherInvalidBeforeEachHookAST,
    withNonJSBeforeEachHookAST,
    withAfterEachHookAST,
    withInvalidAfterEachHookAST,
    withAnotherInvalidAfterEachHookAST,
    withNonJSAfterEachHookAST,
    withAfterAllHookAST,
    withInvalidAfterAllHookAST,
    withAnotherInvalidAfterAllHookAST,
    withNonJSAfterAllHookAST;

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
    withAfterEachHookAST = await parseFixture('with-after-each-hook.md');
    withInvalidAfterEachHookAST = await parseFixture(
      'with-invalid-after-each-hook.md'
    );
    withAnotherInvalidAfterEachHookAST = await parseFixture(
      'with-another-invalid-after-each-hook.md'
    );
    withNonJSAfterEachHookAST = await parseFixture(
      'with-non-js-after-each-hook.md'
    );
    withAfterAllHookAST = await parseFixture('with-after-all-hook.md');
    withInvalidAfterAllHookAST = await parseFixture(
      'with-invalid-after-all-hook.md'
    );
    withAnotherInvalidAfterAllHookAST = await parseFixture(
      'with-another-invalid-after-all-hook.md'
    );
    withNonJSAfterAllHookAST = await parseFixture(
      'with-non-js-after-all-hook.md'
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
      `# --before-all-- section must only contain a single code block`
    );
  });

  it('should throw an error if the beforeAll section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidHookAST, file)).toThrow(
      `# --before-all-- section must contain a code block`
    );
  });

  it('should throw an error if the code language is not javascript', () => {
    expect(() => plugin(withNonJSHookAST, file)).toThrow(
      `# --before-all-- hook must be written in JavaScript`
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
      `# --before-each-- section must only contain a single code block`
    );
  });

  it('should throw an error if the beforeEach section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidBeforeEachHookAST, file)).toThrow(
      `# --before-each-- section must contain a code block`
    );
  });

  it('should throw an error if the beforeEach code language is not javascript', () => {
    expect(() => plugin(withNonJSBeforeEachHookAST, file)).toThrow(
      `# --before-each-- hook must be written in JavaScript`
    );
  });

  it('populates `hooks.afterEach` with the contents of the code block', () => {
    plugin(withAfterEachHookAST, file);
    expect(file.data.hooks.afterEach).toBe(`// after each code
function cleanup() {
  return 'cleaned up';
}
cleanup();`);
  });

  it('should throw an error if the afterEach section has more than one child', () => {
    expect(() => plugin(withInvalidAfterEachHookAST, file)).toThrow(
      `# --after-each-- section must only contain a single code block`
    );
  });

  it('should throw an error if the afterEach section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidAfterEachHookAST, file)).toThrow(
      `# --after-each-- section must contain a code block`
    );
  });

  it('should throw an error if the afterEach code language is not javascript', () => {
    expect(() => plugin(withNonJSAfterEachHookAST, file)).toThrow(
      `# --after-each-- hook must be written in JavaScript`
    );
  });

  it('populates `hooks.afterAll` with the contents of the code block', () => {
    plugin(withAfterAllHookAST, file);
    expect(file.data.hooks.afterAll).toBe(`// after all code
function teardown() {
  return 'cleaned up';
}
teardown();`);
  });

  it('should throw an error if the afterAll section has more than one child', () => {
    expect(() => plugin(withInvalidAfterAllHookAST, file)).toThrow(
      `# --after-all-- section must only contain a single code block`
    );
  });

  it('should throw an error if the afterAll section does not contain a code block', () => {
    expect(() => plugin(withAnotherInvalidAfterAllHookAST, file)).toThrow(
      `# --after-all-- section must contain a code block`
    );
  });

  it('should throw an error if the afterAll code language is not javascript', () => {
    expect(() => plugin(withNonJSAfterAllHookAST, file)).toThrow(
      `# --after-all-- hook must be written in JavaScript`
    );
  });
});
