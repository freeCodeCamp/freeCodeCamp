/**
 * @vitest-environment jsdom
 */

import { describe, expect, it, vi } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import type { ChallengeFile } from '@freecodecamp/shared/utils/polyvinyl';
import { buildChallenge, getTSConfig } from './build';

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

describe('buildChallenge', () => {
  it('separates source files when building the test runner source map', async () => {
    const challengeFiles = [
      {
        name: 'index',
        ext: 'html',
        contents:
          '<!doctype html><html><head><link rel="stylesheet" href="styles.css"></head><body><script src="index.ts"></script></body></html>',
        fileKey: 'indexhtml',
        history: ['index.html']
      },
      {
        name: 'styles',
        ext: 'css',
        contents: '',
        fileKey: 'stylescss',
        history: ['styles.css']
      },
      {
        name: 'index',
        ext: 'ts',
        contents: 'interface FlashCard {}',
        fileKey: 'indexts',
        history: ['index.ts']
      }
    ] as ChallengeFile[];

    const result = await buildChallenge(
      {
        challengeType: challengeTypes.lab,
        challengeFiles,
        required: [],
        template: '',
        url: ''
      },
      {
        preview: false,
        disableLoopProtectTests: true,
        disableLoopProtectPreview: true
      }
    );

    expect(result.sources?.contents).toContain(
      '</html>\n\ninterface FlashCard {}'
    );
  });
});
