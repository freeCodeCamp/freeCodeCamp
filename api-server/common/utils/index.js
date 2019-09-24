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

export function dashify(str) {
  return ('' + str)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-.]/gi, '')
    .replace(/:/g, '');
}
// todo: unify with server/utils/index.js:dasherize
const dasherize = dashify;
export { dasherize };

export const fixCompletedChallengeItem = obj =>
  pick(obj, [
    'id',
    'completedDate',
    'solution',
    'githubLink',
    'challengeType',
    'files'
  ]);
