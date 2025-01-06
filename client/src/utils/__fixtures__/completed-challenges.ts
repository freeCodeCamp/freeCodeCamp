import { challengeFiles } from '../../../utils/__fixtures__/challenges';
import { challengeTypes } from '../../../../shared/config/challenge-types';

const baseChallenge = {
  id: '1',
  completedDate: 1,
  challengeFiles: []
}

export const onlySolution = {
  ...baseChallenge,
  solution: 'https://some-url.com'
}

export const legacySolution = {
  ...baseChallenge,
  solution: 'var x = 1;'
}

export const bothLinks = {
  ...baseChallenge,
  githubLink: 'https://some.thing',
  solution: 'https://some-url.com'
}

export const withChallenges = {
  ...bothLinks,
  challengeFiles
}

export const multifileSolution = {
  ...withChallenges,
  challengeType: challengeTypes.multifileCertProject
}

export const multifilePythonSolution = {
  ...withChallenges,
  challengeType: challengeTypes.multifilePythonCertProject
}

export const onlyGithubLink = {
  ...baseChallenge,
  githubLink: 'https://some.thing'
}

export const invalidGithubLink = {
  ...baseChallenge,
  githubLink: 'something',
  solution: 'https://some-url.com'
}
