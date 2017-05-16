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
import {
  createErrorObservable,
  createBabelErrorObservable
} from '../../common/app/redux/actions';
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
          challengeType: challengeNumber,
          type: challengeType
        }
      } = challengeSelector(state);
      if (challengeType === 'backend') {
        return buildBackendChallenge(state)
          .map(frameTests)
          .startWith(initOutput('// running test'));
      }
      /* this is a React Challenge: */
      if (challengeNumber === 8) {
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
          .catch(e => {
            const { name } = e;
            /* Catch any errors from above. If they look like a
             * transpilation error, throw an error toast for the
             * user. This allows us to avoid having a test for
             * successful code transilation on every challenge. */
            if (name === 'SyntaxError' || name === 'TypeError') {
              return createBabelErrorObservable(e);
            } else {
              console.log(name);
              console.warn('HEY! There is a new error!');
              return Observable.empty();
            }
          });
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
