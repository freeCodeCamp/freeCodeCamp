import dedent from 'dedent';
import debugFactory from 'debug';
import { Observable } from 'rx';

import commitGoals from './commit-goals.json';
const debug = debugFactory('freecc:utils/commit');

export { commitGoals };

export function completeCommitment$(user) {
  const {
    isFrontEndCert,
    isDataVisCert,
    isBackEndCert,
    isFullStackCert
  } = user;

  return Observable.fromNodeCallback(user.pledge, user)()
    .flatMap(pledge => {
      if (!pledge) {
        return Observable.just('No pledge found');
      }

      const { goal } = pledge;

      if (
        (isFrontEndCert && goal === commitGoals.frontEndCert) ||
        (isDataVisCert && goal === commitGoals.dataVisCert) ||
        (isBackEndCert && goal === commitGoals.backEndCert) ||
        (isFullStackCert && goal === commitGoals.fullStackCert)
      ) {
        debug('marking goal complete');
        pledge.isCompleted = true;
        pledge.dateEnded = new Date();
        pledge.formerUserId = pledge.userId;
        pledge.userId = null;
        return Observable.fromNodeCallback(pledge.save, pledge)();
      }
      return Observable.just(dedent`
        You have not yet reached your goal of completing the ${goal}
        Please retry when you have met the requirements.
      `);
    });
}
