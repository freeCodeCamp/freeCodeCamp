import path from 'path';

import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { configure, processLintErrors } from './index.js';

const badYMLError = expect.objectContaining({
  errorContext: '```yml',
  errorDetail: expect.stringContaining(
    'bad indentation of a mapping entry at line 3, column 17'
  ),
  lineNumber: 19,
  ruleDescription: 'YAML code blocks should be valid',
  ruleNames: ['yaml-linter']
});

describe('markdown linter', () => {
  const good = path.join(__dirname, './fixtures/good.md');
  const badYML = path.join(__dirname, './fixtures/badYML.md');
  const badFencing = path.join(__dirname, './fixtures/badFencing.md');
  const configPath = path.join(__dirname, './fixtures/rules.yaml');
  let lint;

  beforeAll(() => {
    ({ lint } = configure(configPath));
  });
  beforeEach(() => {
    console.log = vi.fn();
  });

  it('should pass `good` markdown', async () => {
    const result = await lint([good]);
    expect(result[good]).toHaveLength(0);
  });

  it('should fail invalid YML blocks', async () => {
    const result = await lint([badYML]);
    expect(result[badYML]).not.toHaveLength(0);
  });

  it('should fail when code fences are not surrounded by newlines', async () => {
    const result = await lint([badFencing]);
    expect(result[badFencing]).not.toHaveLength(0);
  });

  it('should write to the console describing the problem', async () => {
    const results = await lint([badYML]);
    const errors = processLintErrors(results);

    expect(errors[0].file).toContain('badYML.md');
    expect(errors[0].errors).toEqual(expect.arrayContaining([badYMLError]));
  });
});
