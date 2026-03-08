import { describe, it, expect, vi } from 'vitest';
import i18n from '../../../../i18n/config-for-tests';
import { generateGithubLink } from './source-modal';
import * as exports from '../../../../config/env.json';

vi.unmock('react-i18next');

describe('generateGitHubLink', () => {
  it('should return a link to a challenge for an english block', async () => {
    await i18n.reloadResources('en', 'intro');
    const link = generateGithubLink(
      '5d5a813321b9e3db6c106a46',
      'learn-basic-javascript-by-building-a-role-playing-game'
    );

    expect(link).toBe(
      'https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/challenges/english/blocks/learn-basic-javascript-by-building-a-role-playing-game/5d5a813321b9e3db6c106a46.md'
    );
  });

  it('should return a link for a challenge in the Spanish curriculum', () => {
    vi.spyOn(exports, 'curriculumLocale', 'get').mockReturnValue('espanol');
    const link = generateGithubLink(
      '5d5a813321b9e3db6c106a46',
      'learn-basic-javascript-by-building-a-role-playing-game'
    );

    expect(link).toBe(
      'https://github.com/freeCodeCamp/i18n-curriculum/blob/main/curriculum/challenges/espanol/blocks/learn-basic-javascript-by-building-a-role-playing-game/5d5a813321b9e3db6c106a46.md'
    );
  });
});
