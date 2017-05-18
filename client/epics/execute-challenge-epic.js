import { Scheduler, Observable } from 'rx';

import { ofType } from 'redux-epic';

import {
  buildClassic,
  buildBackendChallenge
} from '../utils/build.js';
import {
  createErrorObservable,

  challengeSelector
} from '../../common/app/redux';
import {
  types,

  frameMain,
  frameTests,
  initOutput,
  saveCode,

  filesSelector,
  codeLockedSelector
} from '../../common/app/routes/challenges/redux';

export default function executeChallengeEpic(actions, { getState }) {
  return actions::ofType(types.executeChallenge, types.updateMain)
    // if isCodeLocked do not run challenges
    .filter(() => !codeLockedSelector(getState()))
    .debounce(750)
    .flatMapLatest(({ type }) => {
      const shouldProxyConsole = type === types.updateMain;
      const state = getState();
      const files = filesSelector(state);
      const {
        required = [],
        type: challengeType
      } = challengeSelector(state);
      if (challengeType === 'backend') {
        return buildBackendChallenge(state)
          .map(frameTests)
          .startWith(initOutput('// running test'));
      }
      return buildClassic(files, required, shouldProxyConsole)
        .flatMap(payload => {
          const actions = [
            frameMain(payload)
          ];
          if (type === types.executeChallenge) {
            actions.push(saveCode(), frameTests(payload));
          }
          return Observable.from(actions, null, null, Scheduler.default);
        })
        .startWith((
          type === types.executeChallenge ?
            initOutput('// running test') :
            null
        ))
        .filter(Boolean)
        .catch(createErrorObservable);
    });
}
