/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest';
import type { ChallengeFile } from '@freecodecamp/shared/utils/polyvinyl';
import { buildSourceMap, getTSConfig } from './build';

vi.mock('./typescript-worker-handler.js', () => ({
  compileTypeScriptCode: () => Promise.resolve('const compiled = true;'),
  setupTSCompiler: () => Promise.resolve(true)
}));

describe('getTSConfig', () => {
  it("should return the tsconfig file's contents if it exists", () => {
    const compileOptions = 'any string is valid here';
    const challengeFiles = [
      { name: 'index', ext: 'ts' },
      { name: 'tsconfig', ext: 'json', contents: compileOptions }
    ] as ChallengeFile[];

    expect(getTSConfig(challengeFiles)).toEqual(compileOptions);
  });

  it('should return null if there is no tsconfig file', () => {
    const challengeFiles = [
      { name: 'index', ext: 'ts' },
      { name: 'app', ext: 'ts' }
    ] as ChallengeFile[];

    expect(getTSConfig(challengeFiles)).toBeNull();
  });

  it('should throw an error if there are multiple tsconfig.json files', () => {
    const challengeFiles = [
      { name: 'index', ext: 'ts' },
      { name: 'tsconfig', ext: 'json' },
      { name: 'tsconfig', ext: 'json' }
    ] as ChallengeFile[];

    expect(() => getTSConfig(challengeFiles)).toThrow(
      'TypeScript challenge must include only one tsconfig.json file'
    );
  });
});

describe('buildSourceMap', () => {
  it('joins source files with newlines', () => {
    const challengeFiles = [
      {
        source: 'html'
      },
      {
        source: 'css'
      },
      {
        source: 'ts'
      }
    ];

    const sourceContents = buildSourceMap(challengeFiles)?.contents;

    expect(sourceContents).toEqual('html\ncss\nts');
  });
});
