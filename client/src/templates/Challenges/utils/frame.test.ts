/**
 * @vitest-environment jsdom
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { prefixDoctype } from '@freecodecamp/challenge-builder/build';

import { prepTestRunner } from './frame';

type CreateTestRunnerArgs = {
  type: 'dom' | 'javascript' | 'python';
  code: { index: string; editableContents: string };
  source: string;
  assetPath: string;
};

describe('prepTestRunner', () => {
  const createTestRunner =
    vi.fn<(args: CreateTestRunnerArgs) => Promise<void>>();

  beforeEach(() => {
    vi.resetAllMocks();
    window.FCCTestRunner = {
      createTestRunner,
      getRunner: vi.fn()
    } as unknown as Window['FCCTestRunner'];
  });

  it('uses final built source for javascript challenges', async () => {
    const build = '"use strict";\nfunction _readOnlyError() {}\n';
    const sources = {
      index: 'const person = {};',
      editableContents: 'const person = {};'
    };

    await prepTestRunner({
      build,
      sources,
      type: 'javascript'
    });

    expect(createTestRunner).toHaveBeenCalledTimes(1);
    expect(createTestRunner).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'javascript',
        code: sources,
        source: build
      })
    );
  });

  it('uses doctype-prefixed built source for dom challenges', async () => {
    const build =
      '<html><head></head><body><script>console.log(1)</script></body></html>';
    const sources = {
      index: '<!DOCTYPE html><html><head></head><body></body></html>',
      editableContents: ''
    };

    await prepTestRunner({
      build,
      sources,
      type: 'dom'
    });

    expect(createTestRunner).toHaveBeenCalledTimes(1);
    expect(createTestRunner).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'dom',
        code: sources,
        source: prefixDoctype({ build, sources })
      })
    );
  });
});
