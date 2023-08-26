import { TestScheduler } from 'rxjs/testing';
import completionEpic from './completion-epic';
import { submitChallenge, submitChallengeComplete } from './actions';

describe('completionEpic', () => {
  describe('signed out user', () => {
    const testScheduler = new TestScheduler((actual, expected) => {
      it('should dispatch submitChallengeComplete', () => {
        expect(actual).toEqual(expect.arrayContaining(expected));
      });
    });

    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot('a', {
        a: submitChallenge()
      });
      const state$ = {
        value: {
          challenge: { challengeMeta: { challengeType: 0 } },
          app: { user: { username: 'test' } }
        }
      };

      const output$ = completionEpic(action$, state$);

      expectObservable(output$).toBe('a', {
        a: submitChallengeComplete()
      });
    });
  });
});
