import { Scheduler, Observable } from 'rx';

import {
  buildClassic,
  buildBackendChallenge
} from '../utils/build.js';
import { ofType } from '../../common/utils/get-actions-of-type.js';
import {
  challengeSelector
} from '../../common/app/routes/challenges/redux/selectors';
import types from '../../common/app/routes/challenges/redux/types';
import { createErrorObservable } from '../../common/app/redux/actions';
import {
  frameMain,
  frameTests,
  initOutput,
  saveCode
} from '../../common/app/routes/challenges/redux/actions';

export default function buildChallengeEpic(actions, getState) {
  return actions
    ::ofType(types.executeChallenge, types.updateMain)
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
