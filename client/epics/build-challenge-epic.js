import { Scheduler, Observable } from 'rx';
import { ofType } from 'redux-epic';

import {
  buildClassic,
  buildBackendChallenge
} from '../utils/build.js';
import {
  types,
  createErrorObservable
} from '../../common/app/redux';
import {
  frameMain,
  frameTests,
  initOutput,
  saveCode,

  challengeSelector
} from '../../common/app/routes/challenges/redux';

export default function buildChallengeEpic(actions, { getState }) {
  return actions::ofType(types.executeChallenge, types.updateMain)
    // if isCodeLocked do not run challenges
    .filter(() => !getState().challengesApp.isCodeLocked)
    .debounce(750)
    .flatMapLatest(({ type }) => {
      const shouldProxyConsole = type === types.updateMain;
      const state = getState();
      const { files } = state.challengesApp;
      const {
        challenge: {
          required = [],
          type: challengeType
        }
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
        .catch(createErrorObservable);
    });
}
