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
    'isManuallyApproved'
  ]);

export const fixPartiallyCompletedChallengeItem = obj =>
  pick(obj, ['id', 'completedDate']);
