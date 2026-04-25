import envData from '../../config/env.json';
import { GITHUB_LOCATION } from '../../config/misc';

const { curriculumLocale } = envData;

export const generateGithubLink = (challengeId: string, block: string) => {
  const repository =
    curriculumLocale === 'english' ? '/freeCodeCamp' : '/i18n-curriculum';
  const gitURL = new URL(GITHUB_LOCATION);

  gitURL.pathname =
    gitURL.pathname +
    [
      repository,
      'blob/main/curriculum/challenges',
      curriculumLocale,
      'blocks',
      block,
      `${challengeId}.md`
    ].join('/');
  return gitURL.toString();
};
