import { describe, it, expect, vi, afterEach } from 'vitest';

vi.unmock('react-i18next');

describe('generateGitHubLink', () => {
  afterEach(() => vi.resetModules());
  it('should return a link to a challenge for an english block', async () => {
    vi.doMock('../../../../config/env.json', () => ({
      default: {
        curriculumLocale: 'english',
        githubLocation: 'https://github.com/freeCodeCamp/'
      }
    }));
    const { generateGithubLink } = await import('./source-modal');
    const link = generateGithubLink(
      '5d5a813321b9e3db6c106a46',
      'learn-basic-javascript-by-building-a-role-playing-game'
    );

    expect(link).toBe(
      'https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/english/blocks/learn-basic-javascript-by-building-a-role-playing-game/5d5a813321b9e3db6c106a46.md'
    );
  });

  it('should return a link for a challenge in the Spanish curriculum', async () => {
    vi.doMock('../../../../config/env.json', () => ({
      default: {
        curriculumLocale: 'espanol',
        githubLocation: 'https://github.com/freeCodeCamp/'
      }
    }));
    const { generateGithubLink } = await import('./source-modal');

    const link = generateGithubLink(
      '5d5a813321b9e3db6c106a46',
      'learn-basic-javascript-by-building-a-role-playing-game'
    );

    expect(link).toBe(
      'https://github.com/freeCodeCamp/i18n-curriculum/blob/main/curriculum/challenges/espanol/blocks/learn-basic-javascript-by-building-a-role-playing-game/5d5a813321b9e3db6c106a46.md'
    );
  });
});
