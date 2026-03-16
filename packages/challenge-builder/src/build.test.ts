import { describe, expect, it } from 'vitest';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import {
  createPoly,
  type ChallengeFile
} from '@freecodecamp/shared/utils/polyvinyl';

import { buildChallenge } from './build';

const buildOptions = {
  preview: false,
  disableLoopProtectTests: true,
  disableLoopProtectPreview: true
};

describe('buildChallenge', () => {
  it('throws when legacy before/after user code fields are present', async () => {
    const challengeFile = createPoly({
      name: 'script',
      ext: 'js',
      contents: 'const answer = 42;',
      head: 'const setup = true;',
      tail: ''
    }) as ChallengeFile;

    await expect(
      buildChallenge(
        {
          challengeType: challengeTypes.js,
          challengeFiles: [challengeFile],
          required: [],
          template: '',
          url: ''
        },
        buildOptions
      )
    ).rejects.toThrow(
      'Legacy # --before-user-code-- / # --after-user-code-- sections are no longer supported.'
    );
  });
});
