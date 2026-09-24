import { describe, expect, it } from 'vitest';
import { BlockLabel } from '@freecodecamp/shared/config/blocks';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import {
  getProjectChallengeType,
  getProjectSeedFiles,
  projectContentTypeChoices
} from './project-content-type.js';

describe('project content types', () => {
  it.each([
    ['html', challengeTypes.lab, challengeTypes.html, ['html']],
    ['html-css', challengeTypes.lab, challengeTypes.html, ['html', 'css']],
    [
      'html-css-js',
      challengeTypes.lab,
      challengeTypes.html,
      ['html', 'css', 'js']
    ],
    [
      'html-css-jsx',
      challengeTypes.lab,
      challengeTypes.html,
      ['html', 'css', 'jsx']
    ],
    [
      'html-css-ts',
      challengeTypes.lab,
      challengeTypes.html,
      ['html', 'css', 'ts']
    ],
    [
      'html-css-tsx',
      challengeTypes.lab,
      challengeTypes.html,
      ['html', 'css', 'tsx']
    ],
    ['javascript', challengeTypes.jsLab, challengeTypes.js, ['js']],
    ['typescript', challengeTypes.jsLab, challengeTypes.js, ['ts']],
    ['python', challengeTypes.pyLab, challengeTypes.python, ['py']]
  ] as const)(
    'maps %s to its lab and workshop challenge types',
    (contentType, labChallengeType, workshopChallengeType, extensions) => {
      expect(getProjectChallengeType(BlockLabel.lab, contentType)).toBe(
        labChallengeType
      );
      expect(getProjectChallengeType(BlockLabel.workshop, contentType)).toBe(
        workshopChallengeType
      );
      expect(
        getProjectSeedFiles(contentType, 'Test Project').map(file => file.ext)
      ).toEqual(extensions);
    }
  );

  it('provides the supported content-type choices', () => {
    expect(projectContentTypeChoices.map(({ name }) => name)).toEqual([
      'HTML',
      'HTML/CSS',
      'HTML/CSS/JS',
      'HTML/CSS/JSX',
      'HTML/CSS/TS',
      'HTML/CSS/TSX',
      'JavaScript',
      'TypeScript',
      'Python'
    ]);
  });

  it('includes React bootstrapping for JSX and TSX projects', () => {
    for (const contentType of ['html-css-jsx', 'html-css-tsx'] as const) {
      const files = getProjectSeedFiles(contentType, 'Test Project');
      expect(files[0].contents).toContain('ReactDOM.createRoot');
      expect(files[0].contents).toContain('<div id="root"></div>');
      expect(files[files.length - 1].contents).toContain(
        'export function App()'
      );
    }
  });
});
