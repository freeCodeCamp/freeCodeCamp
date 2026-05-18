import { describe, expect, it } from 'vitest';
import { getTSConfig } from './build';
import { ChallengeFile } from '@freecodecamp/shared/utils/polyvinyl';

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
