import { challengeFiles } from '../../../utils/__fixtures__/challenges';
import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';

const baseChallenge = {
  id: '1',
  completedDate: 1,
  challengeFiles: []
};

export const onlySolution = {
  ...baseChallenge,
  solution: 'https://some-url.com'
};

export const legacySolution = {
  ...baseChallenge,
  solution: 'var x = 1;'
};

export const bothLinks = {
  ...baseChallenge,
  githubLink: 'https://some.thing',
  solution: 'https://some-url.com'
};

export const withChallenges = {
  ...bothLinks,
  challengeFiles
};

export const multifileSolution = {
  ...withChallenges,
  challengeType: challengeTypes.multifileCertProject
};

export const multifilePythonSolution = {
  ...withChallenges,
  challengeType: challengeTypes.multifilePythonCertProject
};

export const onlyGithubLink = {
  ...baseChallenge,
  githubLink: 'https://some.thing'
};

export const invalidGithubLink = {
  ...baseChallenge,
  githubLink: 'something',
  solution: 'https://some-url.com'
};

export const examResults = {
  ...baseChallenge,
  examResults: {
    numberOfQuestionsInExam: 50,
    numberOfCorrectAnswers: 40,
    passed: true,
    examTimeInSeconds: 1800,
    percentCorrect: 0.9,
    passingPercent: 0.8
  }
};

export const examDownload = {
  ...baseChallenge,
  challengeType: challengeTypes.examDownload
};

export const examResultsAndDownload = {
  ...baseChallenge,
  challengeType: challengeTypes.examDownload,
  examResults: {
    numberOfQuestionsInExam: 50,
    numberOfCorrectAnswers: 40,
    passed: true,
    examTimeInSeconds: 1800,
    percentCorrect: 0.9,
    passingPercent: 0.8
  }
};
