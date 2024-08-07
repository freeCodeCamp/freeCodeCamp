import { pick } from 'lodash';

export {
  getEncodedEmail,
  decodeEmail,
  getWaitMessage,
  getWaitPeriod,
  renderEmailChangeEmail,
  renderSignUpEmail,
  renderSignInEmail
} from './auth';

export const fixCompletedChallengeItem = obj =>
  pick(obj, [
    'id',
    'completedDate',
    'solution',
    'githubLink',
    'challengeType',
    'files',
    'isManuallyApproved',
    'examResults'
  ]);

export const fixSavedChallengeItem = obj =>
  pick(obj, ['id', 'lastSavedDate', 'files']);

export const fixPartiallyCompletedChallengeItem = obj =>
  pick(obj, ['id', 'completedDate']);

export const fixCompletedExamItem = obj =>
  pick(obj, ['id', 'completedDate', 'challengeType', 'examResults']);

export const fixCompletedSurveyItem = obj => pick(obj, ['title', 'responses']);
