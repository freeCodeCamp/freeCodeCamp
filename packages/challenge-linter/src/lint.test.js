import path from 'path';
import { describe, it, beforeEach, afterEach, expect, vi } from 'vitest';
import lint from './lint';

describe('markdown linter', () => {
  const good = { path: path.join(__dirname, './fixtures/good.md') };
  const badYML = { path: path.join(__dirname, './fixtures/badYML.md') };
  const badFencing = { path: path.join(__dirname, './fixtures/badFencing.md') };
  beforeEach(() => {
    console.log = vi.fn();
    // the linter signals that a file failed by setting
    // exitCode to 1, so it needs (re)setting to 0
    process.exitCode = 0;
  });
  afterEach(() => {
    process.exitCode = 0;
  });

  it('should pass `good` markdown', async () => {
    await new Promise(resolve => lint(good, resolve));
    expect(process.exitCode).toBe(0);
  });

  it('should fail invalid YML blocks', async () => {
    await new Promise(resolve => lint(badYML, resolve));
    expect(process.exitCode).toBe(1);
  });

  it('should fail when code fences are not surrounded by newlines', async () => {
    await new Promise(resolve => lint(badFencing, resolve));
    expect(process.exitCode).toBe(1);
  });

  it('should write to the console describing the problem', async () => {
    await new Promise(resolve => lint(badYML, resolve));

    const expected =
      'badYML.md: 19: yaml-linter YAML code blocks should be valid [bad indentation of a mapping entry at line 3, column 17:\n          testString: testString\n                    ^] [Context: "```yml"]';
    expect(console.log.mock.calls.length).toBe(1);
    expect(console.log.mock.calls[0][0]).toEqual(
      expect.stringContaining(expected)
    );
  });
});
