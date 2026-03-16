import envData from '../../config/env.json';

const { curriculumLocale, githubLocation } = envData;

export const generateGithubLink = (challengeId: string, block: string) => {
  const repository =
    curriculumLocale === 'english' ? '/freeCodeCamp' : '/i18n-curriculum';
  const gitURL = new URL(githubLocation);

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
