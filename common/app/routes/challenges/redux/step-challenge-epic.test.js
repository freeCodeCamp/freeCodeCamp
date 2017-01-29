import { Observable, config } from 'rx';
import test from 'tape';
import proxy from 'proxyquire';
import sinon from 'sinon';
import types from './types';

config.longStackSupport = true;
const challengeSelectorStub = {};
const stepChallengeEpic = proxy(
  './step-challenge-epic',
  { './selectors': challengeSelectorStub }
);

const file = 'common/app/routes/challenges/redux/step-challenge-epic';
test(file, function(t) {
  t.test('does not respond to random actions', t => {
    const actions = Observable.of({ type: 'NotTheMomma' });
    let called = false;
    stepChallengeEpic(actions, () => {})
      .subscribe(
        () => { called = true; },
        e => t.fail(e),
        () => {
          if (!called) {
            t.pass();
          } else {
            t.fail(new Error('epic should not respond'));
          }
          t.end();
        }
      );
  });
  t.test('steps back', t => {
    const actions = Observable.of({ type: types.stepBackward });
    const state = {
      challengesApp: {
        currentIndex: 1,
        unlockedSteps: [ true, undefined ] // eslint-disable-line no-undefined
      }
    };
    const onNextSpy = sinon.spy();
    challengeSelectorStub.challengeSelector = sinon.spy(_state => {
      t.assert(_state === state, 'challenge selector not called with state');
      return {
        challenge: {
          description: new Array(2)
        }
      };
    });
    stepChallengeEpic(actions, () => state)
      .subscribe(
        onNextSpy,
        e => {
          throw e;
        },
        () => {
          t.assert(
            onNextSpy.calledOnce,
            'epic not called exactly once'
          );
          t.assert(
            onNextSpy.calledWithMatch({
              type: types.goToStep,
              payload: { step: 0, isUnlocked: true }
            }),
            'Epic did not return the expected action'
          );
          delete challengeSelectorStub.challengeSelector;
          t.end();
        }
      );
  });
  t.test('steps forward', t => {
    const actions = Observable.of({ type: types.stepForward });
    const state = {
      challengesApp: {
        currentIndex: 0,
        unlockedSteps: []
      }
    };
    const onNextSpy = sinon.spy();
    challengeSelectorStub.challengeSelector = sinon.spy(_state => {
      t.assert(_state === state, 'challenge selector not called with state');
      return {
        challenge: {
          description: new Array(2)
        }
      };
    });
    stepChallengeEpic(actions, () => state)
      .subscribe(
        onNextSpy,
        e => {
          throw e;
        },
        () => {
          t.assert(
            onNextSpy.calledOnce,
            'epic not called exactly once'
          );
          t.assert(
            onNextSpy.calledWithMatch({
              type: types.goToStep,
              payload: { step: 1, isUnlocked: false }
            }),
            'Epic did not return the expected action'
          );
          delete challengeSelectorStub.challengeSelector;
          t.end();
        }
      );
  });
  t.test('submits on last step forward', t => {
    const actions = Observable.of({ type: types.stepForward });
    const state = { challengesApp: { currentIndex: 1 } };
    const onNextSpy = sinon.spy();
    challengeSelectorStub.challengeSelector = sinon.spy(_state => {
      t.assert(_state === state, 'challenge selector not called with state');
      return {
        challenge: {
          description: new Array(2)
        }
      };
    });
    stepChallengeEpic(actions, () => state)
      .subscribe(
        onNextSpy,
        e => {
          throw e;
        },
        () => {
          t.assert(
            onNextSpy.calledOnce,
            'epic not called exactly once'
          );
          t.assert(
            onNextSpy.calledWithMatch({
              type: types.submitChallenge
            }),
            'Epic did not return the expected action'
          );
          delete challengeSelectorStub.challengeSelector;
          t.end();
        }
      );
  });
});
